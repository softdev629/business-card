  


function pro_card_del(e) {
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

    var component = parent;
    while(component.id.search('component_') < 0){
      component = component.parentNode;
    }    
    var pIndex = Array.from(component.parentNode.children).indexOf(component);
    var temp = chimpData[pIndex];
    temp.value.contacts.info.splice(index, 1);
    chimpData[pIndex] = temp;


    obj.remove();
    $('#delModal').modal('hide');

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);
  });
}



function delete_component_card()
{
  $('#delModal1').modal('show');
  var obj;


  if (event.target.tagName == 'A') {
    var obj = event.target.parentElement.parentElement.parentElement;

  } else if (event.target.tagName == 'I') {
    var obj = event.target.parentElement.parentElement.parentElement.parentElement;
  }

  var dataType = obj.getAttribute('data-type');
  var flag = 0;
  $(".del-btn1").click(function(d) {
    if (flag === 0) flag = 1
    else return;

    var index = Array.from(obj.parentNode.children).indexOf(obj);
    obj.remove();
    chimpData.splice(index, 1);

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);
    $('#delModal1').modal('hide');
  });  
}

$('.btn_delete_component_card').click(function() {

  $('#delModal1').modal('show');
  var obj;


  if (event.target.tagName == 'A') {
    var obj = event.target.parentElement.parentElement.parentElement;

  } else if (event.target.tagName == 'I') {
    var obj = event.target.parentElement.parentElement.parentElement.parentElement;
  }

  var dataType = obj.getAttribute('data-type');
  var flag = 0;
  $(".del-btn1").click(function(d) {
    if (flag === 0) flag = 1
    else return;

    var index = Array.from(obj.parentNode.children).indexOf(obj);
    obj.remove();
    chimpData.splice(index, 1);

   document.getElementById("qr_page_prev").children[0].remove();
   showMobileIframe(templateNo);
    $('#delModal1').modal('hide');
  });
});

$(".tab-one a").click(function() {

  let type = event.target.getAttribute('data-type');

  let addHtml = "";
  for (var i = 0; i < 7; i++) {
    if (type == contact[i][0]) {
      g_subcomponentIndex++
      addHtml =
        '<div id="sub_comp_'+g_subcomponentIndex+'" draggable="false" ondragstart="drag(event)"  ondrop="drop(event)" ondragover="allowDrop\(event\)" class="row mx-0 list-group myDraggable"><div class="list-group-item subcomponent_sortable_wrapper contact_shortcut_input_wrapper mb-4"><div class="action_buttons"><a class="btn btn_delete_pro_card" onclick="pro_card_del(event)"><i class="text-danger icon-delete_1"></i></a><a class="btn handle-contact" onmousedown="onDragSubComponent()" onmouseup="offDragSubComponent()"><i class="icon-drag_1"></i></a></div><div class=""></div><div class="input-group my-3"><div class="dropdown"><ul class=" dropdown-menu changable"><li class="dropdown-item" onclick="changeContacts()" value="mobile">Mobile</li><li class="dropdown-item" value="email" onclick="changeContacts()">Email</li><li class="dropdown-item" value="sms" onclick="changeContacts()">SMS</li><li class="dropdown-item" value="location" onclick="changeContacts()">Location</li><li class="dropdown-item" value="whatsapp" onclick="changeContacts()">Whatsapp</li><li class="dropdown-item" value="fax" onclick="changeContacts()">Fax</li><li class="dropdown-item" value="tel" onclick="changeContacts()">Telephone</li></ul><button class="btn-default1 dropdown-toggle" data-bs-toggle="dropdown">' +
        contact[i][1] +
        '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-angle-down"></i></button></div><input type="text" class="form-control shortcuts" onkeyup="shortcuts()" name="value" value="" placeholder="' +
        contact[i][2] + '"></div></div></div>';


        var component = event.target;
        while(component.id.search('component_') < 0){
          component = component.parentNode;
        }   

        var pIndex = Array.from(component.parentNode.children).indexOf(component);

        chimpData[pIndex].value.contacts.info.push({type:contact[i][1], value:''});

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);

      break;
    }
  }

  $('.contact_shortcut_container').append(addHtml);

});

$(document).click(function() {
  if (event.target.id != "btn_add_profile_component") {
    $('#btn_add_profile_component').attr('aria-expanded', 'false');
    $('#btn_add_profile_component').next().removeClass('show');
  }
});




var template1 = ``;

var template2 = ``;

var template3 = ``;



