   function showDesignPopUp(id)
  { 

    
    $('#desgin_qrcode_modal').modal("show");  
    if(id == '#gntr_qrshapes_tab-1')
    {
      $('#gntr_qrshapes_tab-1').removeClass('hiliteNew').removeClass('active').removeClass('show').addClass('hiliteNew').addClass('active').addClass('show');    
      $('#gntr_color_tab-1').removeClass('hiliteNew').removeClass('active').removeClass('show');    
      $('#gntr_bgimg_tab-1').removeClass('hiliteNew').removeClass('active').removeClass('show');    

      document.getElementById('gntr_qrshapes_tab-1').setAttribute('aria-selected', 'true');
      document.getElementById('gntr_color_tab-1').setAttribute('aria-selected', 'false');
      document.getElementById('gntr_bgimg_tab-1').setAttribute('aria-selected', 'false');


      document.getElementById('gntr_qrshapes_1').style.display = 'block';
      document.getElementById('gntr_color_1').style.display = 'none';
      document.getElementById('gntr_bgimg_1').style.display = 'none';

      document.getElementById('gntr-tab-1').children[0].children[0].setAttribute('aria-selected', 'true');
      document.getElementById('gntr-tab-1').children[1].children[0].setAttribute('aria-selected', 'false');
      document.getElementById('gntr-tab-1').children[2].children[0].setAttribute('aria-selected', 'false');

      $('#gntr_qrshapes_1').removeClass('active').removeClass('show');
      $('#gntr_color_1').removeClass('active').removeClass('show');
      $('#gntr_bgimg_1').removeClass('active').removeClass('show');
      $('#gntr_qrshapes_1').addClass('active').addClass('show');
    }
    else if(id == '#gntr_color_tab-1')
    {
      $('#gntr_qrshapes_tab-1').removeClass('hiliteNew').removeClass('active').removeClass('show');    
      $('#gntr_color_tab-1').removeClass('hiliteNew').removeClass('active').removeClass('show').addClass('hiliteNew').addClass('active').addClass('show');    
      $('#gntr_bgimg_tab-1').removeClass('hiliteNew').removeClass('active').removeClass('show');    

      document.getElementById('gntr_qrshapes_tab-1').setAttribute('aria-selected', 'false');
      document.getElementById('gntr_color_tab-1').setAttribute('aria-selected', 'true');
      document.getElementById('gntr_bgimg_tab-1').setAttribute('aria-selected', 'false');


      document.getElementById('gntr_qrshapes_1').style.display = 'none';
      document.getElementById('gntr_color_1').style.display = 'block';
      document.getElementById('gntr_bgimg_1').style.display = 'none';

      document.getElementById('gntr-tab-1').children[0].children[0].setAttribute('aria-selected', 'false');
      document.getElementById('gntr-tab-1').children[1].children[0].setAttribute('aria-selected', 'true');
      document.getElementById('gntr-tab-1').children[2].children[0].setAttribute('aria-selected', 'false');

      $('#gntr_qrshapes_1').removeClass('active').removeClass('show');
      $('#gntr_color_1').removeClass('active').removeClass('show');
      $('#gntr_bgimg_1').removeClass('active').removeClass('show');
      $('#gntr_color_1').addClass('active').addClass('show');
    }
    else if(id == '#gntr_bgimg_tab-1')
    {
      $('#gntr_qrshapes_tab-1').removeClass('hiliteNew').removeClass('active').removeClass('show');    
      $('#gntr_color_tab-1').removeClass('hiliteNew').removeClass('active').removeClass('show');    
      $('#gntr_bgimg_tab-1').removeClass('hiliteNew').removeClass('active').removeClass('show').addClass('hiliteNew').addClass('active').addClass('show');    

      document.getElementById('gntr_qrshapes_tab-1').setAttribute('aria-selected', 'false');
      document.getElementById('gntr_color_tab-1').setAttribute('aria-selected', 'false');
      document.getElementById('gntr_bgimg_tab-1').setAttribute('aria-selected', 'true');


      document.getElementById('gntr_qrshapes_1').style.display = 'none';
      document.getElementById('gntr_color_1').style.display = 'none';
      document.getElementById('gntr_bgimg_1').style.display = 'block';

      document.getElementById('gntr-tab-1').children[0].children[0].setAttribute('aria-selected', 'false');
      document.getElementById('gntr-tab-1').children[1].children[0].setAttribute('aria-selected', 'false');
      document.getElementById('gntr-tab-1').children[2].children[0].setAttribute('aria-selected', 'true');

      $('#gntr_qrshapes_1').removeClass('active').removeClass('show');
      $('#gntr_color_1').removeClass('active').removeClass('show');
      $('#gntr_bgimg_1').removeClass('active').removeClass('show');
      $('#gntr_bgimg_1').addClass('active').addClass('show');
    }


  } 

  function qrShapeTabShow()
  {
    document.getElementById('gntr-tab-1').children[0].children[0].setAttribute('aria-selected', 'false');
    document.getElementById('gntr-tab-1').children[1].children[0].setAttribute('aria-selected', 'false');
    document.getElementById('gntr-tab-1').children[2].children[0].setAttribute('aria-selected', 'false');
    event.target.setAttribute('aria-selected', 'ture');
    if(event.target.id == 'gntr_qrshapes_tab-1')
    {
      if(window.localStorage.getItem('tabId'))
      {
        window.localStorage.removeItem('tabId');
        window.localStorage.setItem('tabId', 1);
      }
      document.getElementById('gntr_qrshapes_1').style.display = 'block';
      document.getElementById('gntr_color_1').style.display = 'none';
      document.getElementById('gntr_bgimg_1').style.display = 'none';
    }
    else if(event.target.id == 'gntr_color_tab-1')
    {
      if(window.localStorage.getItem('tabId'))
      {
        window.localStorage.removeItem('tabId');
        window.localStorage.setItem('tabId', 2);
      }
      document.getElementById('gntr_qrshapes_1').style.display = 'none';
      document.getElementById('gntr_color_1').style.display = 'block';
      document.getElementById('gntr_bgimg_1').style.display = 'none';
    }
    else if(event.target.id == 'gntr_bgimg_tab-1')
    {
      if(window.localStorage.getItem('tabId'))
      {
        window.localStorage.removeItem('tabId');
        window.localStorage.setItem('tabId', 3);
      }
      document.getElementById('gntr_qrshapes_1').style.display = 'none';
      document.getElementById('gntr_color_1').style.display = 'none';
      document.getElementById('gntr_bgimg_1').style.display = 'block';
    }
  }

  function desgin_qrcode_modal_hide()
  {
    document.getElementById('gntr-tab-1').children[0].children[0].setAttribute('aria-selected', 'false');
    document.getElementById('gntr-tab-1').children[1].children[0].setAttribute('aria-selected', 'false');
    document.getElementById('gntr-tab-1').children[2].children[0].setAttribute('aria-selected', 'true');



    if(window.localStorage.getItem('tabId'))
    {
      window.localStorage.removeItem('tabId');
      window.localStorage.setItem('tabId', 3);
    }
    document.getElementById('gntr_qrshapes_1').style.display = 'none';
    document.getElementById('gntr_color_1').style.display = 'none';
    document.getElementById('gntr_bgimg_1').style.display = 'block';
    $('#desgin_qrcode_modal').modal('hide');    
    saveQrImage();
  }

  function qrShapeClick()
  {
    document.getElementsByClassName('popup_gntr_pic_list')[0].children[0].className = "js_qr_action_item";
    document.getElementsByClassName('popup_gntr_pic_list')[0].children[1].className = "js_qr_action_item";
    event.target.parentNode.className = "js_qr_action_item active";
    var child = event.target.parentNode;
    var parent = child.parentNode;
    var index = Array.from(parent.children).indexOf(child);
    if(index == 0)
    {
      qrCodeState.qrShape = 'rectangle';

      document.getElementById('qr_shapeborder_options_border').style.display = "none";
      if(gQrcodeImage)
      { 
        imageQrCodeGenerate(1);
      }
      else
      {
        generateQRCode();        
      }

    }
    else if(index == 1)
    {
      qrCodeState.qrShape = 'circle';

      document.getElementById('qr_shapeborder_options_border').style.display = "block";
      qrCodeState.qrPaddingColorAroundEyes.color1 = '#ffffff';
      qrCodeState.qrPaddingColorAroundEyes.color2 = '#f0f0ff';
      qrCodeState.qrPaddingColorAroundEyes.color3 = '#f0f0ff';
      document.getElementById('qrcodeDiv').parentNode.style.backgroundColor = '#ffffff';

      if(gQrcodeImage)
      {
        imageQrCodeGenerate(1);
      }
      else
      {
        generateQRCode();        
      }
    }



  }

  function qr_shapeBorder()
  {


    qrCodeState.qrShapeBorderSize = $('#qr_shapeBorder').val();
      if(gQrcodeImage)
      {
        imageQrCodeGenerate(1);
      }
      else
      {
        generateQRCode();        
      }
  }

  function qr_shapePadding()
  {


    qrCodeState.qrPaddingAroundEyes= $('#qr_shapePadding').val();
      if(gQrcodeImage)
      {
        imageQrCodeGenerate(1);
      }
      else
      {
        generateQRCode();        
      }
  }

  function qrShapeCancel()
  {
    if(event.target.tagName == "I")
    {
      event.target.parentNode.parentNode.className = 'js_qr_action_item';
    } 
    else if(event.target.tagName == "DIV")
    {
      event.target.parentNode.className = 'js_qr_action_item';
    }
  }

  function qrColorCheckBox()
  {
    if(event.target.id == 'colorPickerHeaderChkboxqr_shapePaddingColor')
    {

      if(event.target.checked == true)
      {
        qrCodeState.qrPaddingColorAroundEyes.enabled = event.target.checked;        
        event.target.parentNode.nextElementSibling.className = 'colorPicker trans ';
      }
      else
      {
        qrCodeState.qrPaddingColorAroundEyes.enabled = event.target.checked;        
        event.target.parentNode.nextElementSibling.className = 'colorPicker trans hide'; 
      }

    }
    else if(event.target.id == "qr_shapeNeglectLTPadding")
    {
      if(event.target.checked == true)
      {
        qrCodeState.qrRemoveLeftTopAroundEyes = event.target.checked;
      }
      else
      {
        qrCodeState.qrRemoveLeftTopAroundEyes = event.target.checked;
      }

    }
    else if(event.target.id == "colorPickerHeaderChkboxFg")
    {
      if(event.target.checked == true)
      {
        qrCodeState.qrForegroundColor.enabled = event.target.checked;        
        event.target.parentNode.nextElementSibling.className = 'colorPicker trans ';
      }
      else
      {
        qrCodeState.qrForegroundColor.enabled = event.target.checked;        
        event.target.parentNode.nextElementSibling.className = 'colorPicker trans hide'; 
      }
    }
    else if(event.target.id == "colorPickerHeaderChkboxFgS")
    {
      if(event.target.checked == true)
      {
        qrCodeState.qrCustomStrokeColor.enabled = event.target.checked;        
        event.target.parentNode.nextElementSibling.className = 'colorPicker trans ';
      }
      else
      {
        qrCodeState.qrCustomStrokeColor.enabled = event.target.checked;        
        event.target.parentNode.nextElementSibling.className = 'colorPicker trans hide'; 
      }
    }
    else if(event.target.id == "colorPickerHeaderChkboxEye")
    {
      if(event.target.checked == true)
      {
        qrCodeState.qrCustomEyeColor.enabled = event.target.checked;        
        event.target.parentNode.nextElementSibling.className = 'colorPicker trans ';
      }
      else
      {
        qrCodeState.qrCustomEyeColor.enabled = event.target.checked;        
        event.target.parentNode.nextElementSibling.className = 'colorPicker trans hide'; 
      }
    }
    else if(event.target.id == "colorPickerHeaderChkboxEyeS")
    {
      if(event.target.checked == true)
      {
        qrCodeState.qrCustomEyeStrokeColor.enabled = event.target.checked;        
        event.target.parentNode.nextElementSibling.className = 'colorPicker trans ';
      }
      else
      {
        qrCodeState.qrCustomEyeStrokeColor.enabled = event.target.checked;        
        event.target.parentNode.nextElementSibling.className = 'colorPicker trans hide'; 
      }
    }
    else if(event.target.id == "colorPickerHeaderChkboxEyeball")
    {
      if(event.target.checked == true)
      {
        qrCodeState.qrCustomEyeballColor.enabled = event.target.checked;        
        event.target.parentNode.nextElementSibling.className = 'colorPicker trans ';
      }
      else
      {
        qrCodeState.qrCustomEyeballColor.enabled = event.target.checked;        
        event.target.parentNode.nextElementSibling.className = 'colorPicker trans hide'; 
      }
    }
    else if(event.target.id == "colorPickerHeaderChkboxBg")
    {
      if(event.target.checked == true)
      {
        qrCodeState.qrCustomBackgroundColor.enabled = event.target.checked;        
        event.target.parentNode.nextElementSibling.className = 'colorPicker trans ';
      }
      else
      {
        qrCodeState.qrCustomBackgroundColor.enabled = event.target.checked;        
        event.target.parentNode.nextElementSibling.className = 'colorPicker trans hide'; 
      }
    }    
    
    if(gQrcodeImage)
    {
      if(event.target.id == "colorPickerHeaderChkboxqr_shapePaddingColor" || event.target.id == "qr_shapeNeglectLTPadding")
        imageQrCodeGenerate(1);
      else
        imageQrCodeGenerate(2);
    }
    else
    {
      generateQRCode();        
    }
  }

  function qrChangeRadio(id)
  {

    if(event.target.id == "colortypeSqr_shapePaddingColor" || event.target.id == "colortypeGqr_shapePaddingColor")
    {
      if(id == 1)
      {
        qrCodeState.qrPaddingColorAroundEyes.colorType = "singleColor";
        event.target.parentNode.parentNode.nextElementSibling.className = 'gradient_color dflex trans';
        event.target.parentNode.parentNode.nextElementSibling.nextElementSibling.className = 'gradient_color dflex trans hide';
        gPaddingColorFlag = 0;
      }
      else if(id == 2)
      {
        qrCodeState.qrPaddingColorAroundEyes.colorType = "gradientColor";
        event.target.parentNode.parentNode.nextElementSibling.className = 'gradient_color dflex trans hide';
        event.target.parentNode.parentNode.nextElementSibling.nextElementSibling.className = 'gradient_color dflex trans';
        gPaddingColorFlag = 1;
      }

    }
    else if (event.target.id == "colortypeSFg" || event.target.id == "colortypeGFg") 
    {
      if(id == 1)
      {
        qrCodeState.qrForegroundColor.colorType = "singleColor";
        event.target.parentNode.parentNode.nextElementSibling.className = 'gradient_color dflex trans';
        event.target.parentNode.parentNode.nextElementSibling.nextElementSibling.className = 'gradient_color dflex trans hide';

      }
      else if(id == 2)
      {
        qrCodeState.qrForegroundColor.colorType = "gradientColor";
        event.target.parentNode.parentNode.nextElementSibling.className = 'gradient_color dflex trans hide';
        event.target.parentNode.parentNode.nextElementSibling.nextElementSibling.className = 'gradient_color dflex trans';        
      }
    }
    else if (event.target.id == "colortypeSFgS" || event.target.id == "colortypeGFgS") 
    {
      if(id == 1)
      {
        qrCodeState.qrCustomStrokeColor.colorType = "singleColor";
        event.target.parentNode.parentNode.nextElementSibling.className = 'gradient_color dflex trans';
        event.target.parentNode.parentNode.nextElementSibling.nextElementSibling.className = 'gradient_color dflex trans hide';
      }
      else if(id == 2)
      {
        qrCodeState.qrCustomStrokeColor.colorType = "gradientColor";
        event.target.parentNode.parentNode.nextElementSibling.className = 'gradient_color dflex trans hide';
        event.target.parentNode.parentNode.nextElementSibling.nextElementSibling.className = 'gradient_color dflex trans';        
      }
    }
    else if (event.target.id == "colortypeSEye" || event.target.id == "colortypeGEye") 
    {
      if(id == 1)
      {
        qrCodeState.qrCustomEyeColor.colorType = "singleColor";
        event.target.parentNode.parentNode.nextElementSibling.className = 'gradient_color dflex trans';
        event.target.parentNode.parentNode.nextElementSibling.nextElementSibling.className = 'gradient_color dflex trans hide';
      }
      else if(id == 2)
      {
        qrCodeState.qrCustomEyeColor.colorType = "gradientColor";
        event.target.parentNode.parentNode.nextElementSibling.className = 'gradient_color dflex trans hide';
        event.target.parentNode.parentNode.nextElementSibling.nextElementSibling.className = 'gradient_color dflex trans';        
      }

    }
    else if (event.target.id == "colortypeSEyeS" || event.target.id == "colortypeGEyeS") 
    {
      if(id == 1)
      {
        qrCodeState.qrCustomEyeStrokeColor.colorType = "singleColor";
        event.target.parentNode.parentNode.nextElementSibling.className = 'gradient_color dflex trans';
        event.target.parentNode.parentNode.nextElementSibling.nextElementSibling.className = 'gradient_color dflex trans hide';
      }
      else if(id == 2)
      {
        qrCodeState.qrCustomEyeStrokeColor.colorType = "gradientColor";
        event.target.parentNode.parentNode.nextElementSibling.className = 'gradient_color dflex trans hide';
        event.target.parentNode.parentNode.nextElementSibling.nextElementSibling.className = 'gradient_color dflex trans';        
      }

    }
    else if (event.target.id == "colortypeSEyeball" || event.target.id == "colortypeGEyeball") 
    {
      if(id == 1)
      {
        qrCodeState.qrCustomEyeballColor.colorType = "singleColor";
        event.target.parentNode.parentNode.nextElementSibling.className = 'gradient_color dflex trans';
        event.target.parentNode.parentNode.nextElementSibling.nextElementSibling.className = 'gradient_color dflex trans hide';
      }
      else if(id == 2)
      {
        qrCodeState.qrCustomEyeballColor.colorType = "gradientColor";
        event.target.parentNode.parentNode.nextElementSibling.className = 'gradient_color dflex trans hide';
        event.target.parentNode.parentNode.nextElementSibling.nextElementSibling.className = 'gradient_color dflex trans';        
      }

    }
    else if (event.target.id == "colortypeSBg" || event.target.id == "colortypeGBg") 
    {
      if(id == 1)
      {
        qrCodeState.qrCustomBackgroundColor.colorType = "singleColor";
        event.target.parentNode.parentNode.nextElementSibling.className = 'gradient_color dflex trans';
        event.target.parentNode.parentNode.nextElementSibling.nextElementSibling.className = 'gradient_color dflex trans hide';
      }
      else if(id == 2)
      {
        qrCodeState.qrCustomBackgroundColor.colorType = "gradientColor";
        event.target.parentNode.parentNode.nextElementSibling.className = 'gradient_color dflex trans hide';
        event.target.parentNode.parentNode.nextElementSibling.nextElementSibling.className = 'gradient_color dflex trans';        
      }

    }
    else if (event.target.id == "autoColorType1") 
    {
      qrCodeState.qrDecorateAutoColor.colorType = "gradientColor";
    }
    else if (event.target.id == "autoColorType2") 
    {
      qrCodeState.qrDecorateAutoColor.colorType = "gradientColor";
    }
    else if (event.target.id == "autoColorType3") 
    {
      qrCodeState.qrDecorateAutoColor.colorType = "gradientColor";
    }
    else if (event.target.id == "autoColorType4") 
    {
      qrCodeState.qrDecorateAutoColor.colorType = "gradientColor";
    }
    else if (event.target.id == "colortypeSuserPicture" || event.target.id == "colortypeGuserPicture" ) 
    {
      if(id == 1)
      {
        qrCodeState.qrFillWhiteSpace.colorType = "singleColor";
        event.target.parentNode.parentNode.nextElementSibling.className = 'gradient_color dflex trans';
        event.target.parentNode.parentNode.nextElementSibling.nextElementSibling.className = 'gradient_color dflex trans hide';
      }
      else if(id == 2)
      {
        qrCodeState.qrFillWhiteSpace.colorType = "gradientColor";
        event.target.parentNode.parentNode.nextElementSibling.className = 'gradient_color dflex trans hide';
        event.target.parentNode.parentNode.nextElementSibling.nextElementSibling.className = 'gradient_color dflex trans';        
      }
    }
    else if (event.target.id == "colortypeSuserPictureDimmingColor" || event.target.id == "colortypeGuserPictureDimmingColor") 
    {
      if(id == 1)
      {
        qrCodeState.qrBackgroundDimming.colorType = "singleColor";
        event.target.parentNode.parentNode.nextElementSibling.className = 'gradient_color dflex trans';
        event.target.parentNode.parentNode.nextElementSibling.nextElementSibling.className = 'gradient_color dflex trans hide';
      }
      else if(id == 2)
      {
        qrCodeState.qrBackgroundDimming.colorType = "gradientColor";
        event.target.parentNode.parentNode.nextElementSibling.className = 'gradient_color dflex trans hide';
        event.target.parentNode.parentNode.nextElementSibling.nextElementSibling.className = 'gradient_color dflex trans';        
      }
    }
      if(gQrcodeImage)
      {
        if(event.target.id == "colortypeSqr_shapePaddingColor" || event.target.id == "colortypeGqr_shapePaddingColor")
        {
          imageQrCodeGenerate(1);
        }
        else
        {
          imageQrCodeGenerate(2);
        }
      }
      else
      {
        generateQRCode();        
      }
  }

  function change_input_color()
  {
    var shapingFlag = 0;
    if(event.target.id == "colorpickerSqr_shapePaddingColor-input")
    {
      qrCodeState.qrPaddingColorAroundEyes.color1 = event.target.value;      
      gPaddingColorFlag=0;
      shapingFlag = 1;
    }
    else if(event.target.id == "colorpickerG1qr_shapePaddingColor-input")
    {
      qrCodeState.qrPaddingColorAroundEyes.color2 = event.target.value;      
      gPaddingColorFlag=1;
      shapingFlag = 1;
    }
    else if(event.target.id == "colorpickerG2qr_shapePaddingColor-input")
    {
      qrCodeState.qrPaddingColorAroundEyes.color3 = event.target.value;            
      gPaddingColorFlag=1;
      shapingFlag = 1;
    }
    else if(event.target.id == "colorpickerSFg-input")
    {
      qrCodeState.qrForegroundColor.color1 = event.target.value;            
    }
    else if(event.target.id == "colorpickerG1Fg-input")
    {
      qrCodeState.qrForegroundColor.color2 = event.target.value;            
    }
    else if(event.target.id == "colorpickerG2Fg-input")
    {
      qrCodeState.qrForegroundColor.color3 = event.target.value;            
    }
    else if(event.target.id == "colorpickerSFgS-input")
    {
      qrCodeState.qrCustomStrokeColor.color1 = event.target.value;            
    }
    else if(event.target.id == "colorpickerG1FgS-input")
    {
      qrCodeState.qrCustomStrokeColor.color2 = event.target.value;            
    }
    else if(event.target.id == "colorpickerG2FgS-input")
    {
      qrCodeState.qrCustomStrokeColor.color3 = event.target.value;            
    }
    else if(event.target.id == "colorpickerSEye-input")
    {
      qrCodeState.qrCustomEyeColor.color1 = event.target.value;            
    }
    else if(event.target.id == "colorpickerG1Eye-input")
    {
      qrCodeState.qrCustomEyeColor.color2 = event.target.value;            
    }
    else if(event.target.id == "colorpickerG2Eye-input")
    {
      qrCodeState.qrCustomEyeColor.color3 = event.target.value;            
    }
    else if(event.target.id == "colorpickerSEyeS-input")
    {
      qrCodeState.qrCustomEyeStrokeColor.color1 = event.target.value;            
    }
    else if(event.target.id == "colorpickerG1EyeS-input")
    {
      qrCodeState.qrCustomEyeStrokeColor.color2 = event.target.value;            
    }
    else if(event.target.id == "colorpickerG2EyeS-input")
    {
      qrCodeState.qrCustomEyeStrokeColor.color3 = event.target.value;            
    }
    else if(event.target.id == "colorpickerSEyeball-input")
    {
      qrCodeState.qrCustomEyeballColor.color1 = event.target.value;            
    }
    else if(event.target.id == "colorpickerG1Eyeball-input")
    {
      qrCodeState.qrCustomEyeballColor.color2 = event.target.value;            
    }
    else if(event.target.id == "colorpickerG2Eyeball-input")
    {
      qrCodeState.qrCustomEyeballColor.color3 = event.target.value;            
    }
    else if(event.target.id == "colorpickerSBg-input")
    {
      qrCodeState.qrCustomBackgroundColor.color1 = event.target.value;            
    }
    else if(event.target.id == "colorpickerG1Bg-input")
    {
      qrCodeState.qrCustomBackgroundColor.color2 = event.target.value;            
    }
    else if(event.target.id == "colorpickerG2Bg-input")
    {
      qrCodeState.qrCustomBackgroundColor.color3 = event.target.value;            
    }
    else if(event.target.id == "colorpickerSuserPicture-input")
    {
      qrCodeState.qrFillWhiteSpace.color1 = event.target.value;            
    }
    else if(event.target.id == "colorpickerG1userPicture-input")
    {
      qrCodeState.qrFillWhiteSpace.color2 = event.target.value;            
    }
    else if(event.target.id == "colorpickerG2userPicture-input")
    {
      qrCodeState.qrFillWhiteSpace.color3 = event.target.value;            
    }
    else if(event.target.id == "colorpickerSuserPictureDimmingColor-input")
    {
      qrCodeState.qrBackgroundDimming.color1 = event.target.value;            
    }
    else if(event.target.id == "colorpickerG1userPictureDimmingColor-input")
    {
      qrCodeState.qrBackgroundDimming.color2 = event.target.value;            
    }
    else if(event.target.id == "colorpickerG2userPictureDimmingColor-input")
    {
      qrCodeState.qrBackgroundDimming.color3 = event.target.value;            
    }


      if(gQrcodeImage)
      {
        if(shapingFlag == 1)
          imageQrCodeGenerate(1);
        else
          imageQrCodeGenerate(2);
      }
      else
      {
        generateQRCode();        
      }
  }

  function gradientSelect()
  {
    if(event.target.id == 'colorpickerGTqr_shapePaddingColor')
    {
      qrCodeState.qrPaddingColorAroundEyes.gradientType = event.target.value;             
    }
    else if(event.target.id == 'colorpickerGTFg')
    {
      qrCodeState.qrForegroundColor.gradientType = event.target.value;             
    }
    else if(event.target.id == 'colorpickerGTFgS')
    {
      qrCodeState.qrCustomStrokeColor.gradientType = event.target.value;             
    }
    else if(event.target.id == 'colorpickerGTEye')
    {
      qrCodeState.qrCustomEyeColor.gradientType = event.target.value;             
    }
    else if(event.target.id == 'colorpickerGTEyeS')
    {
      qrCodeState.qrCustomEyeStrokeColor.gradientType = event.target.value;             
    }
    else if(event.target.id == 'colorpickerGTEyeball')
    {
      qrCodeState.qrCustomEyeballColor.gradientType = event.target.value;             
    }
    else if(event.target.id == 'colorpickerGTBg')
    {
      qrCodeState.qrCustomBackgroundColor.gradientType = event.target.value;             
    }
    else if(event.target.id == 'colorpickerGTuserPicture')
    {
      qrCodeState.qrFillWhiteSpace.gradientType = event.target.value;             
    }
    else if(event.target.id == 'colorpickerGTuserPictureDimmingColor')
    {
      qrCodeState.qrBackgroundDimming.gradientType = event.target.value;             
    }
      if(gQrcodeImage)
      {
        if(event.target.id == 'colorpickerGTqr_shapePaddingColor')
          imageQrCodeGenerate(1);
        else
          imageQrCodeGenerate(2);
      }
      else
      {
        generateQRCode();        
      }
  }


