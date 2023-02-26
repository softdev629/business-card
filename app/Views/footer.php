<script type="text/javascript">
  var baseURL = "<?php echo base_url() ?>";
  document.localStorage.setItem('baseURL', baseURL);
  console.log(baseURL, '---------------------------------------------------');
</script>

<script type="text/javascript" src="<?php echo base_url() ?>/declare.js"></script>

<script type="text/javascript" src="<?php echo base_url() ?>/template.js"></script> 
<script type="text/javascript" src="<?php echo base_url() ?>/common.js"></script>
<script type="text/javascript" src="<?php echo base_url() ?>/dragDrop.js"></script>
<script type="text/javascript" src="<?php echo base_url() ?>/checkbox.js"></script>
<script type="text/javascript" src="<?php echo base_url() ?>/profile.js"></script>
<script type="text/javascript" src="<?php echo base_url() ?>/heading.js"></script>
<script type="text/javascript" src="<?php echo base_url() ?>/contact.js"></script>
<script type="text/javascript" src="<?php echo base_url() ?>/image.js"></script>
<script type="text/javascript" src="<?php echo base_url() ?>/social.js"></script>
<script type="text/javascript" src="<?php echo base_url() ?>/links.js"></script>
<script type="text/javascript" src="<?php echo base_url() ?>/pdf.js"></script>

<script type="text/javascript" src="<?php echo base_url() ?>/other.js"></script>
<script type="text/javascript" src="<?php echo base_url() ?>/video.js"></script>
<script type="text/javascript" src="<?php echo base_url() ?>/btn.js"></script>

<script type="text/javascript" src="<?php echo base_url() ?>/setting.js"></script>
<script type="text/javascript" src="<?php echo base_url() ?>/qrcode.js"></script>
 
 
<script type="text/javascript">
//file.js

//file

$('.remove_img').click(function() {
  $('.remove_img').removeClass('selected');
  event.target.className = event.target.className + " selected";
  saving_image = event.target.style['background-image'];
  saving_image = saving_image.slice(5, -2);
  settingState.backgroundImage = saving_image;
  document.getElementById("qr_page_prev").children[0].remove();
  showMobileIframe(templateNo);
});

function pdf_select(){

  if (pdfSelected_no == -1) {
    alert("Please select image");
    return;
  } else {

      document.getElementById('pdf_gallery_container_'+g_pdfGalleryContainer).children[current-1].children[2].children[0].children[0].value = mypdfs[pdfSelected_no].getAttribute('data_value');
  
      var child = document.getElementById('pdf_gallery_container_'+g_pdfGalleryContainer).children[current-1];
      var index = Array.from(child.parentNode.children).indexOf(child);

      var component = child;
      while(component.id.search('component_') < 0){
        component = component.parentNode;
      }    
      var pIndex = Array.from(component.parentNode.children).indexOf(component);
      chimpData[pIndex].value.pdfItems[index].url = mypdfs[pdfSelected_no].getAttribute('data_value');

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo); 
  }  
}

