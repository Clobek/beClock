# beClock

Created by Bryce Belock

## About

An online alarm clock that allows you to select any buzzer/alarm sound for said clock from youtube, soundcloud, twitch, dailymotion, facebook, etc. If you don't want to use a url from another site the backend is serving up 10 of my favorite songs from a handful genres you can select.

## Font-End Setup

The frontend is written using React with JSX and SCSS for the styling. The clock images are written entirely using xml/svg. For react I am using hooks as opposed to a class. Async fetches are being called on the backend to serve preset songs.

### Repositories
[Front-End](https://github.com/Clobek/beClock)

[Back-End](https://github.com/Clobek/beClock_API)

### Hosts
[Front-End](https://beclock.netlify.app)

[Back-End](https://beclock.herokuapp.com/alarms/Rock) - I'm using Rock as the example of data to call, replacing Rock with Electronic, Rap etc will yield just those genres.

### Credits

The SVG source code was taken from https://commons.wikimedia.org/wiki/File:Nixie_IN17.svg and edited in Inkscape. The image came as a single SVG and I turned them each into their own SVG while also adding background numbers to all active Nixies and fixing the wire mesh path being above areas it should have been below.

I used https://svg2jsx.com/ for a quick way to convert the SVG to JSX so I could use it as a react component. (I made manual changes to the viewbox and width/height after importing since the original SVG's I made were large)

https://codepen.io/kunukn/pen/pgqvpQ credit to Ana Tudor and Kunuk Nykjær for their work with vertical sliders, I edited them to fit my code and styled them how I saw fit.

The font is a ttf created by http://www.glukfonts.pl/
