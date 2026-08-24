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

Petrochemicals
==============

The petrochemical industry is a cornerstone of modern economies, providing essential materials for plastics, fertilizers, and synthetic chemicals. However, it is also a significant source of greenhouse gas emissions. KiNESYS models the petrochemicals sector in detail, capturing the complex processes, energy requirements, and potential pathways for decarbonization.


Scope and Coverage
------------------

**Key Product Categories**

    1. **Basic Chemicals**:

       - Ethylene, propylene, and aromatics (benzene, toluene, xylene).
       - Critical building blocks for a variety of end products.

    2. **Intermediates and Derivatives**:

       - Includes methanol, ammonia, and urea, which are widely used in fertilizers and industrial chemicals.
       - Captures production pathways for polyethylene, PVC, and synthetic rubbers.

    3. **End Products**:

       - Plastics, resins, and fibers used in construction, packaging, and textiles.

**Processes and Technologies**

1. **Steam Cracking**:
   - Models the primary process for producing ethylene and propylene.
   - Tracks energy use, feedstock variations (naphtha, ethane, propane), and emissions.

2. **Ammonia and Urea Production**:
   - Captures the energy-intensive Haber-Bosch process.
   - Includes CO₂ utilization in urea production as a decarbonization option.

3. **Polymerization**:
   - Tracks processes for converting monomers into polymers like polyethylene and polypropylene.
   - Includes energy inputs and associated emissions.

4. **Aromatics and Derivatives**:
   - Models processes like catalytic reforming and cracking for benzene, toluene, and xylene production.

5. **Methanol and Derivatives**:
   - Covers production from both fossil-based and renewable feedstocks (e.g., green methanol from CO₂ and hydrogen).

**Feedstock and Energy Inputs**

- **Fossil Feedstocks**:
   - Tracks naphtha, natural gas, coal, and LPG.
- **Renewable Alternatives**:
   - Includes bio-based feedstocks and hydrogen for green chemicals.
- **Energy Sources**:
   - Models electricity, steam, and heat demand across processes.

**Emissions and By-products**

- **Greenhouse Gas Emissions**:

   - Process emissions, including CO₂ from reforming and cracking.
   - Combustion emissions from energy use.
- **By-products**:

   - Tracks co-production of hydrogen, steam, and syngas for use in other sectors.


Key Features for Decarbonization Analysis
-----------------------------------------

1. **Electrification**

   - **Electric Steam Cracking**:

     - Models the replacement of conventional furnaces with electric cracking units powered by renewable electricity.
     - Evaluates technology readiness and scaling challenges.

2. **Feedstock Substitution**

   - **Bio-Based Feedstocks**:

     - Includes scenarios for shifting from fossil to biomass-derived naphtha or ethanol.
   - **Green Hydrogen Integration**:

     - Tracks the use of green hydrogen in ammonia, methanol, and other processes.

3. **Carbon Capture and Utilization (CCU)**

   - **Ammonia and Methanol**:

     - Models CO₂ capture and integration into products like urea and methanol.
   - **Polymer Production**:

     - Explores pathways for producing plastics with embedded carbon.

4. **Process Optimization**

   - **Heat Recovery**:

     - Includes waste heat recovery systems to improve overall energy efficiency.
   - **Catalyst Upgrades**:

     - Simulates the adoption of advanced catalysts for higher yields and lower emissions.

5. **Regional Contextualization**

   - Reflects regional variations in feedstock availability, energy infrastructure, and policy landscapes.
   - Customizes decarbonization strategies to align with local market conditions.


Model Outputs
-------------

- **Energy and Emissions Profiles**:

   - Comprehensive analysis of energy use and emissions for each production process.
   - Highlights the impacts of adopting renewable energy and alternative feedstocks.

- **Technology Scenarios**:

   - Tracks adoption rates for electrification, green hydrogen, and CCU technologies.
   - Evaluates costs, emissions reductions, and scalability.


Depth of Analysis
------------------

1. **Integrated Pathways**:

   - Links petrochemical production to upstream energy systems and downstream manufacturing industries.
   - Enables holistic assessments of value chain decarbonization.

2. **Policy and Market Impacts**:

   - Simulates the effects of carbon pricing, subsidies for green hydrogen, and CCU mandates.
   - Evaluates market shifts under global and regional decarbonization scenarios.

3. **Long-Term Strategies**:

   - Provides insights into the evolution of the sector under different technology and policy trajectories.
   - Supports planning for net-zero transitions.


Driving Change in the Petrochemical Industry
--------------------------------------------

The KiNESYS platform enables detailed analysis of the petrochemical sector, balancing its critical role in modern economies with the urgent need for decarbonization. By modeling advanced technologies and energy optimization strategies, it supports the transition to a sustainable future.

Iron and Steel
==============

The iron and steel sector is fundamental to modern infrastructure and industrial development, yet it remains one of the most energy-intensive and carbon-intensive industries globally. Within its multi-sector global energy system framework, KiNESYS models this sector with detailed representation of production routes, material flows, and decarbonization pathways. This granularity—embedded alongside power, transport, buildings, and other industrial sectors—enables integrated analysis of transition strategies from today's high-emission processes to tomorrow's low-carbon alternatives.


Scope and Coverage
------------------

**Production Routes**

