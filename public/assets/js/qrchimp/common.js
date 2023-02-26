
const pageForm = document.getElementsByClassName("page_form")[0];







$('.tab-three a').click(function(){
    var div = document.createElement('div');
    div.className = 'card collapse_card mb-3 qr_page_component_card list-group-item';
    div.id = 'component_' + g_componentIndex;
    div.setAttribute('draggable', 'true');
    div.setAttribute('ondragstart', 'dragComponent\(event\)');
    div.setAttribute('ondrop', 'dropComponent\(event\)');
    div.setAttribute('ondragover', 'allowDropComponent\(event\)');



    g_componentIndex++;
  if(event.target.getAttribute('data-type') == 'text_desc')
  {
    div.setAttribute('data-type', 'text_desc');
const headingComponent = '<div class="card-header d-flex justify-content-between" aria-expanded="true"><h5 class="mb-0 d-flex align-item-center w-100"><a class="btn handle display_on_hover py-2 pr-0 text-muted"><i class="icon-drag_1"></i></a><a class="btn btn-link qr_page_component_card_title w-100 text-left">Heading + Text</a></h5><div class="qr_page_component_card_actions"><a class="btn btn_delete_component_card display_on_hover" onclick="delete_component_card()"><i class="text-danger icon-delete_1"></i></a><a class="btn handle display_on_hover d-none"><i class="icon-drag_1"></i></a><div class="d-inline mr-2"><div class="switchery d-inline"><label class="switch mb-0"><input type="checkbox" checked="" name="card_enable" onchange="checkbox()"><span class="slider round"></span></label></div></div><a class="btn toggle_card_visiblitiy mr-0" onclick="openComponent()"><i class="icon-add_1"></i></a></div></div><div class="qr_page_component_card_body  secondary_color"><div class="card-body"><div class="row"><div class="col-md-12  px-3"><div class="mb-2 d-flex"><span class="mr-2">Title</span> </div><div class="d-flex"><input class="form-control" autocomplete="off" name="title" value="Heading" type="text" placeholder="" onkeyup="changeHeadingTitle()"></div></div><div class="col-md-12  px-3"><div class="mb-2">Description</div><div class="d-flex"><textarea onkeyup="changeHeadingDescription()" class="form-control" name="desc" rows="4">Description</textarea></div></div></div></div><div class="card-footer d-flex"><div class="switchery d-inline"><label class="switch mb-0"><input type="checkbox" checked="" name="card_bg_enable" onchange="checkbox()"><span class="slider round"></span></label></div> <div class="ml-2">Card Background</div></div></div>';
    div.innerHTML = headingComponent;

    $('#qr_page_component_container').append(div);
    chimpData.push({type:'heading', value:{...headingState}});
    document.getElementById('qr_page_prev').children[0].remove();
    showMobileIframe(templateNo);

  }
  else if(event.target.getAttribute('data-type') == 'web_links')
  {
    div.setAttribute('data-type', 'web_links');
    g_currentLinks++;
    g_webLinkContainer++
const linksComponent = '<div class="card-header d-flex justify-content-between" aria-expanded="true"><h5 class="mb-0 d-flex align-item-center w-100"><a class="btn handle display_on_hover py-2 pr-0 text-muted"><i class="icon-drag_1"></i></a><a class="btn btn-link qr_page_component_card_title w-100 text-left">Links</a></h5><div class="qr_page_component_card_actions"><a class="btn btn_delete_component_card display_on_hover" onclick="delete_component_card()"><i class="text-danger icon-delete_1"></i></a><a class="btn handle display_on_hover d-none"><i class="icon-drag_1"></i></a><div class="d-inline mr-2"><div class="switchery d-inline"><label class="switch mb-0"><input type="checkbox" checked="" name="card_enable" data-type="qrc_social_links_2" onchange="checkbox()"><span class="slider round"></span></label></div></div><a class="btn toggle_card_visiblitiy mr-0" onclick="openComponent()"><i class="icon-add_1"></i></a></div></div><div class="qr_page_component_card_body  secondary_color"><div class="card-body"><div class="row"><div class="col-md-12 title_desc_wrapper"><div class="row mx-0"><div class="mr-2 mb-2"> Title, Description </div><div class="switchery d-inline"><label class="switch mb-0"><input type="checkbox" name="header_enable" data-type="qrc_heading_social_links_2" onchange="checkbox()"><span class="slider round title-description"></span></label></div></div><div class="row mx-0 title_desc_wrapper_input gray_card mb-4 " style="display:none;"><div class="col-md-12  px-3"><div class="mb-2 d-flex"><span class="mr-2">Title</span> </div><div class="d-flex"><input class="form-control" autocomplete="off" name="title" value="Web Link" type="text" placeholder="" onkeyup="webLinksChange()"></div></div><div class="col-md-12  px-3"><div class="mb-2">Description</div><div class="d-flex"><textarea class="form-control" onkeyup="webLinksChange()" name="desc" rows="4">Description</textarea></div></div></div></div><div class="col-md-12 px-3 "><div class="row mx-0 list-group mt-3" id="web_link_container_'+g_webLinkContainer+'"><div id="sub_comp_'+String(Number(g_subcomponentIndex) + 1)+'"  draggable="true" ondragstart="drag\(event\)"  ondrop="drop\(event\)" ondragover="allowDrop\(event\)" class="list-group-item web_link_input_wrapper subcomponent_sortable_wrapper mb-4"><div><div class="action_buttons"><a class="btn btn_delete_pro_card" onclick="webLinks_del(event)"><i class="text-danger icon-delete_1"></i></a><a class="btn handle-web-link"><i class="icon-drag_1"></i></a></div></div><div class=""></div><div class="row"><div class="col-md-12  px-3"><div class="mb-2 d-flex"><span class="mr-2">Link</span> </div><div class="d-flex"><input class="form-control" autocomplete="off" name="url" value="" type="text" placeholder="" onkeyup="webLinkUrlChange()"></div></div></div><div class="row"><div class="col-md-12 px-3 mb-3"><div class="mb-2"> </div><div class="d-flex img_upload_card_wrapper"><div class="img_uploaded_card selected_img mr-3 link_img img_'+g_currentLinks+'" style="background-image:url(\'/assets/images/link.png\')"></div><div class="img_uploaded_card upload_img mr-3 d-flex justify-content-center align-items-center flex-column" data-bs-toggle="modal" data-bs-target="#image_modal" onclick="current = '+g_currentLinks+'"><i class="font-24 icon-file_upload_1 my-2"></i><span class="text-muted font-12">1:1 Ratio</span></div><input class="d-none" type="file" name="pg_upload_image" accept="image/*"></div></div></div><div class="row"><div class="col-md-6  px-3"><div class="mb-2 d-flex"><span class="mr-2">Title</span> </div><div class="d-flex"><input class="form-control" autocomplete="off" name="title" value="Portfolio" type="text" placeholder="" onkeyup="webLinkTitleChange()"></div></div><div class="col-md-6  px-3"><div class="mb-2 d-flex"><span class="mr-2">Subtitle</span><div class="switchery d-inline"><label class="switch mb-0"><input type="checkbox" name="subtitle_enable"  onchange="checkbox()"><span class="slider round"></span></label></div></div><div class="d-flex"><input class="form-control" autocomplete="off" name="subtitle" value="Visit for more information" type="text" placeholder="" onkeyup="webLinkSubTitleChange()"></div></div></div></div></div><div class="row mx-0 mt-2"><a class="btn btn-primary" style="color:white" type="button" onclick="addLink('+g_webLinkContainer+')"><i class="icon-add_1"></i>Add Link</a></div></div></div></div><div class="card-footer d-flex"><div class="switchery d-inline"><label class="switch mb-0"><input type="checkbox" checked="" name="card_bg_enable" onchange="checkbox()"><span class="slider round"></span></label></div><div class="ml-2">Card Background</div></div></div>';
    g_subcomponentIndex++;
    div.innerHTML = linksComponent;
    $('#qr_page_component_container').append(div);
    chimpData.push({type:'webLinks', value:{...linksState}});
    document.getElementById('qr_page_prev').children[0].remove();
    showMobileIframe(templateNo);
  }
  else if(event.target.getAttribute('data-type') == 'social_link')
  {
    div.setAttribute('data-type', 'social_link');
    g_socialLinkContainer++;
const socialLinkComponent = '<div class="card-header d-flex justify-content-between" aria-expanded="true"><h5 class="mb-0 d-flex align-item-center w-100"><a class="btn handle display_on_hover py-2 pr-0 text-muted"><i class="icon-drag_1"></i></a><a class="btn btn-link qr_page_component_card_title w-100 text-left">Social Links</a></h5><div class="qr_page_component_card_actions"><a class="btn btn_delete_component_card display_on_hover" onclick="delete_component_card()"><i class="text-danger icon-delete_1"></i></a><a class="btn handle display_on_hover d-none"><i class="icon-drag_1"></i></a><div class="d-inline mr-2"><div class="switchery d-inline"><label class="switch mb-0"><input type="checkbox" checked="" name="card_enable" data-type="qrc_social_links_1" onchange="checkbox()"><span class="slider round"></span></label></div></div><a class="btn toggle_card_visiblitiy mr-0" onclick="openComponent()"><i class="icon-add_1"></i></a></div></div><div class="qr_page_component_card_body  secondary_color"><div class="card-body"><div class="row"><div class="col-md-12 title_desc_wrapper"><div class="row mx-0"><div class="mr-2 mb-2"> Title, Description </div><div class="switchery d-inline"><label class="switch mb-0"><input type="checkbox" name="header_enable" data-type="qrc_heading_social_link_1" onchange="checkbox()"><span class="slider round  title-description"></span></label></div></div><div class="row mx-0 title_desc_wrapper_input gray_card mb-4 " style="display: none;"><div class="col-md-12  px-3"><div class="mb-2 d-flex"><span class="mr-2">Title</span> </div><div class="d-flex"><input class="form-control" autocomplete="off" name="title" value="Social Links" type="text" placeholder=""></div></div><div class="col-md-12  px-3"><div class="mb-2">Description</div><div class="d-flex"><textarea class="form-control" name="desc" rows="4">Description</textarea></div></div></div></div><div class="col-md-12 px-3"><div class="row mx-0 list-group mt-3" id="social_link_container_'+ g_socialLinkContainer +'"><div id="sub_comp_'+String(Number(g_subcomponentIndex)+1)+'"  draggable="true" ondragstart="drag\(event\)"  ondrop="drop\(event\)" ondragover="allowDrop\(event\)" class="list-group-item social_link_input_wrapper subcomponent_sortable_wrapper mb-4"><div><div class="action_buttons"><a class="btn btn_delete_pro_card" onclick="socialLinkDel()"><i class="text-danger icon-delete_1"></i></a><a class="btn handle-social-link"><i class="icon-drag_1"></i></a></div></div><div class=""></div><div class="input-group my-3"><div class="dropdown"><ul class=" dropdown-menu changable1"><li class="dropdown-item" onclick="changeContacts()" value="facebook">Facebook</li><li class="dropdown-item" onclick="changeContacts()" value="instagram">Instagram</li><li class="dropdown-item" onclick="changeContacts()" value="linkedin">LinkedIn</li><li class="dropdown-item" onclick="changeContacts()" value="twitter">Twitter</li><li class="dropdown-item" onclick="changeContacts()" value="skype">Skype</li><li class="dropdown-item" onclick="changeContacts()" value="behance">Behance</li><li class="dropdown-item" onclick="changeContacts()" value="youtube">YouTube</li><li class="dropdown-item" onclick="changeContacts()" value="whatsapp">  Whatsapp</li><li class="dropdown-item" onclick="changeContacts()" value="email">Email</li><li class="dropdown-item" onclick="changeContacts()" value="telegram">    Telegram</li><li class="dropdown-item" onclick="changeContacts()" value="tiktok">TikTok</li></ul><button class="btn-default1 dropdown-toggle" data-bs-toggle="dropdown">Facebook&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button></div><input type="text" class="form-control" name="url" onkeyup="socialLinkChange()" value="" placeholder="URL"></div><div class="row"><div class="col-md-12 px-3 mb-3"><div class="mb-2"> </div><div class="d-flex img_upload_card_wrapper"><div class="img_uploaded_card selected_img mr-3  img_'+String(Number(g_currentSocial) + Number(1)) +'" style="background-image:url(\'/images/facebook.png\')"></div><div class="img_uploaded_card upload_img mr-3 d-flex justify-content-center align-items-center flex-column" data-bs-toggle="modal" data-bs-target="#image_modal" onclick="current = '+String(Number(g_currentSocial) + Number(1)) +'"><i class="font-24 icon-file_upload_1 my-2"></i></div><input class="d-none" type="file" name="pg_upload_image" accept="image/*"></div></div></div><div class="row"><div class="col-md-6  px-3"><div class="mb-2 d-flex"><span class="mr-2">Title</span> </div><div class="d-flex"><input class="form-control" autocomplete="off" name="title" value="Title" type="text" placeholder=""></div></div><div class="col-md-6  px-3"><div class="mb-2 d-flex"><span class="mr-2">Subtitle</span><div class="switchery d-inline"><label class="switch mb-0"><input type="checkbox" name="subtitle_enable" data-type="socialLinksSubTitle" onchange="checkbox()"><span class="slider round"></span></label></div></div><div class="d-flex"><input class="form-control" autocomplete="off" name="subtitle" value="Like us on Facebook" type="text" placeholder=""></div></div></div></div><div id="sub_comp_'+String(Number(g_subcomponentIndex)+2)+'"  draggable="true" ondragstart="drag\(event\)"  ondrop="drop\(event\)" ondragover="allowDrop\(event\)" class="list-group-item social_link_input_wrapper subcomponent_sortable_wrapper mb-4"><div><div class="action_buttons"><a class="btn btn_delete_pro_card" onclick="socialLinkDel()"><i class=" text-danger icon-delete_1"></i></a><a class="btn handle-social-link"><i class="icon-drag_1"></i></a></div></div><div class=""></div><div class="input-group my-3"><div class="dropdown"><ul class=" dropdown-menu changable1"><li class="dropdown-item" onclick="changeContacts()" value="facebook">Facebook</li><li class="dropdown-item" onclick="changeContacts()" value="instagram">Instagram</li><li class="dropdown-item" onclick="changeContacts()" value="linkedin">LinkedIn</li><li class="dropdown-item" onclick="changeContacts()" value="twitter">Twitter</li><li class="dropdown-item" onclick="changeContacts()" value="skype">Skype</li><li class="dropdown-item" onclick="changeContacts()" value="behance">Behance</li><li class="dropdown-item" onclick="changeContacts()" value="youtube">YouTube</li><li class="dropdown-item" onclick="changeContacts()" value="whatsapp">  Whatsapp</li><li class="dropdown-item" onclick="changeContacts()" value="email">Email</li><li class="dropdown-item" onclick="changeContacts()" value="telegram">     Telegram</li><li class="dropdown-item" onclick="changeContacts()" value="tiktok">TikTok</li></ul><button class="btn-default1 dropdown-toggle" data-bs-toggle="dropdown">Instagram&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button></div><input type="text" class="form-control" name="url" value="" onkeyup="socialLinkChange()" placeholder="URL"></div><div class="row"><div class="col-md-12 px-3 mb-3"><div class="mb-2"> </div><div class="d-flex img_upload_card_wrapper"><div class="img_uploaded_card selected_img mr-3  img_'+String(Number(g_currentSocial) + Number(2)) +'" style="background-image:url(\'/images/intragram.png\')"></div><div class="img_uploaded_card upload_img mr-3 d-flex justify-content-center align-items-center flex-column" data-bs-toggle="modal" data-bs-target="#image_modal" onclick="current = '+String(Number(g_currentSocial) + Number(2)) +'"><i class="font-24 icon-file_upload_1 my-2"></i></div><input class="d-none" type="file" name="pg_upload_image" accept="image/*"></div></div></div><div class="row"><div class="col-md-6  px-3"><div class="mb-2 d-flex"><span class="mr-2">Title</span> </div><div class="d-flex"><input class="form-control" autocomplete="off" name="title" value="Instagram" type="text" placeholder=""></div></div><div class="col-md-6  px-3"><div class="mb-2 d-flex"><span class="mr-2">Subtitle</span><div class="switchery d-inline"><label class="switch mb-0"><input type="checkbox" name="subtitle_enable" data-type="socialLinksSubTitle" onchange="checkbox()"><span class="slider round"></span></label></div></div><div class="d-flex"><input class="form-control" autocomplete="off" name="subtitle" value="Follow us on Instagragm" type="text" placeholder=""></div></div></div></div><div id="sub_comp_'+String(Number(g_subcomponentIndex)+3)+'"  draggable="true" ondragstart="drag\(event\)"  ondrop="drop\(event\)" ondragover="allowDrop\(event\)" class="list-group-item social_link_input_wrapper subcomponent_sortable_wrapper mb-4"><div><div class="action_buttons"><a class="btn btn_delete_pro_card" onclick="socialLinkDel()"><i class="text-danger icon-delete_1"></i></a><a class="btn handle-social-link"><i class="icon-drag_1"></i></a></div></div><div class=""></div><div class="input-group my-3"><div class="dropdown"><ul class=" dropdown-menu changable1"><li class="dropdown-item" onclick="changeContacts()" value="facebook">Facebook</li><li class="dropdown-item" onclick="changeContacts()" value="instagram">Istagram</li><li class="dropdown-item" onclick="changeContacts()" value="linkedin">LinkedIn</li><li class="dropdown-item" onclick="changeContacts()" value="twitter">Twitter</li><li class="dropdown-item" onclick="changeContacts()" value="skype">Skype</li><li class="dropdown-item" onclick="changeContacts()" value="behance">Behance</li><li class="dropdown-item" onclick="changeContacts()" value="youtube">YouTube</li><li class="dropdown-item" onclick="changeContacts()" value="whatsapp">Whatsapp</li><li class="dropdown-item" onclick="changeContacts()" value="email">Email</li><li class="dropdown-item" onclick="changeContacts()" value="telegram">Telegram</li><li class="dropdown-item" onclick="changeContacts()" value="tiktok">TikTok</li></ul><button class="btn-default1 dropdown-toggle" data-bs-toggle="dropdown">Twitter&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button></div><input type="text" class="form-control" name="url" value="" onkeyup="socialLinkChange()" placeholder="URL"></div><div class="row"><div class="col-md-12 px-3 mb-3"><div class="mb-2"> </div><div class="d-flex img_upload_card_wrapper"><div class="img_uploaded_card selected_img mr-3  img_'+String(Number(g_currentSocial) + Number(3)) +'" style="background-image:url(\'/images/twitter.png\')"></div><div class="img_uploaded_card upload_img mr-3 d-flex justify-content-center align-items-center flex-column" data-bs-toggle="modal" data-bs-target="#image_modal" onclick="current = '+String(Number(g_currentSocial) + Number(3)) +'"><i class="font-24 icon-file_upload_1 my-2"></i></div><input class="d-none" type="file" name="pg_upload_image" accept="image/*"></div></div></div><div class="row"><div class="col-md-6  px-3"><div class="mb-2 d-flex"><span class="mr-2">Title</span> </div><div class="d-flex"><input class="form-control" autocomplete="off" name="title" value="Twitter" type="text" placeholder=""></div></div><div class="col-md-6  px-3"><div class="mb-2 d-flex"><span class="mr-2">Subtitle</span><div class="switchery d-inline"><label class="switch mb-0"><input type="checkbox" name="subtitle_enable" data-type="socialLinksSubTitle" onchange="checkbox()"><span class="slider round"></span></label></div></div><div class="d-flex"><input class="form-control" autocomplete="off" name="subtitle" value="Talk with us on Twitter" type="text" placeholder=""></div></div></div></div></div><div class="row mx-0 mt-2 btn_add_social_link"><div><a type="button" class="btn btn-primary" style="color:white" onclick="socialAdd('+g_socialLinkContainer+')"><i class="icon-add_1"></i>Add Link</a></div></div></div></div></div><div class="card-footer d-flex"><div class="switchery d-inline"><label class="switch mb-0"><input type="checkbox" checked="" name="card_bg_enable" onchange="checkbox()"><span class="slider round"></span></label></div><div class="ml-2">Card Background</div></div></div>';
  g_currentSocial+=3;
  g_subcomponentIndex+=3;
    div.innerHTML = socialLinkComponent;
    $('#qr_page_component_container').append(div);
    chimpData.push({type:'socialLink', value:{...socialLinksState}});
    document.getElementById('qr_page_prev').children[0].remove();
    showMobileIframe(templateNo);
  }
  else if(event.target.getAttribute('data-type') == 'button')
  {
    div.setAttribute('data-type', 'button');
const btnComponent = '<div class="card-header d-flex justify-content-between" aria-expanded="true"><h5 class="mb-0 d-flex align-item-center w-100"><a class="btn handle display_on_hover py-2 pr-0 text-muted"><i class="icon-drag_1"></i></a><a class="btn btn-link qr_page_component_card_title w-100 text-left">Button</a></h5><div class="qr_page_component_card_actions"><a class="btn btn_delete_component_card display_on_hover" onclick="delete_component_card()"><i class="text-danger icon-delete_1"></i></a><a class="btn handle display_on_hover d-none"><i class="icon-drag_1"></i></a><div class="d-inline mr-2"><div class="switchery d-inline"><label class="switch mb-0"><input type="checkbox" data-type="button-enable" checked="" name="card_enable" onchange="checkbox()"><span class="slider round"></span></label></div></div><a class="btn toggle_card_visiblitiy mr-0" onclick="openComponent()"><i class="icon-add_1"></i></a></div></div><div class="qr_page_component_card_body  secondary_color"><div class="card-body"><div class="row"><div class="col-md-12 title_desc_wrapper"><div class="row mx-0"><div class="mr-2 mb-2"> Title, Description </div><div class="switchery d-inline"><label class="switch mb-0"><input type="checkbox" onchange="checkbox()" data-type="button-header-enable" checked="" name="header_enable"><span class="slider round"></span></label></div></div><div class="row mx-0 title_desc_wrapper_input gray_card mb-4 " style=""><div class="col-md-12  px-3"><div class="mb-2 d-flex"><span class="mr-2">Title</span> </div><div class="d-flex"><input class="form-control" autocomplete="off" name="title" value="Button" type="text" placeholder="" onkeyup="btnTitleChange()"></div></div><div class="col-md-12  px-3"><div class="mb-2">Description</div><div class="d-flex"><textarea class="form-control" name="desc" rows="4" onkeyup="btnDescriptionChange()">Description</textarea></div></div></div></div><div class="col-md-12  px-3"><div class="mb-2 d-flex"><span class="mr-2">Button Label</span> </div><div class="d-flex"><input class="form-control" autocomplete="off" name="button_label" value="Visit my site" type="text" placeholder="" onkeyup="btnLabelChange()"></div></div><div class="col-md-12  px-3"><div class="mb-2 d-flex"><span class="mr-2">Button Link</span> </div><div class="d-flex"><input class="form-control" autocomplete="off" name="button_link" value="" type="text" placeholder="" onkeyup="btnLinkChange()"></div></div></div></div><div class="card-footer d-flex"><div class="switchery d-inline"><label class="switch mb-0"><input type="checkbox" onchange="checkbox()" checked="" data-type="button-card-enable" name="card_bg_enable"><span class="slider round"></span></label></div> <div class="ml-2">Card Background</div></div></div>';
    div.innerHTML = btnComponent;
     $('#qr_page_component_container').append(div);
    chimpData.push({type:'button', value:{...buttonState}});
    document.getElementById('qr_page_prev').children[0].remove();
    showMobileIframe(templateNo);
  }
  else if(event.target.getAttribute('data-type') == 'video')
  {
    div.setAttribute('data-type', 'video');

const videoComponent = '<div class="card-header d-flex justify-content-between" aria-expanded="true"><h5 class="mb-0 d-flex align-item-center w-100"><a class="btn handle display_on_hover py-2 pr-0 text-muted"><i class="icon-drag_1"></i></a><a class="btn btn-link qr_page_component_card_title w-100 text-left">Video</a></h5><div class="qr_page_component_card_actions"><a class="btn btn_delete_component_card display_on_hover" onclick="delete_component_card()"><i class="text-danger icon-delete_1"></i></a><a class="btn handle display_on_hover d-none"><i class="icon-drag_1"></i></a><div class="d-inline mr-2"><div class="switchery d-inline"><label class="switch mb-0"><input type="checkbox" onchange="checkbox()" data-type="video-enable" checked="" name="card_enable"><span class="slider round"></span></label></div></div><a class="btn toggle_card_visiblitiy mr-0" onclick="openComponent()"><i class="icon-add_1"></i></a></div></div><div class="qr_page_component_card_body  secondary_color"><div class="card-body"><div class="row"><div class="col-md-12 title_desc_wrapper"><div class="row mx-0"><div class="mr-2 mb-2"> Title, Description </div><div class="switchery d-inline"><label class="switch mb-0"><input type="checkbox" onchange="checkbox()" data-type="video-header-enable" checked="" name="header_enable"><span class="slider round"></span></label></div></div><div class="row mx-0 title_desc_wrapper_input gray_card mb-4 " style=""><div class="col-md-12  px-3"><div class="mb-2 d-flex"><span class="mr-2">Title</span> </div><div class="d-flex"><input class="form-control" autocomplete="off" name="title" value="Video" type="text" placeholder="" onkeyup="videoTitleChange()"></div></div><div class="col-md-12  px-3"><div class="mb-2">Description</div><div class="d-flex"><textarea class="form-control" name="desc" rows="4" onkeyup="videoDescriptionChange()">Description</textarea></div></div></div></div> <div class="col-md-12 mb-3"><div class="btn-group" role="group"><button type="button" class="btn btn-light active video_type_btn" data-type="youtube" onclick="activeYouTube()">YouTube</button><button type="button" class="btn btn-light  video_type_btn" data-type="vimeo" onclick="activeVimeo()">Vimeo</button></div></div><div class="col-md-12  px-3"><div class="mb-2 d-flex"><span class="mr-2">Video Link</span> </div><div class="d-flex"><input class="form-control" autocomplete="off" name="video_link" value="" type="text" placeholder="" onkeyup="videoLinkChange()"></div></div></div></div><div class="card-footer d-flex"><div class="switchery d-inline"><label class="switch mb-0"><input type="checkbox" checked="" onchange="checkbox()" data-type="video-card-enable" name="card_bg_enable"><span class="slider round"></span></label></div> <div class="ml-2">Card Background</div></div></div>';
    div.innerHTML = videoComponent;
    $('#qr_page_component_container').append(div);
    chimpData.push({type:'video', value:{...videoState}});
    document.getElementById('qr_page_prev').children[0].remove();
    showMobileIframe(templateNo);
  }
  else if(event.target.getAttribute('data-type') == 'images')
  {
    g_currentImage++;
    const imgComponent = '<div class="card-header d-flex justify-content-between" aria-expanded="true"><h5 class="mb-0 d-flex align-item-center w-100"><a class="btn handle display_on_hover py-2 pr-0 text-muted"><i class="icon-drag_1"></i></a><a class="btn btn-link qr_page_component_card_title w-100 text-left">Images</a></h5><div class="qr_page_component_card_actions"><a class="btn btn_delete_component_card display_on_hover" onclick="delete_component_card()"><i class="text-danger icon-delete_1"></i></a><a class="btn handle display_on_hover d-none"><i class="icon-drag_1"></i></a><div class="d-inline mr-2"><div class="switchery d-inline"><label class="switch mb-0"><input type="checkbox" checked="" onchange="checkbox()" name="card_enable" data-type="qrc_gallery_wrapper"><span class="slider round"></span></label></div></div><a class="btn toggle_card_visiblitiy mr-0"  onclick="openComponent()"><i class="icon-add_1"></i></a></div></div><div class="qr_page_component_card_body  secondary_color"><div class="card-body"><div class="row"><div class="col-md-12 title_desc_wrapper"><div class="row mx-0"><div class="mr-2 mb-2"> Title, Description </div><div class="switchery d-inline"><label class="switch mb-0"><input type="checkbox" onchange="checkbox()" name="header_enable" data-type="qrc_heading_gallery"><span class="slider round title-description"></span></label></div></div><div class="row mx-0 title_desc_wrapper_input gray_card mb-4 " style="display:none;"><div class="col-md-12  px-3"><div class="mb-2 d-flex"><span class="mr-2">Title</span> </div><div class="d-flex"><input class="form-control" autocomplete="off" name="title" value="" type="text" placeholder=""></div></div><div class="col-md-12  px-3"><div class="mb-2">Description</div><div class="d-flex"><textarea class="form-control" name="desc" rows="4"></textarea></div></div></div></div><div class="col-md-12 mb-2"><div class="row mx-0"><div class="mr-2 mb-2"> View Type </div></div><div class="row mx-0 d-flex image_view_type_wrapper"><div class="image_view_type_item" style="width:20%"><div class="image_view_type_card selected" data-type="list"><img src="/assets/images/list.png" width="36" height="36" class="img-fluid " onclick="grid1()"></div><div class="text-center mt-1">List</div></div><div class="image_view_type_item" style="width:20%"><div class="image_view_type_card " data-type="grid_1"><img src="/assets/images/grid.png" width="36" height="36" class="img-fluid " onclick="grid1()"></div><div class="text-center mt-1">Grid 1</div></div><div class="image_view_type_item" style="width:20%"><div class="image_view_type_card " data-type="grid_2"><img src="/assets/images/grid_2.png" width="36" height="36" class="img-fluid " onclick="grid1()"></div><div class="text-center mt-1">Grid 2</div></div></div></div><div class="col-md-12 px-3 mb-3"><div class="mb-3">Photos <span class="text-muted font-12">(600x600px, 1:1, 4:5 Ratio)</span></div><div class="img_upload_card_wrapper"><div class="images_grid_wrapper img_'+g_currentImage+'" ><div class="img_uploaded_card multiple_img mr-3 handle-img mb-2" style="background-image:url(\'/assets/images/img4.webp\')" ><div class="img_action"><a href="#" class="btn text-white" onclick="del_uploaded_file(1)"><i class="icon-delete_1 font-14"></i></a></div></div><div class="img_uploaded_card multiple_img mr-3 handle-img mb-2" style="background-image:url(\'/assets/images/img5.webp\')" ><div class="img_action"><a href="#" class="btn text-white" onclick="del_uploaded_file(2)"><i class="icon-delete_1 font-14"></i></a></div></div></div><div class="img_uploaded_card upload_imgs mr-3 d-flex justify-content-center align-items-center" data-bs-toggle="modal" data-bs-target="#image_modal" onclick="current = '+g_currentImage+';"><i class="font-24 icon-file_upload_1"></i></div><input class="d-none" type="file" name="pg_upload_images" accept="image/*"></div></div></div></div><div class="card-footer d-flex"><div class="switchery d-inline"><label class="switch mb-0"><input type="checkbox" onchange="checkbox()" checked="" name="card_bg_enable"><span class="slider round"></span></label></div><div class="ml-2">Card Background</div></div></div>';
    div.setAttribute('data-type', 'images');
    div.innerHTML = imgComponent;
    chimpData.push({type:'images', value:{...imageState}});
    document.getElementById('qr_page_prev').children[0].remove();
    showMobileIframe(templateNo);
    $('#qr_page_component_container').append(div);
  }
  else if(event.target.getAttribute('data-type') == 'pdf_gallery')
  {
    g_currentPdf++;
    g_pdfGalleryContainer++;
    var pdfComponent = '<div class="card collapse_card mb-3 qr_page_component_card list-group-item" data-type="pdf_gallery"><div class="card-header d-flex justify-content-between" aria-expanded="true"><h5 class="mb-0 d-flex align-item-center w-100"><a class="btn handle display_on_hover py-2 pr-0 text-muted"><i class="icon-drag_1"></i></a><a class="btn btn-link qr_page_component_card_title w-100 text-left">PDF Gallery</a></h5><div class="qr_page_component_card_actions"><a class="btn btn_delete_component_card display_on_hover" onclick="delete_component_card()"><i class="text-danger icon-delete_1"></i></a><a class="btn handle display_on_hover d-none"><i class="icon-drag_1"></i></a><div class="d-inline mr-2"><div class="switchery d-inline"><label class="switch mb-0"><input type="checkbox" onchange="checkbox()" data-type="pdf-enable" checked="" name="card_enable"><span class="slider round"></span></label></div></div><a class="btn toggle_card_visiblitiy mr-0" onclick="openComponent()"><i class="icon-remove_1"></i></a></div></div><div class="qr_page_component_card_body secondary_color show"><div class="card-body"><div class="row"><div class="col-md-12 title_desc_wrapper"><div class="row mx-0"><div class="mr-2 mb-2"> Title, Description </div><div class="switchery d-inline"><label class="switch mb-0"><input type="checkbox" onchange="checkbox()" data-type="pdf-header-enable" checked="" name="header_enable"><span class="slider round"></span></label></div></div><div class="row mx-0 title_desc_wrapper_input gray_card mb-4 " style=""><div class="col-md-12  px-3"><div class="mb-2 d-flex"><span class="mr-2">Title</span> </div><div class="d-flex"><input class="form-control" autocomplete="off" name="title" value="PDF Gallery" type="text" placeholder="" onkeyup="pdfTitleChange()"></div></div><div class="col-md-12  px-3"><div class="mb-2">Description</div><div class="d-flex"><textarea class="form-control" name="desc" rows="4"  onkeyup="pdfDescriptionChange()">Description</textarea></div></div></div></div><div class="col-md-12 px-3"><div class="row mx-0 list-group mt-3" id="pdf_gallery_container_'+g_pdfGalleryContainer+'"><div id="sub_comp_'+String(Number(g_subcomponentIndex)+1)+'"  draggable="true" ondragstart="drag\(event\)"  ondrop="drop\(event\)" ondragover="allowDrop\(event\)"  class="list-group-item pdf_gallery_input_wrapper subcomponent_sortable_wrapper mb-4"><div class="action_buttons"><a class="btn btn_delete_pro_card" onclick="pdf_del(event)"><i class="text-danger icon-delete_1"></i></a><a class="btn handle-social-link"><i class="icon-drag_1"></i></a></div><div class="my-2">PDF URL <span>(Please enter the PDF URL or upload)</span></div><div class="row"><div class="col-md-8 pr-0"><input type="text" class="form-control" name="url" value="" placeholder="URL"  onkeyup="pdfUrlChange()"></div><div class="col-md-1 px-0 d-flex align-items-center justify-content-center"><span style=" margin-bottom: 12px; ">or</span></div><div class="col-md-2 pl-0"><button class="upload_pdfs btn btn-primary  p-2" type="button" data-bs-toggle="modal" data-bs-target="#image_modal1" onclick="current = '+g_pdfFile+'"><i class="icon-file_upload_1 mr-1"></i>Upload</button></div></div><div class="row"><div class="col-md-12 px-3 mb-3"><div class="mb-2">PDF Thumbnail <span class="text-muted font-12">(250x250px, 1:1 Ratio)</span></div><div class="d-flex img_upload_card_wrapper"><div class="img_uploaded_card selected_img mr-3 img_'+g_currentPdf+'" style="background-image:url(\'/assets/images/pdf.png\')"></div><div class="img_uploaded_card upload_img mr-3 d-flex justify-content-center align-items-center flex-column"  data-bs-toggle="modal" data-bs-target="#image_modal" onclick="current = '+g_currentPdf+'"> <i class="font-24 icon-file_upload_1 my-2"></i></div><input class="d-none" type="file" name="pg_upload_image" accept="image/*"></div></div></div><div class="row"><div class="col-md-6  px-3"><div class="mb-2 d-flex"><span class="mr-2">Title</span> </div><div class="d-flex"><input class="form-control" autocomplete="off" name="title" value="PDF 1" type="text" placeholder=""  onkeyup="pdfSubTitleChange()"></div></div><div class="col-md-6  px-3"><div class="mb-2 d-flex"><span class="mr-2">Subtitle</span><div class="switchery d-inline"><label class="switch mb-0"><input type="checkbox" onchange="checkbox()" data-type="pdf-item-subtitle" checked="" name="subtitle_enable"><span class="slider round"></span></label></div></div><div class="d-flex"><input class="form-control" autocomplete="off" name="subtitle" value="PDF Description" type="text" placeholder=""  onkeyup="pdfSubDescriptionChange()"></div></div></div></div><div id="sub_comp_'+String(Number(g_subcomponentIndex)+2)+'"  draggable="true" ondragstart="drag\(event\)"  ondrop="drop\(event\)" ondragover="allowDrop\(event\)" class="list-group-item pdf_gallery_input_wrapper subcomponent_sortable_wrapper mb-4"><div class="action_buttons"><a class="btn btn_delete_pro_card" onclick="pdf_del(event)"><i class="text-danger icon-delete_1"></i></a><a class="btn handle-social-link"><i class="icon-drag_1"></i></a></div><div class="my-2">PDF URL <span>(Please enter the PDF URL or upload)</span></div><div class="row"><div class="col-md-8 pr-0"><input type="text" class="form-control" name="url" value="" placeholder="URL"  onkeyup="pdfUrlChange()"></div><div class="col-md-1 px-0 d-flex align-items-center justify-content-center"><span style=" margin-bottom: 12px; ">or</span></div><div class="col-md-2 pl-0"><button class="upload_pdfs btn btn-primary  p-2" type="button" data-bs-toggle="modal" data-bs-target="#image_modal1" onclick="current = '+String(Number(g_pdfFile)+1)+'"><i class="icon-file_upload_1 mr-1"></i>Upload</button></div></div><div class="row"><div class="col-md-12 px-3 mb-3"><div class="mb-2">PDF Thumbnail <span class="text-muted font-12">(250x250px, 1:1 Ratio)</span></div><div class="d-flex img_upload_card_wrapper"><div class="img_uploaded_card selected_img mr-3 img_'+String(Number(g_currentPdf) + 1)+'" style="background-image:url(\'/assets/images/pdf.png\')"></div>  <div class="img_uploaded_card upload_img mr-3 d-flex justify-content-center align-items-center flex-column"  data-bs-toggle="modal" data-bs-target="#image_modal" onclick="current = '+String(Number(g_currentPdf) + 1)+'"><i class="font-24 icon-file_upload_1 my-2"></i></div><input class="d-none" type="file" name="pg_upload_image" accept="image/*"></div></div></div><div class="row"><div class="col-md-6  px-3"><div class="mb-2 d-flex"><span class="mr-2">Title</span> </div><div class="d-flex"><input class="form-control" autocomplete="off" name="title" value="PDF 1" type="text" placeholder="" onkeyup="pdfSubTitleChange()"></div></div><div class="col-md-6  px-3"><div class="mb-2 d-flex"><span class="mr-2">Subtitle</span><div class="switchery d-inline"><label class="switch mb-0"><input type="checkbox" onchange="checkbox()" data-type="pdf-item-subtitle" checked="" name="subtitle_enable"><span class="slider round"></span></label></div> </div><div class="d-flex"><input class="form-control" autocomplete="off" name="subtitle" value="PDF Description" type="text" placeholder=""  onkeyup="pdfSubDescriptionChange()"></div></div></div></div></div><div class="row mx-0 mt-2 btn_add_pdf_gallery"><a class="btn btn-primary" style="color:white" type="button" onclick="addPdf('+g_pdfGalleryContainer+')"><i class="icon-add_1"></i>Add Link</a></div></div></div></div><div class="card-footer d-flex"><div class="switchery d-inline"><label class="switch mb-0"><input type="checkbox" onchange="checkbox()" checked="" name="card_bg_enable" data-type="pdf-card-enable"><span class="slider round"></span></label></div> <div class="ml-2">Card Background</div></div></div></div>';

    g_pdfFile +=2;
    div.setAttribute('data-type', 'pdf_gallery');
    g_currentPdf++;
    div.innerHTML = pdfComponent;
    g_subcomponentIndex+=2;
    chimpData.push({type:'pdf', value:{...pdfState}});
    document.getElementById('qr_page_prev').children[0].remove();
    showMobileIframe(templateNo);
    $('#qr_page_component_container').append(div);
  }
  else if(event.target.getAttribute('data-type') == 'custom_fields')
  {
    div.setAttribute('data-type', 'custom_fields');
var customFieldComponent = '<div class="card-header d-flex justify-content-between" aria-expanded="false"><h5 class="mb-0 d-flex align-item-center w-100"><a class="btn handle display_on_hover py-2 pr-0 text-muted"><i class="icon-drag_1"></i></a><a class="btn btn-link qr_page_component_card_title w-100 text-left">Other Details</a></h5><div class="qr_page_component_card_actions"><a class="btn btn_delete_component_card display_on_hover" onclick="delete_component_card()"><i class="text-danger icon-delete_1"></i></a><a class="btn handle display_on_hover d-none"><i class="icon-drag_1"></i></a><div class="d-inline mr-2"><div class="switchery d-inline"><label class="switch mb-0"><input type="checkbox" onchange="checkbox()" data-type="other-enable" checked="" name="card_enable"><span class="slider round"></span></label></div></div><a class="btn toggle_card_visiblitiy mr-0" onclick="openComponent()"><i class="icon-add_1"></i></a></div></div><div class="qr_page_component_card_body secondary_color"><div class="card-body"><div class="row"><div class="col-md-12 title_desc_wrapper"><div class="row mx-0"><div class="mr-2 mb-2"> Title, Description </div><div class="switchery d-inline"><label class="switch mb-0"><input type="checkbox" onchange="checkbox()" data-type="other-header-enable" checked="" name="header_enable"><span class="slider round"></span></label></div></div><div class="row mx-0 title_desc_wrapper_input gray_card mb-4 " style=""><div class="col-md-12  px-3"><div class="mb-2 d-flex"><span class="mr-2">Title</span> </div><div class="d-flex"><input class="form-control" autocomplete="off" name="title" value="Other Information" type="text" placeholder="" onkeyup="otherTitleChange()"></div></div><div class="col-md-12  px-3"><div class="mb-2">Description</div><div class="d-flex"><textarea class="form-control" name="desc" rows="4" onkeyup="otherDescriptionChange()"></textarea></div></div></div></div> <div class="col-md-12 px-3 "><div class="row mx-0 list-group mt-3" id="custom_field_container_11"><div id="sub_comp_'+String(Number(g_subcomponentIndex)+1)+'"  draggable="true" ondragstart="drag\(event\)"  ondrop="drop\(event\)" ondragover="allowDrop\(event\)" class="list-group-item custom_field_input_wrapper subcomponent_sortable_wrapper mb-4"><div class="action_buttons"><a class="btn btn_delete_pro_card" onclick="customFieldDelete(event)"><i class="text-danger icon-delete_1"></i></a><a class="btn handle-custom-field"><i class="icon-drag_1"></i></a></div><div class=""></div><div class="row"><div class="col-md-6  px-3"><div class="mb-2 d-flex"><span class="mr-2"></span> </div><div class="d-flex"><input class="form-control" autocomplete="off" name="key" value="Key" type="text" placeholder="" onkeyup="otherSubKeyChange()"></div></div><div class="col-md-6  px-3"><div class="mb-2 d-flex"><span class="mr-2"></span> </div><div class="d-flex"><input class="form-control" autocomplete="off" name="val" value="Value" type="text" placeholder="" onkeyup="otherSubValueChange()"></div></div></div></div></div><div class="row mx-0 mt-2"><a type="button" class="btn btn-primary btn_add_custom_field" style="color:white;" onclick="addCustomField('+g_customFieldContainer+')"><i class="icon-add_1"></i>Add</a></div></div></div></div><div class="card-footer d-flex"><div class="switchery d-inline"><label class="switch mb-0"><input type="checkbox" onchange="checkbox()" data-type="other-card-bg-enable" checked="" name="card_bg_enable"><span class="slider round"></span></label></div> <div class="ml-2">Card Background</div></div></div>';
    div.innerHTML = customFieldComponent;
    g_subcomponentIndex++;
    chimpData.push({type:'custom', value:{...customState}});
    document.getElementById('qr_page_prev').children[0].remove();
    showMobileIframe(templateNo);
    $('#qr_page_component_container').append(div);
  }
  // document.getElementById("qr_page_prev").children[0].remove();
  // showMobileIframe(templateNo);
});



