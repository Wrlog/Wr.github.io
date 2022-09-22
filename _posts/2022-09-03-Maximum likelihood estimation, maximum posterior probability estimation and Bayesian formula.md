---
layout: post
title: 【Statistic】Maximum likelihood estimation, Maximum a posteriori probability estimation
categories: Statistic 
description: MLE,MAP,Bayesian
keywords:  Maximum likelihood estimation
---

Maximum likelihood estimation (MLE) and maximum a posteriori estimation (MAP) are two very common methods for parameter estimation, and it is easy to confuse them if you do not understand the ideas of these two methods. 
The following section will explain the ideas and differences of MLE and MAP in detail.

Let's start with the difference between probability and statistics.


## Probability and Statistics are the same thing?

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


## Bayesian Formula 
## What is it really saying?


Anyone studying machine learning and pattern recognition must have heard of the Bayes' Theorem formula:

<img width="136" alt="image" src="https://user-images.githubusercontent.com/69442517/191628939-ec8bb412-3f23-4a00-9264-b299d50b8c6f.png">


The Bayesian formula looks simple and is nothing more than a formula for inverting the conditional probability and joint probability.


Expanding B, it can be written as follows :

<img width="244" alt="image" src="https://user-images.githubusercontent.com/69442517/191629088-6ba04923-96cb-4880-96c9-39b1e339e4b3.png">


This equation is interesting.

Think about this situation. A car (or electric car) alarm goes off, what is your usual reaction? A thief? A car crash? Nope. You usually do not react to anything. Because a car alarm goes off is just too normal! It happens many times a day. Originally, car alarms were set up to function as an unusual situation that required human attention. However, because there are simply too many false alarms, people gradually do not trust the function of the alarm.


**The Bayesian formula is a description of how much you can trust the evidence. (how much you can trust the evidence)**

Let's assume that the purpose of the alarm is to say that the car was smashed. Take **A as "the car was smashed" and B as "the alarm went off"** and bring them into the Bayesian equation. We want to find the probability of the left side of the equation <img width="22" alt="image" src="https://user-images.githubusercontent.com/69442517/191629357-62eb1d2d-6451-41dd-b22b-835b34ccf9d7.png">
, which is saying that the alarm went off and the car did get smashed. The car being smashed causes the alarm to go off, i.e.<img width="23" alt="image" src="https://user-images.githubusercontent.com/69442517/191629376-d48f0cad-335c-47e2-817f-183509b77b8a.png">.


However, it is also possible that the car was kicked by a child's ball, touched by a pedestrian and other reasons (statistics as <img width="21" alt="image" src="https://user-images.githubusercontent.com/69442517/191629474-3f1746ab-95ae-4bd4-886e-1cb72d7389c8.png">
 ), other reasons caused the car alarm sounded, that is,<img width="37" alt="image" src="https://user-images.githubusercontent.com/69442517/191629497-2c953733-dd43-46cb-ae95-f3e313137b7d.png">. So, what is the probability that the car has been smashed when the alarm is suddenly heard (i.e., with the evidence that the alarm is sounding, how sure can we be that it is indeed an alarm that the car has been smashed)? Let's think about it this way. Divide the number of events in which the alarm went off and the car was smashed by the number of events in which the alarm went off.


To expand further, the number of events where the alarm went off and the car was also smashed is divided by the number of events where the alarm went off and the car was smashed plus the number of events where the alarm went off and the car was not smashed

**Summarize Bayes' formula from this perspective: When making judgments, consider all the factors.** When your boss scolds you, it doesn't necessarily mean that you screwed up some work, it might just be that he had a fight with his wife before he left home today.


Think of the Bayesian formula in this light: something that is already difficult to happen, even if some evidence appears that is strongly correlated with him, should be cautious. The evidence is likely to come from something else that, although not very relevant, has a higher probability of occurring. I found that the code I just wrote compiled with an error, but I am in a particularly good state today, and I am familiar with this language, so the probability of making a mistake is very low. So I think it's a compiler error. --don't, let's just check our code again.


## Likelihood function


