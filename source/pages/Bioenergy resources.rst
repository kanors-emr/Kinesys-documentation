###################
Bioenergy resources
###################

KiNESYS represents bioenergy as a set of **physical feedstock pools**, each with its own
inventory, availability mechanism and price — not as a single regional biomass potential
that every conversion route and every end-use can draw without friction. The treatment
replaces the earlier GLOBIOM-only supply curve (one lignocellulosic commodity, stepped
by land-use scenario, downscaled by IEA primary biomass production) with three layers
that compete for the same land, residues and waste streams as the rest of the energy
system.

Four choices distinguish this representation:

* **Resources sit at the grain at which their price varies.** First-generation crops,
  oils and country-specific residues are declared at country level, because producer
  prices and diversion opportunity costs are national. Lignocellulosic energy crops and
  forest harvest from GLOBIOM are declared at the model region, because the lookup's
  price steps are world-level and summing countries inside a step does not change the
  merit order.
* **Supply is diversion and collection, not production.** FAOSTAT crop output is not a
  biofuel ceiling: the model has no food system bidding for the same tonnes. Steps
  represent increasing diversion from existing uses, or increasing collection of wastes
  and residues, at a rising opportunity cost.
* **Pools are policy classes, not botanical species.** Feedstocks merge only when they
  share policy treatment, conversion interface, availability mechanism and a comparable
  price. Palm and soy stay together (high-ILUC accounting); cane stays alone (bagasse
  energy lives inside the mill); used cooking oil is not mixed with food-crop oils.
* **Biomass is not carbon-neutral by assumption.** Each supply process carries an uptake
  credit equal to the physical carbon of the feedstock times a regrowth factor. Gross
  emission is posted later, at conversion vents and at combustion. Annual crops net to
  zero by arithmetic; forest harvest does not.

The conversion routes that consume these pools — and the synthetic-fuel and DAC chain
that shares their carbon accounting — are documented in :doc:`Liquid fuels processing`.


Feedstock pools
===============

Twelve model commodities cover the resource layer. Municipal and industrial waste
(``BIOBMU``, ``BIOBIN``) remain on the host IEA-based curves pending an overlap check
against independent residue inventories; they are not re-derived here.

.. list-table::
   :header-rows: 1
   :widths: 18,42,40

   * - Pool
     - Contents
     - Why the boundary is here
   * - ``BIOLIP_HILUC``
     - Palm oil, soybean oil
     - High-ILUC accounting class (EU contribution phases out). Separate source rows
       per oil; one commodity.
   * - ``BIOLIP_OTHER``
     - Rapeseed, sunflower, minor virgin oils
     - Same RED food/feed-crop class, same FAME/HEFA interface, prices within a few
       percent.
   * - ``BIOLIP_IXB``
     - Used cooking oil and Category 1/2 animal fats
     - Annex IX-B class only. Category 3 tallow is a different eligibility class.
   * - ``BIOLIP_OTHW``
     - Category 3 tallow, PFAD, POME, distillers corn oil
     - By-product availability; case-by-case eligibility. Distillers corn oil is
       endogenous (an ethanol co-product), not a mined resource.
   * - ``BIOCANE``
     - Sugarcane, whole stalk
     - Unmergeable: as-received LHV includes fibre, and bagasse reappears as mill
       heat and surplus electricity.
   * - ``BIOBEET``
     - Sugar beet
     - No starch hydrolysis, different process energy, pulp co-product. Split out
       because several European hosts are beet- rather than maize-centric.
   * - ``BIOSTA``
     - Maize, wheat, cassava
     - Near-twin ethanol balances and the same RED class.
   * - ``BIOMOL``
     - Cane and beet molasses
     - By-product of sugar milling; cheapest ethanol-to-jet feed in many regions.
   * - ``BIORES_AGR``
     - Crop and landscape-care residues
     - Availability is a removal fraction of a gross inventory, not a harvest.
   * - ``BIORES_FOR``
     - Forest residues, sawdust, post-consumer wood
     - Reserved. Until a country-level curve ships, forest residues remain inside
       the GLOBIOM lignocellulosic mix (see below).
   * - ``BIOWET``
     - Manure and sewage sludge
     - Accounted on dry volatile-solids energy so both anaerobic digestion and
       hydrothermal liquefaction can draw on it.
   * - ``BIOLIG``
     - GLOBIOM energy crops, fuelwood, roundwood, mill and logging residues
     - Land-using lignocellulosic potential; seven price steps. A 1:1 transfer
       feeds the host's incumbent solid-biomass commodity so existing sector-fuel
       links keep working.

