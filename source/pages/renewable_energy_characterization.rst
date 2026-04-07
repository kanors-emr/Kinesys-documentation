####################################
Renewable Energy Characterization
####################################

KiNESYS employs a sophisticated spatial clustering methodology to represent variable renewable energy (VRE) resources with high temporal and spatial resolution. This approach captures the diversity of solar and wind resource quality within countries, enabling accurate representation of supply curves, grid integration costs, and storage requirements.

.. contents:: Table of Contents
   :local:
   :depth: 3

Overview
========

Variable renewable energy resources exhibit significant spatial heterogeneity within countries:

- **Solar**: Capacity factors range from 10-25% depending on latitude, climate, and local conditions
- **Wind Onshore**: Coastal and elevated areas may have 2-3x higher capacity factors than inland plains
- **Wind Offshore**: Resource quality varies with distance from shore, water depth, and wind patterns

Capturing this heterogeneity is essential for:

- **Accurate supply curves**: Higher-quality resources are developed first, with costs increasing as lower-quality sites are utilized
- **Grid integration analysis**: Resources with different temporal profiles have different integration costs and storage requirements
- **Regional transmission planning**: Distance from resources to demand centers affects total system costs
- **Climate sensitivity**: Multi-year weather data reveals resource variability across different meteorological conditions

KiNESYS represents these patterns through a three-stage process:

1. **Grid-cell data** (50km² resolution): Hourly capacity factors and economic potential for each cell
2. **Smart clustering**: Group cells with similar hourly profiles into representative clusters
3. **Profile aggregation**: Compute timeslice-level energy shares and firmness metrics

This methodology produces 2,700 to 9,000 distinct renewable resource clusters globally, each with unique generation profiles and connection costs.


Technologies Covered
--------------------

.. csv-table:: Renewable Technologies
    :header: "Technology", "Code", "Process Prefix", "Commodity Prefix", "Key Characteristics"
    :widths: 20, 10, 15, 15, 40

    "Solar PV", "spv", "en_spv", "elc_spv", "Strong diurnal pattern, seasonal variation by latitude"
    "Wind Onshore", "won", "en_won", "elc_won", "Higher variability, better winter performance in temperate zones"
    "Wind Offshore", "wof", "en_wof", "elc_wof", "Higher capacity factors, more consistent but location-limited"


Methodology Pipeline
====================

The complete RE characterization process follows a multi-stage pipeline:

.. code-block:: text

    +--------------------------------------------------------------------+
    |                    STAGE 1: DATA ACQUISITION                       |
    +--------------------------------------------------------------------+
    |                                                                    |
    |   Atlite Hourly       REZoning         IRENA        GEM            |
    |   Capacity Factors +  Economic    +   Existing  +  Existing        |
    |   (50km² cells)       Potential       Capacity     RE Plants       |
    |                                                    (unit-level)    |
    |   ↓                   ↓               ↓            ↓               |
    |                                                                    |
    |   8760-hour profiles  MW by cost      National     MW per          |
    |   per grid cell       class per cell  totals       grid cell       |
    |                                                                    |
    +--------------------------------------------------------------------+
                                    ↓
    +--------------------------------------------------------------------+
    |                  STAGE 2: SMART CLUSTERING                         |
    +--------------------------------------------------------------------+
    |                                                                    |
    |   For each ISO + Technology:                                       |
    |                                                                    |
    |   1. Filter cells by minimum CF threshold                          |
    |   2. Subtract existing GEM capacity from REZoning potential        |
    |      per cell (greenfield adjustment)                              |
    |   3. PCA reduction of 8760-hour profiles to 50 components          |
    |   4. Ward's hierarchical clustering with spatial weighting         |
    |   5. n_clusters = n_cells^exponent (configurable granularity)      |
    |                                                                    |
    |   Output: Cell → Cluster assignments (with greenfield potential)   |
    |                                                                    |
    +--------------------------------------------------------------------+
                                    ↓
    +--------------------------------------------------------------------+
    |               STAGE 3: CLUSTER PROFILE COMPUTATION                 |
    +--------------------------------------------------------------------+
    |                                                                    |
    |   For each cluster:                                                |
    |                                                                    |
    |   1. Capacity-weighted average of member cell profiles             |
    |   2. Compute cluster statistics (avg_cf, capacity_mw)              |
    |   3. Calculate distance to nearest demand center                   |
    |   4. Aggregate to timeslice COM_FR values                          |
    |                                                                    |
    +--------------------------------------------------------------------+
                                    ↓
    +--------------------------------------------------------------------+
    |              STAGE 4: FIRMNESS COEFFICIENT ANALYSIS                |
    +--------------------------------------------------------------------+
    |                                                                    |
    |   For each cluster × timeslice:                                    |
    |                                                                    |
    |   - DEF: Deficit energy (backup dispatch requirement)              |
    |   - ELC_4H: 4-hour storage capture potential                       |
    |   - ELC_8H: 8-hour storage capture potential                       |
    |                                                                    |
    +--------------------------------------------------------------------+
                                    ↓
                          MODEL-READY PARAMETERS
                    (COM_FR, Firmness, Connection Costs)

