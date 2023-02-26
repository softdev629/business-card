
//other
function addCustomField(id){
    var addElement = document.createElement('div');
    g_subcomponentIndex++;
    addElement.id= 'sub_comp_' + g_subcomponentIndex;
    addElement.setAttribute('draggable', 'true');
    addElement.setAttribute('ondragstart', 'drag(event)');
    addElement.setAttribute('ondrop', 'drop(event)');
    addElement.setAttribute('ondragover', 'allowDrop(event)');
  addElement.className = 'row mx-0 list-group mt-3';
  addElement.innerHTML = '<div class="list-group-item custom_field_input_wrapper subcomponent_sortable_wrapper mb-4"><div class="action_buttons"><a class="btn btn_delete_pro_card" onclick="customFieldDelete(event)"><i class="text-danger icon-delete_1"></i></a><a class="btn handle-custom-field"><i class="icon-drag_1"></i></a></div><div class=""></div><div class="row"><div class="col-md-6  px-3"><div class="mb-2 d-flex"><span class="mr-2"></span> </div><div class="d-flex"><input class="form-control" autocomplete="off" name="key" value="Key" type="text" placeholder=""></div></div><div class="col-md-6  px-3"><div class="mb-2 d-flex"><span class="mr-2"></span> </div><div class="d-flex"><input class="form-control" autocomplete="off" name="val" value="Value" type="text" placeholder=""></div></div></div>';
    document.getElementById('custom_field_container_' + id).appendChild(addElement);

        //get pIndex
        var component = event.target;
        while(component.id.search('component_') < 0){
          component = component.parentNode;
        }   

        var pIndex = Array.from(component.parentNode.children).indexOf(component);
        //push
        chimpData[pIndex].value.customItems.push({key:'', value:''});

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

    //get pIndex
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

  });  
}
