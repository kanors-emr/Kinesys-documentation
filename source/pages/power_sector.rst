############
Power sector
############

The KiNESYS power sector module represents electricity generation, capacity investment, and system operation across all model regions. It covers five main areas: representation of the existing generation fleet, characterization of new renewable and conventional investment options, electricity demand and timeslice design, and operational constraints that govern VRE integration, capacity retirement, and build rates.

Renewable electricity is modeled at country level regardless of the model's regional aggregation, for wind (onshore and offshore), solar PV, hydro, biomass, and geothermal. Conventional and nuclear technologies are characterized with regionally differentiated costs from IEA and NREL sources. Electricity demand is represented through hourly load curves disaggregated by sector and aggregated into configurable timeslice structures.


Existing Stock Representation
=============================

The existing generation fleet is constructed from plant-level databases with vintaged capacity entries:

- **Thermal and nuclear plants**: Built up from the S&P Global Platts WEPP (World Electric Power Plants) database, which provides unit-level details including capacity, fuel type, technology subtype, commissioning year, and cooling technology. Each plant enters the model at its actual commissioning year with technology-specific efficiency and cost parameters, preserving the vintage structure of the fleet.

- **Existing renewable capacity**: Individual solar and wind plants are mapped to REZoning grid cells using the Global Energy Monitor (GEM) power trackers, enabling plant-level spatial allocation. Their capacity is subtracted from grid-cell technical potential before clustering to avoid double-counting in supply curves. National totals are calibrated to IRENA Renewable Capacity Statistics, with existing capacity allocated to clusters based on capacity factor matching (see :doc:`renewable_energy_characterization`).

Cooling Technologies
--------------------

Cooling technologies are identified for existing thermal power plants. This enables water withdrawal and consumption accounting, and supports scenarios where plant operation may be curtailed due to water shortages.

.. csv-table::
    :file: tables/PowerPlants_CoolingTechs.csv
    :widths: 90,10
    :header-rows: 1


Renewable Resource Characterization
====================================

KiNESYS employs a sophisticated spatial clustering approach to represent variable renewable energy (VRE) resources. Rather than treating each country as a single homogeneous resource, the methodology captures the diversity of solar and wind resource quality through fine-grained spatial analysis.

**Key Features:**

- **50km² grid-cell resolution**: Atlite/REZoning data provides hourly capacity factors at high spatial resolution
- **Smart clustering**: Grid cells with similar hourly profiles are grouped into representative clusters
- **Configurable granularity**: 2,700 to 9,000 clusters globally (controlled by exponent parameter)
- **Multi-year weather support**: Weather years 2010, 2013, 2016, and 2019 available for climate sensitivity analysis

**Technologies Covered:**

.. csv-table::
    :header: "Technology", "Code", "Min CF Threshold", "Typical Global Clusters"
    :widths: 25, 15, 20, 40

    "Solar PV", "spv", "5%", "~1,200 (n=0.4) to ~4,000 (n=0.6)"
    "Wind Onshore", "won", "8%", "~1,000 (n=0.4) to ~3,500 (n=0.6)"
    "Wind Offshore", "wof", "20%", "~400 (n=0.4) to ~1,500 (n=0.6)"

**Clustering Methodology:**

The clustering algorithm groups grid cells with similar generation profiles:

1. **PCA reduction**: 8760-hour profiles reduced to 50 principal components
2. **Spatial weighting**: Coordinates added to encourage geographic coherence
3. **Ward's clustering**: Hierarchical clustering minimizing within-cluster variance
4. **Capacity-weighted profiles**: Cluster profiles are MW-weighted averages of member cells

**Firmness Coefficients:**

In addition to energy shares (COM_FR), the model computes firmness metrics that quantify dispatchable backup and storage requirements:

- **DEF (Deficit Energy)**: Energy shortfall below timeslice average — represents backup dispatch requirement
- **ELC_4H**: Surplus energy capturable by 4-hour duration storage
- **ELC_8H**: Surplus energy capturable by 8-hour duration storage

These metrics enable accurate representation of VRE integration costs at high penetrations, ensuring the model properly values flexible generation, storage, and demand response.

**Connection Costs:**

Each cluster includes distance-based connection costs computed from the cluster centroid to the nearest major city (demand center proxy). This creates realistic supply curves where remote resources incur higher transmission investment.

For detailed methodology, mathematical formulations, and implementation details, see :doc:`renewable_energy_characterization`.


Conventional Technology Characterization
========================================

KiNESYS represents new investment options for conventional (dispatchable) power generation, CCS-equipped plants, and battery storage. Technology costs and performance parameters are regionally differentiated and provided at three uncertainty levels (hi/mid/lo) to support parametric scenario analysis.

