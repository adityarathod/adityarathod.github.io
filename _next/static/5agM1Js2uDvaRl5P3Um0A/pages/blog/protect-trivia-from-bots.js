(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"7ljp":function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a("q1tI"),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=o.a.createContext({}),b=function(e){var t=o.a.useContext(l),a=t;return e&&(a="function"===typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=b(e.components);return(o.a.createElement(l.Provider,{value:t},e.children))},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return(o.a.createElement(o.a.Fragment,{},t))}},u=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=b(a),h=n,u=p["".concat(s,".").concat(h)]||p[h]||m[h]||r;return a?o.a.createElement(u,c(c({ref:t},l),{},{components:a})):o.a.createElement(u,c({ref:t},l))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"===typeof e||n){var r=a.length,s=new Array(r);s[0]=u;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[h]="string"===typeof e?e:n,s[1]=c;for(var l=2;l<r;l++)s[l]=a[l];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},Ff2n:function(e,t,a){"use strict";function n(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}a.d(t,"a",(function(){return n}))},GUIJ:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/protect-trivia-from-bots",function(){return a("Y9OF")}])},Qetd:function(e,t,a){"use strict";var n=Object.assign.bind(Object);e.exports=n,e.exports.default=e.exports},Y9OF:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"default",(function(){return p}));var n=a("wx14"),o=a("Ff2n"),r=a("q1tI"),s=a.n(r),c=a("7ljp"),i=(s.a.createElement,{title:"Protecting Trivia Apps from Cheaters",description:"How people cheat at trivia games, and how the companies running them could stop this from happening.",date:"December 16, 2017",draft:!1,hasMath:!1}),l={frontMatter:i},b="wrapper";function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(c.b)(b,Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"This article has been mentioned in the media: ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://www.theverge.com/2017/12/25/16817502/how-to-stop-hq-cheaters"}),"The Verge"),", ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://www.washingtonpost.com/graphics/2018/business/hq-trivia/"}),"Washington Post"),", and ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://techcrunch.com/2018/03/06/hq-trivia-questions/"}),"TechCrunch")),"."),Object(c.b)("h1",null,"Introduction"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Mobile trivia apps"),", such as HQ Trivia and The Q, modernize game show-style entertainment, allowing anyone to try their hand at winning cash prizes from their smartphone from anywhere. However, these applications are susceptible to cheaters and bots. For example, ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://medium.com/@tobymellor/hq-trivia-using-bots-to-win-money-from-online-game-shows-ce2a1b11828b"}),"a developer by the name of Toby Mellor")," recently demonstrated how he created a near-realtime system to cheat on HQ Trivia. His post (linked above) details his use of Google cloud APIs to create this system."),Object(c.b)("p",null,"While the demo was certainly impressive, I felt that I could improve on this system as a proof-of-concept. Armed with his post, I set out to make a better version of his system. However, I set some constraints on myself to make this more of a challenge:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"The system must run offline, with the exception of the QAS (question-and-answer system)."),Object(c.b)("li",{parentName:"ul"},"The system allow a human enough time to tap in the answer."),Object(c.b)("li",{parentName:"ul"},"The system should require minimal human intervention, since a human will be using the system in real time."),Object(c.b)("li",{parentName:"ul"},"The system must be functional within one hour.")),Object(c.b)("p",null,"I was now ready to get started."),Object(c.b)("h1",null,"Creating a Trivia-Cheating System"),Object(c.b)("h2",null,"Design"),Object(c.b)("p",null,"Instead of doing fancy (and slow) network-request hijacking using ",Object(c.b)("inlineCode",{parentName:"p"},"mitmproxy"),", I decided to run OCR at intervals on a portion of the image coming from the phone and pipe that to Google to provide a quick answer for the human operator to tap in. The system looks something like the following:"),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/static/img/trivia-diagram.svg",alt:"System diagram"}))),Object(c.b)("p",null,"TL;DR: a region of the iPhone's screen will get captured, put through OCR, and then searched up on Google to get an answer."),Object(c.b)("h2",null,"Implementation"),Object(c.b)("h3",null,"Capturing the Screen"),Object(c.b)("p",null,"First, I needed a way to capture only a region of the QuickTime window on my Mac into a temp file. That turned out to be trivial using the excellent CLI ",Object(c.b)("inlineCode",{parentName:"p"},"screencapture")," tool."),Object(c.b)("p",null,"I initially used interactive selection, where the user manually makes a rectangular selection to capture:"),Object(c.b)("pre",{className:"language-bash"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"screencapture -ci screens.png\n")),Object(c.b)("p",null,"However, I quickly realized that was extremely inefficient and that hardcoding in rect coordinates (a feature ",Object(c.b)("inlineCode",{parentName:"p"},"screencapture")," supports) was a much better option:"),Object(c.b)("pre",{className:"language-bash"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"})," screencapture -Rx,y,w,h screens.png\n")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Note:")," The rect coordinates are in the form ",Object(c.b)("inlineCode",{parentName:"p"},"x,y,w,h"),", with ",Object(c.b)("inlineCode",{parentName:"p"},"(x, y)")," being the coordinate of the top left corner."),Object(c.b)("h3",null,"Optical Character Recognition"),Object(c.b)("p",null,"It was time to find a passable OCR system that was fast and accurate. The only one I could think of was ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/tesseract-ocr/tesseract"}),Object(c.b)("inlineCode",{parentName:"a"},"tesseract")),", an OCR engine maintained by Google. While not the best system in the world, its functionality out of the box was pretty great in my testing."),Object(c.b)("p",null,"In order to extract text from our image using Tesseract, I used the following,"),Object(c.b)("pre",{className:"language-bash"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"tesseract screens.png ocr\n")),Object(c.b)("p",null,"which takes the image and puts the extracted text into a file, ",Object(c.b)("inlineCode",{parentName:"p"},"ocr.txt"),". Now, it's finally time to answer this question."),Object(c.b)("h3",null,"Constructing a Google Search URL and Launching Chrome"),Object(c.b)("p",null,"One little nasty step we have to do is to put our URL-encoded search query into a Google Search URL and then push that URL to a browser of choice (I used Google Chrome). I used Python for this step because of its familiarity."),Object(c.b)("h3",null,"URL Encoding the Search Query"),Object(c.b)("p",null,"A typical Google search URL looks something like this:"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("em",{parentName:"p"},Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://www.google.com/search&q=what+is+life%3F"}),"https://www.google.com/search&q=what+is+life%3F")))),Object(c.b)("p",null,"Notice how the search query is a query string, the spaces are replaced with ",Object(c.b)("inlineCode",{parentName:"p"},"+")," signs, and special characters are encoded. Python 3 can do this easily with ",Object(c.b)("inlineCode",{parentName:"p"},"urllib.parse.quote_plus(str)"),"."),Object(c.b)("p",null,"So our code might look something like this:"),Object(c.b)("pre",{className:"language-python"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-python"}),"query_encoded ",Object(c.b)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),"=")," urllib",Object(c.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),"parse",Object(c.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),"quote_plus",Object(c.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"("),"query",Object(c.b)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),")"),"\n")),Object(c.b)("h3",null,"Programmatically Launching Chrome"),Object(c.b)("p",null,"Now, we need to pass the URL to Chrome programmatically. With a little bit of trial and error, I found out that the Unix binary, located at ",Object(c.b)("inlineCode",{parentName:"p"},"/Applications/Google\\ Chrome.app/Contents/MacOS/Google\\ Chrome"),", can open URLs without launching a new browser instance. Using that to our advantage, we simply pass the URL as a shell argument, and ",Object(c.b)("em",{parentName:"p"},"viol\xe0!")," It works."),Object(c.b)("h3",null,"Stitching These Components Together"),Object(c.b)("p",null,"Now, it's time to mesh these components together. I decided to keep it simple and created a shell script to run each component and pass around data. My shell script ended up looking like this:"),Object(c.b)("pre",{className:"language-bash"},Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),Object(c.b)("span",Object(n.a)({parentName:"code"},{className:"token shebang important"}),"#!/usr/local/bin/zsh"),"\n",Object(c.b)("span",Object(n.a)({parentName:"code"},{className:"token builtin class-name"}),"echo")," ",Object(c.b)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"Realtime Screen OCR"'),"\n",Object(c.b)("span",Object(n.a)({parentName:"code"},{className:"token keyword"}),"while")," ",Object(c.b)("span",Object(n.a)({parentName:"code"},{className:"token boolean"}),"true"),"\n",Object(c.b)("span",Object(n.a)({parentName:"code"},{className:"token keyword"}),"do"),"\n    ",Object(c.b)("span",Object(n.a)({parentName:"code"},{className:"token builtin class-name"}),"echo")," ",Object(c.b)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"Waiting for trigger"'),"\n    ",Object(c.b)("span",Object(n.a)({parentName:"code"},{className:"token builtin class-name"}),"read"),"\n    screencapture -Rx,y,w,h screens.png\n    tesseract screens.png ocr\n    ",Object(c.b)("span",Object(n.a)({parentName:"code"},{className:"token assign-left variable"}),"OCR"),Object(c.b)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),"="),Object(c.b)("span",Object(n.a)({parentName:"code"},{className:"token variable"}),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"token variable"}),"`"),Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"token function"}),"cat")," ocr.txt",Object(c.b)("span",Object(n.a)({parentName:"span"},{className:"token variable"}),"`")),"\n    python3 launch.py ",Object(c.b)("span",Object(n.a)({parentName:"code"},{className:"token variable"}),"$OCR"),"\n    ",Object(c.b)("span",Object(n.a)({parentName:"code"},{className:"token builtin class-name"}),"echo")," ",Object(c.b)("span",Object(n.a)({parentName:"code"},{className:"token string"}),'"Opened Chrome...waiting for next question"'),"\n",Object(c.b)("span",Object(n.a)({parentName:"code"},{className:"token keyword"}),"done"),"\n")),Object(c.b)("p",null,"The script waits for the enter key, grabs the predefined rect, runs OCR on it, and then launches Chrome. Then, it goes back to waiting for the enter key."),Object(c.b)("h2",null,"Testing and Debrief"),Object(c.b)("p",null,"I ran tests on this system using video replays of previous HQ Trivia shows. It worked well but struggled on the more difficult questions. Here's a video of the system providing an instant answer to a question:"),Object(c.b)("center",null,Object(c.b)("iframe",{width:"560",height:"315",src:"https://www.youtube-nocookie.com/embed/F1m6ZyqIvhs?rel=0",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),Object(c.b)("p",null,"In my opinion, this checks all the boxes\u2013it works offline, it's fast, and it's pretty much self-sufficient."),Object(c.b)("p",null,"However, it's not always 100% accurate. This is because I didn't develop an ",Object(c.b)("em",{parentName:"p"},"actual")," QAS system that breaks down sentence structure using NLP and then searches for detected entities within a corpus. But this shows that ",Object(c.b)("em",{parentName:"p"},"it's possible to build something like this.")," This system took me one hour to build from planning to completion; somebody with more time and dedication could build something even more accurate and scam the companies behind these apps for thousands of dollars."),Object(c.b)("h1",null,"Defending Against Cheaters"),Object(c.b)("p",null,"Preventing people from cheating, especially on devices they own, is extremely difficult. ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Sony_BMG_copy_protection_rootkit_scandal"}),"It's also quite difficult to do right.")," The dev mentioned in the Introduction, Toby Mellor, suggests a software check for screen capture devices. While a good first step, this doesn't really prevent alternative methods of screen capture (such as just straight-up filming the screen with another camera). I suggest ",Object(c.b)("em",{parentName:"p"},"fooling the underlying algorithms underneath"),"."),Object(c.b)("p",null,'"How do you do this", you may ask? The answer is ',Object(c.b)("em",{parentName:"p"},"adversarial perturbations"),", a term coined by Evtimov et al. in the paper ",Object(c.b)("em",{parentName:"p"},Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://arxiv.org/abs/1707.08945"}),"Robust Physical-World Attacks on Deep Learning Models")),". By making the text harder to be read by a bot, you are esssentially rate-limiting cheating. So how would this look like in practice? Maybe something like this, which completely fooled Tesseract:"),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/static/img/hq-fooled.png",alt:"A more confusing picture"}))),Object(c.b)("p",null,"(Well, not exactly that. That picture is quite horrible aesthetically)"),Object(c.b)("p",null,"HQ needs to take advantage of its animated aesthetic and add a pattern, different fonts, particle effects, or something similar to confuse OCR systems."),Object(c.b)("p",null,"There's already been research into how to fool OCR systems, such as this ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://walkerart.org/magazine/sang-mun-defiant-typeface-nsa-privacy"}),"OCR-resistant font"),", but I think that with the advent of deep learning, nothing short of overlaying/blending unpredictable patterns will prevent determined attackers from developing systems to cheat."),Object(c.b)("center",null,"\ufe61 \ufe61 \ufe61"),Object(c.b)("p",null,Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"https://news.ycombinator.com/item?id=15944171"}),"Discuss on Hacker News")))}p.isMDXComponent=!0},wx14:function(e,t,a){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}a.d(t,"a",(function(){return n}))}},[["GUIJ",0,1]]]);