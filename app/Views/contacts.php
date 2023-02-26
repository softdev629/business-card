                          <div id="component_5" draggable="false" ondragstart="dragComponent(event)" ondrop="dropComponent(event)" ondragover="allowDropComponent(event)" class="card collapse_card mb-3 qr_page_component_card list-group-item myDraggable" data-type="contact">
                            <div class="card-header d-flex justify-content-between" aria-expanded="true">
                              <h5 class="mb-0 d-flex align-item-center w-100">
                                <a class="btn handle display_on_hover py-2 pr-0 text-muted" onmousedown="onDragComponent()" onmouseup="offDragComponent()"><i
                                    class="icon-drag_1"></i></a>
                                <a class="btn btn-link qr_page_component_card_title w-100 text-left">
                                  Contact Us
                                </a>
                              </h5>
                              <div class="qr_page_component_card_actions">

                                <a class="btn handle display_on_hover d-none"><i class="icon-drag_1"></i></a>
                                <div class="d-inline mr-2">
                                  <div class="switchery d-inline">
                                    <label class="switch mb-0">
                                      <input type="checkbox" checked="" name="card_enable" data-type="qrc_contact" onchange="checkbox()">
                                      <span class="slider round"></span>
                                    </label>
                                  </div>
                                </div>
                                <a class="btn toggle_card_visiblitiy mr-0" onclick="openComponent()"><i class="icon-add_1"></i></a>
                              </div>
                            </div>
                            <div class="qr_page_component_card_body  secondary_color">
                              <div class="card-body">
                                <div class="row">

                                  <div class="col-md-12  px-3">
                                    <div class="mb-2 d-flex"><span class="mr-2">Title</span> </div>
                                    <div class="d-flex">
                                      <input class="form-control" autocomplete="off" name="contact_title"
                                        value="Contact Us" type="text" placeholder="" onkeyup="contactUsTitleChange()">
                                    </div>
                                  </div>

                                  <div class="col-md-12 px-3 mb-3">
                                    <div class="mb-2"> <span class="text-muted font-12">1:1 Ratio</span></div>
                                    <div class="d-flex img_upload_card_wrapper">
                                      <div class="img_uploaded_card selected_img mr-3 contact-image"
                                        style="background-image:url('<?php echo base_url() ?>/assets/images/smartPhone.png')"></div>
                                      <div
                                        class="img_uploaded_card upload_img mr-3 d-flex justify-content-center align-items-center flex-column contact-img" data-bs-toggle="modal" data-bs-target="#image_modal" onclick="current = 1">
                                        <i class="font-24 icon-file_upload_1 my-2"></i>

                                      </div>
                                      <input class="d-none" type="file" name="pg_upload_image" onchange="" accept="image/*">
                                    </div>

                                  </div>
                                  <div class="col-md-12 px-3 mt-2">
                                    <div class="row mx-0">
                                      <div class="mr-2 mb-2"> Floating button </div>
                                      <div class="switchery d-inline">
                                        <label class="switch mb-0">
                                          <input type="checkbox" checked="" name="floating_button_enable" data-type="contact-floating-button" onchange="checkbox()">
                                          <span class="slider round"></span>
                                        </label>
                                      </div>
                                    </div>
                                    <div class="row mx-0 gray_card align-items-center">

                                      <div class="col-md-6  px-3">
                                        <div class="mb-2 d-flex"><span class="mr-2">Button Text</span> </div>
                                        <div class="d-flex">
                                          <input class="form-control" autocomplete="off" onkeyup="floatingButtonTextChange()" name="floating_button_label"
                                            value="Add to Contact" type="text" placeholder="">
                                        </div>
                                      </div>

                                      <div class="col-md-6 d-flex justify-content-end">
                                        <button class="btn bg-light floating_contact_button" type="button">
                                          <span class="floating_contact_button_text">Add to Contact</span>
                                          <span class="add_contact_icon"><i class="icon-add_1"></i></span>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="col-md-12 px-3 mt-2">
                                    <div class="row mx-0 list-group mt-5" id="contact_info_container_4">
                                      <div id="sub_comp_7"  draggable="false" ondragstart="drag(event)"  ondrop="drop(event)" ondragover="allowDrop(event)"
                                        class="list-group-item contact_info_input_wrapper subcomponent_sortable_wrapper mb-5 myDraggable"
                                        data-type="number">
                                        <div class="contact_info_input_title">
                                          Contact Number
                                        </div>
                                        <div>
                                          <div class="action_buttons">
                                            <a class="btn btn_delete_pro_card" onclick="contact_del(event)"><i
                                                class="text-danger icon-delete_1"></i></a>
                                            <a class="btn handle-contact_info" onmousedown="onDragSubComponent()" onmouseup="offDragSubComponent()"><i class="icon-drag_1"></i></a>
                                          </div>
                                        </div>
                                        <div class="row">


                                          <div class="col-md-6  px-3">
                                            <div class="mb-2 d-flex"><span class="mr-2">Label</span> </div>
                                            <div class="d-flex">
                                              <input class="form-control" autocomplete="off" name="title" value="Call Us"
                                                type="text" placeholder="" onkeyup="changeContactLabel()">
                                            </div>
                                          </div>


                                          <div class="col-md-6  px-3">
                                            <div class="mb-2 d-flex"><span class="mr-2">Number</span> </div>
                                            <div class="d-flex">
                                              <input class="form-control" autocomplete="off" name="number"
                                                value="123 456 7890" type="text" placeholder=""  onkeyup="changeContactValue()">
                                            </div>
                                          </div>

                                        </div>
                                      </div>
                                      <div  id="sub_comp_8"  draggable="false" ondragstart="drag(event)"  ondrop="drop(event)" ondragover="allowDrop(event)"
                                        class="list-group-item contact_info_input_wrapper subcomponent_sortable_wrapper mb-5 myDraggable"
                                        data-type="email">
                                        <div class="contact_info_input_title">
                                          Email
                                        </div>
                                        <div>
                                          <div class="action_buttons">
                                            <a class="btn btn_delete_pro_card" onclick="contact_del(event)"><i
                                                class="text-danger icon-delete_1"></i></a>
                                            <a class="btn handle-contact_info" onmousedown="onDragSubComponent()" onmouseup="offDragSubComponent()"><i class="icon-drag_1"></i></a>
                                          </div>
                                        </div>
                                        <div class="row">

                                          <div class="col-md-6  px-3">
                                            <div class="mb-2 d-flex"><span class="mr-2">Label</span> </div>
                                            <div class="d-flex">
                                              <input class="form-control" autocomplete="off" name="title" value="Email"
                                                type="text" placeholder="" onkeyup="changeContactLabel()">
                                            </div>
                                          </div>


                                          <div class="col-md-6  px-3">
                                            <div class="mb-2 d-flex"><span class="mr-2">Email</span> </div>
                                            <div class="d-flex">
                                              <input class="form-control" autocomplete="off" name="email"
                                                value="contactme@domain.com" type="text" placeholder="" onkeyup="changeContactValue()">
                                            </div>
                                          </div>

                                        </div>
                                      </div>
                                      <div  id="sub_comp_9"  draggable="false" ondragstart="drag(event)"  ondrop="drop(event)" ondragover="allowDrop(event)"
                                        class="list-group-item contact_info_input_wrapper subcomponent_sortable_wrapper mb-5 myDraggable"
                                        data-type="address">
                                        <div class="contact_info_input_title">
                                          Address
                                        </div>
                                        <div>
                                          <div class="action_buttons">
                                            <a class="btn btn_delete_pro_card" onclick="contact_del(event)"><i
                                                class="text-danger icon-delete_1"></i></a>
                                            <a class="btn handle-contact_info" onmousedown="onDragSubComponent()" onmouseup="offDragSubComponent()"><i class="icon-drag_1"></i></a>
                                          </div>
                                        </div>
                                        <div class="row">

                                          <div class="col-md-12  px-3">
                                            <div class="mb-2 d-flex"><span class="mr-2">Label</span> </div>
                                            <div class="d-flex">
                                              <input class="form-control" autocomplete="off" name="title" value="Address"
                                                type="text" placeholder="" onkeyup="changeContactLabel()">
                                            </div>
                                          </div>


                                          <div class="col-md-6  px-3">
                                            <div class="mb-2 d-flex"><span class="mr-2">Address Line 1</span> </div>
                                            <div class="d-flex">
                                              <input class="form-control" autocomplete="off" name="street"
                                                value="817 N Ave" type="text" placeholder="" onkeyup="changeContactAddress1()">
                                            </div>
                                          </div>


                                          <div class="col-md-6  px-3">
                                            <div class="mb-2 d-flex"><span class="mr-2">Address Line 2</span> </div>
                                            <div class="d-flex">
                                              <input class="form-control" autocomplete="off" name="building" value=""
                                                type="text" placeholder="" onkeyup="changeContactAddress2()">
                                            </div>
                                          </div>


                                          <div class="col-md-6  px-3">
                                            <div class="mb-2 d-flex"><span class="mr-2">City</span> </div>
                                            <div class="d-flex">
                                              <input class="form-control" autocomplete="off" name="city"
                                                value="California" type="text" placeholder="" onkeyup="changeContactCity()">
                                            </div>
                                          </div>


                                          <div class="col-md-6  px-3">
                                            <div class="mb-2 d-flex"><span class="mr-2">State</span> </div>
                                            <div class="d-flex">
                                              <input class="form-control" autocomplete="off" name="state" value="Chicago"
                                                type="text" placeholder="" onkeyup="changeContactState()">
                                            </div>
                                          </div>


                                          <div class="col-md-6  px-3">
                                            <div class="mb-2 d-flex"><span class="mr-2">Country</span> </div>
                                            <div class="d-flex">
                                              <input class="form-control" autocomplete="off" name="country" value="US"
                                                type="text" placeholder="" onkeyup="changeContactCountry()">
                                            </div>
                                          </div>


                                          <div class="col-md-6  px-3">
                                            <div class="mb-2 d-flex"><span class="mr-2">Zipcode</span> </div>
                                            <div class="d-flex">
                                              <input class="form-control" autocomplete="off" name="zip" value="60622" onkeyup="changeContactZipcode()" 
                                                type="text" placeholder="">
                                            </div>
                                          </div>


                                          <div class="col-md-6  px-3">
                                            <div class="mb-2 d-flex"><span class="mr-2">Action Button</span>
                                              <div class="switchery d-inline">
                                                <label class="switch mb-0">
                                                  <input type="checkbox" checked="" name="action_button_enable" data-type="contact-action-button" onchange="checkbox()">
                                                  <span class="slider round"></span>
                                                </label>
                                              </div>
                                            </div>
                                            <div class="d-flex">
                                              <input class="form-control" autocomplete="off" name="action_button_label"
                                                value="Direction" type="text" placeholder="" onkeyup="changeContactActionButtonText()">
                                            </div>
                                          </div>

                                          <div class="col-md-6  px-3">
                                            <div class="mb-2 d-flex"><span class="mr-2">Google Map URL</span> </div>
                                            <div class="d-flex">
                                              <input class="form-control" autocomplete="off" name="action_button_link"
                                                value="#" type="text" placeholder="" onkeyup="changeContactUrl()">
                                            </div>
                                          </div>

                                        </div>
                                      </div>
                                    </div>
                                    <div class="row mx-0 mt-2">
                                      <div class="dropdown">
                                        <button class="btn btn-outline-primary dropdown-toggle" type="button"
                                           data-bs-toggle="dropdown" aria-haspopup="true"
                                          aria-expanded="false">
                                          <i class="icon-add_1"></i>Add
                                        </button>
                                        <div class="dropdown-menu tab-two">
                                          <a class="dropdown-item" data-type="number">Number</a>
                                          <a class="dropdown-item" data-type="email">Email</a>
                                          <a class="dropdown-item" data-type="address">Address</a>
                                        </div>
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