Data Sources and Compilation Strategy
--------------------------------------

The techno-economic dataset is compiled from two primary sources:

- **IEA Global Energy and Climate (GEC) Model (WEO 2023)** — provides regionally differentiated overnight capital costs, fixed O&M, thermal efficiency, and capacity factors under the Stated Policies (STEPS) scenario across 9 world regions (European Union, United States, Japan, Russia, China, India, Middle East, Africa, Brazil) at three time points (2022, 2030, 2050).

- **NREL Annual Technology Baseline (ATB) 2024v3** — provides US-specific cost projections under Conservative, Moderate, and Advanced scenarios. These are used to derive hi/lo spread multipliers that are applied to the IEA regional mid values, preserving regional cost differentiation while adding uncertainty characterization. ATB is also the sole source for battery storage costs.

All costs are overnight costs in USD 2022. Construction time is provided separately; TIMES computes interest during construction endogenously where applicable. Data points are kept at native source years with no interpolation — TIMES handles internal interpolation.

An earlier approach using IPCC AR6 scenario database costs was abandoned due to model heterogeneity, missing technologies, and implausible entries (particularly for offshore wind).

Technology Menu
----------------

The dataset covers 26 technologies organized into the following groups:

**Gas** — CCGT, open-cycle gas turbine (peaking), CCGT-CHP (combined heat and power), gas fuel cell, and CCGT with CCS. CCGT-CHP co-produces electricity and useful heat; its reported efficiency reflects total energy output on an LHV basis. CHP plants are assigned to the CHP model set with both electricity and heat commodity outputs.

**Coal** — Four unabated steam cycle variants (subcritical, supercritical, ultra-supercritical, IGCC) and three CCS-equipped variants (post-combustion, oxyfuel, IGCC+CCS). CCS variants carry a significant capital cost premium and an efficiency penalty relative to their unabated counterparts.

**Nuclear** — A single large-reactor technology with the longest construction time and economic lifetime in the dataset. Regional cost differentiation is particularly wide for nuclear.

**Bioenergy** — Large-scale biomass, biomass cofiring (incremental investment for blending in existing coal plants), biomass CHP, and biomass with CCUS (BECCS) for negative emissions.

**Battery storage** — 4-hour and 8-hour utility-scale Li-ion, sourced entirely from ATB. The same cost trajectory is applied across all regions, reflecting the globally traded nature of battery cells.

**Renewables** — Solar PV, CSP, wind onshore, wind offshore, hydropower (large and small scale), and geothermal. These base cost assumptions complement the spatially detailed resource characterization described in :doc:`renewable_energy_characterization`, which provides cluster-specific capacity factors, connection costs, and firmness metrics.

Regional Differentiation
--------------------------

Costs vary substantially across the 9 IEA regions, driven by differences in labour costs, materials supply chains, regulatory environments, and construction productivity. In general, China and India have the lowest costs, the EU and Japan the highest, with other regions in between. The pattern is broadly consistent across technology groups, though nuclear exhibits particularly wide regional dispersion.

Cost Uncertainty
-----------------

For each technology, the **mid** scenario equals the IEA GEC STEPS value directly. The **hi** and **lo** scenarios are computed by multiplying the mid value by the ratio of ATB Conservative (or Advanced) to ATB Moderate costs for the corresponding technology. This produces three internally consistent cost trajectories per region. Technologies without a direct ATB match use mid-only (no spread).

The detailed compilation methodology, technology-by-technology parameter values, and full regional coverage are documented in ``METHODOLOGY.md`` within the reference costs directory.


Electricity Demand Load Shapes and Timeslice Design
====================================================

KiNESYS models electricity demand with hourly granularity (8760 hours per year), capturing both seasonal and diurnal variation across different consumer sectors. This temporal resolution is critical for accurately representing the value of flexible resources, storage, renewable integration, and system adequacy. The hourly profiles are then aggregated into model timeslices (typically 12-24 slices per year) that preserve key temporal characteristics while maintaining computational tractability.

For detailed methodology, mathematical formulations, and validation results, see :doc:`electricity_load_shapes`.

Data Sources and Integration
-----------------------------

**ERA5 Climate Reanalysis**
    ECMWF ERA5 provides modeled hourly electricity load curves for 211 countries based on temperature-driven demand patterns. This ensures globally consistent coverage for the standard weather year (2013).

**Actual Load Data Where Available**
    When high-quality measured data exists, it replaces modeled estimates:
    
    - **China**: Provincial hourly load data (2016-2020) from Zenodo repository, aggregated to national level
    - **Europe**: ENTSO-E transparency platform data for validation and quality assessment