Algae, food waste (inside municipal waste by design), and black liquor are out of
scope. Bagasse is not a feedstock: it is netted out of the agricultural-residue
inventory in countries with large cane-ethanol fleets and appears inside the cane
conversion balance.


Physical energy convention
==========================

Feed commodities are **physical tonnes at standard trade moisture**, converted at true
feedstock lower heating value. Conversion efficiencies are therefore less than one
and are defined against that LHV. Process energy (natural gas, electricity, hydrogen,
methanol) is an explicit commodity flow, never folded into the feed.

The alternative — product-equivalent "energy if fully converted" factors — is not used.
Those factors (cane ~1.66, maize ~8.5 GJ per tonne of crop) embed a conversion route
in the resource and would double-count bagasse or stillage.

.. list-table:: Adopted as-received LHV
   :header-rows: 1
   :widths: 40,20,40

   * - Feedstock
     - GJ/t
     - Moisture basis
   * - Maize grain
     - 15.0
     - ~15 %
   * - Wheat grain
     - 15.3
     - ~13 %
   * - Sugarcane, fresh stalk
     - 5.3
     - ~70 % water; fibre included
   * - Sugar beet, fresh
     - 3.8
     - ~77 % water
   * - Molasses
     - 10.5
     - ~20–25 % water
   * - Cassava, fresh
     - 5.6
     - ~60 % water
   * - Vegetable oils and waste lipids
     - 37.0
     - as traded
   * - Crop residues (straw-class)
     - ~14.5
     - ~15 %
   * - Wet resources (``BIOWET``)
     - 18 GJ per t volatile solids
     - dry-VS energy; moisture is not in the commodity

Wet resources are the exception to the as-received rule: a 90 % water slurry has a
tiny, moisture-dependent LHV, and a methane-potential basis would lock the resource
to anaerobic digestion. One PJ of ``BIOWET`` is one PJ of volatile-solids energy.


First-generation crops and oils
===============================

Inventory
---------

Crop and oil inventories are the **2020–2024 five-year mean** of FAOSTAT production
(item-level, country). A single year embeds weather — the 2024 French wheat harvest
is not a 2050 structural fact. Inventories are held static in real terms after the
base; the model does not invent agronomy. Observed 2024 production is kept alongside
the five-year mean for traceability.

Lipid balances are closed with USDA PSD (marketing year 2024): crush, industrial use,
food use and net trade, so domestic production is not silently treated as domestic
availability. World prices for traded oils are World Bank Pink Sheet (2024 dollars);
country-level crop prices are FAOSTAT producer prices where they exist, with the
Pink Sheet (or a world FAOSTAT average) as fallback.

Diversion steps
---------------

Each country and pool has three incremental steps:

.. list-table::
   :header-rows: 1
   :widths: 12,88

   * - Step
     - Quantity and price
   * - T1
     - Existing biofuel (or industrial-oil) use at today's market price. Anchor:
       FAPRI biofuel quantities, with USDA PSD industrial use for the FAME / HVO
       split.
   * - T2
     - Incremental diversion up to 10 % of production, at **1.3 ×** market price.
       Zero where T1 already exceeds 10 %.
   * - T3
     - Further diversion up to 25 % of production, at **2.0 ×** market price.
       Zero where T1 already exceeds 25 %.