KiNESYS models three distinct steelmaking pathways, each with unique characteristics, emission profiles, and decarbonization opportunities:

    1. **Blast Furnace - Basic Oxygen Furnace (BF-BOF) Route**:

       - The traditional, carbon-intensive pathway using iron ore and metallurgical coke
       - Modern BF: Advanced blast furnaces with improved efficiency and reduced emissions
       - Modern BF with CCS: Blast furnaces equipped with carbon capture and storage
       - Conventional BOF: Traditional basic oxygen furnaces for refining pig iron
       - Conventional BOF with CCS: BOF systems integrated with carbon capture technology
       - Coke ovens: Convert coking coal to metallurgical coke, producing valuable by-products

    2. **Direct Reduced Iron (DRI) Route**:

       - Cleaner alternative to blast furnaces, producing sponge iron for electric arc furnaces
       - Natural Gas-Based Midrex: Uses natural gas as the primary reducing agent
       - Natural Gas-Based Midrex with CCS: Midrex process with integrated carbon capture
       - Coal-Based Rotary Kiln: Uses coal for reduction in regions with limited gas access
       - Coal-Based Rotary Kiln with CCS: Coal-based DRI with emissions capture
       - Hydrogen-Based Reduction: Revolutionary pathway using green hydrogen for near-zero emissions

    3. **Electric Arc Furnace (EAF) Route**:

       - Predominantly scrap-based steelmaking with significantly lower emissions
       - Electric Arc Furnace: Primary technology for melting scrap and DRI
       - Induction Furnace: Smaller-scale, high-quality steel production
       - Ladle Refining Furnace: Secondary refining for precise composition control
       - Continuous Casting: Efficient conversion of molten steel to semi-finished products

**Supporting Infrastructure**

The model captures essential upstream and downstream processes:

    - **Ore Preparation**:
       - Pelletizing plants: Transform concentrated ore into pellets for blast furnaces or DRI
       - Sintering plants: Agglomerate iron ore fines for blast furnace feed
       - Crushing and beneficiation: Prepare raw ore for processing

    - **Material Handling**:
       - Cooling systems: Cool hot DRI for safe handling and transport
       - Briquetting: Compact DRI to improve density and handling characteristics
       - Transport logistics: Rail and truck transport of materials

**Feedstock and Energy Inputs**

    - **Primary Raw Materials**:
       - Iron ore (various grades and concentrations)
       - Coking coal for coke production
       - Limestone and dolomite as fluxing agents
       - Steel scrap (quality-graded for different applications)

    - **Alternative Inputs**:
       - Natural gas for DRI production
       - Green hydrogen for zero-emission reduction
       - Biomass and alternative fuels for process heat

    - **Energy Systems**:
       - Electricity: Critical for EAF route and hydrogen production
       - Process heat: Steam and thermal energy across production stages
       - By-product gases: Coke oven gas, blast furnace gas for energy recovery

**Material Flows and Commodities**

The model tracks over 25 distinct material commodities through the steel production chain:

    - Upstream: Iron ore, concentrated ore, pellets, sinter, coke
    - Intermediate: Pig iron, sponge iron (DRI), molten steel
    - Downstream: Refined steel, slabs, finished products
    - Additives: Fluxes, ferroalloys, refining agents
    - By-products: Slag, process gases, waste heat

**International Trade of Steel-Related Commodities**

Steel decarbonization is as much a story about restructuring global trade as it is about changing technology. KiNESYS explicitly models international trade for five key steel-sector commodities, each flowing through a global market mechanism across all regions:

    - **Iron ore** — the dominant seaborne commodity today (~1,580 Mt/yr), connecting mines in Australia, Brazil, and Africa to blast furnaces and DRI plants worldwide
    - **Coking coal** — essential feedstock for the BF-BOF route (~330 Mt/yr traded), highly concentrated among a few exporters
    - **Steel scrap** — increasingly traded as EAF capacity grows; availability constrained by accumulated steel stock in each region
    - **Sponge iron (DRI)** — a commodity that barely features in today's trade (~12 Mt) but emerges as a major flow under decarbonization, as DRI production gravitates to regions with cheap natural gas or renewable hydrogen and ships the intermediate product to steelmakers elsewhere
    - **Crude steel** — traded as semi-finished product; subject to configurable trade constraints to reflect real-world frictions such as reheating costs, quality-control requirements, and industrial policy preferences

Trade constraints can be applied at the commodity level to test the sensitivity of results to trade openness. For example, restricting crude steel trade forces the model to use sponge iron as the primary mechanism for international material flows — a choice with profound implications for port infrastructure, shipping patterns, and regional industrial structure.

The model reports regional exports (``VAR_FIn`` on global market processes) and imports (``VAR_FOut``), enabling analysis of bilateral trade patterns, net trade positions, and the geopolitical implications of different decarbonization pathways.

**Emissions and By-products**

    - **Greenhouse Gas Emissions**:

       - Process emissions from iron ore reduction (CO₂ from coke combustion)
       - Calcination emissions from limestone decomposition
       - Combustion emissions from fossil fuel use in heating and processing
       - Indirect emissions from electricity generation

    - **Valuable By-products**:

       - Coke oven gas: High-energy gas for process heating or power generation
       - Blast furnace gas: Lower-energy gas suitable for heating applications
       - Slag: Reusable in cement production and construction
       - Waste heat: Recoverable for district heating or power generation


Key Features for Decarbonization Analysis
-----------------------------------------

This granular representation enables exploration of questions along multiple dimensions:

1. **Hydrogen-Based Direct Reduction**

   - **Green Hydrogen Integration**:

        - Models the complete replacement of natural gas or coal with hydrogen in DRI production
        - Produces high-purity sponge iron with near-zero direct CO₂ emissions
        - Requires integration with renewable electricity for hydrogen production
        - Tracks infrastructure requirements and scaling challenges

   - **Technology Readiness**:

        - Evaluates pilot-scale demonstrations and commercial deployment timelines
        - Analyzes cost trajectories as hydrogen production scales
        - Assesses regional suitability based on renewable energy availability

2. **Carbon Capture and Storage (CCS)**

   - **BF-BOF with CCS**:

        - Captures up to 90% of process emissions from blast furnaces and steel plants
        - Models both post-combustion and pre-combustion capture technologies
        - Tracks retrofitting costs for existing facilities
        - Analyzes energy penalties and efficiency impacts

   - **DRI with CCS**:

        - Captures emissions from natural gas or coal-based DRI production
        - Evaluates technical feasibility and economic viability
        - Models integration with CO₂ transport and storage infrastructure

   - **CCS as an infrastructure-preservation choice**:

        - A distinguishing feature of KiNESYS's integrated approach: CCS availability does not merely reduce emissions — it determines whether the entire incumbent raw-material complex (iron ore mining, coking coal supply chains, blast furnace infrastructure, associated port and shipping capacity) survives the transition. Two pathways with identical carbon prices and similar emissions outcomes can produce completely different industrial structures depending on CCS availability, with far-reaching consequences for trade flows, regional employment, and infrastructure investment

