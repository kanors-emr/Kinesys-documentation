##################
Demand Projection
##################

As a demand-driven optimization model, KiNESYS projects future useful energy demands by combining macroeconomic drivers with empirically estimated elasticities. This methodology ensures that demand projections are grounded in observed historical relationships while allowing for region-specific variations in economic structure and development pathways.

Overview
========

The demand projection framework operates in three stages:

.. code-block:: text

    +-------------------------------------------------------------------------+
    |                        1. DRIVER PREPARATION                            |
    +-------------------------------------------------------------------------+
    |                                                                         |
    |   SSP Database ------> Base Drivers ------> Sectoral Drivers            |
    |   (GDP, Population,    (GDP, POP, HOU,      (GDP_AGR, GDP_IND,           |
    |    Households)          GDPPCAP, GDPPHOU)    GDP_SRV, GDP_MFG)           |
    |                                                                         |
    |   World Bank WDI -----> Sector Shares -----> Convergence to 2100        |
    |   (Agriculture,         (normalized to       (developing economies      |
    |    Industry, Services)   sum to 100%)         converge to OECD          |
    |                                               structure)                |
    +-------------------------------------------------------------------------+
                                      |
                                      v
    +-------------------------------------------------------------------------+
    |                     2. ELASTICITY ESTIMATION                            |
    +-------------------------------------------------------------------------+
    |                                                                         |
    |   Historical Data ----> Log-Log Regression ----> Quality Filtering      |
    |   (sector outputs,      (OLS estimation of       (significance,         |
    |    driver values)        elasticity)              fit, bounds)          |
    |                                                                         |
    |                               |                                         |
    |                               v                                         |
    |                         Driver Selection                                |
    |                         (best driver per                                |
    |                          region-sector by R-squared)                    |
    |                                                                         |
    |                               |                                         |
    |                               v                                         |
    |                      Hierarchical Fallback                              |
    |                      (region -> aggregate -> world)                     |
    +-------------------------------------------------------------------------+
                                      |
                                      v
    +-------------------------------------------------------------------------+
    |                      3. DEMAND PROJECTION                               |
    +-------------------------------------------------------------------------+
    |                                                                         |
    |   Base Year Demand x (Driver_t / Driver_base)^elasticity = Demand_t     |
    |                                                                         |
    +-------------------------------------------------------------------------+


Driver Preparation
==================

Macroeconomic Drivers
---------------------

The primary macroeconomic drivers are sourced from the SSP (Shared Socioeconomic Pathways) Database, which provides internally consistent projections of population, economic growth, and urbanization across five socioeconomic narratives.

**Base Drivers**

+----------+---------------------------+-------------------------------------------+
| Driver   | Definition                | Typical Application                       |
+==========+===========================+===========================================+
| GDP      | Gross Domestic Product    | Industrial output, freight transport      |
|          | (PPP, billion USD)        |                                           |
+----------+---------------------------+-------------------------------------------+
| POP      | Population (millions)     | Residential cooking, passenger rail       |
+----------+---------------------------+-------------------------------------------+
| HOU      | Households (millions)     | Residential space heating/cooling,        |
|          |                           | refrigeration                             |
+----------+---------------------------+-------------------------------------------+
| GDPPCAP  | GDP per capita            | Passenger car travel, residential         |
|          | (thousand USD/person)     | lighting                                  |
+----------+---------------------------+-------------------------------------------+
| GDPPHOU  | GDP per household         | Residential appliances, commercial        |
|          | (thousand USD/household)  | services                                  |
+----------+---------------------------+-------------------------------------------+

Households are estimated as half of the population between 18 and 65 years of age.

Sectoral GDP Drivers
--------------------

Total GDP is disaggregated into sectoral components using value-added shares from the World Bank Development Indicators.

**Sector Definitions**

+----------+---------------------------+-------------------------------------------+
| Driver   | WDI Indicator             | Application                               |
+==========+===========================+===========================================+
| GDP_AGR  | Agriculture, forestry,    | Agricultural energy demand                |
|          | and fishing (% of GDP)    |                                           |
+----------+---------------------------+-------------------------------------------+
| GDP_IND  | Industry including        | Industrial sectors (mining,               |
|          | construction (% of GDP)   | construction, other industry)             |
+----------+---------------------------+-------------------------------------------+
| GDP_SRV  | Services (% of GDP)       | Commercial sector demands                 |
+----------+---------------------------+-------------------------------------------+
| GDP_MFG  | Manufacturing (% of       | Manufacturing subsectors                  |
|          | Industry)                 |                                           |
+----------+---------------------------+-------------------------------------------+

**Structural Convergence**

Sector shares evolve over the projection horizon according to a structural convergence assumption: developing economies gradually shift toward the sectoral composition observed in industrialized economies. This reflects the empirical regularity that:

- Agriculture's share of GDP declines with development
- Industry's share rises initially, then stabilizes
- Services' share rises continuously with income

