const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")
const colorNameDisplay = document.getElementById("colorName")

buttons.forEach(function(button){
  console.log(button);

  button.addEventListener("click",function(e){
    console.log(e);
    console.log(e.target);  //from which target, the event is occured

    if (e.target.id === "grey") {
      body.style.backgroundColor = e.target.id //
      body.style.transition = "background-color 0.5s ease"; // Color fade transition
    }
    if (e.target.id === "white") {
      body.style.backgroundColor = e.target.id //
      body.style.transition = "background-color 0.5s ease"; // Color fade transition
    }
   
    if (e.target.id === "yellow") {
      body.style.backgroundColor = e.target.id //
      body.style.transition = "background-color 0.5s ease"; // Color fade transition
    }
    if (e.target.id === "Green") {
      body.style.backgroundColor = e.target.id //
      body.style.transition = "background-color 0.5s ease"; // Color fade transition
      
    }
    if (e.target.id === "grey" || e.target.id === "white" || e.target.id === "yellow" || e.target.id === "Green") 
      body.style.backgroundColor = e.target.id;
      body.style.transition = "background-color 0.5s ease"; // Color fade transition
      // Display color name
      colorNameDisplay.textContent = e.target.id;
      colorNameDisplay.setAttribute("style", "font-family: Arial, sans-serif; font-size: 16px; font-weight: bold; color: #333;");
  })

})

document.getElementById("default").addEventListener("click", function() {
  // Reset background color
  body.style.transition = "background-color 0.5s ease"; // Color fade transition
  body.style.backgroundColor = "#FFAF45";
   // Clear color name display
   colorNameDisplay.textContent = "";
})