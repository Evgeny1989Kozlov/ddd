
const cerd = document.querySelector(".main-page__image");
const rrr = cerd.nextElementSibling;

cerd.addEventListener('click', function (e) {

   if (rrr.hidden) {
      rrr.hidden = false;
      cerd.classList.add("tole");
   }


}

)
// document.addEventListener('click', function (e) {
//    const eT = e.target;
//    const object = eT.closest(".block-third__li");
//    if (object) {

//       object.classList.toggle("act");





//    }
//    else {
//       lis.forEach(element => {
//          element.classList.remove("act");

//       });

//    }


// })