The convergence is implemented through linear interpolation from base year shares toward long-term target shares:

.. math::

    s_{i,t} = s_{i,\text{base}} + \frac{t - t_{\text{base}}}{t_{\text{horizon}} - t_{\text{base}}} \times (s_{i,\text{target}} - s_{i,\text{base}})

where:

- :math:`s_{i,t}` is sector *i*'s share of GDP at time *t*
- :math:`s_{i,\text{base}}` is the observed base year share
- :math:`s_{i,\text{target}}` is the long-term target share

The services share is calculated as a residual to ensure shares sum to unity.


Elasticity Estimation
=====================

Econometric Methodology
-----------------------

Demand elasticities are estimated using log-log ordinary least squares (OLS) regression on historical data. This specification assumes a constant elasticity relationship between demand and its driver:

.. math::

    \ln(D_{r,s,t}) = \alpha_{r,s} + \beta_{r,s} \cdot \ln(X_{r,s,t}) + \varepsilon_{r,s,t}

where:

- :math:`D_{r,s,t}` is demand for sector *s* in region *r* at time *t*
- :math:`X_{r,s,t}` is the driver value
- :math:`\beta_{r,s}` is the elasticity (the parameter of interest)
- :math:`\alpha_{r,s}` is the intercept
- :math:`\varepsilon_{r,s,t}` is the error term

The coefficient :math:`\beta` represents the percentage change in demand associated with a one percent change in the driver---the demand elasticity.

Quality Filtering
-----------------

Estimated elasticities undergo rigorous quality control:

**Statistical Significance**
    Only relationships with p-value < 0.05 are retained, ensuring the estimated elasticity is statistically distinguishable from zero.

**Model Fit**
    Adjusted R-squared thresholds filter out poorly fitting models. The threshold is configurable by time period, allowing stricter criteria for periods with more stable data.

**Elasticity Bounds**
    Elasticity values are evaluated against economic reasonableness:
    
    - **0 < beta <= 2**: Accepted without review
    - **2 < beta <= 3**: Flagged for expert review
    - **beta > 3 or beta <= 0**: Rejected as implausible

Data Exclusions
---------------

The years 2020 and 2021 are excluded from elasticity estimation due to the anomalous economic and energy consumption patterns induced by the COVID-19 pandemic. Including these years would distort the estimated long-run relationships.

Driver Selection
----------------

A key feature of the methodology is that drivers are not assigned a priori. Instead, multiple candidate drivers are evaluated for each sector, and the best-performing driver is selected based on statistical fit.

For each region-sector combination:

1. All candidate drivers are regressed against historical demand
2. Regressions passing quality filters are ranked by Adjusted R-squared
3. The highest-ranking driver is selected

This data-driven approach ensures that driver assignments reflect actual historical relationships rather than theoretical assumptions. The result is that different regions may use different drivers for the same sector---for example, passenger car travel may be driven by GDP per capita in developed economies but by population growth in rapidly urbanizing developing economies.

Hierarchical Fallback
---------------------

When a region has insufficient historical data or poor model fit at the individual region level, the system employs hierarchical fallback:

1. **Model Region**: First attempt estimation at the finest regional granularity
2. **Aggregate Region**: If unsuccessful, pool data across similar regions
3. **World**: As a last resort, use global average elasticity

This ensures every region-sector combination receives a defensible elasticity estimate, even for regions with sparse data.


Demand Projection
=================

Projection Formula
------------------

Future demands are projected using the constant elasticity formula:

.. math::

    D_{r,s,t} = D_{r,s,\text{base}} \times \left( \frac{X_{r,s,t}}{X_{r,s,\text{base}}} \right)^{\beta_{r,s}}

where:

- :math:`D_{r,s,t}` is projected demand for sector *s* in region *r* at time *t*
- :math:`D_{r,s,\text{base}}` is the calibrated base year demand
- :math:`X_{r,s,t}` is the projected driver value from SSP scenarios
- :math:`X_{r,s,\text{base}}` is the base year driver value
- :math:`\beta_{r,s}` is the estimated elasticity

This formulation preserves the base year calibration while allowing demands to evolve according to projected driver growth and empirically observed responsiveness.

Interpretation
--------------

Consider a region with:

- Base year residential appliance demand: 100 PJ
- GDP per household elasticity: 0.8
- Projected GDP per household growth: 50% by 2050

The projected 2050 demand would be:

.. math::

    D_{2050} = 100 \times (1.50)^{0.8} = 100 \times 1.38 = 138 \text{ PJ}

The elasticity of 0.8 implies that a 1% increase in GDP per household leads to a 0.8% increase in appliance demand---reflecting efficiency improvements and saturation effects that prevent demand from growing proportionally with income.


Demand Categories
=================

KiNESYS models demands across five major sectors. The appropriate driver for each demand is determined empirically through the elasticity estimation process described above.

Residential Sector
------------------

