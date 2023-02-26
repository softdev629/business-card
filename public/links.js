

function webLinkTitleChange(){
  var index;
  var child = event.target.parentNode.parentNode.parentNode.parentNode;
  var parent = child.parentNode;
  index = Array.from(parent.children).indexOf(child);

  var component = event.target;
  while(component.id.search('component_') < 0){
    component = component.parentNode;
  }    
  var pIndex = Array.from(component.parentNode.children).indexOf(component);

  chimpData[pIndex].value.links[index].title = event.target.value;

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);
}

function webLinkSubTitleChange(){
  var index;
  var child = event.target.parentNode.parentNode.parentNode.parentNode;
  var parent = child.parentNode;
  index = Array.from(parent.children).indexOf(child);

  var component = event.target;
  while(component.id.search('component_') < 0){
    component = component.parentNode;
  }    
  var pIndex = Array.from(component.parentNode.children).indexOf(component);

  chimpData[pIndex].value.links[index].subtitle.value = event.target.value;

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);
}



function webLinkUrlChange() {
  var index;
  var child = event.target.parentNode.parentNode.parentNode.parentNode;
  var parent = child.parentNode;
  index = Array.from(parent.children).indexOf(child);

  var component = event.target;
  while(component.id.search('component_') < 0){
    component = component.parentNode;
  }    
  var pIndex = Array.from(component.parentNode.children).indexOf(component);

  chimpData[pIndex].value.links[index].link = event.target.value;

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);
}

function webLinksChange()
{
  var component = event.target;
  while(component.id.search('component_') < 0){
    component = component.parentNode;
  }    
  var pIndex = Array.from(component.parentNode.children).indexOf(component);

  if(event.target.tagName == 'INPUT')
  {
    chimpData[pIndex].value.header.title = event.target.value;
  }
  else if(event.target.tagName == "TEXTAREA")
  {
    chimpData[pIndex].value.header.description = event.target.value;
  }

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);
}

function addLink(id) {
  g_currentLinks++;
  g_subcomponentIndex++;

var div = document.createElement('div');
div.setAttribute('draggable', 'false');
div.setAttribute('ondragstart', 'drag(event)');
div.setAttribute('ondrop', 'drop(event)');
div.setAttribute('ondragover', 'allowDrop(event)');
div.id ='sub_comp_'+g_subcomponentIndex;
div.className = 'list-group-item web_link_input_wrapper subcomponent_sortable_wrapper mb-4';



var linkHtml = '<div><div class="action_buttons"><a class="btn btn_delete_pro_card" onclick="webLinks_del(event)"><i class="text-danger icon-delete_1"></i></a><a class="btn handle-web-link" onmousedown="onDragSubComponent()" onmouseup="offDragSubComponent()"><i class="icon-drag_1"></i></a></div></div><div class=""></div><div class="row"><div class="col-md-12  px-3"><div class="mb-2 d-flex"><span class="mr-2">Link</span> </div><div class="d-flex"><input class="form-control" autocomplete="off" name="url" value="" type="text" placeholder="" onkeyup="webLinkUrlChange()"></div></div></div><div class="row"><div class="col-md-12 px-3 mb-3"><div class="mb-2"> </div><div class="d-flex img_upload_card_wrapper"><div class="img_uploaded_card selected_img mr-3 link_img img_'+g_currentLinks+'"       style="background-image:url(\''+baseURL+'/assets/images/link.png\')"></div><div         class="img_uploaded_card upload_img mr-3 d-flex justify-content-center align-items-center flex-column" data-bs-toggle="modal" data-bs-target="#image_modal"   onclick="current = '+g_currentLinks+'"><i class="font-24 icon-file_upload_1 my-2"></i><span class="text-muted font-12">1:1 Ratio</span></div><input class="d-none" type="file" name="pg_upload_image" accept="image/*"></div></div></div><div class="row"><div class="col-md-6  px-3"><div class="mb-2 d-flex"><span class="mr-2">Title</span> </div><div class="d-flex"><input class="form-control" autocomplete="off" name="title" value="URL" type="text" placeholder="" onkeyup="webLinkTitleChange()"></div></div><div class="col-md-6  px-3"><div class="mb-2 d-flex"><span class="mr-2">Subtitle</span><div class="switchery d-inline"><label class="switch mb-0"><input type="checkbox" name="subtitle_enable"  onchange="checkbox()" data-type="web-links-sub-title"><span class="slider round"></span></label></div></div><div class="d-flex"><input class="form-control" autocomplete="off" name="subtitle" value="Visit for more information"  type="text" placeholder="" onkeyup="webLinkSubTitleChange()"></div></div></div>';

  div.innerHTML = linkHtml;
    document.getElementById('web_link_container_'+id).appendChild(div);
//    $('#web_link_container_'+id).append(div);





  for(var i = 0; i<document.getElementById('web_link_container_'+id).children.length; i++)
  {


    document.getElementById('web_link_container_'+id).children[i].setAttribute('draggable', 'false');
    if(document.getElementById('web_link_container_'+id).children[i].className.search('myDraggable') < 0){
    document.getElementById('web_link_container_'+id).children[i].className = document.getElementById('web_link_container_'+id).children[i].className + ' myDraggable';      
    }

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
  image: baseURL+"/assets/images/link.png",
  title: "URL",
  subtitle: {
    enabled: "none",
    value: "Visit for more information"
  }
  });



  document.getElementById("qr_page_prev").children[0].remove();
  showMobileIframe(templateNo);


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
    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);
  });  
}

