#############
Energy trades
#############

Energy trade modeling in KiNESYS covers electricity trade, gas infrastructure, and global commodity markets. The framework uses transmission capacity data and infrastructure statistics to model energy flows between regions.

Trade Coverage
==============

**Electricity Trade**
    Inter-regional electricity trade links are generated from authoritative transmission capacity datasets, aggregated to the model region definition in use (e.g. AR6R10, KiNESYS_IFP).

**Gas Infrastructure**
    Gas pipelines and LNG terminals from Global Energy Monitor data are aggregated into model regions to represent natural gas trade flows.

**Global Commodity Markets**
    Generic global markets are included for crude oil and petroleum products, coal and coal products, biofuels, and hydrogen.


Electricity Trade Methodology
=============================

KiNESYS represents cross-border electricity exchange as dedicated trade technologies (``TU_ELC_{Reg1}-{Reg2}``) with existing and planned capacity specified via ``PASTI`` attributes and an expansion ceiling via ``CAP_BND`` (five times total ``PASTI``).

Data are assembled in a two-tier waterfall and written to VEDA tables (``~VT_Trades_Links``, ``~VT_Trades_Data``) by ``generate_elec_trades.py``.

Tier 1 — ENTSO-E Net Transfer Capacity (Europe)
------------------------------------------------

For countries covered by ENTSO-E transparency data, **Net Transfer Capacity (NTC)** is the primary source.

* **Base year (2019):** full NTC from the ``NTC_2020`` sheet, representing existing interconnector capacity
* **2025 / 2030:** incremental capacity only, where later-year NTC exceeds the prior vintage
* **Directionality:** NTC forward and reverse capacities are preserved as separate exporter-to-importer links
* **Aggregation:** country-pair capacities (ISO alpha-2) are mapped to ISO3 via ``TIAM_RegionMap.xlsx``, then summed to the active model region column

Tier 2 — Global Transmission Database (rest of world)
----------------------------------------------------

All non-ENTSO-E links, and cross-border links involving at least one non-ENTSO-E country, are sourced from the **Global Transmission Database (GTD v1.0)**.

* **Reference:** Brinkerink et al. (2024), *A global electricity transmission database for energy system modelling*, Data in Brief — `Zenodo <https://zenodo.org/doi/10.5281/zenodo.10063445>`_
* **Coverage:** 164 countries; existing capacities as of ~2023; planned projects with commissioning years where available
* **Existing capacity:** mapped to base year 2019 (``GTD-v1.0_national_existing.csv``)
* **Planned capacity:** incremental MW by ``year_planned`` (``GTD-v1.0_national_planned.csv``); undated projects default to 2030
* **Directionality:** ``max_flow`` and ``min_flow`` columns give forward and reverse MW; both are converted to GW trade links where non-zero
* **NTC de-duplication:** GTD entries are excluded when both countries are ENTSO-E-covered, or when the exact directional pair already appears in NTC data

Regional aggregation
--------------------

Country-level capacities are mapped to model regions using ``TIAM_RegionMap.xlsx``. Multiple country-pair links that fall within the same region pair are summed. Intra-regional links (same exporter and importer region) are dropped.

VEDA output attributes
----------------------

For each inter-regional link the generator writes:

* **PASTI** — existing/planned capacity (GW) by commissioning year
* **CAP_BND** — upper bound on trade capacity expansion (5 × sum of PASTI)
* **LIFE, EFF, INVCOST, PRC_CAPACT** — fixed trade-link parameters

Implementation
--------------

.. code-block:: bash

    python generate_elec_trades.py --region-col KiNESYS_IFP

Output: ``Scen_ElecTrades_{region_col}.xlsx`` in the specified output directory.


Gas Infrastructure Details
==========================

**Pipeline Networks**
    Natural gas pipeline modeling uses Global Energy Monitor (GEM) data on existing and planned pipeline projects. Pipeline capacities are aggregated from country-level data to model regional trade flows, with capacity calculations for operating, under construction, and proposed projects.

**LNG Trade System**
    LNG trade modeling incorporates detailed terminal data from Global Energy Monitor covering both liquefaction (export) and regasification (import) facilities.


Hydrogen Trade Infrastructure
=============================

**International Trade Modeling**
    Based on the H2_trade_cost_matrix data, KiNESYS models hydrogen trade through three main transport modes:

    * **Liquid Hydrogen (LH2):** Cryogenic hydrogen transport
    * **Liquid Organic Hydrogen Carriers (LOHC):** Chemical hydrogen carriers
    * **Ammonia:** Ammonia as hydrogen transport medium

**Export and Import Regions**
    The model includes bilateral trade links between selected export regions and demand regions:

    * **Export regions:** Australia, Chile, Saudi Arabia, Morocco, Norway, Canada, Oman, Namibia, UAE, South Africa, Russia, Kazakhstan, Iceland
    * **Import regions:** Major demand centers including Europe, Asia, and North America
    * **Trade costs:** Distance-based costs for production, conversion, transport, and reconversion