**Greenfield adjustment in Stage 2**: Before clustering, the installed capacity of existing solar, onshore wind, and offshore wind plants (from the Global Energy Monitor) is subtracted from each grid cell's REZoning technical potential. Each GEM unit is mapped to its nearest REZoning cell within the same country. The deduction is applied at the grid-cell level so that the resulting cluster-level GW limits (``cap_bnd``) represent only the remaining buildable potential, preventing double-counting between existing stock and new investment options in the model's supply curves.


Data Sources
============

Atlite Hourly Capacity Factors
------------------------------

**Source**: Atlite library using ERA5 (wind) and SARAH (solar) reanalysis data

**Coverage**: Global, 211 countries

**Resolution**: 50km² grid cells, hourly (8760 values per cell per year)

**Weather Years Available**: 2010, 2013, 2016, 2019

**Variables**:
    - ``solar_capacity_factor``: PV capacity factor (0-1)
    - ``wind_capacity_factor``: Onshore wind capacity factor (0-1)
    - ``offwind_capacity_factor``: Offshore wind capacity factor (0-1)

**Processing**: Raw ERA5/SARAH data is processed through the Atlite library to produce technology-specific capacity factors accounting for:
    - Solar: Panel tilt optimization, temperature derating, inverter losses
    - Wind: Hub height extrapolation, power curve application, wake effects


REZoning Economic Potential
---------------------------

**Source**: KanORS-EMR REZoning database (derived from PyPSA-Earth preprocessing)

**Coverage**: Global, by 50km² grid cell

**Attributes per cell**:
    - Technical potential (MW) by cost class
    - Land availability after exclusions (protected areas, urban, water)
    - Grid connection distance estimates
    - Terrain and accessibility factors

**Cost Classes**: Multiple tiers representing increasing development costs

**Usage**: Provides capacity weights for cluster profile aggregation and supply curve construction


IRENA Renewable Capacity Statistics
-----------------------------------

**Source**: International Renewable Energy Agency (IRENA)

**Coverage**: National totals by technology

**Usage**: 
    - Validation of cluster potential estimates
    - Allocation of existing capacity to clusters based on capacity factor matching
    - Base year calibration of installed RE capacity


Global Energy Monitor (GEM) Existing Renewable Installations
-------------------------------------------------------------

**Source**: Global Energy Monitor - Global Solar Power Tracker / Global Wind Power Tracker

**Coverage**: Unit-level solar, onshore wind, and offshore wind plants worldwide

**Attributes per unit**:
    - Capacity (MW), commissioning status, coordinates
    - Mapped to nearest REZoning grid cell within the same country (via ``update_gem_re_units_cf_location.py``)
    - Technology classification: solar, windon, windoff

