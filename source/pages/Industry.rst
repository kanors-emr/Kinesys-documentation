########
Industry
########

* Fuel consumption by sub-sector sourced from IEA energy balance. The breakdown of the industrial sectors can be seen below, together with the correspondence with the sectoral breakdown used in the IEA energy balances

    .. csv-table:: Industry sub-sectors represented in KiNESYS
        :file: tables/industrial sectors breakdown.csv
        :widths: 10,20,45,25
        :header-rows: 1

* End-use fuel consumption splits into energy services sourced from 2018 MECS

    .. csv-table:: Energy services in KiNESYS
        :file: tables/MECS services.csv
        :widths: 10,30,60
        :header-rows: 1

* Physical production of industries sourced from USGS and FAOStats
* New technologies (producing energy services) sourced from EPA-US9r model

Iron and Steel Sector
^^^^^^^^^^^^^^^^^^^^^

The steel sector is a critical component of the global economy and plays a significant role in industrial emissions. The KiNESYS Global Energy System Model provides a comprehensive framework for analyzing the steel industry’s production, energy consumption, and CO₂ emissions across different regions and technologies. This section outlines the extent to which the near-term projections reflect current ground realities and how the model explores low-carbon pathways for future steel production.

Alignment with Near-Term Realities
----------------------------------

The KiNESYS model’s near-term projections for steel production capacity, energy inputs, and outputs are calibrated to align closely with recent industrial data. The model incorporates up-to-date information from various sources, including:

- **Historical Production Capacities**: Installed capacities for steel production technologies such as Blast Furnace-Basic Oxygen Furnace (BF-BOF), Electric Arc Furnace (EAF), and Direct Reduced Iron (DRI) reflect actual industry data for 2019. These figures are region-specific and account for differences in technology adoption across major steel-producing regions such as China, the European Union, India, and North America.
- **Energy Consumption and Input Data**: The model uses detailed input data for raw materials like iron ore, scrap, coal, and natural gas. Near-term values for energy consumption in Petajoules (PJ) are consistent with historical energy use in the steel sector, ensuring that the model accurately captures current efficiencies and practices in steel production.
- **Emissions Data**: Near-term emissions estimates are based on well-established emissions factors for each steelmaking process, including both process and combustion-related CO₂ emissions. The model’s outputs for 2019 to 2025 closely mirror observed emissions levels from national inventories and industry reports, providing a reliable baseline for future projections.

This close alignment with real-world data ensures that the KiNESYS model provides a credible representation of current industry trends. The calibrated near-term data also improves the accuracy of long-term projections and scenario analyses.

Exploring Low-Carbon Pathways for Steel Production
--------------------------------------------------

The KiNESYS model is designed to explore low-carbon pathways for steel production, allowing users to assess the impact of technological and policy shifts on the sector’s emissions and energy use. The model covers multiple low-carbon technologies and scenarios that offer insights into the future of decarbonized steelmaking.

Technology Granularity
~~~~~~~~~~~~~~~~~~~~~~

KiNESYS includes a wide range of steel production technologies, both conventional and low-carbon:

- **Conventional Technologies**:

  - **Blast Furnace-Basic Oxygen Furnace (BF-BOF)** remains the dominant technology, but the model also incorporates existing alternative technologies such as **Electric Arc Furnaces (EAF)**, which use scrap steel, and **Direct Reduced Iron (DRI)**, which can be produced using natural gas or coal.

  - **Best Available Technology BF-BOF (BAT_BF-BOF)** is also represented to capture the improvements in efficiency and emissions reductions from deploying the latest technologies.

- **Low-Carbon Innovations**:

  - **Hydrogen-based DRI (H2-DRI)** represents a significant future potential, where hydrogen replaces natural gas or coal as the reducing agent. This technology has a smaller footprint in the early years but grows substantially in the **Net-Zero** scenario.

  - **Carbon Capture and Storage (CCS)**: Integrated with both BF-BOF and DRI technologies, the model includes CCS options, such as **Gas-DRI with CCS (Gas-DRI_ccs)** and **DRI-Melt-BOF with CCS (DRI-Melt-BOF_ccs)**, which drastically reduce process emissions.

The following table provides **indicative results** for **Hot Metal**, **Sponge Iron**, and **Crude Steel** production by technology for 2030, 2040, and 2050 in two scenarios:

    .. csv-table:: Indicative results (Global numbers)
        :file: tables/indicativeresults.csv
        :widths: 34,11,11,11,11,11,11
        :header-rows: 1

Scenario Analysis for Decarbonization
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

The KiNESYS model explores different policy scenarios, including a **No Policy Reference** scenario and a **Net-Zero** scenario for 2050:

