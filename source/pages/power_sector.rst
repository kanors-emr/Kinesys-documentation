############
Power sector
############

* Uses the International Electricity Market Module (IEMM in the WEPS+ framework) project for Energy Information Administration (EIA – USA) as the starting point.
* Vintaged buildup of existing stock from the UDI database
* Existing Renewable capacity calibrated to IRENA data.
* Renewable electricity modeled at a country-level, regardless of the model regional aggregation, for Wind, Solar, Hydro, Biomass, and Geothermal.
* Electricity demand load curves: sector load shape archetypes, based on 8760 grid-level data and assumptions based on sector shares.
* .. raw:: html

    <a href="https://www.eia.gov/analysis/handbook/pdf/weps2021_electricity.pdf" target="_blank"><b>Further details</a></b>

In IEMM, the bound and constraint facilities have been used to construct two sets of limitations to the penetration of variable renewable (VRE) generation. The need for these limits arises because VRE has inherently granular temporal and spatial dependencies. However, detailed the time and space resolution of a global model such as IEMM, it will always be insufficient to capture these dependencies fully. Specifically, we wish to address these two challenges:
	* Limiting the use of country-level wind and solar penetration in large, possibly multi-country regions.
	* Limiting the ability of variable resources to meet average loads in model time slices.

These have been addressed as follows.

Controlling use of country-level VRE potential
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

IEMM contains country-level wind and solar potentials, but models demand at a regional level. In multi-country regions, as well as in large countries, resources may not be located near loads, and transmission capacity may not exist from resources to load. We do not want the model satisfying an unrealistic portion of regional load with renewables that may be located in a small and potentially distant portion of the region.

**Grid Extension Methodology:**

To provide a generic structure to control the penetration of these technologies, IEMM uses a **penalty block system** that models increasing costs of renewable energy deployment as penetration rises. This creates a supply curve where additional renewable capacity requires progressively higher investment costs due to grid extension requirements.

**System Overview:**

The system uses **10 penalty blocks** with increasing cost penalties:

1. **Base Block**: Initial renewable generation at base cost (typically 30% of projected generation)
2. **Penalty Blocks**: Additional capacity at increasing cost penalties (25% increments)
3. **Export Blocks**: Capacity beyond 100% of domestic generation for cross-border trade

**Mathematical Formulation:**

For each country n, the total renewable generation is constrained by:

.. math::
    Annual Generation from VRE_n  ≤  Σ(i=1 to N) GridExt_i × Share_i × ProjectedGeneration_n × 8.76

Where:
- **ProjectedGeneration_n**: Projected total generation for country n (Column Q)
- **GridExt_i**: Capacity in penalty block i
- **Share_i**: Share of projected generation for block i
- **8.76**: Conversion from GW to TWh

**Penalty Block Structure:**

The system uses 10 penalty blocks with the following characteristics:

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

**Economic Logic:**

- **Grid Requirements**: As renewable penetration increases, additional transmission infrastructure is needed
- **Cost Escalation**: Each penalty block represents higher investment costs for grid extension
- **Export Potential**: Blocks beyond 100% enable cross-border renewable energy trade
- **Capacity Constraints**: Total renewable generation is limited by the sum of all penalty block capacities

**Country-Specific Implementation:**

Each country has a **projected total generation** (column Q) that varies based on:
- Renewable resource potential
- Grid integration challenges
- Policy targets
- Geographic constraints

**Examples:**

*Iceland (High Export Potential):*
- Projected total generation: 23.194 TWh (in 2050)
- Domestic capacity: ~100% of local demand (Blocks 1-3)
- Export potential: 390% of projected generation (Blocks 4-10) for embedded exports
- Note: Iceland cannot produce much more than its projected local demand domestically
- The 300%+ capacity represents potential for embedded exports

