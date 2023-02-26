

//social
function socialLinkChange() {
  var index;
  var child = event.target.parentNode.parentNode;
  var parent = child.parentNode;
  index = Array.from(parent.children).indexOf(child);
  socialLinksState.links[index].url = event.target.value;
}

function socialAdd(id) {
  g_currentSocial++;
  var className = document.getElementById('social_link_container_'+id).children[0].children[3].children[0].children[1].children[0].className;
  var attr = document.getElementById('social_link_container_'+id).children[0].children[3].children[0].children[1].children[1].getAttribute('onclick');

  document.getElementById('social_link_container_'+id).children[0].children[3].children[0].children[1].children[0].className="img_uploaded_card selected_img mr-3  img_" + g_currentSocial;
  document.getElementById('social_link_container_'+id).children[0].children[3].children[0].children[1].children[1].setAttribute('onclick', 'current = ' + g_currentSocial);

  var addHtml = document.getElementById('social_link_container_'+id).children[0].outerHTML;

  document.getElementById('social_link_container_'+id).children[0].children[3].children[0].children[1].children[0].className=className;
  document.getElementById('social_link_container_'+id).children[0].children[3].children[0].children[1].children[1].setAttribute('onclick', 'current = ' + attr);

  for(var i=0; i<document.getElementById('social_link_container_'+id).children.length; i++)
  { 
    g_subcomponentIndex++;
    document.getElementById('social_link_container_'+id).children[i].id = "sub_comp_" + g_subcomponentIndex;
    document.getElementById('social_link_container_'+id).children[i].setAttribute('draggable', 'true');
    document.getElementById('social_link_container_'+id).children[i].setAttribute('ondragstart', 'drag(event)');
    document.getElementById('social_link_container_'+id).children[i].setAttribute('ondrop', 'drop(event)');
    document.getElementById('social_link_container_'+id).children[i].setAttribute('ondragover', 'allowDrop(event)');
  }

function socialLinkDel() {

  var index = 0;
  var obj;
  var parent;

  if (event.target.tagName == 'A') {
    obj = event.target.parentElement.parentElement.parentElement;
    parent = obj.parentElement;
    Array.from(parent.children).indexOf(obj);
    index = Array.from(parent.children).indexOf(obj);
  } else if (event.target.tagName == 'I') {
    obj = event.target.parentElement.parentElement.parentElement.parentElement;
    parent = obj.parentElement;
    Array.from(parent.children).indexOf(obj);
    index = Array.from(parent.children).indexOf(obj);
  }
  $('#delModal').modal('show');
  let flag = 0;
  $(".del-btn").click(function() {
    if (flag === 0) flag = 1
    else return;

    //get pIndex
    var component = parent;
    while(component.id.search('component_') < 0){
      component = component.parentNode;
    }    
    var pIndex = Array.from(component.parentNode.children).indexOf(component);
    var temp = chimpData[pIndex];
    temp.value.links.splice(index, 1);
    chimpData[pIndex] = temp;


    obj.remove();
    $('#delModal').modal('hide');
  });
}

    //get pIndex
    var component = event.target;
    while(component.id.search('component_') < 0){
      component = component.parentNode;
    }   

    var pIndex = Array.from(component.parentNode.children).indexOf(component);
    //push



  chimpData[pIndex].value.links.push({
    type: "Facebook",
    url: "",
    logo: "/images/facebook.png",
    title: "Facebook",
    subtitle: {
      enabled: "none",
      value: "Like us on Facebook"
    }
  });
  $('#social_link_container_'+id).append(addHtml);

}

