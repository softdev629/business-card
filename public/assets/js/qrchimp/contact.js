
//contact
function contactUsTitleChange(){
  var component = event.target;
  while(component.id.search('component_') < 0){
    component = component.parentNode;
  }

  var pIndex = Array.from(component.parentNode.children).indexOf(component);  

  chimpData[pIndex].value.title = event.target.value;

}

function changeNumber(){
    var child = event.target.parentNode.parentNode.parentNode.parentNode;
    var parent = child.parentNode;
    var index = Array.from(parent.children).indexOf(child);
  
    var component = event.target;
    while(component.id.search('component_') < 0){
      component = component.parentNode;
    }

    var pIndex = Array.from(component.parentNode.children).indexOf(component);  


    if(event.target.name == 'number'){
        chimpData[pIndex].value.contactItems[index].data.value = event.target.value;
    }
    else if(event.target.name == 'title'){
        chimpData[pIndex].value.contactItems[index].data.label = event.target.value;
    }

}

function changeEmail(){
    var child = event.target.parentNode.parentNode.parentNode.parentNode;
    var parent = child.parentNode;
    var index = Array.from(parent.children).indexOf(child);

    var component = event.target;
    while(component.id.search('component_') < 0){
      component = component.parentNode;
    }

    var pIndex = Array.from(component.parentNode.children).indexOf(component);  

    if(event.target.name == 'email'){
        chimpData[pIndex].value.contactItems[index].data.value = event.target.value;
    }
    else if(event.target.name == 'title'){
        chimpData[pIndex].value.contactItems[index].data.label = event.target.value;      
    }
}

function changeAddress(){
    var child = event.target.parentNode.parentNode.parentNode.parentNode;
    var parent = child.parentNode;
    var index = Array.from(parent.children).indexOf(child);

    var component = event.target;
    while(component.id.search('component_') < 0){
      component = component.parentNode;
    }

    var pIndex = Array.from(component.parentNode.children).indexOf(component);  

    if(event.target.name == 'title'){
        chimpData[pIndex].value.contactItems[index].data.label = event.target.value;
    }
    else if(event.target.name == 'street' || event.target.name == 'building' || event.target.name == 'city' || event.target.name == 'state' || event.target.name == 'country'){
        chimpData[pIndex].value.contactItems[index].data.value = document.getElementsByName('street')[0].value + '<br>' + document.getElementsByName('building')[0].value + '<br>' + document.getElementsByName('city')[0].value + '<br>' + document.getElementsByName('state')[0].value + '<br>' + document.getElementsByName('country')[0].value;
    }

}

function contact_del(event){
  $('#delModal1').modal('show');
  var obj;
  var parent;

  if (event.target.tagName == 'A') {
    obj = event.target.parentElement.parentElement.parentElement;
    parent = obj.parentElement;
  } else if (event.target.tagName == 'I') {
    obj = event.target.parentElement.parentElement.parentElement.parentElement;
    parent = obj.parentElement;
  }
  var index = Array.from(parent.children).indexOf(obj);


  var flag = 0;
  $(".del-btn1").click(function(d) {
    if (flag === 0) flag = 1
    else return;

    //get pIndex
    var component = parent;
    while(component.id.search('component_') < 0){
      component = component.parentNode;
    }    
    var pIndex = Array.from(component.parentNode.children).indexOf(component);
    var temp = chimpData[pIndex];
    temp.value.contactItems.splice(index, 1);
    chimpData[pIndex] = temp;

    obj.remove();

    $('#delModal1').modal('hide');
  });  
} 

$(".tab-two a").click(function() {

  let type = event.target.getAttribute('data-type');
  //get pIndex
  var component = event.target;

  while(component.id.search('component_') < 0){
    component = component.parentNode;
  }   

  var pIndex = Array.from(component.parentNode.children).indexOf(component);

  let addHtml = "";
  if (type == 'number') {
  //push


    chimpData[pIndex].value.contactItems.push({
      type: "Contact Number",
      data: {
        label: "Call Us",
        value: "1234567890"
      }
    });

      var numberAddHtml = document.getElementById('contact_info_container_4').children[0].outerHTML;

      addHtml = numberAddHtml;
    // document.getElementById("qr_page_prev").children[0].remove();
    // showMobileIframe(templateNo);
  } else if (type == 'email') {
    chimpData[pIndex].value.contactItems.push({
      type: "Email",
      data: {
        label: "Email",
        value: "contactme@domain.com"
      }
    });
      var emailAddHtml = document.getElementById('contact_info_container_4').children[1].outerHTML;
      addHtml = emailAddHtml;
    // document.getElementById("qr_page_prev").children[0].remove();
    // showMobileIframe(templateNo);

  } else if (type == 'address') {
    chimpData[pIndex].value.contactItems.push({
       type: "Address",
        data: {
          label: "Address",
          value: "street<br>building<br>city,state<br>country"
        },
        actionButton: {
          enabled: "block",
          text: "Direction"
        }
    });

    var addressAddHtml = document.getElementById('contact_info_container_4').children[2].outerHTML;
      addHtml = addressAddHtml;

  }

  $('#contact_info_container_4').append(addHtml);
  for(var i = 0; i< document.getElementById('contact_info_container_4').children.length; i++)
  {
    g_subcomponentIndex++;
    document.getElementById('contact_info_container_4').children[i].id = 'sub_comp_'+g_subcomponentIndex;
    document.getElementById('contact_info_container_4').children[i].setAttribute('draggable', 'true');
    document.getElementById('contact_info_container_4').children[i].setAttribute('ondragstart', 'drag(event)');
    document.getElementById('contact_info_container_4').children[i].setAttribute('ondrop', 'drop(event)');
    document.getElementById('contact_info_container_4').children[i].setAttribute('ondragover', 'allowDrop(event)');
  }
});


