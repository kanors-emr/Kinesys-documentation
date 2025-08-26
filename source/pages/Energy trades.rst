#############
Energy trades
#############

Energy trade modeling in KiNESYS covers electricity trade, gas infrastructure, and global commodity markets. The framework uses infrastructure data and trade statistics to model energy flows between regions.

Trade Coverage
==============

**Electricity Trade**
    Country-level trade information reported in UN Trade Statistics (for recent years) is used to estimate power transfer capacities between regions.

**Gas Infrastructure**  
    Gas pipelines and LNG terminals from Global Energy Monitor data are aggregated into model regions to represent natural gas trade flows.

**Global Commodity Markets**
    Generic global markets are included for crude oil and petroleum products, coal and coal products, biofuels, and hydrogen.

Gas Infrastructure Details
==========================

**Pipeline Networks**
    Natural gas pipeline modeling uses Global Energy Monitor (GEM) data on existing and planned pipeline projects. Pipeline capacities are aggregated from country-level data to model regional trade flows, with capacity calculations for operating, under construction, and proposed projects.

**LNG Trade System**  
    LNG trade modeling incorporates detailed terminal data from Global Energy Monitor covering both liquefaction (export) and regasification (import) facilities. The model includes existing LNG supply contracts from the Gas Liquefaction contracts database that provide baseline trade flows.

Hydrogen Trade Infrastructure
=============================

**International Trade Modeling**
    Based on the H2_trade_cost_matrix data, KiNESYS models hydrogen trade through three main transport modes:
    
    * **Liquid Hydrogen (LH2)**: Cryogenic hydrogen transport
    * **Liquid Organic Hydrogen Carriers (LOHC)**: Chemical hydrogen carriers  
    * **Ammonia**: Ammonia as hydrogen transport medium

**Export and Import Regions**
    The model includes bilateral trade links between selected export regions and demand regions:
    
    * **Export regions**: Australia, Chile, Saudi Arabia, Morocco, Norway, Canada, Oman, Namibia, UAE, South Africa, Russia, Kazakhstan, Iceland
    * **Import regions**: Major demand centers including Europe, Asia, and North America
    * **Trade costs**: Distance-based costs for production, conversion, transport, and reconversion