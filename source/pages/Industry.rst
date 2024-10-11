########
Industry
########

* Fuel consumption by sub-sector sourced from IEA energy balance. The breakdown of the industrial sectors can be seen below, together with the correspondence with the sectoral breakdown used in the IEA energy balances

    .. csv-table::
        :file: tables/industrial sectors breakdown.csv
        :widths: 10,20,40,30
        :header-rows: 1

* End-use fuel consumption splits into energy services sourced from 2018 MECS

    .. csv-table::
        :file: tables/MECS services.csv
        :widths: 10,30,60
        :header-rows: 1

* Physical production of industries sourced from USGS and FAOStats
* New technologies (producing energy services) sourced from EPA-US9r model

Technology explicit representation of the Petrochemical sector
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
*The development occurred in October 2024*

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