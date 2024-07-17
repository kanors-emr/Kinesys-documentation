##################
Demand projection
##################

As a demand driven model KiNESYS requires projection of the main demand drivers to project useful energy demands in the future. A list of the demands are given below, along with the default drivers used for developed and emerging economies:


    .. csv-table::
        :file: tables/demands list.csv
        :widths: 20,25,5,25,25
        :header-rows: 1

* The main drivers, GDP and Population, are sourced from the SSP Database (Shared Socioeconomic Pathways).
    * GDP and Population for specific countries or regions can be replaced by other sources.
* Household are estimated as half of the population between 18 and 65 years of age.
* The World Bank Development Indicators (WDI) are used to split the GDP in base year and projected to converge to shares observed in industrialised economies in the long-term.
