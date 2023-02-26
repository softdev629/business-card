

function btnTitleChange(){
    var component = event.target;
    while(component.id.search('component_') < 0){
      component = component.parentNode;
    }    
    var pIndex = Array.from(component.parentNode.children).indexOf(component);

    chimpData[pIndex].value.header.title = event.target.value;

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);
}

function btnDescriptionChange(){
    var component = event.target;
    while(component.id.search('component_') < 0){
      component = component.parentNode;
    }    
    var pIndex = Array.from(component.parentNode.children).indexOf(component);

    chimpData[pIndex].value.header.description = event.target.value;

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);
}

function btnLabelChange(){
    var component = event.target;
    while(component.id.search('component_') < 0){
      component = component.parentNode;
    }    
    var pIndex = Array.from(component.parentNode.children).indexOf(component);

    chimpData[pIndex].value.buttonLabel = event.target.value;

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);
}

function btnLinkChange(){
    var component = event.target;
    while(component.id.search('component_') < 0){
      component = component.parentNode;
    }    
    var pIndex = Array.from(component.parentNode.children).indexOf(component);

    chimpData[pIndex].value.buttonLink = event.target.value;

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);
}
