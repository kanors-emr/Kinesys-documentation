########################
Liquid fuels processing
########################

Liquid fuels in KiNESYS are produced in two families that compete for the same
end uses.

**Oil and NGL refining** maps IEA energy-balance refinery and transfer flows into
processes whose base-year activity is fixed and whose future operation is
increasingly flexible. Refined products carry incremental cost markups on the
oil price.

**Fuel transformation** converts the feedstock pools in :doc:`Bioenergy resources`
— and, for synthetic hydrocarbons, hydrogen plus captured CO2 — into drop-in
and blendstock fuels with closed energy and carbon balances. This replaces the
earlier treatment in which biodiesel, bio-kerosene and bio-gasoline were
markup variants of fossil products. Direct-air capture that supplies that CO2
is part of the same library: it has no existing stock, and its only modelled
outlet today is power-to-liquids.


Oil refining
============

Oil and natural gas liquid shares follow refinery and transfer flows in the IEA
World Energy Balances. Base-year operation of transformation processes is
fixed. After the base year, generic transfers are unbounded and refineries
become increasingly flexible, so the model can reshape the product slate as
demand and bio/synthetic substitutes arrive.

Incremental cost markups (+/−) on the oil price differentiate refined fuels.
The markups come from collaboration with industry experts rather than from a
process-level refinery LP.


Biofuel and synthetic conversion
================================

Conversion processes are **region-generic technologies**. What differs by region
is existing stock, observed throughput, and the feedstock pools that region can
draw. Technical availability on the technology description is plant
availability only (typically 0.85–0.90). Today's low observed utilization
(European FAME plants well below nameplate, SAF capacity far ahead of output)
is market behaviour: it is reproduced through feedstock bounds, demand and
mandates, and activity bounds on the existing fleet — not baked into the
technology as a derating.

Capex is per kW of main-product output. Where a published plant capacity is a
*stated annual* figure, that denominator already embeds the operating season
(cane crush, campaign beet). A further availability derating would count the
season twice.

Routes
------

Each route accepts a defined set of feedstock pools as alternatives, with no
fixed share between them. Policy differences between pools (high-ILUC vs
waste lipids) live in supply prices and in carbon terms, not in a second
copy of the plant. Process activity is main-product energy; efficiencies are
against physical feedstock LHV (:doc:`Bioenergy resources`).

.. list-table::
   :header-rows: 1
   :widths: 22,40,38

   * - Route
     - Feeds
     - Main products (and notable co-products)
   * - FAME
     - All lipid pools
     - Biodiesel; glycerol. Methanol input from petrochemicals.
   * - HEFA, diesel mode
     - All lipid pools
     - Renewable diesel, naphtha, bio-LPG. Hydrogen input.
   * - HEFA, jet mode
     - All lipid pools
     - Biojet, renewable diesel, naphtha, bio-LPG. Higher hydrogen than
       diesel mode — hence two processes, not a flexible slate on one.
   * - Refinery co-processing
     - Lipid pools into the hydrotreater
     - Diesel / jet via the host refinery. Insertion gated (see below).
   * - Starch ethanol
     - ``BIOSTA``
     - Ethanol; DDGS; distillers corn oil (feeds ``BIOLIP_OTHW``);
       fermentation CO2.
   * - Cane ethanol
     - ``BIOCANE``
     - Ethanol; surplus electricity from bagasse; fermentation CO2.
   * - Beet ethanol
     - ``BIOBEET``
     - Ethanol; pulp; fermentation CO2.
   * - Molasses ethanol
     - ``BIOMOL``
     - Ethanol; fermentation CO2.
   * - Cellulosic ethanol
     - Agricultural residues, lignocellulosic pool
     - Ethanol; lignin self-supply; fermentation CO2.
   * - Ethanol-to-jet
     - Ethanol (any origin)
     - Biojet and gasoline-range liquids. Hydrogen input.
   * - Gasification–FT
     - Residues and ``BIOLIG``
     - Diesel / jet / LPG slate; CCS variant captures syngas CO2.
   * - Gasification–SNG
     - Residues and ``BIOLIG``
     - Biomethane; CCS variant.
   * - Gasification–methanol
     - Residues and ``BIOLIG``
     - Biomethanol.
   * - Fast pyrolysis
     - Residues and ``BIOLIG``
     - Upgraded liquids; biochar. Hydrogen for upgrading.
   * - Hydrothermal liquefaction
     - Wet resources (and wet residues)
     - Diesel / jet. Hydrogen for hydroprocessing.
   * - Anaerobic digestion
     - Wet resources; residue silage; organic MSW (three processes —
       yields differ by family)
     - Biomethane; digestate.
   * - Fermentation-CO2 capture
     - Fermentation CO2 from the ethanol routes
     - Biogenic captured CO2, eligible for utilisation or storage.
   * - Power-to-liquids
     - Hydrogen + captured CO2 (bio or DAC)
     - Synthetic jet and diesel. Products are synthetic commodities, not
       ``BIO*``.
   * - Methanol-to-jet
     - Petrochemical methanol
     - Synthetic jet (and a gasoline co-product). Carbon follows the
       methanol's origin; pooled methanol is never labelled biojet.

