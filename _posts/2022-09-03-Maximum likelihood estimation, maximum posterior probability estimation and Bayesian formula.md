---
layout: post
title: 【Statistics】Maximum Likelihood Estimation (MLE) vs. Maximum A Posteriori (MAP)
categories: Statistics
description: Understanding the core differences between MLE, MAP, and Bayesian inference.
keywords: Maximum likelihood estimation, MAP, Bayesian, Probability vs Statistics
---

Maximum Likelihood Estimation (**MLE**) and Maximum A Posteriori (**MAP**) are two common methods for parameter estimation. Because they perform similar tasks, they are often confused.

The following section explains the intuition and mathematical differences between MLE and MAP. To understand them, we must first clarify the relationship between Probability and Statistics.

---

## 1. Probability vs. Statistics: The Cookie Jar Analogy

Probability and statistics may seem like identical concepts, but they actually ask opposite questions.

### The Probability Question
**"Given the Model, predict the Data."**

Imagine you have a **Cookie Jar (The Model)**. You know exactly what is inside: 90 chocolate chip cookies and 10 oatmeal raisin cookies (The Parameters). You reach in and grab a handful of cookies.
* *Probability asks:* "What is the likelihood that I will pull out 3 chocolate chip cookies and 1 oatmeal raisin?"

### The Statistics Question
**"Given the Data, predict the Model."**

Now, imagine you are blindfolded. You are presented with a jar, but you don't know what is inside. You reach in and pull out a handful of cookies: 3 chocolate chip and 1 oatmeal raisin (**The Data**).
* *Statistics asks:* "Based on these cookies in my hand, what is the likely ratio of cookies inside the jar?"

**In a nutshell:**
* **Probability:** Model $\rightarrow$ Data (Deduction)
* **Statistics:** Data $\rightarrow$ Model (Induction)

Both MLE and MAP are **Statistical** problems. We have data, and we are trying to infer the parameters of the model.

---

## 2. Bayes' Theorem: Updating Beliefs

To understand MAP, you must understand Bayes' Theorem. It is a rule for updating your beliefs after seeing evidence.

$$
P(A | B) = \frac{P(B | A) \times P(A)}{P(B)}
$$

Let's break down the terminology:

* **$P(A | B)$ (Posterior):** "What is the probability of $A$ *after* I see evidence $B$?"
* **$P(B | A)$ (Likelihood):** "If $A$ were true, what is the probability I would see evidence $B$?"
* **$P(A)$ (Prior):** "What did I believe about $A$ *before* I saw any evidence?"
* **$P(B)$ (Evidence):** The total probability of seeing the evidence.

### The Car Alarm Analogy
Let $A$ be **"Car Stolen"** and $B$ be **"Alarm Ringing"**.
We want to know $P(\text{Stolen} | \text{Alarm})$.

1.  **Likelihood ($P(\text{Alarm} | \text{Stolen})$):** If your car is being stolen, the alarm will almost certainly ring (high probability).
2.  **Prior ($P(\text{Stolen})$):** How likely is it that a car is stolen on any random day? Very low.
3.  **Posterior ($P(\text{Stolen} | \text{Alarm})$):** Even though the alarm is ringing, the probability your car is actually being stolen is still relatively low, because the **Prior** (the general rarity of theft) weighs the probability down. It is more likely a false alarm.

---

## 3. The Likelihood Function

The expression $P(x | \theta)$ involves Data ($x$) and Parameters ($\theta$). It can be interpreted in two ways:

1.  **Probability Function (fixed $\theta$, variable $x$):** If the coin is fair ($\theta=0.5$), what are the odds of getting Heads ($x$)?
2.  **Likelihood Function (fixed $x$, variable $\theta$):** If I flipped Heads ($x$), what is the likelihood the coin was fair ($\theta$)?

In statistics, we use the second definition. We define the Likelihood Function as:

$$
L(\theta) = P(x | \theta)
$$

---

## 4. Maximum Likelihood Estimation (MLE)

**The Goal:** Find the parameter $\theta$ that makes the observed data **most probable**.
**The Philosophy:** "Let the data speak for itself. Ignore subjective beliefs."

$$
\theta_{MLE} = \operatorname*{argmax}_\theta P(x | \theta)
$$

### Example: The Coin Toss
You flip a coin 10 times.
* **Data ($x$):** 7 Heads, 3 Tails.
* **Parameter ($\theta$):** Probability of Heads (Unknown).

We want to maximize the likelihood:
$$P(x | \theta) = \theta^7 (1-\theta)^3$$

* If we guess $\theta = 0.5$: $0.5^7 \times 0.5^3 \approx 0.0009$
* If we guess $\theta = 0.7$: $0.7^7 \times 0.3^3 \approx 0.0022$

The function peaks at **0.7**. Therefore, the MLE estimate is **0.7**.

---

## 5. Maximum A Posteriori (MAP)

**The Goal:** Find the parameter $\theta$ that is most probable given the data **AND** our prior knowledge.
**The Philosophy:** "The data is important, but extraordinary claims require extraordinary evidence."

MAP uses Bayes' Theorem. We want to maximize the **Posterior**:

$$
\text{Maximize } P(\theta | x) \approx P(x | \theta) \times P(\theta)
$$

*(We ignore the denominator $P(x)$ because it is constant).*

So, MAP maximizes: **Likelihood $\times$ Prior**.

### Example: The "Fair" Coin
* **Data ($x$):** 7 Heads, 3 Tails.
* **Prior ($P(\theta)$):** You know from experience that most coins are fair. You represent this belief with a Gaussian distribution peaked at $\theta=0.5$.

Now we maximize:
$$
(\theta^7 (1-\theta)^3) \times (\text{Gaussian Prior at 0.5})
$$

* The **Likelihood** pulls the estimate toward **0.7**.
* The **Prior** pulls the estimate toward **0.5**.
* The **MAP Result** settles somewhere in the middle, perhaps **0.65**.

### When Data Overcomes Belief
What happens if you flip the coin 1,000 times and get 700 heads?

The Likelihood term $\theta^{700}(1-\theta)^{300}$ becomes incredibly sharp and specific. It becomes so strong that it overpowers the Prior.
* **Small Data:** Prior matters (MAP $\neq$ MLE).
* **Infinite Data:** Prior is ignored (MAP $\approx$ MLE).

---

## Summary

| Feature | Maximum Likelihood (MLE) | Maximum A Posteriori (MAP) |
| :--- | :--- | :--- |
| **Formula** | $P(x | \theta)$ | $P(x | \theta) \times P(\theta)$ |
| **Philosophy** | Only the data matters. | Data + Prior Knowledge matters. |
| **Assumptions** | Assumes a **Uniform Prior** (all parameter values are equally likely). | Assumes a specific **Prior Distribution** (e.g., Gaussian). |
| **Best Used When** | You have lots of data. | You have scarce data or strong domain knowledge. |
