---
layout: post
title: 【Deep learning】Variational Autoencoder (VAE)
categories: ML/DL
description: Encoder-Decoder
keywords: Autoencoder,ML/DL
---

A Variational Autoencoder (or VAE) is a powerful type of generative model in artificial intelligence. Its primary purpose is to learn the underlying structure of a dataset (like images of faces or handwritten digits) in order to generate new, original data that looks similar to the data it was trained on.

It cleverly combines the architecture of a standard autoencoder with statistical principles (this is the "variational" part) to create a smooth and meaningful compressed representation of the data.

**The Architecture: Encoder and Decoder**

At its core, a VAE has two main parts, just like a standard autoencoder:

The Encoder: This is a neural network that compresses or encodes high-dimensional input data (like a 28x28 pixel image) into a much smaller, lower-dimensional representation. This compressed "summary" is called the latent space or latent vector (often named $z$).

The Decoder: This is another neural network that does the exact opposite. It takes the compressed latent vector $z$ and decompresses or decodes it, attempting to reconstruct the original input data as accurately as possible.

**The "Variational" Difference: The Key Idea**

This is what makes a VAE so special and different from a standard autoencoder.A standard autoencoder encodes an input to a single, specific point in the latent space. The problem is that this space can be irregular and "gappy." If you pick a random point in that space, the decoder will likely produce meaningless garbage because it wasn't trained on what that "in-between" point means.A Variational Autoencoder solves this by encoding each input as a probability distribution (specifically, a Gaussian or "bell curve") within the latent space.Instead of outputting one vector $z$, the encoder outputs two vectors:

A mean vector ($\mu$)A standard deviation vector ($\sigma$)These two vectors ($\mu$ and $\sigma$) define a small, fuzzy region of possible points for that input. To get the final latent vector $z$, we then randomly sample a point from within that distribution. This process (called the reparameterization trick) ensures that the latent space is continuous and smoothly organized.Because of this, points that are close to each other in the latent space will decode into similar-looking outputs. This smoothness is what allows the VAE to be generative. You can pick a random point $z$ from the latent space, feed it to the decoder, and it will generate a new, plausible image.

**How a VAE Learns: The Two-Part Loss Function**

A VAE learns by optimizing a special loss function that has two competing goals:

1. Reconstruction Loss
   This is the "autoencoder" part. It measures how well the decoder reconstructed the original input. It asks: "How similar is the output image to the input image?"

This is often a Mean Squared Error (MSE) or Binary Cross-Entropy (BCE).

A simple MSE formula looks like this:

$$ L*{\text{reconstruction}} = \frac{1}{N} \sum*{i=1}^{N} (x_i - x'\_i)^2$$

(Where $x$ is the original input and $x'$ is the reconstructed output).

2. Kullback-Leibler (KL) DivergenceThis is the "variational" part. This loss term acts as a regularizer. It measures the "distance" between the distribution created by the encoder (defined by $\mu$ and $\sigma$) and a simple standard normal distribution (where the mean is 0 and the standard deviation is 1).This loss forces all the little "regions" encoded by the VAE to cluster around the center of the latent space and not drift too far apart.This is what organizes the latent space and ensures it remains smooth and continuous.The formula looks like this:

$$ L*{KL} = D*{KL}( \mathcal{N}(\mu, \sigma^2) \parallel \mathcal{N}(0, 1) )$$

The total loss for the VAE is a combination of these two. The model must learn to balance them:

$$L_{VAE} = L_{\text{reconstruction}} + L_{KL}$$

It has to get good at reconstructing the images while also keeping the latent space organized and smooth.

**What Are VAEs Used For?**

Because they are so good at learning a smooth representation of data, VAEs are used for:Image and Data Generation: Creating new, realistic images of faces, objects, or even music and text.Data Compression: They learn a highly efficient, compressed representation of data.Image Denoising: They can reconstruct a "clean" image from a noisy or corrupted one.Latent Space Arithmetic: You can perform math on the latent vectors. The classic example is:(vector for "man with glasses") - (vector for "man") + (vector for "woman") $\approx$ (vector for "woman with glasses")