Charcoal remains the host's existing kiln process on solid biomass. Green
methanol is produced in the petrochemical module (hydrogen-based methanol),
not duplicated here. Bio-naphtha to olefins is **not** in the model;
petrochemicals still see biomass only as boiler fuel (:doc:`Industry`).

Closed balances
---------------

Every conversion route carries an internally closed energy and carbon
balance: explicit hydrogen / gas / electricity / methanol inputs, explicit
co-products, and a **derived vent** equal to feed carbon minus product,
co-product and captured carbon. Capture is a fraction of that balance, not
a detached kg/GJ constant typed onto the process.

Co-product carbon is not allowed to disappear. Distillers grains, beet pulp,
glycerol and digestate have named sinks (feed-market value for DDGS and pulp;
glycerol and digestate at zero in the base, quantity-bounded). An orphaned
co-product — a stream the host has no use or sink for — is a build error.
Bio-LPG from FT and HEFA is bridged into the host LPG market so its carbon
cannot be dumped.

Existing plants
---------------

Existing capacity is inferred from IEA biofuel production (2022–2024 mean:
biogasoline, biodiesel including HVO, biojet, biogases) split across routes
by each country's first-generation feedstock mix, then converted to capacity
with observed utilization (GAIN for the EU, higher US ethanol utilization,
literature defaults elsewhere). Residual capacity is installed in 2024.
Activity is bounded at observed throughput through 2025 and relaxes
thereafter (×10 in 2030, ×100 in 2050 as an upper envelope, not a forecast).

That construction is a first estimate. Plant lists (GAIN member-state
tables, RFA/EIA, ANP, European biomethane maps) will replace the
utilization assumptions where they disagree with nameplate. Until starch
ethanol stock is installed in an instance, a labelled bridge may supply
distillers corn oil sized to current ethanol output; it is removed once
the fleet is present.


Synthetic fuels and DAC
=======================

Synthetic hydrocarbons emit **in full at use**, on a dedicated environmental
commodity (``CO2SYN_GRS``). They are never named as biofuels. The removal, if
any, is booked where the CO2 was captured — fermentation or FT/SNG capture
(biogenic) or DAC. Power-to-liquids therefore nets to zero whether it runs
on bio-captured CO2 or DAC CO2, and methanol-to-jet carries whatever carbon
the petrochemical methanol already had.

The CO2 a synthesis route consumes is **derived** from product carbon and a
synthesis carbon efficiency (0.95 for Fischer–Tropsch power-to-liquids, a
modelling assumption in the 0.90–0.98 range). A route whose stated CO2
input is less than its product carbon is refused: the inherited
power-to-liquids process understated CO2 feed (67 vs 74 kgCO2/GJ in the
paraffins) and would have created carbon.

Three DAC variants (gas+electricity, heat+electricity, gas) are in this
library, available from 2035, with no residual stock. Each posts a −1 kt
removal per kt captured. Bio-captured and DAC CO2 are substitutes as input
to power-to-liquids. There is not yet a geological-storage sink for DAC CO2
in the host, so DAC's modelled outlet is utilisation in synthetic fuels;
storage of biogenic and fossil captured CO2 is the CCS supply-curve
system (:doc:`Carbon capture and storage (CCS)`).


Carbon at conversion and use
============================

Gross biogenic CO2 is posted where carbon reaches the atmosphere: conversion
vents, and combustion of the product. Both use the same environmental
commodity (``CO2BIO_GRS``). Product carbon factors are IPCC defaults where
they exist (ethanol and FAME 70.8 kgCO2/GJ; methane 56.1) and composition
for paraffinic HEFA/FT fuels (74, the same as fossil diesel/jet).

Together with uptake at supply (:doc:`Bioenergy resources`), annual-crop
chains net to zero by construction. What would make 1G non-neutral —
cultivation N2O, ILUC — is not yet on the supply processes. Forest harvest
is already non-neutral through the uptake factor below 1.


Certification and integration
=============================

ASTM / ICAO insertion limits are constraints, not footnotes. Co-processing
is capped at 5 % of hydrotreater feed in the base (30 % as a scenario
switch). Methanol-to-jet is gated by a start year (2035 default, 2030 by
switch) while the pathway remains under evaluation. HEFA jet (ASTM D7566
Annex 2) is not gated.

Drop-in products reach transport, buildings and industry through the host's
sector-fuel transfers (bio-diesel, bio-gasoline, biojet, biomethane,
traditional solid biomass). Ethanol is an explicit intermediate so
cellulosic and 1G ethanol can both feed ethanol-to-jet and blending.
Methanol for FAME and for methanol-to-jet is the petrochemical methanol
commodity (19.9 GJ/t), not an imported bio-methanol placeholder.

.. seealso::
   :doc:`Bioenergy resources` for the feedstock pools these routes consume.
   :doc:`Hydrogen` for electrolytic and fossil hydrogen.
   :doc:`Industry` for methanol and the absence of bio-naphtha cracking.
   :doc:`Transport` for vehicle fuel switching onto these products.
