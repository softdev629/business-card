

function changeName(){
  var component = event.target;
  while(component.id.search('component_') < 0){
    component = component.parentNode;
  }

  var pIndex = Array.from(component.parentNode.children).indexOf(component);  
  chimpData[pIndex].value.name = event.target.value;

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);
}

function changeTitle(){
  var component = event.target;
  while(component.id.search('component_') < 0){
    component = component.parentNode;
  }

  var pIndex = Array.from(component.parentNode.children).indexOf(component);  
  chimpData[pIndex].value.title = event.target.value;

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);
}

function changeCompany(){
  var component = event.target;
  while(component.id.search('component_') < 0){
    component = component.parentNode;
  }

  var pIndex = Array.from(component.parentNode.children).indexOf(component);  
  chimpData[pIndex].value.company = event.target.value;

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);
}

$('.shortcuts').keyup(function() {

  var child = event.target.parentNode.parentNode.parentNode;
  var parent = child.parentNode;

  var index = Array.from(parent.children).indexOf(child);

  var component = event.target;
  while(component.id.search('component_') < 0){
    component = component.parentNode;
  }

  var pIndex = Array.from(component.parentNode.children).indexOf(component);


  chimpData[pIndex].value.contacts.info[index].value = event.target.value; 

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);
});

function shortcuts() {

  var child = event.target.parentNode.parentNode.parentNode;
  var parent = child.parentNode;

  var index = Array.from(parent.children).indexOf(child);

  var component = event.target;
  while(component.id.search('component_') < 0){
    component = component.parentNode;
  }

  var pIndex = Array.from(component.parentNode.children).indexOf(component);

  chimpData[pIndex].value.contacts.info[index].value = event.target.value; 

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);
}