**Usage**: Existing installed capacity is subtracted from REZoning technical potential at the grid-cell level before clustering, so that supply curves represent only the remaining greenfield potential. See `Greenfield Potential Adjustment`_ below.


Clustering Methodology
======================

The clustering algorithm groups grid cells with similar hourly generation profiles into representative clusters. This approach preserves the diversity of resource quality while reducing computational complexity.


Smart Clustering Algorithm
--------------------------

The clustering pipeline uses Ward's hierarchical clustering with profile similarity as the primary criterion:

**Step 1: Data Preparation**

For each ISO and technology, filter cells meeting minimum quality thresholds:

.. csv-table:: Minimum CF Thresholds
    :header: "Technology", "Min CF", "Rationale"
    :widths: 20, 15, 65

    "Solar", "5%", "Excludes cells with persistent cloud cover or extreme latitude"
    "Wind Onshore", "8%", "Excludes sheltered valleys and dense urban areas"
    "Wind Offshore", "20%", "Ensures economic viability given higher offshore costs"

**Step 2: PCA Dimensionality Reduction**

The 8760-dimensional hourly profiles are reduced to 50 principal components:

.. math::

    \mathbf{P}_{reduced} = \text{PCA}_{50}(\mathbf{P}_{8760})

This captures >95% of profile variance while enabling efficient clustering.

**Step 3: Spatial Feature Augmentation**

Normalized coordinates are added to encourage geographic coherence:

.. math::

    \mathbf{F}_{cluster} = [\mathbf{P}_{reduced}, \alpha \cdot \text{lat}_{norm}, \alpha \cdot \text{lon}_{norm}]

where :math:`\alpha` is a spatial weighting factor (typically 0.3-0.5).

**Step 4: Ward's Hierarchical Clustering**

Ward's method minimizes within-cluster variance:

.. math::

    d(u, v) = \sqrt{\frac{n_u n_v}{n_u + n_v}} \|\bar{u} - \bar{v}\|_2

where :math:`n_u, n_v` are cluster sizes and :math:`\bar{u}, \bar{v}` are cluster centroids.


Configurable Granularity
------------------------

The number of clusters per ISO/technology is controlled by a configurable exponent:

.. math::

    n_{clusters} = \text{clip}(n_{cells}^{exponent}, n_{min}, n_{max})

where:
    - :math:`n_{cells}` = number of valid grid cells for the ISO/technology
    - :math:`exponent` = clustering granularity parameter (0.4 to 0.6)
    - :math:`n_{min}` = minimum clusters (default: 2)
    - :math:`n_{max}` = maximum clusters (default: 100)

.. csv-table:: Granularity Settings
    :header: "Exponent", "Global Clusters", "Use Case", "Performance"
    :widths: 15, 20, 35, 30

    "0.6", "~9,000", "Detailed supply curve analysis", "Higher computational cost"
    "0.5", "~6,000", "Balanced resolution (default)", "Moderate"
    "0.4", "~2,700", "Fast scenario runs, global overview", "Lower computational cost"

**Example: China Solar**

- Grid cells: ~15,000 valid cells
- n=0.6: 15000^0.6 ≈ 300 clusters (capped at 100)
- n=0.5: 15000^0.5 ≈ 122 clusters (capped at 100)
- n=0.4: 15000^0.4 ≈ 50 clusters

The granularity setting allows users to balance between supply curve detail and computational performance.


COM_FR: Energy Share by Timeslice
=================================

COM_FR (Commodity Fraction) represents the fraction of annual energy generated in each timeslice. For renewable resources, COM_FR captures the temporal correlation between resource availability and demand patterns.

Mathematical Definition
-----------------------

For a cluster with hourly capacity factor profile :math:`CF_h` (h = 0 to 8759):

