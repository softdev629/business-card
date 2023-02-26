



function socialSubComTitleChange(){
    var index;
    component = event.target;
    while(component.id.search('sub_comp_') < 0)
    {

      component = component.parentNode;
    }

    index = Array.from(component.parentNode.children).indexOf(component);

  var component = event.target;
  while(component.id.search('component_') < 0){
    component = component.parentNode;
  }

  var pIndex = Array.from(component.parentNode.children).indexOf(component);

  chimpData[pIndex].value.links[index].title = event.target.value;

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);
}

function socialSubComSubTitleChange(){
    var index;
    component = event.target;
    while(component.id.search('sub_comp_') < 0)
    {

      component = component.parentNode;
    }

    index = Array.from(component.parentNode.children).indexOf(component);

  var component = event.target;
  while(component.id.search('component_') < 0){
    component = component.parentNode;
  }

  var pIndex = Array.from(component.parentNode.children).indexOf(component);

  chimpData[pIndex].value.links[index].subtitle.value = event.target.value;

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);  
}

function socialLinkChange() {
  var index;
  var child = event.target.parentNode.parentNode;
  var parent = child.parentNode;
  index = Array.from(parent.children).indexOf(child);

  var component = event.target;
  while(component.id.search('component_') < 0){
    component = component.parentNode;
  }

  var pIndex = Array.from(component.parentNode.children).indexOf(component);

  chimpData[pIndex].value.links[index].url = event.target.value;

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);
}

function socialTitleChange()
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

function socialDescriptionChange()
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

function socialAdd(id) {

  var socialLinkHtml='<div><div class="action_buttons"><a class="btn btn_delete_pro_card" onclick="socialLinkDel()"><i class="text-danger icon-delete_1"></i></a><a class="btn handle-social-link" onmousedown="onDragSubComponent()" onmouseup="offDragSubComponent()"><i class="icon-drag_1"></i></a></div></div><div class=""></div><div class="input-group my-3"><div class="dropdown"><ul class=" dropdown-menu changable1"><li class="dropdown-item" onclick="changeContacts()" value="facebook">Facebook</li><li class="dropdown-item" onclick="changeContacts()" value="instagram">Instagram</li><li class="dropdown-item" onclick="changeContacts()" value="linkedin">LinkedIn</li><li class="dropdown-item" onclick="changeContacts()" value="twitter">Twitter</li><li class="dropdown-item" onclick="changeContacts()" value="skype">Skype</li><li class="dropdown-item" onclick="changeContacts()" value="behance">Behance</li><li class="dropdown-item" onclick="changeContacts()" value="youtube">YouTube</li><li class="dropdown-item" onclick="changeContacts()" value="whatsapp">Whatsapp</li><li class="dropdown-item" onclick="changeContacts()" value="email">Email</li><li class="dropdown-item" onclick="changeContacts()" value="telegram">Telegram</li><li class="dropdown-item" onclick="changeContacts()" value="tiktok">TikTok</li></ul><button class="btn-default1 dropdown-toggle" data-bs-toggle="dropdown">Facebook&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button></div><input type="text" class="form-control" name="url" onkeyup="socialLinkChange()" value="" placeholder="URL"></div><div class="row"><div class="col-md-12 px-3 mb-3"><div class="mb-2"> </div><div class="d-flex img_upload_card_wrapper"><div class="img_uploaded_card selected_img mr-3  img_'+g_currentSocial +'" style="background-image:url(\''+baseURL+'/images/facebook.png\')"></div><div class="img_uploaded_card upload_img mr-3 d-flex justify-content-center align-items-center flex-column" data-bs-toggle="modal" data-bs-target="#image_modal" onclick="current = '+g_currentSocial +'"><i class="font-24 icon-file_upload_1 my-2"></i></div><input class="d-none" type="file" name="pg_upload_image" accept="image/*"></div></div></div><div class="row"><div class="col-md-6  px-3"><div class="mb-2 d-flex"><span class="mr-2">Title</span> </div><div class="d-flex"><input class="form-control" autocomplete="off" name="title" value="Title" type="text" placeholder="" onkeyup="socialSubComTitleChange()"></div></div><div class="col-md-6  px-3"><div class="mb-2 d-flex"><span class="mr-2">Subtitle</span><div class="switchery d-inline"><label class="switch mb-0"><input type="checkbox" name="subtitle_enable" data-type="socialLinksSubTitle" onchange="checkbox()"><span class="slider round"></span></label></div></div><div class="d-flex"><input class="form-control" autocomplete="off" name="subtitle" value="Like us on Facebook"  onkeyup="socialSubComSubTitleChange()" type="text" placeholder=""></div></div></div>';


  g_currentSocial++;
  g_subcomponentIndex++;
var div = document.createElement('div');
div.id ='sub_comp_'+g_subcomponentIndex;
div.className = 'list-group-item social_link_input_wrapper subcomponent_sortable_wrapper mb-4';
div.setAttribute('draggable', 'false');
div.setAttribute('ondragstart', 'drag(event)');
div.setAttribute('ondrop', 'drop(event)');
div.setAttribute('ondragover', 'allowDrop(event)');

  div.innerHTML = socialLinkHtml;
  document.getElementById('social_link_container_'+id).appendChild(div);


  for(var i=0; i<document.getElementById('social_link_container_'+id).children.length; i++)
  { 
    document.getElementById('social_link_container_'+id).children[i].setAttribute('draggable', 'false');
    if(document.getElementById('social_link_container_'+id).children[i].className.search('myDraggable') < 0)
    {
    document.getElementById('social_link_container_'+id).children[i].className = document.getElementById('social_link_container_'+id).children[i].className + ' myDraggable';      
    }

    document.getElementById('social_link_container_'+id).children[i].setAttribute('ondragstart', 'drag(event)');
    document.getElementById('social_link_container_'+id).children[i].setAttribute('ondrop', 'drop(event)');
    document.getElementById('social_link_container_'+id).children[i].setAttribute('ondragover', 'allowDrop(event)');
  }


    var component = event.target;
    while(component.id.search('component_') < 0){
      component = component.parentNode;
    }   

    var pIndex = Array.from(component.parentNode.children).indexOf(component);


  chimpData[pIndex].value.links.push({
    type: "Facebook",
    url: "",
    logo: baseURL+"/images/facebook.png",
    title: "Facebook",
    subtitle: {
      enabled: "none",
      value: "Like us on Facebook"
    }
  });


  document.getElementById("qr_page_prev").children[0].remove();
  showMobileIframe(templateNo);
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


    var component = parent;
    while(component.id.search('component_') < 0){
      component = component.parentNode;
    }    
    var pIndex = Array.from(component.parentNode.children).indexOf(component);
    var temp = chimpData[pIndex];
    temp.value.links.splice(index, 1);
    chimpData[pIndex] = temp;



    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);
    obj.remove();
    $('#delModal').modal('hide');
  });
}