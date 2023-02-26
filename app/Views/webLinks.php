                         <div id="component_6" draggable="false"  ondragstart="dragComponent(event)" ondrop="dropComponent(event)" ondragover="allowDropComponent(event)" class="card collapse_card mb-3 qr_page_component_card list-group-item myDraggable"
                            data-type="web_links">
                            <div class="card-header d-flex justify-content-between" aria-expanded="true">
                              <h5 class="mb-0 d-flex align-item-center w-100">
                                <a class="btn handle display_on_hover py-2 pr-0 text-muted" onmousedown="onDragComponent()" onmouseup="offDragComponent()"><i
                                    class="icon-drag_1"></i></a>
                                <a class="btn btn-link qr_page_component_card_title w-100 text-left">
                                  Links
                                </a>
                              </h5>
                              <div class="qr_page_component_card_actions">
                                <a class="btn btn_delete_component_card display_on_hover"><i
                                    class="text-danger icon-delete_1"></i></a>
                                <a class="btn handle display_on_hover d-none"><i class="icon-drag_1"></i></a>
                                <div class="d-inline mr-2">
                                  <div class="switchery d-inline">
                                    <label class="switch mb-0">
                                      <input type="checkbox" checked="" name="card_enable" data-type="qrc_social_links_2" onchange="checkbox()">
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
                                            data-type="qrc_heading_social_links_2" onchange="checkbox()">
                                          <span class="slider round title-description"></span>
                                        </label>
                                      </div>
                                    </div>
                                    <div class="row mx-0 title_desc_wrapper_input gray_card mb-4 " style="">

                                      <div class="col-md-12  px-3">
                                        <div class="mb-2 d-flex"><span class="mr-2">Title</span> </div>
                                        <div class="d-flex">
                                          <input class="form-control" autocomplete="off" name="title" value="Web Link"
                                            type="text" placeholder="" onkeyup="webLinksChange()">
                                        </div>
                                      </div>


                                      <div class="col-md-12  px-3">
                                        <div class="mb-2">Description</div>
                                        <div class="d-flex">
                                          <textarea class="form-control"  onkeyup="webLinksChange()" name="desc" rows="4">Description</textarea>
                                        </div>
                                      </div>

                                    </div>
                                  </div>
                                  <div class="col-md-12 px-3 ">
                                    <div class="row mx-0 list-group mt-3" id="web_link_container_5">
                                      <div id="sub_comp_10"  draggable="false" ondragstart="drag(event)"  ondrop="drop(event)" ondragover="allowDrop(event)"
                                        class="list-group-item web_link_input_wrapper subcomponent_sortable_wrapper mb-4 myDraggable">
                                        <div>
                                          <div class="action_buttons">
                                            <a class="btn btn_delete_pro_card" onclick="webLinks_del(event)"><i
                                                class="text-danger icon-delete_1"></i></a>
                                            <a class="btn handle-web-link" onmousedown="onDragSubComponent()" onmouseup="offDragSubComponent()"><i class="icon-drag_1"></i></a>
                                          </div>
                                        </div>
                                        <div class=""></div>
                                        <div class="row">

                                          <div class="col-md-12  px-3">
                                            <div class="mb-2 d-flex"><span class="mr-2">Link</span> </div>
                                            <div class="d-flex">
                                              <input class="form-control" autocomplete="off" name="url" value=""
                                                type="text" placeholder="" onkeyup="webLinkUrlChange()">
                                            </div>
                                          </div>

                                        </div>
                                        <div class="row">

                                          <div class="col-md-12 px-3 mb-3">
                                            <div class="mb-2"> </div>
                                            <div class="d-flex img_upload_card_wrapper">
                                              <div class="img_uploaded_card selected_img mr-3 link_img img_501"
                                                style="background-image:url('<?php echo base_url() ?>/assets/images/link.png')"></div>
                                              <div
                                                class="img_uploaded_card upload_img mr-3 d-flex justify-content-center align-items-center flex-column"
                                                data-bs-toggle="modal" data-bs-target="#image_modal"
                                                onclick="current = 501">
                                                <i class="font-24 icon-file_upload_1 my-2"></i>
                                                <span class="text-muted font-12">1:1 Ratio</span>
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
                                                value="URL" type="text" placeholder="" onkeyup="webLinkTitleChange()">
                                            </div>
                                          </div>


                                          <div class="col-md-6  px-3">
                                            <div class="mb-2 d-flex"><span class="mr-2">Subtitle</span>
                                              <div class="switchery d-inline">
                                                <label class="switch mb-0">
                                                  <input type="checkbox" name="subtitle_enable"  onchange="checkbox()" data-type="web-links-sub-title">
                                                  <span class="slider round"></span>
                                                </label>
                                              </div>
                                            </div>
                                            <div class="d-flex">
                                              <input class="form-control" autocomplete="off" name="subtitle"
                                                value="Visit for more information"  type="text" placeholder="" onkeyup="webLinkSubTitleChange()">
                                            </div>
                                          </div>

                                        </div>
                                      </div>
                                    </div>
                                    <div class="row mx-0 mt-2">
                                      <a class="btn btn-primary" style="color:white" type="button" onClick="addLink(5)"><i
                                          class="icon-add_1"></i>Add Link</a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="card-footer d-flex">
                                <div class="switchery d-inline">
                                  <label class="switch mb-0">
                                    <input type="checkbox" checked="" name="card_bg_enable" data-type="card_bg_enable" onchange="checkbox()">
                                    <span class="slider round"></span>
                                  </label>
                                </div>
                                <div class="ml-2">Card Background</div>
                              </div>
                            </div>
                          </div>







                            </div>
                          </div>
                          <div class="dropdown" style="text-align:center;">
                            <button class="btn btn-outline-primary dropdown-toggle" type="button"
                               data-bs-toggle="dropdown" aria-haspopup="true"
                              aria-expanded="false">
                              <i class="icon-add_1"></i>Add Component
                            </button>
                            <div class="dropdown-menu tab-three" style="left:37%;">
                                <a class="dropdown-item" data-type="text_desc">Heading + Text</a>
                                <a class="dropdown-item" data-type="web_links">Links</a>
                                <a class="dropdown-item" data-type="social_link">Social Links</a>
                                <a class="dropdown-item" data-type="button">Button</a>
                                <a class="dropdown-item" data-type="video">Video</a>
                                <a class="dropdown-item" data-type="images">Images</a>
                                <a class="dropdown-item" data-type="pdf_gallery">PDF Gallery</a>
                                <a class="dropdown-item" data-type="custom_fields">Other Details</a>
                            </div>
                          </div>
                        </form>
                  </div>
