---
layout: portfolio
title: Portfolio
description: Showcase of my projects, research work, and professional achievements
keywords: Portfolio, Projects, Research, Work
comments: false
menu: Portfolio
permalink: /portfolio/
---

# Portfolio

Welcome to my portfolio! Here you'll find a collection of my projects, research work, and professional achievements.

## Featured Research Projects

### Research Project 1: PK/PD Modeling and Machine Learning Integration for Infliximab in Pediatric Crohn's Disease
*Cincinnati Children's Hospital Medical Center | Aug 2022 - Present*

**Description**: 
This project focuses on developing mechanistic Population PK/PD models for Infliximab (a monoclonal antibody biologic) in pediatric patients with Crohn's disease. The research integrates traditional pharmacometric modeling with advanced machine learning and deep learning approaches to enhance predictive performance and optimize dosing regimens.

**Objectives**: 
- Develop and validate population PK/PD models for Infliximab in pediatric patients
- Identify key covariates affecting drug exposure and response
- Optimize dosing regimens for pediatric patients using model-informed approaches
- Enhance disease response prediction using machine learning and deep learning algorithms
- Develop exposure-response relationships to guide clinical decision-making

**Methodology**: 
- **Population PK/PD Modeling**: Developed mechanistic population PK/PD models using NONMEM, incorporating patient-specific covariates (body size, disease status, immunogenicity)
- **Exposure-Response Analysis**: Established quantitative relationships between drug exposure metrics (AUC, trough concentrations) and clinical endpoints (disease activity scores, biomarker responses)
- **Machine Learning Integration**: 
  - Implemented XGBoost (gradient boosting) and Random Forest (bagging) algorithms to predict disease response
  - Developed Variational Autoencoder (VAE) models for feature extraction and dimensionality reduction
  - Compared ML model performance with traditional PK/PD models
- **Tool Development**: Created interactive R-Shiny dashboards for visualizing PK simulation data and supporting biomarker-guided decision-making
- **Software/Tools**: NONMEM, R (Tidyverse, ggplot2), Python (scikit-learn, TensorFlow/PyTorch), mrgsolve, Git/GitHub

**Key Findings**:
- Identified critical covariates affecting Infliximab pharmacokinetics in pediatric patients
- Established exposure-response relationships that inform optimal dosing strategies
- Demonstrated improved predictive performance through ML/DL model integration
- Developed user-friendly tools that reduce data interpretation time for clinical teams
- Contributed to personalized dosing recommendations for pediatric patients

**Publications/Presentations**: 
- **Conference Presentation**: "PK/PD Modeling of Infliximab in Children with Crohn's Disease" - IATDMCT 2025 (Top 10 Abstract Nomination)
- **Award**: Top 10 Abstract Nomination (Poster Award), IATDMCT Conference (2025)