The word likelihood is actually similar in meaning to probability, and the Colins dictionary explains it this way: The **likelihood** of something happening is how likely it is to happen. You replace likelihood with probability, this interpretation also reads well. But in statistics, the likelihood function and the probability function are two different concepts (in fact, they are also very similar).

For this function :

<img width="59" alt="image" src="https://user-images.githubusercontent.com/69442517/191629914-f5450c05-3804-4dee-b0fd-aa6c83b2d8a7.png">


There are two inputs: x denotes a specific data; and the parameters of the model.

If <img width="10" alt="image" src="https://user-images.githubusercontent.com/69442517/191629984-d99a6cc5-03d6-4e9f-b6c2-594b01e7001f.png"> is known for sure and <img width="10" alt="image" src="https://user-images.githubusercontent.com/69442517/191630063-a6c3ff98-4c51-473f-9389-72480fa85e91.png"> is a variable, this function is called the probability function (probability function), which describes what the probability of occurrence is for different sample points x.


If <img width="10" alt="image" src="https://user-images.githubusercontent.com/69442517/191630063-a6c3ff98-4c51-473f-9389-72480fa85e91.png"> is known for sure and <img width="10" alt="image" src="https://user-images.githubusercontent.com/69442517/191629984-d99a6cc5-03d6-4e9f-b6c2-594b01e7001f.png">  is a variable, this function is called the likelihood function, which describes the probability of occurrence of the sample point x for different model parameters.

It's kind of like "two dishes in one". In fact, it is not uncommon for us to encounter such a form before. For example,<img width="55" alt="image" src="https://user-images.githubusercontent.com/69442517/191630310-166bfb8e-d0fb-4887-8604-883fca34abc4.png"> ,that is, x to the yth power. 

If it is known for sure x(e.g.x = 2), this is<img width="45" alt="image" src="https://user-images.githubusercontent.com/69442517/191630500-2582097c-605e-448f-8d33-f6fc3e2762ef.png">, this is the exponential function. If it is known for sure y (e.g.y = 2), this is, this is the quadratic function. The same mathematical form can have different names when viewed from the perspective of different variables.

That should make it clear, right? If it's not clear, don't worry, there will be specific examples below.

Now it's really time to talk about MLE first.


## Maximum Likelihood Estimation (MLE)

Suppose there is a mint that produces a certain coin, and now we have one of these coins and want to see if it is uniform. That is, we want to know what is the probability of tossing this coin, and what is the probability of it coming up on both sides (denoted as <img width="8" alt="image" src="https://user-images.githubusercontent.com/69442517/191630646-ffcb2173-0672-4678-b0d9-f6b575291f8e.png">
 )?

This is a statistical problem. Think back. What do you need to solve a statistical problem? Data!

So we take this coin and flip it 10 times, and the data we get (<img width="16" alt="image" src="https://user-images.githubusercontent.com/69442517/191630674-088c54d8-8f50-4e3b-8ad4-2fece2856e55.png"> ) is:  tail,heads,heads,heads,heads,tails,,heads,heads,heads,tails. The probability of heads,<img width="8" alt="image" src="https://user-images.githubusercontent.com/69442517/191630646-ffcb2173-0672-4678-b0d9-f6b575291f8e.png"> we want to find is a model parameter, and the coin toss model we can assume is a binomial distribution.

So, what is the likelihood function of the experimental result (i.e.,tail,heads,heads,heads,heads,tails,,heads,heads,heads,tails)?


<img width="432" alt="image" src="https://user-images.githubusercontent.com/69442517/191630925-b31fcf46-1ec1-4308-84e1-5550816442de.png">


Note that this is a function that is only about the <img width="8" alt="image" src="https://user-images.githubusercontent.com/69442517/191630646-ffcb2173-0672-4678-b0d9-f6b575291f8e.png">. And the maximum likelihood estimation, as the name implies, is to maximize this function. We can draw the image of.


<img width="415" alt="image" src="https://user-images.githubusercontent.com/69442517/191631117-1e429d6b-00e1-436b-8ee2-38708e2d1d9e.png">


It can be seen that the likelihood function achieves its maximum value at time <img width="37" alt="image" src="https://user-images.githubusercontent.com/69442517/191631181-38637457-bb3e-4157-a12e-ef9cb1efb18a.png">.

