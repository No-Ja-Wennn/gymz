function listenButtonClick(buttonClass, ifId, cancelId) {
  var buttons = document.querySelectorAll(buttonClass);
  var ifElement = document.querySelector(ifId);
  var cancelElement = document.querySelector(cancelId);
  var body = document.querySelector('body');

  buttons.forEach(function(button) {
      button.addEventListener('click', function() {
          ifElement.style.display = 'flex';
          body.style.overflow = 'hidden';
      });
  });

  if (cancelElement) {
      cancelElement.addEventListener('click', function() {
          ifElement.style.display = 'none';
          body.style.overflow = 'auto';
      });
  }
}

$(document).ready(function(){
  listenButtonClick('.bt-view3', '#if3', '#cancel3 i');
  listenButtonClick('.bt-view4', '#if4', '#cancel4 i');
  listenButtonClick('.bt-view5', '#if5', '#cancel5 i');
  listenButtonClick('.bt-view6', '#if6', '#cancel6 i');
  listenButtonClick('.bt-view7', '#if7', '#cancel7 i');
});
