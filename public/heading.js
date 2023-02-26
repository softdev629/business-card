

function changeHeadingTitle()
{
  var component = event.target;
  while(component.id.search('component_') < 0){
    component = component.parentNode;
  }

  var pIndex = Array.from(component.parentNode.children).indexOf(component);  
  chimpData[pIndex].value.title = event.target.value;

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);
}

function changeHeadingDescription()
{

    var component = event.target;
    while(component.id.search('component_') < 0){
      component = component.parentNode;
    }

    var pIndex = Array.from(component.parentNode.children).indexOf(component);  


    chimpData[pIndex].value.description = event.target.value;

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);
}


