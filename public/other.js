

function otherTitleChange(){
    var component = event.target;
    while(component.id.search('component_') < 0){
      component = component.parentNode;
    }    
    var pIndex = Array.from(component.parentNode.children).indexOf(component);


    chimpData[pIndex].value.header.title = event.target.value;

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);
}

function otherDescriptionChange(){
    var component = event.target;
    while(component.id.search('component_') < 0){
      component = component.parentNode;
    }    
    var pIndex = Array.from(component.parentNode.children).indexOf(component);


    chimpData[pIndex].value.header.description = event.target.value;

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);
}

function otherSubKeyChange(){
    var component = event.target;
    while(component.id.search('component_') < 0){
      component = component.parentNode;
    }    
    var pIndex = Array.from(component.parentNode.children).indexOf(component);

    component = event.target;
    while(component.id.search('sub_comp_') < 0){
      component = component.parentNode;
    }    
    index = Array.from(component.parentNode.children).indexOf(component);

    chimpData[pIndex].value.customItems[index].key = event.target.value;

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);
}

function otherSubValueChange(){
    var component = event.target;
    while(component.id.search('component_') < 0){
      component = component.parentNode;
    }    
    var pIndex = Array.from(component.parentNode.children).indexOf(component);

    component = event.target;
    while(component.id.search('sub_comp_') < 0)
    {

      component = component.parentNode;
    }

    index = Array.from(component.parentNode.children).indexOf(component);

    chimpData[pIndex].value.customItems[index].value = event.target.value;
    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);
}

function addCustomField(id){
    var addElement = document.createElement('div');
    g_subcomponentIndex++;
    addElement.id= 'sub_comp_' + g_subcomponentIndex;
    addElement.setAttribute('draggable', 'false');
    addElement.setAttribute('ondragstart', 'drag\(event\)');
    addElement.setAttribute('ondrop', 'drop\(event\)');
    addElement.setAttribute('ondragover', 'allowDrop\(event\)');

  addElement.className = 'row mx-0 list-group mt-3 draggable';

  addElement.innerHTML = '<div class="list-group-item custom_field_input_wrapper subcomponent_sortable_wrapper mb-4"><div class="action_buttons"><a class="btn btn_delete_pro_card" onclick="customFieldDelete(event)"><i class="text-danger icon-delete_1"></i></a><a class="btn handle-custom-field"   onmousedown="onDragSubComponent()" onmouseup="offDragSubComponent()"><i class="icon-drag_1"></i></a></div><div class=""></div><div class="row"><div class="col-md-6  px-3"><div class="mb-2 d-flex"><span class="mr-2"></span> </div><div class="d-flex"><input class="form-control" autocomplete="off" name="key" value="Key" type="text" placeholder="" onkeyup="otherSubKeyChange()"></div></div><div class="col-md-6  px-3"><div class="mb-2 d-flex"><span class="mr-2"></span> </div><div class="d-flex"><input class="form-control" autocomplete="off" name="val" value="Value" type="text" placeholder="" onkeyup="otherSubValueChange()"></div></div></div>';

    document.getElementById('custom_field_container_' + id).appendChild(addElement);


        var component = event.target;
        while(component.id.search('component_') < 0){
          component = component.parentNode;
        }   

        var pIndex = Array.from(component.parentNode.children).indexOf(component);

        chimpData[pIndex].value.customItems.push({key:'key', value:'value'});

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);
}

function customFieldDelete(e){
   $('#delModal').modal('show');
  var obj;
  var parent;

  if (e.target.tagName == 'I') {
    var obj = e.target.parentNode.parentNode.parentNode;

    var parent = obj.parentNode;
  } else if (e.target.tagName == 'A') {
    var obj = e.target.parentNode.parentNode;

    var parent = obj.parentNode;
  }


  var index = Array.from(parent.children).indexOf(obj);

  var flag = 0;
  $(".del-btn").click(function() {
    if (flag === 0) flag = 1
    else return;


    var component = parent;
    while(component.id.search('component_') < 0){
      component = component.parentNode;
    }    
    var pIndex = Array.from(component.parentNode.children).indexOf(component);
    var temp = chimpData[pIndex];

    temp.value.customItems.splice(index, 1);
    chimpData[pIndex] = temp;



    obj.remove();
    $('#delModal').modal('hide');

    
    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);
  });  
}