function viewTab(id) {

  if (id == 1) {
    $('#page-content').removeClass('none');
    $('#page-tab-style-design-content').removeClass('none').addClass('none');
    $('#page-tab-qr-design-content').removeClass('none').addClass('none');
  } else if (id == 2) {
    $('#page-content').removeClass('none').addClass('none');
    $('#page-tab-style-design-content').removeClass('none');
    $('#page-tab-qr-design-content').removeClass('none').addClass('none');
  } else if (id == 3) {
    $('#page-content').removeClass('none').addClass('none');
    $('#page-tab-style-design-content').removeClass('none').addClass('none');
    $('#page-tab-qr-design-content').removeClass('none');
    document.getElementById('page-tab-qr-design-content').children[0].children[0].setAttribute('aria-expanded', true);
  }

}

$(".title-description").click(function() {

  if (event.target.parentNode.parentNode.parentNode.nextElementSibling.style.display) {
    event.target.parentNode.parentNode.parentNode.nextElementSibling.style.display = "";
  } else {
    event.target.parentNode.parentNode.parentNode.nextElementSibling.style.display = "none";
  }
});

function openComponent(){
  if (event.target.parentNode.parentNode.parentNode.nextElementSibling.className.search('show') < 0) {
    $('.qr_page_component_card_body').removeClass('show');

    for(var i = 0; i < document.getElementsByClassName('icon-remove_1').length; i++)
    {
      document.getElementsByClassName('icon-remove_1')[i].className='icon-add_1';
    }

    if (event.target.className.search('icon') >= 0) {

      event.target.parentNode.parentNode.parentNode.nextElementSibling.className = event.target.parentNode
        .parentNode
        .parentNode.nextElementSibling.className + " show";
        if(event.target.className.search('add')<0){
          event.target.parentNode.innerHTML='<i class="icon-add_1"></i>';
        }else{
          event.target.parentNode.innerHTML='<i class="icon-remove_1"></i>';
        }
    } else {

      event.target.parentNode.parentNode.nextElementSibling.className = event.target.parentNode
        .parentNode.nextElementSibling.className + " show";
        if(event.target.children[0].className.search('add')<0){
          event.target.innerHTML='<i class="icon-add_1"></i>';
        }else{
          event.target.innerHTML='<i class="icon-remove_1"></i>';
        }
    }
  } else {
    for(var i = 0; i < document.getElementsByClassName('icon-remove_1').length; i++)
    {
      document.getElementsByClassName('icon-remove_1')[i].className='icon-add_1';
    }
    $('.qr_page_component_card_body').removeClass('show');
    if (event.target.className.search('icon') >= 0) {
      event.target.className = 'icon-add_1';
    } else {
      event.target.innerHTML = '<i class="icon-add_1"></i>';
    }
  }

}