function setPreSetColorOptions1(id)
{
  var hexColor1; var hexColor2;

  if(event.target.width == '50%')
  {
    hexColor1 = getRGB(event.target.parentNode.style.background);
    hexColor2 = getRGB(event.target.style.background);    
  }
  else
  {
    hexColor1 = getRGB(event.target.style.background);
    hexColor2 = getRGB(event.target.children[0].style.background);    
  }

  document.getElementById('colorpickerSFg-input_select').value = hexColor1;
  document.getElementById('colorpickerSFg-input').value = hexColor1;
  document.getElementById('colorpickerG1Fg-input_select').value = hexColor1;
  document.getElementById('colorpickerG1Fg-input').value = hexColor1;
  document.getElementById('colorpickerG2Fg-input_select').value = hexColor2;
  document.getElementById('colorpickerG2Fg-input').value = hexColor2;

  document.getElementById('colorpickerSEye-input_select').value = hexColor1;
  document.getElementById('colorpickerSEye-input').value = hexColor1;
  document.getElementById('colorpickerG1Eye-input_select').value = hexColor1;
  document.getElementById('colorpickerG1Eye-input').value = hexColor1;
  document.getElementById('colorpickerG2Eye-input_select').value = hexColor2;
  document.getElementById('colorpickerG2Eye-input').value = hexColor2;

  document.getElementById('colorpickerSEyeball-input_select').value = hexColor1;
  document.getElementById('colorpickerSEyeball-input').value = hexColor1;
  document.getElementById('colorpickerG1Eyeball-input_select').value = hexColor1;
  document.getElementById('colorpickerG1Eyeball-input').value = hexColor1;
  document.getElementById('colorpickerG2Eyeball-input_select').value = hexColor2;
  document.getElementById('colorpickerG2Eyeball-input').value = hexColor2;

    qrCodeState.qrForegroundColor.color1 = hexColor1;
    qrCodeState.qrForegroundColor.color2 =  hexColor1;
    qrCodeState.qrForegroundColor.color3 =  hexColor2;
    qrCodeState.qrCustomEyeColor.color1 = hexColor1;
    qrCodeState.qrCustomEyeColor.color2 =  hexColor1;
    qrCodeState.qrCustomEyeColor.color3 =  hexColor2;
    qrCodeState.qrCustomEyeballColor.color1 = hexColor1;
    qrCodeState.qrCustomEyeballColor.color2 =  hexColor1;
    qrCodeState.qrCustomEyeballColor.color3 =  hexColor2;
      if(gQrcodeImage)
      {
        if(window.localStorage.getItem('tabId'))
        {
          var tabId = window.localStorage.getItem('tabId');
          imageQrCodeGenerate(tabId);
        }
        else
          imageQrCodeGenerate(3);     
      }
      else
      {
        generateQRCode();        
      }
}

