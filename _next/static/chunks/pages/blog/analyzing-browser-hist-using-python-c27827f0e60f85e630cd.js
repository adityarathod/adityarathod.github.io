(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[421],{7375:function(e,a,t){"use strict";function n(e,a){if(null==e)return{};var t,n,o=function(e,a){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||(o[t]=e[t]);return o}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}t.d(a,{Z:function(){return n}})},6213:function(e,a,t){"use strict";t.r(a),t.d(a,{frontMatter:function(){return r},default:function(){return l}});var n=t(6156),o=t(7375),s=(t(7294),t(3905));function p(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?p(Object(t),!0).forEach((function(a){(0,n.Z)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var r={title:"Analyzing Browser History Using Python and Pandas",description:"Explore the depths of your browser history with this introductory data science tutorial.",date:"November 12, 2017",draft:!1,hasMath:!1,pubTime:"2017-11-12T20:00:00Z"},m={frontMatter:r};function l(e){var a=e.components,t=(0,o.Z)(e,["components"]);return(0,s.kt)("wrapper",c(c(c({},m),t),{},{components:a,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Today, we're going to do some splunking within the deep, dark place which is your browser history.\nIn order to obtain the data for this tutorial from Google Chrome, go to\n",(0,s.kt)("inlineCode",{parentName:"p"},"~/Library/Application Support/Google/Chrome/Default"),"\non a Mac/Linux computer or ",(0,s.kt)("inlineCode",{parentName:"p"},"%LocalAppData%\\Google\\Chrome\\User Data\\Default")," on a Windows PC.\nRun the following SQLite command to obtain a text file in reverse chronological order:\n(Mac/Linux)"),(0,s.kt)("pre",c({},{className:"language-bash"}),(0,s.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"sqlite3 History ",(0,s.kt)("span",c({parentName:"code"},{className:"token string"}),"\"select datetime(last_visit_time/1000000-11644473600,'unixepoch'), url \\\nfrom urls order by last_visit_time desc\"")," ",(0,s.kt)("span",c({parentName:"code"},{className:"token operator"}),">")," ~/hist.txt\n")),(0,s.kt)("p",null,"(Windows)"),(0,s.kt)("pre",c({},{className:"language-bash"}),(0,s.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"sqlite3 History ",(0,s.kt)("span",c({parentName:"code"},{className:"token string"}),"\"select datetime(last_visit_time/1000000-11644473600,'unixepoch'), url \\\nfrom urls order by last_visit_time desc\"")," ",(0,s.kt)("span",c({parentName:"code"},{className:"token operator"}),">")," %userprofile%",(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),"\\"),"hist.txt\n")),(0,s.kt)("p",null,"Check your user folder. A file called ",(0,s.kt)("inlineCode",{parentName:"p"},"hist.txt")," should be there. Move the file to a suitable place for this exercise."),(0,s.kt)("p",null,"(This process brought to you by the brilliant people at ",(0,s.kt)("a",c({parentName:"p"},{href:"https://superuser.com/questions/602252/can-chrome-browser-history-be-exported-to-an-html-file"}),"https://superuser.com/questions/602252/can-chrome-browser-history-be-exported-to-an-html-file"),")"),(0,s.kt)("p",null,"Import the needed libraries, ",(0,s.kt)("inlineCode",{parentName:"p"},"numpy")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"pandas"),":"),(0,s.kt)("pre",c({},{className:"language-python"}),(0,s.kt)("code",c({parentName:"pre"},{className:"language-python"}),(0,s.kt)("span",c({parentName:"code"},{className:"token keyword"}),"import")," pandas ",(0,s.kt)("span",c({parentName:"code"},{className:"token keyword"}),"as")," pd\n",(0,s.kt)("span",c({parentName:"code"},{className:"token keyword"}),"import")," numpy ",(0,s.kt)("span",c({parentName:"code"},{className:"token keyword"}),"as")," np\n")),(0,s.kt)("h2",null,"Clean Up Data"),(0,s.kt)("p",null,"That data that we pulled is extremely messy. Here's an example row:"),(0,s.kt)("pre",c({},{className:"language-wiki"}),(0,s.kt)("code",c({parentName:"pre"},{className:"language-wiki"}),"2017-11-12 21:10:11|https://news.ycombinator.com/item?id=15678587\n")),(0,s.kt)("p",null,"We need to split on that vertical bar while making sure not to split on a bar in the URL itself.\nSince Pandas probably doesn't do this out of the box, let's write a custom import function:"),(0,s.kt)("pre",c({},{className:"language-python"}),(0,s.kt)("code",c({parentName:"pre"},{className:"language-python"}),(0,s.kt)("span",c({parentName:"code"},{className:"token comment"}),"# Open our file"),"\n",(0,s.kt)("span",c({parentName:"code"},{className:"token keyword"}),"with")," ",(0,s.kt)("span",c({parentName:"code"},{className:"token builtin"}),"open"),(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),"("),(0,s.kt)("span",c({parentName:"code"},{className:"token string"}),"'hist.txt'"),(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),")")," ",(0,s.kt)("span",c({parentName:"code"},{className:"token keyword"}),"as")," f",(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),":"),"\n    content ",(0,s.kt)("span",c({parentName:"code"},{className:"token operator"}),"=")," f",(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),"."),"readlines",(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),"("),(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),")"),"\n",(0,s.kt)("span",c({parentName:"code"},{className:"token comment"}),"# Strip whitespace then split on first occurrence of pipe character"),"\nraw_data ",(0,s.kt)("span",c({parentName:"code"},{className:"token operator"}),"=")," ",(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),"["),"line",(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),"."),"split",(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),"("),(0,s.kt)("span",c({parentName:"code"},{className:"token string"}),"'|'"),(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),",")," ",(0,s.kt)("span",c({parentName:"code"},{className:"token number"}),"1"),(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),")")," ",(0,s.kt)("span",c({parentName:"code"},{className:"token keyword"}),"for")," line ",(0,s.kt)("span",c({parentName:"code"},{className:"token keyword"}),"in")," ",(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),"["),"x",(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),"."),"strip",(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),"("),(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),")")," ",(0,s.kt)("span",c({parentName:"code"},{className:"token keyword"}),"for")," x ",(0,s.kt)("span",c({parentName:"code"},{className:"token keyword"}),"in")," content",(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),"]"),(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),"]"),"\n",(0,s.kt)("span",c({parentName:"code"},{className:"token comment"}),"# We now have a 2D list."),"\n",(0,s.kt)("span",c({parentName:"code"},{className:"token keyword"}),"print"),(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),"("),"raw_data",(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),"["),(0,s.kt)("span",c({parentName:"code"},{className:"token number"}),"1"),(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),"]"),(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),")"),"\n")),(0,s.kt)("pre",c({},{className:"language-wiki"}),(0,s.kt)("code",c({parentName:"pre"},{className:"language-wiki"}),(0,s.kt)("span",c({parentName:"code"},{className:"token url"}),"['2017-11-12 21:09:21', 'https://news.ycombinator.com/']"),"\n")),(0,s.kt)("p",null,"Using our 2D list, let's make a Pandas DataFrame with custom column headers."),(0,s.kt)("pre",c({},{className:"language-python"}),(0,s.kt)("code",c({parentName:"pre"},{className:"language-python"}),"data ",(0,s.kt)("span",c({parentName:"code"},{className:"token operator"}),"=")," pd",(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),"."),"DataFrame",(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),"("),"raw_data",(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),",")," columns",(0,s.kt)("span",c({parentName:"code"},{className:"token operator"}),"="),(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),"["),(0,s.kt)("span",c({parentName:"code"},{className:"token string"}),"'datetime'"),(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),",")," ",(0,s.kt)("span",c({parentName:"code"},{className:"token string"}),"'url'"),(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),"]"),(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),")"),"\n")),(0,s.kt)("p",null,"Make sure it is working:"),(0,s.kt)("pre",c({},{className:"language-python"}),(0,s.kt)("code",c({parentName:"pre"},{className:"language-python"}),"data",(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),"."),"head",(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),"("),(0,s.kt)("span",c({parentName:"code"},{className:"token number"}),"1"),(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),")"),"\n")),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",c({parentName:"tr"},{align:null}),"\u2003"),(0,s.kt)("th",c({parentName:"tr"},{align:null}),"datetime"),(0,s.kt)("th",c({parentName:"tr"},{align:null}),"url"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",c({parentName:"tr"},{align:null}),"0"),(0,s.kt)("td",c({parentName:"tr"},{align:null}),"2017-11-12 21:10:11"),(0,s.kt)("td",c({parentName:"tr"},{align:null}),(0,s.kt)("a",c({parentName:"td"},{href:"https://news.ycombinator.com/item?id=15678587"}),"https://news.ycombinator.com/item?id=15678587"))))),(0,s.kt)("p",null,"Now, we're almost done with ingesting the data. Let's convert the\ndatetime string column into a column of Pandas ",(0,s.kt)("inlineCode",{parentName:"p"},"datetime")," elements."),(0,s.kt)("pre",c({},{className:"language-python"}),(0,s.kt)("code",c({parentName:"pre"},{className:"language-python"}),"data",(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),"."),"datetime ",(0,s.kt)("span",c({parentName:"code"},{className:"token operator"}),"=")," pd",(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),"."),"to_datetime",(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),"("),"data",(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),"."),"datetime",(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),")"),"\n")),(0,s.kt)("p",null,"Double-check that it is indeed a Pandas timestamp:"),(0,s.kt)("pre",c({},{className:"language-python"}),(0,s.kt)("code",c({parentName:"pre"},{className:"language-python"}),"data",(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),"."),"datetime",(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),"["),(0,s.kt)("span",c({parentName:"code"},{className:"token number"}),"0"),(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),"]"),"\n")),(0,s.kt)("p",null,"Finally, let's remove all information from the URL, leaving only the domain/subdomain:"),(0,s.kt)("pre",c({},{className:"language-python"}),(0,s.kt)("code",c({parentName:"pre"},{className:"language-python"}),(0,s.kt)("span",c({parentName:"code"},{className:"token keyword"}),"from")," urllib",(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),"."),"parse ",(0,s.kt)("span",c({parentName:"code"},{className:"token keyword"}),"import")," urlparse\nparser ",(0,s.kt)("span",c({parentName:"code"},{className:"token operator"}),"=")," ",(0,s.kt)("span",c({parentName:"code"},{className:"token keyword"}),"lambda")," u",(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),":")," urlparse",(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),"("),"u",(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),")"),(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),"."),"netloc\ndata",(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),"."),"url ",(0,s.kt)("span",c({parentName:"code"},{className:"token operator"}),"=")," data",(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),"."),"url",(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),"."),(0,s.kt)("span",c({parentName:"code"},{className:"token builtin"}),"apply"),(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),"("),"parser",(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),")"),"\n")),(0,s.kt)("p",null,"Let's check our work again:"),(0,s.kt)("pre",c({},{className:"language-python"}),(0,s.kt)("code",c({parentName:"pre"},{className:"language-python"}),"data",(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),"."),"head",(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),"("),(0,s.kt)("span",c({parentName:"code"},{className:"token number"}),"1"),(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),")"),"\n")),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",c({parentName:"tr"},{align:null}),"\u2003"),(0,s.kt)("th",c({parentName:"tr"},{align:null}),"datetime"),(0,s.kt)("th",c({parentName:"tr"},{align:null}),"url"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",c({parentName:"tr"},{align:null}),"0"),(0,s.kt)("td",c({parentName:"tr"},{align:null}),"2017-11-12 21:10:11"),(0,s.kt)("td",c({parentName:"tr"},{align:null}),"news.ycombinator.com")))),(0,s.kt)("p",null,"Finally, our data is clean."),(0,s.kt)("h2",null,"Analyzing the Data"),(0,s.kt)("p",null,"Now that the boring part is done, let's analyze our browsing data."),(0,s.kt)("h3",null,"Most Visited Sites"),(0,s.kt)("p",null,"Let's generate a list of our top sites sorted by frequency, then print out the first two to get our most visited sites:"),(0,s.kt)("pre",c({},{className:"language-python"}),(0,s.kt)("code",c({parentName:"pre"},{className:"language-python"}),(0,s.kt)("span",c({parentName:"code"},{className:"token comment"}),"# Aggregate domain entries"),"\nsite_frequencies ",(0,s.kt)("span",c({parentName:"code"},{className:"token operator"}),"=")," data",(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),"."),"url",(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),"."),"value_counts",(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),"("),(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),")"),(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),"."),"to_frame",(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),"("),(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),")"),"\n",(0,s.kt)("span",c({parentName:"code"},{className:"token comment"}),"# Make the domain a column"),"\nsite_frequencies",(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),"."),"reset_index",(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),"("),"level",(0,s.kt)("span",c({parentName:"code"},{className:"token operator"}),"="),(0,s.kt)("span",c({parentName:"code"},{className:"token number"}),"0"),(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),",")," inplace",(0,s.kt)("span",c({parentName:"code"},{className:"token operator"}),"="),(0,s.kt)("span",c({parentName:"code"},{className:"token boolean"}),"True"),(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),")"),"\n",(0,s.kt)("span",c({parentName:"code"},{className:"token comment"}),"# Rename columns to appropriate names"),"\nsite_frequencies",(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),"."),"columns ",(0,s.kt)("span",c({parentName:"code"},{className:"token operator"}),"=")," ",(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),"["),(0,s.kt)("span",c({parentName:"code"},{className:"token string"}),"'domain'"),(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),",")," ",(0,s.kt)("span",c({parentName:"code"},{className:"token string"}),"'count'"),(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),"]"),"\n",(0,s.kt)("span",c({parentName:"code"},{className:"token comment"}),"# Display top 2"),"\nsite_frequencies",(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),"."),"head",(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),"("),(0,s.kt)("span",c({parentName:"code"},{className:"token number"}),"2"),(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),")"),"\n")),(0,s.kt)("table",null,(0,s.kt)("thead",{parentName:"table"},(0,s.kt)("tr",{parentName:"thead"},(0,s.kt)("th",c({parentName:"tr"},{align:null}),"\u2003"),(0,s.kt)("th",c({parentName:"tr"},{align:null}),"domain"),(0,s.kt)("th",c({parentName:"tr"},{align:null}),"count"))),(0,s.kt)("tbody",{parentName:"table"},(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",c({parentName:"tr"},{align:null}),"0"),(0,s.kt)("td",c({parentName:"tr"},{align:null}),(0,s.kt)("a",c({parentName:"td"},{href:"http://www.google.com"}),"www.google.com")),(0,s.kt)("td",c({parentName:"tr"},{align:null}),"3904")),(0,s.kt)("tr",{parentName:"tbody"},(0,s.kt)("td",c({parentName:"tr"},{align:null}),"1"),(0,s.kt)("td",c({parentName:"tr"},{align:null}),"github.com"),(0,s.kt)("td",c({parentName:"tr"},{align:null}),"1571")))),(0,s.kt)("p",null,"It should come as no shock that my top sites, just like any other dev, were Google and Github."),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"(Is secretly surprised that Stack Overflow was not one of the top ten)")),(0,s.kt)("p",null,"Now, let's see our top sites in a beautiful chart:"),(0,s.kt)("pre",c({},{className:"language-python"}),(0,s.kt)("code",c({parentName:"pre"},{className:"language-python"}),(0,s.kt)("span",c({parentName:"code"},{className:"token keyword"}),"import")," matplotlib",(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),"."),"pyplot ",(0,s.kt)("span",c({parentName:"code"},{className:"token keyword"}),"as")," plt\ntopN ",(0,s.kt)("span",c({parentName:"code"},{className:"token operator"}),"=")," ",(0,s.kt)("span",c({parentName:"code"},{className:"token number"}),"20"),"\nplt",(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),"."),"figure",(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),"("),(0,s.kt)("span",c({parentName:"code"},{className:"token number"}),"1"),(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),",")," figsize",(0,s.kt)("span",c({parentName:"code"},{className:"token operator"}),"="),(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),"("),(0,s.kt)("span",c({parentName:"code"},{className:"token number"}),"10"),(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),","),(0,s.kt)("span",c({parentName:"code"},{className:"token number"}),"10"),(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),")"),(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),")"),"\nplt",(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),"."),"title",(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),"("),(0,s.kt)("span",c({parentName:"code"},{className:"token string"}),"'Top $n Sites Visited'"),(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),"."),"replace",(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),"("),(0,s.kt)("span",c({parentName:"code"},{className:"token string"}),"'$n'"),(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),",")," ",(0,s.kt)("span",c({parentName:"code"},{className:"token builtin"}),"str"),(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),"("),"topN",(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),")"),(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),")"),(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),")"),"\npie_data ",(0,s.kt)("span",c({parentName:"code"},{className:"token operator"}),"=")," site_frequencies",(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),"["),(0,s.kt)("span",c({parentName:"code"},{className:"token string"}),"'count'"),(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),"]"),(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),"."),"head",(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),"("),"topN",(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),")"),(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),"."),"tolist",(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),"("),(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),")"),"\npie_labels ",(0,s.kt)("span",c({parentName:"code"},{className:"token operator"}),"=")," ",(0,s.kt)("span",c({parentName:"code"},{className:"token boolean"}),"None"),"\n",(0,s.kt)("span",c({parentName:"code"},{className:"token comment"}),"# Uncomment to get specific domain names"),"\n",(0,s.kt)("span",c({parentName:"code"},{className:"token comment"}),"# pie_labels = site_frequencies['domain'].head(topN).tolist()"),"\nplt",(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),"."),"pie",(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),"("),"pie_data",(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),",")," autopct",(0,s.kt)("span",c({parentName:"code"},{className:"token operator"}),"="),(0,s.kt)("span",c({parentName:"code"},{className:"token string"}),"'%1.1f%%'"),(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),",")," labels",(0,s.kt)("span",c({parentName:"code"},{className:"token operator"}),"="),"pie_labels",(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),")"),"\nplt",(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),"."),"show",(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),"("),(0,s.kt)("span",c({parentName:"code"},{className:"token punctuation"}),")"),"\n")),(0,s.kt)("p",null,(0,s.kt)("img",c({parentName:"p"},{src:"/static/img/browser-hist-graph.jpg",alt:"Pie Chart"}))),(0,s.kt)("p",null,"What else can we do with the data? A lot, I'm sure, since this is the Holy Grail for ad tracking companies."))}l.isMDXComponent=!0},2095:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/analyzing-browser-hist-using-python",function(){return t(6213)}])}},function(e){e.O(0,[774,888,179],(function(){return a=2095,e(e.s=a);var a}));var a=e.O();_N_E=a}]);