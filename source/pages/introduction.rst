############
Introduction
############

KiNESYS+ (**Knowledge based Investigation of Energy system Scenarios**) is an innovative data warehouse and data management system that supports the creation of energy models through a
highly configurable and modular framework. It provides a centralized environment where energy system data, assumptions, and configurations are stored, managed, and transformed into fully operational models. The system
grows with each new engagement and the non-confidential data enriches future and, potentially, even the existing instances.
**The framework is developed and managed exclusively by KanORS-EMR**, and is based on its decades of experience with Global, regional, and national models like SAGE, TIAM, Pan-EU TIMES, and FACETS.

Users access pre-configured instances of KiNESYS models, tailored to specific regional, national, or sectoral contexts.
These instances are designed to address particular modeling objectives and are just as flexible as any well built Veda-TIMES model. However, KanORS can reprocess them through the framework - making even deep structural changes relatively easy.

Motivation
----------

*Energy system models need to be built faster and better*
    The need for energy system modeling is increasing due to rapid transitions in the energy sector. Understanding cross-sector interactions is crucial for driving system change.
    There's a need to address urgent short-term issues within a long-term context, considering multiple intersecting uncertainties. To tackle these challenges, the ability to envision,
    explore, and communicate disruptive scenarios is crucial.

    The flexible and feature-rich TIMES modeling framework is suitable to build energy system models, but it takes a considerable amount of time to build, demands substantial effort
    for enhancements and updates. Additionally, TIMES models are practically inaccessible
    to those outside the TIMES modeling circle. In a nutshell, to be an effective user, one MUST become a "TIMES expert" first.

    There's a need for a *nimble modeling* approach in addressing energy-related questions, especially those with a global scope and varying regional/technological focuses.
    Whether it's exploring global hydrogen scenarios, understanding LNG supply, demand, and trade, or ensuring energy security in specific regions,
    a one-size-fits-all model with static regional and temporal aggregation is not the best option.

*Need to widen the engagement with models - beyond the core modeling team*

    Wider Engagement Brings Diverse Perspectives:

        * Cross-Disciplinary Insights: When diverse experts engage with model results, they bring unique perspectives that can lead to more comprehensive insights. For example, a power systems expert or a national energy planner might identify anomalies that the core modeling team overlooked, offering valuable insights for the policy makers.
        * Innovative Problem-Solving: Diverse perspectives often lead to more creative and effective solutions. Different stakeholders might ask varied questions or spot additional trends.
        * Enhanced Understanding and Buy-In: When stakeholders are directly involved in analyzing and interpreting data, they're likely to have a deeper understanding of the results. This can lead to greater acceptance and support for data-driven decisions.

    Stakeholders Using Insights More Efficiently:

        * Direct Engagement with Models: Allowing stakeholders to interact with models directly can significantly shorten the decision-making process. Instead of waiting for analyses from the core team, they can query the model and get insights relevant to their specific concerns.
        * Tailored Insights for Specific Needs: Different stakeholders might have varied informational needs. Direct access to models allows them to extract the specific data points that are most relevant to their tasks or decisions.

*Modeling teams need to collaborate*

    Isolated energy modeling teams can be suboptimal due to the immense detail embedded in these models - across regions, sectors, and technologies. No single team can thoroughly explore every modeling dimension, validate all assumptions, or identify all potential oversights.
    Streamlined sharing of data improvements and modeling practices would greatly improve the quality of models and modeling.

The KiNESYS methodology introduces a transformative solution to the three challenges outlined above. This approach is designed to make energy system modeling more intuitive, flexible, and open, thereby enhancing its utility for policy formulation and energy research. The vision is to make complex energy system models
accessible to domain experts and stakeholders with even a high level understanding of modeling.

The three pillars of KiNESYS+ approach
--------------------------------------

Creating instances of KiNESYS models
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

    * **Granular Data for Comprehensive Analysis**: At its core, KiNESYS utilizes a relational database to store data at the finest granularity, such as energy balances on a national or regional level, specific details of energy supply infrastructure, and hourly profiles for electricity demand and renewable energy resources. This granular approach ensures that models accurately reflect the intricacies of real-world energy systems, providing a solid foundation for policy and research analysis.

    * **Dynamic Model Configuration**: Through advanced data aggregation and disaggregation capabilities, KiNESYS allows for the creation of model instances tailored to specific analytical needs. Whether it's exploring regional energy strategies or assessing the impact of new technologies, KiNESYS delivers the flexibility to customize models according to various scenarios and scales.

    * **Efficient Model Adaptation**: Leveraging a knowledge database, KiNESYS enables the swift development of multiple model instances, facilitating rapid exploration of different temporal, spatial, and technological considerations without redundant setup efforts. This efficiency is crucial for timely and informed policy decision-making and research.

    * **Enhanced Model Foundation**: Building on the robust TIAM global model, KiNESYS integrates proven modeling techniques with innovative approaches to data management and analysis. This combination ensures that users benefit from a rich legacy of modeling expertise while accessing cutting-edge functionalities.

    * **Flexibility and Accessibility**: With features like flexible aggregation and the provision of country-specific "starter" models, KiNESYS significantly lowers the barriers to model development and customization, making sophisticated energy system analysis more accessible to policymakers and researchers alike.

