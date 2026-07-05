################################
Carbon capture and storage (CCS)
################################

KiNESYS represents CO2 transport and storage (T&S) with country-level **supply curves** built
from plant-level emitter locations and site-level storage geometries, and constrains CO2
injection with **pressure-limited physics** — replacing the legacy treatment (global potentials
from Hendriks 2004 / Dooley 2005 downscaled by weight attributes, flat cost steps, no
injection-rate constraint).

Three features distinguish this treatment from standard global ESOM practice:

* **Spatially grounded T&S costs.** Every GEM-tracked steel, cement, and power plant is matched
  to its cheapest viable storage option (onshore pipeline, offshore pipeline, or ship);
  costs come from engineering-economic pipeline functions with direction-aware trunk-sharing,
  not from a flat $/t adder.
* **Injection rates as physics, not stock fractions.** Per-region injection-rate ceilings derive
  from basin-scale pressure-buildup modeling (CO2BLOCK class), so under-assessed regions
  (India, Brazil) are not starved by assessment-coverage bias.
* **Co-varying supply-curve steps.** Each step carries capacity, injection-rate share, T&S cost,
  and a quality/provenance tier jointly — the model sees that a cheap tranche may also be the
  rate-limited or speculative one.

.. figure:: images/ccs_global_sinks_emitters.png
   :width: 100%
   :align: center

   The source-sink geography behind the supply curves: global sedimentary basin footprints
   (Gidden et al. 2025 screening classes, darker = assessed) and the ~7,500 GEM-tracked
   capturable point emitters (coal and gas power, steel, cement; marker size ∝ emissions).
   Distances from each plant to its viable sinks drive the transport-cost differentiation.

Storage supply
==============

Each country's storage is broken into steps of
``category x distance-band x quality-tier x sink-mode``:

.. list-table::
   :header-rows: 1
   :widths: 22 78

   * - Dimension
     - Values
   * - Category
     - Saline aquifer; Petroleum (depleted fields; undiscovered-petroleum excluded)
   * - Distance band
     - 0–50 / 50–200 / 200–500 / 500–1500 / >1500 km (emitter-to-sink, emissions-weighted)
   * - Quality tier
     - Q1 directly assessed sites (OGCI); Q2 assessed basins / prudent tranche; Q3 unassessed or proxy
   * - Sink mode
     - Onshore pipeline; offshore pipeline; offshore ship

Capacity is anchored on the OGCI CO2 Storage Resource Catalogue (Cycle 5, site-level
P10/P50/P90), with CO2StoP (EU), the Fan et al. (2025) fine-grid dataset (China), and
oil & gas field proxies (OGIM) — tier discounts and thin-catalogue gap-fill are quantified
on the Gidden et al. (2025) nesting of technical potential, prudent (suitability-screened)
limit, and O&G-infrastructure overlap. NatCarb (US) serves as an informational cross-check
only.

Injection-rate constraints — two tiers
======================================

**Tier 1 — regional physical ceiling.** Pressure-limited injection rates per basin from an
open-parameter CO2BLOCK re-run over the 765-basin skeleton of Smith et al. (2024), calibrated
to their published global physical maxima, apportioned to supply-curve steps by capacity, and
emitted as ACT_BND per region and process at every milestone year (declining from the 30-year
to the end-of-century rate, reflecting basin pressurization; interpolation is precomputed —
no TIMES-side interpolation is relied on). China uses explicit fine-grid rates; petroleum uses
voidage replacement. The ceiling is deliberately loose (global saline sum an order of
magnitude above deployment scenarios): it binds only where basins are genuinely small.

**Tier 2 — global deployment build-rate (the operative constraint).** A single global user
constraint (``GLB_CO2Sto_BuildRate``) caps total storage activity along a logistic ramp
calibrated on the Zhang, Jackson & Krevor (2024) Monte Carlo growth model
(Low / Central / High; Central D(2050) ≈ 5.6 Gt/yr). Because the budget is global, the model
allocates scarce deployment capability across regions economically — no per-region rescaling,
no starvation of under-assessed emitters.

Transport and storage costs
===========================

Emitters (GEM steel and cement trackers with route-resolved emission factors; the GEM power
fleet) are assigned to sinks by geodesic distance per country. Pipeline costs follow
McCoy & Rubin engineering economics with diameter economies of scale and regional construction
factors; corridor flows are shared among co-assigned plants (direction-aware trunk-sharing).
Ship transport (liquefaction + port + vessel) engages beyond the pipeline/ship crossover and
is decisive for coastal emitters far from onshore basins (Japan, Korea). Countries with major
CCS policy restrictions (per Gidden et al. S4) have onshore storage demoted. Storage unit
costs use ZEP/NETL anchors by category and tier.

Resulting country averages (emissions-weighted) span roughly $7/t (USA) to $28/t (Japan) with
ship-dominated Korea higher — consistent with the Smith & Herzog (2021) $4–45/t envelope, and
with the finding that whether transport matters is strongly geography-dependent.

.. figure:: images/ccs_supply_curves_4countries.png
   :width: 100%
   :align: center

   Country T&S supply curves (steps colored by quality tier, hatched by offshore mode).
   Four archetypes: the US is cheap and assessed (Q1/Q2); India is cheap on distance but
   unassessed (Q3 dominates — screening, not resource, binds); Germany is policy-restricted
   onshore with a North Sea offshore option; Japan puts 40% of its capturable emissions on
   offshore pipelines and moves onto ship for the ~16% beyond the ship crossover (~80% of
   the curve).

.. figure:: images/ccs_country_costs_ranked.png
   :width: 90%
   :align: center

   Emissions-weighted average T&S cost for the 25 largest emitter countries. The spread —
   $7/t (USA) to >$50/t (Korea, Taiwan) — is the regional differentiation that a flat
   global $10/t assumption erases.

Validation
==========

The dataset is validated against seven benchmarks (see ``VALIDATION_REPORT.md`` in the
VerveStacks data repository): the NZA US deployment rate and well arithmetic, Lin et al.
(2024) China steel T&S component, the Smith & Herzog cost envelope, announced-hub locations
falling in the cheapest steps, ceiling-ordering checks, and the Smith et al. (2024)
cross-country distribution of pressure-limited resources.

Known limitations
=================

Emitter locations are today's plant stock; transport is distance-band-averaged (no routing or
endogenous network investment); cross-border sink-sharing (e.g. Northern Lights) is a model
representation question, not a dataset property; offshore permeability priors are weak for the
North Sea, Red Sea, and NW Shelf, making UK/Norway/Yemen/Australia Tier-1 ceilings
conservative.

Data sources and further documentation
======================================

Full dataset documentation, schema reference, and reproduction pipeline:
``VerveStacks/data/co2_storage_transport/DATASET_DOCUMENTATION.md``; design rationale and
decision log: ``CCS_SUPPLY_CURVES_METHODOLOGY.md`` (same folder).

Key sources: OGCI CO2 Storage Resource Catalogue Cycle 5; Smith, Hampson & Krevor (2024,
IJGGC); De Simone & Krevor (2021, IJGGC — CO2BLOCK); Gidden et al. (2025, Nature); Zhang,
Jackson & Krevor (2024, Nature Communications); Fan et al. (2025, Scientific Data); CO2StoP
(EU JRC); NETL NatCarb; OGIM v2.7; Global Energy Monitor steel/cement trackers; McCoy & Rubin
(2008); Kim et al. (2024); Baek et al. (2026); ZEP (2011); Smith, Morris & Herzog (2021);
Larson et al. (2021, Princeton Net-Zero America); Lin et al. (2024).