$('#filter3dEffect').click(function(){
  qrCodeState._3dEffect = event.target.checked;

      if(gQrcodeImage)
      {
        if(window.localStorage.getItem('tabId'))
        {
          var tabId = window.localStorage.getItem('tabId');
          imageQrCodeGenerate(tabId);
        }
        else
          imageQrCodeGenerate(3);

      }
      else
      {
        generateQRCode();        
      }

});


function generateQRCode() {


  gStartFlag = 1;
  if(qrCodeState.qrShape == 'rectangle')
  {
    console.log('generateQRCode     735');
    var paddingColor = '#333333'; var paddingColorFlag = 0;
    if(qrCodeState.qrPaddingColorAroundEyes.enabled == true)
    {
      if(qrCodeState.qrPaddingColorAroundEyes.colorType == "singleColor")
      {
        paddingColor = qrCodeState.qrPaddingColorAroundEyes.color1;
      }
      else
      {
        paddingColorFlag = 1;
        if(qrCodeState.qrPaddingColorAroundEyes.gradientType == "linearX")
        {
          paddingColor =  {
             type: "linear",
             rotation:180,
             colorStops: [
               { offset: 0, color: qrCodeState.qrPaddingColorAroundEyes.color2 },
               { offset: 1, color: qrCodeState.qrPaddingColorAroundEyes.color3 },
             ]
           };
        }
        else if(qrCodeState.qrPaddingColorAroundEyes.gradientType == "linearY")
        {
          paddingColor =  {
             type: "linear",
             rotation:90,
             colorStops: [
               { offset: 0, color: qrCodeState.qrPaddingColorAroundEyes.color2 },
               { offset: 1, color: qrCodeState.qrPaddingColorAroundEyes.color3 },
             ]
           };
        }
        else if(qrCodeState.qrPaddingColorAroundEyes.gradientType == "linearXY")
        {
          paddingColor =  {
             type: "linear",
             rotation:0,
             colorStops: [
               { offset: 0, color: qrCodeState.qrPaddingColorAroundEyes.color2 },
               { offset: 1, color: qrCodeState.qrPaddingColorAroundEyes.color3 },
             ]
           };
        }
        else if(qrCodeState.qrPaddingColorAroundEyes.gradientType == "radial")
        {
          paddingColor =  {
             type: "radial",
             colorStops: [
               { offset: 0, color: qrCodeState.qrPaddingColorAroundEyes.color2 },
               { offset: 1, color: qrCodeState.qrPaddingColorAroundEyes.color3 },
             ]
           };
        }
      }
    }
    console.log('generateQRCode     791');

    var dotsOptions = '#333333'; var dotsOptionsFlag = 0;
    if(qrCodeState.qrForegroundColor.enabled == true)
    {
      if(qrCodeState.qrForegroundColor.colorType == "singleColor")
      {
        dotsOptions = qrCodeState.qrForegroundColor.color1;
      }
      else
      {
        dotsOptionsFlag = 1;
        if(qrCodeState.qrForegroundColor.gradientType == "linearX")
        {
          dotsOptions =  {
             type: "linear",
             rotation:180,
             colorStops: [
               { offset: 0, color: qrCodeState.qrForegroundColor.color2 },
               { offset: 1, color: qrCodeState.qrForegroundColor.color3 },
             ]
           };
        }
        else if(qrCodeState.qrForegroundColor.gradientType == "linearY")
        {
          dotsOptions =  {
             type: "linear",
             rotation:90,
             colorStops: [
               { offset: 0, color: qrCodeState.qrForegroundColor.color2 },
               { offset: 1, color: qrCodeState.qrForegroundColor.color3 },
             ]
           };
        }
        else if(qrCodeState.qrForegroundColor.gradientType == "linearXY")
        {
          dotsOptions =  {
             type: "linear",
             rotation:0,
             colorStops: [
               { offset: 0, color: qrCodeState.qrForegroundColor.color2 },
               { offset: 1, color: qrCodeState.qrForegroundColor.color3 },
             ]
           };
        }
        else if(qrCodeState.qrForegroundColor.gradientType == "radial")
        {
          dotsOptions =  {
             type: "radial",
             colorStops: [
               { offset: 0, color: qrCodeState.qrForegroundColor.color2 },
               { offset: 1, color: qrCodeState.qrForegroundColor.color3 },
             ]
           };
        }
      }
    }
    console.log('generateQRCode     848');
    var backgroundOptions = '#FFFFFF'; var backgroundOptionsFlag = 0;
    if(qrCodeState.qrCustomBackgroundColor.enabled == true)
    {
      if(qrCodeState.qrCustomBackgroundColor.colorType == "singleColor")
      {
        backgroundOptions = qrCodeState.qrCustomBackgroundColor.color1;
      }
      else
      {
        backgroundOptionsFlag = 1;
        if(qrCodeState.qrCustomBackgroundColor.gradientType == "linearX")
        {
          backgroundOptions =  {
             type: "linear",
             rotation:180,
             colorStops: [
               { offset: 0, color: qrCodeState.qrCustomBackgroundColor.color2 },
               { offset: 1, color: qrCodeState.qrCustomBackgroundColor.color3 },
             ]
           };
        }
        else if(qrCodeState.qrCustomBackgroundColor.gradientType == "linearY")
        {
          backgroundOptions =  {
             type: "linear",
             rotation:90,
             colorStops: [
               { offset: 0, color: qrCodeState.qrCustomBackgroundColor.color2 },
               { offset: 1, color: qrCodeState.qrCustomBackgroundColor.color3 },
             ]
           };
        }
        else if(qrCodeState.qrCustomBackgroundColor.gradientType == "linearXY")
        {
          backgroundOptions =  {
             type: "linear",
             rotation:0,
             colorStops: [
               { offset: 0, color: qrCodeState.qrCustomBackgroundColor.color2 },
               { offset: 1, color: qrCodeState.qrCustomBackgroundColor.color3 },
             ]
           };
        }
        else if(qrCodeState.qrCustomBackgroundColor.gradientType == "radial")
        {
          backgroundOptions =  {
             type: "radial",
             colorStops: [
               { offset: 0, color: qrCodeState.qrCustomBackgroundColor.color2 },
               { offset: 1, color: qrCodeState.qrCustomBackgroundColor.color3 },
             ]
           };
        }
      }
    }
    console.log('generateQRCode     904');
    var cornersSquareOptions = "#333333"; var cornersSquareOptionsFlag = 0;
    if(qrCodeState.qrCustomEyeColor.enabled == true)
    {
      if(qrCodeState.qrCustomEyeColor.colorType == "singleColor")
      {
        cornersSquareOptions = qrCodeState.qrCustomEyeColor.color1;
      }
      else
      {
        cornersSquareOptionsFlag = 1;
        if(qrCodeState.qrCustomEyeColor.gradientType == "linearX")
        {
          cornersSquareOptions =  {
             type: "linear",
             rotation:180,
             colorStops: [
               { offset: 0, color: qrCodeState.qrCustomEyeColor.color2 },
               { offset: 1, color: qrCodeState.qrCustomEyeColor.color3 },
             ]
           };
        }
        else if(qrCodeState.qrCustomEyeColor.gradientType == "linearY")
        {
          cornersSquareOptions =  {
             type: "linear",
             rotation:90,
             colorStops: [
               { offset: 0, color: qrCodeState.qrCustomEyeColor.color2 },
               { offset: 1, color: qrCodeState.qrCustomEyeColor.color3 },
             ]
           };
        }
        else if(qrCodeState.qrCustomEyeColor.gradientType == "linearXY")
        {
          cornersSquareOptions =  {
             type: "linear",
             rotation:0,
             colorStops: [
               { offset: 0, color: qrCodeState.qrCustomEyeColor.color2 },
               { offset: 1, color: qrCodeState.qrCustomEyeColor.color3 },
             ]
           };
        }
        else if(qrCodeState.qrCustomEyeColor.gradientType == "radial")
        {
          cornersSquareOptions =  {
             type: "radial",
             colorStops: [
               { offset: 0, color: qrCodeState.qrCustomEyeColor.color2 },
               { offset: 1, color: qrCodeState.qrCustomEyeColor.color3 },
             ]
           };
        }
      }
    }
    console.log('generateQRCode     960');
    var cornersDotOptions = "#333333"; var cornersDotOptionsFlag = 0;
    if(qrCodeState.qrCustomEyeballColor.enabled == true)
    {
      if(qrCodeState.qrCustomEyeballColor.colorType == "singleColor")
      {
        cornersDotOptions = qrCodeState.qrCustomEyeballColor.color1;
      }
      else
      {
        cornersDotOptionsFlag = 1;
        if(qrCodeState.qrCustomEyeballColor.gradientType == "linearX")
        {
          cornersDotOptions =  {
             type: "linear",
             rotation:180,
             colorStops: [
               { offset: 0, color: qrCodeState.qrCustomEyeballColor.color2 },
               { offset: 1, color: qrCodeState.qrCustomEyeballColor.color3 },
             ]
           };
        }
        else if(qrCodeState.qrCustomEyeballColor.gradientType == "linearY")
        {
          cornersDotOptions =  {
             type: "linear",
             rotation:90,
             colorStops: [
               { offset: 0, color: qrCodeState.qrCustomEyeballColor.color2 },
               { offset: 1, color: qrCodeState.qrCustomEyeballColor.color3 },
             ]
           };
        }
        else if(qrCodeState.qrCustomEyeballColor.gradientType == "linearXY")
        {
          cornersDotOptions =  {
             type: "linear",
             rotation:0,
             colorStops: [
               { offset: 0, color: qrCodeState.qrCustomEyeballColor.color2 },
               { offset: 1, color: qrCodeState.qrCustomEyeballColor.color3 },
             ]
           };
        }
        else if(qrCodeState.qrCustomEyeballColor.gradientType == "radial")
        {
          cornersDotOptions =  {
             type: "radial",
             colorStops: [
               { offset: 0, color: qrCodeState.qrCustomEyeballColor.color2 },
               { offset: 1, color: qrCodeState.qrCustomEyeballColor.color3 },
             ]
           };
        }
      }
    }



    state = 1;
    var element = document.getElementById("qrcodeDiv");

    var childs = element.children;
    while (childs.length > 0) {
      element.removeChild(childs[0]);
    }


    let website = $('#short_url_input').val();

    console.log('generateQRCode     1030');

    var dotsOptionsObject = {color:dotsOptions};
    if(dotsOptionsFlag == 1)
    {
      dotsOptionsObject = {gradient:dotsOptions};
    }
    var cornersSquareOptionsObject = {color:cornersSquareOptions};
    if(cornersSquareOptionsFlag == 1)
    {
      cornersSquareOptionsObject = {gradient:cornersSquareOptions};
    }
    var cornersDotOptionsObject = {color:cornersDotOptions};
    if(cornersDotOptionsFlag == 1)
    {
      cornersDotOptionsObject = {gradient:cornersDotOptions};
    }
    var backgroundOptionsObject = {color:backgroundOptions};
    if(backgroundOptionsFlag == 1)
    {
      backgroundOptionsObject = {gradient:backgroundOptions};
    }


    if (website) {
      
      var tmpElement = document.createElement("div");
      
      const qrCode = new QRCodeStyling({
        width: qrCodeWidth - qrCodeState.qrPaddingAroundEyes * 12,
        height: qrCodeHeight - qrCodeState.qrPaddingAroundEyes * 12,
        type: "img",
        data: website,
        dotsOptions: dotsOptionsObject,
        cornersSquareOptions: cornersSquareOptionsObject,
        cornersDotOptions: cornersDotOptionsObject,
        backgroundOptions: backgroundOptionsObject,
        imageOptions: {
          crossOrigin: "anonymous",
          margin: 20,
        },
      });

        qrCode.append(tmpElement);

        document.getElementById("qrcodeDiv").appendChild(tmpElement);

        document.getElementById("qrcodeDiv").style.padding = qrCodeState.qrPaddingAroundEyes * 6 + "px";

      if(gPaddingColorFlag==0)
      {
      document.getElementById('qrcodeDiv').parentNode.style.backgroundColor= qrCodeState.qrPaddingColorAroundEyes.color1;  

      }
      else
      {
        if(qrCodeState.qrPaddingColorAroundEyes.gradientType == "linearX")
        {
      document.getElementById('qrcodeDiv').parentNode.style.backgroundImage= "linear-gradient(to right, "+qrCodeState.qrPaddingColorAroundEyes.color2+" , "+qrCodeState.qrPaddingColorAroundEyes.color3+")";        

        }
        else if(qrCodeState.qrPaddingColorAroundEyes.gradientType == "linearY")
        {

      document.getElementById('qrcodeDiv').parentNode.style.backgroundImage= "linear-gradient(to top, "+qrCodeState.qrPaddingColorAroundEyes.color2+" , "+qrCodeState.qrPaddingColorAroundEyes.color3+")";        
        }
        else if(qrCodeState.qrPaddingColorAroundEyes.gradientType == "linearXY")
        {

      document.getElementById('qrcodeDiv').parentNode.style.backgroundImage= "linear-gradient(to right top, "+qrCodeState.qrPaddingColorAroundEyes.color2+" , "+qrCodeState.qrPaddingColorAroundEyes.color3+")";        
        }
        else if(qrCodeState.qrPaddingColorAroundEyes.gradientType == "radial")
        {

      document.getElementById('qrcodeDiv').parentNode.style.backgroundImage= "radial-gradient("+qrCodeState.qrPaddingColorAroundEyes.color2+" , "+qrCodeState.qrPaddingColorAroundEyes.color3+")";        
        }

      }




    console.log('generateQRCode     1107');

      if(qrCodeState._3dEffect == true)
      {


          

        document.getElementById("qrcodeDiv").children[0].setAttribute('class', 'shadow');

        document.getElementById("qrcodeDiv").children[0].children[3].setAttribute('class', 'shadow');
        document.getElementById("qrcodeDiv").children[0].children[4].setAttribute('class', 'shadow');
        document.getElementById("qrcodeDiv").children[0].children[5].setAttribute('class', 'shadow');
        document.getElementById("qrcodeDiv").children[0].children[6].setAttribute('class', 'shadow');
        document.getElementById("qrcodeDiv").children[0].children[7].setAttribute('class', 'shadow');
        document.getElementById("qrcodeDiv").children[0].children[8].setAttribute('class', 'shadow');

      }
    } else {
      alert("Please enter a valid URL");
    }
  }
  else if(qrCodeState.qrShape == 'circle')
  {
    console.log('generateQRCode     1131');
    var paddingColor = '#333333'; var paddingColorFlag = 0;
    if(qrCodeState.qrPaddingColorAroundEyes.enabled == true)
    {
      if(qrCodeState.qrPaddingColorAroundEyes.colorType == "singleColor")
      {
        paddingColor = qrCodeState.qrPaddingColorAroundEyes.color1;
      }
      else
      {
        paddingColorFlag = 1;
        if(qrCodeState.qrPaddingColorAroundEyes.gradientType == "linearX")
        {
          paddingColor =  {
             type: "linear",
             rotation:180,
             colorStops: [
               { offset: 0, color: qrCodeState.qrPaddingColorAroundEyes.color2 },
               { offset: 1, color: qrCodeState.qrPaddingColorAroundEyes.color3 },
             ]
           };
        }
        else if(qrCodeState.qrPaddingColorAroundEyes.gradientType == "linearY")
        {
          paddingColor =  {
             type: "linear",
             rotation:90,
             colorStops: [
               { offset: 0, color: qrCodeState.qrPaddingColorAroundEyes.color2 },
               { offset: 1, color: qrCodeState.qrPaddingColorAroundEyes.color3 },
             ]
           };
        }
        else if(qrCodeState.qrPaddingColorAroundEyes.gradientType == "linearXY")
        {
          paddingColor =  {
             type: "linear",
             rotation:0,
             colorStops: [
               { offset: 0, color: qrCodeState.qrPaddingColorAroundEyes.color2 },
               { offset: 1, color: qrCodeState.qrPaddingColorAroundEyes.color3 },
             ]
           };
        }
        else if(qrCodeState.qrPaddingColorAroundEyes.gradientType == "radial")
        {
          paddingColor =  {
             type: "radial",
             colorStops: [
               { offset: 0, color: qrCodeState.qrPaddingColorAroundEyes.color2 },
               { offset: 1, color: qrCodeState.qrPaddingColorAroundEyes.color3 },
             ]
           };
        }
      }
    }
    console.log('generateQRCode     1187');
        var dotsOptions = '#333333'; var dotsOptionsFlag = 0;
        if(qrCodeState.qrForegroundColor.enabled == true)
        {
          if(qrCodeState.qrForegroundColor.colorType == "singleColor")
          {
            dotsOptions = qrCodeState.qrForegroundColor.color1;
          }
          else
          {
            dotsOptionsFlag = 1;
            if(qrCodeState.qrForegroundColor.gradientType == "linearX")
            {
              dotsOptions =  {
                 type: "linear",
                 rotation:180,
                 colorStops: [
                   { offset: 0, color: qrCodeState.qrForegroundColor.color2 },
                   { offset: 1, color: qrCodeState.qrForegroundColor.color3 },
                 ]
               };
            }
            else if(qrCodeState.qrForegroundColor.gradientType == "linearY")
            {
              dotsOptions =  {
                 type: "linear",
                 rotation:90,
                 colorStops: [
                   { offset: 0, color: qrCodeState.qrForegroundColor.color2 },
                   { offset: 1, color: qrCodeState.qrForegroundColor.color3 },
                 ]
               };
            }
            else if(qrCodeState.qrForegroundColor.gradientType == "linearXY")
            {
              dotsOptions =  {
                 type: "linear",
                 rotation:0,
                 colorStops: [
                   { offset: 0, color: qrCodeState.qrForegroundColor.color2 },
                   { offset: 1, color: qrCodeState.qrForegroundColor.color3 },
                 ]
               };
            }
            else if(qrCodeState.qrForegroundColor.gradientType == "radial")
            {
              dotsOptions =  {
                 type: "radial",
                 colorStops: [
                   { offset: 0, color: qrCodeState.qrForegroundColor.color2 },
                   { offset: 1, color: qrCodeState.qrForegroundColor.color3 },
                 ]
               };
            }
          }
        }
    console.log('generateQRCode     1243');
        var backgroundOptions = '#FFFFFF'; var backgroundOptionsFlag = 0;
        if(qrCodeState.qrCustomBackgroundColor.enabled == true)
        {
          if(qrCodeState.qrCustomBackgroundColor.colorType == "singleColor")
          {
            backgroundOptions = qrCodeState.qrCustomBackgroundColor.color1;
          }
          else
          {
            backgroundOptionsFlag = 1;
            if(qrCodeState.qrCustomBackgroundColor.gradientType == "linearX")
            {
              backgroundOptions =  {
                 type: "linear",
                 rotation:180,
                 colorStops: [
                   { offset: 0, color: qrCodeState.qrCustomBackgroundColor.color2 },
                   { offset: 1, color: qrCodeState.qrCustomBackgroundColor.color3 },
                 ]
               };
            }
            else if(qrCodeState.qrCustomBackgroundColor.gradientType == "linearY")
            {
              backgroundOptions =  {
                 type: "linear",
                 rotation:90,
                 colorStops: [
                   { offset: 0, color: qrCodeState.qrCustomBackgroundColor.color2 },
                   { offset: 1, color: qrCodeState.qrCustomBackgroundColor.color3 },
                 ]
               };
            }
            else if(qrCodeState.qrCustomBackgroundColor.gradientType == "linearXY")
            {
              backgroundOptions =  {
                 type: "linear",
                 rotation:0,
                 colorStops: [
                   { offset: 0, color: qrCodeState.qrCustomBackgroundColor.color2 },
                   { offset: 1, color: qrCodeState.qrCustomBackgroundColor.color3 },
                 ]
               };
            }
            else if(qrCodeState.qrCustomBackgroundColor.gradientType == "radial")
            {
              backgroundOptions =  {
                 type: "radial",
                 colorStops: [
                   { offset: 0, color: qrCodeState.qrCustomBackgroundColor.color2 },
                   { offset: 1, color: qrCodeState.qrCustomBackgroundColor.color3 },
                 ]
               };
            }
          }
        }
    console.log('generateQRCode     1299');
        var cornersSquareOptions = "#333333"; var cornersSquareOptionsFlag = 0;
        if(qrCodeState.qrCustomEyeColor.enabled == true)
        {
          if(qrCodeState.qrCustomEyeColor.colorType == "singleColor")
          {
            cornersSquareOptions = qrCodeState.qrCustomEyeColor.color1;
          }
          else
          {
            cornersSquareOptionsFlag = 1;
            if(qrCodeState.qrCustomEyeColor.gradientType == "linearX")
            {
              cornersSquareOptions =  {
                 type: "linear",
                 rotation:180,
                 colorStops: [
                   { offset: 0, color: qrCodeState.qrCustomEyeColor.color2 },
                   { offset: 1, color: qrCodeState.qrCustomEyeColor.color3 },
                 ]
               };
            }
            else if(qrCodeState.qrCustomEyeColor.gradientType == "linearY")
            {
              cornersSquareOptions =  {
                 type: "linear",
                 rotation:90,
                 colorStops: [
                   { offset: 0, color: qrCodeState.qrCustomEyeColor.color2 },
                   { offset: 1, color: qrCodeState.qrCustomEyeColor.color3 },
                 ]
               };
            }
            else if(qrCodeState.qrCustomEyeColor.gradientType == "linearXY")
            {
              cornersSquareOptions =  {
                 type: "linear",
                 rotation:0,
                 colorStops: [
                   { offset: 0, color: qrCodeState.qrCustomEyeColor.color2 },
                   { offset: 1, color: qrCodeState.qrCustomEyeColor.color3 },
                 ]
               };
            }
            else if(qrCodeState.qrCustomEyeColor.gradientType == "radial")
            {
              cornersSquareOptions =  {
                 type: "radial",
                 colorStops: [
                   { offset: 0, color: qrCodeState.qrCustomEyeColor.color2 },
                   { offset: 1, color: qrCodeState.qrCustomEyeColor.color3 },
                 ]
               };
            }
          }
        }

        var cornersDotOptions = "#333333"; var cornersDotOptionsFlag = 0;
        if(qrCodeState.qrCustomEyeballColor.enabled == true)
        {
          if(qrCodeState.qrCustomEyeballColor.colorType == "singleColor")
          {
            cornersDotOptions = qrCodeState.qrCustomEyeballColor.color1;
          }
          else
          {
            cornersDotOptionsFlag = 1;
            if(qrCodeState.qrCustomEyeballColor.gradientType == "linearX")
            {
              cornersDotOptions =  {
                 type: "linear",
                 rotation:180,
                 colorStops: [
                   { offset: 0, color: qrCodeState.qrCustomEyeballColor.color2 },
                   { offset: 1, color: qrCodeState.qrCustomEyeballColor.color3 },
                 ]
               };
            }
            else if(qrCodeState.qrCustomEyeballColor.gradientType == "linearY")
            {
              cornersDotOptions =  {
                 type: "linear",
                 rotation:90,
                 colorStops: [
                   { offset: 0, color: qrCodeState.qrCustomEyeballColor.color2 },
                   { offset: 1, color: qrCodeState.qrCustomEyeballColor.color3 },
                 ]
               };
            }
            else if(qrCodeState.qrCustomEyeballColor.gradientType == "linearXY")
            {
              cornersDotOptions =  {
                 type: "linear",
                 rotation:0,
                 colorStops: [
                   { offset: 0, color: qrCodeState.qrCustomEyeballColor.color2 },
                   { offset: 1, color: qrCodeState.qrCustomEyeballColor.color3 },
                 ]
               };
            }
            else if(qrCodeState.qrCustomEyeballColor.gradientType == "radial")
            {
              cornersDotOptions =  {
                 type: "radial",
                 colorStops: [
                   { offset: 0, color: qrCodeState.qrCustomEyeballColor.color2 },
                   { offset: 1, color: qrCodeState.qrCustomEyeballColor.color3 },
                 ]
               };
            }
          }
        }

    console.log('generateQRCode     1412');
        var dotsOptionsObject = {color:dotsOptions};
        if(dotsOptionsFlag == 1)
        {
          dotsOptionsObject = {gradient:dotsOptions};
        }
        var cornersSquareOptionsObject = {color:cornersSquareOptions};
        if(cornersSquareOptionsFlag == 1)
        {
          cornersSquareOptionsObject = {gradient:cornersSquareOptions};
        }
        var cornersDotOptionsObject = {color:cornersDotOptions};
        if(cornersDotOptionsFlag == 1)
        {
          cornersDotOptionsObject = {gradient:cornersDotOptions};
        }
        var backgroundOptionsObject = {color:backgroundOptions};
        if(backgroundOptionsFlag == 1)
        {
          backgroundOptionsObject = {gradient:backgroundOptions};
        }


        state = 2;

        var element = document.getElementById("qrcodeDiv");
        element.style.position = "relative";
        element.innerHTML = "";
    console.log('generateQRCode     1440');
        new QRCode(element, {
          text: genRandonString(),
          width: qrCodeWidth,
          height: qrCodeHeight,
          colorDark: qrCodeState.qrForegroundColor.color1,
          colorLight: qrCodeState.qrCustomBackgroundColor.color1,
          correctLevel: QRCode.CorrectLevel.H,
        });





        document.getElementById("qrcodeDiv").children[1].style.border = qrCodeState.qrShapeBorderSize/15 +"px solid black";
        element.style.height = qrCodeHeight + "px";
        element.style.width = qrCodeWidth + "px";
        document.getElementById("qrcodeDiv").children[1].style.borderRadius = "50%";
        element.style.display = "flex";
        element.style.alignItems = "center";
        element.style.justifyContent = "center";
        var childs = element.children;
        for (var i = 0; i < childs.length; i++) element.removeChild(childs[i]);
    console.log('generateQRCode     1460');
      let website = $('#short_url_input').val();

      if (website) {
        var tmpElement = document.createElement("div");
        const qrCode = new QRCodeStyling({
          width: Math.sqrt(((qrCodeWidth) * (qrCodeWidth)) / 2) - qrCodeState.qrShapeBorderSize/15,
          height: Math.sqrt(((qrCodeHeight) * (qrCodeHeight)) / 2) - qrCodeState.qrShapeBorderSize/15,
          type: "img",
          data: website,
          dotsOptions: dotsOptionsObject,
          cornersSquareOptions: cornersSquareOptionsObject,
          cornersDotOptions: cornersDotOptionsObject,
          backgroundOptions: backgroundOptionsObject,
          imageOptions: {
            crossOrigin: "anonymous",
            margin: 20,
          },
        });


        qrCode.append(tmpElement);


       tmpElement.style.width = qrCodeWidth/1.4142+"px";     
       tmpElement.style.height = qrCodeHeight/1.4142 +"px";    

    console.log('generateQRCode     1486');
      if(gPaddingColorFlag==0)
      {
        tmpElement.style.backgroundColor= qrCodeState.qrPaddingColorAroundEyes.color1;     
      }
      else
      {
        if(qrCodeState.qrPaddingColorAroundEyes.gradientType == "linearX")
        {
      tmpElement.style.backgroundImage= "linear-gradient(to right, "+qrCodeState.qrPaddingColorAroundEyes.color2+" , "+qrCodeState.qrPaddingColorAroundEyes.color3+")";        
        }
        else if(qrCodeState.qrPaddingColorAroundEyes.gradientType == "linearY")
        {
      tmpElement.style.backgroundImage= "linear-gradient(to top, "+qrCodeState.qrPaddingColorAroundEyes.color2+" , "+qrCodeState.qrPaddingColorAroundEyes.color3+")";        
        }
        else if(qrCodeState.qrPaddingColorAroundEyes.gradientType == "linearXY")
        {
      tmpElement.style.backgroundImage= "linear-gradient(to right top, "+qrCodeState.qrPaddingColorAroundEyes.color2+" , "+qrCodeState.qrPaddingColorAroundEyes.color3+")";        
        }
        else if(qrCodeState.qrPaddingColorAroundEyes.gradientType == "radial")
        {
      tmpElement.style.backgroundImage= "radial-gradient("+qrCodeState.qrPaddingColorAroundEyes.color2+" , "+qrCodeState.qrPaddingColorAroundEyes.color3+")";        
        }

      }


    console.log('generateQRCode     1513');
        tmpElement.style.display = "flex";
        tmpElement.style.alignItems = "center";
        tmpElement.style.justifyContent = "center";
        tmpElement.style.position = "absolute";
        document.getElementById("qrcodeDiv").appendChild(tmpElement);

        if(qrCodeState._3dEffect == true)
        {

          
          document.getElementById("qrcodeDiv").children[1].children[0].setAttribute('class', 'shadow');

          document.getElementById("qrcodeDiv").children[1].style.boxShadow =
            "2px 2px 2px black";      
        }

        document.getElementById('qrcodeDiv').parentNode.style.backgroundColor = '#ffffff';
      document.getElementById('qrcodeDiv').parentNode.style.backgroundImage = '';
        } else {
          alert("Please enter a valid URL");
        }


  }
  downloadFlag = 1;
}