*Kazakhstan (High Export Potential):*
- Projected total generation: 176.077 TWh (in 2050)
- Abundant renewable resources
- Without constraints: Could power much of the region
- With penalty blocks: Limited to realistic deployment levels
- Prevents unrealistic regional demand satisfaction

*Kenya (Very High Export Potential):*
- Projected total generation: 69.729 TWh (in 2050)
- Excellent solar and wind resources
- Without constraints: Could power neighboring countries
- With penalty blocks: Realistic deployment with export economics
- Models transmission investment requirements

**Process Naming Convention:**

Renewable energy processes follow the pattern:
- **<ISO>-Step1**: Base renewable capacity (e.g., MAR-Step1, CHL-Step1)
- **<ISO>-Step2**: First penalty block
- **<ISO>-Step3**: Second penalty block
- **<ISO>-Step4**: Third penalty block
- **<ISO>-Step5**: Fourth penalty block
- **<ISO>-Step6**: Fifth penalty block
- **<ISO>-Step7**: Sixth penalty block
- **<ISO>-Step8**: Seventh penalty block
- **<ISO>-Step9**: Eighth penalty block
- **<ISO>-Step10**: Maximum export capacity

**Implementation Notes:**

- These constraints are implemented at the country level, regardless of how countries are aggregated into model regions
- They prevent unrealistic scenarios like Iceland's abundant wind resources powering all of Europe's load without appropriate transmission investment
- The penalty block system provides a realistic representation of grid extension costs and export potential
- Similar constraints may be added to prevent over-utilization of hydro resources in countries with large potential, without corresponding transmission investment

Bounding time-sliced generation from VRE sources
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
As described in Section 2, model time slices are designed to capture two important types of temporal variation in load and generation: seasonal and time-of-day. They do not capture day-to-day variation within seasons. Rather they average over such variation. When penetrations of VRE sources become large relative to total load, such averaging may run the risk of implicitly assuming free storage between days or even hours within the same time slice.
To avoid such an outcome, user constraints have been implemented that limit the maximum share of total electricity production in each region and time slice from VRE sources. Output from storage technologies is included in the denominator of the constraint, resulting in a requirement for storage investment and operation when VRE penetrations become very high. The default maximum VRE share is set at 65%. This value can be changed in the model instance generator template.

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

Constraints on capacity rate of change
======================================
IEMM contains constraints on capacity contraction and expansion intended to represent real-world costs and inertias that limit capacity rate of change. These are implemented as decay constraints and build rate growth constraints and cost steps.

Decay constraints
^^^^^^^^^^^^^^^^^
Non-economic capacity is often retained in the real world due to local must-run considerations, institutional practices, and other factors. In IEMM, decay constraints have been imposed that limit the rate of decrease of coal, gas, and oil capacity. The constraints include a maximum annual percentage rate of decline, as well as a representative unit size that can be retired above and beyond the annual percentage rate, in order to allow the capacity to go to zero.

Build rate constraints/costs
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
IEMM contains a set of three-step cost curves, similar to the NEMS Electricity Market Module short-term elasticity mechanism, intended to represent the costs incurred when rapid expansions in the capacity of a particular technology cause shortages of key inputs and/or skilled labor. These constraints have been implemented for renewable technologies, whose economics are rapidly changing, to more realistically limit their rate of expansion as their costs fall. The constraints include a cap on investment in the first projection year, based on recent regional additions, and a maximum annual capacity investment growth rate in subsequent periods.

The current constraint permits additions to capacity to grow at an annual maximum rate of 15% without incurring additional cost. Further steps of 70% and another 15% are available at an extra cost to the model.

Cooling Technoloiges
^^^^^^^^^^^^^^^^^^^^
Cooling technologies are identified for the existing thermal power plants. This enables water withdrawal and consumption accounting, and creating scenarios where their operation might be curtailed due to water shortages.

    .. csv-table::
        :file: tables/PowerPlants_CoolingTechs.csv
        :widths: 90,10
        :header-rows: 1
