//drag and drop

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
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

  //get index of sub_comp_ and get index of component_
  var subIndex = Array.from(document.getElementById(id).parentNode.children).indexOf(document.getElementById(id));
  var tempComponent = insertElement;
  while(tempComponent.id.search('component_')<0){
    tempComponent = tempComponent.parentNode;
  }
  var index = Array.from(tempComponent.parentNode.children).indexOf(tempComponent);

  // index = Array.from(document.getElementById(id).parentNode.children).indexOf(document.getElementById(id));
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

  // chimpData.splice(index, 1);
  document.getElementById(id).remove();

  component.insertAdjacentElement('afterend', insertElement);
  subIndex = Array.from(document.getElementById(id).parentNode.children).indexOf(document.getElementById(id));
  // chimpData.splice(index, 0, temp);
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

}

function allowDropComponent(ev) {
  ev.preventDefault();
}

function dragComponent(ev) {
  ev.dataTransfer.setData('id', ev.target.id);
}

function dropComponent(ev) {
  ev.preventDefault();
  var id = ev.dataTransfer.getData('id');
  if(id.search('component_')<0)
    return;
  var component = event.target;
  while(component.id.search('component_') < 0){
    component = component.parentNode;
  }

  var insertElement = document.getElementById(id);
  
  

  index = Array.from(document.getElementById(id).parentNode.children).indexOf(document.getElementById(id));
  var temp = chimpData[index];
  chimpData.splice(index, 1);
  document.getElementById(id).remove();

  component.insertAdjacentElement('afterend', insertElement);
  index = Array.from(document.getElementById(id).parentNode.children).indexOf(document.getElementById(id));
  chimpData.splice(index, 0, temp);

}
