// document.addEventListener("DOMContentLoaded", function () {
//     const gallery = document.querySelector(".wrapper");
//     const images = document.querySelectorAll(".cards");
//     const totalImages = images.length;
//     let currentIndex = 0;
//     let intervalId;

    
//     function scrollToIndex(index) {
//         const translateValue = -index * 100 + "%";
//         gallery.style.transform = "translateX(" + translateValue + ")";
//     }

    
//     function scrollr() {
        
//         if (currentIndex < (totalImages - 3) ){
//             currentIndex++;
//             scrollToIndex(currentIndex);
//         } else {
            
//             stopScrolling();
//         }
//     }

    
//     function scrolll() {
        
//         if (currentIndex > 0) {
//             currentIndex--;
//             scrollToIndex(currentIndex);
//         }
//     }

    
//     function stopScrolling() {
//         clearInterval(intervalId);
        
//         document.getElementById("right").disabled = true;
//     }

    
//     function startScrolling() {
//         intervalId = setInterval(scrollr, 1800000);
//     }

    
//     startScrolling();

    
//     document.getElementById("right").addEventListener("click", function () {
        
//         document.getElementById("right").disabled = false;
//         scrollr();
//     });

//     document.getElementById("left").addEventListener("click", function () {
        
//         scrolll();
//     });
// });