function file_select() {

  if (selected_no == -1) {
    alert("Please select image");
    return;
  } else {
    if (current == 0) {
      document.getElementsByClassName('pr_img')[0].style['backgroundImage'] = "url(\'" + myimages[selected_no] +
        "\')";

      var component = document.getElementsByClassName('pr_img')[0];
      while(component.id.search('component_') < 0){
        component = component.parentNode;
      }    
      var pIndex = Array.from(component.parentNode.children).indexOf(component);

      chimpData[pIndex].value.avatar.url = myimages[selected_no];


      document.getElementById("qr_page_prev").children[0].remove();
      showMobileIframe(templateNo);
    }else if(current == 1){
      document.getElementsByClassName('contact-image')[0].style['backgroundImage'] = "url(\'" + myimages[selected_no] +
        "\')";

      var component = document.getElementsByClassName('contact-image')[0];
      while(component.id.search('component_') < 0){
        component = component.parentNode;
      }    
      var pIndex = Array.from(component.parentNode.children).indexOf(component);

      chimpData[pIndex].value.images = myimages[selected_no];

      var name = myFiles[selected_no].name;
      var extension = name.split('.').pop().toLowerCase();

      var str = chimpData[pIndex].type + '@@' + pIndex + '@@' + 'none';

       if(jQuery.inArray(extension, ['gif','png','jpg','jpeg']) != -1)
       {
          form_data.append(str, myFiles[selected_no]);
       }

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);
    }
     else if (current >= 1001 && current <=1499) {//images
      let parent = document.getElementsByClassName("img_" + g_currentImage)[0];
      let div1 = document.createElement('div');
      div1.setAttribute('class', 'img_uploaded_card multiple_img mr-3 handle-img mb-2');
      div1.setAttribute('style', 'background-image:' + "url(\'" + myimages[selected_no] + "\')");
      let div2 = document.createElement('div');
      div2.setAttribute('class', 'img_action');
      let a1 = document.createElement('a');
      a1.setAttribute('class', 'btn text-white');
      a1.setAttribute('onclick', 'del_uploaded_file(' + parseInt(parent.children.length + 1) + ')');
      let i1 = document.createElement('i');
      i1.setAttribute('class', 'icon-delete_1 font-14');
      a1.appendChild(i1);
      div2.appendChild(a1);
      div1.appendChild(div2);
      parent.appendChild(div1);

      var component = document.getElementsByClassName("img_" + g_currentImage)[0];
      while(component.id.search('component_') < 0){
        component = component.parentNode;
      }    
      var pIndex = Array.from(component.parentNode.children).indexOf(component);


      chimpData[pIndex].value.photos.push({
        state: true,
        url: myimages[selected_no]
      });

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);
    } else if (current == 2) {

      document.getElementsByClassName('loader_img')[0].style['backgroundImage'] = "url(\'" + myimages[selected_no] +
        "\')";
      settingState.pageLoader = myimages[selected_no];
    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);
    } else if (current < 500) {
      document.getElementsByClassName('img_' + current)[0].style['backgroundImage'] = "url(\'" + myimages[selected_no] + "\')";
      var child = document.getElementsByClassName('img_' + current)[0].parentNode.parentNode.parentNode.parentNode;

      var parent = child.parentNode;
      var index = Array.from(parent.children).indexOf(child);

      var component = document.getElementsByClassName("img_" + current)[0];
      while(component.id.search('component_') < 0){
        component = component.parentNode;
      }    
      var pIndex = Array.from(component.parentNode.children).indexOf(component);


      chimpData[pIndex].value.links[index].logo =myimages[selected_no];      


    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);
    } else if (current >= 501 && current <=1000) {
      document.getElementsByClassName('img_' + current)[0].style['backgroundImage'] = "url(\'" + myimages[selected_no] + "\')";
      var child = document.getElementsByClassName('img_' + current)[0].parentNode.parentNode.parentNode.parentNode;
      var parent = child.parentNode;
      var index = Array.from(parent.children).indexOf(child);
     

      var component = document.getElementsByClassName("img_" + current)[0];
      while(component.id.search('component_') < 0){
        component = component.parentNode;
      }    
      var pIndex = Array.from(component.parentNode.children).indexOf(component);
      chimpData[pIndex].value.links[index].image = myimages[selected_no];

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);
    }else if(current >=1500 && current <=2000){
      document.getElementsByClassName('img_' + current)[0].style['backgroundImage'] = "url(\'" + myimages[selected_no] + "\')";
      var child = document.getElementsByClassName('img_' + current)[0].parentNode.parentNode.parentNode.parentNode;
      var parent = child.parentNode;
      var index = Array.from(parent.children).indexOf(child);

      var component = document.getElementsByClassName("img_" + current)[0];
      while(component.id.search('component_') < 0){
        component = component.parentNode;
      }    
      var pIndex = Array.from(component.parentNode.children).indexOf(component);
      chimpData[pIndex].value.pdfItems[index].pdfAvatar = myimages[selected_no];

    document.getElementById("qr_page_prev").children[0].remove();
    showMobileIframe(templateNo);
    }
  }
}

