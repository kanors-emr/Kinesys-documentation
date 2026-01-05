####################
GitHub Desktop Guide
####################

This appendix provides step-by-step instructions for users who need to perform GitHub operations for KiNESYS model collaboration. GitHub Desktop simplifies these operations for users who are not familiar with command-line tools.

.. note::

    Most users will not need to perform these operations independently. KanORS provides support for repository setup and can assist with any Git-related issues. Contact the KanORS team if you need help.


Installing GitHub Desktop
=========================

1. **Download the App**
   - Go to `GitHub Desktop's website <https://desktop.github.com/>`_.
   - Click **Download for [Your OS]** (Windows or macOS).

2. **Install the App**
    - **Windows**: Run the `.exe` file and follow the installation prompts.
    - **macOS**: Open the `.dmg` file and drag GitHub Desktop to your Applications folder.

3. **Log In to GitHub**
   - Open GitHub Desktop.
   - Click **Sign in to GitHub.com**.
   - Enter your GitHub credentials.

4. **Set Up Your Local Environment**
   - Configure the default spreadsheet editor (e.g., Excel) for opening and editing model files.
   - Select a location for cloning repositories.


Key GitHub Operations
=====================

Clone a Repository
------------------

Download the model files (Excel files) from the GitHub repository to your local computer.

In GitHub Desktop:
    - Click **File > Clone Repository**.
    - Select the repository from your GitHub account or enter the URL.
    - Choose a local folder for the repository.


Fetch and Pull Updates
----------------------

Keep your local copy updated with changes from the remote repository.

In GitHub Desktop:
    - Click **Fetch Origin** to check for updates.
    - Click **Pull Origin** to download changes to your local repository.

.. tip::

    Always pull from the GitHub remote **before** you start making changes to minimize the chances of conflicts.


Commit Changes
--------------

Save your modifications (updates to Excel files) locally before sharing them.

In GitHub Desktop:
    - Stage the changes by selecting modified files.
    - Add a commit message summarizing your changes.
    - Click **Commit to <branch>**.


Push Changes
------------

Share your local changes with the remote repository.

In GitHub Desktop:
    - Click **Push Origin** to upload your changes.


Branch Management
-----------------

Create branches to experiment with new scenarios or modify Excel files independently.

In GitHub Desktop:
    - Click **Current Branch > New Branch**.
    - Name your branch and start working.

Switch branches to merge or review changes.


Merge Branches
--------------

Combine changes from a feature branch into the main branch.

In GitHub Desktop:
    - Switch to the main branch.
    - Click **Branch > Merge into Current Branch** and select the branch to merge.


Resolve Conflicts
-----------------

Handle conflicts if changes to Excel files overlap.

In GitHub Desktop:
    - Open the conflicting Excel file in your spreadsheet editor (e.g., Excel).
    - Resolve the differences and save the file.
    - Commit the resolved changes.


Why GitHub Desktop?
===================

- **User-Friendly**: Intuitive interface for managing Git operations.
- **Simplified Collaboration**: Easy branch and merge management.
- **Cross-Platform**: Available for Windows and macOS.
- **Suitable for Beginners**: Minimal setup and clear workflows.

Using GitHub Desktop, KiNESYS users can manage their repositories of Excel model files without needing advanced Git knowledge, ensuring smooth collaboration and model integrity.


Getting Help
============

If you encounter issues with GitHub operations:

1. Contact the KanORS team for assistance.
2. Consult the `GitHub Desktop documentation <https://docs.github.com/en/desktop>`_.
3. For common issues, check whether you have pulled the latest changes before making modifications.