.. figure:: images/KiNESYS_KB.jpg
   :scale: 14%

   **The Knowledgebase of KiNESYS**

All this continuously expanding granular data from various sources is aggregated and transformed via SQL scripts and other tools to populate Veda templates. The sectoral coverage of a typical model is shown below.

.. figure:: images/KiNESYS_RES.JPG
   :scale: 14%

   **Simplified RES of KiNESYS Models**

Deployment via Online Platforms
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

KiNESYS models are developed under Veda2.0 and deployed on Veda Online (VO). VO provides an interactive online platform that enables direct access to model inputs and outputs, facilitating real-time analysis and collaboration. This online accessibility ensures that complex models are within reach of a wider audience, empowering policymakers and researchers with the tools needed for detailed energy system analysis.

Engaging process for progressive fine-tuning of KiNESYS instances

    * **Verification and Calibration**: KiNESYS prioritizes confidence in model outcomes through rigorous calibration checks and comparisons with external benchmarks. This process ensures the reliability of model predictions, serving as a dependable basis for policy development and academic research.

    * **Comprehensive Scenario Exploration**: The approach encourages a thorough investigation of diverse scenarios, focusing on the dynamics of fuel and technology transitions under various abatement strategies. Such in-depth analysis aids in identifying effective policy measures and research opportunities.

    * **Collaborative Stakeholder Engagement**: KiNESYS emphasizes the importance of stakeholder involvement in refining models and shaping policy scenarios. This collaborative effort ensures that the modeling process remains relevant and aligned with current and future energy challenges, enhancing the impact of research and policy interventions.

In essence, the KiNESYS approach democratizes energy system modeling for policymakers and energy researchers, offering a powerful tool for exploring complex energy dynamics and informing strategic decisions. Through its innovative framework, KiNESYS facilitates a deeper understanding of energy systems, empowering stakeholders to craft policies and research agendas that effectively address the challenges and opportunities of sustainable energy transitions.

Collective Learning and Continuous Model Enhancement
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

**Core Concept and Vision**
    The third pillar of KiNESYS is centered on **Collective Learning** through a shared knowledge base (KB). Each KiNESYS instance is built from the same foundational KB,
    creating the opportunity for continuous enhancements driven by collaborative input across diverse teams. When one team updates or validates assumptions, those improvements can be seamlessly
    propagated across all active KiNESYS instances (barring any confidentiality issues). This structure supports a dynamic system where **learning never stops**, *even in areas where teams may not be actively looking.*

Conventional models tend to be rigid and isolated, limiting systematic interaction between modeling teams. In contrast,
KiNESYS creates a **connected ecosystem** where enhancements can be shared naturally, reducing duplication of effort and enabling faster, more comprehensive model improvements.

**Features and Technologies**
    The success of this pillar rests on the advanced data management expertise of KanORS, supported by key technologies such as:
        - **SQL Scripts** for efficient data processing.
        - **GitHub Integration** for version control of model input files.
        - **VedaOnline Platform** for widespread and efficient interrogation of model output and input.

**Key Impact Areas:**
    - **Demand-Side Modeling:** Since demand-side data is often less robust than supply-side data, collective learning enhances assumptions through expert review across regions and sectors.
    - **Key Future Assumptions:** Teams focused on specific technologies like EVs or grid storage can rely on validated assumptions from other expert teams in sectors like hydrogen, solar, wind, and CCS, ensuring **cross-sector consistency**.

**Real-World Impact**
    **Value Creation:**
    KiNESYS serves as a platform that has been **reviewed and refined** by a wide range of experts spanning the entire energy system. This approach eliminates the need for individual teams to validate the entire model, allowing them to focus on their specific research areas with greater confidence.

**Problem-Solving for Stakeholders:**
    - **Policymakers:** Can trust a model built on shared, validated assumptions for evidence-based decision-making.
    - **Researchers and Businesses:** Save time and resources by relying on a robust, continuously updated modeling framework.

**Cross-Regional Relevance**
    **Benefiting Regions:**
    Regions with **poorer data quality** that rely heavily on assumptions stand to gain the most, as cross-regional collaboration can fill knowledge gaps with **expert-driven updates**.

**Supporting Cross-Border Collaboration:**
    By aligning assumptions across teams and sectors, KiNESYS fosters **international energy collaboration**, allowing expert-informed insights to prevail over uninformed assumptions, especially in global energy trade and transition pathways.

**Future Outlook and Vision Statement**
    **Evolution and Vision:**
    KiNESYS envisions an **ever-evolving platform** that **embodies the collective wisdom** of experts from around the world, even those who have never directly collaborated. As new technologies emerge and policies evolve, the platform adapts through its shared knowledge infrastructure.
    By enhancing the **quality and efficiency** of energy system modeling, KiNESYS has the potential to **transform global energy scenario explorations**, supporting data-driven policy development and **accelerating the clean energy transition**.

.. note::

    This process does not happen **automatically**. **Knowledge transfer** across KiNESYS instances is managed by the KanORS team. Updates and assumptions are only shared when teams **agree** to incorporate them, ensuring model integrity and team-specific customizations.


.. raw:: html

    Here are some <a href="https://vedaonline.cloud/kanors/kinesys.html" target="_blank"><b>Examples</a></b> of KiNESYS models.
