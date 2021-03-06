---
layout: page
permalink: /projects/covfefe/
title: Project Covfefe
---
{% include image.html 
    url="https://cdn.cnn.com/cnnnext/dam/assets/170106113815-trump-tweeting-illustration.jpg" 
    caption="What can we learn about the presidents tweets together?" 
%}
<h1>tl;dr <a 
    href="https://twitter.com/intent/tweet?text={{ "Help us label @realDonaldTrump tweets" | url_encode }}%20{{ page.url | absolute_url | url_encode }}&via=LabeledData" 
    onclick="window.open(this.href, 'window', 'left=20,top=20,width=500,height=500,toolbar=1,resizable=0'); return false;" 
    class="btn btn--twitter btn--small">
        <i class="fab fa-fw fa-twitter" aria-hidden="true"></i> 
        <span>
            {{ site.data.text[site.locale].tweet | default: 'Tell your Friends' }}
        </span>
</a>
</h1>
We're running a community driven project to label Donald Trump's tweets. Labeling these tweets will give the world more insight into what Trump is saying, how different people interpert what he says and make a new dataset for machine learning. 

 <button class="btn btn-success btn-lg offset-md-4"> [Participation](https://demo.lighttag.io) </button> 
 
 is open (and encouraged) to everyone and the **data is publically availble [here](https://github.com/LightTag/NYTTrumpTweets)**. 

<div class="offset-md-2 col-md-6 embed-responsive embed-responsive-16by9">
        <iframe  src="https://www.youtube.com/embed/K8OgSg7ffV0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
</div>

## The Project

Starting today, we'll be hosting President Trump's tweets on our public annotation server. Anyone can signup, login and contribute labels for President Trump's tweets. 
{% include image.html 

    url="/assets/img/labeling_trump.gif" 
    caption="Labeling Trump Tweets" 
%}

<button class="offset-md-4 btn btn-success btn-lg"> [I want to Help!](https://demo.lighttag.io) </button>


Each time a member of the community logs in they'll be shown a tweet to be labeled and the different possible labels for each word (such as Person, Country or Insult). The same tweet will be shown to multiple members of the community. The resulting dataset will tell us a lot about what the President is saying as well as how we perceive it.

{% include image.html 
    url="/assets/img/trump/trump_data_screenshot.png" 
    caption="Trump tweets with entity annotations" 
%}


Through that process, all of us will learn more about the President as well as how we understand him. The resulting dataset will be avaible as it evolves to all participants and a weekly snapshot will be [put online](https://github.com/LightTag/NYTTrumpTweets) for anyone to use.

## Background
President Donald Trump has been a prolific tweeter, with 33,551 tweets in the [Trump Twitter Archive](http://www.trumptwitterarchive.com/archive). Obviously, this brings ample opportunities to apply natural languge processing. One of our favourites is the DeepDrumpf bot which uses neural networks to generate tweets in President Trump's style.

{% twitter https://twitter.com/DeepDrumpf/status/822546674275024896 %}
### Why do this?
But, we want more. As James O’Malley told the New York Times, 
> “**When the president speaks**, that’s really important — **that changes the world**. He can tank the stock market or start wars with his words. So **having a greater understanding of what’s going on inside the West Wing is surely a really useful thing**.”

When the president speaks, he speaks to us. Each of us understands him in our own way. By labeling this data together, as a diverse community, we'll be able to see where we interpert his statements in the same way and where we disagree. 


### Inspiration & Machine Learning

For the last two years (we think), [Kevin Quealy](https://www.nytimes.com/by/kevin-quealy) and [Jasmine C. Lee](https://www.nytimes.com/by/jasmine-c-lee) have maintained and updated a list of the People, Places and Things President Trump has [insulted](https://www.nytimes.com/interactive/2016/01/28/upshot/donald-trump-twitter-insults.html) or [praised](https://www.nytimes.com/interactive/2018/02/14/upshot/trump-compliments-list.html?action=click&contentCollection=The%20Upshot&region=Footer&module=WhatsNext&version=WhatsNext&contentID=WhatsNext&moduleDetail=undefined&pgtype=Multimedia). Their project has been an inspiration for this one. 

Our team put some work into parsing out the data from the New York Times and we are happy to [share that data](https://github.com/LightTag/NYTTrumpTweets) with the community as well. 

LightTag's annotation platform has a machine learning model inside, that learns from your labels. We'll be using the New York Times dataset to bootstrap that model for this project. 


{% include image.html 
    url="/assets/img/trump/trump_suggestions.gif" 
    caption="Using LightTag's suggestions to label faster" 
%}

<button class="btn btn-success offset-md-4 btn-lg"> [Label The President's Tweets now](https://demo.lighttag.io) </button>