Thus, we have completed the maximum likelihood estimation of <img width="8" alt="image" src="https://user-images.githubusercontent.com/69442517/191630646-ffcb2173-0672-4678-b0d9-f6b575291f8e.png">. That is, if we flip a coin 10 times and find that 7 times the coin is tipped heads, the maximum likelihood estimate is 0.7. (ummm...that's pretty intuitive and reasonable, right?)

Wait, some people may say, coins are usually even! Even if you do the experiment and find that the result is "positive positive positive positive positive negative anyway", I don't believe it.

Here contains the Bayesian of thought - to consider the prior probability. For this reason, the maximum a posteriori probability estimate is introduced.


## Maximum a posteriori probability estimation

The maximum likelihood estimation is to find the parameter <img width="8" alt="image" src="https://user-images.githubusercontent.com/69442517/191630646-ffcb2173-0672-4678-b0d9-f6b575291f8e.png"> , which maximizes the likelihood function <img width="38" alt="image" src="https://user-images.githubusercontent.com/69442517/191631476-8f7f4a98-b2bc-457a-8a3c-d0961152befb.png">. The maximum a posterior probability estimation is to find<img width="8" alt="image" src="https://user-images.githubusercontent.com/69442517/191630646-ffcb2173-0672-4678-b0d9-f6b575291f8e.png"> that maximize <img width="58" alt="image" src="https://user-images.githubusercontent.com/69442517/191631685-8f492c71-a1cd-4ec0-a352-2a53ed53bb88.png">. Not only do we want the likelihood function of <img width="8" alt="image" src="https://user-images.githubusercontent.com/69442517/191630646-ffcb2173-0672-4678-b0d9-f6b575291f8e.png">to be large, but we also want the prior probability of occurrence to be large. (This is a bit like the idea of adding penalty terms in regularization, but regularization uses addition, while MAP uses multiplication)

MAP is actually maximizing


<img width="144" alt="image" src="https://user-images.githubusercontent.com/69442517/191631743-ce8d8ee3-7e51-475a-9387-9efc3cc9518f.png">


However, since <img width="16" alt="image" src="https://user-images.githubusercontent.com/69442517/191631861-00392a04-1051-487d-b6e1-b29e059adada.png">
 is a certainty (i.e.,"tail,heads,heads,heads,heads,tails,,heads,heads,heads,tails"),<img width="38" alt="image" src="https://user-images.githubusercontent.com/69442517/191632026-52bbcb51-e9db-4d00-99f8-55b28dd3ac87.png"> is a known value, so the denominator is removed  <img width="38" alt="image" src="https://user-images.githubusercontent.com/69442517/191632187-672f74f1-240b-4e99-90e7-b187649b84f2.png"> (suppose "10 tosses" is an experiment, and the experiment is done 1000 times, and "tail,heads,heads,heads,heads,tails,,heads,heads,heads,tails" Oncurred n times, then <img width="80" alt="image" src="https://user-images.githubusercontent.com/69442517/191631992-413fbb4f-3acf-40a6-831b-b4a348664ee1.png">
 
 
In short, it is a value that can be obtained from the data set. The meaning of maximization of <img width="38" alt="image" src="https://user-images.githubusercontent.com/69442517/191632283-766675f4-a3b6-4ea2-bfda-f16e4cc4135c.png"> is also clear,<img width="26" alt="image" src="https://user-images.githubusercontent.com/69442517/191632444-b42e4ac8-99ec-485e-ab34-473b7d34194d.png">already present
,Require <img width="10" alt="image" src="https://user-images.githubusercontent.com/69442517/191632509-66e89bb9-7ef1-4d87-95a3-a6c3596dc9d3.png"> to tkae the value that maximize <img width="37" alt="image" src="https://user-images.githubusercontent.com/69442517/191632557-bd036d27-c390-4c0e-ac47-21ec26945e98.png"> .Incidentally, <img width="35" alt="image" src="https://user-images.githubusercontent.com/69442517/191632603-3cdca801-a412-4b3e-9668-8612956702f6.png">
 is the posterior probability, which is the origin of the name "maximum posterior probability estimation".


For the coin toss example, we believe ("know a priori") that there is a high probability of <img width="9" alt="image" src="https://user-images.githubusercontent.com/69442517/191632666-6d7b83e4-5059-464c-9efa-79468417050c.png"> taking 0.5 and a smaller probability of taking other values. We specify this prior knowledge we have with a Gaussian distribution, for example, assuming <img width="21" alt="image" src="https://user-images.githubusercontent.com/69442517/191632757-4ffaff98-fb44-4f7b-8fdd-cbc371c6de5f.png"> as a Gaussian function with mean 0.5 and variance 0.1, as follows :


<img width="413" alt="image" src="https://user-images.githubusercontent.com/69442517/191632803-96eb3439-3bff-4bc7-b697-16ca29b5f4c1.png">


Then the image of the function of<img width="61" alt="image" src="https://user-images.githubusercontent.com/69442517/191632833-d9cae98b-61ec-47a9-8643-ebab8ae5630f.png"> is as follow :


<img width="397" alt="image" src="https://user-images.githubusercontent.com/69442517/191632918-be4b0a93-8ca9-4fdf-ae85-b4b6fb86ccc4.png">


Note that at this point, when the function takes its maximum value, <img width="10" alt="image" src="https://user-images.githubusercontent.com/69442517/191632994-f4511dc1-2c91-466a-9a7b-50f7a6243378.png"> value is shifted to the left and is no longer 0.7. In fact, the function takes <img width="49" alt="image" src="https://user-images.githubusercontent.com/69442517/191633044-c22e5fee-77ea-4782-9aab-2600427ec02e.png"> as its maximum value at the time. That is, using the maximum posterior probability estimate, we get <img width="49" alt="image" src="https://user-images.githubusercontent.com/69442517/191633064-5c11d58f-8bbb-4923-80fe-be0abeb33d7a.png"> .

Finally, what does it take to convince a Bayesian<img width="37" alt="image" src="https://user-images.githubusercontent.com/69442517/191633101-7a8c4e30-fe52-42c9-81fd-57425e1017af.png"> ? You have to do more experiments.

If you do 1000 experiments and 700 of them are positive, then the likelihood function is :


<img width="409" alt="image" src="https://user-images.githubusercontent.com/69442517/191633132-2445ae2b-99d1-44ad-a20d-b359049f12be.png">


If one still assumes<img width="23" alt="image" src="https://user-images.githubusercontent.com/69442517/191633209-1b0c7d25-5a48-4df6-a58b-123cef03cbc8.png"> is a Gaussian function with mean 0.5 and variance 0.1, the image of the function <img width="62" alt="image" src="https://user-images.githubusercontent.com/69442517/191633235-5ee77b59-596c-4881-b3e4-d0feb65f51a3.png"> is :

<img width="389" alt="image" src="https://user-images.githubusercontent.com/69442517/191633261-1f5f3794-3b49-4a56-beb7-cb54b79992bb.png">


At <img width="49" alt="image" src="https://user-images.githubusercontent.com/69442517/191633302-dc43ad0f-fa3e-48f7-b454-15146dfd181e.png">,<img width="61" alt="image" src="https://user-images.githubusercontent.com/69442517/191633342-e1feb269-3dd3-4d4a-9d10-37e7db47f0d6.png"> obtained the maximum value.


## The difference between maximum likelihood estimation and maximum a posterior probability estimation


I believe that after reading the above, the difference between MLE and MAP should be clear, MAP is multiple  factors as a priori probability <img width="28" alt="image" src="https://user-images.githubusercontent.com/69442517/191633550-36b32c96-2fd5-4bc3-a530-67810fb369b6.png">. Alternatively, it can be reversed to consider MLE as the prior probability <img width="28" alt="image" src="https://user-images.githubusercontent.com/69442517/191633550-36b32c96-2fd5-4bc3-a530-67810fb369b6.png"> equal to 1, i.e.,take <img width="11" alt="image" src="https://user-images.githubusercontent.com/69442517/191633581-53441e20-190a-4afb-b109-8dd81fbe36bf.png"> as a uniform distribution.