3. **Scrap-Based Steelmaking**

   - **EAF Route Expansion**:

        - Tracks the evolution of scrap availability across 30 global regions
        - Models scrap quality grades and their suitability for different steel products
        - Analyzes the ~70% emissions reduction compared to primary steelmaking
        - Projects scrap supply growth based on historical steel production and stock accumulation

   - **Scrap Availability Dynamics**:

        - Time horizon: 2019-2050 with annual resolution
        - Regional differentiation: China, India, USA, EU, Brazil, and 25 other regions
        - Quality considerations: Obsolete scrap, prompt scrap, and home scrap
        - Circularity constraints: Physical limits on scrap-based production — model results consistently show scrap-EAF capping at around 40–45% of global crude steel demand even under maximum decarbonization, confirming that there is no purely circular future for steel. The remaining demand must be met by primary iron (via DRI or BF-BOF), which in turn drives continued iron ore trade

4. **Process Efficiency Improvements**

   - **Modern Technologies**:

        - Advanced blast furnaces with pulverized coal injection
        - Top-pressure recovery turbines for energy efficiency
        - Optimized coke oven designs with improved thermal efficiency
        - High-efficiency electric arc furnaces with scrap preheating

   - **Energy Recovery**:

        - Waste heat recovery from coke ovens, blast furnaces, and steel furnaces
        - By-product gas utilization for power generation
        - Integration with industrial symbiosis networks

5. **Material Efficiency**

   - **Yield Optimization**:

        - Improved casting technologies to reduce material losses
        - Near-net-shape manufacturing to minimize downstream processing
        - Precision steel grades to reduce over-specification

   - **Circular Economy**:

        - Slag valorization for cement and construction applications
        - Dust and sludge recycling within steel plants
        - Extended product lifespans through high-performance steel grades

6. **Regional Contextualization**

   - **Technology Costs**:

        - Regional variations in capital costs (CAPEX) and operating costs (OPEX)
        - Reflects differences in labor costs, equipment prices, and financing conditions
        - Captures economies of scale and learning rates

   - **Resource Endowments**:

        - Iron ore quality and accessibility (Australia, Brazil, India)
        - Coking coal availability and quality
        - Natural gas infrastructure for DRI production
        - Renewable energy potential for green hydrogen

   - **Infrastructure Readiness**:

        - Electricity grid capacity for EAF expansion
        - CO₂ transport and storage infrastructure for CCS
        - Hydrogen production and distribution networks
        - Scrap collection and processing systems


Model Outputs
-------------

Different types of outputs can be readily configured on dashboards that hold output from rich scenario experiments—ready for what-if analysis with presolved cases by diverse stakeholders and domain experts:

- **Energy and Emissions Profiles**:

   - Detailed energy consumption by source (electricity, coal, natural gas, hydrogen)
   - Comprehensive emissions accounting: direct process emissions, combustion emissions, indirect emissions
   - Technology-specific emission intensities (kg CO₂/ton steel)
   - Regional emission profiles reflecting local energy mixes

- **Technology Adoption Scenarios**:

   - Penetration rates for hydrogen-based DRI under different policy scenarios
   - CCS deployment timelines and capacity additions
   - EAF capacity expansion constrained by scrap availability
   - Investment requirements and financing needs

- **Cost and Competitiveness Analysis**:

   - Production cost breakdowns by technology route
   - Impact of carbon pricing on technology competitiveness
   - Green premium for low-carbon steel
   - Trade implications under carbon border adjustment mechanisms

- **Material Flow Analysis**:

   - Iron ore demand projections by region and quality grade
   - Coking coal requirements and potential for substitution
   - Scrap flows and circularity rates
   - Hydrogen demand for steel sector decarbonization

- **Visualisation and Communication**:

   - Sankey diagrams of material flows (raw materials → steelmaking routes → crude steel, with CO₂ exit flows) for any scenario and region, enabling direct visual comparison of structurally distinct futures
   - Time-series trajectory charts showing how key metrics (production, CO₂ intensity, route shares, hydrogen consumption, steel cost, trade volumes) evolve from present to 2050 across large scenario ensembles
   - Trade composition charts decomposing global steel-related seaborne trade by commodity, revealing how the cargo on ships changes under different policy settings
   - Regional trade butterfly charts showing net exporter/importer positions for each commodity under multiple scenarios, exposing the geopolitical dimension of decarbonization


Illustrative Findings
---------------------

The following results illustrate the type of insight the model produces when scenario dimensions (carbon price, CCS availability, technology cost assumptions) are varied systematically. These are representative, not prescriptive — actual results depend on the specific scenario configuration and regional calibration.

.. figure:: images/steel_sankey_quartet.png
   :width: 100%
   :align: center

   **Sankey quartet — four structurally distinct steel futures at 2050.** Each panel traces material flows from raw inputs (left) through steelmaking routes (centre) to crude steel output (right), with CO₂ exit flows shown upward. The 2023 baseline (top-left) is dominated by blast furnaces; the four 2050 scenarios show how the system transforms under different carbon price and CCS availability assumptions. Panels sharing the same carbon price (bottom pair) achieve similar emissions reductions but with completely different supply chains.

**Structurally distinct futures at the same carbon price.** Under a moderate carbon price with CCS available, the BF-BOF route can survive — preserving the iron ore and coking coal supply chain, with CCS capturing several hundred Mt CO₂. Under the same carbon price without CCS, blast furnaces are eliminated entirely: DRI-EAF and Scrap-EAF dominate, coal disappears, and the energy mix shifts to gas, hydrogen, and electricity. Both pathways achieve comparable emissions reductions (75–85% below baseline), but the industrial structures — and therefore the infrastructure, trade, and employment implications — are completely different.

