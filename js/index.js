const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// Step 1: Get the rest of the images on the webPage
let ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src'])

let mdlImg = document.getElementById('middle-img');
mdlImg.setAttribute('src', siteContent['main-content']['middle-img-src'])

// Step 2: Creating the Navigation Bar
const navigation = document.querySelectorAll('nav a');

navigation.forEach((element, index) => {
  element.textContent = siteContent['nav'][`nav-item-${index + 1}`];

  element.style.color = 'green';
});

// Step 3: Create More Navigation Items
const navBar = document.querySelector('nav')

const makeNew1 = document.createElement('a');
const newText1 = document.createTextNode('Learn');
const makeNew2 = document.createElement('a');

navBar.appendChild(makeNew1).appendChild(newText1);
makeNew1.style.color = 'green';

navBar.prepend(makeNew2);
makeNew2.textContent = 'Home';
makeNew2.style.color = 'green';


// Step 4: Add Header
const head1 = document.querySelector('h1');
head1.textContent = siteContent['cta']['h1'];

const butt = document.querySelector('button');
butt.textContent = siteContent['cta']['button'];

// Step 5: Adding the middle content
const topContentHeaders = document.querySelectorAll('.top-content h4');

topContentHeaders[0].textContent = siteContent['main-content']['features-h4'];
topContentHeaders[1].textContent = siteContent['main-content']['about-h4'];

const topContentText = document.querySelectorAll('.top-content p');

topContentText[0].textContent = siteContent['main-content']['features-content'];
topContentText[1].textContent = siteContent['main-content']['about-content'];

const bottomContentHeaders = document.querySelectorAll('.bottom-content h4');

bottomContentHeaders[0].textContent = siteContent['main-content']['services-h4'];
bottomContentHeaders[1].textContent = siteContent['main-content']['product-h4'];
bottomContentHeaders[2].textContent = siteContent['main-content']['vision-h4'];

const bottomContentText = document.querySelectorAll('.bottom-content p');

bottomContentText[0].textContent = siteContent['main-content']['services-content'];
bottomContentText[1].textContent = siteContent['main-content']['product-content'];
bottomContentText[2].textContent = siteContent['main-content']['vision-content'];

// Step 6: Adding the contact elements
const contactHead = document.querySelector('.contact h4');
contactHead.textContent = siteContent['contact']['contact-h4'];

const contactMiddle = document.querySelectorAll('.contact p');

contactMiddle[0].textContent = siteContent['contact']['address'];
contactMiddle[1].textContent = siteContent['contact']['phone'];
contactMiddle[2].textContent = siteContent['contact']['email'];

// Step 7: Adding the footer
const foot = document.querySelector('footer p');
foot.textContent = siteContent['footer']['copyright'];