function openNav(){"use strict";const e=document.getElementById("mySidepanel");e?e.style.left="0":console.error("Error: Side panel element not found!")}function closeNav(){"use strict";const e=document.getElementById("mySidepanel");e?e.style.left="-320px":console.error("Error: Side panel element not found!")}function toggleCollapse(e){var t=document.getElementById(e),o=document.querySelector(".collapse_btn a");t.classList.toggle("show");var n="true"===o.getAttribute("aria-expanded");o.setAttribute("aria-expanded",!n)}function open_search_bar(){"use strict";const e=document.getElementById("search-bar");e?(e.style.height="100vh",e.style.borderRadius="0"):console.error("Error: Side panel element not found!")}function close_search_bar(){"use strict";const e=document.getElementById("search-bar");e?(e.style.height="0",e.style.borderTopLeftRadius="100%",e.style.borderTopRightRadius="100%"):console.error("Error: Side panel element not found!")}function open_right_side(){"use strict";const e=document.getElementById("right_side");e?e.style.right="0":console.error("Error: Side panel element not found!")}function close_right_sade(){"use strict";const e=document.getElementById("right_side");e?e.style.right="-355px":console.error("Error: Side panel element not found!")}function scrollFunction(){document.body.scrollTop>20||document.documentElement.scrollTop>20?document.getElementById("backToTopBtn").style.display="block":document.getElementById("backToTopBtn").style.display="none"}function scrollToTop(){(document.documentElement||document.body).scrollIntoView({behavior:"smooth"})}function open_img(e,t){var o,n,s;for(n=document.getElementsByClassName("tabcontent"),o=0;o<n.length;o++)n[o].style.display="none";for(s=document.getElementsByClassName("tablinks"),o=0;o<s.length;o++)s[o].classList.remove("active");document.getElementById(t).style.display="block",e.currentTarget.classList.add("active")}function scrollFunction(){document.body.scrollTop>20||document.documentElement.scrollTop>20?document.getElementById("backToTopBtn").style.display="block":document.getElementById("backToTopBtn").style.display="none"}function scrollToTop(){(document.documentElement||document.body).scrollIntoView({behavior:"smooth"})}window.onscroll=function(){scrollFunction()},document.addEventListener("DOMContentLoaded",function(){let e=document.querySelectorAll(".accordion-button"),t=document.querySelectorAll(".accordion-button img");e.forEach(function(o,n){o.addEventListener("click",function(){let s=this.parentElement.nextElementSibling;e.forEach(function(e,n){e!==o&&(e.parentElement.nextElementSibling.style.maxHeight=null,t[n].src="Images/icon/plus.png",t[n].style.transform="rotate(0deg)",e.style.backgroundColor="#fff")}),s.style.maxHeight?(s.style.maxHeight=null,t[n].src="Images/icon/plus.png",t[n].style.transform="rotate(90deg)",o.style.backgroundColor=""):(s.style.maxHeight=s.scrollHeight+"px",t[n].src="Images/icon/menus.png",t[n].style.transform="rotate(180deg)",o.style.backgroundColor="#c1b0d5")})})});const fom=document.getElementById("footer-form"),footerMessage=document.getElementById("footer-message");fom.addEventListener("submit",e=>{e.preventDefault(),footerMessage.innerHTML="~ Form submitted success fully!",footerMessage.style.display="flex",fom.reset(),setTimeout(()=>{footerMessage.style.display="none"},3e3)}),$(".sliderlogo").slick({arrows:!1,dots:!1,infinite:!1,autoplay:!1,speed:300,slidesToShow:5,slidesToScroll:1,responsive:[{breakpoint:1024,settings:{slidesToShow:4,slidesToScroll:1,infinite:!0,dots:!1}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:1}}]}),$(".team-slider").slick({arrows:!1,dots:!0,infinite:!1,autoplay:!0,speed:300,slidesToShow:4,slidesToScroll:1,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:1,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]});