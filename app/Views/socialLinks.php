
                          <div id="component_4" draggable="false" ondragstart="dragComponent(event)" ondrop="dropComponent(event)" ondragover="allowDropComponent(event)" class="card collapse_card mb-3 qr_page_component_card list-group-item myDraggable"
                            data-type="social_link">
                            <div class="card-header d-flex justify-content-between" aria-expanded="true">
                              <h5 class="mb-0 d-flex align-item-center w-100">
                                <a class="btn handle display_on_hover py-2 pr-0 text-muted" onmousedown="onDragComponent()" onmouseup="offDragComponent()"><i
                                    class="icon-drag_1"></i></a>
                                <a class="btn btn-link qr_page_component_card_title w-100 text-left">
                                  Social Links
                                </a>
                              </h5>
                              <div class="qr_page_component_card_actions">
                                <a class="btn btn_delete_component_card display_on_hover"><i
                                    class="text-danger icon-delete_1"></i></a>
                                <a class="btn handle display_on_hover d-none"><i class="icon-drag_1"></i></a>
                                <div class="d-inline mr-2">
                                  <div class="switchery d-inline">
                                    <label class="switch mb-0">
                                      <input type="checkbox" checked="" name="card_enable" data-type="qrc_social_links_1" onchange="checkbox()">
                                      <span class="slider round"></span>
                                    </label>
                                  </div>
                                </div>
                                <a class="btn toggle_card_visiblitiy mr-0"  onclick="openComponent()"><i class="icon-add_1"></i></a>
                              </div>
                            </div>
                            <div class="qr_page_component_card_body  secondary_color">
                              <div class="card-body">
                                <div class="row">
                                  <div class="col-md-12 title_desc_wrapper">
                                    <div class="row mx-0">
                                      <div class="mr-2 mb-2"> Title, Description </div>
                                      <div class="switchery d-inline">
                                        <label class="switch mb-0">
                                          <input type="checkbox" checked="" name="header_enable"
                                            data-type="qrc_heading_social_link_1" onchange="checkbox()">
                                          <span class="slider round  title-description"></span>
                                        </label>
                                      </div>
                                    </div>
                                    <div class="row mx-0 title_desc_wrapper_input gray_card mb-4 " style="">

                                      <div class="col-md-12  px-3">
                                        <div class="mb-2 d-flex"><span class="mr-2">Title</span> </div>
                                        <div class="d-flex">
                                          <input class="form-control" autocomplete="off" name="title" value="Social Links"
                                            type="text" placeholder="" onkeyup="socialTitleChange()">
                                        </div>
                                      </div>


                                      <div class="col-md-12  px-3">
                                        <div class="mb-2">Description</div>
                                        <div class="d-flex">
                                          <textarea class="form-control" name="desc" rows="4"  onkeyup="socialDescriptionChange()">Description</textarea>
                                        </div>
                                      </div>

                                    </div>
                                  </div>
                                  <div class="col-md-12 px-3">
                                    <div class="row mx-0 list-group mt-3" id="social_link_container_3">

                                      <div id="sub_comp_4"  draggable="false" ondragstart="drag(event)"  ondrop="drop(event)" ondragover="allowDrop(event)"
                                        class="list-group-item social_link_input_wrapper subcomponent_sortable_wrapper mb-4 myDraggable">
                                        <div>
                                          <div class="action_buttons">
                                            <a class="btn btn_delete_pro_card" onclick="socialLinkDel()"><i
                                                class="text-danger icon-delete_1"></i></a>
                                            <a class="btn handle-social-link" onmousedown="onDragSubComponent()" onmouseup="offDragSubComponent()"><i class="icon-drag_1"></i></a>
                                          </div>
                                        </div>
                                        <div class=""></div>
                                        <div class="input-group my-3">
                                          <div class="dropdown">
                                            <ul class=" dropdown-menu changable1">
                                              <li class="dropdown-item" onclick="changeContacts()" value="facebook">Facebook</li>
                                              <li class="dropdown-item" onclick="changeContacts()" value="instagram">Instagram</li>
                                              <li class="dropdown-item" onclick="changeContacts()" value="linkedin">LinkedIn</li>
                                              <li class="dropdown-item" onclick="changeContacts()" value="twitter">Twitter</li>
                                              <li class="dropdown-item" onclick="changeContacts()" value="skype">Skype</li>
                                              <li class="dropdown-item" onclick="changeContacts()" value="behance">Behance</li>
                                              <li class="dropdown-item" onclick="changeContacts()" value="youtube">YouTube</li>
                                              <li class="dropdown-item" onclick="changeContacts()" value="whatsapp">Whatsapp</li>
                                              <li class="dropdown-item" onclick="changeContacts()" value="email">Email</li>
                                              <li class="dropdown-item" onclick="changeContacts()" value="telegram">Telegram</li>
                                              <li class="dropdown-item" onclick="changeContacts()" value="tiktok">TikTok</li>
                                            </ul>
                                            <button class="btn-default1 dropdown-toggle"
                                              data-bs-toggle="dropdown">Facebook&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
                                          </div>
                                          <input type="text" class="form-control" name="url" onkeyup="socialLinkChange()"
                                            value="" placeholder="URL">
                                        </div>
                                        <div class="row">

                                          <div class="col-md-12 px-3 mb-3">
                                            <div class="mb-2"> </div>
                                            <div class="d-flex img_upload_card_wrapper">
                                              <div class="img_uploaded_card selected_img mr-3  img_3"
                                                style="background-image:url('<?php echo base_url() ?>/images/facebook.png')"></div>
                                              <div
                                                class="img_uploaded_card upload_img mr-3 d-flex justify-content-center align-items-center flex-column"
                                                data-bs-toggle="modal" data-bs-target="#image_modal"
                                                onclick="current = 3">
                                                <i class="font-24 icon-file_upload_1 my-2"></i>

                                              </div>
                                              <input class="d-none" type="file" name="pg_upload_image" accept="image/*">
                                            </div>

                                          </div>

                                        </div>
                                        <div class="row">

                                          <div class="col-md-6  px-3">
                                            <div class="mb-2 d-flex"><span class="mr-2">Title</span> </div>
                                            <div class="d-flex">
                                              <input class="form-control" autocomplete="off" name="title" value="Title"
                                                type="text" placeholder="" onkeyup="socialSubComTitleChange()">
                                            </div>
                                          </div>


                                          <div class="col-md-6  px-3">
                                            <div class="mb-2 d-flex"><span class="mr-2">Subtitle</span>
                                              <div class="switchery d-inline">
                                                <label class="switch mb-0">
                                                  <input type="checkbox" name="subtitle_enable"
                                                    data-type="socialLinksSubTitle" onchange="checkbox()">
                                                  <span class="slider round"></span>
                                                </label>
                                              </div>
                                            </div>
                                            <div class="d-flex">
                                              <input class="form-control" autocomplete="off" name="subtitle"
                                                value="Like us on Facebook" type="text" placeholder=""  onkeyup="socialSubComSubTitleChange()">
                                            </div>
                                          </div>

                                        </div>
                                      </div>

                                      <div  id="sub_comp_5"  draggable="false" ondragstart="drag(event)"  ondrop="drop(event)" ondragover="allowDrop(event)"
                                        class="list-group-item social_link_input_wrapper subcomponent_sortable_wrapper mb-4 myDraggable">
                                        <div>
                                          <div class="action_buttons">
                                            <a class="btn btn_delete_pro_card" onclick="socialLinkDel()"><i
                                                class=" text-danger icon-delete_1"></i></a>
                                            <a class="btn handle-social-link" onmousedown="onDragSubComponent()" onmouseup="offDragSubComponent()"><i class="icon-drag_1"></i></a>
                                          </div>
                                        </div>
                                        <div class=""></div>
                                        <div class="input-group my-3">
                                          <div class="dropdown">
                                            <ul class=" dropdown-menu changable1">
                                              <li class="dropdown-item" onclick="changeContacts()" value="facebook">Facebook</li>
                                            <li class="dropdown-item" onclick="changeContacts()" value="instagram">Instagram</li>
                                              <li class="dropdown-item" onclick="changeContacts()" value="linkedin">LinkedIn</li>
                                              <li class="dropdown-item" onclick="changeContacts()" value="twitter">Twitter</li>
                                              <li class="dropdown-item" onclick="changeContacts()" value="skype">Skype</li>
                                              <li class="dropdown-item" onclick="changeContacts()" value="behance">Behance</li>
                                              <li class="dropdown-item" onclick="changeContacts()" value="youtube">YouTube</li>
                                              <li class="dropdown-item" onclick="changeContacts()" value="whatsapp">Whatsapp</li>
                                              <li class="dropdown-item" onclick="changeContacts()" value="email">Email</li>
                                              <li class="dropdown-item" onclick="changeContacts()" value="telegram">Telegram</li>
                                              <li class="dropdown-item" onclick="changeContacts()" value="tiktok">TikTok</li>
                                            </ul>
                                            <button class="btn-default1 dropdown-toggle"
                                              data-bs-toggle="dropdown">Instagram&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
                                          </div>
                                          <input type="text" class="form-control" name="url" value=""
                                            onkeyup="socialLinkChange()" placeholder="URL">
                                        </div>
                                        <div class="row">

                                          <div class="col-md-12 px-3 mb-3">
                                            <div class="mb-2"> </div>
                                            <div class="d-flex img_upload_card_wrapper">
                                              <div class="img_uploaded_card selected_img mr-3  img_4"
                                                style="background-image:url('<?php echo base_url() ?>/images/instagram.png')">
                                              </div>
                                              <div
                                                class="img_uploaded_card upload_img mr-3 d-flex justify-content-center align-items-center flex-column"
                                                data-bs-toggle="modal" data-bs-target="#image_modal"
                                                onclick="current = 4">
                                                <i class="font-24 icon-file_upload_1 my-2"></i>

                                              </div>
                                              <input class="d-none" type="file" name="pg_upload_image" accept="image/*">
                                            </div>

                                          </div>

                                        </div>
                                        <div class="row">

                                          <div class="col-md-6  px-3">
                                            <div class="mb-2 d-flex"><span class="mr-2">Title</span> </div>
                                            <div class="d-flex">
                                              <input class="form-control" autocomplete="off" name="title"
                                                value="Instagram" onkeyup="socialSubComTitleChange()" type="text" placeholder="">
                                            </div>
                                          </div>


                                          <div class="col-md-6  px-3">
                                            <div class="mb-2 d-flex"><span class="mr-2">Subtitle</span>
                                              <div class="switchery d-inline">
                                                <label class="switch mb-0">
                                                  <input type="checkbox" name="subtitle_enable"
                                                    data-type="socialLinksSubTitle" onchange="checkbox()">
                                                  <span class="slider round"></span>
                                                </label>
                                              </div>
                                            </div>
                                            <div class="d-flex">
                                              <input class="form-control" autocomplete="off" name="subtitle"
                                                value="Follow us on Instagragm" type="text" placeholder="" onkeyup="socialSubComSubTitleChange()">
                                            </div>
                                          </div>

                                        </div>
                                      </div>

                                      <div  id="sub_comp_6"  draggable="false" ondragstart="drag(event)"  ondrop="drop(event)" ondragover="allowDrop(event)"
                                        class="list-group-item social_link_input_wrapper subcomponent_sortable_wrapper mb-4 myDraggable">
                                        <div>
                                          <div class="action_buttons">
                                            <a class="btn btn_delete_pro_card" onclick="socialLinkDel()"><i
                                                class="text-danger icon-delete_1"></i></a>
                                            <a class="btn handle-social-link" onmousedown="onDragSubComponent()" onmouseup="offDragSubComponent()"><i class="icon-drag_1"></i></a>
                                          </div>
                                        </div>
                                        <div class=""></div>
                                        <div class="input-group my-3">
                                          <div class="dropdown">
                                            <ul class=" dropdown-menu changable1">
                                              <li class="dropdown-item" onclick="changeContacts()" value="facebook">Facebook</li>
                                              <li class="dropdown-item" onclick="changeContacts()" value="instagram">Istagram</li>
                                              <li class="dropdown-item" onclick="changeContacts()" value="linkedin">LinkedIn</li>
                                              <li class="dropdown-item" onclick="changeContacts()" value="twitter">Twitter</li>
                                              <li class="dropdown-item" onclick="changeContacts()" value="skype">Skype</li>
                                              <li class="dropdown-item" onclick="changeContacts()" value="behance">Behance</li>
                                              <li class="dropdown-item" onclick="changeContacts()" value="youtube">YouTube</li>
                                              <li class="dropdown-item" onclick="changeContacts()" value="whatsapp">Whatsapp</li>
                                              <li class="dropdown-item" onclick="changeContacts()" value="email">Email</li>
                                              <li class="dropdown-item" onclick="changeContacts()" value="telegram">Telegram</li>
                                              <li class="dropdown-item" onclick="changeContacts()" value="tiktok">TikTok</li>

                                            </ul>
                                            <button class="btn-default1 dropdown-toggle"
                                              data-bs-toggle="dropdown">Twitter&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
                                          </div>
                                          <input type="text" class="form-control" name="url" value=""
                                            onkeyup="socialLinkChange()" placeholder="URL">
                                        </div>
                                        <div class="row">

                                          <div class="col-md-12 px-3 mb-3">
                                            <div class="mb-2"> </div>
                                            <div class="d-flex img_upload_card_wrapper">
                                              <div class="img_uploaded_card selected_img mr-3  img_5"
                                                style="background-image:url('<?php echo base_url() ?>/images/twitter.png')"></div>
                                              <div
                                                class="img_uploaded_card upload_img mr-3 d-flex justify-content-center align-items-center flex-column"
                                                data-bs-toggle="modal" data-bs-target="#image_modal"
                                                onclick="current = 5">
                                                <i class="font-24 icon-file_upload_1 my-2"></i>

                                              </div>
                                              <input class="d-none" type="file" name="pg_upload_image" accept="image/*">
                                            </div>

                                          </div>

                                        </div>
                                        <div class="row">

                                          <div class="col-md-6  px-3">
                                            <div class="mb-2 d-flex"><span class="mr-2">Title</span> </div>
                                            <div class="d-flex">
                                              <input class="form-control" autocomplete="off" name="title" value="Twitter"
                                                type="text" placeholder="" onkeyup="socialSubComTitleChange()">
                                            </div>
                                          </div>


                                          <div class="col-md-6  px-3">
                                            <div class="mb-2 d-flex"><span class="mr-2">Subtitle</span>
                                              <div class="switchery d-inline">
                                                <label class="switch mb-0">
                                                  <input type="checkbox" name="subtitle_enable"
                                                    data-type="socialLinksSubTitle" onchange="checkbox()">
                                                  <span class="slider round"></span>
                                                </label>
                                              </div>
                                            </div>
                                            <div class="d-flex">
                                              <input class="form-control" autocomplete="off" name="subtitle"
                                                value="Talk with us on Twitter" type="text" placeholder="" onkeyup="socialSubComSubTitleChange()">
                                            </div>
                                          </div>

                                        </div>
                                      </div>

                                    </div>
                                    <div class="row mx-0 mt-2 btn_add_social_link">
                                      <div>
                                        <a type="button" class="btn btn-primary" style="color:white"
                                          onclick="socialAdd(3)"><i class="icon-add_1"></i>Add
                                          Link</a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="card-footer d-flex">
                                <div class="switchery d-inline">
                                  <label class="switch mb-0">
                                    <input type="checkbox" checked="" name="card_bg_enable" onchange="checkbox()" data-type="card_bg_enable">
                                    <span class="slider round"></span>
                                  </label>
                                </div>
                                <div class="ml-2">Card Background</div>
                              </div>
                            </div>

                          </div>