$('#qr_shapeNeglectLTPadding').click(function(){
  if(event.target.checked == true)
  {
    qrCodeState.qrRemoveLeftTopAroundEyes = true;
    if(qrCodeState.qrShape == "rectangle")
    {

    }
    else
    {

    }

  }
  else
  {
    qrCodeState.qrRemoveLeftTopAroundEyes = false;
  }
});






function saveAsImage() {
  var container = document.getElementById("result-panel"); 
  html2canvas(container, {
    useCORS: true
  }).then(function (canvas) {
    var link = document.createElement("a");
    document.body.appendChild(link);
    link.download = "html_image.jpg";
    link.href = canvas.toDataURL();
    link.target = "_blank";
    link.click();
  });
}

var rectEle = document.getElementById("myRect");
var rectSizeEle = document.getElementsByClassName("corner")[0];

var down = 0;

rectEle.addEventListener(
  "mousedown",
  function (event) {
    down = 1;
    moveStart = { x: event.x, y: event.y };
  },
  true
);

rectSizeEle.addEventListener(
  "mousedown",
  function (event) {

    down = 2;
    moveStart = { x: event.x, y: event.y };
  },
  true
);
  
//window.addEventListener(
document.getElementById('imageDiv').addEventListener(
  "mouseup",
  function (event) {

    if (down == 2) {



      document.getElementById('myRect').style.width = document.getElementById('myRect').offsetWidth + event.x - moveStart.x +"px";
      document.getElementById('myRect').style.height = document.getElementById('myRect').offsetHeight + event.y - moveStart.y +"px";


      var scale1 = document.getElementById('qrcode2Pic').offsetWidth/document.getElementById('qrcodeDiv').offsetWidth;


      qrCodeWidth = document.getElementById('myRect').offsetWidth/scale1;
      qrCodeHeight = document.getElementById('myRect').offsetHeight/scale1;
      qrCodeState.qrShapeBorderSize= qrCodeState.qrShapeBorderSize;
      qrCodeState.qrPaddingAroundEyes= qrCodeState.qrPaddingAroundEyes;


      generateQRCode();
      if(qrCodeState.qrShape == "circle")
      {
          document.getElementById('qrcodeDiv').style.width = "100%";
          document.getElementById('qrcodeDiv').style.height = "100%";
          document.getElementById('qrcodeDiv').style.backgroundSize = "cover";


          var style1 = document.getElementById('qrcodeDiv').children[0].getAttribute('style');

          style1 = style1+"; opacity:0.8;";
          document.getElementById('qrcodeDiv').children[0].setAttribute('style',style1);

          var style2 = document.getElementById('qrcodeDiv').children[1].getAttribute('style');

          style2 = style2+"; opacity:0.8;";
          document.getElementById('qrcodeDiv').children[1].setAttribute('style',style2);

          var left = document.getElementById('myRect').offsetLeft + document.getElementById('myRect').offsetWidth/2; 
          var top = document.getElementById('myRect').offsetTop + document.getElementById('myRect').offsetHeight/2;




          var left1 = left/scale1 - document.getElementById('qrcodeDiv').children[1].offsetWidth*1.4142/2;
          var top1 = top/scale1 - document.getElementById('qrcodeDiv').children[1].offsetHeight*1.4142/2;

          var left2 = left/scale1 - document.getElementById('qrcodeDiv').children[1].offsetWidth*1/2 + qrCodeState.qrShapeBorderSize/15;
          var top2 = top/scale1 - document.getElementById('qrcodeDiv').children[1].offsetHeight*1/2 + qrCodeState.qrShapeBorderSize/15;


          document.getElementById('qrcodeDiv').children[0].style.left = left1+"px";
          document.getElementById('qrcodeDiv').children[0].style.top = top1+"px";
          document.getElementById('qrcodeDiv').children[0].style.position = "absolute";

          document.getElementById('qrcodeDiv').children[1].style.left = left2+"px";
          document.getElementById('qrcodeDiv').children[1].style.top = top2+"px";
          document.getElementById('qrcodeDiv').children[1].style.position = "absolute";

      }
      else
      {
          document.getElementById('qrcodeDiv').style.width = "100%";
          document.getElementById('qrcodeDiv').style.height = "100%";
          document.getElementById('qrcodeDiv').style.backgroundSize = "cover";

          var style1 = document.getElementById('qrcodeDiv').children[0].getAttribute('style');

          style1 = style1+"; opacity:0.8;";
          document.getElementById('qrcodeDiv').children[0].setAttribute('style',style1);

          var left = document.getElementById('myRect').offsetLeft + document.getElementById('myRect').offsetWidth/2; 
          var top = document.getElementById('myRect').offsetTop + document.getElementById('myRect').offsetHeight/2;


          var left1 = (left - document.getElementById('myRect').offsetWidth/2)/scale1;
          var top1 = (top - document.getElementById('myRect').offsetHeight/2)/scale1;



          document.getElementById('qrcodeDiv').children[0].style.left = left1+"px";
          document.getElementById('qrcodeDiv').children[0].style.top = top1+"px";
          document.getElementById('qrcodeDiv').children[0].style.position = "absolute";
      }
    }
    down = 0;
  },
  true
);

