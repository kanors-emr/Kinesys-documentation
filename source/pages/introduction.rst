############
Introduction
############

KiNESYS+ (**Knowledge based Investigation of Energy system Scenarios**) is an innovative data warehouse and data management system that supports the creation of energy models through a
highly configurable and modular framework. It provides a centralized environment where energy system data, assumptions, and configurations are stored, managed, and transformed into fully operational models. The system
grows with each new engagement and the non-confidential data enriches future and, potentially, even the existing instances.
**The framework is developed and managed exclusively by KanORS-EMR**, and is based on its decades of experience with Global, regional, and national models like SAGE, TIAM, Pan-EU TIMES, and FACETS.

Users access pre-configured instances of KiNESYS models, tailored to specific regional, national, or sectoral contexts.
These instances are designed to address particular modeling objectives and are just as flexible as any well built Veda-TIMES model. However, KanORS can reprocess them through the framework - making even deep structural changes relatively easy.

A KiNESYS instance is an ideal starting point for users new to Veda-TIMES, especially those interested in conducting sectoral or regional deep dives using normative (policy objectives) or
simulation (policy measures) scenarios. **It is particularly suited for users whose primary goal is not to become modeling experts but to effectively use a robust energy model
to inform policy development, strategic planning, or investment analysis.**

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

**Core Concept and Vision**
    The first pillar of KiNESYS focuses on the **rapid creation of customized energy models** at the global, regional, or national level.
    Unlike traditional model-building, which envisions a single, static model built from pre-processed data, KiNESYS leverages advanced data management techniques and deep Veda-TIMES expertise,
    guided by Dr. Amit Kanudia’s decades of experience. This approach transforms model creation from a time-consuming, laborious process into an efficient, scalable one.

**Data Structure and Content**
    KiNESYS integrates a **rich variety of global energy datasets**, including:
        - **Asset-Level Databases:** Power plants, gas and oil pipelines, LNG terminals, steel and cement plants from sources like Platts and Global Energy Monitor.
        - **Energy Supply & Demand Data:** IEA balances, World Bank WDI, IPCC SSP scenarios, and GLOBIOM forecasts.
        - **Renewable Resource Data:** Solar/wind potentials from ESMAP, MERRA2 solar/wind shapes, and ENTSOE load shapes.
        - **Sectoral Data:** Renewable power capacities/production, Vehicle stocks, industrial production statistics, and more from platforms like IRENA and STATISTA.

Data is stored in a **relational database** in its **native form**, ensuring easy updates and smooth incorporation of new versions. **SQL scripts** process this data into Veda-compatible Excel input files, supporting custom aggregation and configuration, making these scripts the **cornerstone** of the KiNESYS model-building process.

**Model Customization and Expansion**
    **Extreme Customization Capabilities:**
        - **Supply Side Customization:** Asset-level modeling allows customization by plant size, cooling technology, and more. This flexibility supports regulatory compliance and detailed policy analysis.
        - **Demand Side Flexibility:** Sectors like industry and transport can be modeled with aggregated or detailed assumptions, balancing model complexity and output precision.

**Scenario Exploration Types:**
    1. **Normative Scenarios:** Identify cost-effective pathways to achieve policy targets like emissions reductions.
    2. **Simulation Scenarios:** Analyze system responses to specific policy interventions, such as fossil fleet retrofit/phaseout plans.

**Default Coverage and Expandability:**
    The default configuration covers oil, gas, coal, solar, wind, hydropower, biomass potentials, CHP, transport, industrial sectors, and energy demands in buildings. Any energy-economy sector with material or energy flow linkages can be **added later**, making KiNESYS future-proof and adaptable.

**Process and Workflow**
    1. **Data Integration:** Data remains in its native relational database format, ready for updates.
    2. **Data Processing:** 50-60 SQL scripts transform data into tables for Veda-TIMES input files.
    3. **Model Creation:** Custom models are assembled based on user-defined configurations.
    4. **Expert Management:** KanORS maintains **exclusive control** over the KiNESYS knowledge base, ensuring data accuracy, security, and continuous improvements.

