
  // variables
   const welcomebtn = document.querySelector(".btn");
   const welcomepage = document.querySelector("#welcome");
   const minpage = document.querySelector("#minpage");
   const stars = document.querySelector("#stars");
   const moon = document.querySelector("#moon");
  const wish = document.querySelector("#wish")  
   // welcome page gone
  welcomebtn.addEventListener("click", () => { 
    welcomepage.style.display = "none";
    minpage.style.display = "inline";
   })

  // parallax
    window.addEventListener("scroll",() => {
      let value=window.scrollY;
      stars.style.left = value * .25 + "px";
      moon.style.left = value * .4 + "px";
      wish.style.marginRight = value * 4 + "px";
    })

  // scroll reveal
const sr = scrollreveal({
  origin: 'top',
  distance: '30px',
  duration: 2000,
  reset: true
});
sr.reveal('#welcome',{

});
  
