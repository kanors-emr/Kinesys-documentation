############
Data Sources
############

KiNESYS integrates data from leading international organizations and research institutions. This page documents the primary sources used to construct model instances.

.. note::

    Data is stored in a relational database in its native form, enabling straightforward updates when new versions become available. SQL scripts process and transform this data into VEDA-TIMES compatible formats.


Energy Balances and Statistics
==============================

**IEA World Energy Balances (2025)**
    Comprehensive energy statistics covering production, transformation, and final consumption by country, fuel, and flow. The foundation for base year calibration across all sectors.
    
    *Update frequency: Annual*


**IEA World Energy Statistics**
    Detailed statistics on gas production, trade, and consumption. Supports gas sector calibration.


Macroeconomic Projections
=========================

**IIASA SSP Database (Version 3)**
    Shared Socioeconomic Pathways projections for GDP (PPP) and population under five socioeconomic narratives (SSP1-SSP5). Provides projections from base year to 2100 at country level.
    
    *Reference: Riahi et al. (2017), Global Environmental Change*

**World Bank World Development Indicators**
    GDP sectoral composition — agriculture, industry, services, and manufacturing as percentage of GDP. Used to disaggregate total GDP into sector-specific drivers with structural convergence assumptions.
    


Power Sector
============

**S&P Global Platts WEPP**
    World Electric Power Plants database with unit-level details including capacity, fuel type, commissioning year, and cooling technology. Provides the foundation for vintaged existing stock representation.

**IRENA Renewable Capacity Statistics**
    Installed renewable electricity capacity by country and technology. Used for renewable capacity calibration and validation.
    
    *Update frequency: Annual*

**IEA World Energy Outlook**
    Technology cost assumptions and regional scenario projections. Used for scenario benchmarking (Stated Policies, Announced Pledges, Net Zero scenarios).
    
    *Update frequency: Annual*

**IEA Global Energy and Climate (GEC) Model Dataset (WEO 2023)**
    Regionally differentiated techno-economic parameters for 26 power generation technologies across 9 world regions under the Stated Policies (STEPS) scenario. Provides overnight capital costs, fixed O&M, thermal efficiency, capacity factors, and construction times. Primary source for regional absolute cost levels used in the unified reference cost dataset.
    
    *Technologies:* Gas (CCGT, gas turbine, CCGT-CHP, fuel cell, CCGT+CCS), Coal (subcritical, supercritical, ultra-supercritical, IGCC, three CCS variants), Nuclear, Renewables (solar PV, CSP, wind on/offshore, hydro, biomass, geothermal)
    
    *Regions:* European Union, United States, Japan, Russia, China, India, Middle East, Africa, Brazil
    
    *Time points:* 2022, 2030, 2050
    
    *Currency:* USD 2022

**NREL Annual Technology Baseline (ATB) 2024v3**
    US-specific technology cost projections under Conservative, Moderate, and Advanced scenarios reflecting different rates of technological progress. Used to derive hi/lo cost uncertainty spread multipliers (ratio of Conservative/Advanced to Moderate) applied to IEA GEC regional costs. Also the sole source for utility-scale battery storage costs (4-hour and 8-hour Li-ion), which are applied uniformly across all regions.
    
    *Technologies:* All major generation technologies plus utility-scale battery storage
    
    *Time points:* Annual from 2022 to 2050
    
    *Currency:* USD 2022


Gas and LNG Infrastructure
==========================

**Global Energy Monitor - Global Gas Infrastructure Tracker**
    Pipeline capacity, operational status, start years, and routes for gas pipelines worldwide. Used to construct interregional gas trade links.
    
    *Update frequency: Quarterly*

**Global Energy Monitor - Global LNG Infrastructure Tracker**
    
    Liquefaction and regasification terminal capacity by country. Used for LNG trade infrastructure.


Oil and Gas Supply
==================

**KAPSARC analysis**
    Oil and gas production projections by breakeven price category. Accessed via KAPSARC partnership. Used to construct supply curves with price-responsive behavior.



Biomass and Land Use
====================

**IIASA GLOBIOM**
    Global Biosphere Management Model output providing biomass potential by type (energy crops, residues, forestry), price tier, and scenario. Downscaled to country level based on IEA primary biomass production.
    
    *Reference: Havlik et al. (2014), Global Change Biology*


Industrial Sector
=================

**USGS Mineral Commodity Summaries**
    Mineral production statistics by country covering non-ferrous metals, non-metallic minerals, and other industrial commodities.
    
    *Update frequency: Annual*

**FAO FAOSTAT**
    Agricultural and forestry production statistics including paper and pulp production. Used for industrial demand calibration.
    
    *Update frequency: Annual*

**Global Energy Monitor - Global Steel Infrastructure Tracker**
    *Source to be confirmed: Global Energy Monitor Steel Tracker / World Steel Association / Custom compilation*
    
    Steel plant capacities by technology route (BF-BOF, EAF, DRI). Used for steel sector calibration.


Transport
=========

**OICA - Global Vehicle Population Data**
    *Source to be confirmed: OICA / IEA Mobility Model / National statistics*
    
    Vehicle stocks by type (cars, trucks, buses, 2-wheelers, 3-wheelers) and country. Used for transport demand calibration.