$(".toggle_card_visiblitiy").click(function() {
  if (event.target.parentNode.parentNode.parentNode.nextElementSibling.className.search('show') < 0) {
    $('.qr_page_component_card_body').removeClass('show');
    for(var i = 0; i < document.getElementsByClassName('icon-remove_1').length; i++)
    {
      document.getElementsByClassName('icon-remove_1')[i].className='icon-add_1';
    }

    if (event.target.className.search('icon') >= 0) {

      event.target.parentNode.parentNode.parentNode.nextElementSibling.className = event.target.parentNode
        .parentNode
        .parentNode.nextElementSibling.className + " show";
        if(event.target.className.search('add')<0){
          event.target.parentNode.innerHTML='<i class="icon-add_1"></i>';
        }else{
          event.target.parentNode.innerHTML='<i class="icon-remove_1"></i>';
        }

    } else {

      event.target.parentNode.parentNode.nextElementSibling.className = event.target.parentNode
        .parentNode.nextElementSibling.className + " show";
        if(event.target.children[0].className.search('add')<0){
          event.target.innerHTML='<i class="icon-add_1"></i>';
        }else{
          event.target.innerHTML='<i class="icon-remove_1"></i>';
        }
    }
  } else {
    for(var i = 0; i < document.getElementsByClassName('icon-remove_1').length; i++)
    {
      document.getElementsByClassName('icon-remove_1')[i].className='icon-add_1';
    }
    $('.qr_page_component_card_body').removeClass('show');
    if (event.target.className.search('icon') >= 0) {
      event.target.className = 'icon-add_1';
    } else {
      event.target.innerHTML = '<i class="icon-add_1"></i>';
    }
  }
});