.. math::

    \text{COM\_FR}_{cluster,ts} = \frac{\sum_{h \in ts} CF_h}{\sum_{h=0}^{8759} CF_h}

where :math:`ts` represents a timeslice (e.g., "WD" for Winter Day).

**Key Property**: COM_FR values sum to 1.0 for each cluster:

.. math::

    \sum_{ts} \text{COM\_FR}_{cluster,ts} = 1.0


Timeslice Definition (ts_12t)
-----------------------------

KiNESYS uses a 12-timeslice definition with 4 seasons × 3 times of day:

**Seasons**:

.. csv-table::
    :header: "Code", "Season", "Months"
    :widths: 15, 25, 60

    "W", "Winter", "December, January, February"
    "R", "Spring", "March, April, May"
    "S", "Summer", "June, July, August"
    "F", "Fall", "September, October, November"

**Times of Day**:

.. csv-table::
    :header: "Code", "Period", "Hours", "Duration"
    :widths: 15, 25, 35, 25

    "D", "Day", "7:00 - 17:00", "11 hours"
    "P", "Peak", "18:00 - 19:00", "2 hours"
    "N", "Night", "20:00 - 6:00", "11 hours"

**12 Timeslices**: WD, WP, WN, RD, RP, RN, SD, SP, SN, FD, FP, FN


Example COM_FR Values
---------------------

.. csv-table:: Sample COM_FR for Solar Cluster (Germany)
    :header: "Timeslice", "COM_FR", "Interpretation"
    :widths: 15, 15, 70

    "WD", "0.071", "7.1% of annual solar generation in Winter Day"
    "WP", "0.000", "No solar generation in Winter Peak (dark)"
    "WN", "0.000", "No solar generation in Winter Night"
    "RD", "0.152", "15.2% in Spring Day (longer days)"
    "RP", "0.025", "2.5% in Spring Peak (evening sun)"
    "RN", "0.000", "No generation at night"
    "SD", "0.181", "18.1% in Summer Day (peak solar season)"
    "SP", "0.043", "4.3% in Summer Peak (long evenings)"
    "SN", "0.000", "No generation at night"
    "FD", "0.124", "12.4% in Fall Day"
    "FP", "0.012", "1.2% in Fall Peak"
    "FN", "0.000", "No generation at night"

**Solar Characteristics**: Zero night generation, peak in summer, minimal peak-hour contribution in winter.

**Wind Characteristics**: More uniform across timeslices, often higher in winter, non-zero at night.


Firmness Coefficients
=====================

Firmness coefficients quantify the dispatchable backup and storage requirements for integrating variable renewable generation. These metrics are essential for accurate capacity planning at high VRE penetrations.

Methodology
-----------

The firmness analysis is adapted from the FACETS methodology (IEA-ETSAP). For each cluster profile and timeslice, the following metrics are computed:

**Deficit Energy (DEF)**

Deficit represents energy shortfall below the timeslice average capacity factor:

.. math::

    \text{DEF}_{ts} = \sum_{h \in ts} \max(0, \overline{CF}_{ts} - CF_h)

where :math:`\overline{CF}_{ts}` is the average capacity factor within the timeslice.

**Interpretation**: DEF quantifies the backup generation that must ramp UP to maintain average output when the renewable resource underperforms within a timeslice.

**Deficit Share**: Often expressed as a percentage of total generation:

.. math::

    \text{DEF\_share}_{ts} = \frac{\text{DEF}_{ts}}{\sum_{h \in ts} CF_h}

By construction, deficit share cannot exceed 50% for any timeslice (since deficit equals surplus by definition of average).


**4-Hour Storage Capture (ELC_4H)**

Surplus energy capturable by 4-hour duration storage:

.. math::

    \text{ELC\_4H}_{ts} = \sum_{clusters \leq 4h} \text{surplus\_energy}

This metric identifies surplus periods short enough to be captured by typical battery storage.

**8-Hour Storage Capture (ELC_8H)**

