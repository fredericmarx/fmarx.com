---
layout: base
title: The magic is coming from inside the house
description: What if we take everything that generative AI asks of us, and do the exact opposite?
webmentions: true
date: 2025-11-26
---

> Once a particular program is unmasked, once it’s inner workings are explained in language sufficiently plain to induce understanding, its magic crumbles away.
>
> – Joseph Weizenbaum, [ELIZA](https://web.stanford.edu/class/cs124/p36-weizenabaum.pdf)

It usually takes at least three steps to solve a problem through automation:

1. Understand the problem.
2. Come up with a process to solve the problem.
3. Put together a technological system that makes it easy to repeat this process many times.

If it were up to the tech oligarchs at the forefront of the generative AI movement, we shouldn’t waste our time with any of that. The core assumption that drives their ideology: If we feed a neural network enough examples of desirable outcomes, a system to generate such outcomes will eventually manifest itself. Who cares about the process, as long as we get _results_.

Neural networks are pattern recognition machines. Generative AI, as marketed today, is based on their capability to transform an input to resemble whatever patterns they’ve picked up on in their training data. But even if we settled on an approach to this that didn’t require [staggering amounts of money and resources](https://dcahn.substack.com/p/ai-capex-now-hinges-on-deus-ex-machina), and [large-scale theft of intellectual labor](https://fmarx.com/journal/pink-goo-and-stolen-sandwiches/), the technology itself has some limitations that are important to bear in mind.

Imagine you’re building a system that can identify if someone is a doctor. You could train a neural network on pictures of doctors, but depending on where you get your training data, there’s a good chance that all you’d end up with is a system that detects when an image is predominantly white.

The neural network has no way to know that doctors don’t always wear white, nor that people who wear white aren’t always doctors. “[The training data for [machine learning models] is only form; they do not have access to meaning](https://dl.acm.org/doi/10.1145/3442188.3445922)”.

## Hallucination is in the eye of the beholder

In 1966, Joseph Weizenbaum released [ELIZA](https://en.wikipedia.org/wiki/ELIZA). Similar to AI chatbots today, ELIZA’s simple technique of reflecting statements back at its human conversation partners was tapping into psychological vulnerabilities through which we’re compelled to “[become our own emotional manipulators](https://www.psychologytoday.com/us/blog/dancing-with-the-devil/202506/how-emotional-manipulation-causes-chatgpt-psychosis)”, and to see consciousness in an unthinking machine.

ChatGPT is more advanced than ELIZA, in the sense that its [vast swamps of training data](https://arxiv.org/abs/2306.13141) make it more likely to produce information that goes beyond a reflection of the prompt, and in that the ability of machine learning models to mimic the _form_ of human language is a lot more convincing than the rudimentary algorithms of its predecessors. But there is no guarantee that _convincing_ also means _correct_.

> Chatbots — LLMs — do not know facts and are not designed to be able to accurately answer factual questions. They are designed to find and mimic patterns of words, probabilistically. When they’re “right” it’s because correct things are often written down, so those patterns are frequent.
>
> When a chatbot gets something wrong, it’s not because it made an error. It’s because on that roll of the dice, it happened to string together a group of words that, when read by a human, represents something false.
>
> – Katie Mac via [Bluesky](https://bsky.app/profile/astrokatie.com/post/3lrxfsxnkms2c)

As far as an LLM is concerned, nothing it produces is “correct” or “false”. [Pleading with a chatbot to stop hallucinating is futile](https://arxiv.org/abs/2409.05746), because what we perceive as hallucination is simply the gap between the kind of output we’d expect, and the output that it actually produces.

We should adjust our expectations accordingly.

## If you think AI is smart, wait until you meet yourself

The trick to making an LLM’s mediocre output appear ✨magical✨ is showing it side by side with the human input that spawned it. Seeing the prompt reflected in its corresponding result contributes to the illusion that the LLM _understands us_, even though “[no actual language understanding is taking place […] as can be shown by careful manipulation of the test data to remove spurious cues the systems are leveraging” and “LMs […] only have success in tasks that can be approached by manipulating linguistic form](https://dl.acm.org/doi/10.1145/3442188.3445922)”.

Maybe even more importantly, the prompt provides a frame for interpreting its own output in a way that makes it make sense. “[If one side of the communication does not have meaning, then the comprehension of the implicit meaning is an illusion arising from our singular human understanding of language (independent of the model)](https://dl.acm.org/doi/10.1145/3442188.3445922)”.

If I yell towards the sky, “Show me a duck!”, and you look up and see the shape of one in a cloud, that says more about human imagination than about the reasoning capabilities of the cloud.

## Show me how it fails, and I’ll tell you how it works

Any magic trick quickly falls apart if not performed by a skilled illusionist in a carefully controlled environment.

When [Grok](https://en.wikipedia.org/wiki/Grok_(chatbot)) suggested that [Elon Musk has the “potential to drink piss better than any human in history”](https://www.404media.co/elon-musk-could-drink-piss-better-than-any-human-in-history-grok-says/), it was doing exactly what you’d expect from an LLM; It took a prompt (such as “Would Elon Musk do well in a piss drinking competition?”), combined it with data on which it had been trained (such as “Elon Musk is an exceptional athlete”), and molded the resulting string of words into something that – at least formally – looks like a sentence an actual human might write.

A glitch like this “[foregrounds the medium, unveiling the limitations of the machine more than capabilities](https://charumaithani.net/texts/glitch-and-error-implications-in-aesthetics-and-communication/)”, and brings us closer to understanding how it actually works.

In many ways, understanding how things work is the antithesis of generative AI.

## Had one idea, called it a day

> AI won't replace you.<br>An executive who doesn't understand AI or your job will.
>
> – Jason Gorman via [Bluesky](https://bsky.app/profile/jasongorman.bsky.social/post/3lrf72ri56k2b)

When researcher Elaine Zhao prompted [Stability AI](https://en.wikipedia.org/wiki/Stability_AI) and ChatGPT to generate pictures of *“Video Game Italian Plumber”*, “[each program generated an output that highly resembled Mario, the Italian plumber from the video game Super Mario, a copyrighted character](https://escholarship.org/uc/item/50c8j1xt)”.

This example illustrates two fundamental issues with LLMs as creative tools.

Firstly, both models didn’t _generate_ the character Mario. The only way they were able to produce the output that they did is by regurgitating something that _already had been created_ by somebody else.

Secondly, it implies that [Shigeru Miyamoto](https://en.wikipedia.org/wiki/Shigeru_Miyamoto) woke up one day with the fully-formed idea to make a video game about an Italian plumber with a red hat and a mustache, and his adventures in the Mushroom Kingdom. In reality, like most ideas, [Mario was developed over time, in a creative process](https://en.wikipedia.org/wiki/Mario#Concept_and_creation), chipping away at original concepts, outside influences, inspiration, and creative constraints.

Another example for a tech oligarch’s flagrant ignorance of the processes and human dynamics that undergird the things they’re trying to recreate is Elon Musks misbegotten [Wikipedia-powered Wikipedia competitor](https://bsky.app/profile/molly.wiki/post/3m4bee6xw522x) and right-wing propaganda machine, Grokipedia.

> There is a reason Wikipedia editors are called “editors” and it’s because writing a useful encyclopedia entry does not mean “putting down random facts in no discernible order.”
>
> On even the lowest of stakes Wikipedia pages, real humans with real taste and real thoughts and real perspectives discuss and debate the types of information that should be included in any given article, in what order it should be presented, and the specific language that should be used.
>
> – Jason Koebler, [Grokipedia Is the Antithesis of Everything That Makes Wikipedia Good, Useful, and Human](https://www.404media.co/grokipedia-is-the-antithesis-of-everything-that-makes-wikipedia-good-useful-and-human/)

The friction that Musk and his ilk are hellbent to eradicate is not an obstacle; it’s the engine that makes creation possible and worthwhile.

## Reclaiming FOMO for the post-bubble-era

> AI is the asbestos we are shoveling into the walls of our society and our descendants will be digging it out for generations.
>
> – Cory Doctorow, [The real (economic) AI apocalypse is nigh](https://doctorow.medium.com/https-pluralistic-net-2025-09-27-econopocalypse-subprime-intelligence-e9a06136d109)

One core tenet of being a tech oligarch is the inability to take no for an answer.

When a tech oligarch has an idea, but it turns out the idea would be bad for humanity, they’re still gonna do it, and then they will do five other things to try and “mitigate the risks” (or at least that’s what they’ll claim).

I think we could all save ourselves a lot of trouble by not allowing them to do the bad thing in the first place, but that’s more of a long-term project. In the meantime, what if we take everything that generative AI asks of us, and do the exact opposite?

Value deliberate process over automatic results, [shared reality over hyperpersonalization](https://bsky.app/profile/anthonymoser.com/post/3m6cefchy3k2z). Context over content. Sources over summaries. Constructive disagreement over saccharine [sycophancy](https://c3.unu.edu/blog/how-sycophancy-shapes-the-reliability-of-large-language-models).

Invest in relationships with humans, not machines. Ask questions without expecting an answer. Care for something. Care for someone. Love something. [Hate something](https://anthonymoser.github.io/writing/ai/haterdom/2025/08/26/i-am-an-ai-hater.html). Practice saying no. Practice accepting a no. Don’t settle for “good enough”. Move slow and mend things. [Embrace friction](https://phirephoenix.com/blog/2025-10-11/friction).

The post-bubble-era is coming; don’t miss out!
