
//profile
function changeName(){
  var component = event.target;
  while(component.id.search('component_') < 0){
    component = component.parentNode;
  }

  var pIndex = Array.from(component.parentNode.children).indexOf(component);  
  chimpData[pIndex].value.name = event.target.value;

}

function changeTitle(){
  var component = event.target;
  while(component.id.search('component_') < 0){
    component = component.parentNode;
  }

  var pIndex = Array.from(component.parentNode.children).indexOf(component);  
  chimpData[pIndex].value.title = event.target.value;

}

function changeCompany(){
  var component = event.target;
  while(component.id.search('component_') < 0){
    component = component.parentNode;
  }

  var pIndex = Array.from(component.parentNode.children).indexOf(component);  
  chimpData[pIndex].value.company = event.target.value;

}

$('.shortcuts').change(function() {

  var child = event.target.parentNode.parentNode.parentNode;
  var parent = child.parentNode;

  var index = Array.from(parent.children).indexOf(child);

  var component = event.target;
  while(component.id.search('component_') < 0){
    component = component.parentNode;
  }

  var pIndex = Array.from(component.parentNode.children).indexOf(component);


  chimpData[pIndex].value.contacts.info[index].value = event.target.value; 

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

}

function changeContacts() {

  if (event.target.parentNode.className.search('changable1') >= 0) {

    for (var i = 0; i < 11; i++) {

      if (contact1[i][1] == event.target.innerHTML) {

        event.target.parentNode.nextElementSibling.innerHTML = event.target.innerHTML +
          '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;';
          g_currentSocial++;
          if(i == 0){//3 facebook
        event.target.parentNode.parentNode.parentNode.parentNode.children[3].children[0].children[1].innerHTML='<div class="img_uploaded_card selected_img mr-3 facebook_img img_'+g_currentSocial+'" style="background-image: url(&quot;/images/facebook.png&quot;);"></div><div class="img_uploaded_card upload_img mr-3 d-flex justify-content-center align-items-center flex-column" data-bs-toggle="modal" data-bs-target="#image_modal" onclick="current = '+g_currentSocial+'"><i class="font-24 icon-file_upload_1 my-2"></i></div><input class="d-none" type="file" name="pg_upload_image" accept="image/*">';
          }else if(i == 1){//4 instagram
        event.target.parentNode.parentNode.parentNode.parentNode.children[3].children[0].children[1].innerHTML='<div class="img_uploaded_card selected_img mr-3  instagram_img img_'+g_currentSocial+'" style="background-image: url(&quot;/images/instagram.png&quot;);"></div><div class="img_uploaded_card upload_img mr-3 d-flex justify-content-center align-items-center flex-column" data-bs-toggle="modal" data-bs-target="#image_modal" onclick="current = '+g_currentSocial+'"><i class="font-24 icon-file_upload_1 my-2"></i></div><input class="d-none" type="file" name="pg_upload_image" accept="image/*">';
          }else if(i == 2){//5 twitter 
        event.target.parentNode.parentNode.parentNode.parentNode.children[3].children[0].children[1].innerHTML='<div class="img_uploaded_card selected_img mr-3  twitter_img img_'+g_currentSocial+'" style="background-image: url(&quot;/images/twitter.png&quot;);"></div><div class="img_uploaded_card upload_img mr-3 d-flex justify-content-center align-items-center flex-column" data-bs-toggle="modal" data-bs-target="#image_modal" onclick="current = '+g_currentSocial+'"><i class="font-24 icon-file_upload_1 my-2"></i></div><input class="d-none" type="file" name="pg_upload_image" accept="image/*">';
          }else if(i == 3){//6 linkedin
        event.target.parentNode.parentNode.parentNode.parentNode.children[3].children[0].children[1].innerHTML='<div class="img_uploaded_card selected_img mr-3  linkedin_img img_'+g_currentSocial+'" style="background-image: url(&quot;/images/linkedin.png&quot;);"></div><div class="img_uploaded_card upload_img mr-3 d-flex justify-content-center align-items-center flex-column" data-bs-toggle="modal" data-bs-target="#image_modal" onclick="current = '+g_currentSocial+'"><i class="font-24 icon-file_upload_1 my-2"></i></div><input class="d-none" type="file" name="pg_upload_image" accept="image/*">';
          }else if(i == 4){//7 skype
        event.target.parentNode.parentNode.parentNode.parentNode.children[3].children[0].children[1].innerHTML='<div class="img_uploaded_card selected_img mr-3  skype_img  img_'+g_currentSocial+'" style="background-image: url(&quot;/images/skype.jpg&quot;);"></div><div class="img_uploaded_card upload_img mr-3 d-flex justify-content-center align-items-center flex-column" data-bs-toggle="modal" data-bs-target="#image_modal" onclick="current = '+g_currentSocial+'"><i class="font-24 icon-file_upload_1 my-2"></i></div><input class="d-none" type="file" name="pg_upload_image" accept="image/*">';
          }else if(i == 5){//8 behance
        event.target.parentNode.parentNode.parentNode.parentNode.children[3].children[0].children[1].innerHTML='<div class="img_uploaded_card selected_img mr-3  behance_img img_'+g_currentSocial+'" style="background-image: url(&quot;/images/behance.jpg&quot;);"></div><div class="img_uploaded_card upload_img mr-3 d-flex justify-content-center align-items-center flex-column" data-bs-toggle="modal" data-bs-target="#image_modal" onclick="current = '+g_currentSocial+'"><i class="font-24 icon-file_upload_1 my-2"></i></div><input class="d-none" type="file" name="pg_upload_image" accept="image/*">';
          }else if(i == 6){//9 youtube
        event.target.parentNode.parentNode.parentNode.parentNode.children[3].children[0].children[1].innerHTML='<div class="img_uploaded_card selected_img mr-3  youtube_img img_'+g_currentSocial+'" style="background-image: url(&quot;/images/youtube.png&quot;);"></div><div class="img_uploaded_card upload_img mr-3 d-flex justify-content-center align-items-center flex-column" data-bs-toggle="modal" data-bs-target="#image_modal" onclick="current = '+g_currentSocial+'"><i class="font-24 icon-file_upload_1 my-2"></i></div><input class="d-none" type="file" name="pg_upload_image" accept="image/*">';
          }else if(i == 7){//10 whatsapp
        event.target.parentNode.parentNode.parentNode.parentNode.children[3].children[0].children[1].innerHTML='<div class="img_uploaded_card selected_img mr-3  whatsapp_img img_'+g_currentSocial+'" style="background-image: url(&quot;/images/whatsapp.png&quot;);"></div><div class="img_uploaded_card upload_img mr-3 d-flex justify-content-center align-items-center flex-column" data-bs-toggle="modal" data-bs-target="#image_modal" onclick="current = '+g_currentSocial+'"><i class="font-24 icon-file_upload_1 my-2"></i></div><input class="d-none" type="file" name="pg_upload_image" accept="image/*">';
          }else if(i == 8){//11 email
        event.target.parentNode.parentNode.parentNode.parentNode.children[3].children[0].children[1].innerHTML='<div class="img_uploaded_card selected_img mr-3  email_img img_'+g_currentSocial+'" style="background-image: url(&quot;/images/email.png&quot;);"></div><div class="img_uploaded_card upload_img mr-3 d-flex justify-content-center align-items-center flex-column" data-bs-toggle="modal" data-bs-target="#image_modal" onclick="current = '+g_currentSocial+'"><i class="font-24 icon-file_upload_1 my-2"></i></div><input class="d-none" type="file" name="pg_upload_image" accept="image/*">';
          }else if(i == 9){//12 telegram
        event.target.parentNode.parentNode.parentNode.parentNode.children[3].children[0].children[1].innerHTML='<div class="img_uploaded_card selected_img mr-3  telegram_img img_'+g_currentSocial+'" style="background-image: url(&quot;/images/telegram.jpg&quot;);"></div><div class="img_uploaded_card upload_img mr-3 d-flex justify-content-center align-items-center flex-column" data-bs-toggle="modal" data-bs-target="#image_modal" onclick="current = '+g_currentSocial+'"><i class="font-24 icon-file_upload_1 my-2"></i></div><input class="d-none" type="file" name="pg_upload_image" accept="image/*">';
          }else if(i == 10){//13 tiktok
        event.target.parentNode.parentNode.parentNode.parentNode.children[3].children[0].children[1].innerHTML='<div class="img_uploaded_card selected_img mr-3  tiktok_img img_'+g_currentSocial+'" style="background-image: url(&quot;/images/tiktok.jpg&quot;);"></div><div class="img_uploaded_card upload_img mr-3 d-flex justify-content-center align-items-center flex-column" data-bs-toggle="modal" data-bs-target="#image_modal" onclick="current = '+g_currentSocial+'"><i class="font-24 icon-file_upload_1 my-2"></i></div><input class="d-none" type="file" name="pg_upload_image" accept="image/*">';
          }

        event.target.parentNode.parentNode.nextElementSibling.setAttribute('placeholder', contact1[i][1]);

        var child = event.target.parentNode.parentNode.parentNode.parentNode;
        var parent = child.parentNode;
        Array.from(parent.children).indexOf(child);
        var index = Array.from(parent.children).indexOf(child);
        socialLinksState.links[index] = {
          type: contact1[i][0],
          url: contact1[i][0] + ":",
          logo: "/images/" + contact1[i][2],
          title: contact1[i][0],
          subtitle: {
            enabled: "none",
            value: contact1[i][1]
          }
        };

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

        break;
      }
    }
  }
}