**Unique Advantages and Real-World Relevance**
    **Key Advantages:**
        - **Accelerated Model Creation:** KiNESYS reduces model creation time from years to weeks, enabling teams to focus on analysis rather than model-building.
        - **Pre-Validated Framework:** KiNESYS benefits from continuous expert-driven improvements across active models, reducing the need for extensive validation.

    **Use Case Examples:**
        - **National Energy Plans:** Create sub-national models for targeted energy planning.
        - **International Policy Development:** Develop global or regional models preloaded with relevant sectors and regions.
        - **Policy Analysis for Utilities:** Explore compliance strategies for asset-specific upgrades or retirements without needing deep TIMES expertise.

**Future Vision and Growth**
    **Vision for Expansion:**
        - As global energy data becomes more detailed, KiNESYS will integrate even more granular, sub-national datasets.
        - The process of creating KiNESYS instances will **become increasingly automated**, supporting faster and broader deployments.

    **Long-Term Impact:**
        - All Veda-TIMES models will have the option to start as a KiNESYS instance, offering a significant productivity boost for the global energy modeling community.


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

.. seealso::

   For concrete examples of how this online deployment has enabled World Bank CCDRs, corporate transition planning, and multi-model research, 
   see :doc:`Applications_and_Impact`.

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

.. seealso::

   The collective learning pillar is demonstrated in practice through applications like the World Bank CCDRs and BP bioresource analysis, 
   where assumption refinements in one project benefited others. See :doc:`Applications_and_Impact` for specific examples.

Model Setup and Collaboration
-----------------------------

The process for setting up and collaborating on KiNESYS models is streamlined for efficiency, control, and flexibility. Here are the steps:

1. Repository Creation and Access
    - KanORS creates a private GitHub repository containing the necessary model files.
    - Users are added as collaborators with **read/write privileges**.

2. Local Cloning and Tool Integration
    - Clone the repository locally using GitHub or a Git client.
    - Use the repository with **Veda2.0** for local modeling tasks.
    - Provide access to the repository for **VedaOnline** using a **Personal Access Token (PAT)**.
    - Create a model on Veda online to browse input, create cases, run, and analyse model output.

3. Model Updates
    - KanORS pushes updates to the model periodically.
    - Users can pull these updates locally to keep their models synchronized.
    - Similarly, changes can be pulled on Veda online to keep VO version of the model in sync.

4. User Contributions and Reviews
    - Users can make changes or enhancements to the model files and push updates to the repository.
    - KanORS reviews these changes to ensure they align with model requirements.

5. Branching for Experimentation
    - Users are encouraged to work on **separate branches** when testing deeper modifications.
    - This practice ensures the stability of the main branch while enabling innovative exploration.

This workflow ensures efficient collaboration, version control, and model integrity while empowering users to experiment and enhance their models.

.. figure:: images/collaborative_use.jpg
   :scale: 40%

   **Collaborative use of a KiNESYS instance**

.. note::

    Veda2.0 is not a strict requirement but it is recommended when users make structural modifications to models. It is a Windows application and does not work on Mac OS.


Basic GitHub Operations for KiNESYS Workflow
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

Users working with KiNESYS models need to perform several key GitHub operations for collaboration and model management. Below is a summary of the basic operations and how GitHub Desktop simplifies them, along with installation instructions.

Key GitHub Operations
~~~~~~~~~~~~~~~~~~~~~

1. **Clone a Repository**
    - Download the model files (Excel files) from the GitHub repository to your local computer.
    - In GitHub Desktop:
        - Click **File > Clone Repository**.
        - Select the repository from your GitHub account or enter the URL.
        - Choose a local folder for the repository.

2. **Fetch and Pull Updates**
    - Keep your local copy updated with changes from the remote repository.
    - In GitHub Desktop:
        - Click **Fetch Origin** to check for updates.
        - Click **Pull Origin** to download changes to your local repository.

3. **Commit Changes**
    - Save your modifications (updates to Excel files) locally before sharing them.
    - In GitHub Desktop:
         - Stage the changes by selecting modified files.
         - Add a commit message summarizing your changes.
         - Click **Commit to <branch>**.

4. **Push Changes**
    - Share your local changes with the remote repository.
    - In GitHub Desktop:
         - Click **Push Origin** to upload your changes.

5. **Branch Management**
    - Create branches to experiment with new scenarios or modify Excel files independently.
    - In GitHub Desktop:
         - Click **Current Branch > New Branch**.
         - Name your branch and start working.
    - Switch branches to merge or review changes.

6. **Merge Branches**
    - Combine changes from a feature branch into the main branch.
    - In GitHub Desktop:
         - Switch to the main branch.
         - Click **Branch > Merge into Current Branch** and select the branch to merge.