Cumulative availability is therefore ``max(existing use, 25 % of production)``.
Brazil cane, already near 50 % of the crop, has a large T1 and empty T2/T3. A
country at 3 % diversion can add 7 % then 15 %. The 10 % / 25 % ceilings and the
1.3 / 2.0 premiums are modelling choices — a moderate opportunity-cost schedule,
not an econometric food-market model. They are the same schedule everywhere so
that regional differences come from inventories and from T1, not from a hidden
parameter per country.

Waste lipids (used cooking oil, Category 1/2 fats) are a **collection curve**, not
a diversion of food: currently collected volume at market price, then additional
commercial collection, then dispersed / household collection at a premium.
Collection efficiency may rise over 2030–2050. Category 3 tallow and palm
by-products (PFAD, POME) follow production-linked ratios, not collection
elasticity. Distillers corn oil has no supply step: it is produced by starch
ethanol and consumed as ``BIOLIP_OTHW``.

Policy is not a physical cap
----------------------------

RED food/feed-crop limits (2020 share +1 percentage point, maximum 7 %) and the
Annex IX-B 1.7 % contribution limit are **accounting caps toward renewable-energy
targets**, not physical bounds on fuel flows. High-ILUC treatment phases out
*eligibility* (palm, and soybean per Commission C(2026)2306). They live in an
opt-in European policy companion, not inside the supply curves. Base supply is
policy-free so non-EU instances are not silently constrained by RED.


Agricultural residues and wet resources
=======================================

Gross crop-residue inventories come from the LUT biomass potential dataset
(country coverage). What can actually be removed without collapsing soil carbon
is an ENSPRESO question in Europe (country-specific low / median / high removable
fractions) and the EU-median rates (about 13 / 23 / 32 %) elsewhere. The three
steps are those removable fractions, costed at 2 / 4 / 6 $/GJ (collection).
Residue beyond the high removable fraction is excluded from the base file; it is
a scenario lever, not silent extra biomass.

Cane process residues that LUT counts in the field/mill inventory are deducted
in Brazil, India and Thailand so they are not available twice — once as
``BIORES_AGR`` and once as bagasse inside cane ethanol.

Wet resources: Europe from ENSPRESO manure and sludge, converted to the
volatile-solids energy basis. Rest of world from FAOSTAT livestock numbers ×
IPCC Tier-1 excretion and managed-manure shares, plus population × wastewater
treatment coverage for sludge. Collection cost sits on the resource, not on the
digester: concentrated / on-site at 0 $/GJ, local collectable at +1.5, dispersed
at +3. Gate-fee credits (negative prices) are a later scenario option, capped by
tipping-fee evidence.


Lignocellulosic potential (GLOBIOM)
===================================

Land-using lignocellulosic supply — energy crops, fuelwood, roundwood to energy,
mill residues, logging residues — still comes from the IIASA GLOBIOM–G4M lookup
(Havlík et al. 2014 and subsequent G4M releases). The lookup is read at the ten
GLOBIOM world regions, at seven BIO price steps, under a chosen land-use /
sustainability scenario.

**Default scenario is GLOBIOM scenSDGs** (sustainable development land
constraints). The larger unconstrained envelope (scenBASE) is an opt-in
override, not the other way around. Across GLOBIOM GHG price variants the
*total* kept supply is essentially invariant (composition shifts between energy
crops and forest harvest); the representation therefore does not multiply
biomass by carbon-price scenario.

Downscaling from GLOBIOM regions to countries uses **resource keys, not a single
IEA share**:

* The cheapest step (existing traditional use) follows IEA primary solid biomass
  production (PRIMSBIO), latest complete year.
* Higher steps follow the physical endowment that actually produces that
  variable: cropland for energy crops (not all agricultural land — pasture would
  otherwise assign Central Asian steppe a plantation potential it does not
  have), mill output and industrial roundwood for forest-industry residues,
  fuelwood production for fuelwood.