//document.addEventListener(
document.getElementById('imageDiv').addEventListener(
  "mousemove",
  function (event) {

    event.preventDefault();
    if (down == 1) {
      currentPos = {
        x: currentPos.x + event.x - moveStart.x,
        y: currentPos.y + event.y - moveStart.y,
      };
      moveStart = {
        x: event.x,
        y: event.y
      };



      document.getElementById("myRect").style.left = currentPos.x+"px";
      document.getElementById("myRect").style.top = currentPos.y+"px";

      if(qrCodeState.qrShape == "circle")
      {

          document.getElementById('qrcodeDiv').style.width = "100%";
          document.getElementById('qrcodeDiv').style.height = "100%";
          document.getElementById('qrcodeDiv').style.backgroundSize = "cover";



         var scale1 = document.getElementById('qrcode2Pic').offsetWidth/document.getElementById('qrcodeDiv').offsetWidth;





          var left = document.getElementById('myRect').offsetLeft + document.getElementById('myRect').offsetWidth/2; 
          var top = document.getElementById('myRect').offsetTop + document.getElementById('myRect').offsetHeight/2;




          var left1 = left/scale1 - document.getElementById('qrcodeDiv').children[1].offsetWidth*1.4142/2;
          var top1 = top/scale1 - document.getElementById('qrcodeDiv').children[1].offsetHeight*1.4142/2;

          var left2 = left/scale1 - document.getElementById('qrcodeDiv').children[1].offsetWidth*1/2 + qrCodeState.qrShapeBorderSize/15;
          var top2 = top/scale1 - document.getElementById('qrcodeDiv').children[1].offsetHeight*1/2 + qrCodeState.qrShapeBorderSize/15;



          document.getElementById('qrcodeDiv').children[0].style.left = left1+"px";
          document.getElementById('qrcodeDiv').children[0].style.top = top1+"px";
          document.getElementById('qrcodeDiv').children[0].style.position = "absolute";

          document.getElementById('qrcodeDiv').children[1].style.left = left2+"px";
          document.getElementById('qrcodeDiv').children[1].style.top = top2+"px";
          document.getElementById('qrcodeDiv').children[1].style.position = "absolute";

      }
      else
      {
          document.getElementById('qrcodeDiv').style.width = "100%";
          document.getElementById('qrcodeDiv').style.height = "100%";
          document.getElementById('qrcodeDiv').style.backgroundSize = "cover";



         var scale1 = document.getElementById('qrcode2Pic').offsetWidth/document.getElementById('qrcodeDiv').offsetWidth;

          var left = document.getElementById('myRect').offsetLeft + document.getElementById('myRect').offsetWidth/2; 
          var top = document.getElementById('myRect').offsetTop + document.getElementById('myRect').offsetHeight/2;


          var left1 = (left - document.getElementById('myRect').offsetWidth/2)/scale1;
          var top1 = (top - document.getElementById('myRect').offsetHeight/2)/scale1;

          document.getElementById('qrcodeDiv').children[0].style.left = left1+"px";
          document.getElementById('qrcodeDiv').children[0].style.top = top1+"px";
          document.getElementById('qrcodeDiv').children[0].style.position = "absolute";

      }



    }
    if (down == 2) {

      
      document.getElementById('myRect').style.width = document.getElementById('myRect').offsetWidth + event.x - moveStart.x +"px";
      document.getElementById('myRect').style.height = document.getElementById('myRect').offsetWidth + event.x - moveStart.x +"px";
      moveStart = { x: event.x, y: event.y };
    }
  },
  true
);




