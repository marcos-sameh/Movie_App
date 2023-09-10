let open = document.getElementsByClassName("open-colse-icon")[0];
 
let close = document.getElementsByClassName("open-colse-icon")[1];

let showMovies =document.getElementById("showMovies");
let scearch = document.getElementById("scearchBar");

$(".side-nav-bar").css("left");
$(".side-nav-bar i.open-colse-icon").click(() => {
  $(".side-nav-bar .nav-tap").outerWidth();

  if ($(".side-nav-bar").css("left") == "0px") {
    closeSideBar();
  } else {
    openSideBar();
  }
});
function openSideBar() {
  $(".side-nav-bar").animate({ left: "0px" }, 500);
   close.classList.remove("d-none")
   open.classList.remove("d-block")
   close.classList.add("d-block")
   open.classList.add("d-none")


  for (let i = 0; i < 6; i++) {
    $(".nav-links li").eq(i).animate({ top: 0 }, (+i + 5) * 100);
  }
}
function closeSideBar() {
  let boxWidth = $(".side-nav-bar .nav-tap").outerWidth();
  $(".side-nav-bar").animate({ left: -boxWidth }, 500);
  open.classList.remove("d-none")
  close.classList.remove("d-block")
   close.classList.add("d-none")
   open.classList.add("d-block")
   

  $(".nav-links li").animate({ top: 300 }, 500);
 
}
closeSideBar();
 
let movie = document.getElementsByClassName("movie")[0];
let movieLayer = document.getElementsByClassName("movie-layer")[0];
let movieHeader = document.getElementById("movie-header");
let movieDscription = document.getElementById("movie-dscription");
let movieSpan = document.getElementById("movie-span");
let movieRate = document.getElementById("movie-rate");
let movieRateNumber = document.getElementById("movie-rate-number");
 


// movie.addEventListener("mouseenter",function () {
//     movieHeader.style.left = "10%";
//     movieHeader.style.transitionDelay = "1s";

//     movieDscription.style.left = "10%";
//     movieDscription.style.opacity = "1";

//     movieDscription.style.transitionDelay = "1s";

//     movieSpan.style.left = "10%";
//     movieSpan.style.transitionDelay = "1s";

//     movieRate.style.left = "10%";
//     movieRate.style.transitionDelay = "1s";

//     movieRateNumber.style.left = "10%";
//     movieRateNumber.style.transitionDelay = "1s";

// })
// movie.addEventListener("mouseout",function () {
//     movieHeader.style.left = "-100%";
//     movieDscription.style.left = "-100%";
//     movieDscription.style.opacity = "0";
//     movieSpan.style.left = "-100%";
//     movieRate.style.left = "-100%";
//     movieRateNumber.style.left = "-100%";
   

// })
 
 
scearch.addEventListener('input',function (e) {
  
  title = e.target.value
  console.log(title);
  scearhMovives(title)
})
async function scearhMovives(term){
  let response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=aad80cdf7545d8ace25868bde5482e43&query=${term}`)
  response = await response.json();
  displayMovies(response.results)
}
 
async function getMovies(term){
  let response = await fetch(`https://api.themoviedb.org/3/movie/${term}?api_key=aad80cdf7545d8ace25868bde5482e43`)
  response = await response.json();
  displayMovies(response.results)
}
 

function displayMovies(arr) {
  let cartona =``;
  for (let i  = 0; i  < arr.length; i ++) {
     cartona +=`
     <div class="col-md-4">
     <div class="movie position-relative overflow-hidden rounded-2">
         <img src="https://image.tmdb.org/t/p/w500${arr[i].poster_path}"  class="w-100"  alt="">
         <div class="movie-layer position-absolute ">
             <div class="movie-layer-second d-flex flex-column justify-content-between pt-2 pb-5 position-relative">

                 <h3 id="movie-header">${arr[i].original_title}</h3>
                 <div id="movie-dscription">
                     <p>${arr[i].overview.split(" ").slice(0,30).join(" ") } ...</p>

                 </div>
           
                 <p id="movie-span" >Release Date : ${arr[i].release_date}</p>
                  <div id="movie-rate">
                  ${arr[i].vote_average < 7? 
                   `  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>`
                  : arr[i].vote_average < 8? 
                     `  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-regular fa-star-half-stroke"></i>` :
                  `  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>`
                }
                 
                                  
                   
                  </div>
                  <span id="movie-rate-number" onmouseenter="">${arr[i].vote_average.toString().slice(0,3)}</span>
           
             </div>
              </div>

         
     </div>
 </div>`
 showMovies.innerHTML = cartona;
  }
}
getMovies("now_playing")

async function getTrending() {
  let response = await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=aad80cdf7545d8ace25868bde5482e43`);
  response = await response.json();
  console.log(response.results);
   displayMovies(response.results);
}

 
// contact Us section 
let nameInp =document.getElementById("nameInput");
let ageInp =document.getElementById("ageInput");
let phoneInp =document.getElementById("phoneInput");
let emailInp =document.getElementById("emailInput");
let passworedInp =document.getElementById("passworedInput");
let rePassworedInp =document.getElementById("rePassworedInput");
let submitBtn = document.getElementById("submitBtn");

function inputsValidation() {
  if (nameValidation() && emailValidation() && phoneValidation() && ageValidation() && passwordValidationsswordValidation() && rePasswordValidation()){

    submitBtn.removeAttribute("disabled")
  }else{
    submitBtn.setAttribute("disabled",true)
  }

}
function nameValidation() {
  let regex =/^[a-zA-Z ]+$/
  let result =  regex.test(nameInp.value)
  return result ;
}
function emailValidation() {
  let regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  let result =  regex.test(emailInp.value)
  return result ;
}
function phoneValidation() {
  let regex =  /^01[0125][0-9]{8}$/gm 
  let result =  regex.test(phoneInp.value)
  return result ;
}
function ageValidation() {
  let regex = /^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|200)$/
  let result =  regex.test(ageInp.value)
  return result ;
}
function passwordValidation() {
  let regex =  /(?=.*\d.*)(?=.*[a-zA-Z].*).{8,}/
  let result =  regex.test(passworedInp.value)
  return result ;
}

function rePasswordValidation() {
  
  let result =   rePassworedInp.value ==  passworedInp.value ;
  return result ;
}

// $(window).scroll(function () {
//   if($(this).scrollTop() > 80 )  {
//     $('#btnUp').fadeIn();
//   }else{
//     $('#btnUp').fadeOut();

//   }
  
// })
// $('#btnUp').click(function() {
//   $('body,html').animate({scrollTop : 0},1000);
// })

// $(window).scroll(function () {
//   let windowScroll = $(window).scrollTop();

//   $(window).offset().top
//   let sectionOffset = $("#contact").offset().top;

    
//   if (windowScroll > sectionOffset - 70 ) {
  
//     $("#btnUp").removeClass("d-none");

//     $("#btnUp").addClass("d-block");

//   } else {
    
//     $("#btnUp").removeClass("d-block");
//     $("#btnUp").addClass("d-none");

//   }
// });
$('#btnUp').click(function() {
  window.scrollTo({
    top : 0,
     behavior :'smooth'
  });
})

let UP =document.getElementById("btnUp");
window.onscroll = function() {
  console.log();
  if (this.scrollY >= 1000) {

    UP.classList.add("show")
  }else{
    UP.classList.remove("show")

  }
}
