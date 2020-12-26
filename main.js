$(document).ready(function () {

   let palettes = document.querySelectorAll(".palette-card-palette");

   let randomColor = () => {
      let letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
         color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
   };


   $("#button").on('click', function () {

      function changeColor(el, color) {
         el.style.backgroundColor = color;
      }

      palettes.forEach(palette => {
         changeColor(palette, randomColor());

         // show inside color box instead
         // palette.innerHTML= palette.style.backgroundColor;
         let nextSib = palette.nextElementSibling;

         nextSib.innerHTML = palette.style.backgroundColor;
      })

   });//click to generate new color


   $(".t-container").click(function () {

      $(".circle").toggleClass("toggle-move");
      $("body").toggleClass("dark-mode");

   });

   // add copy color function

   //alert rgb color
   $(".palette-card-palette").click(function (e) {

      e.preventDefault();

      let copyColor = this.style.backgroundColor;

      // document.execCommand("copy");

      alert(copyColor);

   });
   // copy hex color
   $(".palette-hex").click(function (e) {
      e.preventDefault();

      document.execCommand("copy");

      let target = $(this).next();

      $(target).addClass("copied");
      $(".copy-text").not(target).removeClass("copied");

      //remove copy text
      setTimeout(function () {

         $(target).removeClass("copied");
      }, 800);
   })

   // covert rgb to hex
   // function componentToHex(c) {
   //    let hex = c.toString(16);
   //    return hex.length == 1 ? "0" + hex : hex;
   // }

   // function rgbToHex(r, g, b) {
   //    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
   // }

   //fuction to remover rgb()
   const trimRgb = (rgbStr) => {
      return rgbStr.slice(3, rgbStr.length)
   }

});