.. figure:: images/steel_trade_composition.png
   :width: 100%
   :align: center

   **Global steel-related trade composition — from today to five carbon-price futures.** Each bar decomposes total seaborne trade by commodity. Iron ore (blue) dominates today; under decarbonization, coking coal disappears, sponge iron (teal) surges, and the total initially rises before falling. Crude steel trade is constrained to reflect reheating and quality frictions.

**Trade reshuffling, not just trade reduction.** Steel-related global trade (iron ore + coking coal + sponge iron + scrap + crude steel) can initially *increase* under low-to-moderate carbon prices as DRI production concentrates in gas- and renewables-rich regions and ships sponge iron globally. At higher carbon prices, total trade volumes decline — but the composition is unrecognisable: coking coal disappears, iron ore demand halves, and sponge iron becomes the dominant traded intermediate. The model shows that the decarbonization pathway chosen determines whether the world preserves the incumbent raw-material shipping complex or rewires it.

**Bounded green premium.** Across a wide range of scenarios, the model-implied cost of crude steel (shadow price from the optimisation) increases by roughly 20–35% under ambitious decarbonization relative to a no-policy baseline. This is significant for a commodity-grade product but far below the 2–3× premiums sometimes cited in public discourse.

**No purely circular future.** Even under maximum scrap utilisation, EAF-based production from scrap caps at around 40–45% of global crude steel demand — constrained by the physics of steel stock accumulation and scrap availability. The remaining 55–60% must come from primary iron, which means iron ore continues to be mined and traded in all futures. The question is whether that ore feeds blast furnaces or DRI plants.

**Hydrogen consumption at scale.** Deep decarbonization scenarios imply hydrogen consumption by the steel sector alone on the order of 25–60 Mt H₂ per year by 2050 — a substantial fraction of projected global clean hydrogen supply and a critical input for hydrogen infrastructure planning.


Depth of Analysis
------------------

1. **Comprehensive Technology Portfolio**:

   - Models the full spectrum from conventional high-emission routes to breakthrough technologies
   - Captures technology-specific parameters: energy inputs, material coefficients, costs, emissions
   - Reflects regional variations in technology performance and economics
   - Tracks technology evolution through learning curves and efficiency improvements

2. **Integrated Decarbonization Pathways**:

   - Analyzes synergies and trade-offs between different decarbonization strategies
   - Models competition for limited resources (scrap, hydrogen, CO₂ storage capacity)
   - Evaluates timing and sequencing of technology transitions
   - Assesses system-wide implications for energy demand and infrastructure

3. **Policy and Market Dynamics**:

   - Simulates impacts of carbon pricing, emissions trading, and regulatory mandates
   - Models subsidies and incentives for low-carbon technologies
   - Analyzes trade flows under differentiated carbon policies
   - Evaluates competitiveness impacts and carbon leakage risks

4. **Systemic Integration**:

   - Links steel production with upstream mining and downstream manufacturing
   - Connects with electricity systems for EAF demand and hydrogen production
   - Integrates with hydrogen economy for green steel pathways
   - Couples with CO₂ transport and storage infrastructure for CCS

5. **Scenario Exploration**:

   - **Multi-dimensional scenario design**: Carbon price levels, CCS availability toggles, technology cost assumptions, and trade regime constraints can be combined to generate large scenario ensembles, enabling systematic exploration of the solution space
   - Net-zero pathways: Technology mixes and timelines to achieve zero emissions
   - Resource constraints: Scrap availability, hydrogen production capacity, CCS potential
   - Regional transitions: Different pathways for each of the 30+ regions based on local resource endowments, existing infrastructure, and accumulated steel stock
   - Disruptive innovation: Breakthrough technologies and accelerated deployment scenarios
   - **Country-level deep dives**: The model supports extraction and visualisation of results for individual regions, revealing how global decarbonization pathways translate into country-specific industrial transformations — including stranding risk for existing capacity, shifts in import dependency, and changes in trade partnerships


Building a Low-Carbon Future for Iron and Steel
-----------------------------------------------

Within KiNESYS's multi-sector global energy system optimization framework, the steel sector representation captures the complete production chain — from iron ore to finished steel — across multiple technology routes and 30+ regions, with explicit international trade of five key commodities. The model includes emerging technologies like hydrogen-based DRI and CCS-equipped facilities, alongside realistic constraints on scrap availability, trade frictions, and infrastructure development.

This level of sectoral detail, integrated within a comprehensive energy system model that simultaneously optimizes power generation, transport, buildings, and other industries, enables analysis of cross-sectoral interactions and competition for limited resources. The steel sector doesn't operate in isolation — it competes for electricity, hydrogen, biomass, and CO₂ storage capacity with other sectors, and these interactions shape realistic decarbonization pathways.

A key insight from this integrated approach: steel decarbonization is as much a story about relocating industrial production and restructuring global trade as it is about deploying new technology. The chosen pathway determines whether the world preserves the incumbent iron ore and coking coal shipping complex or rewires it around sponge iron and clean hydrogen. KiNESYS is uniquely positioned to explore these trade-offs because it models both the technology transitions and the trade flows simultaneously, within a single optimisation framework.

Non-Metallic Minerals
=====================

Cement, brick, lime, glass and ceramics are ISIC 23, which the IEA reports as a
single ``NONMET`` subtotal. KiNESYS models all five together as one module,
``INMM``, because they share raw materials, share a statistical envelope, and
compete for the same alternative fuels. Between them they are the largest source
of industrial *process* CO₂ in the world economy — CO₂ that comes out of the
limestone rather than out of the fuel, and which no amount of fuel switching can
touch.

