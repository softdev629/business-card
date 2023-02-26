                          <div id="component_2" draggable="false" ondragstart="dragComponent(event)" ondrop="dropComponent(event)" ondragover="allowDropComponent(event)" class="card collapse_card mb-3 qr_page_component_card list-group-item myDraggable"
                            data-type="text_desc">
                            <div class="card-header d-flex justify-content-between" aria-expanded="true">
                              <h5 class="mb-0 d-flex align-item-center w-100">
                                <a class="btn handle display_on_hover py-2 pr-0 text-muted" onmousedown="onDragComponent()" onmouseup="offDragComponent()"><i
                                    class="icon-drag_1"></i></a>
                                <a class="btn btn-link qr_page_component_card_title w-100 text-left">
                                  Heading + Text
                                </a>
                              </h5>
                              <div class="qr_page_component_card_actions">
                                <a class="btn btn_delete_component_card display_on_hover"><i
                                    class="text-danger icon-delete_1"></i></a>
                                <a class="btn handle display_on_hover d-none"><i class="icon-drag_1"></i></a>
                                <div class="d-inline mr-2">
                                  <div class="switchery d-inline">
                                    <label class="switch mb-0">
                                      <input type="checkbox" checked="" name="card_enable" data-type="qrc_heading_text" onchange="checkbox()">
                                      <span class="slider round"></span>
                                    </label>
                                  </div>
                                </div>
                                <a class="btn toggle_card_visiblitiy mr-0" onclick="openComponent()"><i class="icon-add_1" ></i></a>
                              </div>
                            </div>
                            <div class="qr_page_component_card_body  secondary_color">
                              <div class="card-body">
                                <div class="row">

                                  <div class="col-md-12  px-3">
                                    <div class="mb-2 d-flex"><span class="mr-2">Title</span> </div>
                                    <div class="d-flex">
                                      <input class="form-control" autocomplete="off" name="title" value="About Me"
                                        type="text" placeholder="" onkeyup="changeHeadingTitle()">
                                    </div>
                                  </div>

                                  <div class="col-md-12  px-3">
                                    <div class="mb-2">Description</div>
                                    <div class="d-flex">
                                      <textarea class="form-control" name="desc" rows="4" onkeyup="changeHeadingDescription()">Description</textarea>
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