###########
Transport
###########

The transport sector accounts for approximately 28% of global final energy consumption. KiNESYS models transport across multiple modes with activity-based demands and technology competition for road transport, while non-road modes use predefined fuel share trajectories.

Transport Mode Coverage
=======================

KiNESYS models transport across multiple modes:

.. csv-table:: Transport Modes in KiNESYS
    :file: tables/Transportation modes.csv
    :widths: 15,25,15
    :header-rows: 1

**Road Transportation**
    Road transport includes detailed technology choice modeling across vehicle categories with competition between ICE, hybrid, PHEV, BEV, and FCEV options for different vehicle segments.

**Non-Road Transportation**
    Aviation, shipping, and rail are modeled exogenously with predefined fuel share trajectories that reflect infrastructure constraints and long asset lifetimes.

Road Transportation Vehicle Categories
======================================

Based on the transportation modes data, KiNESYS models the following road transport segments:

**Vehicle Categories**:
    - **Auto (Cars)**: Passenger vehicles measured in billion vehicle-kilometers
    - **Light Trucks**: Light commercial vehicles measured in billion vehicle-kilometers  
    - **Medium Trucks**: Medium freight vehicles measured in billion vehicle-kilometers
    - **Heavy Trucks**: Heavy freight vehicles measured in billion vehicle-kilometers
    - **Buses**: Public transport vehicles measured in billion vehicle-kilometers
    - **Two Wheels**: Motorcycles and scooters measured in billion vehicle-kilometers
    - **Three Wheels**: Auto-rickshaws and similar vehicles measured in billion vehicle-kilometers

**Technology Options**:
    Road transport modeling includes technology competition between ICE, hybrid, PHEV, BEV, and FCEV options across vehicle segments, with fuel switching between oil products, grid electricity, biofuels, hydrogen, and natural gas.

Non-Road Transportation
=======================

Based on the transportation modes data, KiNESYS models non-road transport exogenously:

**Aviation**:
    - **Domestic Aviation**: Measured in Petajoules
    - **International Aviation**: Measured in Petajoules

**Shipping**:
    - **Domestic Navigation**: Measured in Petajoules  
    - **International Navigation**: Measured in Petajoules

**Rail**:
    - **Freight Rail**: Measured in Petajoules
    - **Passenger Rail**: Measured in Petajoules

**Other**:
    - **Non Energy Uses**: Measured in Petajoules

These sectors are modeled with predefined fuel share trajectories that can incorporate biofuels, hydrogen, and other alternative fuels based on scenario assumptions.