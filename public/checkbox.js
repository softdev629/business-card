

function checkbox()
{    var component = event.target;

    while(1){
      if(component.id){

        if(component.id.search('component_')!=0){
          if(component.parentNode)
            component = component.parentNode;
          else
            break;
        }
        else
          break;
      }else{
          if(component.parentNode){

            component = component.parentNode;
          }
          else
            break;
      }
    }

    var pIndex = Array.from(component.parentNode.children).indexOf(component);


    if(event.target.getAttribute('data-type')=='qrc_profilepic')
    {
      if (chimpData[pIndex].value.avatar.enabled == "block") {
        chimpData[pIndex].value.avatar.enabled = "none";

      } else {
        chimpData[pIndex].value.avatar.enabled = "block";
      }

      document.getElementById("qr_page_prev").children[0].remove();
      showMobileIframe(templateNo);
      return;
    }
    else if(event.target.getAttribute('data-type')=='qrc_profile_shortcut')
    {
      if (chimpData[pIndex].value.contacts.enabled == "block") {
        chimpData[pIndex].value.contacts.enabled = "none";

      } else {
        chimpData[pIndex].value.contacts.enabled = "block";
      }

      document.getElementById("qr_page_prev").children[0].remove();
      showMobileIframe(templateNo);
      return;
    }


  if (component.getAttribute('data-type') == "profile") {

    if (chimpData[pIndex].value.enabled == "block") {
      chimpData[pIndex].value.enabled = "none";

    } else {
      chimpData[pIndex].value.enabled = "block";
    }

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);
  }else if (event.target.getAttribute('data-type') == "card_bg_enable") {
    if (chimpData[pIndex].value.cardBack == "block") {
      chimpData[pIndex].value.cardBack = "none";

    } else {
      chimpData[pIndex].value.cardBack = "block";
    }

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);
  }else if (event.target.getAttribute('data-type') == "qrc_profilepic") {

    if (chimpData[pIndex].value.avatar.enabled == "block") {
      chimpData[pIndex].value.avatar.enabled = "none";

    } else {
      chimpData[pIndex].value.avatar.enabled = "block";
    }

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);
  } else if (event.target.getAttribute('data-type') == "qrc_profile_shortcut") {

    if (chimpData[pIndex].value.contacts.enabled == "block") {
      chimpData[pIndex].value.contacts.enabled = "none";

    } else {
      chimpData[pIndex].value.contacts.enabled = "block";
    }

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);
  } else if (event.target.getAttribute('data-type') == "qrc_heading_text") {

    if (chimpData[pIndex].value.enabled == "block") {
      chimpData[pIndex].value.enabled = "none";

    } else {
      chimpData[pIndex].value.enabled = "block";
    }

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);
  } else if (event.target.getAttribute('data-type') == 'qrc_gallery_wrapper') {

    if (chimpData[pIndex].value.enabled == "block") {
      chimpData[pIndex].value.enabled = "none";

    } else {
      chimpData[pIndex].value.enabled = "block";
    }

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);
  } else if (event.target.getAttribute('data-type') == 'qrc_heading_gallery') {

    if (chimpData[pIndex].value.headerEnable == "block") {
      chimpData[pIndex].value.headerEnable = "none";

    } else {
      chimpData[pIndex].value.headerEnable = "block";
    }

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);
  } else if (event.target.getAttribute('data-type') == 'qrc_social_links_1') {

    if (chimpData[pIndex].value.enabled == "block") {
      chimpData[pIndex].value.enabled = "none";

    } else {
      chimpData[pIndex].value.enabled = "block";
    }

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);
  } else if (event.target.getAttribute('data-type') == 'qrc_heading_social_link_1') {

    if (chimpData[pIndex].value.headerEnable == "block") {
      chimpData[pIndex].value.headerEnable = "none";

    } else {
      chimpData[pIndex].value.headerEnable = "block";
    }

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);
  } else if (event.target.getAttribute('data-type') == 'qrc_contact') {

    if (chimpData[pIndex].value.enabled == "block") {
      chimpData[pIndex].value.enabled = "none";

    } else {
      chimpData[pIndex].value.enabled = "block";
    }

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);
  } else if (event.target.getAttribute('data-type') == 'qrc_social_links_2') {

    if (chimpData[pIndex].value.enabled == "block") {
      chimpData[pIndex].value.enabled = "none";

    } else {
      chimpData[pIndex].value.enabled = "block";
    }

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);
  } else if (event.target.getAttribute('data-type') == 'socialLinksSubTitle') {

    var child = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;

    var parent = child.parentNode;
    Array.from(parent.children).indexOf(child);
    var index = Array.from(parent.children).indexOf(child);

    if (chimpData[pIndex].value.links[index].subtitle.enabled == "block") {
      chimpData[pIndex].value.links[index].subtitle.enabled = "none";
    } else {
      chimpData[pIndex].value.links[index].subtitle.enabled = "block";
    }

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);
  } else if (event.target.getAttribute('data-type') == 'qrc_heading_social_links_2') {

    if (chimpData[pIndex].value.headerEnabled == "block") {
      chimpData[pIndex].value.headerEnabled = "none";
    } else {
      chimpData[pIndex].value.headerEnabled = "block";
    }

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);
  } else if (event.target.getAttribute('data-type') == 'contact-floating-button') {
    if (chimpData[pIndex].value.floatingButton.enabled == "block") {
      chimpData[pIndex].value.floatingButton.enabled = "none";

    } else {
      chimpData[pIndex].value.floatingButton.enabled = "block";
    }

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);
  } else if (event.target.getAttribute('data-type') == 'contact-action-button') {

    var component = event.target;
    while(component.id.search('sub_comp_') < 0){
      component = component.parentNode;
    }    
    var subIndex = Array.from(component.parentNode.children).indexOf(component);

    if (chimpData[pIndex].value.contactItems[subIndex].actionButton.enabled == "block") {
      chimpData[pIndex].value.contactItems[subIndex].actionButton.enabled = "none";

    } else {
      chimpData[pIndex].value.contactItems[subIndex].actionButton.enabled = "block";
    }

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);
  } else if (event.target.getAttribute('data-type') == 'web-links-sub-title') {
    var component = event.target;
    while(component.id.search('sub_comp_') < 0){
      component = component.parentNode;
    }    
    var subIndex = Array.from(component.parentNode.children).indexOf(component);

    if (chimpData[pIndex].value.links[subIndex].subtitle.enabled == "block") {
      chimpData[pIndex].value.links[subIndex].subtitle.enabled = "none";
    } else {
      chimpData[pIndex].value.links[subIndex].subtitle.enabled = "block";
    }

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);
  } else if (event.target.getAttribute('data-type') == 'other-enable') {
    if (chimpData[pIndex].value.enabled == "block") {
      chimpData[pIndex].value.enabled = "none";

    } else {
      chimpData[pIndex].value.enabled = "block";
    }

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);
  } else if (event.target.getAttribute('data-type') == 'other-header-enable') {
    if (chimpData[pIndex].value.header.enabled == "block") {
      chimpData[pIndex].value.header.enabled = "none";

    } else {
      chimpData[pIndex].value.header.enabled = "block";
    }

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);
  } else if (event.target.getAttribute('data-type') == 'other-card-bg-enable') {
    if (chimpData[pIndex].value.cardEnabled == "block") {
      chimpData[pIndex].value.cardEnabled = "none";

    } else {
      chimpData[pIndex].value.cardEnabled = "block";
    }

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);
  } else if (event.target.getAttribute('data-type') == 'pdf-enable') {
    if (chimpData[pIndex].value.enabled == "block") {
      chimpData[pIndex].value.enabled = "none";

    } else {
      chimpData[pIndex].value.enabled = "block";
    }

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);
  } else if (event.target.getAttribute('data-type') == 'pdf-header-enable') {
    if (chimpData[pIndex].value.header.enabled == "block") {
      chimpData[pIndex].value.header.enabled = "none";

    } else {
      chimpData[pIndex].value.header.enabled = "block";
    }

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);
  } else if (event.target.getAttribute('data-type') == 'pdf-item-subtitle') {
    var component = event.target;
    while(component.id.search('sub_comp_') < 0){
      component = component.parentNode;
    }    
    var subIndex = Array.from(component.parentNode.children).indexOf(component);

    if (chimpData[pIndex].value.pdfItems[subIndex].subTitleEnabled == "block") {
      chimpData[pIndex].value.pdfItems[subIndex].subTitleEnabled = "none";
    } else {
      chimpData[pIndex].value.pdfItems[subIndex].subTitleEnabled = "block";
    }

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);
  } else if (event.target.getAttribute('data-type') == 'pdf-card-enable') {

    if (chimpData[pIndex].value.cardEnabled == "block") {
      chimpData[pIndex].value.cardEnabled = "none";

    } else {
      chimpData[pIndex].value.cardEnabled = "block";
    }

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);
  } else if (event.target.getAttribute('data-type') == 'video-enable') {
    if (chimpData[pIndex].value.enabled == "block") {
      chimpData[pIndex].value.enabled = "none";

    } else {
      chimpData[pIndex].value.enabled = "block";
    }

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);
  } else if (event.target.getAttribute('data-type') == 'video-header-enable') {
    if (chimpData[pIndex].value.header.enabled == "block") {
      chimpData[pIndex].value.header.enabled = "none";

    } else {
      chimpData[pIndex].value.header.enabled = "block";
    }

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);
  } else if (event.target.getAttribute('data-type') == 'video-card-enable') {

    if (chimpData[pIndex].value.cardEnabled == "block") {
      chimpData[pIndex].value.cardEnabled = "none";

    } else {
      chimpData[pIndex].value.cardEnabled = "block";
    }

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);
  } else if (event.target.getAttribute('data-type') == 'button-enable') {
    if (chimpData[pIndex].value.enabled == "block") {
      chimpData[pIndex].value.enabled = "none";

    } else {
      chimpData[pIndex].value.enabled = "block";
    }

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);
  } else if (event.target.getAttribute('data-type') == 'button-header-enable') {
    if (chimpData[pIndex].value.header.enabled == "block") {
      chimpData[pIndex].value.header.enabled = "none";

    } else {
      chimpData[pIndex].value.header.enabled = "block";
    }

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);
  } else if (event.target.getAttribute('data-type') == 'button-card-enable') {
    if (chimpData[pIndex].value.cardEnabled == "block") {
      chimpData[pIndex].value.cardEnabled = "none";

    } else {
      chimpData[pIndex].value.cardEnabled = "block";
    }


    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);
  }



}

