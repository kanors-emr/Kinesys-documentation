######################
Timeslice definitions
######################

Each KiNESYS instance is built with a timeslice definition chosen for **the
question**, **the time available to solve**, and **the size of the model**
(regions × technologies). The catalog runs from 12 slices — screening runs and
large region sets — to 72 slices, used when the question needs the shape of the
day and the instance can still solve.

Every TIMES result is an average over a time slice, so the definition decides
what the results can show. Load shapes, renewable profiles, and storage all
aggregate to the same slices; they do not choose a definition of their own.

.. seealso::

   How hourly demand is aggregated into these slices: :doc:`electricity_load_shapes`.
   How renewable cluster profiles are aggregated: :doc:`renewable_energy_characterization`.
   Power-sector overview: :doc:`power_sector`.


The catalog
===========

A definition is a **season cut** (how the year is divided) crossed with a
**day-block cut** (how the 24-hour day is divided). Nothing else varies. Two
definitions that share one cut differ only in the other, so a difference in
results is attributable to that one change.

.. csv-table:: KiNESYS timeslice catalog
   :header: "Definition", "Season cut", "Day-block cut", "Slices"
   :widths: 16, 32, 40, 12

   "ts_12", "4 — calendar quarters", "3 — 8h / 10h / 6h", "12"
   "ts_24", "6 — bimonthly", "4 — uniform 6h", "24"
   "ts_36", "6 — bimonthly", "6 — uniform 4h", "36"
   "ts_48", "6 — bimonthly", "8 — 1h to 6h", "48"
   "ts_48h", "4 — calendar quarters", "12 — 1h to 6h", "48"
   "ts_72", "6 — bimonthly", "12 — 1h to 6h", "72"

Three relationships follow from that table:

- **ts_12 and ts_48h use identical seasons** (Dec–Feb, Mar–May, Jun–Aug,
  Sep–Nov), so they differ only in the shape of the day.
- **ts_48h and ts_72 use an identical day**, so they differ only in the seasons.
- **ts_24 and ts_72 share the same six seasons**, so they too differ only in the
  day.

**ts_48 and ts_48h are the same size** — 48 slices, the same solve cost — but
spend it differently: ts_48 on seasons, ts_48h on the day.

Hour ranges are inclusive at both ends. A slice labeled 08–17 contains hours 08
through 17; the next slice begins at 18. A one-hour slice is written with both
ends the same (06–06).


Choosing a definition
=====================

The three axes interact: a 70-region global model at 72 slices is a different
object from a 10-region national model at 72 slices. In practice the choice is:

**Question.** What must the results be able to show?

- Screening, fuel mix, long-run investment: coarse day-blocks are enough.
- Seasonal storage, hydro, heating/cooling: more seasons help (6 rather than 4).
- Solar–evening, day-cycling storage, ramps: the day must be split on the
  morning and evening shoulders (the 12-block day in ts_48h / ts_72).

**Time.** Slice count is the first-order driver of solve time. Moving from 12 to
48 or 72 is the difference between a case that turns around in a meeting and one
that runs overnight — and that gap widens as the region set grows.

**Model size.** Regions and technologies multiply the slice count. Large
instances stay on ts_12 or ts_24; smaller or more focused instances can spend
the budget on ts_48h or ts_72.

.. csv-table:: Typical fit
   :header: "You need…", "Prefer", "Because"
   :widths: 38, 14, 48

   "Fast screening; large region set", "ts_12", "Cheapest. The midday block is 10 hours; a day-cycling store has only three blocks."
   "General purpose; seasons matter more than ramps", "ts_24", "Six bimonthly seasons, uniform 6-hour day. A balanced default."
   "Finer day, still uniform blocks", "ts_36", "Same six seasons as ts_24, 4-hour blocks. No 1-hour ramp slices."
   "Seasonal questions with some ramp resolution", "ts_48", "Six seasons; eight irregular day-blocks. Same LP size as ts_48h, spent on the year."
   "Solar–evening, day-cycling storage, ramps", "ts_48h", "Same 48 slices as ts_48, but 12 day-blocks sitting on the ramps. Four seasons only."
   "Both seasons and the day, instance still tractable", "ts_72", "ts_48h's day crossed with ts_24's seasons."

Treat the table as a starting point. Comparing ts_12 with ts_48h on the same
instance isolates the day; comparing ts_48h with ts_72 isolates the seasons;
comparing ts_48 with ts_48h holds solve cost fixed and asks where the 48 slices
were better spent.


What a slice is, and is not
===========================