Surplus energy capturable by 8-hour duration storage:

.. math::

    \text{ELC\_8H}_{ts} = \sum_{clusters \leq 8h} \text{surplus\_energy}

Extended duration storage can capture longer surplus periods, reducing curtailment.


Interpretation
--------------

.. csv-table:: Firmness Coefficient Interpretation
    :header: "Metric", "Low Values", "High Values", "Model Implication"
    :widths: 15, 30, 30, 25

    "DEF", "< 5%", "> 20%", "Dispatchable backup sizing"
    "ELC_4H", "High capture", "Low capture", "Battery storage value"
    "ELC_8H", "High capture", "Low capture", "Extended storage value"

**Example**: A wind cluster with 25% deficit share in Winter Night requires dispatchable capacity equal to 25% of average output to maintain firm supply during low-wind periods within that timeslice.


Connection Costs
================

Renewable resources distant from demand centers incur additional transmission costs. KiNESYS estimates connection costs based on distance to the nearest major city.

Methodology
-----------

**Distance Calculation**:

For each cluster centroid, the geodesic distance to the nearest city (population > 100,000) is computed:

.. math::

    d_{cluster} = \min_{city} \text{haversine}(lat_{cluster}, lon_{cluster}, lat_{city}, lon_{city})

**Cost Model**:

Connection costs increase with distance:

.. math::

    \text{Connection\_Cost}_{cluster} = d_{cluster} \times C_{per\_km\_per\_MW}

where :math:`C_{per\_km\_per\_MW}` is a technology-specific cost parameter ($/MW/km).

**Transmission Losses**:

Energy losses also increase with distance:

.. math::

    \text{Loss\_Factor}_{cluster} = 1 - (d_{cluster} \times L_{per\_km})

where :math:`L_{per\_km}` is typically 0.01% per km for HVDC transmission.


Multi-Year Weather Support
==========================

KiNESYS supports multiple weather years to capture inter-annual variability in renewable resource availability.

Available Weather Years
-----------------------

.. csv-table::
    :header: "Year", "Type", "Notable Characteristics"
    :widths: 15, 25, 60

    "2010", "Non-leap", "Cold European winter, strong wind year"
    "2013", "Non-leap", "Reference year (default)"
    "2016", "Leap year", "El Niño effects, variable wind patterns"
    "2019", "Non-leap", "Recent baseline, improved data quality"


Processing Approach
-------------------

**Fixed Cluster Assignments**: Cluster memberships are determined using the base year (2013) and held constant across all weather years. This ensures:

- Consistent supply curve structure across scenarios
- Valid comparison of resource variability
- Reduced computational overhead (clustering runs once)

**Year-Specific Profiles**: Hourly profiles are regenerated for each weather year using the fixed cluster assignments:

1. Load Atlite data for target year
2. Apply saved cluster assignments
3. Compute capacity-weighted cluster profiles
4. Aggregate to timeslice COM_FR and firmness metrics

**Output Files**:
    - ``{ISO}_{year}_cluster_profiles.parquet`` - 8760-hour profiles
    - ``cluster_com_fr_ts12t_{year}.csv`` - Timeslice energy shares
    - ``cluster_firmness_ts12t_{year}.csv`` - Firmness metrics


Existing Capacity Allocation
============================

Two distinct mechanisms handle existing renewable capacity at different stages of the pipeline, serving different purposes.


.. _Greenfield Potential Adjustment:

Greenfield Potential Adjustment (GEM)
--------------------------------------

**Stage**: Before clustering (inside ``extract_cell_profiles()``)

**Purpose**: Ensure that supply curve potentials represent only the remaining buildable capacity, not capacity that has already been installed.

**Data source**: Global Energy Monitor (GEM) Solar and Wind Power Trackers, mapped to REZoning grid cells via ``update_gem_re_units_cf_location.py``.

**Methodology**:

