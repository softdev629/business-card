function choose_color(e) {
  e.target.nextElementSibling.value = e.target.value;

  if(e.target.id == "primary-color-picker")
  {
    settingState.colors.primaryColor = e.target.value;
  }else if(e.target.id == "secondary-color-picker")
  {
    settingState.colors.secondaryColor = e.target.value;
  }else if(e.target.id == "primary-profile-text-color")
  {
    settingState.colors.primaryProfileTextColor = e.target.value;
  }else if(e.target.id == "secondary-profile-text-color")
  {
    settingState.colors.secondaryProfileTextColor = e.target.value;
  }else if(e.target.id == "primary-text-color")
  {
    settingState.colors.primaryTextColor = e.target.value;
  }else if(e.target.id == "secondary-text-color")
  {
    settingState.colors.secondaryTextColor = e.target.value;    
  }else if(e.target.id == "colorpickerSqr_shapePaddingColor-input_select")
  {
    qrCodeState.qrPaddingColorAroundEyes.color1 = event.target.value;
    gPaddingColorFlag=0;

      if(gQrcodeImage)
      {
        imageQrCodeGenerate(1);

      }
      else
      {
        generateQRCode();        
      }
  }else if(e.target.id == "colorpickerG1qr_shapePaddingColor-input_select")
  {
    qrCodeState.qrPaddingColorAroundEyes.color2 = event.target.value;
    gPaddingColorFlag=1;

      if(gQrcodeImage)
      {
        imageQrCodeGenerate(1);

      }
      else
      {
        generateQRCode();        
      }
  }else if(e.target.id == "colorpickerG2qr_shapePaddingColor-input_select")
  {
    qrCodeState.qrPaddingColorAroundEyes.color3 = event.target.value;
    gPaddingColorFlag=1;

      if(gQrcodeImage)
      {
        imageQrCodeGenerate(1);

      }
      else
      {
        generateQRCode();        
      }
  }else if(e.target.id == "colorpickerSFg-input_select")
  {
    qrCodeState.qrForegroundColor.color1 = event.target.value;

      if(gQrcodeImage)
      {
        imageQrCodeGenerate(2);

      }
      else
      {
        generateQRCode();        
      }
  }else if(e.target.id == "colorpickerG1Fg-input_select")
  {
    qrCodeState.qrForegroundColor.color2 = event.target.value;
       if(gQrcodeImage)
      {
        imageQrCodeGenerate(2);

      }
      else
      {
        generateQRCode();        
      }
  }else if(e.target.id == "colorpickerG2Fg-input_select")
  {
    qrCodeState.qrForegroundColor.color3 = event.target.value;

      if(gQrcodeImage)
      {
        imageQrCodeGenerate(2);

      }
      else
      {
        generateQRCode();        
      }
  }else if(e.target.id == "colorpickerSFgS-input_select-input_select")
  {
    qrCodeState.qrCustomStrokeColor.color1 = event.target.value;
      if(gQrcodeImage)
      {
        imageQrCodeGenerate(2);

      }
      else
      {
        generateQRCode();        
      }
  }else if(e.target.id == "colorpickerG1FgS-input_select-input_select")
  {
    qrCodeState.qrCustomStrokeColor.color2 = event.target.value;
      if(gQrcodeImage)
      {
        imageQrCodeGenerate(2);

      }
      else
      {
        generateQRCode();        
      }
  }else if(e.target.id == "colorpickerG2FgS-input_select-input_select")
  {
    qrCodeState.qrCustomStrokeColor.color3 = event.target.value;
      if(gQrcodeImage)
      {
        imageQrCodeGenerate(2);

      }
      else
      {
        generateQRCode();        
      }
  }else if(e.target.id == "colorpickerSEye-input_select")
  {
    qrCodeState.qrCustomEyeColor.color1 = event.target.value;
      if(gQrcodeImage)
      {
        imageQrCodeGenerate(2);

      }
      else
      {
        generateQRCode();        
      }
  }else if(e.target.id == "colorpickerG1Eye-input_select")
  {
    qrCodeState.qrCustomEyeColor.color2 = event.target.value;
      if(gQrcodeImage)
      {
        imageQrCodeGenerate(2);

      }
      else
      {
        generateQRCode();        
      }
  }else if(e.target.id == "colorpickerG2Eye-input_select")
  {
    qrCodeState.qrCustomEyeColor.color3 = event.target.value;
      if(gQrcodeImage)
      {
        imageQrCodeGenerate(2);

      }
      else
      {
        generateQRCode();        
      }
  }else if(e.target.id == "colorpickerSEyeS-input_select")
  {
    qrCodeState.qrCustomEyeStrokeColor.color1 = event.target.value;
      if(gQrcodeImage)
      {
        imageQrCodeGenerate(2);

      }
      else
      {
        generateQRCode();        
      }
  }else if(e.target.id == "colorpickerG1EyeS-input_select")
  {
    qrCodeState.qrCustomEyeStrokeColor.color2 = event.target.value;
      if(gQrcodeImage)
      {
        imageQrCodeGenerate(2);

      }
      else
      {
        generateQRCode();        
      }
  }else if(e.target.id == "colorpickerG2EyeS-input_select")
  {
    qrCodeState.qrCustomEyeStrokeColor.color3 = event.target.value;
      if(gQrcodeImage)
      {
        imageQrCodeGenerate(2);

      }
      else
      {
        generateQRCode();        
      }
  }else if(e.target.id == "colorpickerSEyeball-input_select")
  {
    qrCodeState.qrCustomEyeballColor.color1 = event.target.value;
      if(gQrcodeImage)
      {
        imageQrCodeGenerate(2);

      }
      else
      {
        generateQRCode();        
      }
  }else if(e.target.id == "colorpickerG1Eyeball-input_select")
  {
    qrCodeState.qrCustomEyeballColor.color2 = event.target.value;
      if(gQrcodeImage)
      {
        imageQrCodeGenerate(2);

      }
      else
      {
        generateQRCode();        
      }
  }else if(e.target.id == "colorpickerG2Eyeball-input_select")
  {
    qrCodeState.qrCustomEyeballColor.color3 = event.target.value;
      if(gQrcodeImage)
      {
        imageQrCodeGenerate(2);

      }
      else
      {
        generateQRCode();        
      }
  }else if(e.target.id == "colorpickerSBg-input_select")
  {
    qrCodeState.qrCustomBackgroundColor.color1 = event.target.value;
      if(gQrcodeImage)
      {
        imageQrCodeGenerate(2);

      }
      else
      {
        generateQRCode();        
      }
  }else if(e.target.id == "colorpickerG1Bg-input_select")
  {
    qrCodeState.qrCustomBackgroundColor.color2 = event.target.value;
      if(gQrcodeImage)
      {
        imageQrCodeGenerate(2);

      }
      else
      {
        generateQRCode();        
      }
  }else if(e.target.id == "colorpickerG2Bg-input_select")
  {
    qrCodeState.qrCustomBackgroundColor.color3 = event.target.value;
      if(gQrcodeImage)
      {
        imageQrCodeGenerate(2);

      }
      else
      {
        generateQRCode();        
      }
  }

  document.getElementById("qr_page_prev").children[0].remove();
  showMobileIframe(templateNo);


}