- **No Policy Reference**: The steel industry remains largely dependent on traditional high-emission technologies like **Blast Furnace (BF)** and **Basic Oxygen Furnace (BOF)**, with minimal adoption of low-carbon innovations.

- **Net-Zero Scenario**: The industry transitions to low-carbon technologies such as **Hydrogen-based DRI** and **DRI with CCS**, leading to a significant reduction in emissions. **BF** and **BOF** usage drops sharply, while technologies like **DRI-Melt-BOF with CCS** play a dominant role, with 688 Mt of production.

Key Technology Substitutions
~~~~~~~~~~~~~~~~~~~~~~~~~~~~

- **BF to EAF**: In the **Net-Zero** scenario, the **BF-BOF** technology, producing over 2000 Mt globally in 2019, is expected to be replaced by **EAF**, which grows from 350 Mt in the **No Policy** scenario to almost 850 Mt in the **Net-Zero** scenario by 2050. This shift reflects increased scrap availability and electrification trends.

- **Gas-DRI to H2-DRI**: The model shows a key substitution from **Gas-DRI** to **Hydrogen-based DRI (H2-DRI)**, reflecting the deployment of hydrogen as a low-carbon alternative in steelmaking. While **Gas-DRI** production remains significant in the **No Policy** scenario, it reduces dramatically in **Net-Zero**, with hydrogen taking over part of the production.

- **CCS Integration**: A significant feature of the **Net-Zero** scenario is the widespread deployment of **CCS** technologies. **DRI-Melt-BOF_ccs** alone accounts for 688 Mt of production, showing that CCS could be a viable route for maintaining steel production while reducing emissions.

Appropriateness of Results
~~~~~~~~~~~~~~~~~~~~~~~~~~

The KiNESYS model results align well with industry trends and expert analyses of decarbonization pathways for the steel sector.
The increased adoption of **EAF** and **Hydrogen-based DRI** reflects industry expectations for shifts towards low-carbon technologies in the coming decades.

Petrochemical sector
^^^^^^^^^^^^^^^^^^^^
*This development occurred in October 2024*

The petrochemical model within **KiNESYS** provides a detailed representation of global **petrochemical production**, capturing key commodities and processes across various regions. It aims to support the exploration of **decarbonization pathways** by modeling the sector's dependence on different **feedstocks** and **energy sources**, and assessing the impact of **alternative technologies** and **policy measures**. The model includes a range of processes and products essential to the petrochemical industry, allowing for a comprehensive analysis of **emissions reduction strategies**.

Scope and Coverage
------------------

1. **Regional Representation**:
   - The model covers **global production** with data broken down by major regions, including **North America, Europe, Asia**, and **Africa**. This allows for the assessment of **regional feedstock preferences**, **technology adoption**, and **energy use patterns**, reflecting the diversity of the petrochemical industry worldwide.

2. **Key Products and Processes**:
    - The petrochemical model focuses on essential products such as **ammonia, methanol, ethylene, propylene, benzene, toluene, xylenes (BTX)**, and **plastics** like **polyethylene** and **polypropylene**.
    - It represents the major **transformation processes**, including:
        - **Steam Cracking**: A key process for producing **olefins** (ethylene, propylene) from feedstocks such as **Natural Gas Liquids (NGLs)**, **naphtha**, and **light hydrocarbons**.
        - **Ammonia Synthesis**: Modeled using the **Haber-Bosch process**, incorporating both **natural gas-based** and **coal-based hydrogen production** routes.
        - **Methanol Production**: Covers **natural gas reforming** and **coal gasification** pathways, accounting for regional feedstock availability.
        - **Aromatics Production**: Includes **catalytic reforming** and **byproduct recovery** from steam cracking for producing **benzene, toluene,** and **xylenes (BTX)**.
        - **Chlor-Alkali Process**: Represents the **electrolysis of brine** to produce **chlorine** and **caustic soda**, highlighting the energy-intensive nature of this process.

3. **Energy Consumption and Feedstock Utilization**:
    - The model integrates **energy use** for each process, tracking **electricity**, **natural gas**, **coal**, and **steam** inputs. This detailed approach helps identify **energy-intensive operations** and supports the evaluation of potential improvements through **efficiency gains** and **alternative technologies**.
    - It also captures the diversity in **feedstock utilization**, reflecting the global variations in feedstock preferences (e.g., **ethane use in North America** vs. **naphtha in Europe and Asia**).

Key Features for Decarbonization Analysis
-----------------------------------------
1. **Low-Carbon Pathways**:
    - The model includes several **alternative pathways** for reducing emissions, such as the use of **green hydrogen** for ammonia and methanol production, **electrified steam cracking**, and **biomethane as a feedstock**. These options help assess the feasibility and impact of **shifting to low-carbon technologies**.

