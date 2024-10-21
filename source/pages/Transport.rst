###########
Transport
###########

Road Transportation in KiNESYS
==============================

The KiNESYS framework models road transportation by capturing a wide range of vehicle types, fuel sources, and technological transitions. It enables users to explore how different policy measures, fuel mixes, and technologies can influence the energy use and emissions of the transport sector. By simulating multiple pathways toward decarbonization, KiNESYS provides valuable insights into how the transport sector can evolve over time, with a focus on electrification, biofuels, and hydrogen as key components of the energy transition.

Structural Description
-----------------------

The road transportation sector in KiNESYS is structured around key vehicle categories and their associated fuels and technologies. Each segment is modeled to reflect the specific energy demands and technological trends of various transport modes:

1. **Vehicle Segments**:
    - **Cars**: This category includes ICE vehicles, hybrids, PHEVs, BEVs, and HFCVs. It models both private and commercial passenger vehicles, which are a primary focus of decarbonization efforts.
    - **Heavy-Duty Trucks (HDTs)**: Key for freight transport, this segment includes trucks powered by diesel, natural gas, electric batteries, and hydrogen fuel cells.
    - **Light Commercial Vehicles (LCVs)**: Typically used for urban goods delivery, LCVs are modeled with gasoline, diesel, CNG, electric, and hydrogen fuel options.
    - **Buses**: Includes diesel, CNG, hybrid, electric, and hydrogen buses, which are central to public transport systems.
    - **2-3 Wheelers**: Particularly relevant in urban areas and emerging economies, this segment captures both gasoline and electric motorcycles and scooters.

2. **Fuel Types and Technology Pathways**:
    - **Oil Products**: The model captures the current reliance on gasoline and diesel in road transport and how this diminishes over time as other fuels like electricity, biofuels, and hydrogen gain prominence.
    - **Grid Electricity**: BEVs and electric buses play a significant role in reducing emissions, with grid electricity becoming the dominant fuel for urban transport and light-duty vehicles in many decarbonization scenarios.
    - **Biofuels**: Biofuels provide a bridge to full decarbonization, especially for heavy-duty vehicles and aviation where full electrification is not immediately viable.
    - **Hydrogen**: Hydrogen is modeled as a key solution for long-haul transport and freight, particularly in the form of hydrogen fuel cell trucks and buses.
    - **Natural Gas (CNG)**: Used as a transition fuel in the short term, CNG powers public buses and some freight vehicles, offering lower emissions than diesel but eventually giving way to zero-emission alternatives like electricity and hydrogen.

Illustrative Results
--------------------

The KiNESYS model simulates multiple decarbonization pathways, with results that illustrate how different fuel and technology transitions can shape the future of transport:

- **Electrification**: In scenarios aiming for rapid decarbonization, grid electricity becomes the dominant fuel for private cars, light-duty trucks, and buses by mid-century. Battery electric vehicles (BEVs) are projected to dominate urban mobility, with charging infrastructure expanding to support both public and private EVs.

- **Hydrogen Adoption**: For long-distance and heavy-duty transport, hydrogen fuel cells emerge as a crucial technology. In scenarios focused on deep decarbonization, hydrogen is heavily adopted for trucks, buses, and shipping, replacing diesel in sectors that are difficult to electrify.

- **Biofuels in Transition**: As biofuels are blended with conventional fuels, they help reduce emissions in the near term, particularly in heavy freight and aviation, where electrification and hydrogen adoption take longer to scale. In some scenarios, biofuels remain a key fuel for aviation and maritime transport even as road transport shifts to electricity and hydrogen.

Regional Differences
--------------------

While the overall structure of the transport sector is consistent across regions, there are significant differences in how fuel transitions and technologies are adopted:

- **China**: China leads the shift toward electrification, particularly in urban transport. Electric cars and buses become mainstream early on, supported by extensive infrastructure investments. Hydrogen adoption is also significant, especially for freight and shipping.

- **India**: India focuses on the electrification of two-wheelers and buses, with grid electricity playing a major role in urban mobility. However, biofuels and CNG remain prominent in freight and public transport in the short term before being replaced by hydrogen and electricity.

- **North America**: The transition to clean fuels is slower initially, with oil products remaining dominant in freight and aviation. However, by mid-century, hydrogen becomes a key player in decarbonizing heavy-duty trucks, and electric cars and light trucks see widespread adoption, particularly in urban areas.

Non-Road Transportation in KiNESYS
==================================

In KiNESYS, non-road transportation sectors—such as rail, aviation, and shipping—are modeled exogenously. Due to the elaborate infrastructure requirements and distinct sectoral considerations, these sectors are treated as fixed energy demands. While there is some responsiveness to price signals, the shares of key fuels like electricity, hydrogen, and green ammonia are determined based on predefined storylines that capture regional and global decarbonization narratives.

This approach allows for flexibility in shaping the future energy mix of non-road transport, while reflecting real-world constraints such as infrastructure development, fuel availability, and long-term investments in these sectors.

Illustrative Results
--------------------

The following results illustrate how the shares of electricity, hydrogen, biofuels, and green ammonia evolve over time for non-road transport, based on scenario modeling.

1. **Rail**:
    - **Electrification of Rail**: In both **Base** and **NetZero** scenarios, the share of **electricity** in rail transport increases steadily. In **passenger rail**, electricity becomes the dominant energy source by mid-century in several regions, with rapid electrification seen in **China** and **India**. For **freight rail**, electricity also plays an increasing role, although **oil products** and **biofuels** remain significant in the **Base** scenario.

    - **Hydrogen in Freight Rail**: In the **NetZero** scenario, **hydrogen** begins to replace oil products in **freight rail**, especially in regions with long-distance rail networks, such as **North America** and **China**. The shift to hydrogen is slower compared to passenger rail, but by 2050, it becomes a key fuel for decarbonizing long-haul freight.

2. **Aviation**:
    - **Sustainable Aviation Fuels (SAF)**: In the **Base** scenario, both **domestic** and **international aviation** continue to rely primarily on **oil products**, such as kerosene. However, **biofuels** begin to gain traction in the fuel mix, particularly in **international aviation** by 2035, where sustainable aviation fuels (SAF) are blended with traditional fuels. By 2050, biofuels take a larger share, but oil products still dominate in most regions.

    - **Hydrogen in Aviation**: In the **NetZero** scenario, hydrogen begins to emerge as a key fuel, especially for **domestic aviation**. Hydrogen adoption in **international aviation** is slower, but by 2050, it begins to compete with **biofuels** for long-haul flights, particularly in regions with strong decarbonization policies like **China**.

3. **Shipping**:
    - **Green Ammonia and Biofuels in International Shipping**: In the **Base** scenario, **international shipping** continues to rely heavily on **oil products**, particularly for long-distance freight. However, by 2050, **biofuels** begin to replace oil products in regions such as **India** and **North America**. In the **NetZero** scenario, **green ammonia** becomes a major fuel in international shipping, particularly in regions with strong emissions reduction targets, such as **China**.

    - **Hydrogen in Domestic Shipping**: For **domestic shipping**, **hydrogen** adoption accelerates in the **NetZero** scenario, replacing oil products by mid-century in key regions like **North America**. Hydrogen-powered vessels dominate coastal and short-range shipping, contributing significantly to emissions reduction in the sector.

