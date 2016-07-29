<h1> Loqal </h1>

<a href="http://imgur.com/bwFbzLW"><img src="http://i.imgur.com/bwFbzLW.png" title="source: imgur.com" /></a>

<h3>Problem to solve:</h3> 

Users should be able to search a city and not have to flip page after page to see cool landmarks that are around them and get information about the landmarks. We wanted to give them the ability to search any city in the world and get 10 landmarks around that location.

<h3>How we solved it:</h3>

We built an app that will take in a city search, find that location via Google Maps API, and gets 10 landmarks from that location and information about each from the Wikipedia API.


<a href="http://loqal.herokuapp.com/">Loqal app</a>

<h3>Technologies we used:</h3>

We build this app using the following technologies:
    -Express.js
    -Node.js
    -React.js 
    -Google Maps API
    -MediaWiki API
    -Webpack

<h3>Instructions on how to use app:</h3>

Type in a city name in the search box and click the Search button or hit enter. You will be directed to that city on the map and it will drop 10 markers for landmarks on that map. If you click one of the markers, you will be able to see what the landmark is by it being added to a list.

Search for another city if you want to start over.

<h3>Wireframe:</h3>

<a href="http://imgur.com/MhGQA0D"><img src="http://i.imgur.com/MhGQA0D.png" title="source: imgur.com" /></a>

<h3>User Stories:</h3>

<a href="http://imgur.com/8T1f6L6"><img src="http://i.imgur.com/8T1f6L6.jpg" title="source: imgur.com" /></a>

<h3>Component Mapping:</h3> 

<a href="http://imgur.com/0EBCqQB"><img src="http://i.imgur.com/0EBCqQB.jpg" title="source: imgur.com" /></a>

<h3>Unsolved problems:</h3> 
    
<p>Wanted wikipedia images as well as a summary paragraph to be included with each landmark, however, we would need more time with the API to get things more in order</p>
<p>Wanted a hover on a marker to show the Title, Picture, and Summary, so that it would make a bit more sense when you click a marker to add it to your list.</p>
<p>In this version, you can not save data and have it persist through a refresh of the page. That is something we would want so users could revisit cities and see the landmarks they saved to visit if they are ever in the area.</p>
<p>Wanted to set the initial state of the map before your search to be zoomed out and show a map of the world.</p>
    
