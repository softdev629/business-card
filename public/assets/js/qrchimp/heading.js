

//heading
function changeHeadingTitle()
{
  var component = event.target;
  while(component.id.search('component_') < 0){
    component = component.parentNode;
  }

  var pIndex = Array.from(component.parentNode.children).indexOf(component);  
  chimpData[pIndex].value.title = event.target.value;

}

function changeHeadingDescription()
{
  var component = event.target;
  while(component.id.search('component_') < 0){
    component = component.parentNode;
  }

  var pIndex = Array.from(component.parentNode.children).indexOf(component);  

  chimpData[pIndex].value.description = event.target.value;

}
