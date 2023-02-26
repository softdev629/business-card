

//file

$('.remove_img').click(function() {
  $('.remove_img').removeClass('selected');
  event.target.className = event.target.className + " selected";
  saving_image = event.target.style['background-image'];
  saving_image = saving_image.slice(5, -2);
  settingState.backgroundImage = saving_image;
  // document.getElementById("qr_page_prev").children[0].remove();
  // showMobileIframe(templateNo);
});

function pdf_select(){

  if (pdfSelected_no == -1) {
    alert("Please select image");
    return;
  } else {

      document.getElementById('pdf_gallery_container_'+g_pdfGalleryContainer).children[current-1].children[2].children[0].children[0].value = mypdfs[pdfSelected_no].getAttribute('data_value');
  }  
}

function file_select() {

  if (selected_no == -1) {
    alert("Please select image");
    return;
  } else {
    if (current == 0) {//profile avatar
      document.getElementsByClassName('pr_img')[0].style['backgroundImage'] = "url(\'" + myimages[selected_no] +
        "\')";

      var component = document.getElementsByClassName('pr_img')[0];
      while(component.id.search('component_') < 0){
        component = component.parentNode;
      }    
      var pIndex = Array.from(component.parentNode.children).indexOf(component);

      chimpData[pIndex].value.avatar.url = myimages[selected_no];

    }else if(current == 1){//contact us
      document.getElementsByClassName('contact-image')[0].style['backgroundImage'] = "url(\'" + myimages[selected_no] +
        "\')";

      var component = document.getElementsByClassName('contact-image')[0];
      while(component.id.search('component_') < 0){
        component = component.parentNode;
      }    
      var pIndex = Array.from(component.parentNode.children).indexOf(component);

      chimpData[pIndex].value.images = myimages[selected_no];

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


    } else if (current == 2) {//page loader

      document.getElementsByClassName('loader_img')[0].style['backgroundImage'] = "url(\'" + myimages[selected_no] +
        "\')";
      settingState.pageLoader = myimages[selected_no];

    } else if (current < 500) {//social link
      document.getElementsByClassName('img_' + current)[0].style['backgroundImage'] = "url(\'" + myimages[selected_no] + "\')";
      var child = document.getElementsByClassName('img_' + current)[0].parentNode.parentNode.parentNode.parentNode;

      var parent = child.parentNode;
      var index = Array.from(parent.children).indexOf(child);

      socialLinksState.links[index].logo =myimages[selected_no];      

    } else if (current >= 501 && current <=1000) {//linkstate
      document.getElementsByClassName('img_' + current)[0].style['backgroundImage'] = "url(\'" + myimages[selected_no] + "\')";
      var child = document.getElementsByClassName('img_' + current)[0].parentNode.parentNode.parentNode.parentNode;
      var parent = child.parentNode;
      var index = Array.from(parent.children).indexOf(child);
      linksState.links[index].image =myimages[selected_no];      
      // document.getElementById("qr_page_prev").children[0].remove();
      //   showMobileIframe(templateNo);
    }else if(current >=1500 && current <=2000){
      document.getElementsByClassName('img_' + current)[0].style['backgroundImage'] = "url(\'" + myimages[selected_no] + "\')";
      // var child = document.getElementsByClassName('img_' + current)[0].parentNode.parentNode.parentNode.parentNode;

      // var parent = child.parentNode;
      // var index = Array.from(parent.children).indexOf(child);
/*
      socialLinksState.links[index].logo =myimages[selected_no];      
      document.getElementById("qr_page_prev").children[0].remove();
        showMobileIframe(templateNo);
*/
    }
  }
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
    myimages.push(URL.createObjectURL(_.target.files[0]));
    chosenImage.appendChild(image);
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
    div3.innerHTML = file.name;

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


