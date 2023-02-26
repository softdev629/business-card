

function imgTitleChange()
{
  var component = event.target;
  while(component.id.search('component_') < 0){
    component = component.parentNode;
  }

  var pIndex = Array.from(component.parentNode.children).indexOf(component);   

  chimpData[pIndex].value.header.title = event.target.value;
    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);

}

function imgDescriptionChange()
{
  var component = event.target;
  while(component.id.search('component_') < 0){
    component = component.parentNode;
  }

  var pIndex = Array.from(component.parentNode.children).indexOf(component);   

  chimpData[pIndex].value.header.description = event.target.value;
    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);

}


function grid1(){

  $('.image_view_type_card').removeClass('selected');
  event.target.parentNode.className = event.target.parentNode.className + " selected";
  var imageType = event.target.parentNode.getAttribute('data-type');

  var component = event.target;
  while(component.id.search('component_') < 0){
    component = component.parentNode;
  }

  var pIndex = Array.from(component.parentNode.children).indexOf(component);  

  if (imageType == "list") {
    chimpData[pIndex].value.viewType = 'qrc_gallery_list';

  } else if (imageType == "grid_2") {
    chimpData[pIndex].value.viewType = 'qrc_gallery_grid_1';

  } else if (imageType == "grid_1") {
    chimpData[pIndex].value.viewType = 'qrc_gallery_grid_2';
  }
    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);
}

function del_uploaded_file(index) {
  var component = event.target;
  while(component.id.search('component_') < 0){
    component = component.parentNode;
  }

  var pIndex = Array.from(component.parentNode.children).indexOf(component); 

  if(event.target.tagName == 'I')
  {
    event.target.parentNode.parentNode.parentNode.style.display = 'none';
  }else if(event.target.tagName == 'A'){
    event.target.parentNode.parentNode.style.display = 'none';
  }
  chimpData[pIndex].value.photos[index - 1].state = false;
  document.getElementById("qr_page_prev").children[0].remove();
  showMobileIframe(templateNo);


}

