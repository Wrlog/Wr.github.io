---
layout: post
title: 【Statistic】Maximum likelihood estimation, Maximum a posteriori probability estimation
categories: Statistic
description: MLE,MAP,Bayesian
keywords: Maximum likelihood estimation
---

Maximum likelihood estimation (MLE) and maximum a posteriori estimation (MAP) are two very common methods for parameter estimation, and it is easy to confuse them if you do not understand the ideas of these two methods.
The following section will explain the ideas and differences of MLE and MAP in detail.

Let's start with the difference between probability and statistics.

## Probability and Statistics are the same thing?

Probability and statistics may seem like two similar concepts, but they actually study the opposite research question.

The problem of probabilistic research is how to predict the characteristics of the results produced by a model (e.g. mean, variance, covariance, etc.) when the model and parameters are known. For example, I want to study how to raise swine (the model is pigs),
I have chosen the breed I want to raise, the feeding method, the design of the shed, etc. (choose the parameters), and I want to know approximately how fat and how good the meat will be when I raise the swine (predict the outcome).

The problem with statistical studies is the opposite. Statistics is that there is a pile of data that has to be used to predict models and parameters.
Still using the swine as an example. Now I get a pile of meat and through observation and judgment I determine that it is pork (which determines the model.)
In the actual research, also by observing the data to speculate the model is / like Gaussian distribution, exponential distribution, Laplace distribution, etc.), then,
you can further research to determine the breed of this pig, this is a captive pig or a Wild Boar or other species, and so on (predict model parameters).

**In a nutshell: probability is to predict the data with known model and parameters. Statistics is known data, predicting the model and parameters.**

Obviously, both MLE and MAP explained in this paper are problems in the field of **statistics**.
They are both methods used to infer parameters. Why do two different methods exist? This requires an understanding of Bayesian thinking.
Let's take a look at the Bayesian formulation.

## Bayesian Formula

## What is it really saying?

Bayes' theorem is the engine that powers MAP. At its heart, it's a simple, powerful rule for updating your beliefs in light of new evidence.The formula is:$$P(A | B) = \frac{P(B | A) \times P(A)}{P(B)}

$$
Let's label these parts, as they have special names:

* $P(A | B)$ = **Posterior:** "What is the probability of $A$ *after* I see evidence $B$?"
* $P(B | A)$ = **Likelihood:** "If $A$ were true, what is the probability I would see evidence $B$?"
* $P(A)$ = **Prior:** "What did I believe about $A$ *before* I saw any evidence?"
* $P(B)$ = **Evidence:** "What is the total probability of seeing evidence $B$?"

#### The Car Alarm Analogy

Let's use your great example:

* $A$ = Your car was smashed.
* $B$ = Your car alarm is going off.

We want to find $P(\text{Smashed} | \text{Alarm})$. How likely is your car smashed *given* you hear the alarm?

1.  **Prior $P(A)$ = $P(\text{Smashed})$:** What's the probability your car is smashed on any random day? It's *extremely low*. Maybe 0.001%. This is your prior belief.
2.  **Likelihood $P(B | A)$ = $P(\text{Alarm} | \text{Smashed})$:** If your car *was* smashed, what's the chance the alarm would go off? It's very high. Let's say 99%.
3.  **Evidence $P(B)$ = $P(\text{Alarm})$:** What's the *total* probability your car alarm goes off? This includes all reasons: kids playing, a cat, a malfunction, *and* being smashed. Because false alarms are common, this probability is much higher than you'd think, maybe 1%.

Bayes' theorem forces you to consider the **prior** (smashing is rare) and the **evidence** (alarms go off for many reasons) instead of just the **likelihood** (smashing causes alarms). This is why you (correctly) don't panic every time you hear an alarm.

-----

### 🤔 The Likelihood Function: A Shift in Perspective

This is a key concept. The expression $P(x | \theta)$ can be read in two ways, where $x$ is our data and $\theta$ is our parameter.

* **As a Probability Function:** If you **fix the parameter $\theta$** (e.g., a fair coin, $\theta=0.5$), this function tells you the probability of different data $x$ (e.g., the probability of getting 3 heads).
* **As a Likelihood Function:** In statistics, we do the opposite. We **fix the data $x$** (we already did the coin flips) and treat the **parameter $\theta$ as the variable**. This function, $L(\theta) = P(x | \theta)$, tells us how "likely" different parameter values are, given the data we saw.