**Sectoral Consumption Shares**
    IEA Energy Balances provide annual electricity consumption by sector (industrial, commercial, residential), which are used to disaggregate total load into sectoral components.

Sectoral Disaggregation Approach
---------------------------------

Total hourly load is decomposed into three main sectors using assumptions about sector-specific temporal patterns:

**Industrial Sector**
    Industrial loads exhibit less diurnal variation than other sectors due to continuous-process operations (chemicals, refining, metals). However, batch manufacturing and shift-based operations create systematic time-of-day patterns, particularly in manufacturing-heavy economies.
    
    The methodology applies **adaptive damping factors** that vary by region based on industrial electricity share:
    
    .. csv-table:: Regional Industrial Load Variation
        :header: "Industrial Share", "Damping Factor", "Typical Load Variation", "Example Regions"
        :widths: 20, 20, 25, 35
        
        "< 40%", "0.10", "Minimal (1.1-1.2x)", "USA, France, UK"
        "40-60%", "0.15", "Moderate (1.2-1.4x)", "Germany, India, Brazil"
        "60-70%", "0.20", "Significant (1.4-1.7x)", "Poland, Turkey, Austria"
        "> 70%", "0.25", "High (1.5-2.0x)", "China, Iceland"
    
    This approach reflects empirical findings from industrial load factor studies:
    
    - Continuous processes: 60-90% load factor → minimal diurnal variation
    - Batch manufacturing: 40-70% load factor → significant time-of-day patterns
    - Shift-based operations: 20-40% overnight load reduction in manufacturing economies
    
    For very high-industrial regions (>60% share), additional hour-of-day adjustment factors capture two-shift operational patterns common in manufacturing sectors.

**Commercial Sector**
    Commercial loads follow strong business-hours patterns with peak demand during daytime. An hour-of-day factor increases load during business hours (6 AM - 10 PM) and reduces it overnight, reflecting office buildings, retail, and service sector operations.

**Residential Sector**
    Residential loads are computed as the residual after subtracting industrial and commercial components. This approach ensures mass balance while capturing the characteristic dual-peak pattern (morning and evening) driven by household activities, cooking, lighting, and heating/cooling.

Timeslice Aggregation
---------------------

Hourly load shapes are aggregated into model timeslices that balance temporal resolution with computational efficiency. Three essential parameters are computed for each region, sector, and timeslice:

**COM_FR (Commodity Fraction)**
    The fraction of annual energy consumed in each timeslice:
    
    .. math::
    
        \text{COM\_FR}_{r,s,ts} = \frac{\sum_{h \in ts} \text{Load}_{r,s,h}}{\sum_{h=1}^{8760} \text{Load}_{r,s,h}}
    
    These fractions ensure that sector-specific seasonal and diurnal patterns are preserved in the optimization model. COM_FR values sum to 1.0 for each region-sector combination.

**COM_PKFLX (Peak Flexibility)**
    Measures the ratio of peak-to-average load within each timeslice, computed for total electricity demand:
    
    .. math::
    
        \text{COM\_PKFLX}_{r,ts} = \frac{\max_h(\text{Load}_{r,h}) - \text{avg}_h(\text{Load}_{r,h})}{\text{avg}_h(\text{Load}_{r,h})} \quad \text{for } h \in ts
    
    This parameter enables the model to properly value peaking capacity, storage, and demand response resources based on their ability to serve within-timeslice peak demands.

**G_YRFR (Year Fraction)**
    The fraction of total annual hours in each timeslice:
    
    .. math::
    
        \text{G\_YRFR}_{ts} = \frac{\text{hours in timeslice}}{8760}

Validation and Quality Control
-------------------------------

All generated load shapes undergo rigorous validation:

- **Mass Balance**: COM_FR values sum to 1.0 (±0.001) for each region-sector combination
- **Non-Negativity**: All sectoral loads remain positive at every hour
- **Cross-Region Consistency**: Load patterns checked against empirical studies and actual data
- **Timeslice Adequacy**: Peak demands within timeslices reflect realistic system stress periods

When actual load data is available (China, Europe), generated profiles are validated against measured patterns to ensure methodology accuracy.

Regional Customization
----------------------

Load shapes can be generated for any regional aggregation defined in KiNESYS mapping files:

- **Single countries**: Individual country load profiles with national characteristics
- **Multi-country regions**: Aggregated profiles capturing diverse load patterns
- **Custom aggregations**: Flexible regional definitions for specific analytical needs

The temporal representation automatically adjusts to match the spatial scope of the model instance, ensuring consistency between regional aggregation and load curve detail.


