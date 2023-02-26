
//pdf
function addPdf(id){
  var addElement = document.createElement('div');
  g_subcomponentIndex++;
  g_currentPdf++;
  addElement.id = 'sub_comp_' + g_subcomponentIndex;
    addElement.setAttribute('draggable', 'true');
    addElement.setAttribute('ondragstart', 'drag(event)');
    addElement.setAttribute('ondrop', 'drop(event)');
    addElement.setAttribute('ondragover', 'allowDrop(event)');

  addElement.className = 'list-group-item pdf_gallery_input_wrapper subcomponent_sortable_wrapper mb-4';
  addElement.innerHTML = '<div class="action_buttons"><a class="btn btn_delete_pro_card" onclick="pdf_del(event)"><i class="text-danger icon-delete_1"></i></a><a class="btn handle-social-link"><i class="icon-drag_1"></i></a></div><div class="my-2">PDF URL <span>(Please enter the PDF URL or upload)</span></div><div class="row"><div class="col-md-8 pr-0"><input type="text" class="form-control" name="url" value="" placeholder="URL"></div><div class="col-md-1 px-0 d-flex align-items-center justify-content-center"><span style=" margin-bottom: 12px; ">or</span></div><div class="col-md-2 pl-0"><button class="upload_pdfs btn btn-primary  p-2" type="button" data-bs-toggle="modal" data-bs-target="#image_modal1" onclick="current = '+g_pdfFile+'"><i class="icon-file_upload_1 mr-1"></i>Upload</button></div></div><div class="row"><div class="col-md-12 px-3 mb-3"><div class="mb-2">PDF Thumbnail <span class="text-muted font-12">(250x250px, 1:1 Ratio)</span></div><div class="d-flex img_upload_card_wrapper"><div class="img_uploaded_card selected_img mr-3 img_'+g_currentPdf+'" style="background-image:url(\'/assets/images/windows.png\')"></div>  <div class="img_uploaded_card upload_img mr-3 d-flex justify-content-center align-items-center flex-column"  data-bs-toggle="modal" data-bs-target="#image_modal" onclick="current = '+g_currentPdf+'"><i class="font-24 icon-file_upload_1 my-2"></i></div><input class="d-none" type="file" name="pg_upload_image" accept="image/*"></div></div></div><div class="row"><div class="col-md-6  px-3"><div class="mb-2 d-flex"><span class="mr-2">Title</span> </div><div class="d-flex"><input class="form-control" autocomplete="off" name="title" value="PDF 1" type="text" placeholder=""></div></div><div class="col-md-6  px-3"><div class="mb-2 d-flex"><span class="mr-2">Subtitle</span><div class="switchery d-inline"><label class="switch mb-0"><input type="checkbox" checked="" name="subtitle_enable"><span class="slider round"></span></label></div> </div><div class="d-flex"><input class="form-control" autocomplete="off" name="subtitle" value="PDF Description" type="text" placeholder=""></div></div></div>';
  document.getElementById('pdf_gallery_container_' + id).appendChild(addElement);
  g_pdfFile++;

        //get pIndex
        var component = event.target;
        while(component.id.search('component_') < 0){
          component = component.parentNode;
        }   

        var pIndex = Array.from(component.parentNode.children).indexOf(component);
        //push
        chimpData[pIndex].value.pdfItems.push({url:'', pdfAvatar:'', title:'PDF 1', description:'PDF Description', subTitleEnabled:'block'});


}


function pdf_del(e){

  $('#delModal').modal('show');
  var obj;
  var parent;

  if (e.target.tagName == 'I') {
    var obj = e.target.parentNode.parentNode.parentNode;

    var parent = obj.parentNode;
  } else if (e.target.tagName == 'A') {
    var obj = e.target.parentNode.parentNode;

    var parent = obj.parentNode;
  }


  var index = Array.from(parent.children).indexOf(obj);

  var flag = 0;
  $(".del-btn").click(function() {
    if (flag === 0) flag = 1
    else return;

    //get pIndex
    var component = parent;
    while(component.id.search('component_') < 0){
      component = component.parentNode;
    }    
    var pIndex = Array.from(component.parentNode.children).indexOf(component);
    var temp = chimpData[pIndex];
    temp.value.pdfItems.splice(index, 1);
    chimpData[pIndex] = temp;



    obj.remove();
    $('#delModal').modal('hide');

  });  
}
