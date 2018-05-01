---
layout: page
permalink: /projects/covfefe/
title: Project Covfefe
---

# tl;dr
We're running a community driven project to label Donal Trump's tweets for Named Entity Recognition. [Participation](https://lighttag.io) is open (and encouraged) to everyone and the data is publically availble [here](https://github.com/LightTag/NYTTrumpTweets).

## Background
Donald Trump has been a prolific tweeter, with 33,551 tweets in the [Trump Twitter Archive](http://www.trumptwitterarchive.com/archive). Obviously, this brings ample opportunities to apply natural languge processing. One of our favourites is the DeepDrumpf bot which uses neural networks to generate tweets in Trump style.

{% twitter https://twitter.com/DeepDrumpf/status/822546674275024896 %}

But, we want more. As James O’Malley told the New York Times, 
> “When the president speaks, that’s really important — that changes the world,” Mr. O’Malley said. “He can tank the stock market or start wars with his words. So having a greater understanding of what’s going on inside the West Wing is surely a really useful thing.”

With that in mind, we want to use NLP not just to immitate the president, but also to better understand him. But for understanding, the ability to tell things apart and say what they are, we need labeled data


## The New York Times Connection

For the last two years (we think), [Kevin Quealy](https://www.nytimes.com/by/kevin-quealy) and [Jasmine C. Lee](https://www.nytimes.com/by/jasmine-c-lee) have maintained and updated a list of the People, Places and Things Trump has [insulted](https://www.nytimes.com/interactive/2016/01/28/upshot/donald-trump-twitter-insults.html) or [praised](https://www.nytimes.com/interactive/2018/02/14/upshot/trump-compliments-list.html?action=click&contentCollection=The%20Upshot&region=Footer&module=WhatsNext&version=WhatsNext&contentID=WhatsNext&moduleDetail=undefined&pgtype=Multimedia).

Our team put a bit of work into taking those articles and turning them into a labeled data set of entities for trump tweets.

{% include image.html 
    url="/assets/img/trump/trump_data_screenshot.png" 
    caption="Trump tweets with entity annotations" 
%}

From the NYT data we managed to extract more than 7,000 annotations of insults, acusations, compilments and entities. But, to understand this President, we need more data! We also need finer tags. That's where you come in

## The Project

Starting today, we'll be hosting Donald Trump's tweets on our public annotation server. Anyone can signup, login and beging labelling Trump tweets. 

{% twitter https://twitter.com/LabeledData/status/989955358738276354 %}


Labelling is tricky. The tags we choose to offer imply a necassarily biased view of the world. And as the above tweet show's, things are often open to interpertation. That's where LightTag shines. We'll be showing every tweet to multiple people and collecting annotations from each of them. The data that will result from this will reflect the views of everyone who chose to participate and hopefully will show us where we all agree and where our opinions are contested. 

But hoepfully, through that process, all of us will learn more about the President and how we all understand him.
