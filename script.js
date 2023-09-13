// eyes

document.addEventListener("mousemove", (e) => {
  const pupils = document.querySelectorAll(".eye .pupil");
  pupils.forEach((pupil) => {
    //console.log(e.pageX, e.pageY);
    console.log(e)
    var rect = pupil.getBoundingClientRect();
    var offset = 90;
    var x = (e.pageX - rect.left) / offset + "px";
    var y = (e.pageY - rect.top)  / offset + "px";
    pupil.style.transform = "translate3d(" + x + "," + y + ", 0)";
  });
});
// end eyes

