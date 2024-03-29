---
title: "Protecting Trivia Apps from Cheaters"
summary: "How people cheat at trivia games, and how the companies running them could stop this from happening."
date: 2017-12-17T01:00:00.000Z
---

_This article has been mentioned in the media: [The Verge](https://www.theverge.com/2017/12/25/16817502/how-to-stop-hq-cheaters), [Washington Post](https://www.washingtonpost.com/graphics/2018/business/hq-trivia/), and [TechCrunch](https://techcrunch.com/2018/03/06/hq-trivia-questions/)_.

_Mobile trivia apps_, such as HQ Trivia and The Q, modernize game show-style entertainment, allowing anyone to try their hand at winning cash prizes from their smartphone from anywhere. However, these applications are susceptible to cheaters and bots. For example, [a developer by the name of Toby Mellor](https://medium.com/@tobymellor/hq-trivia-using-bots-to-win-money-from-online-game-shows-ce2a1b11828b) recently demonstrated how he created a near-realtime system to cheat on HQ Trivia. His post (linked above) details his use of Google cloud APIs to create this system.

While the demo was certainly impressive, I felt that I could improve on this system as a proof-of-concept. Armed with his post, I set out to make a better version of his system. However, I set some constraints on myself to make this more of a challenge:

- The system must run offline, with the exception of the QAS (question-and-answer system).
- The system allow a human enough time to tap in the answer.
- The system should require minimal human intervention, since a human will be using the system in real time.
- The system must be functional within one hour.

## Creating a Trivia-Cheating System

### Design

Instead of doing fancy (and slow) network-request hijacking using `mitmproxy`, I decided to run OCR at intervals on a portion of the image coming from the phone and pipe that to Google to provide a quick answer for the human operator to tap in. The system looks something like the following:

![trivia diagram](trivia-diagram-2.png)

TL;DR: a region of the iPhone's screen will get captured, put through OCR, and then searched up on Google to get an answer.

### Implementation

#### Capturing the Screen

First, I needed a way to capture only a region of the QuickTime window on my Mac into a temp file. That turned out to be trivial using the excellent CLI `screencapture` tool.

I initially used interactive selection, where the user manually makes a rectangular selection to capture:

```bash
screencapture -ci screens.png
```

However, I quickly realized that was extremely inefficient and that hardcoding in rect coordinates (a feature `screencapture` supports) was a much better option:

```bash
 screencapture -Rx,y,w,h screens.png
```

_Note:_ The rect coordinates are in the form `x,y,w,h`, with `(x, y)` being the coordinate of the top left corner.

#### Optical Character Recognition

It was time to find a passable OCR system that was fast and accurate. The only one I could think of was [`tesseract`](https://github.com/tesseract-ocr/tesseract), an OCR engine maintained by Google. While not the best system in the world, its functionality out of the box was pretty great in my testing.

In order to extract text from our image using Tesseract, I used the following,

```bash
tesseract screens.png ocr
```

which takes the image and puts the extracted text into a file, `ocr.txt`. Now, it's finally time to answer this question.

#### Constructing a Google Search URL and Launching Chrome

One little nasty step we have to do is to put our URL-encoded search query into a Google Search URL and then push that URL to a browser of choice (I used Google Chrome). I used Python for this step because of its familiarity.

#### URL Encoding the Search Query

A typical Google search URL looks something like this:

> _https://www.google.com/search?q=what+is+life%3F_

Notice how the search query is a query string, the spaces are replaced with `+` signs, and special characters are encoded. Python 3 can do this easily with `urllib.parse.quote_plus(str)`.

So our code might look something like this:

```python
query_encoded = urllib.parse.quote_plus(query)
```

#### Programmatically Launching Chrome

Now, we need to pass the URL to Chrome programmatically. With a little bit of trial and error, I found out that the Unix binary, located at `/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome`, can open URLs without launching a new browser instance. Using that to our advantage, we simply pass the URL as a shell argument, and _violà!_ It works.

#### Stitching These Components Together

Now, it's time to mesh these components together. I decided to keep it simple and created a shell script to run each component and pass around data. My shell script ended up looking like this:

```bash
#!/usr/local/bin/zsh
echo "Realtime Screen OCR"
while true
do
    echo "Waiting for trigger"
    read
    screencapture -Rx,y,w,h screens.png
    tesseract screens.png ocr
    OCR=`cat ocr.txt`
    python3 launch.py $OCR
    echo "Opened Chrome...waiting for next question"
done
```
The script waits for the enter key, grabs the predefined rect, runs OCR on it, and then launches Chrome. Then, it goes back to waiting for the enter key.

### Testing and Debrief

I ran tests on this system using video replays of previous HQ Trivia shows. It worked well but struggled on the more difficult questions. Here's a video of the system providing an instant answer to a question:

<center>
  <iframe
    width="560"
    height="315"
    src="https://www.youtube-nocookie.com/embed/F1m6ZyqIvhs?rel=0"
    frameborder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  ></iframe>
</center>

In my opinion, this checks all the boxes–it works offline, it's fast, and it's pretty much self-sufficient.

However, it's not always 100% accurate. This is because I didn't develop an _actual_ QAS system that breaks down sentence structure using NLP and then searches for detected entities within a corpus. But this shows that _it's possible to build something like this._ This system took me one hour to build from planning to completion; somebody with more time and dedication could build something even more accurate and scam the companies behind these apps for thousands of dollars.

## Defending Against Cheaters

Preventing people from cheating, especially on devices they own, is extremely difficult. [It's also quite difficult to do right.](https://en.wikipedia.org/wiki/Sony_BMG_copy_protection_rootkit_scandal) The dev mentioned in the Introduction, Toby Mellor, suggests a software check for screen capture devices. While a good first step, this doesn't really prevent alternative methods of screen capture (such as just straight-up filming the screen with another camera). I suggest _fooling the underlying algorithms underneath_.

"How do you do this", you may ask? The answer is _adversarial perturbations_, a term coined by Evtimov et al. in the paper _[Robust Physical-World Attacks on Deep Learning Models](https://arxiv.org/abs/1707.08945)_. By making the text harder to be read by a bot, you are esssentially rate-limiting cheating. So how would this look like in practice? Maybe something like this, which completely fooled Tesseract:


![Fooled Tesseract](hq-fooled.png)

(Well, not exactly that. That picture is quite horrible aesthetically)

HQ needs to take advantage of its animated aesthetic and add a pattern, different fonts, particle effects, or something similar to confuse OCR systems.

There's already been research into how to fool OCR systems, such as this [OCR-resistant font](https://walkerart.org/magazine/sang-mun-defiant-typeface-nsa-privacy), but I think that with the advent of deep learning, nothing short of overlaying/blending unpredictable patterns will prevent determined attackers from developing systems to cheat.

[Discuss on Hacker News](https://news.ycombinator.com/item?id=15944171)
