# Dear Future Self

## Overview
Goodbye 2020, hello 2021! While it's tempting to toss away 2020
as a bad memory, it's important to reflect on the positive moments
too. _Dear Future Self_ is a great way to do that! This app allows
you to send yourself a message and some files at some point in the
future. That way, the next time you get ice cream with friends or
do a road trip, you can use _Dear Future Self_ to remind yourself of
these great times.

## Tools Used
* HTML, CSS and JavaScript
* ReactJS and Axios frontend
* NodeJS and Express backend
* Domain.com
* Google Cloud App Engine

## The Code
### `/public`
Files exposed to the client including `index.html` and several images.
### `/src`
The ReactJS frontend. When loading a page, ReactJS generates HTML to
display user-generated data, buttons, text boxes, etc. and injects
it into `index.html`. Each page is contained in a JavaScript file under
`/src/components`. The frontend uses Axios to send data to the backend.
### `/server`
The NodeJS backend. When running, the server periodically checks through
`file_data.json` to determine if it's time to send any letters. The server
is also responsible for receiving data from the frontend, updating
`file_data.json` accordingly, and storing user files in `/server/file_storage`.
