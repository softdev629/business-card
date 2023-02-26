function activeVimeo(){

  $(event.target).removeClass('active').addClass('active');
  $(event.target.previousSibling).removeClass('active');
}

function activeYouTube(){
  $(event.target).removeClass('active').addClass('active');  
  $(event.target.nextSibling).removeClass('active');
}