For each ISO, technology, and grid cell, existing installed capacity is subtracted from the REZoning technical potential:

.. math::

    P_{greenfield,i} = \max\left(0,\; P_{REZoning,i} - \sum_{u \in \text{GEM}_i} C_u\right)

where:
    - :math:`P_{REZoning,i}` = REZoning technical potential (MW) for grid cell *i*
    - :math:`C_u` = installed capacity (MW) of GEM unit *u* mapped to cell *i*
    - :math:`P_{greenfield,i}` = remaining buildable potential, floored at zero

The adjusted per-cell potentials flow into clustering, so that cluster-level ``total_re_capacity_mw`` (and the VEDA ``cap_bnd`` parameter) reflect only the greenfield potential. This prevents the model from double-counting existing stock as available new investment.


Base Year Calibration (IRENA)
------------------------------

**Stage**: After clustering

**Purpose**: Allocate national existing capacity totals to specific clusters for model initialization and base year calibration.

**Data source**: IRENA Renewable Capacity Statistics (national totals by technology).

**Methodology -- Capacity Factor Matching**:

For each ISO and technology, the existing IRENA capacity is assigned to the cluster with the closest average capacity factor:

.. math::

    \text{assigned\_cluster} = \arg\min_{c} |CF_{IRENA} - CF_{cluster,c}|

where:
    - :math:`CF_{IRENA}` = implied capacity factor from IRENA (generation/capacity/8760)
    - :math:`CF_{cluster,c}` = average capacity factor for cluster c

**Rationale**: Existing installations are typically sited at locations with capacity factors similar to the national average, as they represent the mix of early (high-quality) and later (lower-quality) developments.

**Output**: Allocation file mapping IRENA national capacity to specific clusters for model initialization.


VEDA Integration
================

The RE characterization outputs are formatted for direct import into VEDA-TIMES models.

Output Files
------------

**Main Excel File**: ``SubRES_REZoning_Atlite.xlsx``

Contains three sheets per technology (SPV, WON, WOF):

**~FI_Process Table**:
    Process definitions with naming convention ``en_{tech}_{ISO}_{cluster:03d}``
    
    Example: ``en_spv_DEU_001``, ``en_won_CHN_042``, ``en_wof_GBR_003``

**~FI_T Table**:
    Time-varying parameters including:
    - ``NCAP_AF``: Annual availability factors (derived from avg_cf)
    - Supply curve cost tiers

**~FI_Comm Table**:
    Commodity definitions for cluster-specific electricity outputs:
    
    - Commodity: ``elc_spv_DEU_001``
    - Description: "Solar electricity from DEU cluster 001"
    - Region: TIAM2022 region code (e.g., "WEU")

**Supporting CSV Files**:

- ``cluster_com_fr_ts12t_{year}.csv`` - COM_FR values by cluster and timeslice
- ``cluster_firmness_ts12t_{year}.csv`` - Firmness coefficients
- ``existing_re_allocation.csv`` - IRENA capacity to cluster mapping


Naming Convention
-----------------

.. csv-table:: VEDA Naming Convention
    :header: "Element", "Format", "Example"
    :widths: 20, 40, 40

    "Process", "en_{tech}_{ISO}_{cluster:03d}", "en_spv_DEU_001"
    "Commodity", "elc_{tech}_{ISO}_{cluster:03d}", "elc_spv_DEU_001"
    "Region", "TIAM2022 code", "WEU, EEU, CHN, USA"


Computational Implementation
============================

Scripts and Pipeline
--------------------

The RE characterization is implemented in the ``6kinesys_development/re_characterization/`` directory:

**Main Processing Scripts**:
    - ``run_all_isos.py`` - Main entry point for global processing
    - ``global_renewable_processor.py`` - Core processing logic
    - ``create_re_subres_excel.py`` - VEDA Excel output generation