function qrImageLoad(){
  let input = document.createElement('input');
  let new_files = [];  
  input.type = 'file';
  input.onchange = _ => {


    var fd = new FormData();
    fd.append('file', _.target.files[0]);

    $.ajax({
      url: '<?php echo base_url() ?>'+"/qrFileSave",
      method: 'post',
      data: fd,
      contentType: false,
      processData: false,
      dataType: 'json',
      success: async function( ret ) {


        gQrcodeImage = 1;

        if(qrCodeState.qrShape == "rectangle")
        {
          document.getElementById('qrcode2Pic').setAttribute('style', 'margin-top: 0;position: absolute;width: 100%;');
          document.getElementById('qrcode2Pic').setAttribute('src', ret.filepath);
          document.getElementById('qrcode2Pic').parentNode.setAttribute('style', 'position: relative; !important;z-index:10;height: 400px;');


          document.getElementById('qrcodeDiv').setAttribute('style', 'margin-top: 0;position: absolute;width: 100%;');
          document.getElementById('qrcodeDiv').style.backgroundImage = "url('"+ret.filepath+"')";
          document.getElementById('qrcodeDiv').style.backgroundSize = "cover";

          document.getElementById('qrcodeDiv').style.width = "100%";
          document.getElementById('qrcodeDiv').style.height = "100%";
          document.getElementById('qrcodeDiv').style.position = "relative";



         var scale1 = document.getElementById('qrcode2Pic').offsetWidth/document.getElementById('qrcodeDiv').offsetWidth;

          qrCodeWidth = document.getElementById('myRect').offsetWidth/scale1;
          qrCodeHeight = document.getElementById('myRect').offsetHeight/scale1;
          qrCodeState.qrShapeBorderSize= qrCodeState.qrShapeBorderSize;
          qrCodeState.qrPaddingAroundEyes= qrCodeState.qrPaddingAroundEyes;

          generateQRCode();


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
        else if(qrCodeState.qrShape == "circle")
        {

          if(window.localStorage.getItem('filePath'))
            window.localStorage.removeItem('filePath');

          window.localStorage.setItem('filePath', ret.filepath);
          document.getElementById('qrcode2Pic').setAttribute('style', 'margin-top: 0;position: absolute;width: 100%;');
          document.getElementById('qrcode2Pic').setAttribute('src', ret.filepath);
          document.getElementById('qrcode2Pic').parentNode.setAttribute('style', 'position: relative; !important;z-index:10;height: 400px;');

          document.getElementById('qrcodeDiv').parentNode.setAttribute('style', 'width:400px;height:400px;background-color: white');


          document.getElementById('qrcodeDiv').setAttribute('style', 'margin-top: 0;position: absolute;width: 100%;');
          document.getElementById('qrcodeDiv').style.backgroundImage = "url('"+ret.filepath+"')";
          document.getElementById('qrcodeDiv').style.backgroundSize = "contain";

          document.getElementById('qrcodeDiv').style.width = "100%";
          document.getElementById('qrcodeDiv').style.height = "100%";
          document.getElementById('qrcodeDiv').style.position = "relative";



         var scale1 = document.getElementById('qrcode2Pic').offsetWidth/document.getElementById('qrcodeDiv').offsetWidth;

          qrCodeWidth = document.getElementById('myRect').offsetWidth/scale1;
          qrCodeHeight = document.getElementById('myRect').offsetHeight/scale1;
          qrCodeState.qrShapeBorderSize= qrCodeState.qrShapeBorderSize;
          qrCodeState.qrPaddingAroundEyes= qrCodeState.qrPaddingAroundEyes;

          generateQRCode();

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


//          scale1 = document.getElementById('qrcode2Pic').offsetWidth/document.getElementById('qrcodeDiv').children[1].offsetWidth*1.4142;

//          var borderOffset = qrCodeState.qrShapeBorderSize/15;

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

      },
      error: function(e){

      }
   });

  };

  input.click();
} 

function file_upload() {
  let input = document.createElement('input');
  let new_files = [];
  input.type = 'file';
  input.onchange = _ => {

    const chosenImage = document.getElementById('chosen_images');

    let image = document.createElement('img');
    image.setAttribute('class', 'myimg');
    image.setAttribute('name', myimages.length);
    image.setAttribute('onclick', 'img_click()');
    image.setAttribute('src', URL.createObjectURL(_.target.files[0]));


    myFiles.push(_.target.files[0]);

    chosenImage.appendChild(image);

    var fd = new FormData();
    fd.append('file', _.target.files[0]);

    $.ajax({
      url: '<?php echo base_url() ?>'+"/fileSave",
      method: 'post',
      data: fd,
      contentType: false,
      processData: false,
      dataType: 'json',
      success: async function( ret ) {
        image.setAttribute('src', ret.filepath);
        myimages.push(ret.filepath);

      },
      error: function(e){

      }
   });

  };

  input.click();
}

var _PDF_DOC,
  _CANVAS,
  _OBJECT_URL, div2;

function showPDF(pdf_url) {
  PDFJS.getDocument({ url: pdf_url }).then(function(pdf_doc) {
    _PDF_DOC = pdf_doc;

    showPage(1);

      URL.revokeObjectURL(_OBJECT_URL);
  }).catch(function(error) {

//    document.querySelector("#cancel-pdf").click();
    
    alert(error.message);
  });;
}

function showPage(page_no) {

  _PDF_DOC.getPage(page_no).then(function(page) {

    var scale_required = _CANVAS.width / page.getViewport(1).width;


    var viewport = page.getViewport(scale_required);


//    _CANVAS.height = viewport.height;

    var renderContext = {
      canvasContext: _CANVAS.getContext('2d'),
      viewport: viewport
    };
    
    page.render(renderContext).then(function() {
      document.getElementById('chosen_pdf').appendChild(div2);

//      document.querySelector("#pdf-preview-1").style.display = 'inline-block';
//      document.querySelector("#pdf-loader").style.display = 'none';
    });
  });
}


document.querySelector("#file_input1").addEventListener('change', function() {

    var file = this.files[0];

    var mime_types = [ 'application/pdf' ];
    

    if(mime_types.indexOf(file.type) == -1) {
        alert('Error : Incorrect file type');
        return; 
    }   
    if(file.size > 10*1024*1024) {
        alert('Error : Exceeded size 10MB');
        return;
    }



    div2 = document.createElement('div'); div2.className = 'col-md-4';
    _CANVAS = document.createElement('canvas'); _CANVAS.id = 'pdf-preview-' + g_pdfFile; _CANVAS.width='200';
    _CANVAS.height='350';
    var div3 = document.createElement('div'); div3.id = 'pdf-file-name-' + g_pdfFile; div3.setAttribute('text-align', 'center');
    

    div2.appendChild(_CANVAS);
    div2.appendChild(div3);
    mypdfs = document.getElementsByClassName('mypdf');
    div2.setAttribute('onclick', 'pdfClick()');

    div2.setAttribute('name', mypdfs.length);
    div2.setAttribute('class', 'mypdf col-md-4');
    

    g_pdfFile++;
    _OBJECT_URL = URL.createObjectURL(file);
    div2.setAttribute('data_value', _OBJECT_URL);

    showPDF(_OBJECT_URL);

    var fd = new FormData();
    fd.append('file',file);

    $.ajax({
      url: '<?php echo base_url() ?>'+"/fileSave",
      method: 'post',
      data: fd,
      contentType: false,
      processData: false,
      dataType: 'json',
      success: async function( ret ) {
        div3.innerHTML = ret.filepath;
        div2.setAttribute('data_value', ret.filepath);
      },
      error: function(e){

      }
   });


});



function pdf_upload() {
  document.querySelector("#file_input1").click();
}

function pdfClick(){
  pdfSelected_no = event.target.parentNode.getAttribute('name');
  mypdfs = document.getElementsByClassName('mypdf');
  for (i = 0; i < mypdfs.length; i++)
    mypdfs[i].classList.remove('img_active');
  event.target.parentNode.classList.add('img_active');

}

function img_click() {
  selected_no = event.target.name;
  images = document.getElementsByClassName('myimg');
  for (i = 0; i < images.length; i++)
    images[i].classList.remove('img_active')
  event.target.classList.add('img_active');
}



//iframe
function landingPagePreview() {
  document.getElementsByClassName('qr_page_code_preview')[0].style.display = "none";
  document.getElementsByClassName('landing_page_preview_frame')[0].style.display = "";
  if(event.target.tagName == 'I')
  {
    event.target.parentNode.className = 'btn btn-light active';
    event.target.parentNode.nextElementSibling.className = 'btn btn-light';
  }
  else if(event.target.tagName == 'BUTTON')
  {
    event.target.className = 'btn btn-light active';
    event.target.nextElementSibling.className = 'btn btn-light';
  }
}

function qrPagecodePreview() {
  document.getElementsByClassName('qr_page_code_preview')[0].style.display = "";
  document.getElementsByClassName('landing_page_preview_frame')[0].style.display = "none";
  if(event.target.tagName == 'I')
  {
    event.target.parentNode.className = 'btn btn-light active';
    event.target.parentNode.previousElementSibling.className = 'btn btn-light';
  }
  else if(event.target.tagName == 'BUTTON')
  {
    event.target.className = 'btn btn-light active';
    event.target.previousElementSibling.className = 'btn btn-light';
  }
}


$("#btn_add_profile_component").click(function() {

  $('#btn_add_profile_component').attr('aria-expanded', 'true');
  $('#btn_add_profile_component').next().addClass('show');
});


//template
$('#short_url_input').keyup(function(){
  $('.short_url_data')[0].innerHTML = 'mycard/' + $('#short_url_input').val();
});


$(document).ready(function() {
  loadFunction();
//  generateQRCode();
  showMobileIframe(templateNo);
});

function saveTemplate(){

$('#saveModal').modal('show');
  document.getElementById('linko_url').value = $('#short_url_input').val();

}

$("#save-btn").click(async function() {

  var linkoUrl = document.getElementById('linko_url').value;
  document.getElementById('short_url_input').value = linkoUrl;

  if(!linkoUrl)
  {
    document.getElementById('linko_url').setAttribute('style', 'border-color:red');
    return;
  }
  else
  {
    document.getElementById('linko_url').setAttribute('style', '');    
  }

  $('#saveModal').modal('hide');  

  await imageQrCodeGenerate(3);

  var template = document.getElementById('qr_page_prev').children[0].getAttribute('srcdoc');

  chimpData.push({type:'setting', value:{...settingState}});
  chimpData.push({type:'template', value: template});
  chimpData.push({type:'linkoUrl', value:linkoUrl});

//   saveQrImage();

    $.ajax({
      url: '<?php echo base_url() ?>'+"/qrchimp",
      type: "POST",
      dataType:"JSON",
      data:{
        chimpData:chimpData
      },
      success: async function( ret ) {

        if(ret.success == true)
          alert('Your template card has saved successfully!');
        else if(ret.success == false)
          alert('Failed. Perhaps could maybe url have already existed. Try again.');   
        else
          alert('error');
      },
      error: function(e){
        console.log('error');
      }
    });    

});




$(".page_template_card").click(function() {

  templateNo = event.target.parentNode.getAttribute('data-index');
  $('.page_template_card').removeClass('active');

  event.target.parentNode.className = event.target.parentNode.className + ' active';
  document.getElementById("qr_page_prev").children[0].remove();

  showMobileIframe(templateNo);
});



var width = document.getElementById('mySticky').clientWidth;
window.onscroll = function() {myFunction()};

var mySticky = document.getElementById("mySticky");
var sticky = mySticky.offsetTop;

function myFunction() {

  
  var settingTabId = 1;

  if(window.localStorage.getItem('mySettingTabId'))
  {
    settingTabId = window.localStorage.getItem('mySettingTabId');
  }

  if(settingTabId != 2 && settingTabId != 3)
  {
    if (window.pageYOffset > sticky) {
      mySticky.classList.add("mySticky");
      document.getElementById('mySticky').setAttribute('style', 'width:' + width + 'px !important;');

    } else {
      mySticky.classList.remove("mySticky");
    }
  }
  else
  {
    mySticky.classList.remove("mySticky");
  }
}

async function saveQrImage1(){

  var container = document.getElementById("qrcodeDiv");



  html2canvas(container, {
    allowTaint: true,
    useCORS: true
  }).then(async function (canvas) {
    var link = document.createElement("a");
    document.body.appendChild(link);
    link.download = "html_image.jpg";
    link.href = canvas.toDataURL('image/jpeg', 1.0);

    var fd = new FormData();
    let blob = await fetch(link.href).then(r => r.blob());

    fd.append('file', blob);


    container.innerHTML = "";


    $.ajax({
      url: '<?php echo base_url() ?>'+"/fileSave",
      method: 'post',
      data: fd,
      contentType: false,
      processData: false,
      dataType: 'json',
      success: async function( ret ) {  

        $('#qrcode_preview').attr('src', ret.filepath);
        qrPopUp.qrImage = ret.filepath;

      },
      error: function(e){

      }
   });
});



}

  async function saveQrImage() {

  document.getElementById('desgin_qrcode_modal').style.display = "block";


  var container = document.getElementById("qrcodeDiv");
  var size = container.style.width;
  var size1 = container.style.height;
  container.style.width = '512px';
  container.style.height ='512px';

  await html2canvas(container, {
    allowTaint: true,
    useCORS: true
  }).then(async function (canvas) {

    var link = document.createElement("a");
    document.body.appendChild(link);
    link.download = "html_image.jpg";
    link.href = canvas.toDataURL('image/jpeg', 1.0);
    link.target = "_blank";
//    link.click();

    var fd = new FormData();
    let blob = await fetch(link.href).then(r => r.blob());


    fd.append('file', blob);
    container.style.height = size1;
    container.style.width = size;
    container.innerHTML = "";
    $.ajax({
      url: '<?php echo base_url() ?>'+"/fileSave",
      method: 'post',
      data: fd,
      contentType: false,
      processData: false,
      dataType: 'json',
      success: async function( ret ) {  

        $('#qrcode_preview').attr('src', ret.filepath);

        qrPopUp.qrImage = ret.filepath;

        document.getElementById("qr_page_prev").children[0].remove();
        showMobileIframe(templateNo);
      },
      error: function(e){

      }
   });

  document.getElementById('desgin_qrcode_modal').style.display = "none";
  });

}

 async function saveAndDownload() {
  var flag = 0; var dataSize = 0;

  for(var i=0; i<document.getElementsByClassName('download_qr_size')[0].children.length; i++)
  {

    if(document.getElementsByClassName('download_qr_size')[0].children[i].className.search('active') >= 0 )
    {
      flag = 1; dataSize = document.getElementsByClassName('download_qr_size')[0].children[i].children[0].getAttribute('data-size');
    }
  }

  if(!flag)
  {
    alert('Please select image size');
    return;
  }

  document.getElementById('desgin_qrcode_modal').style.display = "block";
 



  // var picWidth = $('#qrcode2Pic').attr('width');

  // $('#qrcode2Pic').removeAttr("width"); 
  // var pic_real_width = $('#qrcode2Pic').width();

  // $('#qrcode2Pic').attr('width', picWidth);

  // var scaleX = pic_real_width/document.getElementById('imageDiv').offsetWidth;
  // console.log('scaleX', scaleX, 'footer.php  __LINE__819');

  var scaleX = dataSize/document.getElementById('imageDiv').offsetWidth;


  qrCodeWidth = document.getElementById('myRect').offsetWidth*scaleX;
  qrCodeHeight = document.getElementById('myRect').offsetHeight*scaleX;
  qrCodeState.qrShapeBorderSize= qrCodeState.qrShapeBorderSize*scaleX;
  qrCodeState.qrPaddingAroundEyes= qrCodeState.qrPaddingAroundEyes*scaleX;
  
  downloadFlag = 0;

  await generateQRCode();


  if(qrCodeState.qrShape == 'rectangle')
  {
      console.log('footer __LINE__:833');
      var style1 = document.getElementById('qrcodeDiv').children[0].getAttribute('style');

      style1 = style1+"; opacity:0.8;";
      document.getElementById('qrcodeDiv').children[0].setAttribute('style',style1);

      var left = document.getElementById('myRect').offsetLeft + document.getElementById('myRect').offsetWidth/2; 
      var top = document.getElementById('myRect').offsetTop + document.getElementById('myRect').offsetHeight/2;


      var left1 = (left - document.getElementById('myRect').offsetWidth/2)*scaleX;
      var top1 = (top - document.getElementById('myRect').offsetHeight/2)*scaleX;


      document.getElementById('qrcodeDiv').children[0].style.left = left1+"px";
      document.getElementById('qrcodeDiv').children[0].style.top = top1+"px";
      document.getElementById('qrcodeDiv').children[0].style.position = "absolute";
      
      console.log('footer __LINE__:851');
      
      var toImageDiv = document.getElementById('qrcodeDiv');      
      console.log('toImageDiv', toImageDiv);
      await html2canvas(toImageDiv, {
        allowTaint: true,
        useCORS: true
      }).then(function (canvas) {
        console.log('aaaa');
        var link = document.createElement("a");
        document.body.appendChild(link);
        console.log('bbbb');
        link.href = canvas.toDataURL('image/jpeg', 1.0);
      });
      console.log('footer __LINE__:863');
  }
  else if(qrCodeState.qrShape == 'circle')
  {
      var style1 = document.getElementById('qrcodeDiv').children[0].getAttribute('style');

      style1 = style1+"; opacity:0.8;";
      document.getElementById('qrcodeDiv').children[0].setAttribute('style',style1);

      var style2 = document.getElementById('qrcodeDiv').children[1].getAttribute('style');

      style2 = style2+"; opacity:0.8;";
      document.getElementById('qrcodeDiv').children[1].setAttribute('style',style2);

      var left = document.getElementById('myRect').offsetLeft + document.getElementById('myRect').offsetWidth/2; 
      var top = document.getElementById('myRect').offsetTop + document.getElementById('myRect').offsetHeight/2;


      var left1 = left*scaleX - document.getElementById('qrcodeDiv').children[1].offsetWidth*1.4142/2;
      var top1 = top*scaleX - document.getElementById('qrcodeDiv').children[1].offsetHeight*1.4142/2;

      var left2 = left*scaleX - document.getElementById('qrcodeDiv').children[1].offsetWidth*1/2 + qrCodeState.qrShapeBorderSize/15;
      var top2 = top*scaleX - document.getElementById('qrcodeDiv').children[1].offsetHeight*1/2 + qrCodeState.qrShapeBorderSize/15;

      document.getElementById('qrcodeDiv').children[0].style.left = left1+"px";
      document.getElementById('qrcodeDiv').children[0].style.top = top1+"px";
      document.getElementById('qrcodeDiv').children[0].style.position = "absolute";

      document.getElementById('qrcodeDiv').children[1].style.left = left2+"px";
      document.getElementById('qrcodeDiv').children[1].style.top = top2+"px";
      document.getElementById('qrcodeDiv').children[1].style.position = "absolute";    
      var toImageDiv = document.getElementById('qrcodeDiv').children[1];      

      await html2canvas(toImageDiv, {
        allowTaint: true,
        useCORS: true
      }).then(async function (canvas) {
        var link = document.createElement("a");
        document.body.appendChild(link);
        link.href = canvas.toDataURL('image/jpeg', 1.0);
      });
  }

  var container = document.getElementById("qrcodeDiv");
  var size = container.style.width;
  var size1 = container.style.height;
  console.log('datasize', dataSize, 'footer __LINE__:909');
  container.style.width = dataSize+'px';
  container.style.height = dataSize+'px';
  console.log('container.style.width', container.style.width, 'footer __LINE__:912');

  if(downloadFlag == 1)
  {

    await html2canvas(container, {
      allowTaint: true,
      useCORS: true
    }).then(async function (canvas) {
      var link = document.createElement("a");
      document.body.appendChild(link);
      link.download = "html_image.jpg";
      link.href = canvas.toDataURL('image/jpeg', 1.0);
      link.target = "_blank";
      link.click();

      var fd = new FormData();
      let blob = await fetch(link.href).then(r => r.blob());


      fd.append('file', blob);
      container.style.width = size;
      container.style.height = size1;
      
      $('#moreSize').modal('hide');
      container.innerHTML = "";
      
      $.ajax({
        url: '<?php echo base_url() ?>'+"/fileSave",
        method: 'post',
        data: fd,
        contentType: false,
        processData: false,
        dataType: 'json',
        success: function( ret ) {  

          $('#qrcode_preview').attr('src', ret.filepath);

          qrPopUp.qrImage = ret.filepath;
          document.getElementById("qr_page_prev").children[0].remove();
          showMobileIframe(templateNo);
        },
        error: function(e){

        }
     });

    document.getElementById('desgin_qrcode_modal').style.display = "none";
    });
  }
  
}



</script>

<script type="text/javascript" src="./select2.min.js"></script>
</html>