function moreSize()
{
    document.getElementById('gntr-tab-1').children[0].children[0].setAttribute('aria-selected', 'false');
    document.getElementById('gntr-tab-1').children[1].children[0].setAttribute('aria-selected', 'false');
    document.getElementById('gntr-tab-1').children[2].children[0].setAttribute('aria-selected', 'true');


    if(window.localStorage.getItem('tabId'))
    {
      window.localStorage.removeItem('tabId');
      window.localStorage.setItem('tabId', 3);
    }
    document.getElementById('gntr_qrshapes_1').style.display = 'none';
    document.getElementById('gntr_color_1').style.display = 'none';
    document.getElementById('gntr_bgimg_1').style.display = 'block';


  $('#desgin_qrcode_modal').modal('hide');
  $('#moreSize').modal('show');
}

function moreSizeHide()
{
  $('#moreSize').modal('hide');
}

$('.download_qr_size>li').click(function(){
  $('.download_qr_size>li').removeClass('active');
  $('.download_qr_size>li>a').attr('style', 'color:black !important');
  if(event.target.tagName == "A")
  {
    if(event.target.parentNode.className.search('active')<0)
    {
      event.target.parentNode.className = "list-group-item mt-2 active";
      event.target.setAttribute('style', 'color:white !important');
    }
  }
  else if(event.target.tagName == "LI")
  {
    if(event.target.className.search('active')<0)
    {
      event.target.className = "list-group-item mt-2 active";
      event.target.children[0].setAttribute('style', 'color:white !important');
    }
  }

});


function genRandonString(){
  var chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  var charLength = chars.length;
  var result = '';
  for(var i=0; i<10;i++)
  {
    result += chars.charAt(Math.floor(Math.random()*charLength));
  }
  return result;
}