.. list-table:: Non-metallic minerals as modelled
   :header-rows: 1
   :widths: 20,15,15,50

   * - Sub-sector
     - Output
     - Energy
     - Basis of the production estimate
   * - Cement
     - 3,881 Mt
     - 11,304 PJ
     - Global Energy Monitor plant database, 3,884 plants, calibrated to USGS
   * - Brick
     - 2,755 Mt
     - 5,209 PJ
     - Six country studies covering 68% of world energy; Olsson et al. 2025
   * - Lime
     - 430 Mt
     - 1,978 PJ
     - USGS; ten named producers account for 315 Mt
   * - Ceramics
     - 326 Mt
     - 1,560 PJ
     - Acimac/MECS tile survey, twelve producers
   * - Glass
     - 175 Mt
     - 1,391 PJ
     - China NBS flat glass, proxies elsewhere

Two things about that table are worth stating plainly, because they shape
everything downstream.

**Cement is built differently from the other four.** It rests on a plant-level
asset database — every kiln in the world, with its capacity, vintage and
technology — so the model carries the existing fleet as vintaged stock with
country-specific retirement schedules. The other four have no such database
anywhere. For them the model carries a tonnage, an energy intensity, and a menu
of kiln technologies with a base-year mix over it. The two halves therefore
answer different questions well: cement can be asked about stranded assets and
retirement timing, brick and lime cannot.

**The five do not fit inside the reported statistics.** Modelled energy for the
five comes to roughly 21,400 PJ against an IEA ``NONMET`` of 16,340 PJ. That is
not an error to be tuned away — see
`Reconciliation with the IEA balances`_, where it turns out to be the single
most informative result the module produces.

Scope and Coverage
------------------

**How the sector is assembled**

The module is emitted as a pair of workbooks. One is region-generic and carries
the technology — processes, costs, lifetimes, output coefficients, fuel
converters. The other carries everything that has a region dimension —
calibrated energy inputs, base-year activity bounds, and demand. Changing the
model's region set rebuilds only the second.

Processes for brick, lime, glass and ceramics carry no region in their names.
This is deliberate and it is a correctness requirement, not a convenience: a
process named after the region that happened to have it in the base year exists
only in that region, so a kiln absent from a region's base-year mix could never
be built there in any later period either. Africa had no zigzag brick kilns in
2023; under a region-named convention Africa could never build one — the
cheapest abatement option in the entire sector, foreclosed as a side effect of a
naming choice. Every kiln therefore exists everywhere from the start, the
base-year fleet is expressed as bounds rather than as existence, and from the
second period the model chooses freely.

Cement is the exception: its processes are country-tagged, because there the
country detail is real observed asset data rather than an artifact.

**Shared raw materials**

Limestone, clay and gypsum are quarried by sector-neutral processes rather than
by cement's own. Cement pulls about 80% of the world's quarried limestone, but
lime kilns buy 1.8 tonnes of the same rock per tonne of quicklime, and glass
takes it in the batch. Quarrying carries diesel for drilling, blasting and
haulage and electricity for primary crushing — 203 PJ for cement alone, about
1.8% of its energy.

**Fuel routing**

Each sub-sector has its own kiln-heat commodity, produced from the host
industrial fuel commodities by explicit converters:

.. list-table::
   :header-rows: 1
   :widths: 30,70

   * - Heat commodity
     - Fuels permitted
   * - ``inm_cem_kilnheat``
     - coal, gas, oil, biomass (two cost tiers)
   * - ``inm_brk_kilnheat``
     - coal, biomass, gas, oil
   * - ``inm_lim_kilnheat``
     - coal, gas, oil, biomass
   * - ``inm_gls_furnheat``
     - gas, oil, coal
   * - ``inm_cer_kilnheat``
     - gas, coal, biomass, oil

They are separate rather than shared because the fuels are not interchangeable.
A brick clamp kiln burns rice husk and a glass furnace cannot — particulates and
alkali ash ruin the melt. A single shared heat commodity would let the model
fire float glass on crop residue. Note in particular that **biomass is not
available to glass**, and that this is a physical constraint rather than an
omission.

Which fuel is burnt is otherwise the model's choice. The base-year kiln mix is
pinned; the base-year fuel mix is reported as an audit trail but is not imposed,
except in cement where the alternative-fuel share is explicitly bounded.

Cement
------

Scope
~~~~~

Cement is represented as four stages, quarry to product, with a technology
choice at three of them:

.. code-block:: text

   diesel + electricity                        -> quarry   -> limestone, clay, gypsum
   limestone + clay + electricity              -> raw mill -> raw meal
   raw meal + kiln heat                        -> kiln     -> clinker + process CO2
   clinker + SCM + gypsum                      -> grinding -> cement
   coal/gas/oil/biomass                        -> converters -> kiln heat
   slag/fly ash/pozzolan/limestone filler      -> blender    -> SCM

That comes to 1,527 processes over 166 countries, built from the Global Energy
Monitor plant database and calibrated against USGS production.

**Kiln technologies.** Dry precalciner (3.30 GJ/t clinker), dry preheater
(3.60), and wet (5.50), plus a preheater-to-precalciner retrofit available where
preheater capacity survives. Kiln type, capacity and vintage come from the plant
database; where the database does not record precalciner status it is inferred
within physical bounds rather than assumed.

**Existing stock is vintaged.** Kilns, mills and grinding plants carry
vintage-specific lifetimes, so a 1970s line retires on its own schedule rather
than on a sector average. Those schedules are floored so that nothing recorded
as operating today retires before 2035 — cement plants get refurbished rather
than replaced, and 1970s kiln shells are routinely still turning.

**Raw grinding is a lever.** Ball mills at 15 kWh/t of meal against vertical
roller mills at 11, with the base year split 40/60. Separating the stage out of
the kiln coefficient moves no energy; it makes about 37 PJ of headroom visible
to the optimiser that was previously buried in an assumption.

Decarbonization levers represented
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

**Alternative fuels, with an adoption ramp.** Kilns switch fuel by switching
converters rather than by switching kiln process, so fuel choice is independent
of kiln technology. The biomass and waste-derived share is bounded by a ceiling
derived from the kiln stock and its retirement schedule — precalciner kilns can
take far more alternative fuel than wet kilns can. That ceiling is a technical
frontier and reaching it takes time, so it is ramped from each region's observed
base-year substitution rate up to the frontier by 2040. Without the ramp the
model jumps to the frontier in the first period, which is a statement about
thermodynamics rather than about how fuel supply chains actually develop.