+-------+-------------------------------+---------+
| Code  | Description                   | Unit    |
+=======+===============================+=========+
| RCK   | Cooking                       | PJ      |
+-------+-------------------------------+---------+
| REA   | Appliances                    | PJ      |
+-------+-------------------------------+---------+
| RHW   | Hot water                     | PJ      |
+-------+-------------------------------+---------+
| RLI   | Lighting                      | PJ      |
+-------+-------------------------------+---------+
| ROT   | Other                         | PJ      |
+-------+-------------------------------+---------+
| RRF   | Refrigeration                 | PJ      |
+-------+-------------------------------+---------+
| RSC   | Space cooling                 | PJ      |
+-------+-------------------------------+---------+
| RSH   | Space heating                 | PJ      |
+-------+-------------------------------+---------+

Commercial Sector
-----------------

+-------+-------------------------------+---------+
| Code  | Description                   | Unit    |
+=======+===============================+=========+
| CCK   | Cooking                       | PJ      |
+-------+-------------------------------+---------+
| CHW   | Hot water                     | PJ      |
+-------+-------------------------------+---------+
| CLA   | Lighting and appliances       | PJ      |
+-------+-------------------------------+---------+
| COE   | Other electric                | PJ      |
+-------+-------------------------------+---------+
| COT   | Other                         | PJ      |
+-------+-------------------------------+---------+
| CRF   | Refrigeration                 | PJ      |
+-------+-------------------------------+---------+
| CSC   | Space cooling                 | PJ      |
+-------+-------------------------------+---------+
| CSH   | Space heating                 | PJ      |
+-------+-------------------------------+---------+

Industry Sector
---------------

+-------+-------------------------------+---------+
| Code  | Description                   | Unit    |
+=======+===============================+=========+
| IFP   | Food processing               | PJ      |
+-------+-------------------------------+---------+
| ILP   | Pulp and paper                | Mt      |
+-------+-------------------------------+---------+
| IMC   | Mining and construction       | PJ      |
+-------+-------------------------------+---------+
| INF   | Non-ferrous metals            | Mt      |
+-------+-------------------------------+---------+
| INM   | Non-metallic minerals         | Mt      |
+-------+-------------------------------+---------+
| IOI   | Other industry                | PJ      |
+-------+-------------------------------+---------+
| IPC   | Petrochemicals                | Mt      |
+-------+-------------------------------+---------+
| IS    | Iron and steel                | Mt      |
+-------+-------------------------------+---------+
| ITM   | Transport equipment and       | PJ      |
|       | machinery                     |         |
+-------+-------------------------------+---------+
| ONO   | Other non-specified           | PJ      |
+-------+-------------------------------+---------+

Transport Sector
----------------

+----------+-------------------------------+---------+
| Code     | Description                   | Unit    |
+==========+===============================+=========+
| Trd_2w   | Road: 2-wheelers              | Bvkm    |
+----------+-------------------------------+---------+
| Trd_3w   | Road: 3-wheelers              | Bvkm    |
+----------+-------------------------------+---------+
| Trd_bus  | Road: buses                   | Bvkm    |
+----------+-------------------------------+---------+
| Trd_car  | Road: passenger cars          | Bvkm    |
+----------+-------------------------------+---------+
| Trd_hdt  | Road: heavy trucks            | Bvkm    |
+----------+-------------------------------+---------+
| Trd_lcv  | Road: light commercial        | Bvkm    |
|          | vehicles                      |         |
+----------+-------------------------------+---------+
| TAD      | Aviation: domestic            | PJ      |
+----------+-------------------------------+---------+
| TAI      | Aviation: international       | PJ      |
+----------+-------------------------------+---------+
| TTF      | Rail: freight                 | PJ      |
+----------+-------------------------------+---------+
| TTP      | Rail: passenger               | PJ      |
+----------+-------------------------------+---------+
| TWD      | Shipping: domestic            | PJ      |
+----------+-------------------------------+---------+
| TWI      | Shipping: international       | PJ      |
+----------+-------------------------------+---------+

Agriculture and Other
---------------------

+-------+-------------------------------+---------+
| Code  | Description                   | Unit    |
+=======+===============================+=========+
| AGR   | Agriculture                   | PJ      |
+-------+-------------------------------+---------+
| NEU   | Non-energy uses               | PJ      |
+-------+-------------------------------+---------+


Data Sources
============

**SSP Database**
    Shared Socioeconomic Pathways projections for GDP, population, and households. Version 3 provides projections for years 2023-2100 in 5-year intervals, with annual interpolation for near-term years.

**World Bank Development Indicators**
    GDP sectoral shares (agriculture, industry, services, manufacturing as percentage of GDP). Latest available year per country, normalized and projected to 2100 using convergence assumptions.

**Historical Energy Balances**
    IEA and regional energy statistics for base year demand calibration and elasticity estimation.

**Regional Mapping**
    Countries are aggregated to model regions using a configurable mapping table that supports multiple regional definitions.
