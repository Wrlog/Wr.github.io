---
layout: post
title: 【Statistic】Maximum likelihood estimation, maximum posterior probability estimation and Bayesian formula
categories: Statistic 
description: MLE,MAP,BBayesian
keywords:  Maximum likelihood estimation, maximum posterior probability estimation and Bayesian formula
---

Maximum likelihood estimation (MLE) and maximum a posteriori estimation (MAP) are two very common methods for parameter estimation, and it is easy to confuse them if you do not understand the ideas of these two methods. 
The following section will explain the ideas and differences of MLE and MAP in detail.

Let's start with the difference between probability and statistics.


##Probability and Statistics are the same thing?

Probability and statistics may seem like two similar concepts, but they actually study the opposite problem.

The problem of probabilistic research is how to predict the characteristics of the results produced by a model (e.g. mean, variance, covariance, etc.) when the model and parameters are known. For example, I want to study how to raise swine (the model is pigs), 
I have chosen the breed I want to raise, the feeding method, the design of the shed, etc. (choose the parameters), and I want to know approximately how fat and how good the meat will be when I raise the swine (predict the outcome).

The problem with statistical studies is the opposite. Statistics is that there is a pile of data that has to be used to predict models and parameters. 
Still using the swine as an example. Now I get a pile of meat and through observation and judgment I determine that it is pork (which determines the model.) 
In the actual research, also by observing the data to speculate the model is / like Gaussian distribution, exponential distribution, Laplace distribution, etc.), then, 
you can further research to determine the breed of this pig, this is a captive pig or a running hill pig or a net pig, and so on (speculation model parameters).

**In a nutshell: probability is to predict the data with known model and parameters. Statistics is known data, predicting the model and parameters.**

Obviously, both MLE and MAP explained in this paper are problems in the field of **statistics**. 
They are both methods used to infer parameters. Why do two different methods exist? This requires an understanding of Bayesian thinking. 
Let's take a look at the Bayesian formulation.

