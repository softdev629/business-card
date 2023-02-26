                <div class="tab-pane fade none" id="page-tab-style-design-content" role="tabpanel"
                  aria-labelledby="page-tab-style-design">  
                  <div class="card collapse_card mb-3 qr_page_component_card list-group-item" data-type="bg_img">
                    <div class="card-header d-flex justify-content-between" aria-expanded="true">
                      <h5 class="mb-0">
                        <a class="btn btn-link qr_page_component_card_title">
                          Background Image
                        </a>
                      </h5>   
                      <div class="qr_page_component_card_actions">
                        <a class="btn toggle_card_visiblitiy" onclick="openComponent()"><i class="icon-remove_1"></i></a>
                      </div>
                    </div>
                    <div class="qr_page_component_card_body show secondary_color bg_img_input_wrapper">
                      <div class="card-body">
                        <div class="row">
                          <div class="col-md-12 px-3 mb-3">
                            <div class="mb-2">Image / Video</div>
                            <div
                              class="d-flex img_upload_card_wrapper bg_img_upload_card_wrapper flex-wrap thinScrollBar pt-2">
                              <div class="img_uploaded_card remove_img mr-3 selected" value="1"
                                style='background-image:url("<?php echo base_url() ?>/images/1.jpg"); margin-left: 6px;'>
                              </div>
                              <div class="img_uploaded_card remove_img mr-3" value='2'
                                style='background-image:url("<?php echo base_url() ?>/images/2.jpg");'>
                              </div>
                              <div class="img_uploaded_card remove_img mr-3" value='3'
                                style='background-image:url("<?php echo base_url() ?>/images/3.jpg");'>
                              </div>
                              <input class="d-none" type="file" name="pg_upload_bg_image" accept="image/*">
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="card collapse_card mb-3 qr_page_component_card list-group-item" data-type="color">
                    <div class="card-header d-flex justify-content-between" aria-expanded="true">
                      <h5 class="mb-0">
                        <a class="btn btn-link qr_page_component_card_title">
                          Colors
                        </a>
                      </h5>
                      <div class="qr_page_component_card_actions">
                        <a class="btn toggle_card_visiblitiy" onclick="openComponent()"><i class="icon-add_1"></i></a>
                      </div>
                    </div>
                    <div class="qr_page_component_card_body  secondary_color color_input_wrapper">
                      <div class="card-body">
                        <div class="row">
                          <div class="col-md-12 d-none">
                            <h6>Background Color</h6>
                          </div>
                          <div class="col-md-12">
                            <ul class="borderbox qr_color_panel_bg" data-type="bg">
                              <li class="active">
                                <div class="qr_color_panel_wr" data-bg_1="#517AFA" data-bg_2="#C5FEFF"
                                  data-text_1="#061244" data-text_2="#76839B">
                                  <div class="qr_color_panel_1" style="background: #517AFA">
                                  </div>
                                  <div class="qr_color_panel_2" style="background: #C5FEFF">
                                  </div>
                                </div>
                              </li>
                              <li class="">
                                <div class="qr_color_panel_wr" data-bg_1="#374793" data-bg_2="#C5FEFF"
                                  data-text_1="#061244" data-text_2="#76839B">
                                  <div class="qr_color_panel_1" style="background: #374793">
                                  </div>
                                  <div class="qr_color_panel_2" style="background: #C5FEFF">
                                  </div>
                                </div>
                              </li>
                              <li class="">
                                <div class="qr_color_panel_wr" data-bg_1="#D51A47" data-bg_2="#FFB1DB"
                                  data-text_1="#061244" data-text_2="#76839B">
                                  <div class="qr_color_panel_1" style="background: #D51A47">
                                  </div>
                                  <div class="qr_color_panel_2" style="background: #FFB1DB">
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div class="col-md-6 mb-4">
                            <label>Primary Color</label>
                            <div class="input-group">
                              <input type="color" value="#517AFA" onchange="choose_color(event)"
                                id="primary-color-picker">
                              <input type="text" id="choosed-primary-color"
                                class="form-control border-left-0 colorpicker-bg-primary-input qr_color_picker"
                                placeholder="#061244" value="#061244">
                            </div>
                          </div>
                          <div class="col-md-6 mb-4">
                            <label>Secondary Color</label>
                            <div class="input-group">
                              <input type="color" value="#C5FEFF" onchange="choose_color(event)"
                                id="secondary-color-picker">
                              <input type="text"
                                class="form-control border-left-0 colorpicker-bg-secondary-input qr_color_picker"
                                placeholder="#a07dda" value="#a07dda">
                            </div>
                          </div>
                          <div class="col-md-12 mt-3 d-none">
                            <h6>Text Color</h6>
                          </div>
                          <div class="col-md-12 d-none">
                            <ul class="borderbox qr_color_panel_text" data-type="text">

                            </ul>
                          </div>
                          <div class="col-md-6 mb-4">
                            <label>Primary Profile Text Color</label>
                            <div class="input-group">
                              <input type="color" value="#ffffff" onchange="choose_color(event)"
                                id="primary-profile-text-color">
                              <input type="text"
                                class="form-control border-left-0 colorpicker-profile-primary-input qr_color_picker"
                                placeholder="#ffffff" value="#ffffff">
                            </div>
                          </div>
                          <div class="col-md-6 mb-4">
                            <label>Secondary Profile Text Color</label>
                            <div class="input-group">
                              <input type="color" value="#ffffff" onchange="choose_color(event)"
                                id="secondary-profile-text-color">
                              <input type="text"
                                class="form-control border-left-0 colorpicker-profile-secondary-input qr_color_picker"
                                placeholder="#ffffff" value="#ffffff">
                            </div>
                          </div>
                          <div class="col-md-6 mb-4">
                            <label>Primary Text Color</label>
                            <div class="input-group">
                              <input type="color" value="#061244" onchange="choose_color(event)"
                                id="primary-text-color">
                              <input type="text"
                                class="form-control border-left-0 colorpicker-text-primary-input qr_color_picker"
                                placeholder="#061244" value="#061244">
                            </div>
                          </div>
                          <div class="col-md-6 mb-4">
                            <label>Secondary Text Color</label>
                            <div class="input-group">
                              <input type="color" value="#061244" onchange="choose_color(event)"
                                id="secondary-text-color">
                              <input type="text"
                                class="form-control border-left-0 colorpicker-text-secondary-input qr_color_picker"
                                placeholder="#061244" value="#061244">
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card collapse_card mb-3 qr_page_component_card list-group-item" data-type="font_style">
                    <div class="card-header d-flex justify-content-between" aria-expanded="true">
                      <h5 class="mb-0">
                        <a class="btn btn-link qr_page_component_card_title">
                          Font Style
                        </a>
                      </h5>
                      <div class="qr_page_component_card_actions">
                        <a class="btn toggle_card_visiblitiy" onclick="openComponent()"><i class="icon-add_1"></i></a>
                      </div>
                    </div>
                    <div class="qr_page_component_card_body  secondary_color font_style_input_wrapper">
                      <div class="card-body">
                        <div class="row">
                          <div class="col-md-12 mb-2">
                            <div class="mr-2 mb-2">Font </div>
                          </div>
                          <div class="col-md-12 d-flex font_style_card_wrapper flex-wrap">
                            <div class="font_style_item">
                              <div class="font_style_card  selected" data-type="work_sans">
                                <img src="<?php echo base_url() ?>/images/work_sans.png" width="36" height="36" class="font-style-img">
                              </div>
                              <div class="text-center mt-1">Work Sans</div>
                            </div>
                            <div class="font_style_item">
                              <div class="font_style_card " data-type="open_sans">
                                <img src="<?php echo base_url() ?>/images/open_sans.jpg" width="36" height="36" class="font-style-img">
                              </div>
                              <div class="text-center mt-1">Open Sans</div>
                            </div>
                            <div class="font_style_item">
                              <div class="font_style_card " data-type="roboto">
                                <img src="<?php echo base_url() ?>/images/roboto_font.svg" width="36" height="36" class="font-style-img">
                              </div>
                              <div class="text-center mt-1">Roboto</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="card collapse_card mb-3 qr_page_component_card list-group-item" data-type="ld_img">
                    <div class="card-header d-flex justify-content-between" aria-expanded="true">
                      <h5 class="mb-0">
                        <a class="btn btn-link qr_page_component_card_title">
                          Page Loader
                        </a>
                      </h5>
                      <div class="qr_page_component_card_actions">
                        <a class="btn toggle_card_visiblitiy" onclick="openComponent()"><i class="icon-add_1"></i></a>
                      </div>
                    </div>
                    <div class="qr_page_component_card_body  secondary_color ld_img_input_wrapper">
                      <div class="card-body">
                        <div class="row">
                          <div class="pg_loader_wrp">
                            <div class="col-md-12 px-3 mb-3">
                              <div class="mb-2">Loader </div>
                              <div class="d-flex img_upload_card_wrapper">
                                <div class="img_uploaded_card selected_img mr-3 loader_img "
                                  style="background-image:url('<?php echo base_url() ?>/assets/images/windows.png')"></div>
                                <div
                                  class="img_uploaded_card upload_img mr-3 d-flex justify-content-center align-items-center flex-column"
                                  data-bs-toggle="modal" data-bs-target="#image_modal" onclick="current = 2">
                                  <i class="font-24 icon-file_upload_1 my-2"></i>
                                  <span class="text-muted font-12">1:1 Ratio</span>
                                </div>
                                <input class="d-none" type="file" name="pg_upload_image" accept="image/*">
                              </div>

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
                