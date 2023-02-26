                          <div id="component_3" draggable="false" ondragstart="dragComponent(event)" ondrop="dropComponent(event)" ondragover="allowDropComponent(event)" class="card collapse_card mb-3 qr_page_component_card list-group-item myDraggable" data-type="images">
                            <div class="card-header d-flex justify-content-between" aria-expanded="true">
                              <h5 class="mb-0 d-flex align-item-center w-100">
                                <a class="btn handle display_on_hover py-2 pr-0 text-muted" onmousedown="onDragComponent()" onmouseup="offDragComponent()"><i
                                    class="icon-drag_1"></i></a>
                                <a class="btn btn-link qr_page_component_card_title w-100 text-left">
                                  Images
                                </a>
                              </h5>
                              <div class="qr_page_component_card_actions">
                                <a class="btn btn_delete_component_card display_on_hover"><i
                                    class="text-danger icon-delete_1"></i></a>
                                <a class="btn handle display_on_hover d-none"><i class="icon-drag_1"></i></a>
                                <div class="d-inline mr-2">
                                  <div class="switchery d-inline">
                                    <label class="switch mb-0">
                                      <input type="checkbox" checked="" name="card_enable"
                                        data-type="qrc_gallery_wrapper" onchange="checkbox()">
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
                                  <div class="col-md-12 title_desc_wrapper" >
                                    <div class="row mx-0">
                                      <div class="mr-2 mb-2"> Title, Description </div>
                                      <div class="switchery d-inline">
                                        <label class="switch mb-0">
                                          <input type="checkbox" onchange="checkbox()" name="header_enable" data-type="qrc_heading_gallery">
                                          <span class="slider round title-description"></span>
                                        </label>
                                      </div>
                                    </div>

                                    <div class="row mx-0 title_desc_wrapper_input gray_card mb-4 " style="display:none">

                                      <div class="col-md-12  px-3">
                                        <div class="mb-2 d-flex"><span class="mr-2">Title</span> </div>
                                        <div class="d-flex">
                                          <input class="form-control" autocomplete="off" name="title" value="" type="text"
                                            placeholder="" onkeyup="imgTitleChange()">
                                        </div>
                                      </div>


                                      <div class="col-md-12  px-3">
                                        <div class="mb-2">Description</div>
                                        <div class="d-flex">
                                          <textarea class="form-control" name="desc" rows="4" onkeyup="imgDescriptionChange()"></textarea>
                                        </div>
                                      </div>

                                    </div>
                                  </div>
                                  <div class="col-md-12 mb-2">
                                    <div class="row mx-0">
                                      <div class="mr-2 mb-2"> View Type </div>
                                    </div>
                                    <div class="row mx-0 d-flex image_view_type_wrapper">
                                      <div class="image_view_type_item" style="width:20%">
                                        <div class="image_view_type_card selected" data-type="list">
                                          <img src="<?php echo base_url() ?>/assets/images/list.png" width="36" height="36"
                                            class="img-fluid" onclick="grid1()">
                                        </div>
                                        <div class="text-center mt-1">List</div>
                                      </div>
                                      <div class="image_view_type_item" style="width:20%">
                                        <div class="image_view_type_card " data-type="grid_1">
                                          <img src="<?php echo base_url() ?>/assets/images/grid.png" width="36" height="36"
                                            class="img-fluid" onclick="grid1()">
                                        </div>
                                        <div class="text-center mt-1">Grid 1</div>
                                      </div>
                                      <div class="image_view_type_item" style="width:20%">
                                        <div class="image_view_type_card " data-type="grid_2">
                                          <img src="<?php echo base_url() ?>/assets/images/grid_2.png" width="36" height="36"
                                            class="img-fluid" onclick="grid1()">
                                        </div>
                                        <div class="text-center mt-1">Grid 2</div>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-md-12 px-3 mb-3">
                                    <div class="mb-3">Photos <span class="text-muted font-12">(600x600px, 1:1, 4:5
                                        Ratio)</span></div>
                                    <div class="img_upload_card_wrapper">
                                      <div class="images_grid_wrapper img_1001" >
                                        <div class="img_uploaded_card multiple_img mr-3 handle-img mb-2"
                                          style="background-image:url('<?php echo base_url() ?>/assets/images/img4.webp')" >
                                          <div class="img_action">
                                            <a href="#" class="btn text-white" onclick="del_uploaded_file(1)"><i
                                                class="icon-delete_1 font-14"></i></a>
                                          </div>
                                        </div>
                                        <div class="img_uploaded_card multiple_img mr-3 handle-img mb-2"
                                          style="background-image:url('<?php echo base_url() ?>/assets/images/img5.webp')" >
                                          <div class="img_action">
                                            <a href="#" class="btn text-white" onclick="del_uploaded_file(2)"><i
                                                class="icon-delete_1 font-14"></i></a>
                                          </div>
                                        </div>
                                      </div>
                                      <div
                                        class="img_uploaded_card upload_imgs mr-3 d-flex justify-content-center align-items-center"
                                        data-bs-toggle="modal" data-bs-target="#image_modal" onclick="current = 1001;">
                                        <i class="font-24 icon-file_upload_1"></i>
                                      </div>
                                      <input class="d-none" type="file" name="pg_upload_images" accept="image/*">
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