**Gas access as a physical constraint.** Whether a kiln can switch to natural
gas depends on whether gas physically reaches it. The share of each country's
kiln capacity within reach of an existing or under-construction pipeline or LNG
terminal is computed from plant coordinates and gas infrastructure geography,
and bounds the gas share accordingly.

**Clinker substitution.** The clinker-to-cement ratio is where the largest
near-term abatement in the sector sits, and it is modelled as an explicit
blending decision rather than an assumed trajectory. A blender process takes
four supplementary cementitious materials and produces the SCM stream that
grinding consumes:

.. list-table::
   :header-rows: 1
   :widths: 30,20,50

   * - Material
     - Cementitious yield
     - Where it comes from
   * - Blast furnace slag
     - 0.85
     - Endogenous — produced by the iron and steel module
   * - Fly ash
     - 0.40
     - Endogenous — produced by coal-fired power generation
   * - Natural pozzolan
     - 1.00
     - Supply process, volcanic geology
   * - Limestone filler
     - 1.00
     - Supply process, capped at 15% of the binder

The first two are the important ones, because they make cement decarbonization
depend on decisions taken in other sectors. Slag supply falls as blast furnaces
give way to direct reduction; fly ash supply falls as coal generation retires.
Both of those are things the model decides elsewhere, and both tighten exactly
when cement most needs them. Limestone filler is chemically inert dilution
rather than a reactive binder, so it is capped at 15% of the binder, consistent
with ASTM C595 Type IL and EN 197-1 CEM II/A-LL.

**Efficiency and electrification.** Kiln and mill upgrades are available as
technology choices with their own capital costs. Grinding and raw milling
consume electricity, so they decarbonize with the grid, but there is no
fuel-switching choice at those stages.

**Demand to 2050.** Cement is the one sub-sector here with a forward demand
trajectory rather than a pinned base year. Each region's base-year tonnage is
scaled by a growth index built from IEA WEO2025 cement production, taking the
shape of the outlook but not its levels — the base year already reconciles with
USGS by construction. World cement runs from 3,881 Mt to about 4,250 Mt by 2045
and then flattens, with China declining by a quarter over the horizon and India
growing by three quarters. Cement tonnage is scenario-invariant in WEO2025: the
IEA flexes the sector's energy intensity with policy rather than its output,
which puts every lever on the supply side where this module models them.

What cement does not yet include
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

.. note::

   **Planned, not yet in the model.** Carbon capture on cement — oxyfuel, amine
   post-combustion, calcium looping and electrified calcination — is specified
   against CEMCAP techno-economics but is not yet emitted. Until it is, a
   carbon-price run has **no lever at all on process CO₂**, which is roughly
   half of cement's emissions. Also planned: hydrogen kiln firing, LC3
   calcined-clay cements, and clinker and cement trade — clinker being the
   traded intermediate that grinding-only regions depend on.

Brick
-----

Brick is the largest tonnage in non-metallic minerals outside cement — 2,755 Mt,
close to one and a half times world crude steel production — and until recently
it was almost invisible in energy system models. It is represented here because
leaving it out makes the rest of the sector's statistics impossible to
interpret.

**Kiln technologies.** Six, spanning nearly the whole range of industrial
formality: clamp kilns, fixed-chimney Bull's trench kilns, zigzag kilns,
vertical shaft brick kilns, Hoffman kilns and tunnel kilns. Fuels are coal,
biomass, gas and oil; biomass is about a third of South Asian brick energy and
more than half of African.

**Why the kiln menu is the whole point.** A South Asian fixed-chimney Bull's
trench kiln runs at about 1.35 GJ/t. Converting the same kiln to zigzag airflow
brings it to about 1.05 for a few thousand dollars — close to the cheapest
industrial abatement available anywhere in the world economy. A model given only
a sector energy intensity cannot see that this option exists. India's calibrated
kilns come out at 1.26 GJ/t for Bull's trench, 0.98 for zigzag and 0.79 for
vertical shaft, weighting to the measured national figure.

**The capital spread is twenty to one** between a clamp kiln and a tunnel kiln
per tonne of annual capacity, which is why the sector is informal — entry is
nearly free — and why zigzag conversion is such cheap abatement, since it
upgrades a kiln that already exists rather than replacing it.

**Process CO₂ is zero**, deliberately. Brick clays do contain carbonates and
calcareous clays genuinely do emit, but the coefficient previously carried here
could not be derived from chemistry, and the studies behind the sector's energy
intensity measure *total* specific consumption — which for Bull's trench and
clamp kilns already includes the coal mixed into the green brick. That fuel
carbon was being counted twice. Zero is an assertion too, and it is the one that
fails visibly.

.. note::

   **Planned, not yet in the model.** A turnover constraint on kiln conversion.
   With costs but no growth limit the model converts the world fleet to zigzag
   and vertical shaft kilns almost immediately. That is economically real — the
   payback is under two years on fuel alone — but behaviourally implausible,
   because the binding constraints are skills, brick quality, siting and access
   to credit, none of which is a cost. Also planned: a carbonate-only process
   CO₂ factor with a source behind it, electric firing, and a demand driver
   following floor area.

Lime
----

Lime is the term that gets forgotten, and it is the second-largest source of
process CO₂ in the model after cement. Calcining CaCO₃ to CaO releases 0.785 t
of CO₂ per tonne of quicklime by stoichiometry alone, so world lime production
emits roughly 340 Mt of CO₂ before any fuel is burnt at all.

**Kiln technologies.** Rotary, rotary-with-preheater, mixed-feed shaft, and
parallel-flow regenerative, spanning 7.20 down to 3.50 GJ/t as global priors and
calibrated per region from there. Fuels are coal, gas, oil and biomass.

