

function contactUsTitleChange(){
  var component = event.target;
  while(component.id.search('component_') < 0){
    component = component.parentNode;
  }

  var pIndex = Array.from(component.parentNode.children).indexOf(component);  

  chimpData[pIndex].value.title = event.target.value;

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);
}

function floatingButtonTextChange(){
  var component = event.target;
  while(component.id.search('component_') < 0){
    component = component.parentNode;
  }

  var pIndex = Array.from(component.parentNode.children).indexOf(component);  

  chimpData[pIndex].value.floatingButton.text = event.target.value;

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);  
}

function changeContactActionButtonText()
{
    var child = event.target.parentNode.parentNode.parentNode.parentNode;
    var parent = child.parentNode;
    var index = Array.from(parent.children).indexOf(child);
  
    var component = event.target;
    while(component.id.search('component_') < 0){
      component = component.parentNode;
    }

    var pIndex = Array.from(component.parentNode.children).indexOf(component);  

    chimpData[pIndex].value.contactItems[index].actionButton.text = event.target.value;

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);    
}

function changeContactLabel(){
    var child = event.target.parentNode.parentNode.parentNode.parentNode;
    var parent = child.parentNode;
    var index = Array.from(parent.children).indexOf(child);
  
    var component = event.target;
    while(component.id.search('component_') < 0){
      component = component.parentNode;
    }

    var pIndex = Array.from(component.parentNode.children).indexOf(component);  

    chimpData[pIndex].value.contactItems[index].data.label = event.target.value;

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);  
}

function changeContactValue(){
    var child = event.target.parentNode.parentNode.parentNode.parentNode;
    var parent = child.parentNode;
    var index = Array.from(parent.children).indexOf(child);
  
    var component = event.target;
    while(component.id.search('component_') < 0){
      component = component.parentNode;
    }

    var pIndex = Array.from(component.parentNode.children).indexOf(component);  

    chimpData[pIndex].value.contactItems[index].data.value = event.target.value;

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);  
}

function changeContactAddress1(){
    var child = event.target.parentNode.parentNode.parentNode.parentNode;
    var parent = child.parentNode;
    var index = Array.from(parent.children).indexOf(child);
  
    var component = event.target;
    while(component.id.search('component_') < 0){
      component = component.parentNode;
    }

    var pIndex = Array.from(component.parentNode.children).indexOf(component);  

    chimpData[pIndex].value.contactItems[index].data.addressLine1 = event.target.value;

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);  
}

function changeContactAddress2(){
    var child = event.target.parentNode.parentNode.parentNode.parentNode;
    var parent = child.parentNode;
    var index = Array.from(parent.children).indexOf(child);
  
    var component = event.target;
    while(component.id.search('component_') < 0){
      component = component.parentNode;
    }

    var pIndex = Array.from(component.parentNode.children).indexOf(component);  

    chimpData[pIndex].value.contactItems[index].data.addressLine2 = event.target.value;

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);  
}

function  changeContactCity(){
    var child = event.target.parentNode.parentNode.parentNode.parentNode;
    var parent = child.parentNode;
    var index = Array.from(parent.children).indexOf(child);
  
    var component = event.target;
    while(component.id.search('component_') < 0){
      component = component.parentNode;
    }

    var pIndex = Array.from(component.parentNode.children).indexOf(component);  

    chimpData[pIndex].value.contactItems[index].data.city = event.target.value;

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);  
}

function changeContactState(){
    var child = event.target.parentNode.parentNode.parentNode.parentNode;
    var parent = child.parentNode;
    var index = Array.from(parent.children).indexOf(child);
  
    var component = event.target;
    while(component.id.search('component_') < 0){
      component = component.parentNode;
    }

    var pIndex = Array.from(component.parentNode.children).indexOf(component);  

    chimpData[pIndex].value.contactItems[index].data.state = event.target.value;

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);  
}

function changeContactCountry(){
    var child = event.target.parentNode.parentNode.parentNode.parentNode;
    var parent = child.parentNode;
    var index = Array.from(parent.children).indexOf(child);
  
    var component = event.target;
    while(component.id.search('component_') < 0){
      component = component.parentNode;
    }

    var pIndex = Array.from(component.parentNode.children).indexOf(component);  

    chimpData[pIndex].value.contactItems[index].data.country = event.target.value;

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);  
}

function changeContactZipcode(){
    var child = event.target.parentNode.parentNode.parentNode.parentNode;
    var parent = child.parentNode;
    var index = Array.from(parent.children).indexOf(child);
  
    var component = event.target;
    while(component.id.search('component_') < 0){
      component = component.parentNode;
    }

    var pIndex = Array.from(component.parentNode.children).indexOf(component);  

    chimpData[pIndex].value.contactItems[index].data.zipcode = event.target.value;

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);  
}

function changeContactUrl(){
    var child = event.target.parentNode.parentNode.parentNode.parentNode;
    var parent = child.parentNode;
    var index = Array.from(parent.children).indexOf(child);
  
    var component = event.target;
    while(component.id.search('component_') < 0){
      component = component.parentNode;
    }

    var pIndex = Array.from(component.parentNode.children).indexOf(component);  

    chimpData[pIndex].value.contactItems[index].actionButton.url = event.target.value;

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);  
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
    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);
  });  
} 

$(".tab-two a").click(function() {

  let type = event.target.getAttribute('data-type');

  var component = event.target;

  while(component.id.search('component_') < 0){
    component = component.parentNode;
  }   

  var pIndex = Array.from(component.parentNode.children).indexOf(component);

  let addHtml = "";
  if (type == 'number') {



    chimpData[pIndex].value.contactItems.push({
      type: "Contact Number",
      data: {
        label: "Call Us",
        value: "1234567890",
        addressLine1:"",
        addressLine2:"",
        city:"",
        state:"",
        country:"",
        zipcode:""
      },actionButton: {
    enabled: "none",
    text: ""
    }
    });

      

      addHtml = numberAddHtml;
    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);
  } else if (type == 'email') {
    chimpData[pIndex].value.contactItems.push({
      type: "Email",
      data: {
        label: "Email",
        value: "contactme@domain.com",
        addressLine1:"",
        addressLine2:"",
        city:"",
        state:"",
        country:"",
        zipcode:""
      },actionButton: {
    enabled: "none",
    text: "",
    url:"#"
    }
    });

      addHtml = emailAddHtml;
    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);

  } else if (type == 'address') {
    chimpData[pIndex].value.contactItems.push({
      type: "Address",
      data: {
        label: "Address",
        value: "",
        addressLine1:"Street",
        addressLine2:"Building",
        city:"City",
        state:"State",
        country:"Country",
        zipcode:""
      },actionButton: {
    enabled: "block",
    text: "Direction",
    url:"#"
    }
    });


      addHtml = addressAddHtml;
    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);
  }

  $('#contact_info_container_4').append(addHtml);
  for(var i = 0; i< document.getElementById('contact_info_container_4').children.length; i++)
  {
    g_subcomponentIndex++;
    document.getElementById('contact_info_container_4').children[i].id = 'sub_comp_'+g_subcomponentIndex;
    document.getElementById('contact_info_container_4').children[i].setAttribute('draggable', 'false');
    document.getElementById('contact_info_container_4').children[i].className =     document.getElementById('contact_info_container_4').children[i].className + ' draggable';
    document.getElementById('contact_info_container_4').children[i].setAttribute('ondragstart', 'drag(event)');
    document.getElementById('contact_info_container_4').children[i].setAttribute('ondrop', 'drop(event)');
    document.getElementById('contact_info_container_4').children[i].setAttribute('ondragover', 'allowDrop(event)');
  }
});