**Analysis Scripts** (in ``scripts/`` subdirectory):
    - ``compute_cluster_firmness.py`` - Firmness coefficient calculation
    - ``create_cluster_com_fr.py`` - COM_FR timeslice aggregation
    - ``allocate_existing_to_clusters.py`` - IRENA capacity allocation
    - ``visualize_cluster_firmness_map.py`` - Interactive map generation


Command-Line Usage
------------------

**Process all ISOs with default settings**:

.. code-block:: bash

    python run_all_isos.py

**Process with specific granularity**:

.. code-block:: bash

    # Coarse clustering (faster, ~2,700 clusters)
    python run_all_isos.py --exponent 0.4
    
    # Fine clustering (detailed supply curves, ~9,000 clusters)
    python run_all_isos.py --exponent 0.6

**Process multiple weather years**:

.. code-block:: bash

    python run_all_isos.py --exponent 0.5 --years 2010 2013 2016 2019


Output Directory Structure
--------------------------

.. code-block:: text

    output/
    ├── n0.4/                           # Coarse granularity
    │   ├── DEU/                        # Per-ISO folders
    │   │   ├── DEU_2013_cluster_profiles.parquet
    │   │   ├── cluster_summary_spv.csv
    │   │   └── ...
    │   ├── CHN/
    │   ├── USA/
    │   ├── cluster_com_fr_ts12t_2013.csv
    │   ├── cluster_firmness_ts12t_2013.csv
    │   └── SubRES_REZoning_Atlite.xlsx
    ├── n0.5/                           # Medium granularity
    └── n0.6/                           # Fine granularity


Performance
-----------

**Typical Processing Times** (single weather year):

.. csv-table::
    :header: "Granularity", "Global Processing", "Per-ISO Average"
    :widths: 20, 40, 40

    "n=0.4", "~30 minutes", "~15 seconds"
    "n=0.5", "~45 minutes", "~20 seconds"
    "n=0.6", "~60 minutes", "~25 seconds"

**Memory Usage**: ~4 GB for global processing (dominated by Atlite data loading)


Visualization
=============

Interactive maps and visualizations help interpret the RE characterization results.

Cluster Firmness Maps
---------------------

Point maps showing cluster locations colored by deficit share:

- **Low deficit (green)**: Consistent resource, minimal backup required
- **High deficit (red)**: Variable resource, significant backup needs

Maps are generated as interactive HTML files using Plotly:

.. code-block:: bash

    python scripts/visualize_cluster_firmness_map.py

**Output**: ``cluster_firmness_map_{tech}.html``


Technology Comparison Views
---------------------------

Side-by-side maps comparing solar, wind onshore, and wind offshore firmness patterns across regions.


References
==========

**Atlite and PyPSA**:
    - Hofmann, F., et al. (2021). "Atlite: A Lightweight Python Package for Calculating Renewable Power Potentials and Time Series." Journal of Open Source Software.
    - Brown, T., et al. (2018). "PyPSA: Python for Power System Analysis." Journal of Open Research Software.

**REZoning Methodology**:
    - World Bank ESMAP. "Global Solar Atlas" and "Global Wind Atlas" methodologies.
    - PyPSA-Earth renewable resource preprocessing documentation.

**Firmness Coefficients**:
    - IEA-ETSAP FACETS project. "Flexibility Assessment for Capacity Expansion in the Transition to Sustainability."
    - Welsch, M., et al. (2014). "Incorporating flexibility requirements into long-term energy system models." Applied Energy.

**Clustering Methods**:
    - Ward, J. H. (1963). "Hierarchical Grouping to Optimize an Objective Function." Journal of the American Statistical Association.
    - Scikit-learn documentation on hierarchical clustering.

**Climate Data**:
    - Hersbach, H., et al. (2020). "The ERA5 global reanalysis." Quarterly Journal of the Royal Meteorological Society.
    - Pfeifroth, U., et al. (2019). "SARAH-2: Surface Solar Radiation Data Set - Heliosat."