**Coupling to cement.** Lime kilns buy 1.8 tonnes of limestone per tonne of
quicklime from the same quarry processes that supply cement's raw meal. This is
where the two sub-sectors genuinely interact: they are both calcination of local
limestone for local use, they compete for the same rock, and they compete for
the same alternative fuels.

.. note::

   **Planned, not yet in the model.** Lime demand is exogenous and fixed at the
   base year. In reality a large share of it is consumed by steelmaking as a
   flux, so lime demand should follow steel production and route choice — a
   shift to scrap-EAF changes lime consumption substantially. It currently does
   not. Electric and hydrogen-fired lime kilns are also absent.

Glass
-----

**Products.** Flat glass for construction, automotive and solar; container
glass for packaging; fibre glass for insulation and composites. Each is
modelled as a distinct product with its own demand.

**Furnace technologies.** Regenerative, recuperative, oxy-fuel, and all-electric
melting. The electric melter is a genuine technology choice the model can
select, which makes glass one of the two sub-sectors here where electrification
is an available decarbonization route rather than an aspiration.

**Fuels.** Gas, oil and coal. Biomass is deliberately excluded for the physical
reasons given above.

**Process CO₂.** The soda ash and limestone in the batch decompose during
melting, giving about 0.19 t of CO₂ per tonne of glass, roughly 33 Mt worldwide.

.. note::

   **Planned, not yet in the model.** Cullet. Recycled glass is 30–60% of a
   container glass batch and each 10% of cullet cuts melting energy by about
   2.5%; it is not represented at all, which means the model cannot see the
   sector's most established efficiency measure. Soda ash is also not modelled
   as a produced commodity — it is the one raw material in this sector worth
   wiring up, being traded, energy-intensive and itself a source of process CO₂.
   Hydrogen firing is absent.

Ceramics
--------

**Products.** Construction ceramics (tiles, the bulk of the tonnage), technical
ceramics and refractories, and sanitaryware.

**Kiln technologies.** Tunnel kilns, roller hearth kilns, and electric kilns.
As with glass, electric firing is a real choice available to the model. Fuels
are gas, coal, biomass and oil.

**Process CO₂ is zero**, for the same reasons as brick: the coefficient
previously carried was not derivable from chemistry and risked double-counting
organics that the energy figures already include.

**A known weakness.** Refractories are mapped onto the technical ceramics
commodity because it is the nearest available product, which is a stretch — 40
Mt of a different product with a different customer and a different kiln.

.. note::

   **Planned, not yet in the model.** Hydrogen and biogas firing, low-carbon
   raw material substitution, and waste-heat recovery, all of which the sector's
   own roadmaps treat as central. A demand driver following construction
   activity.

Reconciliation with the IEA balances
------------------------------------

The five sub-sectors together demand about 21,400 PJ, against an IEA ``NONMET``
subtotal of 16,340 PJ. Rather than scale the model down to fit, KiNESYS
reconciles the two explicitly, and the reconciliation is itself a result.

Cement, lime, glass and ceramics alone come to about 16,300 PJ — which accounts
for ``NONMET`` to within 2%. There is, in other words, no room in the reported
statistics for brick at all. And brick is not small: three independent
triangulations put world fired clay brick at 2.0–2.4 Gt, wanting nearly 5,000 PJ.

That energy is not hidden in the balance; it never entered it. Informal Bull's
trench and clamp kilns buy coal outside formal supply chains and burn
agricultural residue that no energy survey counts. Where any of it is recorded
at all, it lands in the non-specified industrial catch-alls.

So the model draws that energy from the catch-all pool, under rules that apply
equally to steel and chemicals:

- **The trigger is physics, not arithmetic.** A sector may only draw where the
  reported sub-sector falls below a floor its own physical activity cannot go
  under — roughly two thirds of world best practice, because our own production
  estimates are themselves uncertain. A sector that simply exceeds its subtotal
  does not qualify; it stays visible as an overshoot, which is the point.
- **Nothing is created.** A country's total industrial energy is pinned by
  supply-side statistics and is far more reliable than its split across
  sub-sectors, which is a survey artifact. The reconciliation treats the total
  as observed and the split as estimated, so this is re-attribution inside a
  fixed total rather than three sectors helping themselves to energy.
- **The draw is netted over fuels before being spread across them.** If the
  model burns coal where the balance reports gas, that is a fuel-mix
  disagreement, not misbooked energy. The pool is 38% electricity and a cement
  kiln cannot burn electricity, so this matters.
- **It is capped** at two thirds of the pool across all sectors, because
  emptying the catch-alls would assert that a region has no food processing,
  textiles or machinery.

The reconciliation moves about 2,984 PJ into non-metallic minerals, India alone
taking 1,494, and emits an adjusted aggregate-demand table with the catch-alls
depleted by exactly that amount. This is a build step, not only a diagnostic:
anything moved here must be moved in the host model too, or the energy is
counted twice.

The geography that falls out was not imposed and is the best evidence that the
method works — the regions that qualify to draw are the regions with large
informal brick industries.

Model Outputs
-------------

- **Energy and emissions by sub-sector, kiln type and fuel**, with process CO₂
  reported separately from combustion CO₂ throughout — an essential distinction
  in a sector where roughly half the emissions come out of the rock.
- **Kiln fleet composition over time**, including which vintages of cement
  capacity retire when, and how fast informal brick kilns convert.
- **Clinker-to-cement ratio and SCM sourcing**, showing how much clinker
  substitution the model can actually achieve given slag and fly ash supply
  determined in the steel and power sectors.
- **Alternative fuel substitution rates** against the technical ceiling, by
  region.
- **The reconciliation itself** — which regions overshoot their reported
  statistics, by how much, and what that implies about the coverage of the
  underlying energy surveys.

Cross-sector coupling is the distinguishing feature
---------------------------------------------------

The reason this module sits inside a full energy system model rather than
alongside one is that its two most important abatement levers are not under its
own control.

