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
    Technology cost assumptions and regional scenario projections. Used for technology costs and scenario benchmarking (Stated Policies, Announced Pledges, Net Zero scenarios).
    
    *Update frequency: Annual*


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


Carbon Capture and Storage
==========================

**ETSAP-TIAM CO2 Storage Assessment**
    Global CO2 storage potential by storage type (saline aquifers, depleted oil/gas fields, coal seams). Based on Hendriks et al. (2004) and Dooley et al. (2005), downscaled to national level using weighting factors (coastline, area, cumulative fossil production).



Climate Data
============

**IEA/KAPSARC Heating and Cooling Degree Days**
    Population-weighted heating degree days (HDD) and cooling degree days (CDD) by country. Used to inform space heating and cooling demand and fuel-to-end-use splits in buildings.