$('.saved_style_wrapper').click(function() {
  $('.saved_style_wrapper').removeClass('selected');
  event.target.className = event.target.className + " selected";
});



function selectSavedStyle(event) {

  var id = 0;

  if (event.target.className.search('saved_style_card') >= 0) {
    id = event.target.id.slice(12);
    event.target.className = event.target.className + " selected";
  } else {
    id = event.target.parentElement.id.slice(12);
    event.target.parentElement.className = event.target.parentElement.className + " selected";
  }

  var imageId = 0;

  for (var i = 0; i < 3; i++) {
    if (backgroundImage[i] == savedStyle[id].backgroundImage) {
      imageId = i;
      break;
    }
  }
  $('.img_uploaded_card').removeClass('selected');
  document.getElementsByClassName('bg_img_upload_card_wrapper')[0]
    .children[imageId].className = document
    .getElementsByClassName('bg_img_upload_card_wrapper')[0].children[imageId].className + " selected";

  var fontId = 0;
  for (var i = 0; i < 3; i++) {
    if (fontStyle[i] == savedStyle[id].fontStyle) {
      fontId = i;
      break;
    }
  }
  $('.font_style_card').removeClass('selected');
  document.getElementsByClassName('font_style_card_wrapper')[0]
    .children[fontId].children[0].className = document
    .getElementsByClassName('bg_img_upload_card_wrapper')[0].children[fontId].children[0].className + " selected";

  $('#primary-color-picker').val(savedStyle[id].primaryColor);
  $('#secondary-color-picker').val(savedStyle[id]
    .secondaryColor);
  $('#primary-profile-text-color').val(savedStyle[id].primaryProfileTextColor);
  $(
    '#secondary-profile-text-colo').val(savedStyle[id].secondaryProfileTextColor);
  $('#primary-text-color').val(
    savedStyle[id].primaryTextColor);
  $('#secondary-text-color').val(savedStyle[id].secondaryTextColor);

}

