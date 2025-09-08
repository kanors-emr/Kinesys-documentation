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
    Annual Generation from VRE_n ≤ ProjectedGeneration_n + Σ(i=1 to N) GridExt_i × Share_i × 8.76

Where:
- **ProjectedGeneration_n**: Projected total generation for country n (Column Q)
- **GridExt_i**: Capacity in penalty block i
- **Share_i**: Share of projected generation for block i
- **8.76**: Conversion from annual to hourly capacity (8760 hours/year)

**Data Structure:**
- **Column Q**: Projected generation values (TWh) - e.g., Iceland: 23.194 TWh, Kazakhstan: 176.077 TWh
- **Column R**: ISO country codes
- **Column S**: Years (2020-2095)

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