function showMobileIframe(templateNo) {
  const iframe = document.createElement("iframe");
  let contactShortcut=[];
  let imageList=[];
  let socalLinksStateList=[];
  let linkStateList=[];
  let contactUsStateList=[];
  let pdfItemList=[];
  let customItemList=[];


  let imgIndex = 0;


  iframe.className = "landing_page_iframe";

  if (templateNo == 1) {
  for(var i=0; i< chimpData.length; i++)
  {

    if(chimpData[i].type == "profile")
    {
      qrPopUp.avatar = chimpData[i].value.avatar.url;
      qrPopUp.name = chimpData[i].value.name;
      qrPopUp.title = chimpData[i].value.title;
      qrPopUp.company = chimpData[i].value.company;


      var str = '';
      for(var j = 0; j<chimpData[i].value.contacts.info.length; j++)
      {
            if (chimpData[i].value.contacts.info[j].type == "Mobile") {
              str = str +
                '<li class="qr_cc_card"><a rel="nofollow" href="tel:' + chimpData[i].value.contacts.info[j].value +
                '"><i class="fa fa-mobile"></i><span class="icon-email_1"></span></a> </li>';
            } else if (chimpData[i].value.contacts.info[j].type == "Email") {
              str = str +
                '<li class="qr_cc_card"><a rel="nofollow" href="mailto:' + chimpData[i].value.contacts.info[j].value +
                '"><i class="fa fa-envelope-o"></i><span class="icon-email_1"></span></a> </li>';
            } else if (chimpData[i].value.contacts.info[j].type == "SMS") {
              str = str +
                '<li class="qr_cc_card"><a rel="nofollow" href="sms:' + chimpData[i].value.contacts.info[j].value +
                '"><i class="fa fa-file-text-o"></i><span class="icon-email_1"></span></a> </li>';
            } else if (chimpData[i].value.contacts.info[j].type == "Location") {
              str = str +
                '<li class="qr_cc_card"><a rel="nofollow" href="' + chimpData[i].value.contacts.info[j].value +
                '"><i class="fa fa-location-arrow"></i><span class="icon-email_1"></span></a> </li>';
            } else if (chimpData[i].value.contacts.info[j].type == "Whatsapp") {
              str = str +
                '<li class="qr_cc_card"><a rel="nofollow" href="https://wa.me/' + chimpData[i].value.contacts.info[j].value +
                '"><i class="fa fa-whatsapp"></i><span class="icon-email_1"></span></a> </li>';
            } else if (chimpData[i].value.contacts.info[j].type == "Fax") {
              str = str +
                '<li class="qr_cc_card"><a rel="nofollow" href="fax:' + chimpData[i].value.contacts.info[j].value +
                '"><i class="fa fa-fax"></i><span class="icon-email_1"></span></a> </li>';
            } else if (chimpData[i].value.contacts.info[j].type == "Telephone") {
              str = str +
                '<li class="qr_cc_card"><a rel="nofollow" href="tel:' + chimpData[i].value.contacts.info[j].value +
                '"><i class="fa fa-phone"></i><span class="icon-email_1"></span></a> </li>';
            }        
      }
      contactShortcut.push(str);
    }
    else if(chimpData[i].type == "contact")
    {
      var str = '';
      for(var j=0; j<chimpData[i].value.contactItems.length; j++)
      {

        if (chimpData[i].value.enabled == 'block') {
          if(chimpData[i].value.contactItems[j].type == "Contact Number"){
            str = str + '<div class="qrc_contact_info"><div class="qrc_contact_info_title">'+ chimpData[i].value.contactItems[j].data.label +'</div><div class="qrc_contact_number">'+ chimpData[i].value.contactItems[j].data.value +'</div></div>';
          }else if(chimpData[i].value.contactItems[j].type == "Email"){
            str = str + '<div class="qrc_email_info"><div class="qrc_email_info_title">'+ chimpData[i].value.contactItems[j].data.label +'</div><div class="qrc_email_id">'+ chimpData[i].value.contactItems[j].data.value +'</div></div>';
          }else if(chimpData[i].value.contactItems[j].type == "Address"){
            if(chimpData[i].value.contactItems[j].actionButton.enabled == "none")
            {
            str = str + '<div class="qrc_address_info"><div class="qrc_address_info_title">'+ chimpData[i].value.contactItems[j].data.label +'</div><div class="qrc_address_text">'+ chimpData[i].value.contactItems[j].data.addressLine1+'<br>'+chimpData[i].value.contactItems[j].data.addressLine2+'<br>'+chimpData[i].value.contactItems[j].data.city+', '+chimpData[i].value.contactItems[j].data.state+', '+chimpData[i].value.contactItems[j].data.zipcode+'<br>'+chimpData[i].value.contactItems[j].data.country +'</div><a class="qrc_direction_btn" href="'+chimpData[i].value.contactItems[j].actionButton.url+'" target="_blank" style="display:'+chimpData[i].value.contactItems[j].actionButton.enabled+'"><span class="icon-direction_1"></span>'+ chimpData[i].value.contactItems[j].actionButton.text +'</a></div>';
            }
            else
            {
            str = str + '<div class="qrc_address_info"><div class="qrc_address_info_title">'+ chimpData[i].value.contactItems[j].data.label +'</div><div class="qrc_address_text">'+ chimpData[i].value.contactItems[j].data.addressLine1+'<br>'+chimpData[i].value.contactItems[j].data.addressLine2+'<br>'+chimpData[i].value.contactItems[j].data.city+', '+chimpData[i].value.contactItems[j].data.state+', '+chimpData[i].value.contactItems[j].data.zipcode+'<br>'+chimpData[i].value.contactItems[j].data.country +'</div><a class="qrc_direction_btn" href="//#" target="_blank" style=""><span class="icon-direction_1"></span>'+ chimpData[i].value.contactItems[j].actionButton.text +'</a></div>';              
            }


          }
        }        
      }
      contactUsStateList.push(str);
    }
    else if(chimpData[i].type == "images")
    {
      var str = ''; 
      for(var j=0; j<chimpData[i].value.photos.length; j++)
      {
        imgIndex++;
        if (chimpData[i].value.photos[j].state == true) {
          str = str +
            '<li><a rel = "nofollow" data-lightbox = "images-gallery" onclick="imageView()" ><img class = "img-fluid" src = "' + chimpData[i].value.photos[j].url + '" ></a></li>';
        }        
      }
      imageList.push(str);
    }
    else if(chimpData[i].type == "socialLink")
    {
      var str = '';

      for(var j=0; j<chimpData[i].value.links.length; j++)
      {
        if(chimpData[i].value.cardBack == 'none')
        {
          if (j == 0) {

          str =
            '<li class="qr_cc_card" style="background-color:'+settingState.colors.primaryColor+'"><div class="qrc_heading qrc_heading_social_link_1" style="display:' +
            chimpData[i].value
            .headerEnable + ';"><h2>' +chimpData[i].value
            .header.title+ '</h2><p>' + chimpData[i].value
            .header.description +
            '</p></div><a rel="nofollow" href="' + chimpData[i].value.links[j].url + '" target="_blank"><div class="qrc_social_icon" style="background-image:url(\'' + chimpData[i].value.links[j].logo +'\');"></div><div class="qrc_social_text"><div class="qrc_social_text_heading"> ' + chimpData[i].value.links[j].title + '</div><div class="qrc_social_text_discription" style="display:' + chimpData[i].value.links[j].subtitle.enabled + '">' + chimpData[i].value.links[j].subtitle.value + '</div></div><div class = "qrc_social_action"><i class="fa fa-arrow-right"></i></div></a></li>';
        } else {
          str = str +
            '<li class="qr_cc_card" style="background-color:'+settingState.colors.primaryColor+'"><a rel="nofollow" href="' + chimpData[i].value.links[j].url + '" target="_blank"><div class="qrc_social_icon" style="background-image:url(\'' + chimpData[i].value.links[j].logo +'\');"></div><div class="qrc_social_text"><div class="qrc_social_text_heading"> ' + chimpData[i].value.links[j].title + '</div><div class="qrc_social_text_discription" style="display:' + chimpData[i].value.links[j].subtitle.enabled + '">' + chimpData[i].value.links[j].subtitle.value + '</div></div><div class = "qrc_social_action"><i class="fa fa-arrow-right"></i></div></a></li>';
        } 

        }
        else
        {

          if (j == 0) {

          str =
            '<li class="qr_cc_card"><div class="qrc_heading qrc_heading_social_link_1" style="display:' +
            chimpData[i].value
            .headerEnable + ';"><h2>' +chimpData[i].value
            .header.title+ '</h2><p>' + chimpData[i].value
            .header.description +
            '</p></div><a rel="nofollow" href="' + chimpData[i].value.links[j].url + '" target="_blank"><div class="qrc_social_icon" style="background-image:url(\'' + chimpData[i].value.links[j].logo +'\');"></div><div class="qrc_social_text"><div class="qrc_social_text_heading"> ' + chimpData[i].value.links[j].title + '</div><div class="qrc_social_text_discription" style="display:' + chimpData[i].value.links[j].subtitle.enabled + '">' + chimpData[i].value.links[j].subtitle.value + '</div></div><div class = "qrc_social_action"><i class="fa fa-arrow-right"></i></div></a></li>';
        } else {
          str = str +
            '<li class="qr_cc_card"><a rel="nofollow" href="' + chimpData[i].value.links[j].url + '" target="_blank"><div class="qrc_social_icon" style="background-image:url(\'' + chimpData[i].value.links[j].logo +'\');"></div><div class="qrc_social_text"><div class="qrc_social_text_heading"> ' + chimpData[i].value.links[j].title + '</div><div class="qrc_social_text_discription" style="display:' + chimpData[i].value.links[j].subtitle.enabled + '">' + chimpData[i].value.links[j].subtitle.value + '</div></div><div class = "qrc_social_action"><i class="fa fa-arrow-right"></i></div></a></li>';
        } 


        }        
      }

      socalLinksStateList.push(str);
    }
    else if(chimpData[i].type == "webLinks")
    {                                            
      var str = '';
      for(var j=0; j<chimpData[i].value.links.length; j++)
      {
        if(chimpData[i].value.cardBack == "none")
        {
          if (chimpData[i].value.links[j].enabled == 'block') 
          {
            if(j == 0)
            {
              str = str + '<li class="qr_cc_card" style="background-color:'+settingState.colors.primaryColor+'"><div class="qrc_heading qrc_heading_social_links_2" style="display:' + chimpData[i].value.headerEnabled + '"><h2>' + chimpData[i].value.header.title + '</h2><p>'+chimpData[i].value.header.description+'</p></div><a rel="nofollow" href="'+chimpData[i].value.links[j].link +'" target="_blank" ><div class="qrc_social_icon" style="background-image:url(\''+chimpData[i].value.links[j].image+'\'); display:'+ chimpData[i].value.links[j].enabled +'"></div><div class="qrc_social_text"><div class="qrc_social_text_heading">'+chimpData[i].value.links[j].title+'</div><div class="qrc_social_text_discription" style="display:'+chimpData[i].value.links[j].subtitle.enabled+'">'+chimpData[i].value.links[j].subtitle.value+'</div></div><div class="qrc_social_action"><i class="fa fa-arrow-right"></i></div></a></li>';
            }
            else
            {
            str = str + '<li class="qr_cc_card" style="background-color:'+settingState.colors.primaryColor+'"><a rel="nofollow" href="'+chimpData[i].value.links[j].link +'" target="_blank" ><div class="qrc_social_icon" style="background-image:url(\''+chimpData[i].value.links[j].image+'\'); display:'+ chimpData[i].value.links[j].enabled +'"></div><div class="qrc_social_text"><div class="qrc_social_text_heading">'+chimpData[i].value.links[j].title+'</div><div class="qrc_social_text_discription" style="display:'+chimpData[i].value.links[j].subtitle.enabled+'">'+chimpData[i].value.links[j].subtitle.value+'</div></div><div class="qrc_social_action"><i class="fa fa-arrow-right"></i></div></a></li>'        
            }

          }        
        }
        else
        {
          if (chimpData[i].value.links[j].enabled == 'block') 
          {
            if(j == 0)
            {
              str = str + '<li class="qr_cc_card" ><div class="qrc_heading qrc_heading_social_links_2" style="display:' + chimpData[i].value.headerEnabled + '"><h2>' + chimpData[i].value.header.title + '</h2><p>'+chimpData[i].value.header.description+'</p></div><a rel="nofollow" href="'+chimpData[i].value.links[j].link +'" target="_blank" ><div class="qrc_social_icon" style="background-image:url(\''+chimpData[i].value.links[j].image+'\'); display:'+ chimpData[i].value.links[j].enabled +'"></div><div class="qrc_social_text"><div class="qrc_social_text_heading">'+chimpData[i].value.links[j].title+'</div><div class="qrc_social_text_discription" style="display:'+chimpData[i].value.links[j].subtitle.enabled+'">'+chimpData[i].value.links[j].subtitle.value+'</div></div><div class="qrc_social_action"><i class="fa fa-arrow-right"></i></div></a></li>';
            }
            else
            {
            str = str + '<li class="qr_cc_card" ><a rel="nofollow" href="'+chimpData[i].value.links[j].link +'" target="_blank" ><div class="qrc_social_icon" style="background-image:url(\''+chimpData[i].value.links[j].image+'\'); display:'+ chimpData[i].value.links[j].enabled +'"></div><div class="qrc_social_text"><div class="qrc_social_text_heading">'+chimpData[i].value.links[j].title+'</div><div class="qrc_social_text_discription" style="display:'+chimpData[i].value.links[j].subtitle.enabled+'">'+chimpData[i].value.links[j].subtitle.value+'</div></div><div class="qrc_social_action"><i class="fa fa-arrow-right"></i></div></a></li>'        
            }

          } 
        }
      }
      linkStateList.push(str);
    }
    else if(chimpData[i].type == "pdf")
    {
      var str = '';
      for(var j=0; j<chimpData[i].value.pdfItems.length;j++)
      {
        if(chimpData[i].value.cardEnabled == "none")
        {
        if(j==0)
        {
            str = `<li class="qr_cc_card" style="background-color:${settingState.colors.primaryColor}">
                        <div class="qrc_heading" style="display:${chimpData[i].value.header.enabled}">
                            <h2>${chimpData[i].value.header.title}</h2>
                            <p>${chimpData[i].value.header.description}</p>
                        </div>
                        <a rel="nofollow" href="${chimpData[i].value.pdfItems[j].url}" target="_blank">
                            <div class="qrc_social_icon" style="background-image:url('${chimpData[i].value.pdfItems[j].pdfAvatar}');"></div>
                            <div class="qrc_social_text">
                                <div class="qrc_social_text_heading">${chimpData[i].value.pdfItems[j].title}</div>
                                <div class="qrc_social_text_discription">${chimpData[i].value.pdfItems[j].description}</div>
                            </div>
                            <div class="qrc_social_action">
                                    <span class="icon-right_arrow"></span>
                            </div>
                        </a>
                    </li>`;
        }
        else
        {
              str = str + 
                    `<li class="qr_cc_card" style="background-color:${settingState.colors.primaryColor}">
                        <a rel="nofollow" href="${chimpData[i].value.pdfItems[j].url}" target="_blank">
                            <div class="qrc_social_icon" style="background-image:url('${chimpData[i].value.pdfItems[j].pdfAvatar}');"></div>
                            <div class="qrc_social_text">
                                <div class="qrc_social_text_heading">${chimpData[i].value.pdfItems[j].title}</div>
                                <div class="qrc_social_text_discription">${chimpData[i].value.pdfItems[j].description}</div>
                            </div>
                            <div class="qrc_social_action">
                                    <span class="icon-right_arrow"></span>
                            </div>
                        </a>
                    </li>`;     
        }
        }
        else
        {
        if(j==0)
        {
            str = `<li class="qr_cc_card">
                        <div class="qrc_heading" style="display:${chimpData[i].value.header.enabled}">
                            <h2>${chimpData[i].value.header.title}</h2>
                            <p>${chimpData[i].value.header.description}</p>
                        </div>
                        <a rel="nofollow" href="${chimpData[i].value.pdfItems[j].url}" target="_blank">
                            <div class="qrc_social_icon" style="background-image:url('${chimpData[i].value.pdfItems[j].pdfAvatar}');"></div>
                            <div class="qrc_social_text">
                                <div class="qrc_social_text_heading">${chimpData[i].value.pdfItems[j].title}</div>
                                <div class="qrc_social_text_discription">${chimpData[i].value.pdfItems[j].description}</div>
                            </div>
                            <div class="qrc_social_action">
                                    <span class="icon-right_arrow"></span>
                            </div>
                        </a>
                    </li>`;
        }
        else
        {
              str = str + 
                    `<li class="qr_cc_card" >
                        <a rel="nofollow" href="${chimpData[i].value.pdfItems[j].url}" target="_blank">
                            <div class="qrc_social_icon" style="background-image:url('${chimpData[i].value.pdfItems[j].pdfAvatar}');"></div>
                            <div class="qrc_social_text">
                                <div class="qrc_social_text_heading">${chimpData[i].value.pdfItems[j].title}</div>
                                <div class="qrc_social_text_discription">${chimpData[i].value.pdfItems[j].description}</div>
                            </div>
                            <div class="qrc_social_action">
                                    <span class="icon-right_arrow"></span>
                            </div>
                        </a>
                    </li>`;     
        }          
        }

      }
      pdfItemList.push(str);
    }
    else if(chimpData[i].type == "custom")
    {
      var str = '';
      for(var j=0; j<chimpData[i].value.customItems.length;j++)
      {
        str = str + `<li>
                        <div class="qrc_custom_list_tow_col_1">${chimpData[i].value.customItems[j].key}</div>
                        <div class="qrc_custom_list_tow_col_2">${chimpData[i].value.customItems[j].value}</div>
                    </li>`;
      }
      customItemList.push(str);
    }
  }    

    var temp1_header = `<html>
          <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
              
              <meta property="og:title" content="Name">
              <title>Name</title>              <link rel="icon" href="___favicon___" type="image/x-icon">
              <link rel="shortcut icon" href="___favicon___" type="image/x-icon">
              <link rel="apple-touch-icon" href="___favicon___" type="image/x-icon">

              <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">
              <link rel="stylesheet" href="${baseURL}/assets/css/style.css" as="style">
              <link rel="stylesheet" href="${baseURL}/assets/css/stylee6ee.css" as="style">
              <link rel="stylesheet" href="${baseURL}/assets/css/lightbox.css" as="style">
              <link rel="preconnect" href="https://fonts.googleapis.com">
              <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
              <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
              <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.1/dist/jquery.slim.min.js"><\/script>
              <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"><\/script>
              <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"><\/script>
              <style>    
                  :root {--qrc-primary:${settingState.colors.primaryColor};}
                  :root {--qrc-secondary: ${settingState.colors.secondaryColor};}
                  :root {--qrc-text-primary: ${settingState.colors.primaryTextColor};}
                  :root {--qrc-text-secondary: ${settingState.colors.secondaryTextColor};}
                  :root {--qrc-profile-primary: ${settingState.colors.primaryProfileTextColor};}
                  :root {--qrc-profile-secondary: ${settingState.colors.secondaryProfileTextColor};}
                  :root {--qrc-card-bg:#ffffff;}
                  :root {--qrc-border-radius:8px;}
                  :root {--qrc-box-shadow:0px 0px 0px 0px #64646f33;}
                  .qr_cc_card{
                      background-color : var(--qrc-card-bg);
                      border-radius : var(--qrc-border-radius);
                      box-shadow : var(--qrc-box-shadow);
                  }
                  
                  a:hover{
                    color:black !important;
                    text-decoration:none;
                  }

              </style>
              <style>
                  body{overflow:auto !important;}
                  .qrc_page_wrapper{height:unset; min-height:100vh;}
                  @media (max-width: 800px) {
                      body::-webkit-scrollbar { display: none !important;}
                      body { -ms-overflow-style: none;  scrollbar-width: 0px !important;}
                  }

                  .myVideo{
                    width:100% !important;
                    height:500px !important;  
                    position:absolute;
                    border-radius:10px;                     
                  }


              @font-face {
                font-family: 'Open Sans';
                src: url('${baseURL}/assets/fonts/OpenSans-Italic-VariableFont_wdth,wght.ttf')  format('truetype'), 
                     url('${baseURL}/assets/fonts/OpenSans-VariableFont_wdth,wght.ttf')  format('truetype')
              }

              @font-face {
                font-family: 'Work Sans';
                src: url('${baseURL}/assets/fonts/WorkSans-Italic-VariableFont_wght.ttf')  format('truetype'), 
                     url('${baseURL}/assets/fonts/WorkSans-VariableFont_wght.ttf')  format('truetype')
              }

              @font-face {
                font-family: 'Roboto';
                src: url('${baseURL}/assets/fonts/Roboto-Black.ttf')  format('truetype'), 
                     url('${baseURL}/assets/fonts/Roboto-BlackItalic.ttf')  format('truetype'),
                     url('${baseURL}/assets/fonts/Roboto-Bold.ttf')  format('truetype'),
                     url('${baseURL}/assets/fonts/Roboto-BoldItalic.ttf')  format('truetype'),
                     url('${baseURL}/assets/fonts/Roboto-Italic.ttf')  format('truetype'),
                     url('${baseURL}/assets/fonts/Roboto-Light.ttf')  format('truetype'),
                     url('${baseURL}/assets/fonts/Roboto-LightItalic.ttf')  format('truetype'),
                     url('${baseURL}/assets/fonts/Roboto-Medium.ttf')  format('truetype'),
                     url('${baseURL}/assets/fonts/Roboto-MediumItalic.ttf')  format('truetype'),
                     url('${baseURL}/assets/fonts/Roboto-Regular.ttf')  format('truetype'),
                     url('${baseURL}/assets/fonts/Roboto-Thin.ttf')  format('truetype'),
                     url('${baseURL}/assets/fonts/Roboto-ThinItalic.ttf')  format('truetype')
              }
              </style>
              <style> .qrc_page_wrapper{height : 798px} .qrc_page_cover{max-width:420px} </style>         
          </head>
          <body class="notranslate " style="overflow:hidden;font-family: '${settingState.fontName}', sans-serif; " >
              <div class="qr_page_loader" style="background-color:${settingState.colors.secondaryColor}">
                  <img class="loader_img" src=".${settingState.pageLoader}">
              </div>
              <script>document.getElementsByClassName('qr_page_loader')[0].style.display = "";<\/script>
              <div id="qrc_page_qrcode_popup" >
                  <div class="">
                      <button class="btn btn-close" id="btn_page_qr_code_close" onclick="hideQrImage()">
                          <i class="fa fa-close" style="font-size:24px"></i>
                      </button>
                  </div>

                  <div class="qrc_profile_inner_info_popup">
                      <div class="qrc_profile_pic_popup" style="background-image: url('${qrPopUp.avatar}')"></div>
                      <h2>${qrPopUp.name}</h2>
                      <p>${qrPopUp.title}</p>
                      <p class="qrc_profile_company">${qrPopUp.company}</p>
                  </div>
                  <div class="qrc_profile_qrcode_popup">
                      <img src="${qrPopUp.qrImage}" class="img-fluid">
                  </div>

                  <a href="#" class="qrc_addtohomescreen ">
                      <div class="qrc_addtohomescreen_text">Add to Home Screen </div>
                      <div class="">
                          <i class="fa fa-plus" style="font-size:20px;"></i>
                      </div>
                  </a>
                  <div class="qrc_addtohome_info" style="display:none;">
                      <img src="" class="img-fluid">
                      <img src="" class="img-fluid">
                  </div>
              </div><div style="width: 100%; height: 100%; overflow: hidden; ">
              <div class="qrc_page_wrapper " id="myMainDiv" onscroll="saveScrollY()" style="display:block;position: absolute;top: 0;bottom: 0;left: 0;right: -19px;overflow-y: scroll;">


                  <div class="qrc_page_cover" style="background-image: url('${settingState.backgroundImage}');border-radius:10px 10px 0px 0px;"></div>
                  <div class="qrc_page_inner qrc_page_inner_2" style="background:${settingState.colors.primaryColor}">`;
            var temp1_body = ``;
            var profileIndex = 0; var imageIndex= 0; var linksIndex = 0; var socialLinkIndex = 0;
            var contactIndex = 0; var pdfIndex = 0; var customIndex = 0;

            for(var i = 0; i<chimpData.length; i++)
            {

              if(chimpData[i].type == "profile")
              {
                temp1_body = temp1_body + `<div class="section qrc_profile qrc_profile_2" style="display:${chimpData[i].value.enabled};">
                        
                      <div class="qrc_profile_inner" >
                        <div class="qrc_profilepic" style="background-image: url('${chimpData[i].value.avatar.url}');display:${chimpData[i].value.avatar.enabled};background-size: cover;"></div>
                        <h2>${chimpData[i].value.name}</h2>
                        <p>${chimpData[i].value.title}</p>
                        <p class="qrc_profile_company">${chimpData[i].value.company}</p>
                        <div class="qrc_profile_shortcut" style="display:${chimpData[i].value.contacts.enabled};">
                          <ul>${contactShortcut[profileIndex]}</ul>
                        </div>
                      </div>
                    </div>`;
                    profileIndex++;
              }
              else if(chimpData[i].type == "heading")
              {
                if(chimpData[i].value.cardBack == 'none')
                {
                temp1_body = temp1_body + `<div class="section qrc_heading_text qr_cc_card" style="display:${chimpData[i].value.enabled}; background-color:${settingState.colors.primaryColor}"><br>
                        <h2>${chimpData[i].value.title}</h2><br>
                        <p>${chimpData[i].value.description}</p><br>
                    </div>`;                  
                }
                else
                {
                temp1_body = temp1_body + `<div class="section qrc_heading_text qr_cc_card" style="display:${chimpData[i].value.enabled};"><br>
                        <h2>${chimpData[i].value.title}</h2><br>
                        <p>${chimpData[i].value.description}</p><br>
                    </div>`;                                    
                }

              }
              else if(chimpData[i].type == "contact")
              {
                if(chimpData[i].value.cardBack == 'block')
                {
                temp1_body = temp1_body + `<div class="section qrc_contact qr_cc_card" style="display:${chimpData[i].value.enabled}" >
                      <div class="qrc_contact_header">
                          <div class="qrc_contact_hdr_img" style="background-image: url('${chimpData[i].value.images}');"></div>
                          <div class="qrc_contact_hdr_text">${chimpData[i].value.title}</div>
                      </div>
                          ${contactUsStateList[contactIndex]}
                      <a rel="nofollow" href="#" class="qrc_addtocontact">
                          <div class="qrc_addtocontact_text" style="display:${chimpData[i].value.floatingButton.enabled}">${chimpData[i].value.floatingButton.text}</div>
                          <div class="qrc_addtocontact_circle">
                              <i class="fa fa-plus" style="font-size:20px;"></i>
                          </div>
                      </a>
                    </div>`;
                    contactIndex++;
                }
                else
                {
                temp1_body = temp1_body + `<div class="section qrc_contact qr_cc_card" style="display:${chimpData[i].value.enabled};background-color:${settingState.colors.primaryColor}" >
                      <div class="qrc_contact_header">
                          <div class="qrc_contact_hdr_img" style="background-image: url('${chimpData[i].value.images}');"></div>
                          <div class="qrc_contact_hdr_text">${chimpData[i].value.title}</div>
                      </div>
                          ${contactUsStateList[contactIndex]}
                      <a rel="nofollow" href="#" class="qrc_addtocontact">
                          <div class="qrc_addtocontact_text" style="display:${chimpData[i].value.floatingButton.enabled}">${chimpData[i].value.floatingButton.text}</div>
                          <div class="qrc_addtocontact_circle">
                              <i class="fa fa-plus" style="font-size:20px;"></i>
                          </div>
                      </a>
                    </div>`;
                    contactIndex++;
                }
              }
              else if(chimpData[i].type == "images")
              {
                if(chimpData[i].value.cardBack == 'block')
                {
                temp1_body = temp1_body + `<div class="section qrc_gallery qr_cc_card" style="display:${chimpData[i].value.enabled}">
                        <div class="qrc_heading" style="display:${chimpData[i].value.headerEnable}">
                          <h2>${chimpData[i].value.header.title}</h2>
                          <p>${chimpData[i].value.header.description}</p>
                        </div>
                        <div class="qrc_gallery_wrapper" >
                            <ul class="${chimpData[i].value.viewType}">
                                ${imageList[imageIndex]}
                            </ul>
                        </div>
                    </div>`;
                    imageIndex++;
                }
                else
                {
                temp1_body = temp1_body + `<div class="section qrc_gallery qr_cc_card">
                        <div class="qrc_heading" style="display:${chimpData[i].value.headerEnable};background-color:${settingState.colors.primaryColor}">
                          <h2>${chimpData[i].value.header.title}</h2>
                          <p>${chimpData[i].value.header.description}</p>
                        </div>
                        <div class="qrc_gallery_wrapper" style="display:${chimpData[i].value.enabled}">
                            <ul class="${chimpData[i].value.viewType}">
                                ${imageList[imageIndex]}
                            </ul>
                        </div>
                    </div>  
                    `;
                    imageIndex++;
                }
              }
              else if(chimpData[i].type == "socialLink")
              {
                if(chimpData[i].value.cardBack == 'block')
                {                
                temp1_body = temp1_body + `<div class="section qrc_social_links qrc_social_links_1" style="display:${chimpData[i].value.enabled}">
                        <ul class="qrc_social_links_list">
                          ${socalLinksStateList[socialLinkIndex]}
                        </ul>
                    </div>`;
                    socialLinkIndex++;
                }
                else
                {
                temp1_body = temp1_body + `<div class="section qrc_social_links qrc_social_links_1" style="display:${chimpData[i].value.enabled};">
                        <ul class="qrc_social_links_list">
                          ${socalLinksStateList[socialLinkIndex]}
                        </ul>
                    </div>`;
                    socialLinkIndex++;
                }
              }
              else if(chimpData[i].type == "webLinks")
              {                                            
                if(chimpData[i].value.cardBack == 'block')
                {
                temp1_body = temp1_body + `<div class="section qrc_social_links qrc_social_links_2" style="display:${chimpData[i].value.enabled}">
                        <ul class="qrc_social_links_list">${linkStateList[linksIndex]}
                        </ul>
                    </div>`;
                    linksIndex++;

                }
                else
                {
                temp1_body = temp1_body + `<div class="section qrc_social_links qrc_social_links_2" style="display:${chimpData[i].value.enabled};">
                        <ul class="qrc_social_links_list">${linkStateList[linksIndex]}
                        </ul>
                    </div>`;
                    linksIndex++;

                }
              }
              else if(chimpData[i].type == "button")
              {
                if(chimpData[i].value.cardEnabled == 'block')
                {
                temp1_body = temp1_body + `<div class="section qrc_calltoaction qr_cc_card" style="display:${chimpData[i].value.enabled}">
                <div class="qrc_heading" style="display:${chimpData[i].value.header.enabled}">
                    <h2>${chimpData[i].value.header.title}</h2>
                    <p>${chimpData[i].value.header.description}</p>
                </div>
                <a rel="nofollow" href="${chimpData[i].value.buttonLink}" class="qrc_button" target="_blank">${chimpData[i].value.buttonLabel}</a>
                </div>`;
                }
                else
                {
                temp1_body = temp1_body + `<div class="section qrc_calltoaction qr_cc_card" style="display:${chimpData[i].value.enabled};background-color:${settingState.colors.primaryColor}">
                <div class="qrc_heading" style="display:${chimpData[i].value.header.enabled}">
                    <h2>${chimpData[i].value.header.title}</h2>
                    <p>${chimpData[i].value.header.description}</p>
                </div>
                <a rel="nofollow" href="${chimpData[i].value.buttonLink}" class="qrc_button" target="_blank">${chimpData[i].value.buttonLabel}</a>
                </div>`;
                }

              }
              else if(chimpData[i].type == "video")
              {
                if(chimpData[i].value.type == "vimeo")
                {
                  if(chimpData[i].value.cardEnabled == "none")
                  {
                    temp1_body = temp1_body + `<div class="section qrc_video qr_cc_card" style="display:${chimpData[i].value.enabled}; background-color:${settingState.colors.primaryColor}">
                    <div class="qrc_heading" style="display:${chimpData[i].value.header.enabled}">
                        <h2>${chimpData[i].value.header.title}</h2>
                        <p>${chimpData[i].value.header.description}</p>
                    </div>
                        <div class="qrc_video_wrapper" style="position:relative;">
                            <video controls class="myVideo" style="height:200px !important" autoplay>
                              <source src="${chimpData[i].value.videoLink}" type="video/mp4">
                              <source src="${chimpData[i].value.videoLink}" type="video/avi">
                              <source src="${chimpData[i].value.videoLink}" type="video/ogg">
                            </video>
                        </div>
                    </div>`;
                  }
                  else
                  {
                    temp1_body = temp1_body + `<div class="section qrc_video qr_cc_card" style="display:${chimpData[i].value.enabled};">
                    <div class="qrc_heading" style="display:${chimpData[i].value.header.enabled}">
                        <h2>${chimpData[i].value.header.title}</h2>
                        <p>${chimpData[i].value.header.description}</p>
                    </div>
                        <div class="qrc_video_wrapper" style="position:relative;">
                            <video controls class="myVideo" style="height:200px !important" autoplay>
                              <source src="${chimpData[i].value.videoLink}" type="video/mp4">
                              <source src="${chimpData[i].value.videoLink}" type="video/avi">
                              <source src="${chimpData[i].value.videoLink}" type="video/ogg">

                            </video>
                        </div>
                    </div>`;              
                  }
                }
                else if(chimpData[i].value.type == "youtube")
                {
                  if(chimpData[i].value.cardEnabled == "none")
                  {
                    temp1_body = temp1_body + `<div class="section qrc_video qr_cc_card" style="display:${chimpData[i].value.enabled}; background-color:${settingState.colors.primaryColor}">
                    <div class="qrc_heading" style="display:${chimpData[i].value.header.enabled}">
                        <h2>${chimpData[i].value.header.title}</h2>
                        <p>${chimpData[i].value.header.description}</p>
                    </div>
                    <div class="qrc_video_wrapper" style="position:relative;">
                      <iframe width="100%" height="203" src="${chimpData[i].value.videoLink}" title="video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="z-index: 999;-webkit-border-bottom-right-radius: 18px; -webkit-border-bottom-left-radius: 18px; -moz-border-radius-bottomright: 18px; -moz-border-radius-bottomleft: 18px; border-bottom-right-radius: 18px; border-bottom-left-radius: 18px; overflow: hidden;"></iframe>                        
                    </div>
                  </div>`;
                  }
                  else
                  {
                    temp1_body = temp1_body + `<div class="section qrc_video qr_cc_card" style="display:${chimpData[i].value.enabled};">
                    <div class="qrc_heading" style="display:${chimpData[i].value.header.enabled}">
                        <h2>${chimpData[i].value.header.title}</h2>
                        <p>${chimpData[i].value.header.description}</p>
                    </div>
                    <div class="qrc_video_wrapper" style="position:relative;">
                      <iframe width="100%" height="203" src="${chimpData[i].value.videoLink}" title="video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="z-index: 999;-webkit-border-bottom-right-radius: 18px; -webkit-border-bottom-left-radius: 18px; -moz-border-radius-bottomright: 18px; -moz-border-radius-bottomleft: 18px; border-bottom-right-radius: 18px; border-bottom-left-radius: 18px; overflow: hidden;"></iframe>                        
                    </div>
                  </div>`;              
                  }
                }
              }
              else if(chimpData[i].type == "pdf")
              {
                if(chimpData[i].value.cardEnabled == 'block')
                {
                temp1_body = temp1_body + `<div class="section qrc_social_links" style="display:${chimpData[i].value.enabled}">
                <ul class="qrc_social_links_list">${pdfItemList[pdfIndex]}</ul>
            </div>`;
                pdfIndex++;
                }
                else
                {
                temp1_body = temp1_body + `<div class="section qrc_social_links" style="display:${chimpData[i].value.enabled};">
                <ul class="qrc_social_links_list">${pdfItemList[pdfIndex]}</ul>
            </div>`;
                pdfIndex++;
                }
              }
              else if(chimpData[i].type == "custom")
              {
                if(chimpData[i].value.cardEnabled == 'block')
                {
                temp1_body = temp1_body + `<div class="section qrc_calltoaction qr_cc_card" style="display:${chimpData[i].value.enabled}">
                <div class="qrc_heading" style="display:${chimpData[i].value.header.enabled}">
                    <h2>${chimpData[i].value.header.title}</h2>
                    <p>${chimpData[i].value.header.description}</p>
                </div>
                <ul class="qrc_custom_list_tow_col">
                ${customItemList[customIndex]}
                </ul>
            </div>`;
                customIndex++;
                }
                else
                {
                temp1_body = temp1_body + `<div class="section qrc_calltoaction qr_cc_card" style="display:${chimpData[i].value.enabled};background-color:${settingState.colors.primaryColor}">
                <div class="qrc_heading" style="display:${chimpData[i].value.header.enabled}">
                    <h2>${chimpData[i].value.header.title}</h2>
                    <p>${chimpData[i].value.header.description}</p>
                </div>
                <ul class="qrc_custom_list_tow_col">
                ${customItemList[customIndex]}
                </ul>
            </div>`;
                customIndex++;
                }
              }
            }
           
            var temp1_footer = `
                  </div>
                  <div class="extra_button_wrapper" >
                      <button class="btn "  onclick="showQrImage()" id="btn_page_qr_code"><i class="fa fa-qrcode"></i></button>
                      <button class="btn " id="btn_share_page"><i class="fa fa-upload"></i></button>
                  </div>
              </div></div>
              <div id="lightboxOverlay" tabindex="-1" class="lightboxOverlay" style="display: none;"></div>
              <div id="lightbox" tabindex="-1" class="lightbox" style="display: none;">
                  <div class="lb-outerContainer">
                      <div class="lb-container" data-type="">
                          <img class="lb-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" alt="">
                          <div class="lb-nav" style="display: flex; justify-content: space-between;">
                              <a class="lb-prev myPrev" aria-label="Previous image" onclick="prevImage()" data-type="" style="height:200px;display: flex;align-items:center;"><svg style="color: white; opacity:1" xmlns="http://www.w3.org/2000/svg" width="50" height="200" fill="currentColor" class="bi bi-chevron-compact-left" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z" fill="white"></path> </svg></a>
                              <a class="" aria-label="Next image" onclick="nextImage()" data-type="" style="height:200px;display: flex;align-items:center;"><svg style="color: white; height:200px;width:50px;opacity:1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-right" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z" fill="white"></path> </svg></a>
                          </div>
                          <div class="lb-loader"><a class="lb-cancel" ></a></div>
                      </div>
                  </div>
                  <div class="lb-dataContainer">
                      <div class="lb-data">
                          <div class="lb-details">
                              <span class="lb-caption"></span>
                              <span class="lb-number"></span>
                          </div>
                          <div class="lb-closeContainer">
                              <a class="lb-close" onclick="cancelImageView()"><svg style="color: black" width="45" height="45" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"></rect><path d="M14 14L34 34" stroke="#333" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" fill="white"></path><path d="M14 34L34 14" stroke="#333" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" fill="white"></path></svg></a>
                          </div>
                      </div>
                  </div>
              </div>
          </body>
      <script type="text/javascript">
        setTimeout(() => {  document.getElementsByClassName('qr_page_loader')[0].style.display="none";}, "500");
        function saveScrollY()
        {
          localStorage.removeItem('scrollY');
          localStorage.setItem("scrollY", document.getElementById("myMainDiv").scrollTop);
          var scrollY = localStorage.getItem("scrollY");
        }

       $( document ).ready(function() {
          var scrollY = localStorage.getItem("scrollY");
          document.getElementById("myMainDiv").scrollTo(0, scrollY);
             
        });

        function showQrImage()
        {
          document.getElementById('qrc_page_qrcode_popup').style.height = 'auto';          
        }

        function hideQrImage()
        {
          document.getElementById('qrc_page_qrcode_popup').style.height = '0px';          
        }

        function imageView()
        {
          document.getElementById('lightboxOverlay').setAttribute('style', 'display: block; width: 100%; height: 798px;');
          document.getElementById('lightbox').setAttribute('style', 'top: 200px; left: 0px;');
          document.getElementsByClassName('lb-outerContainer')[0].setAttribute('style', 'width: 100%; height: 8px;');
          
          document.getElementsByClassName('lb-image')[0].setAttribute('style', 'width: 100%; height: 427px;');
          document.getElementsByClassName('lb-nav')[0].setAttribute('style', 'pointer-events: auto;display: flex;justify-content: space-between;');
          
          document.getElementsByClassName('lb-loader')[0].setAttribute('style', 'display: none;');
          document.getElementsByClassName('lb-dataContainer')[0].setAttribute('style', 'width: 100%;');


          var imgUrl = '';
          var pageNo = 1;
          var allPages = 1;

          if(event.target.tagName == 'A')
          {
            imgUrl = event.target.children[0].getAttribute('src');
            pageNo = Array.from(event.target.parentNode.parentNode.children).indexOf(event.target.parentNode) + 1;
            allPages = event.target.parentNode.parentNode.children.length;
          }
          else if(event.target.tagName == 'IMG')
          {
            imgUrl = event.target.getAttribute('src');
            pageNo = Array.from(event.target.parentNode.parentNode.parentNode.children).indexOf(event.target.parentNode.parentNode) + 1;
            allPages = event.target.parentNode.parentNode.parentNode.children.length;
          }

          document.getElementsByClassName('lb-image')[0].setAttribute('src', imgUrl);
          console.log(pageNo, allPages);

          document.getElementsByClassName('lb-number')[0].innerHTML='Image '+pageNo+' of '+allPages; 

          if(pageNo == 1 && allPages == 1)
          {
            document.getElementsByClassName('lb-nav')[0].children[0].setAttribute('data-type', 0);
            document.getElementsByClassName('lb-nav')[0].children[1].setAttribute('data-type', 2);

            document.getElementsByClassName('lb-nav')[0].children[0].children[0].setAttribute('style', 'color: white; opacity:0');

            document.getElementsByClassName('lb-nav')[0].children[1].children[0].setAttribute('style', 'color: white; height:200px;width:50px;opacity:0');
          }
          else if(pageNo == allPages)
          {
            document.getElementsByClassName('lb-nav')[0].children[0].setAttribute('data-type', pageNo-1);
            document.getElementsByClassName('lb-nav')[0].children[1].setAttribute('data-type', allPages+1);

            document.getElementsByClassName('lb-nav')[0].children[0].children[0].setAttribute('style', 'color: white; opacity:1');

            document.getElementsByClassName('lb-nav')[0].children[1].children[0].setAttribute('style', 'color: white; height:200px;width:50px;opacity:0');
          }
          else if(pageNo == 1)
          {
            document.getElementsByClassName('lb-nav')[0].children[0].setAttribute('data-type', pageNo-1);
            document.getElementsByClassName('lb-nav')[0].children[1].setAttribute('data-type', pageNo+1);

            document.getElementsByClassName('lb-nav')[0].children[0].children[0].setAttribute('style', 'color: white; opacity:0');

            document.getElementsByClassName('lb-nav')[0].children[1].children[0].setAttribute('style', 'color: white; height:200px;width:50px;opacity:1'); 
          }
          else
          {
            document.getElementsByClassName('lb-nav')[0].children[0].setAttribute('data-type', pageNo-1);

            document.getElementsByClassName('lb-nav')[0].children[1].setAttribute('data-type', pageNo+1);            

            document.getElementsByClassName('lb-nav')[0].children[0].children[0].setAttribute('style', 'color: white; opacity:1');

            document.getElementsByClassName('lb-nav')[0].children[1].children[0].setAttribute('style', 'color: white; height:200px;width:50px;opacity:1'); 

          }

          document.getElementsByClassName('lb-container')[0].setAttribute('data-type', allPages);
        }

        function cancelImageView()
        {
          console.log('cancelImageView');
          document.getElementById('lightboxOverlay').setAttribute('style', 'display: none;');
          document.getElementById('lightbox').setAttribute('style', 'display: none;');
          document.getElementsByClassName('lb-outerContainer')[0].setAttribute('style', '');
          document.getElementsByClassName('lb-image')[0].setAttribute('src', '');
          document.getElementsByClassName('lb-image')[0].setAttribute('style', '');
          document.getElementsByClassName('lb-nav')[0].setAttribute('style', '');
          document.getElementsByClassName('lb-loader')[0].setAttribute('style', '');
          document.getElementsByClassName('lb-dataContainer')[0].setAttribute('style', '');
          document.getElementsByClassName('lb-dataContainer')[0].setAttribute('style', '');
        }

        function nextImage()
        {
          var pageNo = Number(document.getElementsByClassName('lb-nav')[0].children[1].getAttribute('data-type'));     
          var allPages = Number(document.getElementsByClassName('lb-container')[0].getAttribute('data-type'));

          if(pageNo < 1 || pageNo > allPages)
            return;

          var imgUrl = '';

          document.getElementsByClassName('lb-number')[0].innerHTML='Image '+pageNo+' of '+allPages; 

          imgUrl = document.getElementsByClassName('qrc_gallery_list')[0].children[pageNo-1].children[0].children[0].getAttribute('src');

          document.getElementsByClassName('lb-image')[0].setAttribute('src', imgUrl);
          console.log(pageNo, allPages);
          if(pageNo == 1 && allPages == 1)
          {
            document.getElementsByClassName('lb-nav')[0].children[0].setAttribute('data-type', 0);
            document.getElementsByClassName('lb-nav')[0].children[1].setAttribute('data-type', 2);

            document.getElementsByClassName('lb-nav')[0].children[0].children[0].setAttribute('style', 'color: white; opacity:0');

            document.getElementsByClassName('lb-nav')[0].children[1].children[0].setAttribute('style', 'color: white; height:200px;width:50px;opacity:0');
          }
          else if(pageNo == allPages)
          {
            document.getElementsByClassName('lb-nav')[0].children[0].setAttribute('data-type', pageNo-1);
            document.getElementsByClassName('lb-nav')[0].children[1].setAttribute('data-type', allPages+1);

            document.getElementsByClassName('lb-nav')[0].children[0].children[0].setAttribute('style', 'color: white; opacity:1');

            document.getElementsByClassName('lb-nav')[0].children[1].children[0].setAttribute('style', 'color: white; height:200px;width:50px;opacity:0');
          }
          else if(pageNo == 1)
          {
            document.getElementsByClassName('lb-nav')[0].children[0].setAttribute('data-type', pageNo-1);
            document.getElementsByClassName('lb-nav')[0].children[1].setAttribute('data-type', pageNo+1);

            document.getElementsByClassName('lb-nav')[0].children[0].children[0].setAttribute('style', 'color: white; opacity:0');

            document.getElementsByClassName('lb-nav')[0].children[1].children[0].setAttribute('style', 'color: white; height:200px;width:50px;opacity:1'); 
          }
          else
          {
            document.getElementsByClassName('lb-nav')[0].children[0].setAttribute('data-type', pageNo-1);

            document.getElementsByClassName('lb-nav')[0].children[1].setAttribute('data-type', pageNo+1);            

            document.getElementsByClassName('lb-nav')[0].children[0].children[0].setAttribute('style', 'color: white; opacity:1');

            document.getElementsByClassName('lb-nav')[0].children[1].children[0].setAttribute('style', 'color: white; height:200px;width:50px;opacity:1'); 

          }
        }

        function prevImage()
        {
          var pageNo = Number(document.getElementsByClassName('lb-nav')[0].children[0].getAttribute('data-type'));     
          var allPages = Number(document.getElementsByClassName('lb-container')[0].getAttribute('data-type'));

          if(pageNo < 1 || pageNo > allPages)
            return;

          document.getElementsByClassName('lb-number')[0].innerHTML='Image '+pageNo+' of '+allPages; 

          var imgUrl = '';

          imgUrl = document.getElementsByClassName('qrc_gallery_list')[0].children[pageNo-1].children[0].children[0].getAttribute('src');

          document.getElementsByClassName('lb-image')[0].setAttribute('src', imgUrl);
          console.log(pageNo, allPages);
          if(pageNo == 1 && allPages == 1)
          {
            document.getElementsByClassName('lb-nav')[0].children[0].setAttribute('data-type', 0);
            document.getElementsByClassName('lb-nav')[0].children[1].setAttribute('data-type', 2);

            document.getElementsByClassName('lb-nav')[0].children[0].children[0].setAttribute('style', 'color: white; opacity:0');

            document.getElementsByClassName('lb-nav')[0].children[1].children[0].setAttribute('style', 'color: white; height:200px;width:50px;opacity:0');
          }
          else if(pageNo == allPages)
          {
            document.getElementsByClassName('lb-nav')[0].children[0].setAttribute('data-type', pageNo-1);
            document.getElementsByClassName('lb-nav')[0].children[1].setAttribute('data-type', allPages+1);

            document.getElementsByClassName('lb-nav')[0].children[0].children[0].setAttribute('style', 'color: white; opacity:1');

            document.getElementsByClassName('lb-nav')[0].children[1].children[0].setAttribute('style', 'color: white; height:200px;width:50px;opacity:0');
          }
          else if(pageNo == 1)
          {
            document.getElementsByClassName('lb-nav')[0].children[0].setAttribute('data-type', pageNo-1);
            document.getElementsByClassName('lb-nav')[0].children[1].setAttribute('data-type', pageNo+1);

            document.getElementsByClassName('lb-nav')[0].children[0].children[0].setAttribute('style', 'color: white; opacity:0');

            document.getElementsByClassName('lb-nav')[0].children[1].children[0].setAttribute('style', 'color: white; height:200px;width:50px;opacity:1'); 
          }
          else
          {
            document.getElementsByClassName('lb-nav')[0].children[0].setAttribute('data-type', pageNo-1);

            document.getElementsByClassName('lb-nav')[0].children[1].setAttribute('data-type', pageNo+1);            

            document.getElementsByClassName('lb-nav')[0].children[0].children[0].setAttribute('style', 'color: white; opacity:1');

            document.getElementsByClassName('lb-nav')[0].children[1].children[0].setAttribute('style', 'color: white; height:200px;width:50px;opacity:1'); 

          }

        }
      <\/script>
      </html>`;
      template1 = temp1_header + temp1_body + temp1_footer;

    iframe.srcdoc = template1;
  } else if (templateNo == 2) {

  for(var i=0; i< chimpData.length; i++)
  {

    if(chimpData[i].type == "profile")
    {
      qrPopUp.avatar = chimpData[i].value.avatar.url;
      qrPopUp.name = chimpData[i].value.name;
      qrPopUp.title = chimpData[i].value.title;
      qrPopUp.company = chimpData[i].value.company;

      var str = '';
      for(var j = 0; j<chimpData[i].value.contacts.info.length; j++)
      {
            if (chimpData[i].value.contacts.info[j].type == "Mobile") {
              str = str +
                '<li class="qr_cc_card"><a rel="nofollow" href="tel:' + chimpData[i].value.contacts.info[j].value +
                '"><i class="fa fa-envelope-o"></i><span class="icon-email_1"></span></a> </li>';
            } else if (chimpData[i].value.contacts.info[j].type == "Email") {
              str = str +
                '<li class="qr_cc_card"><a rel="nofollow" href="mailto:' + chimpData[i].value.contacts.info[j].value +
                '"><i class="fa fa-mobile"></i><span class="icon-email_1"></span></a> </li>';
            } else if (chimpData[i].value.contacts.info[j].type == "SMS") {
              str = str +
                '<li class="qr_cc_card"><a rel="nofollow" href="sms:' + chimpData[i].value.contacts.info[j].value +
                '"><i class="fa fa-file-text-o"></i><span class="icon-email_1"></span></a> </li>';
            } else if (chimpData[i].value.contacts.info[j].type == "Location") {
              str = str +
                '<li class="qr_cc_card"><a rel="nofollow" href="' + chimpData[i].value.contacts.info[j].value +
                '"><i class="fa fa-location-arrow"></i><span class="icon-email_1"></span></a> </li>';
            } else if (chimpData[i].value.contacts.info[j].type == "Whatsapp") {
              str = str +
                '<li class="qr_cc_card"><a rel="nofollow" href="https://wa.me/' + chimpData[i].value.contacts.info[j].value +
                '"><i class="fa fa-whatsapp"></i><span class="icon-email_1"></span></a> </li>';
            } else if (chimpData[i].value.contacts.info[j].type == "Fax") {
              str = str +
                '<li class="qr_cc_card"><a rel="nofollow" href="fax:' + chimpData[i].value.contacts.info[j].value +
                '"><i class="fa fa-fax"></i><span class="icon-email_1"></span></a> </li>';
            } else if (chimpData[i].value.contacts.info[j].type == "Telephone") {
              str = str +
                '<li class="qr_cc_card"><a rel="nofollow" href="tel:' + chimpData[i].value.contacts.info[j].value +
                '"><i class="fa fa-phone"></i><span class="icon-email_1"></span></a> </li>';
            }        
      }
      contactShortcut.push(str);
    }
    else if(chimpData[i].type == "contact")
    {
      var str = '';
      for(var j=0; j<chimpData[i].value.contactItems.length; j++)
      {
        if (chimpData[i].value.enabled == 'block') {
          if(chimpData[i].value.contactItems[j].type == "Contact Number"){
            str = str + '<div class="qrc_contact_info"><div class="qrc_contact_info_title">'+ chimpData[i].value.contactItems[j].data.label +'</div><div class="qrc_contact_number">'+ chimpData[i].value.contactItems[j].data.value +'</div></div>';
          }else if(chimpData[i].value.contactItems[j].type == "Email"){
            str = str + '<div class="qrc_email_info"><div class="qrc_email_info_title">'+ chimpData[i].value.contactItems[j].data.label +'</div><div class="qrc_email_id">'+ chimpData[i].value.contactItems[j].data.value +'</div></div>';
          }else if(chimpData[i].value.contactItems[j].type == "Address"){
            if(chimpData[i].value.contactItems[j].actionButton.enabled == "none")
            {
            str = str + '<div class="qrc_address_info"><div class="qrc_address_info_title">'+ chimpData[i].value.contactItems[j].data.label +'</div><div class="qrc_address_text">'+ chimpData[i].value.contactItems[j].data.addressLine1+'<br>'+chimpData[i].value.contactItems[j].data.addressLine2+'<br>'+chimpData[i].value.contactItems[j].data.city+', '+chimpData[i].value.contactItems[j].data.state+', '+chimpData[i].value.contactItems[j].data.zipcode+'<br>'+chimpData[i].value.contactItems[j].data.country +'</div><a class="qrc_direction_btn" href="'+chimpData[i].value.contactItems[j].actionButton.url+'" target="_blank" style="display:'+chimpData[i].value.contactItems[j].actionButton.enabled+'"><span class="icon-direction_1"></span>'+ chimpData[i].value.contactItems[j].actionButton.text +'</a></div>';
            }
            else
            {
            str = str + '<div class="qrc_address_info"><div class="qrc_address_info_title">'+ chimpData[i].value.contactItems[j].data.label +'</div><div class="qrc_address_text">'+ chimpData[i].value.contactItems[j].data.addressLine1+'<br>'+chimpData[i].value.contactItems[j].data.addressLine2+'<br>'+chimpData[i].value.contactItems[j].data.city+', '+chimpData[i].value.contactItems[j].data.state+', '+chimpData[i].value.contactItems[j].data.zipcode+'<br>'+chimpData[i].value.contactItems[j].data.country +'</div><a class="qrc_direction_btn" href="//#" target="_blank" style=""><span class="icon-direction_1"></span>'+ chimpData[i].value.contactItems[j].actionButton.text +'</a></div>';              
            }
          }
        }        
      }
      contactUsStateList.push(str);
    }
    else if(chimpData[i].type == "images")
    {
      var str = '';
      for(var j=0; j<chimpData[i].value.photos.length; j++)
      {
        if (chimpData[i].value.photos[j].state == true) {
          str = str +
            '<li><a rel = "nofollow" href="' + chimpData[i].value.photos[j].url +
            '"  data-lightbox = "images-gallery"  onclick="imageView()" ><img class = "img-fluid" src = "' + chimpData[i].value.photos[j].url +
            '" ></a></li>';
        }        
      }
      imageList.push(str);
    }
    else if(chimpData[i].type == "socialLink")
    {
      var str = '';

      for(var j=0; j<chimpData[i].value.links.length; j++)
      {
        if(chimpData[i].value.cardBack == 'none')
        {
          if (j == 0) {

          str =
            '<li class="qr_cc_card" style="background-color:'+settingState.colors.primaryColor+'"><div class="qrc_heading qrc_heading_social_link_1" style="display:' +
            chimpData[i].value
            .headerEnable + ';"><h2>' +chimpData[i].value
            .header.title+ '</h2><p>' + chimpData[i].value
            .header.description +
            '</p></div><a rel="nofollow" href="' + chimpData[i].value.links[j].url +
            '" target="_blank"><div class="qrc_social_icon" style="background-image:url(\'' + chimpData[i].value.links[j].logo + '\');"></div><div class="qrc_social_text"><div class="qrc_social_text_heading"> ' + chimpData[i].value.links[j].title + '</div><div class="qrc_social_text_discription" style="display:' + chimpData[i].value.links[j].subtitle.enabled + '">' + chimpData[i].value.links[j].subtitle.value +           '</div></div><div class = "qrc_social_action"><i class="fa fa-arrow-right"></i></div></a></li>';
        } else {
          str = str +
            '<li class="qr_cc_card" style="background-color:'+settingState.colors.primaryColor+'"><a rel="nofollow" href="' + chimpData[i].value.links[j].url + '" target="_blank"><div class="qrc_social_icon" style="background-image:url(\'' + chimpData[i].value.links[j].logo +'\');"></div><div class="qrc_social_text"><div class="qrc_social_text_heading"> ' + chimpData[i].value.links[j].title + '</div><div class="qrc_social_text_discription" style="display:' + chimpData[i].value.links[j].subtitle.enabled + '">' + chimpData[i].value.links[j].subtitle.value + '</div></div><div class = "qrc_social_action"><i class="fa fa-arrow-right"></i></div></a></li>';
        } 

        }
        else
        {

          if (j == 0) {

          str =
            '<li class="qr_cc_card"><div class="qrc_heading qrc_heading_social_link_1" style="display:' +
            chimpData[i].value
            .headerEnable + ';"><h2>' +chimpData[i].value
            .header.title+ '</h2><p>' + chimpData[i].value
            .header.description +
            '</p></div><a rel="nofollow" href="' + chimpData[i].value.links[j].url +
            '" target="_blank"><div class="qrc_social_icon" style="background-image:url(\'' + chimpData[i].value.links[j].logo + '\');"></div><div class="qrc_social_text"><div class="qrc_social_text_heading"> ' + chimpData[i].value.links[j].type + '</div><div class="qrc_social_text_discription" style="display:' + chimpData[i].value.links[j].subtitle.enabled + '">' + chimpData[i].value.links[j].subtitle.value +           '</div></div><div class = "qrc_social_action"><i class="fa fa-arrow-right"></i></div></a></li>';
        } else {
          str = str +
            '<li class="qr_cc_card"><a rel="nofollow" href="' + chimpData[i].value.links[j].url + '" target="_blank"><div class="qrc_social_icon" style="background-image:url(\'' + chimpData[i].value.links[j].logo +'\');"></div><div class="qrc_social_text"><div class="qrc_social_text_heading"> ' + chimpData[i].value.links[j].title + '</div><div class="qrc_social_text_discription" style="display:' + chimpData[i].value.links[j].subtitle.enabled + '">' + chimpData[i].value.links[j].subtitle.value + '</div></div><div class = "qrc_social_action"><i class="fa fa-arrow-right"></i></div></a></li>';
        } 


        }        
      }

      socalLinksStateList.push(str);

    }
    else if(chimpData[i].type == "webLinks")
    {                                            
      var str = '';
      for(var j=0; j<chimpData[i].value.links.length; j++)
      {
        if(chimpData[i].value.cardBack == "none")
        {
        if (chimpData[i].value.links[j].enabled == 'block') {
          if(j == 0)
          {
          str = str + '<li class="qr_cc_card" style="background-color:'+settingState.colors.primaryColor+'"><div class="qrc_heading " style="display:' + chimpData[i].value.headerEnabled + '"><h2>' + chimpData[i].value.header.title + '</h2><p>'+chimpData[i].value.header.description+'</p></div><a rel="nofollow" href="'+chimpData[i].value.links[j].link +'" target="_blank" ><div class="qrc_social_icon" style="background-image:url(\''+chimpData[i].value.links[j].image+'\'); display:'+ chimpData[i].value.links[j].enabled +'"></div><div class="qrc_social_text"><div class="qrc_social_text_heading">'+chimpData[i].value.links[j].title+'</div><div class="qrc_social_text_discription" style="display:'+chimpData[i].value.links[j].subtitle.enabled+'">'+chimpData[i].value.links[j].subtitle.value+'</div></div><div class="qrc_social_action"><i class="fa fa-arrow-right"></i></div></a></li>';
          }
          else
          {
          str = str + '<li class="qr_cc_card" style="background-color:'+settingState.colors.primaryColor+'"><a rel="nofollow" href="'+chimpData[i].value.links[j].link +'" target="_blank" ><div class="qrc_social_icon" style="background-image:url(\''+chimpData[i].value.links[j].image+'\'); display:'+ chimpData[i].value.links[j].enabled +'"></div><div class="qrc_social_text"><div class="qrc_social_text_heading">'+chimpData[i].value.links[j].title+'</div><div class="qrc_social_text_discription" style="display:'+chimpData[i].value.links[j].subtitle.enabled+'">'+chimpData[i].value.links[j].subtitle.value+'</div></div><div class="qrc_social_action"><i class="fa fa-arrow-right"></i></div></a></li>'        
          }

        }
        }
        else
        {
        if (chimpData[i].value.links[j].enabled == 'block') {
          if(j == 0)
          {
          str = str + '<li class="qr_cc_card"><div class="qrc_heading " style="display:' + chimpData[i].value.headerEnabled + '"><h2>' + chimpData[i].value.header.title + '</h2><p>'+chimpData[i].value.header.description+'</p></div><a rel="nofollow" href="'+chimpData[i].value.links[j].link +'" target="_blank" ><div class="qrc_social_icon" style="background-image:url(\''+chimpData[i].value.links[j].image+'\'); display:'+ chimpData[i].value.links[j].enabled +'"></div><div class="qrc_social_text"><div class="qrc_social_text_heading">'+chimpData[i].value.links[j].title+'</div><div class="qrc_social_text_discription" style="display:'+chimpData[i].value.links[j].subtitle.enabled+'">'+chimpData[i].value.links[j].subtitle.value+'</div></div><div class="qrc_social_action"><i class="fa fa-arrow-right"></i></div></a></li>';
          }
          else
          {
          str = str + '<li class="qr_cc_card"><a rel="nofollow" href="'+chimpData[i].value.links[j].link +'" target="_blank" ><div class="qrc_social_icon" style="background-image:url(\''+chimpData[i].value.links[j].image+'\'); display:'+ chimpData[i].value.links[j].enabled +'"></div><div class="qrc_social_text"><div class="qrc_social_text_heading">'+chimpData[i].value.links[j].title+'</div><div class="qrc_social_text_discription" style="display:'+chimpData[i].value.links[j].subtitle.enabled+'">'+chimpData[i].value.links[j].subtitle.value+'</div></div><div class="qrc_social_action"><i class="fa fa-arrow-right"></i></div></a></li>'        
          }

        }          
        }

        
      }
      linkStateList.push(str);
    }
    else if(chimpData[i].type == "pdf")
    {
      var str = '';
      for(var j=0; j<chimpData[i].value.pdfItems.length;j++)
      {
        if(chimpData[i].value.cardEnabled == "none")
        {
        if(j==0)
        {
            str = `<li class="qr_cc_card" style="background-color:${settingState.colors.primaryColor}">
                        <div class="qrc_heading" style="display:${chimpData[i].value.header.enabled}">
                            <h2>${chimpData[i].value.header.title}</h2>
                            <p>${chimpData[i].value.header.description}</p>
                        </div>
                        <a rel="nofollow" href="${chimpData[i].value.pdfItems[j].url}" target="_blank">
                            <div class="qrc_social_icon" style="background-image:url('${chimpData[i].value.pdfItems[j].pdfAvatar}');"></div>
                            <div class="qrc_social_text">
                                <div class="qrc_social_text_heading">${chimpData[i].value.pdfItems[j].title}</div>
                                <div class="qrc_social_text_discription">${chimpData[i].value.pdfItems[j].description}</div>
                            </div>
                            <div class="qrc_social_action">
                                    <span class="icon-right_arrow"></span>
                            </div>
                        </a>
                    </li>`;
        }
        else
        {
              str = str + 
                    `<li class="qr_cc_card" style="background-color:${settingState.colors.primaryColor}">
                        <a rel="nofollow" href="${chimpData[i].value.pdfItems[j].url}" target="_blank">
                            <div class="qrc_social_icon" style="background-image:url('${chimpData[i].value.pdfItems[j].pdfAvatar}');"></div>
                            <div class="qrc_social_text">
                                <div class="qrc_social_text_heading">${chimpData[i].value.pdfItems[j].title}</div>
                                <div class="qrc_social_text_discription">${chimpData[i].value.pdfItems[j].description}</div>
                            </div>
                            <div class="qrc_social_action">
                                    <span class="icon-right_arrow"></span>
                            </div>
                        </a>
                    </li>`;     
        }
        }
        else
        {
        if(j==0)
        {
            str = `<li class="qr_cc_card">
                        <div class="qrc_heading" style="display:${chimpData[i].value.header.enabled}">
                            <h2>${chimpData[i].value.header.title}</h2>
                            <p>${chimpData[i].value.header.description}</p>
                        </div>
                        <a rel="nofollow" href="${chimpData[i].value.pdfItems[j].url}" target="_blank">
                            <div class="qrc_social_icon" style="background-image:url('${chimpData[i].value.pdfItems[j].pdfAvatar}');"></div>
                            <div class="qrc_social_text">
                                <div class="qrc_social_text_heading">${chimpData[i].value.pdfItems[j].title}</div>
                                <div class="qrc_social_text_discription">${chimpData[i].value.pdfItems[j].description}</div>
                            </div>
                            <div class="qrc_social_action">
                                    <span class="icon-right_arrow"></span>
                            </div>
                        </a>
                    </li>`;
        }
        else
        {
              str = str + 
                    `<li class="qr_cc_card">
                        <a rel="nofollow" href="${chimpData[i].value.pdfItems[j].url}" target="_blank">
                            <div class="qrc_social_icon" style="background-image:url('${chimpData[i].value.pdfItems[j].pdfAvatar}');"></div>
                            <div class="qrc_social_text">
                                <div class="qrc_social_text_heading">${chimpData[i].value.pdfItems[j].title}</div>
                                <div class="qrc_social_text_discription">${chimpData[i].value.pdfItems[j].description}</div>
                            </div>
                            <div class="qrc_social_action">
                                    <span class="icon-right_arrow"></span>
                            </div>
                        </a>
                    </li>`;     
        }          
        }


      }
      pdfItemList.push(str);
    }
    else if(chimpData[i].type == "custom")
    {
      var str = '';
      for(var j=0; j<chimpData[i].value.customItems.length;j++)
      {
        str = str + `<li>
                        <div class="qrc_custom_list_tow_col_1">${chimpData[i].value.customItems[j].key}</div>
                        <div class="qrc_custom_list_tow_col_2">${chimpData[i].value.customItems[j].value}</div>
                    </li>`;
      }
      customItemList.push(str);
    }
  }    

      var temp2_header = `<html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <meta property="og:title" content="Name">
        <title>Name</title>
        <link rel="icon" href="___favicon___" type="image/x-icon">
        <link rel="shortcut icon" href="___favicon___" type="image/x-icon">
        <link rel="apple-touch-icon" href="___favicon___" type="image/x-icon">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">

        <link rel="stylesheet" href="${baseURL}/assets/css/style.css" as="style">
        <link rel="stylesheet" href="${baseURL}/assets/css/stylee6ee.css" as="style">
        <link rel="stylesheet" href="${baseURL}/assets/css/lightbox.css" as="style">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
      <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.1/dist/jquery.slim.min.js"><\/script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"><\/script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"><\/script>
        <style>
          :root {--qrc-primary:${settingState.colors.primaryColor};}
          :root {--qrc-secondary: ${settingState.colors.secondaryColor};}
          :root {--qrc-text-primary: ${settingState.colors.primaryTextColor};}
          :root {--qrc-text-secondary: ${settingState.colors.secondaryTextColor};}
          :root {--qrc-profile-primary: ${settingState.colors.primaryProfileTextColor};}
          :root {--qrc-profile-secondary: ${settingState.colors.secondaryProfileTextColor};}

        :root {
          --qrc-card-bg: #ffffff;
        }

        :root {
          --qrc-border-radius: 16px;
        }

        :root {
          --qrc-box-shadow: 0px 7px 29px 0px #64646f33;
        }

        .qr_cc_card {
          background-color: var(--qrc-card-bg);
          border-radius: var(--qrc-border-radius);
          box-shadow: var(--qrc-box-shadow);
        }

        .myVideo{
          width:100% !important;
          height:300px !important;  
          position:absolute;
          border-radius:10px;                     
        }


        a:hover{
          color:black !important;
          text-decoration:none;
        }
        </style>
        <style>
        body {
          overflow: auto !important;
        }

        .qrc_profile_5 {
          background-color: var(--qrc-secondary);
          border-radius: 18px;
          overflow: hidden;
          margin: 0px 0;
        }

        .qrc_profile_5 h2 {
          color: var(--qrc-profile-primary);
          font-size: 32px;
          line-height: 34px;
          word-break: break-word;
          font-weight: normal;
        }

        .qrc_profile_5 p {
          color: var(--qrc-profile-secondary);
        }

        .qrc_profile_5 .qrc_profile_inner {
          padding-top: 0;
          position: relative;
          padding-bottom: 15px;
          background: var(--qrc-secondary);
        }

        .qrc_profile_5 .qrc_profilepic {
          height: 380px;
          width: 100%;
          border-radius: 0;
          position: relative;
        }

        .qrc_profile_5_svg {
          position: absolute;
          bottom: -1px;
          text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3);
          margin-right: -1px;
        }

        .qrc_profile_5_ovrlay_svg {
          position: absolute;
          bottom: 0px;
          opacity: 0.7;
        }

        .qrc_profile_5 .qrc_profile_inner_info {
          margin-top: 40px;
        }

        .qrc_profilepic {
          background-position: top center;
        }

        .qrc_heading h2 {
          font-weight: normal;
        }

        .qrc_profile_shortcut ul li {
          text-align: center;
          background: var(--qrc-primary);
          color: #fff;
          width: 52px;
          height: 52px;
          font-size: 28px;
          padding-top: 0px;
          margin-bottom: 8px;
        }

        .qrc_profile_shortcut ul li a {
          color: #fff;
        }

        .qrc_profile_shortcut ul li a:hover {
          color: #fff;
        }

        .qrc_gallery_list li {
          padding-top: 0px;
        }

        .qrc_page_wrapper {
          background-position: top center;
          background-size: cover;
          height: unset;
          min-height: 100vh;
        }

        .qrc_profile_brand_logo {
          background: #fff;
          position: absolute;
          left: 15px;
          top: 298px;
          border: solid 3px #00000010;
          border-radius: 100px;
          width: 110px;
          height: 110px;
          margin: auto;
          text-align: center;
          vertical-align: middle;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .qrc_profile_brand_logo img {
          max-width: 100%;
          max-height: 100%;
        }

        .qrc_profile_shortcut {
          margin: 15px 0 0 0;
        }

        .qrc_page_inner {
          padding-top: 0
        }

        @media (max-width: 767px) {
          .qrc_profile_5 {
            margin: 0 -15px;
            border-radius: 0px !important;
            margin-top: 0;
            margin-bottom: 0px;
          }

          body::-webkit-scrollbar {
            display: none;
          }

          body {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        }
        </style>
        <style>
        .qrc_page_wrapper {
          height: 798px
        }
              @font-face {
                font-family: 'Open Sans';
                src: url('${baseURL}/assets/fonts/OpenSans-Italic-VariableFont_wdth,wght.ttf')  format('truetype'), 
                     url('${baseURL}/assets/fonts/OpenSans-VariableFont_wdth,wght.ttf')  format('truetype')
              }

              @font-face {
                font-family: 'Work Sans';
                src: url('${baseURL}/assets/fonts/WorkSans-Italic-VariableFont_wght.ttf')  format('truetype'), 
                     url('${baseURL}/assets/fonts/WorkSans-VariableFont_wght.ttf')  format('truetype')
              }

              @font-face {
                font-family: 'Roboto';
                src: url('${baseURL}/assets/fonts/Roboto-Black.ttf')  format('truetype'), 
                     url('${baseURL}/assets/fonts/Roboto-BlackItalic.ttf')  format('truetype'),
                     url('${baseURL}/assets/fonts/Roboto-Bold.ttf')  format('truetype'),
                     url('${baseURL}/assets/fonts/Roboto-BoldItalic.ttf')  format('truetype'),
                     url('${baseURL}/assets/fonts/Roboto-Italic.ttf')  format('truetype'),
                     url('${baseURL}/assets/fonts/Roboto-Light.ttf')  format('truetype'),
                     url('${baseURL}/assets/fonts/Roboto-LightItalic.ttf')  format('truetype'),
                     url('${baseURL}/assets/fonts/Roboto-Medium.ttf')  format('truetype'),
                     url('${baseURL}/assets/fonts/Roboto-MediumItalic.ttf')  format('truetype'),
                     url('${baseURL}/assets/fonts/Roboto-Regular.ttf')  format('truetype'),
                     url('${baseURL}/assets/fonts/Roboto-Thin.ttf')  format('truetype'),
                     url('${baseURL}/assets/fonts/Roboto-ThinItalic.ttf')  format('truetype')
              }

        </style>
      </head>
          <body class="notranslate " style="overflow:hidden;font-family: '${settingState.fontName}', sans-serif;" >
              <div class="qr_page_loader" style="background-color:${settingState.colors.secondaryColor}">
                  <img class="loader_img" src="${settingState.pageLoader}">
              </div>

        <div id="qrc_page_qrcode_popup">
          <div class="">
            <button class="btn btn-close" id="btn_page_qr_code_close" onclick="hideQrImage()">
              <i class="fa fa-close" style="font-size:24px"></i>
            </button>
          </div>
          <div class="qrc_profile_inner_info_popup">
            <div class="qrc_profile_pic_popup" style="background-image: url('${qrPopUp.avatar}')"></div>
            <h2>${qrPopUp.name}</h2>
            <p>${qrPopUp.title}</p>
            <p class="qrc_profile_company">${qrPopUp.company}</p>
          </div>
          <div class="qrc_profile_qrcode_popup">
            <img src="${qrPopUp.qrImage}" class="img-fluid">
          </div>

          <a href="#" class="qrc_addtohomescreen ">
            <div class="qrc_addtohomescreen_text">Add to Home Screen </div>
            <div class="">
              <i class="fa fa-plus" style="font-size:20px;"></i>
            </div>
          </a>
          <div class="qrc_addtohome_info" style="display:none;">
            <img src="#" class="img-fluid">
            <img src="#" class="img-fluid">
          </div>
        </div><div style="width: 100%; height: 100%; overflow: hidden; ">
        <div class="qrc_page_wrapper "  id="myMainDiv" onscroll="saveScrollY()" style="background-image: url('${settingState.backgroundImage}');display:block;position: absolute;top: 0;bottom: 0;left: 0;right: -19px;overflow-y: scroll;">
          <div class="qrc_page_inner"  style="background:${settingState.colors.primaryColor};padding-top: 10px;">`;
      
      var temp2_footer = `
                  </div>
                  <div class="extra_button_wrapper" >
                      <button class="btn "  onclick="showQrImage()" id="btn_page_qr_code"><i class="fa fa-qrcode"></i></button>
                      <button class="btn " id="btn_share_page"><i class="fa fa-upload"></i></button>
                  </div>
              </div></div>
              <div id="lightboxOverlay" tabindex="-1" class="lightboxOverlay" style="display: none;"></div>
              <div id="lightbox" tabindex="-1" class="lightbox" style="display: none;">
                  <div class="lb-outerContainer">
                      <div class="lb-container" data-type="">
                          <img class="lb-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" alt="">
                          <div class="lb-nav" style="display: flex; justify-content: space-between;">
                              <a class="lb-prev myPrev" aria-label="Previous image" onclick="prevImage()" data-type="" style="height:200px;display: flex;align-items:center;"><svg style="color: white; opacity:1" xmlns="http://www.w3.org/2000/svg" width="50" height="200" fill="currentColor" class="bi bi-chevron-compact-left" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z" fill="white"></path> </svg></a>
                              <a class="" aria-label="Next image" onclick="nextImage()" data-type="" style="height:200px;display: flex;align-items:center;"><svg style="color: white; height:200px;width:50px;opacity:1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-right" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z" fill="white"></path> </svg></a>
                          </div>
                          <div class="lb-loader"><a class="lb-cancel" ></a></div>
                      </div>
                  </div>
                  <div class="lb-dataContainer">
                      <div class="lb-data">
                          <div class="lb-details">
                              <span class="lb-caption"></span>
                              <span class="lb-number"></span>
                          </div>
                          <div class="lb-closeContainer">
                              <a class="lb-close" onclick="cancelImageView()"><svg style="color: black" width="45" height="45" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"></rect><path d="M14 14L34 34" stroke="#333" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" fill="white"></path><path d="M14 34L34 14" stroke="#333" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" fill="white"></path></svg></a>
                          </div>
                      </div>
                  </div>
              </div>
          </body>
      <script type="text/javascript">
        setTimeout(() => {  document.getElementsByClassName('qr_page_loader')[0].style.display="none";}, "500");
        function saveScrollY()
        {
          localStorage.removeItem('scrollY');
          localStorage.setItem("scrollY", document.getElementById("myMainDiv").scrollTop);
          var scrollY = localStorage.getItem("scrollY");
        }

       $( document ).ready(function() {
          var scrollY = localStorage.getItem("scrollY");
          document.getElementById("myMainDiv").scrollTo(0, scrollY);
             
        });

        function showQrImage()
        {
          document.getElementById('qrc_page_qrcode_popup').style.height = 'auto';          
        }

        function hideQrImage()
        {
          document.getElementById('qrc_page_qrcode_popup').style.height = '0px';          
        }


        function imageView()
        {
          document.getElementById('lightboxOverlay').setAttribute('style', 'display: block; width: 100%; height: 798px;');
          document.getElementById('lightbox').setAttribute('style', 'top: 200px; left: 0px;');
          document.getElementsByClassName('lb-outerContainer')[0].setAttribute('style', 'width: 100%; height: 8px;');
          
          document.getElementsByClassName('lb-image')[0].setAttribute('style', 'width: 100%; height: 427px;');
          document.getElementsByClassName('lb-nav')[0].setAttribute('style', 'pointer-events: auto;display: flex;justify-content: space-between;');
          
          document.getElementsByClassName('lb-loader')[0].setAttribute('style', 'display: none;');
          document.getElementsByClassName('lb-dataContainer')[0].setAttribute('style', 'width: 100%;');


          var imgUrl = '';
          var pageNo = 1;
          var allPages = 1;

          if(event.target.tagName == 'A')
          {
            imgUrl = event.target.children[0].getAttribute('src');
            pageNo = Array.from(event.target.parentNode.parentNode.children).indexOf(event.target.parentNode) + 1;
            allPages = event.target.parentNode.parentNode.children.length;
          }
          else if(event.target.tagName == 'IMG')
          {
            imgUrl = event.target.getAttribute('src');
            pageNo = Array.from(event.target.parentNode.parentNode.parentNode.children).indexOf(event.target.parentNode.parentNode) + 1;
            allPages = event.target.parentNode.parentNode.parentNode.children.length;
          }

          document.getElementsByClassName('lb-image')[0].setAttribute('src', imgUrl);
          console.log(pageNo, allPages);

          document.getElementsByClassName('lb-number')[0].innerHTML='Image '+pageNo+' of '+allPages; 

          if(pageNo == 1 && allPages == 1)
          {
            document.getElementsByClassName('lb-nav')[0].children[0].setAttribute('data-type', 0);
            document.getElementsByClassName('lb-nav')[0].children[1].setAttribute('data-type', 2);

            document.getElementsByClassName('lb-nav')[0].children[0].children[0].setAttribute('style', 'color: white; opacity:0');

            document.getElementsByClassName('lb-nav')[0].children[1].children[0].setAttribute('style', 'color: white; height:200px;width:50px;opacity:0');
          }
          else if(pageNo == allPages)
          {
            document.getElementsByClassName('lb-nav')[0].children[0].setAttribute('data-type', pageNo-1);
            document.getElementsByClassName('lb-nav')[0].children[1].setAttribute('data-type', allPages+1);

            document.getElementsByClassName('lb-nav')[0].children[0].children[0].setAttribute('style', 'color: white; opacity:1');

            document.getElementsByClassName('lb-nav')[0].children[1].children[0].setAttribute('style', 'color: white; height:200px;width:50px;opacity:0');
          }
          else if(pageNo == 1)
          {
            document.getElementsByClassName('lb-nav')[0].children[0].setAttribute('data-type', pageNo-1);
            document.getElementsByClassName('lb-nav')[0].children[1].setAttribute('data-type', pageNo+1);

            document.getElementsByClassName('lb-nav')[0].children[0].children[0].setAttribute('style', 'color: white; opacity:0');

            document.getElementsByClassName('lb-nav')[0].children[1].children[0].setAttribute('style', 'color: white; height:200px;width:50px;opacity:1'); 
          }
          else
          {
            document.getElementsByClassName('lb-nav')[0].children[0].setAttribute('data-type', pageNo-1);

            document.getElementsByClassName('lb-nav')[0].children[1].setAttribute('data-type', pageNo+1);            

            document.getElementsByClassName('lb-nav')[0].children[0].children[0].setAttribute('style', 'color: white; opacity:1');

            document.getElementsByClassName('lb-nav')[0].children[1].children[0].setAttribute('style', 'color: white; height:200px;width:50px;opacity:1'); 

          }

          document.getElementsByClassName('lb-container')[0].setAttribute('data-type', allPages);
        }

        function cancelImageView()
        {
          console.log('cancelImageView');
          document.getElementById('lightboxOverlay').setAttribute('style', 'display: none;');
          document.getElementById('lightbox').setAttribute('style', 'display: none;');
          document.getElementsByClassName('lb-outerContainer')[0].setAttribute('style', '');
          document.getElementsByClassName('lb-image')[0].setAttribute('src', '');
          document.getElementsByClassName('lb-image')[0].setAttribute('style', '');
          document.getElementsByClassName('lb-nav')[0].setAttribute('style', '');
          document.getElementsByClassName('lb-loader')[0].setAttribute('style', '');
          document.getElementsByClassName('lb-dataContainer')[0].setAttribute('style', '');
          document.getElementsByClassName('lb-dataContainer')[0].setAttribute('style', '');
        }

        function nextImage()
        {
          var pageNo = Number(document.getElementsByClassName('lb-nav')[0].children[1].getAttribute('data-type'));     
          var allPages = Number(document.getElementsByClassName('lb-container')[0].getAttribute('data-type'));

          if(pageNo < 1 || pageNo > allPages)
            return;

          var imgUrl = '';

          document.getElementsByClassName('lb-number')[0].innerHTML='Image '+pageNo+' of '+allPages; 

          imgUrl = document.getElementsByClassName('qrc_gallery_list')[0].children[pageNo-1].children[0].children[0].getAttribute('src');

          document.getElementsByClassName('lb-image')[0].setAttribute('src', imgUrl);
          console.log(pageNo, allPages);
          if(pageNo == 1 && allPages == 1)
          {
            document.getElementsByClassName('lb-nav')[0].children[0].setAttribute('data-type', 0);
            document.getElementsByClassName('lb-nav')[0].children[1].setAttribute('data-type', 2);

            document.getElementsByClassName('lb-nav')[0].children[0].children[0].setAttribute('style', 'color: white; opacity:0');

            document.getElementsByClassName('lb-nav')[0].children[1].children[0].setAttribute('style', 'color: white; height:200px;width:50px;opacity:0');
          }
          else if(pageNo == allPages)
          {
            document.getElementsByClassName('lb-nav')[0].children[0].setAttribute('data-type', pageNo-1);
            document.getElementsByClassName('lb-nav')[0].children[1].setAttribute('data-type', allPages+1);

            document.getElementsByClassName('lb-nav')[0].children[0].children[0].setAttribute('style', 'color: white; opacity:1');

            document.getElementsByClassName('lb-nav')[0].children[1].children[0].setAttribute('style', 'color: white; height:200px;width:50px;opacity:0');
          }
          else if(pageNo == 1)
          {
            document.getElementsByClassName('lb-nav')[0].children[0].setAttribute('data-type', pageNo-1);
            document.getElementsByClassName('lb-nav')[0].children[1].setAttribute('data-type', pageNo+1);

            document.getElementsByClassName('lb-nav')[0].children[0].children[0].setAttribute('style', 'color: white; opacity:0');

            document.getElementsByClassName('lb-nav')[0].children[1].children[0].setAttribute('style', 'color: white; height:200px;width:50px;opacity:1'); 
          }
          else
          {
            document.getElementsByClassName('lb-nav')[0].children[0].setAttribute('data-type', pageNo-1);

            document.getElementsByClassName('lb-nav')[0].children[1].setAttribute('data-type', pageNo+1);            

            document.getElementsByClassName('lb-nav')[0].children[0].children[0].setAttribute('style', 'color: white; opacity:1');

            document.getElementsByClassName('lb-nav')[0].children[1].children[0].setAttribute('style', 'color: white; height:200px;width:50px;opacity:1'); 

          }
        }

        function prevImage()
        {
          var pageNo = Number(document.getElementsByClassName('lb-nav')[0].children[0].getAttribute('data-type'));     
          var allPages = Number(document.getElementsByClassName('lb-container')[0].getAttribute('data-type'));

          if(pageNo < 1 || pageNo > allPages)
            return;

          document.getElementsByClassName('lb-number')[0].innerHTML='Image '+pageNo+' of '+allPages; 

          var imgUrl = '';

          imgUrl = document.getElementsByClassName('qrc_gallery_list')[0].children[pageNo-1].children[0].children[0].getAttribute('src');

          document.getElementsByClassName('lb-image')[0].setAttribute('src', imgUrl);
          console.log(pageNo, allPages);
          if(pageNo == 1 && allPages == 1)
          {
            document.getElementsByClassName('lb-nav')[0].children[0].setAttribute('data-type', 0);
            document.getElementsByClassName('lb-nav')[0].children[1].setAttribute('data-type', 2);

            document.getElementsByClassName('lb-nav')[0].children[0].children[0].setAttribute('style', 'color: white; opacity:0');

            document.getElementsByClassName('lb-nav')[0].children[1].children[0].setAttribute('style', 'color: white; height:200px;width:50px;opacity:0');
          }
          else if(pageNo == allPages)
          {
            document.getElementsByClassName('lb-nav')[0].children[0].setAttribute('data-type', pageNo-1);
            document.getElementsByClassName('lb-nav')[0].children[1].setAttribute('data-type', allPages+1);

            document.getElementsByClassName('lb-nav')[0].children[0].children[0].setAttribute('style', 'color: white; opacity:1');

            document.getElementsByClassName('lb-nav')[0].children[1].children[0].setAttribute('style', 'color: white; height:200px;width:50px;opacity:0');
          }
          else if(pageNo == 1)
          {
            document.getElementsByClassName('lb-nav')[0].children[0].setAttribute('data-type', pageNo-1);
            document.getElementsByClassName('lb-nav')[0].children[1].setAttribute('data-type', pageNo+1);

            document.getElementsByClassName('lb-nav')[0].children[0].children[0].setAttribute('style', 'color: white; opacity:0');

            document.getElementsByClassName('lb-nav')[0].children[1].children[0].setAttribute('style', 'color: white; height:200px;width:50px;opacity:1'); 
          }
          else
          {
            document.getElementsByClassName('lb-nav')[0].children[0].setAttribute('data-type', pageNo-1);

            document.getElementsByClassName('lb-nav')[0].children[1].setAttribute('data-type', pageNo+1);            

            document.getElementsByClassName('lb-nav')[0].children[0].children[0].setAttribute('style', 'color: white; opacity:1');

            document.getElementsByClassName('lb-nav')[0].children[1].children[0].setAttribute('style', 'color: white; height:200px;width:50px;opacity:1'); 

          }

        }
      <\/script>
      </html>`;

      var temp2_body = ``;
      var profileIndex = 0; var imageIndex= 0; var linksIndex = 0; var socialLinkIndex = 0;
      var contactIndex = 0; var pdfIndex = 0; var customIndex = 0;

        for(var i = 0; i<chimpData.length; i++)
        {

          if(chimpData[i].type == "profile")
          {
            temp2_body = temp2_body + `<div class="section qrc_profile_5" style="display:${chimpData[i].value.enabled};">                         
                     <div class="qrc_profile_inner" >
                         <div class="qrc_coverimage" style="background-image: url('${chimpData[i].value.avatar.url}');display:${chimpData[i].value.avatar.enabled};background-size: cover;"></div>                         
                         <div class="qrc_profile_inner_info">
                             <h2>${chimpData[i].value.name}</h2>
                             <p>${chimpData[i].value.title}</p>
                             <p><strong>${chimpData[i].value.company}</strong></p>
                             <div class="qrc_profile_shortcut" style="display:${chimpData[i].value.contacts.enabled};">
                                <ul>${contactShortcut[profileIndex]}</ul>
                            </div>
                        </div>    
                        <div class="qrc_profilepic" style="background-image: url('${settingState.backgroundImage}');"></div>    
                        <div class="qrc_profile_brand_logo" style="background-image: url('${chimpData[i].value.avatar.url}');display:${chimpData[i].value.avatar.enabled};background-size: cover;"></div>   
                      
                    </div>
                </div>`;

                profileIndex++;
          }
          else if(chimpData[i].type == "heading")
          {
            if(chimpData[i].value.cardBack == "none")
            {
            temp2_body = temp2_body + `<div class="section qrc_heading_text qr_cc_card" style="display:${chimpData[i].value.enabled}; background-color:${settingState.colors.primaryColor}"><br>
                        <h2>${chimpData[i].value.title}</h2><br>
                        <p>${chimpData[i].value.description}</p><br>
                    </div>`;
            }
            else
            {
            temp2_body = temp2_body + `<div class="section qrc_heading_text qr_cc_card" style="display:${chimpData[i].value.enabled};"><br>
                        <h2>${chimpData[i].value.title}</h2><br>
                        <p>${chimpData[i].value.description}</p><br>
                    </div>`;              
            }


                    
          }
          else if(chimpData[i].type == "contact")
          {
            if(chimpData[i].value.cardBack == "none")
            {
            temp2_body = temp2_body + `<div class="section qrc_contact qr_cc_card" style="display:${chimpData[i].value.enabled};background-color:${settingState.colors.primaryColor}" >
                        <div class="qrc_contact_header">
                            <div class="qrc_contact_hdr_img" style="background-image: url('${chimpData[i].value.images}');"></div>
                            <div class="qrc_contact_hdr_text">${chimpData[i].value.title}</div>
                        </div>
                        ${contactUsStateList[contactIndex]}
                        <a rel="nofollow" href="#" class="qrc_addtocontact">
                            <div class="qrc_addtocontact_text" style="display:${chimpData[i].value.floatingButton.enabled}">${chimpData[i].value.floatingButton.text}</div>
                            <div class="qrc_addtocontact_circle">
                                <i class="fa fa-plus" style="font-size:20px;"></i>
                            </div>                
                        </a>
                    </div>`;
            }
            else
            {
            temp2_body = temp2_body + `<div class="section qrc_contact qr_cc_card" style="display:${chimpData[i].value.enabled}" >
                        <div class="qrc_contact_header">
                            <div class="qrc_contact_hdr_img" style="background-image: url('${chimpData[i].value.images}');"></div>
                            <div class="qrc_contact_hdr_text">${chimpData[i].value.title}</div>
                        </div>
                        ${contactUsStateList[contactIndex]}
                        <a rel="nofollow" href="#" class="qrc_addtocontact">
                            <div class="qrc_addtocontact_text" style="display:${chimpData[i].value.floatingButton.enabled}">${chimpData[i].value.floatingButton.text}</div>
                            <div class="qrc_addtocontact_circle">
                                <i class="fa fa-plus" style="font-size:20px;"></i>
                            </div>                
                        </a>
                    </div>`;              
            }


              
                contactIndex++;
          }
          else if(chimpData[i].type == "images")
          {
                if(chimpData[i].value.cardBack == 'block')
                {
                temp2_body = temp2_body + `<div class="section qrc_gallery qr_cc_card"  style="display:${chimpData[i].value.enabled}">
                        <div class="qrc_heading" style="display:${chimpData[i].value.headerEnable}">
                          <h2>${chimpData[i].value.header.title}</h2>
                          <p>${chimpData[i].value.header.description}</p>
                        </div>
                        <div class="qrc_gallery_wrapper">
                            <ul class="${chimpData[i].value.viewType}">
                                ${imageList[imageIndex]}
                            </ul>
                        </div>
                    </div>`;
                    imageIndex++;
                }
                else
                {
                temp2_body = temp2_body + `<div class="section qrc_gallery qr_cc_card">
                        <div class="qrc_heading" style="display:${chimpData[i].value.headerEnable};background-color:${settingState.colors.primaryColor}">
                          <h2>${chimpData[i].value.header.title}</h2>
                          <p>${chimpData[i].value.header.description}</p>
                        </div>
                        <div class="qrc_gallery_wrapper" style="display:${chimpData[i].value.enabled}">
                            <ul class="${chimpData[i].value.viewType}">
                                ${imageList[imageIndex]}
                            </ul>
                        </div>
                    </div>`;
                    imageIndex++;
                }

          }
          else if(chimpData[i].type == "socialLink")
          {
                temp2_body = temp2_body + `<div class="section qrc_social_links qrc_social_links_1" style="display:${chimpData[i].value.enabled}">
                        <ul class="qrc_social_links_list">
                          ${socalLinksStateList[socialLinkIndex]}
                        </ul>
                    </div>`;
                    socialLinkIndex++;

          }
          else if(chimpData[i].type == "webLinks")
          {                                            
            temp2_body = temp2_body + `<div class="section qrc_social_links " style="display:${chimpData[i].value.enabled}">
                    <ul class="qrc_social_links_list">
                      ${linkStateList[linksIndex]}
                    </ul>
                </div>`;
                linksIndex++;
          }
          else if(chimpData[i].type == "button")
          {
            if(chimpData[i].value.cardEnabled == "none")
            {
            temp2_body = temp2_body + `<div class="section qrc_calltoaction qr_cc_card" style="display:${chimpData[i].value.enabled};background-color:${settingState.colors.primaryColor}">
            <div class="qrc_heading" style="display:${chimpData[i].value.header.enabled}">
                <h2>${chimpData[i].value.header.title}</h2>
                <p>${chimpData[i].value.header.description}</p>
            </div>
            <a rel="nofollow" href="${chimpData[i].value.buttonLink}" class="qrc_button" target="_blank">${chimpData[i].value.buttonLabel}</a>
        </div>`;
            }
            else
            {
            temp2_body = temp2_body + `<div class="section qrc_calltoaction qr_cc_card" style="display:${chimpData[i].value.enabled};background-color:${settingState.colors.primaryColor}">
            <div class="qrc_heading" style="display:${chimpData[i].value.header.enabled}">
                <h2>${chimpData[i].value.header.title}</h2>
                <p>${chimpData[i].value.header.description}</p>
            </div>
            <a rel="nofollow" href="${chimpData[i].value.buttonLink}" class="qrc_button" target="_blank">${chimpData[i].value.buttonLabel}</a>
        </div>`;
            }

          }
          else if(chimpData[i].type == "video")
          {
                if(chimpData[i].value.type == "vimeo")
                {
                  if(chimpData[i].value.cardEnabled == "none")
                  {
                    temp2_body = temp2_body + `<div class="section qrc_video qr_cc_card" style="display:${chimpData[i].value.enabled}; background-color:${settingState.colors.primaryColor}">
                    <div class="qrc_heading" style="display:${chimpData[i].value.header.enabled}">
                        <h2>${chimpData[i].value.header.title}</h2>
                        <p>${chimpData[i].value.header.description}</p>
                    </div>
                        <div class="qrc_video_wrapper" style="position:relative;">
                            <video controls class="myVideo" style="height:200px !important" autoplay>
                              <source src="${chimpData[i].value.videoLink}" type="video/mp4">
                              <source src="${chimpData[i].value.videoLink}" type="video/avi">
                              <source src="${chimpData[i].value.videoLink}" type="video/ogg">
                            </video>
                        </div>
                    </div>`;
                  }
                  else
                  {
                    temp2_body = temp2_body + `<div class="section qrc_video qr_cc_card" style="display:${chimpData[i].value.enabled};">
                    <div class="qrc_heading" style="display:${chimpData[i].value.header.enabled}">
                        <h2>${chimpData[i].value.header.title}</h2>
                        <p>${chimpData[i].value.header.description}</p>
                    </div>
                        <div class="qrc_video_wrapper" style="position:relative;">
                            <video controls class="myVideo" style="height:200px !important" autoplay>
                              <source src="${chimpData[i].value.videoLink}" type="video/mp4">
                              <source src="${chimpData[i].value.videoLink}" type="video/avi">
                              <source src="${chimpData[i].value.videoLink}" type="video/ogg">

                            </video>
                        </div>
                    </div>`;              
                  }
                }
                else if(chimpData[i].value.type == "youtube")
                {
                  if(chimpData[i].value.cardEnabled == "none")
                  {
                    temp2_body = temp2_body + `<div class="section qrc_video qr_cc_card" style="display:${chimpData[i].value.enabled}; background-color:${settingState.colors.primaryColor}">
                    <div class="qrc_heading" style="display:${chimpData[i].value.header.enabled}">
                        <h2>${chimpData[i].value.header.title}</h2>
                        <p>${chimpData[i].value.header.description}</p>
                    </div>
                    <div class="qrc_video_wrapper" style="position:relative;">
                      <iframe width="100%" height="203" src="${chimpData[i].value.videoLink}" title="video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="z-index: 999;-webkit-border-bottom-right-radius: 18px; -webkit-border-bottom-left-radius: 18px; -moz-border-radius-bottomright: 18px; -moz-border-radius-bottomleft: 18px; border-bottom-right-radius: 18px; border-bottom-left-radius: 18px; overflow: hidden;"></iframe>                        
                    </div>
                  </div>`;
                  }
                  else
                  {
                    temp2_body = temp2_body + `<div class="section qrc_video qr_cc_card" style="display:${chimpData[i].value.enabled};">
                    <div class="qrc_heading" style="display:${chimpData[i].value.header.enabled}">
                        <h2>${chimpData[i].value.header.title}</h2>
                        <p>${chimpData[i].value.header.description}</p>
                    </div>
                    <div class="qrc_video_wrapper" style="position:relative;">
                      <iframe width="100%" height="203" src="${chimpData[i].value.videoLink}" title="video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="z-index: 999;-webkit-border-bottom-right-radius: 18px; -webkit-border-bottom-left-radius: 18px; -moz-border-radius-bottomright: 18px; -moz-border-radius-bottomleft: 18px; border-bottom-right-radius: 18px; border-bottom-left-radius: 18px; overflow: hidden;"></iframe>                        
                    </div>
                  </div>`;              
                  }
                }
          }
          else if(chimpData[i].type == "pdf")
          {
            temp2_body = temp2_body + `<div class="section qrc_social_links" style="display:${chimpData[i].value.enabled}">
            <ul class="qrc_social_links_list">${pdfItemList[pdfIndex]}</ul>
        </div>`;
            pdfIndex++;

          }
          else if(chimpData[i].type == "custom")
          {
            if(chimpData[i].value.cardBack == "none")
            {
            temp2_body = temp2_body + `<div class="section qrc_calltoaction qr_cc_card" style="display:${chimpData[i].enabled};background-color:${settingState.colors.primaryColor}">
            <div class="qrc_heading" style="display:${chimpData[i].header.enabled}">
                <h2>${chimpData[i].header.title}</h2>
                <p>${chimpData[i].header.title}</p>
            </div>
            <ul class="qrc_custom_list_tow_col">
            ${customItemList[customIndex]}
            </ul>
        </div>`;
            }
            else
            {
            temp2_body = temp2_body + `<div class="section qrc_calltoaction qr_cc_card" style="display:${chimpData[i].enabled};background-color:${settingState.colors.primaryColor}">
            <div class="qrc_heading" style="display:${chimpData[i].header.enabled}">
                <h2>${chimpData[i].header.title}</h2>
                <p>${chimpData[i].header.title}</p>
            </div>
            <ul class="qrc_custom_list_tow_col">
            ${customItemList[customIndex]}
            </ul>
        </div>`;              
            }


            customIndex++;
          }
        }



    
    iframe.srcdoc = temp2_header + temp2_body + temp2_footer;
  } else if (templateNo == 3) {
  for(var i=0; i< chimpData.length; i++)
  {

    if(chimpData[i].type == "profile")
    {
      qrPopUp.avatar = chimpData[i].value.avatar.url;
      qrPopUp.name = chimpData[i].value.name;
      qrPopUp.title = chimpData[i].value.title;
      qrPopUp.company = chimpData[i].value.company;

      var str = '';
      for(var j = 0; j<chimpData[i].value.contacts.info.length; j++)
      {
            if (chimpData[i].value.contacts.info[j].type == "Mobile") {
              str = str +
                '<li class="qr_cc_card"><a rel="nofollow" href="tel:' + chimpData[i].value.contacts.info[j].value +
                '"><i class="fa fa-mobile"></i><span class="icon-email_1"></span></a> </li>';
            } else if (chimpData[i].value.contacts.info[j].type == "Email") {
              str = str +
                '<li class="qr_cc_card"><a rel="nofollow" href="mailto:' + chimpData[i].value.contacts.info[j].value +
                '"><i class="fa fa-envelope-o"></i><span class="icon-email_1"></span></a> </li>';
            } else if (chimpData[i].value.contacts.info[j].type == "SMS") {
              str = str +
                '<li class="qr_cc_card"><a rel="nofollow" href="sms:' + chimpData[i].value.contacts.info[j].value +
                '"><i class="fa fa-file-text-o"></i><span class="icon-email_1"></span></a> </li>';
            } else if (chimpData[i].value.contacts.info[j].type == "Location") {
              str = str +
                '<li class="qr_cc_card"><a rel="nofollow" href="' + chimpData[i].value.contacts.info[j].value +
                '"><i class="fa fa-location-arrow"></i><span class="icon-email_1"></span></a> </li>';
            } else if (chimpData[i].value.contacts.info[j].type == "Whatsapp") {
              str = str +
                '<li class="qr_cc_card"><a rel="nofollow" href="https://wa.me/' + chimpData[i].value.contacts.info[j].value +
                '"><i class="fa fa-whatsapp"></i><span class="icon-email_1"></span></a> </li>';
            } else if (chimpData[i].value.contacts.info[j].type == "Fax") {
              str = str +
                '<li class="qr_cc_card"><a rel="nofollow" href="fax:' + chimpData[i].value.contacts.info[j].value +
                '"><i class="fa fa-fax"></i><span class="icon-email_1"></span></a> </li>';
            } else if (chimpData[i].value.contacts.info[j].type == "Telephone") {
              str = str +
                '<li class="qr_cc_card"><a rel="nofollow" href="tel:' + chimpData[i].value.contacts.info[j].value +
                '"><i class="fa fa-phone"></i><span class="icon-email_1"></span></a> </li>';
            }        
      }
      contactShortcut.push(str);
    }
    else if(chimpData[i].type == "contact")
    {
      var str = '';
      for(var j=0; j<chimpData[i].value.contactItems.length; j++)
      {
        if (chimpData[i].value.enabled == 'block') {
          if(chimpData[i].value.contactItems[j].type == "Contact Number"){
            str = str + '<div class="qrc_contact_info"><div class="qrc_contact_info_title">'+ chimpData[i].value.contactItems[j].data.label +'</div><div class="qrc_contact_number">'+ chimpData[i].value.contactItems[j].data.value +'</div></div>';
          }else if(chimpData[i].value.contactItems[j].type == "Email"){
            str = str + '<div class="qrc_email_info"><div class="qrc_email_info_title">'+ chimpData[i].value.contactItems[j].data.label +'</div><div class="qrc_email_id">'+ chimpData[i].value.contactItems[j].data.value +'</div></div>';
          }else if(chimpData[i].value.contactItems[j].type == "Address"){
            if(chimpData[i].value.contactItems[j].actionButton.enabled == "none")
            {
            str = str + '<div class="qrc_address_info"><div class="qrc_address_info_title">'+ chimpData[i].value.contactItems[j].data.label +'</div><div class="qrc_address_text">'+ chimpData[i].value.contactItems[j].data.addressLine1+'<br>'+chimpData[i].value.contactItems[j].data.addressLine2+'<br>'+chimpData[i].value.contactItems[j].data.city+', '+chimpData[i].value.contactItems[j].data.state+', '+chimpData[i].value.contactItems[j].data.zipcode+'<br>'+chimpData[i].value.contactItems[j].data.country +'</div><a class="qrc_direction_btn" href="'+chimpData[i].value.contactItems[j].actionButton.url+'" target="_blank" style="display:'+chimpData[i].value.contactItems[j].actionButton.enabled+'"><span class="icon-direction_1"></span>'+ chimpData[i].value.contactItems[j].actionButton.text +'</a></div>';
            }
            else
            {
            str = str + '<div class="qrc_address_info"><div class="qrc_address_info_title">'+ chimpData[i].value.contactItems[j].data.label +'</div><div class="qrc_address_text">'+ chimpData[i].value.contactItems[j].data.addressLine1+'<br>'+chimpData[i].value.contactItems[j].data.addressLine2+'<br>'+chimpData[i].value.contactItems[j].data.city+', '+chimpData[i].value.contactItems[j].data.state+', '+chimpData[i].value.contactItems[j].data.zipcode+'<br>'+chimpData[i].value.contactItems[j].data.country +'</div><a class="qrc_direction_btn" href="//#" target="_blank" style=""><span class="icon-direction_1"></span>'+ chimpData[i].value.contactItems[j].actionButton.text +'</a></div>';              
            }
          }
        }        
      }
      contactUsStateList.push(str);
    }
    else if(chimpData[i].type == "images")
    {
      var str = '';
      for(var j=0; j<chimpData[i].value.photos.length; j++)
      {
        if (chimpData[i].value.photos[j].state == true) {
          str = str +
            '<li><a rel = "nofollow"  data-lightbox = "images-gallery" href="' + chimpData[i].value.photos[j].url + '"  onclick="imageView()" ><img class = "img-fluid" src = "' + chimpData[i].value.photos[j].url +
            '" ></a></li>';
        }        
      }
      imageList.push(str);
    }
    else if(chimpData[i].type == "socialLink")
    {
      var str = '';

      for(var j=0; j<chimpData[i].value.links.length; j++)
      {
        if(chimpData[i].value.cardBack == 'none')
        {
          if (j == 0) {

          str =
            '<li class="qr_cc_card" style="background-color:'+settingState.colors.primaryColor+'"><div class="qrc_heading qrc_heading_social_link_1" style="display:' +
            chimpData[i].value
            .headerEnable + ';"><h2>' +chimpData[i].value
            .header.title+ '</h2><p>' + chimpData[i].value
            .header.description +
            '</p></div><a rel="nofollow" href="' + chimpData[i].value.links[j].url +
            '" target="_blank"><div class="qrc_social_icon" style="background-image:url(\'' + chimpData[i].value.links[j].logo + '\');"></div><div class="qrc_social_text"><div class="qrc_social_text_heading"> ' + chimpData[i].value.links[j].title + '</div><div class="qrc_social_text_discription" style="display:' + chimpData[i].value.links[j].subtitle.enabled + '">' + chimpData[i].value.links[j].subtitle.value +           '</div></div><div class = "qrc_social_action"><i class="fa fa-arrow-right"></i></div></a></li>';
        } else {
          str = str +
            '<li class="qr_cc_card" style="background-color:'+settingState.colors.primaryColor+'"><a rel="nofollow" href="' + chimpData[i].value.links[j].url + '" target="_blank"><div class="qrc_social_icon" style="background-image:url(\'' + chimpData[i].value.links[j].logo +'\');"></div><div class="qrc_social_text"><div class="qrc_social_text_heading"> ' + chimpData[i].value.links[j].title + '</div><div class="qrc_social_text_discription" style="display:' + chimpData[i].value.links[j].subtitle.enabled + '">' + chimpData[i].value.links[j].subtitle.value + '</div></div><div class = "qrc_social_action"><i class="fa fa-arrow-right"></i></div></a></li>';
        } 

        }
        else
        {

          if (j == 0) {

          str =
            '<li class="qr_cc_card"><div class="qrc_heading qrc_heading_social_link_1" style="display:' +
            chimpData[i].value
            .headerEnable + ';"><h2>' +chimpData[i].value
            .header.title+ '</h2><p>' + chimpData[i].value
            .header.description +
            '</p></div><a rel="nofollow" href="' + chimpData[i].value.links[j].url +
            '" target="_blank"><div class="qrc_social_icon" style="background-image:url(\'' + chimpData[i].value.links[j].logo + '\');"></div><div class="qrc_social_text"><div class="qrc_social_text_heading"> ' + chimpData[i].value.links[j].type + '</div><div class="qrc_social_text_discription" style="display:' + chimpData[i].value.links[j].subtitle.enabled + '">' + chimpData[i].value.links[j].subtitle.value +           '</div></div><div class = "qrc_social_action"><i class="fa fa-arrow-right"></i></div></a></li>';
        } else {
          str = str +
            '<li class="qr_cc_card"><a rel="nofollow" href="' + chimpData[i].value.links[j].url + '" target="_blank"><div class="qrc_social_icon" style="background-image:url(\'' + chimpData[i].value.links[j].logo +'\');"></div><div class="qrc_social_text"><div class="qrc_social_text_heading"> ' + chimpData[i].value.links[j].title + '</div><div class="qrc_social_text_discription" style="display:' + chimpData[i].value.links[j].subtitle.enabled + '">' + chimpData[i].value.links[j].subtitle.value + '</div></div><div class = "qrc_social_action"><i class="fa fa-arrow-right"></i></div></a></li>';
        } 


        }        
      }

      socalLinksStateList.push(str);

    }
    else if(chimpData[i].type == "webLinks")
    {                                            
      var str = '';
      for(var j=0; j<chimpData[i].value.links.length; j++)
      {
        if(chimpData[i].value.cardBack == "none")
        {
        if (chimpData[i].value.links[j].enabled == 'block') {
          if(j == 0)
          {
          str = str + '<li class="qr_cc_card" style="background-color:'+settingState.colors.primaryColor+'"><div class="qrc_heading qrc_heading_social_links_2" style="display:' + chimpData[i].value.headerEnabled + '"><h2>' + chimpData[i].value.header.title + '</h2><p>'+chimpData[i].value.header.description+'</p></div><a rel="nofollow" href="'+chimpData[i].value.links[j].link +'" target="_blank" ><div class="qrc_social_icon" style="background-image:url(\''+chimpData[i].value.links[j].image+'\'); display:'+ chimpData[i].value.links[j].enabled +'"></div><div class="qrc_social_text"><div class="qrc_social_text_heading">'+chimpData[i].value.links[j].title+'</div><div class="qrc_social_text_discription" style="display:'+chimpData[i].value.links[j].subtitle.enabled+'">'+chimpData[i].value.links[j].subtitle.value+'</div></div><div class="qrc_social_action"><i class="fa fa-arrow-right"></i></div></a></li>';
          }
          else
          {
          str = str + '<li class="qr_cc_card" style="background-color:'+settingState.colors.primaryColor+'"><a rel="nofollow" href="'+chimpData[i].value.links[j].link +'" target="_blank" ><div class="qrc_social_icon" style="background-image:url(\''+chimpData[i].value.links[j].image+'\'); display:'+ chimpData[i].value.links[j].enabled +'"></div><div class="qrc_social_text"><div class="qrc_social_text_heading">'+chimpData[i].value.links[j].title+'</div><div class="qrc_social_text_discription" style="display:'+chimpData[i].value.links[j].subtitle.enabled+'">'+chimpData[i].value.links[j].subtitle.value+'</div></div><div class="qrc_social_action"><i class="fa fa-arrow-right"></i></div></a></li>'        
          }

        }  
        }
        else
        {
        if (chimpData[i].value.links[j].enabled == 'block') {
          if(j == 0)
          {
          str = str + '<li class="qr_cc_card"><div class="qrc_heading qrc_heading_social_links_2" style="display:' + chimpData[i].value.headerEnabled + '"><h2>' + chimpData[i].value.header.title + '</h2><p>'+chimpData[i].value.header.description+'</p></div><a rel="nofollow" href="'+chimpData[i].value.links[j].link +'" target="_blank" ><div class="qrc_social_icon" style="background-image:url(\''+chimpData[i].value.links[j].image+'\'); display:'+ chimpData[i].value.links[j].enabled +'"></div><div class="qrc_social_text"><div class="qrc_social_text_heading">'+chimpData[i].value.links[j].title+'</div><div class="qrc_social_text_discription" style="display:'+chimpData[i].value.links[j].subtitle.enabled+'">'+chimpData[i].value.links[j].subtitle.value+'</div></div><div class="qrc_social_action"><i class="fa fa-arrow-right"></i></div></a></li>';
          }
          else
          {
          str = str + '<li class="qr_cc_card"><a rel="nofollow" href="'+chimpData[i].value.links[j].link +'" target="_blank" ><div class="qrc_social_icon" style="background-image:url(\''+chimpData[i].value.links[j].image+'\'); display:'+ chimpData[i].value.links[j].enabled +'"></div><div class="qrc_social_text"><div class="qrc_social_text_heading">'+chimpData[i].value.links[j].title+'</div><div class="qrc_social_text_discription" style="display:'+chimpData[i].value.links[j].subtitle.enabled+'">'+chimpData[i].value.links[j].subtitle.value+'</div></div><div class="qrc_social_action"><i class="fa fa-arrow-right"></i></div></a></li>'        
          }

        }            
        }

      
      }
      linkStateList.push(str);
    }
    else if(chimpData[i].type == "pdf")
    {
      var str = '';
      for(var j=0; j<chimpData[i].value.pdfItems.length;j++)
      {
        if(chimpData[i].value.cardEnabled == "none")
        {
        if(j==0)
        {
            str = `<li class="qr_cc_card" style="background-color:${settingState.colors.primaryColor}">
                        <div class="qrc_heading" style="display:${chimpData[i].value.header.enabled}">
                            <h2>${chimpData[i].value.header.title}</h2>
                            <p>${chimpData[i].value.header.description}</p>
                        </div>
                        <a rel="nofollow" href="${chimpData[i].value.pdfItems[j].url}" target="_blank">
                            <div class="qrc_social_icon" style="background-image:url('${chimpData[i].value.pdfItems[j].pdfAvatar}');"></div>
                            <div class="qrc_social_text">
                                <div class="qrc_social_text_heading">${chimpData[i].value.pdfItems[j].title}</div>
                                <div class="qrc_social_text_discription">${chimpData[i].value.pdfItems[j].description}</div>
                            </div>
                            <div class="qrc_social_action">
                                    <span class="icon-right_arrow"></span>
                            </div>
                        </a>
                    </li>`;
        }
        else
        {
              str = str + 
                    `<li class="qr_cc_card" style="background-color:${settingState.colors.primaryColor}">
                        <a rel="nofollow" href="${chimpData[i].value.pdfItems[j].url}" target="_blank">
                            <div class="qrc_social_icon" style="background-image:url('${chimpData[i].value.pdfItems[j].pdfAvatar}');"></div>
                            <div class="qrc_social_text">
                                <div class="qrc_social_text_heading">${chimpData[i].value.pdfItems[j].title}</div>
                                <div class="qrc_social_text_discription">${chimpData[i].value.pdfItems[j].description}</div>
                            </div>
                            <div class="qrc_social_action">
                                    <span class="icon-right_arrow"></span>
                            </div>
                        </a>
                    </li>`;     
        }
        }
        else
        {
        if(j==0)
        {
            str = `<li class="qr_cc_card">
                        <div class="qrc_heading" style="display:${chimpData[i].value.header.enabled}">
                            <h2>${chimpData[i].value.header.title}</h2>
                            <p>${chimpData[i].value.header.description}</p>
                        </div>
                        <a rel="nofollow" href="${chimpData[i].value.pdfItems[j].url}" target="_blank">
                            <div class="qrc_social_icon" style="background-image:url('${chimpData[i].value.pdfItems[j].pdfAvatar}');"></div>
                            <div class="qrc_social_text">
                                <div class="qrc_social_text_heading">${chimpData[i].value.pdfItems[j].title}</div>
                                <div class="qrc_social_text_discription">${chimpData[i].value.pdfItems[j].description}</div>
                            </div>
                            <div class="qrc_social_action">
                                    <span class="icon-right_arrow"></span>
                            </div>
                        </a>
                    </li>`;
        }
        else
        {
              str = str + 
                    `<li class="qr_cc_card">
                        <a rel="nofollow" href="${chimpData[i].value.pdfItems[j].url}" target="_blank">
                            <div class="qrc_social_icon" style="background-image:url('${chimpData[i].value.pdfItems[j].pdfAvatar}');"></div>
                            <div class="qrc_social_text">
                                <div class="qrc_social_text_heading">${chimpData[i].value.pdfItems[j].title}</div>
                                <div class="qrc_social_text_discription">${chimpData[i].value.pdfItems[j].description}</div>
                            </div>
                            <div class="qrc_social_action">
                                    <span class="icon-right_arrow"></span>
                            </div>
                        </a>
                    </li>`;     
        }          
        }


      }
      pdfItemList.push(str);
    }
    else if(chimpData[i].type == "custom")
    {
      var str = '';
      for(var j=0; j<chimpData[i].value.customItems.length;j++)
      {
        str = str + `<li>
                        <div class="qrc_custom_list_tow_col_1">${chimpData[i].value.customItems[j].key}</div>
                        <div class="qrc_custom_list_tow_col_2">${chimpData[i].value.customItems[j].value}</div>
                    </li>`;
      }
      customItemList.push(str);
    }
  }    

    var temp3_head = `<html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <meta property="og:title" content="Name">
        <title>Name</title>
        <link rel="icon" href="___favicon___" type="image/x-icon">
        <link rel="shortcut icon" href="___favicon___" type="image/x-icon">
        <link rel="apple-touch-icon" href="___favicon___" type="image/x-icon">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">

        <link rel="stylesheet" href="${baseURL}/assets/css/style.css" as="style">
        <link rel="stylesheet" href="${baseURL}/assets/css/stylee6ee.css" as="style">
        <link rel="stylesheet" href="${baseURL}/assets/css/lightbox.css" as="style">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
              <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css">
              <script src="https://cdn.jsdelivr.net/npm/jquery@3.6.1/dist/jquery.slim.min.js"><\/script>
              <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"><\/script>
              <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"><\/script>

        <style>
            :root {--qrc-primary:${settingState.colors.primaryColor};}
            :root {--qrc-secondary: ${settingState.colors.secondaryColor};}
            :root {--qrc-text-primary: ${settingState.colors.primaryTextColor};}
            :root {--qrc-text-secondary:${settingState.colors.secondaryTextColor};}
            :root {--qrc-profile-primary: ${settingState.colors.primaryProfileTextColor};}
            :root {--qrc-profile-secondary: ${settingState.colors.secondaryProfileTextColor};}
        :root {
          --qrc-card-bg: #ffffff;
        }

        :root {
          --qrc-border-radius: 16px;
        }

        :root {
          --qrc-box-shadow: 0px 7px 29px 0px #64646f33;
        }

        a:hover{
          color:black !important;
          text-decoration:none;
        }

        .qr_cc_card {
          background-color: var(--qrc-card-bg);
          border-radius: var(--qrc-border-radius);
          box-shadow: var(--qrc-box-shadow);
        }

        .myVideo{
          width:100% !important;
          height:300px !important;  
          position:absolute;
          border-radius:10px;                     
        }

        </style>
        <style>
        body {
          overflow: auto !important;
        }

        .qrc_profile_3 {
          background-color: var(--qrc-secondary);
          margin: 15px 0 0 0;
          border-radius: var(--qrc-border-radius);
          overflow: hidden;
          box-shadow: rgb(255 255 255 / 15%) 0px 0px 3px 0px, rgb(255 255 255 / 15%) 0px 8px 16px -8px;
        }

        .qrc_profile_3 h2 {
          text-shadow: 2px 2px 3px rgba(0, 0, 0, 0.3);
          color: var(--qrc-profile-primary);
          font-size: 38px;
          line-height: 40px width: 80%;
          word-break: break-word;
        }

        .qrc_profile_3 p {
          color: var(--qrc-profile-secondary);
        }

        .qrc_profile_3 .qrc_profile_inner {
          padding-top: 0;
          position: relative;
        }

        .qrc_profile_3 .qrc_profilepic {
          height: 380px;
          width: 100%;
          border-radius: 0;
        }

        .qrc_profile_3_svg {
          position: absolute;
          bottom: -1px;
        }

        .qrc_page_inner {
          padding-top: 0
        }

        .qrc_profilepic {
          position: relative;
          background-position: center;
        }

        .qrc_profile_shortcut ul li {
          text-align: center;
          background: var(--qrc-primary);
          color: #fff;
          width: 54px;
          height: 54px;
          padding-top: 0px
        }

        .qrc_profile_shortcut ul li a:hover {
          color: #fff;
        }

        .qrc_profile_shortcut ul li a {
          color: #fff;
        }

        .qrc_gallery_list li {
          padding-top: 0px;
        }

        .qrc_page_wrapper {
          background-position: top center;
          background-size: cover;
          height: unset;
          min-height: 100vh;
        }

        @media (max-width: 767px) {
          .qrc_profile_3 {
            margin: 0 -15px;
            border-radius: 0px !important;
            box-shadow: unset;
          }

          body::-webkit-scrollbar {
            display: none;
          }

          body {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        }
        </style>
        <style>
        .qrc_page_wrapper {
          height: 798px
        }
        @font-face {
          font-family: 'Open Sans';
          src: url('${baseURL}/assets/fonts/OpenSans-Italic-VariableFont_wdth,wght.ttf')  format('truetype'), 
               url('${baseURL}/assets/fonts/OpenSans-VariableFont_wdth,wght.ttf')  format('truetype')
        }

        @font-face {
          font-family: 'Work Sans';
          src: url('${baseURL}/assets/fonts/WorkSans-Italic-VariableFont_wght.ttf')  format('truetype'), 
               url('${baseURL}/assets/fonts/WorkSans-VariableFont_wght.ttf')  format('truetype')
        }

        @font-face {
          font-family: 'Roboto';
          src: url('${baseURL}/assets/fonts/Roboto-Black.ttf')  format('truetype'), 
               url('${baseURL}/assets/fonts/Roboto-BlackItalic.ttf')  format('truetype'),
               url('${baseURL}/assets/fonts/Roboto-Bold.ttf')  format('truetype'),
               url('${baseURL}/assets/fonts/Roboto-BoldItalic.ttf')  format('truetype'),
               url('${baseURL}/assets/fonts/Roboto-Italic.ttf')  format('truetype'),
               url('${baseURL}/assets/fonts/Roboto-Light.ttf')  format('truetype'),
               url('${baseURL}/assets/fonts/Roboto-LightItalic.ttf')  format('truetype'),
               url('${baseURL}/assets/fonts/Roboto-Medium.ttf')  format('truetype'),
               url('${baseURL}/assets/fonts/Roboto-MediumItalic.ttf')  format('truetype'),
               url('${baseURL}/assets/fonts/Roboto-Regular.ttf')  format('truetype'),
               url('${baseURL}/assets/fonts/Roboto-Thin.ttf')  format('truetype'),
               url('${baseURL}/assets/fonts/Roboto-ThinItalic.ttf')  format('truetype')
        }
        </style>
      </head>
          <body class="notranslate " style="overflow:hidden;font-family: '${settingState.fontName}', sans-serif;">
              <div class="qr_page_loader" style="background-color:${settingState.colors.secondaryColor}">
                  <img class="loader_img" src="${settingState.pageLoader}">
              </div>

        <div id="qrc_page_qrcode_popup" >
          <div class="">
            <button class="btn btn-close" id="btn_page_qr_code_close" onclick="hideQrImage()">
              <i class="fa fa-close" style="font-size:24px"></i>
            </button>
          </div>
          <div class="qrc_profile_inner_info_popup">
            <div class="qrc_profile_pic_popup" style="background-image: url('${qrPopUp.avatar}')"></div>
            <h2>${qrPopUp.name}</h2>
            <p>${qrPopUp.title}</p>
            <p class="qrc_profile_company">${qrPopUp.company}</p>
          </div>
          <div class="qrc_profile_qrcode_popup">
            <img src="${qrPopUp.qrImage}" class="img-fluid">
          </div>

          <a href="#" class="qrc_addtohomescreen ">
            <div class="qrc_addtohomescreen_text">Add to Home Screen </div>
            <div class="">
              <i class="fa fa-plus" style="font-size:20px;"></i>
            </div>
          </a>
          <div class="qrc_addtohome_info" style="display:none;">
            <img src="#" class="img-fluid">
            <img src="#" class="img-fluid">
          </div>
        </div><div style="/* width: 100%; */height: 100%;overflow: hidden;">
        <div class="qrc_page_wrapper "  id="myMainDiv" onscroll="saveScrollY()"style="background-image: url('${settingState.backgroundImage}');display:block;position: absolute;top: 0;bottom: 0;left: 0;right: -19px;overflow-y: scroll;">
          <div class="qrc_page_inner" style="background:${settingState.colors.primaryColor};padding-top:5px;">`;

          var temp3_body=``;
              var profileIndex = 0; var imageIndex= 0; var linksIndex = 0; var socialLinkIndex = 0;
              var contactIndex = 0; var pdfIndex = 0; var customIndex = 0;
            for(var i = 0; i<chimpData.length; i++)
            {

              if(chimpData[i].type == "profile")
              {
            temp3_body = temp3_body + `<div class="section qrc_profile_3" style="display:${chimpData[i].value.enabled};">            

              <div class="qrc_profile_inner" >
                <div class="qrc_profilepic" style="background-image: url('${chimpData[i].value.avatar.url}');display:${chimpData[i].value.avatar.enabled};background-size: cover;">

                </div>
                <div class="qrc_profile_inner_info">
                  <h2>${chimpData[i].value.name}</h2>
                  <p>${chimpData[i].value.title}</p>
                  <p><strong>${chimpData[i].value.company}</strong></p>
                  <div class="qrc_profile_shortcut" style="display:${chimpData[i].value.contacts.enabled};padding-top:15px;">
                    <ul>
                     ${contactShortcut[profileIndex]}
                    </ul>
                  </div>
                </div>
              </div>
            </div><br>`;

                profileIndex++;
              }
              else if(chimpData[i].type == "heading")
              {
                if(chimpData[i].value.cardBack == "none")
                {
                temp3_body = temp3_body + `<div class="section qrc_heading_text qr_cc_card" style="display:${chimpData[i].value.enabled};background-color:${settingState.colors.primaryColor}"><br>
                        <h2>${chimpData[i].value.title}</h2><br>
                        <p>${chimpData[i].value.description}</p><br>
                    </div>`;
                }
                else
                {
                temp3_body = temp3_body + `<div class="section qrc_heading_text qr_cc_card" style="display:${chimpData[i].value.enabled};"><br>
                        <h2>${chimpData[i].value.title}</h2><br>
                        <p>${chimpData[i].value.description}</p><br>
                    </div>`;                  
                }


              }
              else if(chimpData[i].type == "contact")
              {
                if(chimpData[i].value.cardBack == 'none')
                {
                temp3_body = temp3_body + `<div class="section qrc_contact qr_cc_card" style="display:${chimpData[i].value.enabled}; background-color:${settingState.colors.primaryColor}" >
                      <div class="qrc_contact_header">
                          <div class="qrc_contact_hdr_img" style="background-image: url('${chimpData[i].value.images}');"></div>
                          <div class="qrc_contact_hdr_text">${chimpData[i].value.title}</div>
                      </div>
                          ${contactUsStateList[contactIndex]}
                      <a rel="nofollow" href="${chimpData[i].value.floatingButton.url}" class="qrc_addtocontact">
                          <div class="qrc_addtocontact_text" style="display:${chimpData[i].value.floatingButton.enabled}">${chimpData[i].value.floatingButton.text}</div>
                          <div class="qrc_addtocontact_circle">
                              <i class="fa fa-plus" style="font-size:20px;"></i>
                          </div>
                      </a>
                    </div>`;

                }
                else
                {
                temp3_body = temp3_body + `<div class="section qrc_contact qr_cc_card" style="display:${chimpData[i].value.enabled}" >
                      <div class="qrc_contact_header">
                          <div class="qrc_contact_hdr_img" style="background-image: url('${chimpData[i].value.images}');"></div>
                          <div class="qrc_contact_hdr_text">${chimpData[i].value.title}</div>
                      </div>
                          ${contactUsStateList[contactIndex]}
                      <a rel="nofollow" href="${chimpData[i].value.floatingButton.url}" class="qrc_addtocontact">
                          <div class="qrc_addtocontact_text" style="display:${chimpData[i].value.floatingButton.enabled}">${chimpData[i].value.floatingButton.text}</div>
                          <div class="qrc_addtocontact_circle">
                              <i class="fa fa-plus" style="font-size:20px;"></i>
                          </div>
                      </a>
                    </div>`;

                }


                contactIndex++;
              }
              else if(chimpData[i].type == "images")
              {
                if(chimpData[i].value.cardBack == 'block')
                {
                temp3_body = temp3_body + `<div class="section qrc_gallery qr_cc_card" style="display:${chimpData[i].value.enabled}">
                        <div class="qrc_heading" style="display:${chimpData[i].value.headerEnable}">
                          <h2>${chimpData[i].value.header.title}</h2>
                          <p>${chimpData[i].value.header.description}</p>
                        </div>
                        <div class="qrc_gallery_wrapper" >
                            <ul class="${chimpData[i].value.viewType}">
                                ${imageList[imageIndex]}
                            </ul>
                        </div>
                    </div>`;
                    imageIndex++;
                }
                else
                {
                temp3_body = temp3_body + `<div class="section qrc_gallery qr_cc_card">
                        <div class="qrc_heading" style="display:${chimpData[i].value.headerEnable};background-color:${settingState.colors.primaryColor}">
                          <h2>${chimpData[i].value.header.title}</h2>
                          <p>${chimpData[i].value.header.description}</p>
                        </div>
                        <div class="qrc_gallery_wrapper" style="display:${chimpData[i].value.enabled}">
                            <ul class="${chimpData[i].value.viewType}">
                                ${imageList[imageIndex]}
                            </ul>
                        </div>
                    </div>`;
                    imageIndex++;
                }
              }
              else if(chimpData[i].type == "socialLink")
              {
                temp3_body = temp3_body + `<div class="section qrc_social_links qrc_social_links_1" style="display:${chimpData[i].value.enabled}">
                        <ul class="qrc_social_links_list">
                          ${socalLinksStateList[socialLinkIndex]}
                        </ul>
                    </div>`;
                    socialLinkIndex++;
              }
              else if(chimpData[i].type == "webLinks")
              {         
                temp3_body = temp3_body + `<div class="section qrc_social_links" style="display:${chimpData[i].value.enabled}">
                        <ul class="qrc_social_links_list">
                          ${linkStateList[linksIndex]}
                        </ul>
                    </div>`;
                    linksIndex++;
              }
              else if(chimpData[i].type == "button")
              {
                if(chimpData[i].value.cardEnabled == "none")
                {
                temp3_body = temp3_body + `<div class="section qrc_calltoaction qr_cc_card" style="display:${chimpData[i].value.enabled};background-color:${settingState.colors.primaryColor}">
                <div class="qrc_heading" style="display:${chimpData[i].value.header.enabled}">
                    <h2>${chimpData[i].value.header.title}</h2>
                    <p>${chimpData[i].value.header.description}</p>
                </div>
                <a rel="nofollow" href="${chimpData[i].value.buttonLink}" class="qrc_button" target="_blank">${chimpData[i].value.buttonLabel}</a>
            </div>`;
                }
                else
                {
                temp3_body = temp3_body + `<div class="section qrc_calltoaction qr_cc_card" style="display:${chimpData[i].value.enabled}">
                <div class="qrc_heading" style="display:${chimpData[i].value.header.enabled}">
                    <h2>${chimpData[i].value.header.title}</h2>
                    <p>${chimpData[i].value.header.description}</p>
                </div>
                <a rel="nofollow" href="${chimpData[i].value.buttonLink}" class="qrc_button" target="_blank">${chimpData[i].value.buttonLabel}</a>
            </div>`;                  
                }


              }
              else if(chimpData[i].type == "video")
              {
                if(chimpData[i].value.type == "vimeo")
                {
                  if(chimpData[i].value.cardEnabled == "none")
                  {
                    temp3_body = temp3_body + `<div class="section qrc_video qr_cc_card" style="display:${chimpData[i].value.enabled}; background-color:${settingState.colors.primaryColor}">
                    <div class="qrc_heading" style="display:${chimpData[i].value.header.enabled}">
                        <h2>${chimpData[i].value.header.title}</h2>
                        <p>${chimpData[i].value.header.description}</p>
                    </div>
                        <div class="qrc_video_wrapper" style="position:relative;">
                            <video controls class="myVideo" style="height:200px !important" autoplay>
                              <source src="${chimpData[i].value.videoLink}" type="video/mp4">
                              <source src="${chimpData[i].value.videoLink}" type="video/avi">
                              <source src="${chimpData[i].value.videoLink}" type="video/ogg">
                            </video>
                        </div>
                    </div>`;
                  }
                  else
                  {
                    temp3_body = temp3_body + `<div class="section qrc_video qr_cc_card" style="display:${chimpData[i].value.enabled};">
                    <div class="qrc_heading" style="display:${chimpData[i].value.header.enabled}">
                        <h2>${chimpData[i].value.header.title}</h2>
                        <p>${chimpData[i].value.header.description}</p>
                    </div>
                        <div class="qrc_video_wrapper" style="position:relative;">
                            <video controls class="myVideo" style="height:200px !important" autoplay>
                              <source src="${chimpData[i].value.videoLink}" type="video/mp4">
                              <source src="${chimpData[i].value.videoLink}" type="video/avi">
                              <source src="${chimpData[i].value.videoLink}" type="video/ogg">

                            </video>
                        </div>
                    </div>`;              
                  }
                }
                else if(chimpData[i].value.type == "youtube")
                {
                  if(chimpData[i].value.cardEnabled == "none")
                  {
                    temp3_body = temp3_body + `<div class="section qrc_video qr_cc_card" style="display:${chimpData[i].value.enabled}; background-color:${settingState.colors.primaryColor}">
                    <div class="qrc_heading" style="display:${chimpData[i].value.header.enabled}">
                        <h2>${chimpData[i].value.header.title}</h2>
                        <p>${chimpData[i].value.header.description}</p>
                    </div>
                    <div class="qrc_video_wrapper" style="position:relative;">
                      <iframe width="100%" height="203" src="${chimpData[i].value.videoLink}" title="video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="z-index: 999;-webkit-border-bottom-right-radius: 18px; -webkit-border-bottom-left-radius: 18px; -moz-border-radius-bottomright: 18px; -moz-border-radius-bottomleft: 18px; border-bottom-right-radius: 18px; border-bottom-left-radius: 18px; overflow: hidden;"></iframe>                        
                    </div>
                  </div>`;
                  }
                  else
                  {
                    temp3_body = temp3_body + `<div class="section qrc_video qr_cc_card" style="display:${chimpData[i].value.enabled};">
                    <div class="qrc_heading" style="display:${chimpData[i].value.header.enabled}">
                        <h2>${chimpData[i].value.header.title}</h2>
                        <p>${chimpData[i].value.header.description}</p>
                    </div>
                    <div class="qrc_video_wrapper" style="position:relative;">
                      <iframe width="100%" height="203" src="${chimpData[i].value.videoLink}" title="video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="z-index: 999;-webkit-border-bottom-right-radius: 18px; -webkit-border-bottom-left-radius: 18px; -moz-border-radius-bottomright: 18px; -moz-border-radius-bottomleft: 18px; border-bottom-right-radius: 18px; border-bottom-left-radius: 18px; overflow: hidden;"></iframe>                        
                    </div>
                  </div>`;              
                  }
                }
              }
              else if(chimpData[i].type == "pdf")
              {
                temp3_body = temp3_body + `<div class="section qrc_social_links" style="display:${chimpData[i].value.enabled}">
                <ul class="qrc_social_links_list">${pdfItemList[pdfIndex]}</ul>
            </div>`;
                pdfIndex++;
              }
              else if(chimpData[i].type == "custom")
              {
                if(chimpData[i].value.cardEnabled == "none")
                {
                temp3_body = temp3_body + `<div class="section qrc_calltoaction qr_cc_card" style="display:${chimpData[i].value.enabled};background-color:${settingState.colors.primaryColor}">
                <div class="qrc_heading" style="display:${chimpData[i].value.header.enabled}">
                    <h2>${chimpData[i].value.header.title}</h2>
                    <p>${chimpData[i].value.header.description}</p>
                </div>
                <ul class="qrc_custom_list_tow_col">
                ${customItemList[customIndex]}
                </ul>
            </div>`;
                }
                else
                {
                temp3_body = temp3_body + `<div class="section qrc_calltoaction qr_cc_card" style="display:${chimpData[i].value.enabled}">
                <div class="qrc_heading" style="display:${chimpData[i].value.header.enabled}">
                    <h2>${chimpData[i].value.header.title}</h2>
                    <p>${chimpData[i].value.header.description}</p>
                </div>
                <ul class="qrc_custom_list_tow_col">
                ${customItemList[customIndex]}
                </ul>
            </div>`;                  
                }

                customIndex++;
              }
            

            }

            var temp3_footer = `
                  </div>
                  <div class="extra_button_wrapper" >
                      <button class="btn " onclick="showQrImage()" id="btn_page_qr_code"><i class="fa fa-qrcode"></i></button>
                      <button class="btn " id="btn_share_page"><i class="fa fa-upload"></i></button>
                  </div>
              </div></div>
              <div id="lightboxOverlay" tabindex="-1" class="lightboxOverlay" style="display: none;"></div>
              <div id="lightbox" tabindex="-1" class="lightbox" style="display: none;">
                  <div class="lb-outerContainer">
                      <div class="lb-container" data-type="">
                          <img class="lb-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" alt="">
                          <div class="lb-nav" style="display: flex; justify-content: space-between;">
                              <a class="lb-prev myPrev" aria-label="Previous image" onclick="prevImage()" data-type="" style="height:200px;display: flex;align-items:center;"><svg style="color: white; opacity:1" xmlns="http://www.w3.org/2000/svg" width="50" height="200" fill="currentColor" class="bi bi-chevron-compact-left" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z" fill="white"></path> </svg></a>
                              <a class="" aria-label="Next image" onclick="nextImage()" data-type="" style="height:200px;display: flex;align-items:center;"><svg style="color: white; height:200px;width:50px;opacity:1" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-compact-right" viewBox="0 0 16 16"> <path fill-rule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z" fill="white"></path> </svg></a>
                          </div>
                          <div class="lb-loader"><a class="lb-cancel" ></a></div>
                      </div>
                  </div>
                  <div class="lb-dataContainer">
                      <div class="lb-data">
                          <div class="lb-details">
                              <span class="lb-caption"></span>
                              <span class="lb-number"></span>
                          </div>
                          <div class="lb-closeContainer">
                              <a class="lb-close" onclick="cancelImageView()"><svg style="color: black" width="45" height="45" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="48" height="48" fill="white" fill-opacity="0.01"></rect><path d="M14 14L34 34" stroke="#333" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" fill="white"></path><path d="M14 34L34 14" stroke="#333" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" fill="white"></path></svg></a>
                          </div>
                      </div>
                  </div>
              </div>
          </body>
      <script type="text/javascript">
        setTimeout(() => {  document.getElementsByClassName('qr_page_loader')[0].style.display="none";}, "500");
        function saveScrollY()
        {
          localStorage.removeItem('scrollY');
          localStorage.setItem("scrollY", document.getElementById("myMainDiv").scrollTop);
          var scrollY = localStorage.getItem("scrollY");
        }

       $( document ).ready(function() {
          var scrollY = localStorage.getItem("scrollY");
          document.getElementById("myMainDiv").scrollTo(0, scrollY);
             
        });

        function showQrImage()
        {
          document.getElementById('qrc_page_qrcode_popup').style.height = 'auto';          
        }

        function hideQrImage()
        {
          document.getElementById('qrc_page_qrcode_popup').style.height = '0px';          
        }


        function imageView()
        {
          document.getElementById('lightboxOverlay').setAttribute('style', 'display: block; width: 100%; height: 798px;');
          document.getElementById('lightbox').setAttribute('style', 'top: 200px; left: 0px;');
          document.getElementsByClassName('lb-outerContainer')[0].setAttribute('style', 'width: 100%; height: 8px;');
          
          document.getElementsByClassName('lb-image')[0].setAttribute('style', 'width: 100%; height: 427px;');
          document.getElementsByClassName('lb-nav')[0].setAttribute('style', 'pointer-events: auto;display: flex;justify-content: space-between;');
          
          document.getElementsByClassName('lb-loader')[0].setAttribute('style', 'display: none;');
          document.getElementsByClassName('lb-dataContainer')[0].setAttribute('style', 'width: 100%;');


          var imgUrl = '';
          var pageNo = 1;
          var allPages = 1;

          if(event.target.tagName == 'A')
          {
            imgUrl = event.target.children[0].getAttribute('src');
            pageNo = Array.from(event.target.parentNode.parentNode.children).indexOf(event.target.parentNode) + 1;
            allPages = event.target.parentNode.parentNode.children.length;
          }
          else if(event.target.tagName == 'IMG')
          {
            imgUrl = event.target.getAttribute('src');
            pageNo = Array.from(event.target.parentNode.parentNode.parentNode.children).indexOf(event.target.parentNode.parentNode) + 1;
            allPages = event.target.parentNode.parentNode.parentNode.children.length;
          }

          document.getElementsByClassName('lb-image')[0].setAttribute('src', imgUrl);
          console.log(pageNo, allPages);

          document.getElementsByClassName('lb-number')[0].innerHTML='Image '+pageNo+' of '+allPages; 

          if(pageNo == 1 && allPages == 1)
          {
            document.getElementsByClassName('lb-nav')[0].children[0].setAttribute('data-type', 0);
            document.getElementsByClassName('lb-nav')[0].children[1].setAttribute('data-type', 2);

            document.getElementsByClassName('lb-nav')[0].children[0].children[0].setAttribute('style', 'color: white; opacity:0');

            document.getElementsByClassName('lb-nav')[0].children[1].children[0].setAttribute('style', 'color: white; height:200px;width:50px;opacity:0');
          }
          else if(pageNo == allPages)
          {
            document.getElementsByClassName('lb-nav')[0].children[0].setAttribute('data-type', pageNo-1);
            document.getElementsByClassName('lb-nav')[0].children[1].setAttribute('data-type', allPages+1);

            document.getElementsByClassName('lb-nav')[0].children[0].children[0].setAttribute('style', 'color: white; opacity:1');

            document.getElementsByClassName('lb-nav')[0].children[1].children[0].setAttribute('style', 'color: white; height:200px;width:50px;opacity:0');
          }
          else if(pageNo == 1)
          {
            document.getElementsByClassName('lb-nav')[0].children[0].setAttribute('data-type', pageNo-1);
            document.getElementsByClassName('lb-nav')[0].children[1].setAttribute('data-type', pageNo+1);

            document.getElementsByClassName('lb-nav')[0].children[0].children[0].setAttribute('style', 'color: white; opacity:0');

            document.getElementsByClassName('lb-nav')[0].children[1].children[0].setAttribute('style', 'color: white; height:200px;width:50px;opacity:1'); 
          }
          else
          {
            document.getElementsByClassName('lb-nav')[0].children[0].setAttribute('data-type', pageNo-1);

            document.getElementsByClassName('lb-nav')[0].children[1].setAttribute('data-type', pageNo+1);            

            document.getElementsByClassName('lb-nav')[0].children[0].children[0].setAttribute('style', 'color: white; opacity:1');

            document.getElementsByClassName('lb-nav')[0].children[1].children[0].setAttribute('style', 'color: white; height:200px;width:50px;opacity:1'); 

          }

          document.getElementsByClassName('lb-container')[0].setAttribute('data-type', allPages);
        }

        function cancelImageView()
        {
          console.log('cancelImageView');
          document.getElementById('lightboxOverlay').setAttribute('style', 'display: none;');
          document.getElementById('lightbox').setAttribute('style', 'display: none;');
          document.getElementsByClassName('lb-outerContainer')[0].setAttribute('style', '');
          document.getElementsByClassName('lb-image')[0].setAttribute('src', '');
          document.getElementsByClassName('lb-image')[0].setAttribute('style', '');
          document.getElementsByClassName('lb-nav')[0].setAttribute('style', '');
          document.getElementsByClassName('lb-loader')[0].setAttribute('style', '');
          document.getElementsByClassName('lb-dataContainer')[0].setAttribute('style', '');
          document.getElementsByClassName('lb-dataContainer')[0].setAttribute('style', '');
        }

        function nextImage()
        {
          var pageNo = Number(document.getElementsByClassName('lb-nav')[0].children[1].getAttribute('data-type'));     
          var allPages = Number(document.getElementsByClassName('lb-container')[0].getAttribute('data-type'));

          if(pageNo < 1 || pageNo > allPages)
            return;

          var imgUrl = '';

          document.getElementsByClassName('lb-number')[0].innerHTML='Image '+pageNo+' of '+allPages; 

          imgUrl = document.getElementsByClassName('qrc_gallery_list')[0].children[pageNo-1].children[0].children[0].getAttribute('src');

          document.getElementsByClassName('lb-image')[0].setAttribute('src', imgUrl);
          console.log(pageNo, allPages);
          if(pageNo == 1 && allPages == 1)
          {
            document.getElementsByClassName('lb-nav')[0].children[0].setAttribute('data-type', 0);
            document.getElementsByClassName('lb-nav')[0].children[1].setAttribute('data-type', 2);

            document.getElementsByClassName('lb-nav')[0].children[0].children[0].setAttribute('style', 'color: white; opacity:0');

            document.getElementsByClassName('lb-nav')[0].children[1].children[0].setAttribute('style', 'color: white; height:200px;width:50px;opacity:0');
          }
          else if(pageNo == allPages)
          {
            document.getElementsByClassName('lb-nav')[0].children[0].setAttribute('data-type', pageNo-1);
            document.getElementsByClassName('lb-nav')[0].children[1].setAttribute('data-type', allPages+1);

            document.getElementsByClassName('lb-nav')[0].children[0].children[0].setAttribute('style', 'color: white; opacity:1');

            document.getElementsByClassName('lb-nav')[0].children[1].children[0].setAttribute('style', 'color: white; height:200px;width:50px;opacity:0');
          }
          else if(pageNo == 1)
          {
            document.getElementsByClassName('lb-nav')[0].children[0].setAttribute('data-type', pageNo-1);
            document.getElementsByClassName('lb-nav')[0].children[1].setAttribute('data-type', pageNo+1);

            document.getElementsByClassName('lb-nav')[0].children[0].children[0].setAttribute('style', 'color: white; opacity:0');

            document.getElementsByClassName('lb-nav')[0].children[1].children[0].setAttribute('style', 'color: white; height:200px;width:50px;opacity:1'); 
          }
          else
          {
            document.getElementsByClassName('lb-nav')[0].children[0].setAttribute('data-type', pageNo-1);

            document.getElementsByClassName('lb-nav')[0].children[1].setAttribute('data-type', pageNo+1);            

            document.getElementsByClassName('lb-nav')[0].children[0].children[0].setAttribute('style', 'color: white; opacity:1');

            document.getElementsByClassName('lb-nav')[0].children[1].children[0].setAttribute('style', 'color: white; height:200px;width:50px;opacity:1'); 

          }
        }

        function prevImage()
        {
          var pageNo = Number(document.getElementsByClassName('lb-nav')[0].children[0].getAttribute('data-type'));     
          var allPages = Number(document.getElementsByClassName('lb-container')[0].getAttribute('data-type'));

          if(pageNo < 1 || pageNo > allPages)
            return;

          document.getElementsByClassName('lb-number')[0].innerHTML='Image '+pageNo+' of '+allPages; 

          var imgUrl = '';

          imgUrl = document.getElementsByClassName('qrc_gallery_list')[0].children[pageNo-1].children[0].children[0].getAttribute('src');

          document.getElementsByClassName('lb-image')[0].setAttribute('src', imgUrl);
          console.log(pageNo, allPages);
          if(pageNo == 1 && allPages == 1)
          {
            document.getElementsByClassName('lb-nav')[0].children[0].setAttribute('data-type', 0);
            document.getElementsByClassName('lb-nav')[0].children[1].setAttribute('data-type', 2);

            document.getElementsByClassName('lb-nav')[0].children[0].children[0].setAttribute('style', 'color: white; opacity:0');

            document.getElementsByClassName('lb-nav')[0].children[1].children[0].setAttribute('style', 'color: white; height:200px;width:50px;opacity:0');
          }
          else if(pageNo == allPages)
          {
            document.getElementsByClassName('lb-nav')[0].children[0].setAttribute('data-type', pageNo-1);
            document.getElementsByClassName('lb-nav')[0].children[1].setAttribute('data-type', allPages+1);

            document.getElementsByClassName('lb-nav')[0].children[0].children[0].setAttribute('style', 'color: white; opacity:1');

            document.getElementsByClassName('lb-nav')[0].children[1].children[0].setAttribute('style', 'color: white; height:200px;width:50px;opacity:0');
          }
          else if(pageNo == 1)
          {
            document.getElementsByClassName('lb-nav')[0].children[0].setAttribute('data-type', pageNo-1);
            document.getElementsByClassName('lb-nav')[0].children[1].setAttribute('data-type', pageNo+1);

            document.getElementsByClassName('lb-nav')[0].children[0].children[0].setAttribute('style', 'color: white; opacity:0');

            document.getElementsByClassName('lb-nav')[0].children[1].children[0].setAttribute('style', 'color: white; height:200px;width:50px;opacity:1'); 
          }
          else
          {
            document.getElementsByClassName('lb-nav')[0].children[0].setAttribute('data-type', pageNo-1);

            document.getElementsByClassName('lb-nav')[0].children[1].setAttribute('data-type', pageNo+1);            

            document.getElementsByClassName('lb-nav')[0].children[0].children[0].setAttribute('style', 'color: white; opacity:1');

            document.getElementsByClassName('lb-nav')[0].children[1].children[0].setAttribute('style', 'color: white; height:200px;width:50px;opacity:1'); 

          }

        }
      <\/script>
      </html>`;

      
    iframe.srcdoc = temp3_head + temp3_body + temp3_footer;
//      iframe.srcdoc = template3;
  }

  document.getElementById("qr_page_prev").appendChild(iframe);
  document.getElementById("qr_page_prev").children[0].style.width = "100%";
}