Operational Constraints and Integration Limits
===============================================

KiNESYS includes several constraint mechanisms that represent real-world limits on VRE integration, capacity expansion, and fleet retirement. These operate alongside the technology characterization and demand representation described above.


Grid Extension Penalty Blocks
------------------------------

KiNESYS contains country-level wind and solar potentials, but models demand at a regional level. In multi-country regions, resources may not be located near loads, and transmission capacity may not exist from resources to load centres. To prevent the model from satisfying an unrealistic portion of regional load with renewables located in a small or distant part of the region, a **penalty block system** models increasing costs of renewable deployment as penetration rises.

This mechanism complements the distance-based connection costs in the spatial RE clustering (see Renewable Resource Characterization above). While connection costs capture the cost of linking individual clusters to nearby demand centres, the penalty block system constrains the aggregate volume of country-level VRE that can serve regional load.

The system uses **10 penalty blocks** with increasing cost penalties:

1. **Base Block**: Initial renewable generation at base cost (typically 30% of projected generation)
2. **Penalty Blocks**: Additional capacity at increasing cost penalties (25% increments)
3. **Export Blocks**: Capacity beyond 100% of domestic generation for cross-border trade

**Mathematical Formulation:**

For each country n, the total renewable generation is constrained by:

.. math::
    Annual Generation from VRE_n  ≤  Σ(i=1 to N) GridExt_i × Share_i × ProjectedGeneration_n × 8.76

Where:

- **ProjectedGeneration_n**: Projected total generation for country n
- **GridExt_i**: Capacity in penalty block i
- **Share_i**: Share of projected generation for block i
- **8.76**: Conversion from GW to TWh

**Penalty Block Structure:**

.. csv-table:: Penalty Block Configuration
    :header: Block,Share of Projected Generation,Cost Penalty,Description
    :widths: 10,25,20,45

    1,30%,$0/kW,Base renewable capacity
    2,60%,$25/kW,Short-distance grid extension
    3,90%,$50/kW,Medium-distance grid extension
    4,120%,$75/kW,Long-distance grid extension
    5,150%,$100/kW,Regional transmission
    6,180%,$125/kW,Cross-border transmission
    7,210%,$150/kW,International transmission
    8,240%,$175/kW,Continental transmission
    9,270%,$200/kW,Global transmission
    10,300%,$225/kW,Maximum export capacity

Each country has a projected total generation that varies based on renewable resource potential, grid integration challenges, policy targets, and geographic constraints.

**Examples:**

*Iceland (High Export Potential):*

- Projected total generation: 23.194 TWh (in 2050)
- Domestic capacity: ~100% of local demand (Blocks 1-3)
- Export potential: 390% of projected generation (Blocks 4-10) for embedded exports

*Kazakhstan (High Export Potential):*

- Projected total generation: 176.077 TWh (in 2050)
- Without constraints: Could power much of the region
- With penalty blocks: Limited to realistic deployment levels

*Kenya (Very High Export Potential):*

- Projected total generation: 69.729 TWh (in 2050)
- Without constraints: Could power neighbouring countries
- With penalty blocks: Realistic deployment with export economics

**Process Naming Convention:**

Renewable energy processes follow the pattern ``<ISO>-Step1`` through ``<ISO>-Step10`` (e.g., MAR-Step1, CHL-Step1), where Step1 is the base block and Step10 is the maximum export capacity.

**Implementation Notes:**

- These constraints are implemented at the country level, regardless of how countries are aggregated into model regions
- They prevent unrealistic scenarios such as Iceland's abundant wind resources powering all of Europe's load without appropriate transmission investment
- Similar constraints may be added for hydro resources in countries with large potential

Capacity Decay Constraints
---------------------------

Non-economic capacity is often retained in practice due to local must-run considerations, institutional inertia, and other factors. Decay constraints limit the rate of decrease of coal, gas, and oil capacity. The constraints include a maximum annual percentage rate of decline, as well as a representative unit size that can be retired above and beyond the annual percentage rate, in order to allow the capacity to reach zero.

Build Rate Constraints
-----------------------

Three-step cost curves represent the costs incurred when rapid capacity expansions cause shortages of key inputs or skilled labour. These constraints have been implemented for renewable technologies, whose economics are rapidly changing, to more realistically limit their rate of expansion as costs fall. The constraints include a cap on investment in the first projection year, based on recent regional additions, and a maximum annual capacity investment growth rate in subsequent periods.

The current constraint permits additions to capacity to grow at an annual maximum rate of 15% without incurring additional cost. Further steps of 70% and another 15% are available at an extra cost to the model.
