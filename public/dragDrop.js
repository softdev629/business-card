

function allowDrop(ev) {
  ev.preventDefault();
} 

function drag(ev) {
  ev.stopPropagation();

  ev.dataTransfer.setData('id', ev.target.id);
}

function drop(ev) {
  ev.preventDefault();

  var id = ev.dataTransfer.getData('id');
  if(id.search('sub_comp_')<0)
    return;
  var component = event.target;
  while(component.id.search('sub_comp_') < 0){
    component = component.parentNode;
  }

  var insertElement = document.getElementById(id);


  var subIndex = Array.from(document.getElementById(id).parentNode.children).indexOf(document.getElementById(id));
  var tempComponent = insertElement;
  while(tempComponent.id.search('component_')<0){
    tempComponent = tempComponent.parentNode;
  }
  var index = Array.from(tempComponent.parentNode.children).indexOf(tempComponent);


  if(component.id == id)
    return;

  var temp = chimpData[index]; var temp1;
  if(temp.type == 'profile'){
    temp1 = temp.value.contacts.info[subIndex];
    temp.value.contacts.info.splice(subIndex, 1);
  }else if(temp.type == 'contact'){
    temp1 = temp.value.contactItems[subIndex];        
    temp.value.contactItems.splice(subIndex, 1);
  }else if(temp.type == 'images'){
    temp1 = temp.value.photos[subIndex];
    temp.value.photos.splice(subIndex, 1);
  }else if(temp.type == 'socialLink'){
    temp1 = temp.value.links[subIndex];
    temp.value.links.splice(subIndex, 1);
  }else if(temp.type == 'webLinks'){
    temp1 = temp.value.links[subIndex];    
    temp.value.links.splice(subIndex, 1);
  }else if(temp.type == 'custom'){
    temp1 = temp.value.customItems[subIndex];
    temp.value.customItems.splice(subIndex, 1);
  }else if(temp.type == 'pdf'){
    temp1 = temp.value.pdfItems[subIndex];    
    temp.value.pdfItems.splice(subIndex, 1);
  }


  document.getElementById(id).remove();



  if(Number(ev.clientY) - Number(component.offsetHeight) <= getOffset(component).top)
  {
    component.insertAdjacentElement('beforebegin', insertElement);
  }
  else
    component.insertAdjacentElement('afterend', insertElement);




  subIndex = Array.from(document.getElementById(id).parentNode.children).indexOf(document.getElementById(id));

  if(temp.type == 'profile'){
    temp.value.contacts.info.splice(subIndex, 0, temp1);
  }else if(temp.type == 'contact'){
    temp.value.contactItems.splice(subIndex, 0, temp1);        
  }else if(temp.type == 'images'){
    temp.value.photos.splice(subIndex, 0, temp1);
  }else if(temp.type == 'socialLink'){
    temp.value.links.splice(subIndex, 0, temp1);
  }else if(temp.type == 'webLinks'){
    temp.value.links.splice(subIndex, 0, temp1); 
  }else if(temp.type == 'custom'){
    temp.value.customItems.splice(subIndex, 0, temp1);
  }else if(temp.type == 'pdf'){
    temp.value.pdfItems.splice(subIndex, 0, temp1);    
  }
  chimpData[index] = temp;

  var draggableList = document.getElementsByClassName('myDraggable');





  for(var i=0; i<draggableList.length; i++)
  {
    draggableList[i].setAttribute('draggable', false);
  }




    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);
}

function allowDropComponent(ev) {
  ev.preventDefault();
}

function dragComponent(ev) {

  ev.stopPropagation();
  ev.dataTransfer.setData('id', ev.target.id);
}

function getOffset(el) {
  const rect = el.getBoundingClientRect();

  return {
    left: rect.left,
    top: rect.top
  };
}

function dropComponent(ev) {

  var id = ev.dataTransfer.getData('id');
  if(id.search('component_')<0)
    return;
  var component = ev.target;
  while(component.id.search('component_') < 0){
    component = component.parentNode;
  }

  var insertElement = document.getElementById(id);
  
  

  index = Array.from(document.getElementById(id).parentNode.children).indexOf(document.getElementById(id));

  if(component.id == id)
    return;

  console.log(index, 'dragdrop.js 152');

  var temp = chimpData[index];
  chimpData.splice(index, 1);
  document.getElementById(id).remove();

  console.log(chimpData, 'chimpData');



  if(Number(ev.clientY) - Number(component.offsetHeight/2) <= getOffset(component).top)
  {
    component.insertAdjacentElement('beforebegin', insertElement);
  }
  else
    component.insertAdjacentElement('afterend', insertElement);
  index = Array.from(document.getElementById(id).parentNode.children).indexOf(document.getElementById(id));
    console.log(index, 'index', 'dragDrop.js  169');

  chimpData.splice(index, 0, temp);

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);

    console.log(chimpData, 'chimpData 174');

  var draggableList = document.getElementsByClassName('myDraggable');


  for(var i=0; i<draggableList.length; i++)
  {
    draggableList[i].setAttribute('draggable', false);
  }



}

function onDragComponent()
{
  if(event.target.tagName == 'A')
  {
    event.target.parentNode.parentNode.parentNode.setAttribute('draggable', 'true');
  }
  else if(event.target.tagName == 'I')
  {
    event.target.parentNode.parentNode.parentNode.parentNode.setAttribute('draggable', 'true');
  }
}

function onDragSubComponent()
{
  var component = event.target;
  while(component.id.search('sub_comp_') < 0){
    component = component.parentNode;
  }
  component.setAttribute('draggable', 'true');
}

function offDragComponent()
{


  if(event.target.tagName == 'A')
  {
    event.target.parentNode.parentNode.parentNode.setAttribute('draggable', 'false');
  }
  else if(event.target.tagName == 'I')
  {
    event.target.parentNode.parentNode.parentNode.parentNode.setAttribute('draggable', 'false');
  }  
}

function offDragSubComponent()
{
  var component = event.target;
  while(component.id.search('sub_comp_') < 0){
    component = component.parentNode;
  }
  component.setAttribute('draggable', 'false');
}
