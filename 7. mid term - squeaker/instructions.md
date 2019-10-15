## Setup

* Create an index.html, style.css, script.js
* Add the boilerplate html, link the stylesheet and the script
* Change the page title.

## HTML

* Add a page header with the site title.
* Add the following squeak:

```html
<div id="all-squeaks">
<div class="squeak">
    <p class="squeak-username">Elon Musk</p>
    <p class="squeak-message">Told you AI was dangerous!! 🔥💣💦</p>
  </div>
  
  <div class="squeak">
    <p class="squeak-username">Donald J. Trump</p>
    <p class="squeak-message">When you're already $500 Billion DOWN, you can't lose!</p>
  </div>
  
  <div class="squeak">
    <p class="squeak-username">Kanye West</p>
    <p class="squeak-message">Tweeting is legal and also therapeutic</p>
  </div>
  
  <div class="squeak">
    <p class="squeak-username">Justin Bieber</p>
    <p class="squeak-message">Retweet this tweet to see this tweet on your twitter when you tweet.</p>
  </div>
  
  <div class="squeak">
    <p class="squeak-username">Kim Kardashian West</p>
    <p class="squeak-message">I am a strong believer that in order for change to happen, you must be willing to work with all people, even when you have differences in political opinions.</p>
  </div>
</div>
```

* Add your own squeak at the top of the list.
* Add a form at the bottom of the page with two inputs, one for a username, and one for a message.

## CSS

* Add css to make it look like the following image.
  - The width of the squeaks and form is 600px;
  - header color: #80ced6
  - squeak color: #fefbd8
  - squeak border color: #618685
  - footer color: #618685
  - body color: #d5f4e6


## JavaScript

The following block of code will create a new squeak and add it to the DOM:

<pre><code>
const squeak = document.createElement("div");
squeak.classList.add("squeak");

const squeakUsername = document.createElement("p");
squeakUsername.classList.add("squeak-username");
squeakUsername.innerText = 
squeak.appendChild(squeakUsername);

const squeakMessage = document.createElement("p");
squeakMessage.classList.add("squeak-message");
squeakMessage.innerText = 
squeak.appendChild(squeakMessage);

document.querySelector("#all-squeaks").appendChild(squeak);
</code></pre>

* Add a submit event listener to the form that creates a new squeak with the user's input.

Your final app should look and work like this:


## Rubric

A score of 58 is 100%

Criteria | Perfect | Almost There | Halfway There | Kind of attempted | Incomplete 
---------|---------|----------|---------|---------|---------
Contains boilerplate HTML | 4 | _ | _ | _ | 0
title, css file, javascript file | 4 | _ | _ | _ | 0
HTML contains the header, squeaks, and form | 12 | _ | _ | _ | 0 
The styles are mostly correct | 20 | _ | _ | _ | 0 
The JavaScript form works correctly | 16 | _ | _ | _ | 0 
No html syntax errors. (use https://html5.validator.nu/) | 4 | _ | _ | _ | 0