Your $x^y$ analogy is perfect. The function $f(x, y) = x^y$ is:

* An exponential function if you fix $x$ (e.g., $2^y$).
* A power function if you fix $y$ (e.g., $x^2$).

It's the same formula, just a different perspective.

-----

### 📈 Maximum Likelihood Estimation (MLE)

**The Goal:** Find the one parameter value ($\theta$) that makes your observed data ($x$) **most probable**.

**The Question:** "What parameter $\theta$ best explains the data I saw, ignoring any and all of my prior beliefs?"

**The Method:** You maximize the **likelihood function** $L(\theta) = P(x | \theta)$.

#### The Coin Toss Example

* **Data ($x$):** You flip a coin 10 times and get 7 Heads, 3 Tails.
* **Parameter ($\theta$):** The (unknown) probability of getting Heads.
* **Likelihood Function:** The probability of getting this *exact* sequence is:$$$$L(\\theta) = P(\\text{Data} | \\theta) = \\theta \\times \\theta \\times (1-\\theta) \\times ... = \\theta^7 (1-\\theta)^3
$$

$$
MLE: What value of $\theta$ makes this function $L(\theta)$ as large as possible?If you guess $\theta = 0.5$, $L(0.5) = (0.5)^7 (0.5)^3 \approx 0.00097$If you guess $\theta = 0.7$, $L(0.7) = (0.7)^7 (0.3)^3 \approx 0.00222$As your graph showed, the function peaks at $\theta = 0.7$. This is the MLE. It's the most intuitive answer: the best guess for the coin's probability is the frequency you observed.

Maximum A Posteriori (MAP) EstimationThe Goal: Find the one parameter value ($\theta$) that is most probable given the data and your prior beliefs.The Question: "What parameter $\theta$ provides the best balance between explaining the data and fitting what I already believed to be true?"The Method: You use Bayes' theorem to find the posterior probability, 2$P(\theta | x)$, and maximize that.3$$\text{Maximize } P(\theta | x) \propto P(x | \theta) \times P(\theta)
$$We ignore the denominator $P(x)$ because it's just a normalizing constant and doesn't change *where* the peak is.

So, MAP maximizes: **$\text{Likelihood} \times \text{Prior}$**.

#### The Coin Toss Example (Revisited)

* **Data ($x$):** 7 Heads, 3 Tails.
* **Likelihood $P(x | \theta)$:** Same as before, $\theta^7 (1-\theta)^3$.
* **Prior $P(\theta)$:** Now, you add your *belief*. You believe coins are almost always fair. You could represent this belief with a probability distribution peaked at $\theta = 0.5$ (like the Gaussian in your example).
* **MAP:** You are now maximizing the product:$$$$\\text{Maximize } [\\theta^7 (1-\\theta)^3] \\times [\\text{Your Gaussian function peaked at 0.5}]
$$

$$
The Result: The likelihood "pulls" the estimate toward 0.7 (the data). The prior "pulls" it toward 0.5 (your belief). The final MAP estimate is a compromise between the two, landing somewhere like $\theta = 0.68$ (as in your graph).What if You Have More Data?Your last example is the most important part!If you flip 1000 times and get 700 Heads, the likelihood becomes $\theta^{700} (1-\theta)^{300}$.This function is incredibly sharply peaked at $\theta = 0.7$. It's so strong that it completely overwhelms your "gentle" prior belief.The MAP estimate will now be extremely close to 0.7 (e.g., $\theta = 0.699$). This shows that with enough data, the data speaks for itself and overcomes your initial beliefs.




Feature,Maximum Likelihood (MLE),Maximum A Posteriori (MAP)
What it Maximizes,Likelihood: $P(x,\theta)$
Philosophical Idea,"""Find the parameter that best explains the data.""","""Find the parameter that best balances the data and my prior beliefs."""
What it Considers,Data only.,Data + Prior Belief.
Connection,MLE is a special case of MAP where the prior P(θ) is a uniform distribution (meaning you have no prior belief and assume all θ values are equally likely).,
$$