7. **Resolve Conflicts**
    - Handle conflicts if changes to Excel files overlap.
    - In GitHub Desktop:
        - Open the conflicting Excel file in your spreadsheet editor (e.g., Excel).
        - Resolve the differences and save the file.
        - Commit the resolved changes.

.. tip::

    Always pull from the GitHub remote **before** you start making changes - to minimize the chances of conflicts.


Installing GitHub Desktop
~~~~~~~~~~~~~~~~~~~~~~~~~

Follow these steps to install GitHub Desktop:

1. **Download the App**
   - Go to `GitHub Desktop's website <https://desktop.github.com/>`_.
   - Click **Download for [Your OS]** (Windows or macOS).

2. **Install the App**
    - **Windows**:
        - Run the `.exe` file and follow the installation prompts.
    - **macOS**:
        - Open the `.dmg` file and drag GitHub Desktop to your Applications folder.

3. **Log In to GitHub**
   - Open GitHub Desktop.
   - Click **Sign in to GitHub.com**.
   - Enter your GitHub credentials.

4. **Set Up Your Local Environment**
   - Configure the default spreadsheet editor (e.g., Excel) for opening and editing model files.
   - Select a location for cloning repositories.

Why GitHub Desktop?
~~~~~~~~~~~~~~~~~~~

- **User-Friendly**: Intuitive interface for managing Git operations.
- **Simplified Collaboration**: Easy branch and merge management.
- **Cross-Platform**: Available for Windows and macOS.
- **Perfect for Beginners**: Minimal setup and clear workflows.

Using GitHub Desktop, KiNESYS users can efficiently manage their repositories of Excel model files without needing advanced Git knowledge, ensuring smooth collaboration and model integrity.


KiNESYS+ Analogy: The Kitchen, Custom Dishes, and Fine Tableware
----------------------------------------------------------------

**KiNESYS+ Platform: The Kitchen Operated by KanORS**
    Think of **KiNESYS+** as a **high-end kitchen** managed by KanORS. In this kitchen, expert chefs (the KanORS team) work with a wide range of **premium ingredients** (global energy datasets)
    and **specialized recipes** (SQL scripts and Veda-TIMES configurations). These chefs combine their **culinary expertise** (energy modeling knowledge) with **state-of-the-art equipment** (Veda and SQL-based automation) to craft personalized, top-tier meals.


**KiNESYS Instances: Custom Dishes Prepared for Guests**
    The **KiNESYS instances** are the **custom dishes** prepared in this expert kitchen. Each dish is carefully tailored to meet the **unique tastes** and **dietary preferences** of specific guests (energy modeling teams, policymakers, researchers).
    
    Each dish is:
    
    - **Custom-Made:** Every instance is built according to a specific recipe designed for the guest's needs.
    - **Expertly Crafted:** No guesswork – each dish follows the best available recipes refined through years of experience.
    - **Continuously Improved:** As the chefs discover better techniques and ingredients, all future dishes benefit from these upgrades.

**Veda Online: Fine Tableware with Perfectly Paired Wines**

    The **VedaOnline platform** is like **special tableware** and **perfectly paired wines**, designed to **enhance the dining experience** (intuitive exploration of model output). It ensures that the **complex flavors of each dish** (model insights) are fully **appreciated and understood**:
    
    - **Elegant Presentation:** VedaOnline displays results in a clear, intuitive format, making even complex energy models digestible.
    - **Flavor Enhancement:** Advanced visualization tools highlight important trends and trade-offs, much like a fine wine elevates the flavors of a gourmet meal.
    - **Interactive Tasting:** Users can explore model results interactively, uncovering deeper insights with every click, just as a wine connoisseur savors every sip.

**In Summary**

- **The Kitchen (KiNESYS+):** A centralized platform managed by KanORS, ensuring expert-driven, efficient, and high-quality preparation.
- **The Dishes (KiNESYS Instances):** Custom-built energy models ready for consumption, tailored to exact requirements and delivered with minimal wait time.
- **The Tableware & Wines (VedaOnline):** The intuitive exploration platform that enhances the entire experience, helping users savor and interpret complex model outputs with ease.

.. note::

    Guests can order the dishes and subscribe to the table, but the kitchen stays with KanORS.

.. raw:: html

    Here are some <a href="https://vedaonline.cloud/kanors/kinesys.html" target="_blank"><b>Examples</a></b> of KiNESYS models.
