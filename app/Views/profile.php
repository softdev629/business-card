                        <div class="mb-5 list-group  mar-btm-0" id="qr_page_component_container">
                          <div id="component_1" draggable="false" ondragstart="dragComponent(event)" ondrop="dropComponent(event)" ondragover="allowDropComponent(event)" class="card collapse_card mb-3 qr_page_component_card list-group-item myDraggable"
                            data-type="profile">
                            <div class="card-header d-flex justify-content-between" aria-expanded="true">
                              <h5 class="mb-0 d-flex align-item-center w-100">
                                <a class="btn handle display_on_hover py-2 pr-0 text-muted" onmousedown="onDragComponent()" onmouseup="offDragComponent()"><i class="icon-drag_1"></i></a>
                                <a class="btn btn-link qr_page_component_card_title w-100 text-left">
                                  Profile
                                </a>
                              </h5>
                              <div class="qr_page_component_card_actions">
                                <a class="btn handle display_on_hover d-none"><i class="icon-drag_1"></i></a>
                                <div class="d-inline mr-2">
                                  <div class="switchery d-inline">
                                    <label class="switch mb-0">
                                      <input type="checkbox" onchange="checkbox()" checked="" name="card_enable" data-type="qrc_page_wrapper">
                                      <span class="slider round"></span>
                                    </label>
                                  </div>
                                </div>
                                <a class="btn toggle_card_visiblitiy mr-0" onclick="openComponent()"><i class="icon-remove_1"></i></a>
                              </div>
                            </div>
                            <div class="qr_page_component_card_body show secondary_color">
                              <div class="card-body">
                                <div class="row">

                                  <div class="col-md-12 px-3 mb-3">
                                    <div class="mb-2">Profile Photo <div class="switchery d-inline">
                                        <label class="switch mb-0">
                                          <input type="checkbox" checked="" name="enable_pr" data-type="qrc_profilepic" onchange="checkbox()">
                                          <span class="slider round"></span>
                                        </label>
                                      </div>
                                    </div>
                                    <div class="d-flex img_upload_card_wrapper">
                                      <div class="img_uploaded_card selected_img mr-3 pr_img"
                                        style='background-image:url("<?php echo base_url() ?>/assets/images/face1.jpg");'></div>
                                      <div
                                        class="img_uploaded_card upload_img mr-3 d-flex justify-content-center align-items-center flex-column"
                                        data-bs-toggle="modal" data-bs-target="#image_modal" onclick="current = 0">
                                        <i class="font-24 icon-file_upload_1 my-2"></i>

                                      </div>
                                      <input class="d-none" type="file" name="pg_upload_image" accept="image/*">
                                    </div>
                                    <div class=""><span class="text-muted font-12">(250x250px, 1:1 Ratio)</span></div>
                                  </div>

                                  <div class="col-md-12  px-3">
                                    <div class="mb-2 d-flex"><span class="mr-2">Name</span> </div>
                                    <div class="d-flex">
                                      <input class="form-control" autocomplete="off" name="name" value="Name"
                                        type="text" placeholder="" onkeyup="changeName()">
                                    </div>
                                  </div>

                                  <div class="col-md-6  px-3">
                                    <div class="mb-2 d-flex"><span class="mr-2">Heading</span> </div>
                                    <div class="d-flex">
                                      <input class="form-control" autocomplete="off" name="desc" value="Title"
                                        type="text" placeholder="" onkeyup="changeTitle()">
                                    </div>
                                  </div>

                                  <div class="col-md-6  px-3">
                                    <div class="mb-2 d-flex"><span class="mr-2">Sub Heading</span> </div>
                                    <div class="d-flex">
                                      <input class="form-control" autocomplete="off" name="company" value="Company"
                                        type="text" placeholder=""  onkeyup="changeCompany()">
                                    </div>
                                  </div>
                                  <div class="col-md-12 px-3 mt-2">
                                    <div class="row mx-0">
                                      <div class="mr-2 mb-2">Profile Contact Shortcuts </div>
                                      <div class="switchery d-inline">
                                        <label class="switch mb-0">
                                          <input type="checkbox" checked="" name="contact_shortcut_enable"
                                            data-type="qrc_profile_shortcut" onchange="checkbox()">
                                          <span class="slider round"></span>
                                        </label>
                                      </div>
                                    </div>
                                    <div class="contact_shortcut_container">
                                      <div id="sub_comp_1"  draggable="false" ondragstart="drag(event)"  ondrop="drop(event)" ondragover="allowDrop(event)" class="row mx-0 list-group myDraggable">
                                        <div
                                          class="list-group-item subcomponent_sortable_wrapper contact_shortcut_input_wrapper mb-4">
                                          <div class="action_buttons">
                                            <a class="btn btn_delete_pro_card" onclick="pro_card_del(event)"><i
                                                class="text-danger icon-delete_1"></i></a>
                                            <a class="btn handle-contact" onmousedown="onDragSubComponent()" onmouseup="offDragSubComponent()"><i class="icon-drag_1"></i></a>
                                          </div>
                                          <div class=""></div>
                                          <div class="input-group my-3">
                                          <div class="dropdown">
                                          <ul class=" dropdown-menu changable">
                                          <li class="dropdown-item" onclick="changeContacts()" value="mobile">Mobile</li>
                                          <li class="dropdown-item" onclick="changeContacts()" value="email">Email</li>
                                          <li class="dropdown-item" onclick="changeContacts()" value="sms">SMS</li>
                                          <li class="dropdown-item" onclick="changeContacts()" value="location">Location</li>
                                          <li class="dropdown-item" onclick="changeContacts()" value="whatsapp">Whatsapp</li>
                                          <li class="dropdown-item" onclick="changeContacts()" value="fax">Fax</li>
                                          <li class="dropdown-item" onclick="changeContacts()" value="tel">Telephone</li>
                                          </ul>
                                              <button class="btn-default1 dropdown-toggle"
                                                data-bs-toggle="dropdown">Mobile&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i
                                                  class="fa fa-angle-down"></i></button>
                                            </div>
                                            <input type="text" class="form-control shortcuts" name="value" value=""
                                              placeholder="Mobile number">
                                          </div>
                                        </div>
                                      </div>
                                      <div id="sub_comp_2"  draggable="false" ondragstart="drag(event)"  ondrop="drop(event)" ondragover="allowDrop(event)" class="row mx-0 list-group myDraggable">
                                        <div
                                          class="list-group-item subcomponent_sortable_wrapper contact_shortcut_input_wrapper mb-4">
                                          <div class="action_buttons">
                                            <a class="btn btn_delete_pro_card" onclick="pro_card_del(event)"><i
                                                class="text-danger icon-delete_1"></i></a>
                                            <a class="btn handle-contact" onmousedown="onDragSubComponent()" onmouseup="offDragSubComponent()"><i class="icon-drag_1"></i></a>
                                          </div>
                                          <div class=""></div>
                                          <div class="input-group my-3">
                                            <div class="dropdown">
                                              <ul class=" dropdown-menu changable">
                                        <li class="dropdown-item" onclick="changeContacts()" value="mobile">Mobile</li>
                                        <li class="dropdown-item" onclick="changeContacts()" value="email">Email</li>
                                        <li class="dropdown-item" onclick="changeContacts()" value="sms">SMS</li>
                                        <li class="dropdown-item" onclick="changeContacts()" value="location">Location</li>
                                        <li class="dropdown-item" onclick="changeContacts()" value="whatsapp">Whatsapp</li>
                                        <li class="dropdown-item" onclick="changeContacts()" value="fax">Fax</li>
                                        <li class="dropdown-item" onclick="changeContacts()" value="tel">Telephone</li>
                                        </ul>
                                              <button class="btn-default1 dropdown-toggle"
                                                data-bs-toggle="dropdown">Email&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i
                                                  class="fa fa-angle-down"></i></button>
                                            </div>
                                            <input type="text" class="form-control shortcuts" ho name="value" value=""
                                              placeholder="Email">
                                          </div>
                                        </div>
                                      </div>
                                      <div  id="sub_comp_3"  draggable="false" ondragstart="drag(event)"  ondrop="drop(event)" ondragover="allowDrop(event)" class="row mx-0 list-group myDraggable">
                                        <div
                                          class="list-group-item subcomponent_sortable_wrapper contact_shortcut_input_wrapper mb-4">
                                          <div class="action_buttons">
                                            <a class="btn btn_delete_pro_card" onclick="pro_card_del(event)"><i
                                                class="text-danger icon-delete_1"></i></a>
                                            <a class="btn handle-contact"onmousedown="onDragSubComponent()" onmouseup="offDragSubComponent()"><i class="icon-drag_1"></i></a>
                                          </div>
                                          <div class=""></div>
                                          <div class="input-group my-3">
                                            <div class="dropdown">
                                        <ul class=" dropdown-menu changable">
                                        <li class="dropdown-item" onclick="changeContacts()" value="mobile">Mobile</li>
                                        <li class="dropdown-item" onclick="changeContacts()" value="email">Email</li>
                                        <li class="dropdown-item" onclick="changeContacts()" value="sms">SMS</li>
                                        <li class="dropdown-item" onclick="changeContacts()" value="location">Location</li>
                                        <li class="dropdown-item" onclick="changeContacts()" value="whatsapp">Whatsapp</li>
                                        <li class="dropdown-item" onclick="changeContacts()" value="fax">Fax</li>
                                        <li class="dropdown-item" onclick="changeContacts()" value="tel">Telephone</li>
                                        </ul>
                                              <button class="btn-default1 dropdown-toggle"
                                                data-bs-toggle="dropdown">SMS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i
                                                  class="fa fa-angle-down"></i></button>
                                            </div>
                                            <input type="text" class="form-control shortcuts" name="value" value=""
                                              placeholder="Mobile number">
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div class="row mx-0 mt-2">
                                      <div class="dropup">
                                        <button class="btn btn-outline-primary dropdown-toggle" type="button"
                                          id="btn_add_profile_component" data-toggle="dropdown" aria-haspopup="true"
                                          aria-expanded="false">
                                          <i class="icon-add_1"></i>Add More
                                        </button>
                                        <div class="dropdown-menu add_profile_component tab-one"
                                          aria-labelledby="btn_add_profile_component" x-placement="top-start"
                                          style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, -244px, 0px);">
                                          <a class="dropdown-item" data-type="mobile">Mobile</a>
                                          <a class="dropdown-item" data-type="email">Email</a>
                                          <a class="dropdown-item" data-type="sms">SMS</a>
                                          <a class="dropdown-item" data-type="location">Location</a>
                                          <a class="dropdown-item" data-type="whatsapp">Whatsapp</a>
                                          <a class="dropdown-item" data-type="fax">Fax</a>
                                          <a class="dropdown-item" data-type="tel">Telephone</a>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>