.. note::

   **Every slice is a mean over many days.** The smallest slice in ts_48h,
   06–06 in winter, is the average of 90 winter mornings. There is no
   cold snap in it, no still windless week, no cloudy fortnight — and the annual
   peak hour appears in no slice anywhere. Capacity is therefore sized against
   slice averages plus whatever reserve-margin constraint is imposed, not
   against a load-duration curve.

**Within-block shape disappears.** A generation profile is flattened to its
block mean. Under ts_12, midday solar output and the 17:00 shoulder sit in one
10-hour block (08–17) and are represented by a single number, so the
midday surplus and the evening deficit are both smaller than they are in
reality. Under ts_48h that same window is six blocks, three of them one hour
wide.

**Storage moves energy between slices, so the block count is its opportunity
set.** A day-cycling store under ts_12 has three blocks to work with; under
ts_48h it has twelve, and the finest of them sit exactly on the morning and
evening ramps. A seasonal store sees 4 or 6 seasons depending on the definition.
Comparing storage deployment across definitions therefore compares two different
opportunity sets, not two different economics.

**Slice weights are unequal — by a factor of six in ts_48h.** Its blocks range
from 1 hour to 6, so its slices run from 1.03% to 6.30% of the year. Nothing can
be summed or averaged across slices without weighting (``G_YRFR``).

**Aggregate regions span time zones.** Multi-country aggregates mix several
local days into one regional day. The resulting day shape is flatter than any
member's — an artefact of aggregation, not of the slice definition. Worth
confirming against the load-shape source before reading an aggregate region's
intraday result closely.


The definitions
===============

Each grid is one model year: 12 months across, 24 clock hours down. A cell is
one (month, hour) pair; cells of the same colour are one season, and the gaps
mark the day-block boundaries. Months run **December first** so that every
season reads as one contiguous band.

In ts_48, ts_48h and ts_72 the overnight block wraps midnight, so it appears as
a band at the top of the grid and another at the bottom — one block, drawn
twice. Hour ranges on the grids follow the same inclusive convention as the
tables: 08–17 is hours 08 through 17.

.. only:: html

   Hover any cell for its slice and weight.

   .. raw:: html

      <p><a href="../_static/timeslice_grids.html" target="_blank">Open the grids in a new tab</a>.</p>
      <iframe class="timeslice-grids-frame"
              src="../_static/timeslice_grids.html"
              title="KiNESYS timeslice definition grids"
              scrolling="no"></iframe>
      <script>
      window.addEventListener('message', function (e) {
        if (!e.data || e.data.source !== 'timeslice-grids') return;
        var f = document.querySelector('.timeslice-grids-frame');
        if (f) f.style.height = e.data.height + 'px';
      });
      </script>

.. only:: latex

   Interactive month-by-hour grids are in the HTML version of this page. The
   slice tables below list months, clock hours, and year-share for every
   definition.


Full slice tables
=================

Every slice in every definition, with its months, its clock hours, and its
share of the year. Each definition tiles 8760 hours exactly.

ts_12
-----

4 seasons × 3 day-blocks. Slice weight 6.16–10.50% of the year.

.. csv-table::
   :file: tables/timeslice_ts_12.csv
   :header-rows: 1
   :widths: 12, 28, 10, 12, 16, 10, 16

ts_24
-----

6 seasons × 4 uniform 6 h blocks. Slice weight 4.04–4.25% of the year.

.. csv-table::
   :file: tables/timeslice_ts_24.csv
   :header-rows: 1
   :widths: 12, 28, 10, 12, 16, 10, 16

ts_36
-----

6 seasons × 6 uniform 4 h blocks. Slice weight 2.69–2.83% of the year.

.. csv-table::
   :file: tables/timeslice_ts_36.csv
   :header-rows: 1
   :widths: 12, 28, 10, 12, 16, 10, 16

ts_48
-----

6 seasons × 8 day-blocks (1–6 h). Slice weight 0.67–4.25% of the year.

.. csv-table::
   :file: tables/timeslice_ts_48.csv
   :header-rows: 1
   :widths: 12, 28, 10, 12, 16, 10, 16

ts_48h
------

4 seasons × 12 day-blocks (1–6 h). Slice weight 1.03–6.30% of the year.

.. csv-table::
   :file: tables/timeslice_ts_48h.csv
   :header-rows: 1
   :widths: 12, 28, 10, 12, 16, 10, 16

ts_72
-----

6 seasons × 12 day-blocks (same day as ts_48h). Slice weight 0.67–4.25% of the
year.

.. csv-table::
   :file: tables/timeslice_ts_72.csv
   :header-rows: 1
   :widths: 12, 28, 10, 12, 16, 10, 16
