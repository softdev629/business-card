
function activeVimeo(){

  $(event.target).removeClass('active').addClass('active');
  $(event.target.previousSibling).removeClass('active');
    var component = event.target;
    while(component.id.search('component_') < 0){
      component = component.parentNode;
    }    
    var pIndex = Array.from(component.parentNode.children).indexOf(component);


    chimpData[pIndex].value.type = event.target.getAttribute('data-type');

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);
}

function activeYouTube(){
  $(event.target).removeClass('active').addClass('active');  
  $(event.target.nextSibling).removeClass('active');
    var component = event.target;
    while(component.id.search('component_') < 0){
      component = component.parentNode;
    }    
    var pIndex = Array.from(component.parentNode.children).indexOf(component);


    chimpData[pIndex].value.type = event.target.getAttribute('data-type');

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);
}



function videoTitleChange(){
    var component = event.target;
    while(component.id.search('component_') < 0){
      component = component.parentNode;
    }    
    var pIndex = Array.from(component.parentNode.children).indexOf(component);


    chimpData[pIndex].value.header.title = event.target.value;

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);
}

function videoDescriptionChange(){
    var component = event.target;
    while(component.id.search('component_') < 0){
      component = component.parentNode;
    }    
    var pIndex = Array.from(component.parentNode.children).indexOf(component);


    chimpData[pIndex].value.header.description = event.target.value;

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);
}


function videoLinkChange(){
      var component = event.target;
    while(component.id.search('component_') < 0){
      component = component.parentNode;
    }    
    var pIndex = Array.from(component.parentNode.children).indexOf(component);

    chimpData[pIndex].value.videoLink = event.target.value;

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);
}