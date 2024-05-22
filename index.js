/*SIDE BAR */

function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'flex';
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none';
}

/* CONTACT FORM POPUP*/
function openForm(){
  const popup = document.querySelector('popupForm');
  popupForm.style.display = 'flex';
}
function closeForm(){
  const popup = document.querySelector('popupForm');
  popupForm.style.display = 'none';
}

/*TOGGLE THEME */
var mode = document.getElementById("mode");
mode.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        logos1.src = 'images/Dlogozblk_no_bg.png';
        logos1.style.height = '45px';
        logos1.style.marginBottom = '25px'
    }   
    else{
      
        logos1.src = 'images/Debvin_Logo_no_bg.png'
        logos1.style.height = '120px'
        logos1.style.marginBottom = '10px'
    }
}

/*SWIPER */
const swiper = new Swiper('.swiper', {
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  /*LOADER*/

  window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    loader.classList.add("disapear");
    loader.addEventListener("transitionend", () => {
        document.body.removeChild("loader");
    })
  })

  /* CONTACT FORM*/

  function sendEmail()
  {Email.send({
    Host : "smtp.gmail.com",
    Username : "debvinbusinesssolutions@gmail.com",
    Password : "Uzoamaka2019",
    To : 'ezeagbakwuruibe@gmail.com',
    From : document.getElementById("email").value,
    Subject : "New Contact Form Enquiry",
    Body : "New Message"
  }).then(
  message => alert(message)
);}
 /*MOUSE MOVE TRAIL*/
const squareTrail = document.querySelector('.square-trail');
const squareTemplate = document.createElement('div');
squareTemplate.className = 'square';


document.addEventListener('mousemove', (event) => {
	const square = squareTemplate.cloneNode();
	square.style.top = `${event.clientY}px`;
	square.style.left = `${event.clientX}px`;
	square.style.background = getRandomColor();
	squareTrail.appendChild(square);
  body.appendChild(square);
});

function getRandomColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(36)}`;
}

/*ACCORDION FOR LISTING*/
function opena(){
  const opena = document.querySelector('accordionTxt');
  accordionTxt.style.display = 'block';
  obtn.style.display = 'none';
  cbtn.style.display = 'block';

}
function closea(){
  const closea = document.querySelector('accordionTxt');
  accordionTxt.style.display = 'none';
  obtn.style.display = 'block';
  cbtn.style.display = 'none';
};

function opena1(){
  const opena1 = document.querySelector('accordionTxt1');
  accordionTxt1.style.display = 'block';
  obtn1.style.display = 'none';
  cbtn1.style.display = 'block';

}
function closea1(){
  const closea1 = document.querySelector('accordionTxt1');
  accordionTxt1.style.display = 'none';
  obtn1.style.display = 'block';
  cbtn1.style.display = 'none';
};

function opena2(){
  const opena2 = document.querySelector('accordionTxt2');
  accordionTxt2.style.display = 'block';
  obtn2.style.display = 'none';
  cbtn2.style.display = 'block';

}
function closea2(){
  const closea2 = document.querySelector('accordionTxt2');
  accordionTxt2.style.display = 'none';
  obtn2.style.display = 'block';
  cbtn2.style.display = 'none';
};


function opena3(){
  const opena3 = document.querySelector('accordionTxt3');
  accordionTxt3.style.display = 'block';
  obtn3.style.display = 'none';
  cbtn3.style.display = 'block';

}
function closea3(){
  const closea3 = document.querySelector('accordionTxt3');
  accordionTxt3.style.display = 'none';
  obtn3.style.display = 'block';
  cbtn3.style.display = 'none';
};

function opena4(){
  const opena4 = document.querySelector('accordionTxt4');
  accordionTxt4.style.display = 'block';
  obtn4.style.display = 'none';
  cbtn4.style.display = 'block';

}
function closea4(){
  const closea4 = document.querySelector('accordionTxt4');
  accordionTxt4.style.display = 'none';
  obtn4.style.display = 'block';
  cbtn4.style.display = 'none';
};


/*ANIMATION ONSCROLL*/
/*
// Function to load content when scroll reaches the bottom
function loadContent() {
  // Simulate an AJAX request to fetch data
  setTimeout(function() {
    var container = document.getElementById("container");

    // Create a new item
    var newItem = document.createElement("div");
    newItem.classList.add("item");
    newItem.textContent = "New Content"; // You can add dynamic content here

    // Append the new item to the container
    container.appendChild(newItem);
  }, 1000); // Simulating delay for loading content
}

// Function to detect when the user scrolls to the bottom of the page
function handleScroll() {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    loadContent(); // Load content when user scrolls to the bottom
  }
}

// Event listener for scroll
window.addEventListener("scroll", handleScroll);

// Initial check on page load
handleScroll();
*/


/*TIME PROJECT*/
/*
const hourEL = document.getElementById("hour");
const minutesEL = document.getElementById("minutes");
const ampmEL = document.getElementById("ampm");

function updateClock(){
let h = new Date().getHours();
let m = new Date().getMinutes();
let ampm = "AM";

if (h > 12){
    h = h-12
    ampm = "PM"
};
hourEL.innerText = h;
minutesEL.innerText = m;
ampmEL, (innerText = ampm);
setTimeout(()=>{
    updateClock()
   }, 1000);
updateClock()
}
updateClock();
*/
/*
var menusContainer = document.getElementById("navul");
var menus = menu-listContainer.getElementsByClassName("menu-list");

for (var i = 0; i < menus.length; i++) {
  menus[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}*/