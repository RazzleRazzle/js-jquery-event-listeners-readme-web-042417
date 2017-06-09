//The function should bind a click event to the p tag. When the paragraph is clicked, the function should alert "Hey!".
function getIt(){
  $('p').on('click', function(){
    alert("Hey!")
  })
}

//The function should bind the load event that adds the class tasty to the image to add a red frame to the image.
function frameIt() {
  $('img').on('load', function() {
    $('img').addClass('tasty')
  })
}

//The function should bind a keydown event to the input field of the form that alerts a user when they have pressed the G key.
function pressIt() {
  $('#typing').on('keydown', function(key){
    if (key.which === 71){
      alert('g was pressed')
    }
  })
}
``
//The function should bind a submit event to the form that alerts "Your form is going to be submitted now.".
function submitIt() {
  $('form').on('submit', () => {
    alert('Your form is going to be submitted now.')
  })
}

$(document).ready(function(){
  getIt()
  frameIt()
  pressIt()
  submitIt()
});
