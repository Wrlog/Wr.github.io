---
layout: post
title: 【Pharmacodynamic】Hysteresis
categories: Pharmacodynamic
description: Hysteresis
keywords:  Pharmacokinetic,Clinical
---

## Hysteresis

Hysteresis may be defined as the retardation or lagging of an effect behind the cause of the effect.


## How hysteresis occur

**Counter-clockwise hysteresis**

This is the most common type of hysteresis loop.

As plasma concentration rises (the "up" curve), the effect lags behind. After the plasma concentration peaks and starts to fall (the "down" curve), the effect continues to increase, or decreases much more slowly. We see a greater effect at a later time point for the same plasma concentration. This suggests the effect is delayed.

Common Causes of Counter-Clockwise Hysteresis:
Delayed Distribution to the Effect Site: The drug concentration in the plasma (where it's easily measured) is not the same as the concentration at the site of action (e.g., in the brain, in a specific tissue). It takes time for the drug to travel from the blood to this "effect compartment" or "biophase."

Example: Many central nervous system (CNS) drugs. It takes time for them to cross the blood-brain barrier and build up to an effective concentration in the brain tissue where they act.

Formation of an Active Metabolite: The parent drug you are measuring is metabolized into a different compound that is also pharmacologically active (and may even be more active). The effect you observe is the combined effect of the parent drug and this metabolite, which takes time to form.

Example: Heroin (diacetylmorphine) is quickly metabolized to morphine and 6-monoacetylmorphine (M6G). The peak "high" and respiratory depression (the effect) often lag behind the peak heroin concentration in the blood because these active metabolites are still building up.

Slow Receptor Binding: The drug binds to its target receptor (e.g., an enzyme or cell receptor) very slowly, or dissociates (un-binds) very slowly. The effect will persist as long as the drug is bound, even after the plasma concentration has dropped.

Indirect Pharmacodynamic Response: The drug doesn't cause the effect directly. Instead, it triggers a slow, downstream cascade of biological events (e.g., stimulating the synthesis of new proteins or inhibiting the turnover of a natural substance).

Example: Warfarin (an anticoagulant). Warfarin works by inhibiting the synthesis of new vitamin K-dependent clotting factors. The effect (a change in blood clotting, measured by INR) is delayed because the body must first clear out the clotting factors that already exist in the circulation. The peak warfarin concentration happens long before the peak anticoagulant effect.


**Clockwise hysteresis**


This type of loop is less common but signifies an important biological response.

What it looks like: The concentration-effect plot traces a path in a clockwise direction.

What it means: As plasma concentration rises, you get a strong initial effect. However, as time goes on, the effect starts to decrease, even if the plasma concentration stays high or is falling.

The key takeaway: You see a lesser effect at a later time point for the same plasma concentration. This indicates the body is developing acute tolerance.

Common Causes of Clockwise Hysteresis:

Acute Tolerance (Tachyphylaxis): This is the most common cause. The body rapidly adapts to the drug's presence, becoming less sensitive to it.
Example: Cocaine or amphetamines. The first dose produces a strong euphoric effect. With repeated exposure over a short period (even during the elimination of a single dose), the same blood concentration produces a much weaker response. This is due to mechanisms like the depletion of neurotransmitters (like dopamine) that the drug relies on to work.

Receptor Desensitization/Downregulation: The receptors that the drug targets literally become less responsive or are pulled inside the cell (internalized) to "hide" from the drug.

Negative Feedback Loops: The drug's effect triggers a separate biological system that works to counteract the drug's effect, effectively "pushing back" and reducing the observed response over time.Example: A drug that lowers blood pressure might trigger a reflex (like increasing heart rate) that tries to bring the blood pressure back up, thus reducing the drug's net effect over time.

Why is Hysteresis Important in PKPD Modeling?

Recognizing hysteresis is critical for successful drug development. If you ignore it and assume a simple, direct relationship, you will:Fail to describe the data: A simple $E_{max}$ or sigmoid model won't fit the loop shape, leading to incorrect parameter estimates (like EC50).

Misunderstand the drug's mechanism: Identifying the direction of the loop (clockwise vs. counter-clockwise) is a major clue about how the drug works (e.g., tolerance vs. delayed distribution).

Predict the wrong dose: If you don't account for the time lag, you can't accurately predict how long an effect will last or how a different dosing schedule (e.g., twice a day vs. once a day) will change the patient's response.

To handle hysteresis, modelers use more complex approaches, like effect-compartment models (which add a hypothetical "effect site" compartment) or indirect response (IDR) models (which model the drug's effect on the synthesis or degradation of a natural substance). The goal of these models is to "collapse the loop" and accurately describe the true relationship between drug and effect over time.