function changeContacts() {

  if (event.target.parentNode.className.search('changable1') >= 0) {

    for (var i = 0; i < 11; i++) {

      if (contact1[i][1] == event.target.innerHTML) {

        event.target.parentNode.nextElementSibling.innerHTML = event.target.innerHTML +
          '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
          g_currentSocial++;
          if(i == 0){
        event.target.parentNode.parentNode.parentNode.parentNode.children[3].children[0].children[1].innerHTML='<div class="img_uploaded_card selected_img mr-3 facebook_img img_'+g_currentSocial+'" style="background-image: url(&quot;'+baseURL+'/images/facebook.png&quot;);"></div><div class="img_uploaded_card upload_img mr-3 d-flex justify-content-center align-items-center flex-column" data-bs-toggle="modal" data-bs-target="#image_modal" onclick="current = '+g_currentSocial+'"><i class="font-24 icon-file_upload_1 my-2"></i></div><input class="d-none" type="file" name="pg_upload_image" accept="image/*">';
          }else if(i == 1){
        event.target.parentNode.parentNode.parentNode.parentNode.children[3].children[0].children[1].innerHTML='<div class="img_uploaded_card selected_img mr-3  instagram_img img_'+g_currentSocial+'" style="background-image: url(&quot;'+baseURL+'/images/instagram.png&quot;);"></div><div class="img_uploaded_card upload_img mr-3 d-flex justify-content-center align-items-center flex-column" data-bs-toggle="modal" data-bs-target="#image_modal" onclick="current = '+g_currentSocial+'"><i class="font-24 icon-file_upload_1 my-2"></i></div><input class="d-none" type="file" name="pg_upload_image" accept="image/*">';
          }else if(i == 2){
        event.target.parentNode.parentNode.parentNode.parentNode.children[3].children[0].children[1].innerHTML='<div class="img_uploaded_card selected_img mr-3  twitter_img img_'+g_currentSocial+'" style="background-image: url(&quot;'+baseURL+'/images/linkedin.png&quot;);"></div><div class="img_uploaded_card upload_img mr-3 d-flex justify-content-center align-items-center flex-column" data-bs-toggle="modal" data-bs-target="#image_modal" onclick="current = '+g_currentSocial+'"><i class="font-24 icon-file_upload_1 my-2"></i></div><input class="d-none" type="file" name="pg_upload_image" accept="image/*">';
          }else if(i == 3){
        event.target.parentNode.parentNode.parentNode.parentNode.children[3].children[0].children[1].innerHTML='<div class="img_uploaded_card selected_img mr-3  linkedin_img img_'+g_currentSocial+'" style="background-image: url(&quot;'+baseURL+'/images/twitter.png&quot;);"></div><div class="img_uploaded_card upload_img mr-3 d-flex justify-content-center align-items-center flex-column" data-bs-toggle="modal" data-bs-target="#image_modal" onclick="current = '+g_currentSocial+'"><i class="font-24 icon-file_upload_1 my-2"></i></div><input class="d-none" type="file" name="pg_upload_image" accept="image/*">';
          }else if(i == 4){
        event.target.parentNode.parentNode.parentNode.parentNode.children[3].children[0].children[1].innerHTML='<div class="img_uploaded_card selected_img mr-3  skype_img  img_'+g_currentSocial+'" style="background-image: url(&quot;'+baseURL+'/images/skype.jpg&quot;);"></div><div class="img_uploaded_card upload_img mr-3 d-flex justify-content-center align-items-center flex-column" data-bs-toggle="modal" data-bs-target="#image_modal" onclick="current = '+g_currentSocial+'"><i class="font-24 icon-file_upload_1 my-2"></i></div><input class="d-none" type="file" name="pg_upload_image" accept="image/*">';
          }else if(i == 5){
        event.target.parentNode.parentNode.parentNode.parentNode.children[3].children[0].children[1].innerHTML='<div class="img_uploaded_card selected_img mr-3  behance_img img_'+g_currentSocial+'" style="background-image: url(&quot;'+baseURL+'/images/behance.jpg&quot;);"></div><div class="img_uploaded_card upload_img mr-3 d-flex justify-content-center align-items-center flex-column" data-bs-toggle="modal" data-bs-target="#image_modal" onclick="current = '+g_currentSocial+'"><i class="font-24 icon-file_upload_1 my-2"></i></div><input class="d-none" type="file" name="pg_upload_image" accept="image/*">';
          }else if(i == 6){
        event.target.parentNode.parentNode.parentNode.parentNode.children[3].children[0].children[1].innerHTML='<div class="img_uploaded_card selected_img mr-3  youtube_img img_'+g_currentSocial+'" style="background-image: url(&quot;'+baseURL+'/images/youtube.png&quot;);"></div><div class="img_uploaded_card upload_img mr-3 d-flex justify-content-center align-items-center flex-column" data-bs-toggle="modal" data-bs-target="#image_modal" onclick="current = '+g_currentSocial+'"><i class="font-24 icon-file_upload_1 my-2"></i></div><input class="d-none" type="file" name="pg_upload_image" accept="image/*">';
          }else if(i == 7){
        event.target.parentNode.parentNode.parentNode.parentNode.children[3].children[0].children[1].innerHTML='<div class="img_uploaded_card selected_img mr-3  whatsapp_img img_'+g_currentSocial+'" style="background-image: url(&quot;'+baseURL+'/images/whatsapp.png&quot;);"></div><div class="img_uploaded_card upload_img mr-3 d-flex justify-content-center align-items-center flex-column" data-bs-toggle="modal" data-bs-target="#image_modal" onclick="current = '+g_currentSocial+'"><i class="font-24 icon-file_upload_1 my-2"></i></div><input class="d-none" type="file" name="pg_upload_image" accept="image/*">';
          }else if(i == 8){
        event.target.parentNode.parentNode.parentNode.parentNode.children[3].children[0].children[1].innerHTML='<div class="img_uploaded_card selected_img mr-3  email_img img_'+g_currentSocial+'" style="background-image: url(&quot;'+baseURL+'/images/email.png&quot;);"></div><div class="img_uploaded_card upload_img mr-3 d-flex justify-content-center align-items-center flex-column" data-bs-toggle="modal" data-bs-target="#image_modal" onclick="current = '+g_currentSocial+'"><i class="font-24 icon-file_upload_1 my-2"></i></div><input class="d-none" type="file" name="pg_upload_image" accept="image/*">';
          }else if(i == 9){
        event.target.parentNode.parentNode.parentNode.parentNode.children[3].children[0].children[1].innerHTML='<div class="img_uploaded_card selected_img mr-3  telegram_img img_'+g_currentSocial+'" style="background-image: url(&quot;'+baseURL+'/images/telegram.jpg&quot;);"></div><div class="img_uploaded_card upload_img mr-3 d-flex justify-content-center align-items-center flex-column" data-bs-toggle="modal" data-bs-target="#image_modal" onclick="current = '+g_currentSocial+'"><i class="font-24 icon-file_upload_1 my-2"></i></div><input class="d-none" type="file" name="pg_upload_image" accept="image/*">';
          }else if(i == 10){
        event.target.parentNode.parentNode.parentNode.parentNode.children[3].children[0].children[1].innerHTML='<div class="img_uploaded_card selected_img mr-3  tiktok_img img_'+g_currentSocial+'" style="background-image: url(&quot;'+baseURL+'/images/tiktok.jpg&quot;);"></div><div class="img_uploaded_card upload_img mr-3 d-flex justify-content-center align-items-center flex-column" data-bs-toggle="modal" data-bs-target="#image_modal" onclick="current = '+g_currentSocial+'"><i class="font-24 icon-file_upload_1 my-2"></i></div><input class="d-none" type="file" name="pg_upload_image" accept="image/*">';
          }

        event.target.parentNode.parentNode.nextElementSibling.setAttribute('placeholder', contact1[i][1]);

        var child = event.target.parentNode.parentNode.parentNode.parentNode;
        var parent = child.parentNode;
        Array.from(parent.children).indexOf(child);
        var index = Array.from(parent.children).indexOf(child);

        var component = event.target;
        while(component.id.search('component_') < 0){
          component = component.parentNode;
        }

        var pIndex = Array.from(component.parentNode.children).indexOf(component);  



        chimpData[pIndex].value.links[index] = {
          type: contact1[i][0],
          url: contact1[i][0] + ":",
          logo: baseURL+"/images/" + contact1[i][2],
          title: contact1[i][0],
          subtitle: {
            enabled: "none",
            value: contact1[i][1]
          }
        };

        document.getElementById("qr_page_prev").children[0].remove();
        showMobileIframe(templateNo);

        break;
      }
    }
  } else if (event.target.parentNode.className.search('changable') >= 0) {

    for (var i = 0; i < 7; i++) {

      if (contact[i][1] == event.target.innerHTML) {

        event.target.parentNode.nextElementSibling.innerHTML = event.target.innerHTML +
          '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-angle-down"></i>';
        event.target.parentNode.parentNode.nextElementSibling.setAttribute('placeholder', contact[i][2]);
        var child = event.target.parentNode.parentNode.parentNode.parentNode.parentNode;
        var parent = child.parentNode;
        Array.from(parent.children).indexOf(child);
        var index = Array.from(parent.children).indexOf(child);

        var component = event.target;
        while(component.id.search('component_') < 0){
          component = component.parentNode;
        }

        var pIndex = Array.from(component.parentNode.children).indexOf(component);

        chimpData[pIndex].value.contacts.info[index] = {
          type: event.target.innerHTML,
          value: ""
        };

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);
        break;
      }
    }
  }
}