Renewable Energy Potential
==========================

**World Bank ESMAP REZoning**
    Renewable energy potential by zone and cost class, covering solar PV and onshore wind. Provides technical and economic potential with spatial granularity.

**CM SAF SARAH + ECMWF ERA5**
    Satellite-derived solar irradiance (SARAH) and reanalysis wind speed (ERA5) data. Provides hourly capacity factor profiles for solar and wind resources at grid-cell level.


Renewable Resource Characterization
===================================

KiNESYS employs detailed spatial data for renewable energy characterization, enabling cluster-specific generation profiles and supply curves.

**Atlite Grid-Cell Capacity Factors**
    Hourly capacity factor profiles (8760 hours) for solar, wind onshore, and wind offshore at 50km² grid-cell resolution. Derived from ERA5 (wind) and SARAH (solar) reanalysis data through the Atlite library.
    
    *Technologies*: Solar PV, Wind Onshore, Wind Offshore
    
    *Resolution*: 50km² grid cells, hourly (8760 values per cell per year)
    
    *Weather Years*: 2010, 2013 (default), 2016, 2019
    
    *Coverage*: Global, 211 countries
    
    *Reference*: Hofmann et al. (2021), Journal of Open Source Software

**REZoning Economic Potential Database**
    Grid-cell level renewable energy potential by cost class, including land availability after exclusions (protected areas, urban, water bodies), terrain factors, and grid connection distance estimates. Derived from PyPSA-Earth preprocessing methodology.
    
    *Attributes per cell*: Technical potential (MW), cost class tier, coordinates, land availability
    
    *Technologies*: Solar PV, Wind Onshore, Wind Offshore
    
    *Source*: KanORS-EMR compilation based on PyPSA-Earth methodology

**IRENA Renewable Capacity and Generation Statistics**
    National-level installed renewable electricity capacity and annual generation by technology. Used for base year calibration, validation of potential estimates, and allocation of existing capacity to spatial clusters.
    
    *Technologies*: Solar PV, Wind Onshore, Wind Offshore, Hydro, Biomass, Geothermal
    
    *Update frequency*: Annual
    
    *Usage*: Existing capacity allocation to clusters based on capacity factor matching

**Global Energy Monitor - Solar and Wind Power Trackers**
    Unit-level existing and planned solar PV, onshore wind, and offshore wind installations worldwide. Provides coordinates, capacity (MW), status, and technology type. Each unit is mapped to its nearest REZoning grid cell within the same country, and its capacity is subtracted from the cell's technical potential before clustering to ensure supply curves reflect only greenfield potential.
    
    *Update frequency*: Quarterly
    
    *Usage*: Greenfield potential adjustment (existing capacity deduction from REZoning grid cells)

**City Population Database**
    Coordinates and population of major cities (>100,000 population) worldwide. Used to compute connection costs from renewable resource clusters to nearest demand centers.
    
    *Source*: Natural Earth / UN World Urbanization Prospects


Carbon Capture and Storage
==========================

**ETSAP-TIAM CO2 Storage Assessment**
    Global CO2 storage potential by storage type (saline aquifers, depleted oil/gas fields, coal seams). Based on Hendriks et al. (2004) and Dooley et al. (2005), downscaled to national level using weighting factors (coastline, area, cumulative fossil production).



Climate Data
============

**IEA/KAPSARC Heating and Cooling Degree Days**
    Population-weighted heating degree days (HDD) and cooling degree days (CDD) by country. Used to inform space heating and cooling demand and fuel-to-end-use splits in buildings.


Electricity Demand Load Curves
===============================

**ECMWF ERA5 Climate Reanalysis (2013)**
    Modeled hourly electricity load for 211 countries based on temperature-driven demand patterns. Provides globally consistent 8760-hour load profiles for weather year 2013. Used as the primary source for countries without high-quality measured data.
    
    *Reference: Hersbach et al. (2020), Quarterly Journal of the Royal Meteorological Society*
    
    *Update frequency: Available for multiple weather years, 2013 as standard*

**WuHaochi China Provincial Load Data (2016-2020)**
    Actual hourly electricity load by province (31 provinces). Aggregated to national level to replace ERA5 modeled data for China, ensuring realistic representation of industrial and residential patterns in the world's largest electricity consumer.
    
    *Source: Zenodo open data repository*
    
    *Coverage: 5 years of provincial data, 43,800 hourly observations per province*

**ENTSO-E Transparency Platform**
    Actual hourly load data for European countries and bidding zones. Used for ERA5 validation, quality assessment, and as reference for evaluating sectoral disaggregation methodology accuracy.
    
    *Update frequency: Real-time, historical archives available from 2015*
    
    *Coverage: 35+ European countries with transmission system operator data*

**Atlite Hourly Capacity Factor Profiles (2013)**
    Solar photovoltaic and wind (onshore/offshore) generation profiles at country level derived from MERRA2 and ERA5 climate reanalysis. Provides synchronized temporal correlation between renewable generation potential and electricity demand.
    
    *Reference: Based on Atlite toolkit for renewable energy modeling*
    
    *Resolution: Country-level aggregation of grid-cell capacity factors*