2. **Carbon Capture and Utilization (CCU)**:
    - It represents processes where **captured CO₂** is used as a feedstock (e.g., in **methanol synthesis**), enabling the analysis of **carbon capture and utilization** approaches for reducing emissions.

3. **Scenario Flexibility**:
    - The model allows for the simulation of various scenarios, including **feedstock changes**, **technology upgrades**, and **policy interventions** (e.g., carbon pricing), enabling a comprehensive assessment of different decarbonization strategies.

The petrochemical model is designed to support **decarbonization pathway analysis** by providing insights into the **energy and carbon intensity** of different production processes. It helps identify **carbon reduction opportunities** across the sector, evaluate the impact of **alternative technologies**, and understand the role of **regional policies** in shaping the future of petrochemical production.

The model’s ability to represent a range of **feedstock choices**, **emerging technologies**, and **carbon management strategies** makes it a valuable tool for exploring **net-zero goals** and supporting policy development in the context of **global decarbonization**.

Glass and Ceramics
^^^^^^^^^^^^^^^^^^

The **KiNESYS** model now includes a detailed and granular representation of **glass and ceramics production**, capturing the energy consumption, CO₂ emissions from chemical reactions,
and the CAPEX/OPEX across different technologies.

Glass Production Technologies
------------------------------

The model covers three main types of glass production: **fiberglass**, **flat glass**, and **blown glass**. Each type is modeled with a range of traditional and emerging decarbonization technologies:

- **Natural Gas Furnaces**: Widely used for all types of glass, this technology relies on fossil fuels, contributing to both energy consumption and CO₂ emissions. However, it remains the dominant technology in many regions due to existing infrastructure.

- **Oxy-Fuel Furnaces**: These offer an improvement over traditional natural gas furnaces by using pure oxygen to enhance combustion efficiency. This results in lower fuel consumption but still relies on natural gas as a primary energy source.

- **Electric Furnaces**: Fully electrified furnaces use electricity to achieve the high temperatures needed for melting raw materials. These furnaces have the potential to achieve near-zero emissions if powered by green electricity.

- **Hydrogen Co-firing Furnaces**: Hydrogen, either mixed with or replacing natural gas, offers a significant decarbonization opportunity by reducing CO₂ emissions from combustion. Green hydrogen can further lower the carbon footprint.

- **Bioenergy Furnaces**: Biomass replaces natural gas as the fuel, offering a carbon-neutral pathway if sustainably sourced.

Ceramics Production Technologies
---------------------------------

Ceramics production is modeled with similar detail to glass, capturing the diversity of technologies across tiles, sanitary ware, and other ceramic products. The main technologies represented include:

- **Tunnel and Roller Kilns**: These traditional kilns are widely used for tiles and bricks, primarily relying on natural gas for heating. Roller kilns offer higher efficiency and shorter firing cycles than tunnel kilns.

- **Electric Kilns**: Often used for sanitary ware, electric kilns provide precise temperature control and reduce reliance on fossil fuels. Decarbonization potential is high when powered by renewable electricity.

- **Hybrid Kilns (Hydrogen Co-firing)**: Co-firing natural gas with hydrogen provides a pathway to reducing emissions, with the potential for fully green hydrogen use in the future.

- **Bioenergy Kilns**: These kilns replace natural gas with biomass, providing a carbon-neutral option for firing ceramics.

Solvay Process for Soda Ash Production
--------------------------------------

Soda ash is a crucial input in both glass and ceramics production, and its production is modeled via the **Solvay process**. This energy-intensive process uses **salt (NaCl)**, **limestone (CaCO₃)**, and **ammonia** to produce soda ash. The calcination of limestone releases **200-250 kg CO₂/ton** of soda ash produced, contributing significantly to the carbon footprint of the glass and ceramics industries.

Energy Consumption and CO₂ Emissions
------------------------------------

The KiNESYS model tracks the **energy consumption** (GJ/ton or MWh/ton) and **CO₂ emissions from chemical reactions** (kg CO₂/ton) for each technology, focusing on the emissions from raw material decomposition, such as the calcination of limestone in both glass and ceramics production.

Decarbonization Pathways
-------------------------

The glass and ceramics sectors offer several pathways for decarbonization, including:

- **Switching to green hydrogen or biomass** to replace natural gas in furnaces.
- **Electrification** of production processes, coupled with decarbonized grids, to reduce emissions.
- **Carbon capture technologies** for processes like the Solvay process to mitigate CO₂ emissions from chemical reactions.
- **Increased recycling** of cullet in glass production, which reduces the energy required for melting.