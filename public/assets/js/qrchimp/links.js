//web links
function webLinkTitleChange(){
  var index;
  var child = event.target.parentNode.parentNode.parentNode.parentNode;
  var parent = child.parentNode;
  index = Array.from(parent.children).indexOf(child);
  linksState.links[index].title = event.target.value;
}

function webLinkSubTitleChange(){
  var index;
  var child = event.target.parentNode.parentNode.parentNode.parentNode;
  var parent = child.parentNode;
  index = Array.from(parent.children).indexOf(child);
  linksState.links[index].subtitle.value = event.target.value;
}



function webLinkUrlChange() {
  var index;
  var child = event.target.parentNode.parentNode.parentNode.parentNode;
  var parent = child.parentNode;
  index = Array.from(parent.children).indexOf(child);
  linksState.links[index].link = event.target.value;
}

function webLinksChange()
{

  if(event.target.tagName == 'INPUT')
  {
    linksState.header.title = event.target.value;
  }
  else if(event.target.tagName == "TEXTAREA")
  {
    linksState.header.description = event.target.innerHTML;
  }
}

function addLink(id) {
  g_currentLinks++;
  var className = document.getElementById('web_link_container_'+id).children[0].children[3].children[0].children[1].children[0].className;
  var attr = document.getElementById('web_link_container_'+id).children[0].children[3].children[0].children[1].children[1].getAttribute('onclick');

  document.getElementById('web_link_container_'+id).children[0].children[3].children[0].children[1].children[0].className="img_uploaded_card selected_img mr-3  img_" + g_currentLinks;
  document.getElementById('web_link_container_'+id).children[0].children[3].children[0].children[1].children[1].setAttribute('onclick', 'current = ' + g_currentLinks);

  var addHtml = document.getElementById('web_link_container_'+id).children[0].outerHTML;

  document.getElementById('web_link_container_'+id).children[0].children[3].children[0].children[1].children[0].className=className;
  document.getElementById('web_link_container_'+id).children[0].children[3].children[0].children[1].children[1].setAttribute('onclick', 'current = ' + attr);

  for(var i = 0; i<document.getElementById('web_link_container_'+id).children.length; i++)
  {
    g_subcomponentIndex++;
    document.getElementById('web_link_container_'+id).children[i].id = 'sub_comp_' + g_subcomponentIndex;

    document.getElementById('web_link_container_'+id).children[i].setAttribute('draggable', 'true');
    document.getElementById('web_link_container_'+id).children[i].setAttribute('ondragstart', 'drag(event)');
    document.getElementById('web_link_container_'+id).children[i].setAttribute('ondrop', 'drop(event)');
    document.getElementById('web_link_container_'+id).children[i].setAttribute('ondragover', 'allowDrop(event)');
  }

        //get pIndex
        var component = event.target;
        while(component.id.search('component_') < 0){
          component = component.parentNode;
        }   

        var pIndex = Array.from(component.parentNode.children).indexOf(component);
        //push




  chimpData[pIndex].value.links.push({
  enabled: 'block',
  link: "",
  image: "./assets/images/windows.png",
  title: "Portfolio",
  subtitle: {
    enabled: "block",
    value: "Visit for moreinformation"
  }
  });


  $('#web_link_container_'+id).append(addHtml);

}


function webLinks_del(e){

  $('#delModal').modal('show');
  var obj;
  var parent;

  if (e.target.tagName == 'I') {
    var obj = e.target.parentNode.parentNode.parentNode.parentNode;

    var parent = obj.parentNode;
  } else if (e.target.tagName == 'A') {
    var obj = e.target.parentNode.parentNode.parentNode;

    var parent = obj.parentNode;
  }


  var index = Array.from(parent.children).indexOf(obj);

  var flag = 0;
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

