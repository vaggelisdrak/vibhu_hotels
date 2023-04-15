'use strict';



// add Event on multiple elment

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



// PRELOADING

const loadingElement = document.querySelector("[data-loading]");

window.addEventListener("load", function () {
  loadingElement.classList.add("loaded");
  document.body.classList.remove("active");
});



// MOBILE NAV TOGGLE

const [navTogglers, navLinks, navbar, overlay] = [
  document.querySelectorAll("[data-nav-toggler]"),
  document.querySelectorAll("[data-nav-link]"),
  document.querySelector("[data-navbar]"),
  document.querySelector("[data-overlay]")
];

const toggleNav = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("active");
}

addEventOnElements(navTogglers, "click", toggleNav);

const closeNav = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("active");
}

addEventOnElements(navLinks, "click", closeNav);



// HEADER

const header = document.querySelector("[data-header]");
const booking = document.getElementById('bookbtn');
const link1 = document.getElementById('linkbtn1');
const link2 = document.getElementById('linkbtn2');
const link3 = document.getElementById('linkbtn3');
const link4 = document.getElementById('linkbtn4');
const link5 = document.getElementById('linkbtn5');
const burgerslides = document.getElementById('burgerslides');

const activeElementOnScroll = function () {
  if (window.scrollY > 50) {
    header.classList.add("active");
    booking.classList.add("active");
    link1.classList.add("active");
    link2.classList.add("active");
    link3.classList.add("active");
    link4.classList.add("active");
    link5.classList.add("active");
    burgerslides.classList.add('active');
  } else {
    header.classList.remove("active");
    booking.classList.remove("active");
    link1.classList.remove("active");
    link2.classList.remove("active");
    link3.classList.remove("active");
    link4.classList.remove("active");
    link5.classList.remove("active");
    burgerslides.classList.remove("active");
  }
}

window.addEventListener("scroll", activeElementOnScroll);



/**
 * TEXT ANIMATION EFFECT FOR HERO SECTION
 */

const letterBoxes = document.querySelectorAll("[data-letter-effect]");

let activeLetterBoxIndex = 0;
let lastActiveLetterBoxIndex = 0;
let totalLetterBoxDelay = 0;

const setLetterEffect = function () {

  // loop through all letter boxes
  for (let i = 0; i < letterBoxes.length; i++) {
    // set initial animation delay
    let letterAnimationDelay = 0;

    // get all character from the current letter box
    const letters = letterBoxes[i].textContent.trim();
    // remove all character from the current letter box
    letterBoxes[i].textContent = "";

    // loop through all letters
    for (let j = 0; j < letters.length; j++) {

      // create a span
      const span = document.createElement("span");

      // set animation delay on span
      span.style.animationDelay = `${letterAnimationDelay}s`;

      // set the "in" class on the span, if current letter box is active
      // otherwise class is "out"
      if (i === activeLetterBoxIndex) {
        span.classList.add("in");
      } else {
        span.classList.add("out");
      }

      // pass current letter into span
      span.textContent = letters[j];

      // add space class on span, when current letter contain space
      if (letters[j] === " ") span.classList.add("space");

      // pass the span on current letter box
      letterBoxes[i].appendChild(span);

      // skip letterAnimationDelay when loop is in the last index
      if (j >= letters.length - 1) break;
      // otherwise update
      letterAnimationDelay += 0.05;

    }

    // get total delay of active letter box
    if (i === activeLetterBoxIndex) {
      totalLetterBoxDelay = Number(letterAnimationDelay.toFixed(2));
    }

    // add active class on last active letter box
    if (i === lastActiveLetterBoxIndex) {
      letterBoxes[i].classList.add("active");
    } else {
      letterBoxes[i].classList.remove("active");
    }

  }

  setTimeout(function () {
    lastActiveLetterBoxIndex = activeLetterBoxIndex;

    // update activeLetterBoxIndex based on total letter boxes
    activeLetterBoxIndex >= letterBoxes.length - 1 ? activeLetterBoxIndex = 0 : activeLetterBoxIndex++;

    setLetterEffect();
  }, (totalLetterBoxDelay * 1000) + 3000);

}

// call the letter effect function after window loaded
window.addEventListener("load", setLetterEffect);



/**
 * BACK TO TOP BUTTON
 */

const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  const bodyHeight = document.body.scrollHeight;
  const windowHeight = window.innerHeight;
  const scrollEndPos = bodyHeight - windowHeight;
  const totalScrollPercent = (window.scrollY / scrollEndPos) * 100;

  const perc = document.getElementById('perc');
  perc.textContent = `${totalScrollPercent.toFixed(0)}%`;
  /*backTopBtn.textContent = `${totalScrollPercent.toFixed(0)}%`;*/
  backTopBtn.style.backgroundImage = "url(../assets/images/spin.png)";

  const spin = document.getElementById('spin');

  spin.style.transform = "rotate(" + window.pageYOffset / 4 + "deg)";

  // visible back top btn when scrolled 5% of the page
  if (totalScrollPercent > 5) {
    backTopBtn.classList.add("show");
    perc.style.visibility = "visible";
  } else {
    backTopBtn.classList.remove("show");
    perc.style.visibility ="hidden";
  }
});