**Links**:
- [GitHub Repository](https://github.com/WenruiTan/) (if code is available)

---

### Research Project 2: Model-Informed Dose Optimization for Prophylactic Piperacillin-Tazobactam in Perioperative Pediatric Critically Ill Patients
*Cincinnati Children's Hospital Medical Center | Aug 2022 - Present*

**Description**: 
This research project focuses on optimizing prophylactic dosing regimens for piperacillin-tazobactam (a beta-lactam/beta-lactamase inhibitor combination antibiotic) in pediatric critically ill patients undergoing perioperative care. The study addresses the critical need for appropriate antibiotic prophylaxis dosing in pediatric populations, where dosing strategies are often extrapolated from adult data without proper validation.

**Objectives**: 
- Develop population PK models for piperacillin-tazobactam in pediatric critically ill patients
- Identify key covariates affecting drug exposure (body size, renal function, critical illness)
- Optimize prophylactic dosing regimens to achieve target exposure thresholds
- Evaluate the impact of body size and renal function on dosing requirements
- Provide evidence-based dosing recommendations for clinical practice

**Methodology**: 
- **Population PK Modeling**: Developed population PK models using NONMEM to characterize piperacillin pharmacokinetics in pediatric patients
- **Covariate Analysis**: Evaluated the impact of body size (weight, BSA), renal function (creatinine clearance), and critical illness status on drug clearance and volume of distribution
- **Model-Informed Simulations**: Conducted Monte Carlo simulations to evaluate different dosing regimens and determine optimal dosing strategies
- **Target Attainment Analysis**: Assessed the probability of target attainment (PTA) for prophylactic efficacy endpoints
- **Software/Tools**: NONMEM, R (Tidyverse, ggplot2), Pirana, mrgsolve

**Key Findings**:
- Identified body size and renal function as critical covariates affecting piperacillin pharmacokinetics
- Demonstrated that standard dosing regimens may be suboptimal for certain pediatric patient populations
- Developed optimized dosing regimens that account for patient-specific factors
- Provided evidence-based recommendations for prophylactic dosing in perioperative pediatric care
- Contributed to improved antibiotic stewardship and patient outcomes

**Publications/Presentations**: 
- **Peer-Reviewed Publication**: Tan WR, Irie K, et al. "Model-informed dose optimization for prophylactic piperacillin-tazobactam in perioperative pediatric critically ill patients." *Antimicrobial Agents and Chemotherapy* (2025). [DOI: 10.1128/aac.01227-24](https://journals.asm.org/doi/full/10.1128/aac.01227-24)
- **Conference Presentation**: "Model-Informed Simulations to Determine Optimal Piperacillin/Tazobactam Dosing Regimens in Pediatric Perioperative Care: Effect of Body Size and Renal Function" - ACOP 2024 (Poster)
- **Conference Presentation**: "Model-informed Dose Optimization for Prophylactic Piperacillin-Tazobactam in Perioperative Pediatric Critically Ill Patients" - ASCPT 2024 (Poster)

**Links**:
- [Publication Link](https://journals.asm.org/doi/full/10.1128/aac.01227-24)
- [GitHub Repository](https://github.com/WenruiTan/) (if code is available)

---

### Research Project 3: Machine Learning and Deep Learning Applications in Pharmacometrics
*Cincinnati Children's Hospital Medical Center | Aug 2022 - Present*

**Description**: 
This project explores the integration of advanced machine learning and deep learning techniques with traditional pharmacometric modeling approaches. The research focuses on developing novel ML/DL methodologies to enhance predictive performance, handle complex non-linear relationships, and improve model interpretability in pharmacometric applications.

**Objectives**: 
- Evaluate the performance of ML algorithms (XGBoost, Random Forest) in pharmacometric applications
- Develop Variational Autoencoder (VAE) models for feature extraction and dimensionality reduction
- Compare ML/DL approaches with traditional PK/PD modeling methods
- Integrate ML predictions with mechanistic models for enhanced performance
- Develop tools and workflows for ML/DL implementation in pharmacometrics

**Methodology**: 
- **XGBoost (Gradient Boosting)**: Implemented gradient boosting algorithms for disease response prediction, handling complex non-linear relationships and feature interactions
- **Random Forest (Bagging)**: Applied ensemble bagging methods for robust predictions and feature importance analysis
- **Variational Autoencoders (VAE)**: Developed deep learning models for unsupervised feature learning, dimensionality reduction, and data generation
- **Neural ODEs**: Explored neural ordinary differential equations for modeling dynamic systems
- **Model Integration**: Combined ML predictions with mechanistic PK/PD models for hybrid approaches
- **Software/Tools**: Python (scikit-learn, XGBoost, TensorFlow, PyTorch), R, Git/GitHub

**Key Findings**:
- Demonstrated improved predictive performance using ML algorithms compared to traditional approaches
- Identified key features and biomarkers through ML feature importance analysis
- Developed VAE models capable of capturing complex data distributions
- Established workflows for integrating ML/DL with pharmacometric modeling
- Contributed to the advancement of model-informed precision dosing (MIPD) approaches

**Publications/Presentations**: 
- Research findings integrated into Infliximab PK/PD modeling project
- Methodology presented at various conferences and research forums

**Links**:
- [GitHub Repository](https://github.com/WenruiTan/) (if code is available)

---

## Publications

### Peer-Reviewed Publications

- **Tan WR**, Irie K, McIntire C, Luna Torres J, Jones R, Gibson A, Mizuno T, Tang Girdwood SC. "Model-informed dose optimization for prophylactic piperacillin-tazobactam in perioperative pediatric critically ill patients." *Antimicrobial Agents and Chemotherapy* (2025). [DOI: 10.1128/aac.01227-24](https://journals.asm.org/doi/full/10.1128/aac.01227-24)

- Morales Jr R, Mizuno T, **Tan WR**, et al. "From PICU to NICU: Extrapolating Meropenem Exposure From Pediatric to Neonatal Intensive Care Patients." *Journal of Clinical Pharmacology* (2025).

- Yang Z, **Tan WR**, et al. "Population pharmacokinetic study of the effect of polymorphisms in the ABCB1 and CES1 genes on the pharmacokinetics of dabigatran." *Frontiers in Pharmacology* (2024).

- **Tan WR**, et al. "Systematic Review of Population Pharmacokinetic Models of Isoniazid." *Malaysian Journal of Pharmacy* (2022).

### Conference Presentations & Abstracts

- **Tan WR**, Irie K, et al. "PK/PD Modeling of Infliximab in Children with Crohn's Disease." *International Association of Therapeutic Drug Monitoring and Clinical Toxicology (IATDMCT) Conference* (2025) - **Top 10 Abstract Nomination (Poster Award)**

- **Tan WR**, Irie K, et al. "Model-Informed Simulations to Determine Optimal Piperacillin/Tazobactam Dosing Regimens in Pediatric Perioperative Care: Effect of Body Size and Renal Function." *American Conference on Pharmacometrics (ACOP)* (2024) - Poster Presentation

- **Tan WR**, Irie K, et al. "Model-informed Dose Optimization for Prophylactic Piperacillin-Tazobactam in Perioperative Pediatric Critically Ill Patients." *American Society for Clinical Pharmacology and Therapeutics (ASCPT) Annual Meeting* (2024) - Poster Presentation

---

## Open Source & Code Contributions

*[List any open source pharmacometric tools, R packages, or code repositories you've contributed to]*

- [Project/Tool Name](link) - [Brief description of contribution]

## Awards & Achievements

- **Top 10 Abstract Nomination (Poster Award)**, International Association of Therapeutic Drug Monitoring and Clinical Toxicology (IATDMCT) Conference (2025)
- **Computational Professional Development Award**, University of Cincinnati (2023-2025)
- **First Prize (Junior Category)**, Graduate Student Research Forum, University of Cincinnati (2023)

## Professional Service

- **Peer Reviewer**: Clinical Pharmacology & Therapeutics (CPT), American Society for Clinical Pharmacology and Therapeutics (ASCPT), American Conference on Pharmacometrics (ACOP)

## Skills Summary

### Pharmacometric & Analytical Skills
- **Modeling Software**: NONMEM, R (nlme, nlmixr), Python, mrgsolve
- **PK/PD Analysis**: Population pharmacokinetics, pharmacodynamic modeling, exposure-response analysis
- **Statistical Methods**: Nonlinear mixed-effects modeling, Bayesian inference, simulation techniques
- **Tools**: Git, GitHub, Jupyter Notebooks, RStudio, PsN, Xpose

### Research & Professional Skills
- Pharmacokinetic/pharmacodynamic model development and validation
- Clinical trial data analysis and interpretation
- Population modeling and covariate analysis
- Model-based drug development and dose optimization
- Scientific writing and peer review
- Regulatory documentation and submissions support

---

## Get in Touch

Interested in collaborating on pharmacometric research or learning more about my work? Feel free to reach out!

- **Email**: [Wen.Tan@cchmc.org](mailto:Wen.Tan@cchmc.org)
- **GitHub**: [@WenruiTan](https://github.com/WenruiTan)

I welcome opportunities for:
- Research collaborations in PK/PD modeling
- Methodological discussions in pharmacometrics
- Academic and industry partnerships
- Consulting opportunities in quantitative pharmacology

---

*Last updated: {{ site.time | date: "%B %Y" }}*