function style_save() {
  if (initFlag) {
    initFlag = 0;
    document.getElementsByClassName("saved_styles")[0].innerHTML = "";
  }
  savedStyleId++;
  $('#style_name_input').val("");

  let child = document.createElement('div');
  child.style.width = "30%";
  child.innerHTML =
    '<div class="saved_style_wrapper col-md-4" style="max-width:100%;width:100%;" data-index="0" data-style_id="63c10a1a18a0344ab600d007">' +
    '<div class="saved_style_card" onclick="selectSavedStyle(event)" id="saved_style_' + savedStyleId + '">' +
    '<div class="saved_style_color">' +
    saving_color +
    '</div>' +
    "<div class=\"saved_style_bg\" style='background-image: url(" + saving_image + ");'></div>" +
    '<div class="saved_style_font saved_style_bg" style="background-image: url(\'' + saving_font + '\');"></div>' +
    '</div>' +
    $('#style_name_input').val() +
    '</div>';

  $(".saved_styles")[0].appendChild(child);
  $('#cancel-btn').click();


  savedStyle.push({
    id: savedStyleId,
    backgroundImage: saving_image,
    primaryColor: $('#primary-color-picker').val(),
    secondaryColor: $('#secondary-color-picker').val(),
    primaryProfileTextColor: $('#primary-profile-text-color').val(),
    secondaryProfileTextColor: $('#secondary-profile-text-color').val(),
    primaryTextColor: $('#primary-text-color').val(),
    secondaryTextColor: $('#secondary-text-color').val(),
    fontStyle: saving_font
  });

}

$('.font-style-img').click(function() {
  $('.font-style-img').parent().removeClass('selected');
  event.target.parentNode.className = event.target.parentNode.className + " selected";
  saving_font = event.target.src;
  settingState.fontStyle = saving_font;
  settingState.fontName = event.target.parentNode.getAttribute('data-type');

  if(settingState.fontName == "work_sans")
  {
    settingState.fontName = "Work Sans";
  }else if(settingState.fontName == "open_sans")
  {
    settingState.fontName = "Open Sans";
  }else if(settingState.fontName == "roboto")
  {
    settingState.fontName = "Roboto";
  }
  document.getElementById("qr_page_prev").children[0].remove();
  showMobileIframe(templateNo);
});

function componentToHex(c) {
  var hex = Number(c).toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {

  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function getRGB(rgbColor) {
  let result = rgbColor.slice(4, -1);
  let arr = result.split(', ');
  return rgbToHex(arr[0], arr[1], arr[2]);
}

$('.qr_color_panel_1').click(function() {
  var color1 = event.target.style.background;

  var color2 = event.target.nextElementSibling.style.background;

  var hexColor1 = getRGB(color1);
  var hexColor2 = getRGB(color2);
  $('.colorpicker-bg-primary-input').val(color1);

  document.getElementById('primary-color-picker').value = hexColor1;

  $('.colorpicker-bg-secondary-input').val(
    color2);
  document.getElementById('secondary-color-picker').value = hexColor2;
  $('.colorpicker-profile-primary-input').val('0x061244');
  $(
    '.colorpicker-profile-secondary-input').val('0x76839B');
  $('.colorpicker-profile-primary-input').val(
    '0x061244');
  $('.colorpicker-profile-secondary-input').val('0x76839B');
  $('.qr_color_panel_1').parent().parent()
    .removeClass('active');
  event.target.parentNode.parentNode.className = event.target.parentNode.parentNode
    .className + " active";
  saving_color = event.target.parentNode.innerHTML;
  settingState.colors = {
    primaryColor:hexColor1,
    secondaryColor:hexColor2,
    primaryProfileTextColor:"#FFFFFF",
    secondaryProfileTextColor:"#FFFFFF",
    primaryTextColor:"#061244",
    secondaryTextColor:"#061244"
  };
  document.getElementById("qr_page_prev").children[0].remove();
  showMobileIframe(templateNo);
});

$('.qr_color_panel_2').click(function() {
  var color1 = event.target.style.background;

  var color2 = event.target.nextElementSibling.style.background;

  var hexColor1 = getRGB(color1);
  var hexColor2 = getRGB(color2);
  $('.colorpicker-bg-primary-input').val(color1);


  document.getElementById('primary-color-picker').value = hexColor1;

  $('.colorpicker-bg-secondary-input').val(
    color2);
  document.getElementById('secondary-color-picker').value = hexColor2;

  $('.colorpicker-profile-primary-input').val('0x061244');
  $('.colorpicker-profile-secondary-input').val('0x76839B');
  $('.colorpicker-profile-primary-input').val('0x061244');
  $('.colorpicker-profile-secondary-input').val('0x76839B');
  $('.qr_color_panel_2').parent().parent().removeClass('active');
  event.target.parentNode.parentNode.className = event.target.parentNode.parentNode.className + " active";
  saving_color = event.target.parentNode.innerHTML;

});