/**
 * SCROLL REVEAL
 */

const revealElements = document.querySelectorAll("[data-reveal]");

const scrollReveal = function () {
  for (let i = 0; i < revealElements.length; i++) {
    const elementIsInScreen = revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.15;

    if (elementIsInScreen) {
      revealElements[i].classList.add("revealed");
    } else {
      revealElements[i].classList.remove("revealed");
    }
  }
}

window.addEventListener("scroll", scrollReveal);

scrollReveal();

/* change room  */

function changeroom(bedrooms) {
  console.log(bedrooms);
  if (bedrooms == 16){
    console.log(document.getElementById("roomstext"));
    document.getElementById("roomstext").innerHTML = "Experience the utmost luxury with three VIBHŪ Villas situated in Mykonos' most elegant complex.\n" + "<br/><br/>" + "With sixteen spacious rooms, multiple glistening plunge pools - including an infinity pool combined with stunning panoramic ocean views of the Aegean." + "<br/><br/>" + "Soothe your soul and let memories unfold with VIBHŪ Villas.";
    document.getElementById("sixteenbtn").classList.add('active');
    document.getElementById("eightbtn").classList.remove('active');
    document.getElementById("sevenbtn").classList.remove('active');
    document.getElementById("onebtn").classList.remove('active');

    document.getElementById("carimg1").src = "https://i.ibb.co/dDcR3Ct/16bed-1.jpg"
    document.getElementById("carimg2").src = "https://i.ibb.co/GV9y29w/16bed-2.jpg"
    document.getElementById("carimg3").src = "https://i.ibb.co/QnL1gDv/16bed-3.jpg"
    document.getElementById("carimg4").src = "https://i.ibb.co/YbXSxdq/16bed-4.jpg"
    document.getElementById("carimg5").src = "https://i.ibb.co/b5LLZNd/16bed-5.jpg"
    document.getElementById("carimg6").src = "https://i.ibb.co/FmzCYYs/16bed-6.jpg"
    document.getElementById("carimg7").src = "https://i.ibb.co/nsst6H0/16bed-7.jpg"
    document.getElementById("infotext").innerHTML = "16 Suites<br><br>3 with private jacuzzi, 2 with private pool <br> <br>Lagoon shaped infinity pool<br><br>6 post Jacuzzi<br><br>Cellar<br><br>BBQ<br><br>Indoor/Outdoor dining areas<br><br>Fully equipped gym<br><br>Sauna<br><br>Helipad<br><br>In house staff<br><br>Bio garden<br><br>7000m2"
  }
  if (bedrooms == 8){
    document.getElementById("roomstext").innerHTML = "Surrounded by glistening private plunge pools, a private infinity pool and panoramic sea views of the Aegean, this VIBHŪ 8-bedroom Villa is unmatched in its levels of sophistication, beauty, and simplicity." + "<br/><br/>" +"En suite bathrooms, sparkling private plunge pools, luxurious jacuzzis make the ideal setting to recline in wonder as our team spares no expense in perfecting your stay.";
    document.getElementById("eightbtn").classList.add('active');
    document.getElementById("sixteenbtn").classList.remove('active');
    document.getElementById("sevenbtn").classList.remove('active');
    document.getElementById("onebtn").classList.remove('active');

    document.getElementById("carimg1").src = "https://i.ibb.co/b5LLZNd/16bed-5.jpg"
    document.getElementById("carimg2").src = "https://i.ibb.co/vddZZMJ/Vibhu-8-bedroom-villa-bathroom-1.jpg"
    document.getElementById("carimg3").src = "https://i.ibb.co/RjXhsjP/Extravaganza-Suite-1.jpg"
    document.getElementById("carimg4").src = "https://i.ibb.co/g3VsnZT/8-bedroom-villa-vibhu-mykonos-1.jpg"
    document.getElementById("carimg5").src = "https://i.ibb.co/gJyGXxV/VIBHY-MYKONOS-8-bedroom-villa-bathroom-1.jpg"
    document.getElementById("carimg6").src = "https://i.ibb.co/q7yb7Yg/VIBH-Villas-Mykonos-8-bedroom-villa-2.jpg"
    document.getElementById("carimg7").src = "https://i.ibb.co/ctPthjr/Vibhu-villa-Mykonos-bathroom-2.jpg"
    document.getElementById("infotext").innerHTML = "8 Suites with Sea view <br/><br/> Lagoon shaped, heated, infinity pool <br/><br/> 6 spot outdoor jacuzzi <br/><br/> Fully equipped kitchen <br/><br/> Cellar <br/><br/> Indoor / Outdoor dining area <br/><br/> Bathrooms with walk -in shower <br/><br/> Private terrace 600m2"
}
  if (bedrooms == 7){
    document.getElementById("roomstext").innerHTML = "Transcend luxury with private plunge pools, lavishly designed spacious rooms, and panoramic sea views of the Aegean as far as the eye can see." + "<br/><br/>" +"Elegantly situated in one of Mykonos' most luxurious complexes, the 7-bedroom VIBHŪ Villa makes for a stunning Eden-like space to reconnect and make lifelong memories with friends & loved ones.";
    document.getElementById("sevenbtn").classList.add('active');
    document.getElementById("eightbtn").classList.remove('active');
    document.getElementById("sixteenbtn").classList.remove('active');
    document.getElementById("onebtn").classList.remove('active');

    
    document.getElementById("carimg1").src = "https://i.ibb.co/93PXrNZ/Vibhu-8-bedroom-bathroom.jpg"
    document.getElementById("carimg2").src = "https://i.ibb.co/VVHHM8N/Vibhu-8-bedroom-villa.jpg"
    document.getElementById("carimg3").src = "https://i.ibb.co/s9mNJpX/Vibhu-8-bedroom-villa-common-areas.jpg"
    document.getElementById("carimg4").src = "https://i.ibb.co/Jdw44xP/Vibhu-villa-8-bedroom-interior.jpg"
    document.getElementById("carimg5").src = "https://i.ibb.co/t4F9KHs/Vibhu-Mykonos-bathroom.jpg"
    document.getElementById("carimg6").src = "https://i.ibb.co/R4QLsdT/Vibhu-v-Illas-8-bedroom-villa.jpg"
    document.getElementById("carimg7").src = "https://i.ibb.co/b6Stj54/VIBHU-VILLAS-MYKONOS-8-Bedroom-villa.jpg"

    document.getElementById("infotext").innerHTML = "7 suites in total <br/><br/> Sea View <br/><br/> 1 suite with private jacuzzi and two with private infinity pool <br/><br/> Bathrooms with walk -in shower <br/><br/> Cellar <br/><br/> BBQ <br/><br/> Private terrace 130m2 <br/><br/> Indoor / Outdoor dining area"
}
  if (bedrooms == 1){
    document.getElementById("roomstext").innerHTML = "Treat your loved one to the luxurious Delos Villa in Mykonos' most stunning complex." + "<br/><br/>" + "The perfect romantic getaway awaits with a gorgeous private two - story plot surrounded by emerald - blue sea views and rolling scenery - Truly the experience you both deserve." + "<br/><br/>" + "Soothe your souls and let memories unfold with a Delos Villa";
    document.getElementById("onebtn").classList.add('active');
    document.getElementById("eightbtn").classList.remove('active');
    document.getElementById("sevenbtn").classList.remove('active');
    document.getElementById("sixteenbtn").classList.remove('active');


    document.getElementById("carimg1").src = "https://i.ibb.co/K7M44FD/Vibhu-one-bedroom.jpg"
    document.getElementById("carimg2").src = "https://i.ibb.co/0s7283R/vibhu-one-bedroom-villamyk.jpg"
    document.getElementById("carimg3").src = "https://i.ibb.co/7z070tX/VIBHU-One-bedroom-villa.jpg"
    document.getElementById("carimg4").src = "https://i.ibb.co/nrCtRYF/VIBHU-one-bedroom-villa-web.jpg"
    document.getElementById("carimg5").src = "https://i.ibb.co/d4X238k/Vibhu-one-bedroom-villa-Mykonos.jpg"
    document.getElementById("carimg6").src = "https://i.ibb.co/7z070tX/VIBHU-One-bedroom-villa.jpg"
    document.getElementById("carimg7").src = "https://i.ibb.co/nrCtRYF/VIBHU-one-bedroom-villa-web.jpg"
    document.getElementById("infotext").innerHTML = "Guest WC <br/><br/> Walk -in shower <br/><br/> Sea view"
}
};


/**
 * CUSTOM CURSOR
 */

const cursor = document.querySelector("[data-cursor]");
const anchorElements = document.querySelectorAll("a");
const buttons = document.querySelectorAll("button");

// change cursorElement position based on cursor move
document.body.addEventListener("mousemove", function (event) {
  setTimeout(function () {
    cursor.style.top = `${event.clientY}px`;
    cursor.style.left = `${event.clientX}px`;
  }, 100);
});

// add cursor hoverd class
const hoverActive = function () { cursor.classList.add("hovered"); }

// remove cursor hovered class
const hoverDeactive = function () { cursor.classList.remove("hovered"); }

// add hover effect on cursor, when hover on any button or hyperlink
addEventOnElements(anchorElements, "mouseover", hoverActive);
addEventOnElements(anchorElements, "mouseout", hoverDeactive);
addEventOnElements(buttons, "mouseover", hoverActive);
addEventOnElements(buttons, "mouseout", hoverDeactive);

// add disabled class on cursorElement, when mouse out of body
document.body.addEventListener("mouseout", function () {
  cursor.classList.add("disabled");
});

// remove diabled class on cursorElement, when mouse in the body
document.body.addEventListener("mouseover", function () {
  cursor.classList.remove("disabled");
});