Country quantities are then summed to the model region. Because every country
inside a GLOBIOM price step faces the same step price, that sum is lossless.

GLOBIOM "Other Solid" (traditional biomass: roughly 23 EJ in 2020, declining
along the SSP2 trajectory) is **not added as extra supply**. It is the
traditional-use baseline. Where a country's agricultural-residue and wet
tranches cannot cover that baseline, the shortfall is added to those cheap
tranches so the model can still serve traditional demand. That is a feasibility
guard, not a new resource.

The two exogenous systems — 1G diversion and GLOBIOM energy crops — are **not
jointly land-constrained**. Simultaneous expansion of both can overstate total
bioenergy, particularly by 2050. A land-carbon term from the lookup (cumulative
average per step) is the intended discharge of that caveat on the carbon
accounts; 1G ILUC is not yet posted.


Carbon at supply
================

Each mining process carries a negative emission on a dedicated, non-tradeable
environmental commodity (``CO2BIO_UPT``). Units are kt per PJ, numerically equal
to kgCO2 per GJ.

Physical carbon contents (adopted):

.. list-table::
   :header-rows: 1
   :widths: 40,20,40

   * - Pool
     - kgCO2/GJ
     - Basis
   * - Lipid pools
     - 76
     - triglyceride carbon / 37 GJ/t
   * - Starch grains
     - 94
     - grain carbon at §1 LHV
   * - Sugarcane / beet
     - 96 / 95
     - whole-stalk / fresh-root
   * - Molasses
     - 110
     - sucrose, uncertain LHV
   * - Agricultural residues
     - 100
     - IPCC "other primary solid biomass"
   * - Wet resources
     - 98
     - VS carbon at 18 GJ/t
   * - Lignocellulosic (wood)
     - 112
     - IPCC wood / wood waste

The uptake factor ``u`` is 1.0 for annual crops, residues and wastes (regrowth
inside the year). For the GLOBIOM mix it is composition-weighted per region,
step and year: energy crops 1.0, forest residues 0.9, roundwood harvest **0.5**
(a static stand-in for a 20–100 year lag TIMES cannot time-shift; scenario lever
0.3–1.0), fuelwood 1 minus a fraction of non-renewable biomass (higher in
SSA/SAS). An optional companion ramps forest uptake over calendar time instead
of using the static factors.

Uptake is not a licence to omit combustion: loading supply without the
conversion and end-use gross emissions would credit the system for growing
biomass and never debit it for burning it. See :doc:`Liquid fuels processing`.


Trade
=====

Lipids and molasses are heavily traded; production location is not availability
location. Multi-region instances can include world-pool trade in
``BIOLIP_HILUC``, ``BIOLIP_OTHER``, ``BIOLIP_IXB`` and ``BIOMOL`` at a generic
2–3 $/GJ transport cost. Single-region instances should calibrate availability
to **net trade** (production minus net exports, including food demand), not to
domestic harvest. Drop-in biofuels (renewable diesel, biojet, ethanol blendstock)
sit on the generic product markets described in :doc:`Energy trades`.


Data sources
============

See :doc:`Data_sources` (Biomass and Land Use). In brief: FAOSTAT production and
producer prices; USDA PSD oil balances; FAPRI biofuel use; World Bank Pink Sheet
oil prices; LUT residue potentials; ENSPRESO removable fractions and European
manure/sludge; IEA World Energy Balances (PRIMSBIO and biofuel output); IIASA
GLOBIOM–G4M lookup; IPCC 2006 Guidelines Vol. 2 default carbon contents.

.. seealso::
   :doc:`Liquid fuels processing` for conversion routes, existing plants, synthetic
   fuels and DAC.
   :doc:`Primary energy supply` for fossil supply curves.
   :doc:`power_sector` for biomass power, cofiring, CHP and BECCS, which compete
   for these same pools.