Clinker substitution depends on slag from blast furnaces and fly ash from
coal-fired power stations. Both are byproducts of activities the model is
simultaneously trying to eliminate. A steel decarbonization pathway that
replaces blast furnaces with hydrogen direct reduction removes the slag; a power
decarbonization pathway that retires coal removes the fly ash. Both supplies
contract precisely when cement most needs them, and a cement model run in
isolation would never see it. Alternative fuels tell the same story from the
other side: cement, lime, brick and ceramics all compete for the same limited
industrial biomass, alongside every other sector that wants it.

Planned extensions
------------------

Collected from the sub-sections above, in rough order of how much they would
change results:

.. list-table::
   :header-rows: 1
   :widths: 30,70

   * - Extension
     - Why it matters
   * - Cement CCS and low-carbon clinker
     - Without oxyfuel, amine capture, calcium looping, electrified calcination
       or LC3, a carbon price has no lever on process CO₂ — about half of
       cement's emissions and the largest single industrial process-CO₂ term
       there is
   * - Forward demand drivers for the four sub-sectors outside cement
     - Cement has a WEO-driven trajectory to 2050; brick, lime, glass and
       ceramics are pinned at the base year. Brick should follow floor area,
       lime should follow steel and cement
   * - Kiln turnover constraints
     - Costs alone let the model convert the world brick fleet in one period,
       which is economically real and behaviourally impossible
   * - Lime demand coupled to steel
     - Lime is a steelmaking flux; a shift to scrap-EAF should move lime demand
       and currently does not
   * - Hydrogen firing
     - Absent across all five sub-sectors, and central to the published
       roadmaps for glass and ceramics in particular
   * - Cullet and material recycling
     - The established efficiency measure in glass, unrepresented
   * - Soda ash
     - Traded, energy-intensive, and a process-CO₂ source in its own right
   * - Electrification of brick and lime
     - Available to glass and ceramics today, absent from the other two
   * - Cement and clinker trade
     - Clinker is the traded intermediate that grinding-only regions depend on
   * - Carbonate-only process CO₂ for brick and ceramics
     - Currently zero, which is defensible but wrong for calcareous clays

Aluminium
==========

Aluminium production is a critical industrial activity due to its versatility and widespread applications in sectors such as transportation, construction, and packaging. However, it is also highly energy-intensive, particularly in the smelting process. KiNESYS provides a detailed framework to model the aluminium sector, addressing its unique energy needs and emissions challenges.


Scope and Coverage
------------------

**Processes and Technologies**

1. **Bauxite Mining and Alumina Refining**:

   - Models the extraction of bauxite and its conversion into alumina (aluminium oxide) through the Bayer process.
   - Tracks energy use and emissions associated with high-temperature digestion and calcination.

2. **Primary Aluminium Production**:

   - Focuses on the Hall-Héroult process for electrolysis of alumina to produce aluminium.
   - Includes the carbon anode consumption, a significant source of direct CO₂ emissions.

3. **Casting and Finishing**:

   - Models energy requirements and emissions in shaping and surface treatments.

**Feedstock and Energy Inputs**

    - **Raw Materials**:
       - Bauxite as the primary ore.
       - Includes alumina as a key input for smelting.
    - **Energy Sources**:
       - Tracks electricity demand for electrolysis, highlighting the critical role of energy decarbonization.
       - Includes fuel use in refining and calcination processes.
       - Models regional differences in electricity mix and its impact on emissions.

**Emissions and By-products**

    - **Greenhouse Gas Emissions**:

       - Process emissions from carbon anode consumption in smelting.
       - CO₂ emissions during electrolysis.
       - Combustion emissions from refining and calcination.
    - **By-products**:

       - Tracks red mud waste from refining and evaluates options for reuse or mitigation.


Key Features for Decarbonization Analysis
-----------------------------------------

1. **Electrification**

   - Models the impact of decarbonizing electricity grids on aluminium production.
   - Simulates the adoption of renewable energy in regions reliant on coal or gas-fired electricity.

2. **Advanced Smelting Technologies**

   - **Inert Anodes**:

        - Tracks the transition to inert anodes in electrolysis, eliminating carbon-based anode emissions.
        - Evaluates technology readiness and cost implications.

   - **Direct Hydrogen Reduction**:

        - Explores emerging technologies that use hydrogen instead of carbon-based anodes.

3. **Energy Efficiency**

    - Models upgrades to existing technologies, including:
         - Heat recovery systems in refining.
         - Improved cell designs for energy-efficient electrolysis.

4. **Waste Management and Circular Economy**

   - Models strategies for managing red mud and converting it into value-added products.
   - Tracks improvements in waste heat recovery and slag reutilization.

5. **Regional Contextualization**

   - Customizes pathways based on regional energy mixes, resource availability, and policy frameworks.
   - Highlights differences in emissions profiles between regions reliant on hydroelectricity vs. fossil fuels.


Model Outputs
-------------

- **Energy and Emissions Profiles**:

   - Tracks electricity use and emissions for each production stage.
   - Provides granular data on the impact of energy decarbonization.

- **Technology Scenarios**:

   - Evaluates the adoption of inert anodes, energy-efficient technologies, and other innovations.
   - Quantifies cost and emissions impacts for various decarbonization pathways.


Depth of Analysis
------------------

1. **Process-Specific Insights**:

   - Captures the unique energy and emissions characteristics of each production step.
   - Supports targeted interventions for reducing emissions in refining and smelting.

2. **Policy Impact Simulation**:

   - Models the effect of carbon pricing, renewable energy incentives, and emission reduction targets.
   - Evaluates regional trade-offs between emissions reduction and economic competitiveness.

3. **Technology Evolution**:

   - Tracks the progress of emerging technologies like inert anodes and direct hydrogen reduction.
   - Simulates timelines for achieving large-scale adoption.


Building a Low-Carbon Aluminium Industry
----------------------------------------

The KiNESYS platform models the aluminium sector with precision, offering robust tools for analyzing energy use, emissions, and decarbonization strategies. By addressing both technological and systemic challenges, it supports the transition to a low-carbon aluminium industry.

