 <div class="modal fade" id="image_modal">
    <div class="modal-dialog modal-lg">
      <div class="modal-content" style="min-height:500px;">
        <div class="modal-header p-3 border-bottom align-items-center">
          <h5 class="modal-title font-weight-semibold ">File Manager </h5>
        </div>

        <div class="modal-body p-0">
          <div id="filemanager_container" class="row mx-0">
            <div class="row border-bottom justify-content-between p-3">
              <div class="">
                <form>
                  <div class="dropdown ml-3" style="display:flex;justify-content:space-between;">

                    <button class="btn btn-success dropdown-toggle pl=4 d-flex align-items-center" type="button"
                      id="upload_dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                      data-file="any" onclick="file_select()">Select</button>
                    <input type="file" id="file_input" style="display: none" />
                    <button class="btn btn-primary dropdown-toggle pl=4 d-flex align-items-center" type="button"
                      id="upload_dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                      data-file="any" onclick="file_upload()">
                      <i class="icon-icons_line_plus mr-1"></i>
                      File Upload
                      <i class="icon-downarrow_4 ml-2"></i>
                    </button>
                  </div>
                  <div style="margin-top: 20px" id="chosen_images">
                  </div>
                </form>
              </div>
            </div>
            <div id="asset_container_overlay">
              <div class="row p-3 thinScrollBar" id="asset_container">

              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>



  <div class="modal fade" id="image_modal1">
    <div class="modal-dialog modal-lg">
      <div class="modal-content" style="min-height:500px;">
        <div class="modal-header p-3 border-bottom align-items-center">
          <h5 class="modal-title font-weight-semibold ">File Manager </h5>
        </div>

        <div class="modal-body p-0">
          <div  class="row mx-0">
            <div class="row border-bottom justify-content-between p-3">
              <div class="">
                <form>
                  <div class="dropdown ml-3" style="display:flex;justify-content:space-between;">

                    <button class="btn btn-success dropdown-toggle pl=4 d-flex align-items-center" type="button"
                      id="upload_dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                      data-file="any" onclick="pdf_select()">Select</button>
                    <input type="file" id="file_input1" name="pdf" accept="application/pdf" style="display: none" />
                    <button class="btn btn-primary dropdown-toggle pl=4 d-flex align-items-center" type="button"
                      id="upload_dropdown" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
                      data-file="any" onclick="pdf_upload()">
                      <i class="icon-icons_line_plus mr-1"></i>
                      Pdf Upload
                      <i class="icon-downarrow_4 ml-2"></i>
                    </button>
                  </div>
                  <div style="margin-top: 20px" class="row" id="chosen_pdf">
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="modal" id="delModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Delete Sub-Component</h4>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          Are you sure to delete this sub-component?
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-danger del-btn">Delete</button>
        </div>

      </div>
    </div>
  </div>
  <div class="modal" id="saveModal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Please insert your card url.</h4>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <div class="form-group" style="display:flex"><label class="url-label"><?php echo base_url(); ?>/mycard/</label><input type="text"  class="form-control url-input" id="linko_url"/></div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
          <button type="button" id = "save-btn" class="btn btn-danger">Save</button>
        </div>

      </div>
    </div>
  </div>

  <div class="modal" id="delModal1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Delete Component</h4>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          Are you sure to delete this component?
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-danger del-btn1">Delete</button>
        </div>

      </div>
    </div>
  </div>

  <div class="modal" id="myModal">
    <div class="modal-dialog">
      <div class="modal-content">

        <div class="modal-header">
          <h4 class="modal-title" style="width: 100%;text-align: center; color: rgb(50, 50, 50)">Save Style</h4>
        </div>

        <div class="modal-body">
          <label style="color:gray">Style Name</label>
          <input type="text" class="form-control mt-0" value="" id="style_name_input" required="">
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-danger" aria-label="" style="display: inline-block;"
            data-bs-dismiss="modal" id="cancel-btn">Cancel</button>
          <button type="button" class="btn btn-success swal2-confirm swal2-styled" aria-label=""
            style="display: inline-block;" onclick="style_save()">Save</button>
        </div>

      </div>
    </div>
  </div>

  <div class="modal fade" id="signup_modal">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">

        <div class="modal-header">
          <h4 class="modal-title" style="width: 100%;text-align: center; color: rgb(50, 50, 50)">Please signup to
            continue, it's completely free!</h4>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>

        <div class="modal-body" style="display:flex;">
          <div style="flex:1" class="modal-image">
          </div>
          <div style="flex:1">
            <div style="display:flex;justify-content:space-between;margin: 5px;">
              <div>
                <input type="radio" class="form-radio-input" name="user">
                <label>I'm a new user</label>
              </div>
              <div>
                <input type="radio" class="form-radio-input" name="user" />
                <label>I'm an existing user</label>
              </div>
            </div>
            <div style="margin-top:20px;margin-bottom:20px;"><input type="text" class="form-control"
                placeholder="Name*"></div>
            <div style="margin-top:20px;margin-bottom:20px;"><input type="text" class="form-control"
                placeholder="Official Email/Login ID*"></div>
            <div style="margin-top:20px;margin-bottom:20px;"><input type="text" class="form-control"
                placeholder="Password*"></div>
            <div style="margin-top:20px;margin-bottom:20px;"><input type="text" class="form-control"
                placeholder="Confirm password*"></div>
            <div style="margin-top:20px;margin-bottom:20px;" class="form-check">
              <input type="checkbox" class="form-check-input" checked />
              <label class="form-check-label">I agree to <a>terms</a> and <a>privacy</a> policy</label>
            </div>
            <button class="btn btn-primary w-100 mt-4 btn-lg">Done</button>
          </div>
        </div>

      </div>
    </div>
  </div>

<div class="modal" id="moreSize"  tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" style="display: none;">
  <div class="modal-dialog modal-lg modal-dialog-centered" role="document">

    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" >More size download</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close" onclick="moreSizeHide()">
            <span aria-hidden="true">×</span>
        </button>
      </div>
      <div class="modal-body">
        <ul class="list-group secondary_color download_qr_size" style="display: flex;flex-direction: row;justify-content: center;">
            <li class="list-group-item mt-2" style="width:18%;"><a class="link" data-size="4096">4096 X 4096</a></li>
            <li class="list-group-item mt-2" style="width:18%;"><a class="link" data-size="2048">2048 X 2048</a></li>
            <li class="list-group-item mt-2" style="width:18%;"><a class="link" data-size="1024">1024 X 1024</a></li>
            <li class="list-group-item mt-2" style="width:18%;"><a class="link" data-size="512">512 X 512</a></li>
        </ul>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-danger" aria-label="" style="display: inline-block;"
          data-bs-dismiss="modal" id="cancel-btn">Cancel</button>
        <button type="button" class="btn btn-success swal2-confirm swal2-styled" aria-label=""
          style="display: inline-block;" onclick="saveAndDownload()">Save</button>
      </div>
    </div>
  </div>
</div>


<div class="modal" id="desgin_qrcode_modal" tabindex="-1" data-keyboard="false" data-backdrop="true" data-bs-keyboard="false" data-bs-backdrop="static" role="dialog" aria-labelledby="exampleModalLabel" style="display: none; padding-right: 17px;">
  <div class="modal-dialog modal-lg modal-dialog-centered" role="document">

    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Customize QR Code</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close" onclick="desgin_qrcode_modal_hide()">
            <span aria-hidden="true">×</span>
        </button>
      </div>
      <div class="modal-body">
        <div class="row">
          <div class="col-md-12">
            <ul class="nav popup_gntr_qrcode_setting_nav" id="gntr-tab-1" role="tablist">
              <li class="nav-item">
                <a class="nav-link" id="gntr_qrshapes_tab-1" data-toggle="pill" href="#gntr_qrshapes_1" role="tab" onclick="qrShapeTabShow()" aria-controls="gntr_qrshapes_1" aria-selected="true">QR Shapes</a>
              </li>    
              <li class="nav-item">
                <a class="nav-link" id="gntr_color_tab-1" data-toggle="pill" href="#gntr_color_1" role="tab" aria-controls="gntr_color_1" onclick="qrShapeTabShow()" aria-selected="false">Colors</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="gntr_bgimg_tab-1" onclick="qrShapeTabShow()" data-toggle="pill" href="#gntr_bgimg_1" role="tab" aria-controls="gntr_bgimg_1" aria-selected="false">Decorate Your Picture</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="col-md-7 thinScrollBar fixedHeightListContainer">
            <div class="tab-content popup_gntr_tab_content">
                <!-- qrshapes -->
                <div class="tab-pane fade active show" id="gntr_qrshapes_1" role="tabpanel" aria-labelledby="gntr_prebuilt_tab-1"><!-- div class="subheading mt-10">QR Shapes</div -->
                  <div class="fixedHeightListContainerInner">
                    <ul class="popup_gntr_pic_list">
                      <li class="js_qr_action_item" data-type="qrshape" track_state="1" group-type="" data-index="0">
                        <div class="close_pic js_close_pic" onclick="qrShapeCancel()" id="idfig0"><i class="icon-cross" onclick="qrShapeCancel()"></i></div>
                        <img src="<?php echo base_url() ?>/assets/images/qr_code_square.png" loading="lazy" data-type="li-img" onclick="qrShapeClick()" style="background-size: contain">
                      </li>
                      <li class="js_qr_action_item active" data-type="qrshape" track_state="1" group-type="" data-index="1">
                        <div class="close_pic js_close_pic" onclick="qrShapeCancel()" id="idfig1"><i class="icon-cross" onclick="qrShapeCancel()"></i></div><img src="<?php echo base_url() ?>/assets/images/qr_code_circle.png" loading="lazy" data-type="li-img" onclick="qrShapeClick()" style="background-size: contain">
                      </li>
                    </ul>
                  </div>
                  <div id="qr_shapeborder_options_border" class="qr_shapemore_options" style="padding-bottom:20px; ">
                    <div class="sizeContainer">
                      <div class="subheading mt-10">Shape Border Size</div>
                      <div class="bodySizeScale slidecontainer" style="width:100%;">
                        <input type="range" min="0" max="200" value="100" class="sliderInput" group-type="qrshapes" track_state="1" id="qr_shapeBorder" style="width:70%; " onchange="qr_shapeBorder()"> 
                        <a href="#" style="padding-left:20px;" class="small link" onclick="$('#qr_shapeBorder').val(100).trigger('change'); qrCodeState.qrShapeBorderSize = 100; return false; ">Reset</a>
                      </div>
                    </div>
                  </div>
    
                  <div id="qr_shapepadding_options" class="qr_shapemore_options1" style="padding-bottom:20px; ">
                    <div class="sizeContainer">
                      <div class="subheading mt-10">Padding Around Eyes</div>
                      <div class="bodySizeScale slidecontainer" style="width:100%;">
                        <input type="range" min="0" max="4" value="1" group-type="qrshapes" track_state="1" class="sliderInput" id="qr_shapePadding" onchange="qr_shapePadding()" style="width:70%; "> 
                        <a href="#" style="padding-left:20px;" class="small link" onclick="$('#qr_shapePadding').val(1).trigger('change'); qrCodeState.qrPaddingAroundEyes = 1; return false;">Reset</a>
                      </div>
                    </div>
                  </div>
    
                  <div id="qr_shapepadding_options" class="qr_shapemore_options1" style="padding-bottom:20px; ">
                    <div class="sizeContainer">
                        
                      <div class="custom-control custom-checkbox mt-10">
                        <input type="checkbox" id="colorPickerHeaderChkboxqr_shapePaddingColor" showhide_children="1" class="custom-control-input" onchange="qrColorCheckBox()">
                        <label class="custom-control-label subheading" for="colorPickerHeaderChkboxqr_shapePaddingColor">Padding Color Around Eyes</label>
                      </div>
      
                      <div id="colorPickerContainerqr_shapePaddingColor" class="colorPicker trans hide" parent_id="colorPickerHeaderChkboxqr_shapePaddingColor">
                        <div class="dflex items">
                          <div class="custom-control custom-radio">
                            <input showhide_children="1" id="colortypeSqr_shapePaddingColor" type="radio" name="qr_color_typeqr_shapePaddingColor" checked="" class="qr_bg_color_single custom-control-input" value="single" onchange="qrChangeRadio(1)">
                            <label class="custom-control-label" for="colortypeSqr_shapePaddingColor">Single Color</label>
                          </div>
                          <div class="custom-control custom-radio">
                            <input showhide_children="1" id="colortypeGqr_shapePaddingColor" type="radio" name="qr_color_typeqr_shapePaddingColor" class="qr_bg_color_gradient custom-control-input" value="gradient"  onchange="qrChangeRadio(2)">
                            <label class="custom-control-label" for="colortypeGqr_shapePaddingColor">Gradient Color</label>
                          </div>
                        </div>      
                        <div class="single_color dflex trans " parent_name="qr_color_typeqr_shapePaddingColor" parent_id="colortypeSqr_shapePaddingColor">
                          <div class="input-group">
                            <input type="color" value="#ffffff00" onchange="choose_color(event)"
                                id="colorpickerSqr_shapePaddingColor-input_select">
                            <input type="text" group-type="qrshapes" track_state="1" class="form-control border-left-0 picker-input" onchange="change_input_color()" id="colorpickerSqr_shapePaddingColor-input" placeholder="#ffffff00" value="#ffffff00">
                          </div>
                        </div>
                        <div class="gradient_color dflex trans hide" parent_name="qr_color_typeqr_shapePaddingColor" parent_id="colortypeGqr_shapePaddingColor">
                          <div class="input-group">
                            <input type="color" value="#f0f0ff40" onchange="choose_color(event)"
                                id="colorpickerG1qr_shapePaddingColor-input_select">
                            <input type="text" group-type="qrshapes" track_state="1" class="form-control border-left-0 picker-input" onchange="change_input_color()" id="colorpickerG1qr_shapePaddingColor-input" placeholder="#f0f0ff40" value="#f0f0ff40">
                          </div>
                          <div class="input-group">
                            <input type="color" value="#f0f0ff93" onchange="choose_color(event)"
                                id="colorpickerG2qr_shapePaddingColor-input_select">
                            <input type="text" group-type="qrshapes" track_state="1" class="form-control border-left-0 picker-input" onchange="change_input_color()" id="colorpickerG2qr_shapePaddingColor-input" placeholder="#f0f0ff93" value="#f0f0ff93">
                          </div>
                          <div class="input-group">
                            <select track_state="1" id="colorpickerGTqr_shapePaddingColor" name="gradientType" class="form-control" group-type="qrshapes" onchange="gradientSelect()">
                              <option value="linearX" selected="">Linear Gradient X</option>
                              <option value="linearY">Linear Gradient Y</option>
                              <option value="linearXY">Linear Gradient XY</option>
                              <option value="radial">Radial Gradient</option>
                            </select>
                          </div>
                        </div> 
                      </div>      
                    </div>
                  </div>
    
<!--                   <div id="qr_shapepadding_options_around" class="qr_shapemore_options" style="padding-bottom:20px; display: block;">
                    <div class="sizeContainer">
                      <div class="custom-control custom-checkbox mt-10">
                        <input type="checkbox" group-type="qrshapes" id="qr_shapeNeglectLTPadding" track_state="1" class="custom-control-input"  onchange="qrColorCheckBox()">
                        <label class="custom-control-label subheading" for="qr_shapeNeglectLTPadding">Remove Left Top Padding Around Eyes</label>
                      </div>    
                    </div>
                  </div> -->
                </div>
                                    <!-- color -->
                <div class="tab-pane fade" id="gntr_color_1" role="tabpanel" aria-labelledby="gntr_color_tab-1">
                  <div id="predefcolors" style="display:flex; padding-top:10px;flex-wrap:wrap;">


   
                    <div style="height:72px; width:72px;border-radius:50%;padding:5px;border:1px solid #cccccc99;margin-right:20px;margin-bottom:10px;cursor:pointer;" >
                      <div style="height:60px; width:60px;border-radius:50%;padding:35px 0 0 0;background:#222222;overflow:hidden;display:flex;" onclick="setPreSetColorOptions1(1);">
                        <div style="height:100%; width:50%;background:#A90808;">
                        </div>
                        <div style="height:100%; width:50%;background:#A90808;">
                        </div>
                      </div>
                    </div>
      
                    <div style="height:72px; width:72px;border-radius:50%;padding:5px;border:1px solid #cccccc99;margin-right:20px;margin-bottom:10px;cursor:pointer;" >
                      <div style="height:60px; width:60px;border-radius:50%;padding:35px 0 0 0;background:#6cb307;overflow:hidden;display:flex;" onclick="setPreSetColorOptions1(2);">
                        <div style="height:100%; width:50%;background:#0d1cb6;">
                        </div>
                        <div style="height:100%; width:50%;background:#0d1cb6;">
                        </div>
                      </div>
                    </div>
   
                    <div style="height:72px; width:72px;border-radius:50%;padding:5px;border:1px solid #cccccc99;margin-right:20px;margin-bottom:10px;cursor:pointer;" >
                      <div style="height:60px; width:60px;border-radius:50%;padding:35px 0 0 0;background:#EA367D;overflow:hidden;display:flex;" onclick="setPreSetColorOptions1(3);">
                        <div style="height:100%; width:50%;background:#A50DF9;">
                        </div>
                        <div style="height:100%; width:50%;background:#A50DF9;">
                        </div>
                      </div>
                    </div>
                   
                   
                    <div style="height:72px; width:72px;border-radius:50%;padding:5px;border:1px solid #cccccc99;margin-right:20px;margin-bottom:10px;cursor:pointer;" >
                      <div style="height:60px; width:60px;border-radius:50%;padding:35px 0 0 0;background:#6D8196;overflow:hidden;display:flex;" onclick="setPreSetColorOptions1(4);">
                        <div style="height:100%; width:50%;background:#AC2929;">
                        </div>
                        <div style="height:100%; width:50%;background:#AC2929;">
                        </div>
                      </div>
                    </div>
                   
                    <div style="height:72px; width:72px;border-radius:50%;padding:5px;border:1px solid #cccccc99;margin-right:20px;margin-bottom:10px;cursor:pointer;" >
                      <div style="height:60px; width:60px;border-radius:50%;padding:35px 0 0 0;background:#4f6367;overflow:hidden;display:flex;" onclick="setPreSetColorOptions1(5);">
                        <div style="height:100%; width:50%;background:#fe5f55;">
                        </div>
                        <div style="height:100%; width:50%;background:#fe5f55;">
                        </div>
                      </div>
                    </div>
                   
                    <div style="height:72px; width:72px;border-radius:50%;padding:5px;border:1px solid #cccccc99;margin-right:20px;margin-bottom:10px;cursor:pointer;" >
                      <div style="height:60px; width:60px;border-radius:50%;padding:35px 0 0 0;background:#4040bf;overflow:hidden;display:flex;" onclick="setPreSetColorOptions1(6);">
                        <div style="height:100%; width:50%;background:#A90808;">
                        </div>
                        <div style="height:100%; width:50%;background:#A90808;">
                        </div>
                      </div>
                    </div>
                   
                    <div style="height:72px; width:72px;border-radius:50%;padding:5px;border:1px solid #cccccc99;margin-right:20px;margin-bottom:10px;cursor:pointer;" >
                      <div style="height:60px; width:60px;border-radius:50%;padding:35px 0 0 0;background:#57337a;overflow:hidden;display:flex;" onclick="setPreSetColorOptions1(7);">
                        <div style="height:100%; width:50%;background:#238391;">
                        </div>
                        <div style="height:100%; width:50%;background:#238391;">
                        </div>
                      </div>
                    </div>
                   
                    <div style="height:72px; width:72px;border-radius:50%;padding:5px;border:1px solid #cccccc99;margin-right:20px;margin-bottom:10px;cursor:pointer;" >
                      <div style="height:60px; width:60px;border-radius:50%;padding:35px 0 0 0;background:#053225;overflow:hidden;display:flex;" onclick="setPreSetColorOptions1(8);">
                        <div style="height:100%; width:50%;background:#60a561;">
                        </div>
                        <div style="height:100%; width:50%;background:#60a561;">
                        </div>
                      </div>
                    </div>
                   
                    <div style="height:72px; width:72px;border-radius:50%;padding:5px;border:1px solid #cccccc99;margin-right:20px;margin-bottom:10px;cursor:pointer;">
                      <div style="height:60px; width:60px;border-radius:50%;padding:35px 0 0 0;background:#39395f;overflow:hidden;display:flex;" onclick="setPreSetColorOptions1(9);">
                        <div style="height:100%; width:50%;background:#416a59;">
                        </div>
                        <div style="height:100%; width:50%;background:#416a59;">
                        </div>
                      </div>
                    </div>
                   
                    <div style="height:72px; width:72px;border-radius:50%;padding:5px;border:1px solid #cccccc99;margin-right:20px;margin-bottom:10px;cursor:pointer;" >
                      <div style="height:60px; width:60px;border-radius:50%;padding:35px 0 0 0;background:#56c0fe;overflow:hidden;display:flex;" onclick="setPreSetColorOptions1(10);">
                        <div style="height:100%; width:50%;background:#EA367D;">
                        </div>
                        <div style="height:100%; width:50%;background:#EA367D;">
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="custom-control custom-checkbox mt-20">
                    <input type="checkbox" id="colorPickerHeaderChkboxFg" showhide_children="1" class="custom-control-input" checked=""  onchange="qrColorCheckBox()">
                    <label class="custom-control-label subheading" for="colorPickerHeaderChkboxFg">Foreground Color</label>
                  </div>
        
                  <div id="colorPickerContainerFg" class="colorPicker trans " parent_id="colorPickerHeaderChkboxFg">
                    <div class="dflex items">
                      <div class="custom-control custom-radio">
                        <input showhide_children="1" id="colortypeSFg" type="radio" name="qr_color_typeFg" checked="" class="qr_bg_color_single custom-control-input" value="single" onchange="qrChangeRadio(1)">
                        <label class="custom-control-label" for="colortypeSFg">Single Color</label>
                      </div>
                      <div class="custom-control custom-radio">
                        <input showhide_children="1" id="colortypeGFg" type="radio" name="qr_color_typeFg" class="qr_bg_color_gradient custom-control-input" value="gradient" onchange="qrChangeRadio(2)">
                        <label class="custom-control-label" for="colortypeGFg">Gradient Color</label>
                      </div>
                  </div>      
                  <div class="single_color dflex trans " parent_name="qr_color_typeFg" parent_id="colortypeSFg">
                      <div class="input-group">
                        <input type="color" value="#333333" onchange="choose_color(event)" id="colorpickerSFg-input_select">
                        <input type="text" group-type="color" track_state="1" class="form-control border-left-0 picker-input" id="colorpickerSFg-input" placeholder="#333333" value="#333333" onchange="change_input_color()">
                      </div>
                  </div>
                  <div class="gradient_color dflex trans hide" parent_name="qr_color_typeFg" parent_id="colortypeGFg">
                      <div class="input-group">
                        <input type="color" value="#333333FE" onchange="choose_color(event)" id="colorpickerG1Fg-input_select">
                        <input type="text" group-type="color" track_state="1" class="form-control border-left-0 picker-input" id="colorpickerG1Fg-input" placeholder="#333333FE" value="#333333FE" onchange="change_input_color()">
                      </div>
                      <div class="input-group">
                        <input type="color" value="#999999FE" onchange="choose_color(event)" id="colorpickerG2Fg-input_select">
                        <input type="text" group-type="color" track_state="1" class="form-control border-left-0 picker-input" id="colorpickerG2Fg-input" placeholder="#999999FE" value="#999999FE" onchange="change_input_color()">
                      </div>
                      <div class="input-group">
                        <select track_state="1" id="colorpickerGTFg" name="gradientType" class="form-control" group-type="color" onchange="gradientSelect()">
                          <option value="linearX" selected="">Linear Gradient X</option>
                          <option value="linearY">Linear Gradient Y</option>
                          <option value="linearXY">Linear Gradient XY</option>
                          <option value="radial">Radial Gradient</option>
                        </select>
                      </div>
                    </div> 
                  </div>  
<!--    
                  <div class="custom-control custom-checkbox mt-20">
                    <input type="checkbox" id="colorPickerHeaderChkboxFgS" showhide_children="1" class="custom-control-input"  onchange="qrColorCheckBox()">
                    <label class="custom-control-label subheading" for="colorPickerHeaderChkboxFgS">Custom Stroke Color</label>
                  </div>
        
                  <div id="colorPickerContainerFgS" class="colorPicker trans hide" parent_id="colorPickerHeaderChkboxFgS">
                    <div class="dflex items">
                      <div class="custom-control custom-radio">
                        <input showhide_children="1" id="colortypeSFgS" type="radio" name="qr_color_typeFgS" checked="" class="qr_bg_color_single custom-control-input" value="single" onchange="qrChangeRadio(1)">
                        <label class="custom-control-label" for="colortypeSFgS">Single Color</label>
                      </div>
                      <div class="custom-control custom-radio">
                        <input showhide_children="1" id="colortypeGFgS" type="radio" name="qr_color_typeFgS" class="qr_bg_color_gradient custom-control-input" value="gradient" onchange="qrChangeRadio(2)">
                        <label class="custom-control-label" for="colortypeGFgS">Gradient Color</label>
                      </div>
                    </div>      
                    <div class="single_color dflex trans " parent_name="qr_color_typeFgS" parent_id="colortypeSFgS">
                      <div class="input-group">
                        <input type="color" value="#333333" onchange="choose_color(event)" id="colorpickerSFgS-input_select">
                        <input type="text" group-type="color" track_state="1" class="form-control border-left-0 picker-input" id="colorpickerSFgS-input" placeholder="#333333" value="#333333" onchange="change_input_color()">
                      </div>
                    </div>
                    <div class="gradient_color dflex trans hide" parent_name="qr_color_typeFgS" parent_id="colortypeGFgS">
                      <div class="input-group">
                        <input type="color" value="#333333FE" onchange="choose_color(event)" id="colorpickerG1FgS-input_select">
                        <input type="text" group-type="color" track_state="1" class="form-control border-left-0 picker-input" id="colorpickerG1FgS-input" placeholder="#333333FE" value="#333333FE" onchange="change_input_color()">
                      </div>
                      <div class="input-group">
                        <input type="color" value="#999999FE" onchange="choose_color(event)" id="colorpickerG2FgS-input_select">
                        <input type="text" group-type="color" track_state="1" class="form-control border-left-0 picker-input" id="colorpickerG2FgS-input" placeholder="#999999FE" value="#999999FE" onchange="change_input_color()">
                      </div>
                      <div class="input-group">
                        <select track_state="1" id="colorpickerGTFgS" name="gradientType" class="form-control" group-type="color" onchange="gradientSelect()">
                          <option value="linearX" selected="">Linear Gradient X</option>
                          <option value="linearY">Linear Gradient Y</option>
                          <option value="linearXY">Linear Gradient XY</option>
                          <option value="radial">Radial Gradient</option>
                        </select>
                      </div>
                    </div> 
                  </div>  
-->    
                  <div class="custom-control custom-checkbox mt-20">
                    <input type="checkbox" id="colorPickerHeaderChkboxEye" showhide_children="1" class="custom-control-input"  onchange="qrColorCheckBox()">
                    <label class="custom-control-label subheading" for="colorPickerHeaderChkboxEye">Custom Eye Color</label>
                  </div>
        
                  <div id="colorPickerContainerEye" class="colorPicker trans hide" parent_id="colorPickerHeaderChkboxEye">
                    <div class="dflex items">
                      <div class="custom-control custom-radio">
                        <input showhide_children="1" id="colortypeSEye" type="radio" name="qr_color_typeEye" checked="" class="qr_bg_color_single custom-control-input" value="single" onchange="qrChangeRadio(1)">
                        <label class="custom-control-label" for="colortypeSEye">Single Color</label>
                      </div>
                      <div class="custom-control custom-radio">
                        <input showhide_children="1" id="colortypeGEye" type="radio" name="qr_color_typeEye" class="qr_bg_color_gradient custom-control-input" value="gradient" onchange="qrChangeRadio(2)">
                        <label class="custom-control-label" for="colortypeGEye">Gradient Color</label>
                      </div>
                    </div>      
                    <div class="single_color dflex trans " parent_name="qr_color_typeEye" parent_id="colortypeSEye">
                        <div class="input-group">
                            <input type="color" value="#333333" onchange="choose_color(event)" id="colorpickerSEye-input_select">
                            <input type="text" group-type="color" track_state="1" class="form-control border-left-0 picker-input" id="colorpickerSEye-input" placeholder="#333333" value="#333333" onchange="change_input_color()">
                        </div>
                    </div>
                    <div class="gradient_color dflex trans hide" parent_name="qr_color_typeEye" parent_id="colortypeGEye">
                        <div class="input-group">
                            <input type="color" value="#333333FE" onchange="choose_color(event)" id="colorpickerG1Eye-input_select">
                            <input type="text" group-type="color" track_state="1" class="form-control border-left-0 picker-input" id="colorpickerG1Eye-input" placeholder="#333333FE" value="#333333FE" onchange="change_input_color()">
                        </div>
                        <div class="input-group">
                            <input type="color" value="#999999FE" onchange="choose_color(event)" id="colorpickerG2Eye-input_select">
                            <input type="text" group-type="color" track_state="1" class="form-control border-left-0 picker-input" id="colorpickerG2Eye-input" placeholder="#999999FE" value="#999999FE" onchange="change_input_color()">
                        </div>
                        <div class="input-group">
                            <select track_state="1" id="colorpickerGTEye" name="gradientType" class="form-control" group-type="color" onchange="gradientSelect()">
                                <option value="linearX" selected="">Linear Gradient X</option>
                                <option value="linearY">Linear Gradient Y</option>
                                <option value="linearXY">Linear Gradient XY</option>
                                <option value="radial">Radial Gradient</option>
                            </select>
                        </div>
                    </div> 
                  </div>  
<!--    
                  <div class="custom-control custom-checkbox mt-20">
                    <input type="checkbox" id="colorPickerHeaderChkboxEyeS" showhide_children="1" class="custom-control-input"  onchange="qrColorCheckBox()">
                    <label class="custom-control-label subheading" for="colorPickerHeaderChkboxEyeS">Custom Eye Stroke Color</label>
                  </div>
        
                  <div id="colorPickerContainerEyeS" class="colorPicker trans hide" parent_id="colorPickerHeaderChkboxEyeS">
                    <div class="dflex items">
                      <div class="custom-control custom-radio">
                        <input showhide_children="1" id="colortypeSEyeS" type="radio" name="qr_color_typeEyeS" checked="" class="qr_bg_color_single custom-control-input" value="single" onchange="qrChangeRadio(1)">
                        <label class="custom-control-label" for="colortypeSEyeS">Single Color</label>
                      </div>
                      <div class="custom-control custom-radio">
                        <input showhide_children="1" id="colortypeGEyeS" type="radio" name="qr_color_typeEyeS" class="qr_bg_color_gradient custom-control-input" value="gradient" onchange="qrChangeRadio(2)">
                        <label class="custom-control-label" for="colortypeGEyeS">Gradient Color</label>
                      </div>
                    </div>      
                    <div class="single_color dflex trans " parent_name="qr_color_typeEyeS" parent_id="colortypeSEyeS">
                      <div class="input-group">
                        <input type="color" value="#333333" onchange="choose_color(event)" id="colorpickerSEyeS-input_select">
                        <input type="text" group-type="color" track_state="1" class="form-control border-left-0 picker-input" id="colorpickerSEyeS-input" placeholder="#333333" value="#333333" onchange="change_input_color()">
                      </div>
                    </div>
                    <div class="gradient_color dflex trans hide" parent_name="qr_color_typeEyeS" parent_id="colortypeGEyeS">
                      <div class="input-group">
                        <input type="color" value="#333333FE" onchange="choose_color(event)" id="colorpickerG1EyeS-input_select">
                        <input type="text" group-type="color" track_state="1" class="form-control border-left-0 picker-input" id="colorpickerG1EyeS-input" placeholder="#333333FE" value="#333333FE" onchange="change_input_color()">
                      </div>
                      <div class="input-group">
                        <input type="color" value="#999999FE" onchange="choose_color(event)" id="colorpickerG2EyeS-input_select">
                        <input type="text" group-type="color" track_state="1" class="form-control border-left-0 picker-input" id="colorpickerG2EyeS-input" placeholder="#999999FE" value="#999999FE" onchange="change_input_color()">
                      </div>
                      <div class="input-group">
                        <select track_state="1" id="colorpickerGTEyeS" name="gradientType" class="form-control" group-type="color" onchange="gradientSelect()">
                            <option value="linearX" selected="">Linear Gradient X</option>
                            <option value="linearY">Linear Gradient Y</option>
                            <option value="linearXY">Linear Gradient XY</option>
                            <option value="radial">Radial Gradient</option>
                        </select>
                      </div>
                    </div> 
                  </div>  
-->    
                  <div class="custom-control custom-checkbox mt-20">
                    <input type="checkbox" id="colorPickerHeaderChkboxEyeball" showhide_children="1" class="custom-control-input"  onchange="qrColorCheckBox()">
                    <label class="custom-control-label subheading" for="colorPickerHeaderChkboxEyeball">Custom Eyeball Color</label>
                  </div>
        
                  <div id="colorPickerContainerEyeball" class="colorPicker trans hide" parent_id="colorPickerHeaderChkboxEyeball">
                      <div class="dflex items">
                          <div class="custom-control custom-radio">
                              <input showhide_children="1" id="colortypeSEyeball" type="radio" name="qr_color_typeEyeball" checked="" class="qr_bg_color_single custom-control-input" value="single" onchange="qrChangeRadio(1)">
                              <label class="custom-control-label" for="colortypeSEyeball">Single Color</label>
                          </div>
                          <div class="custom-control custom-radio">
                              <input showhide_children="1" id="colortypeGEyeball" type="radio" name="qr_color_typeEyeball" class="qr_bg_color_gradient custom-control-input" value="gradient" onchange="qrChangeRadio(2)">
                              <label class="custom-control-label" for="colortypeGEyeball">Gradient Color</label>
                          </div>
                      </div>      
                      <div class="single_color dflex trans " parent_name="qr_color_typeEyeball" parent_id="colortypeSEyeball">
                          <div class="input-group">
                              <input type="color" value="#333333" onchange="choose_color(event)" id="colorpickerSEyeball-input_select">
                              <input type="text" group-type="color" track_state="1" class="form-control border-left-0 picker-input" id="colorpickerSEyeball-input" placeholder="#333333" value="#333333" onchange="change_input_color()">
                          </div>
                      </div>
                      <div class="gradient_color dflex trans hide" parent_name="qr_color_typeEyeball" parent_id="colortypeGEyeball">
                          <div class="input-group">
                              <input type="color" value="#000000FE" onchange="choose_color(event)" id="colorpickerG1Eyeball-input_select">
                              <input type="text" group-type="color" track_state="1" class="form-control border-left-0 picker-input" id="colorpickerG1Eyeball-input" placeholder="#000000FE" value="#000000FE" onchange="change_input_color()">
                          </div>
                          <div class="input-group">
                              <input type="color" value="#666666FE" onchange="choose_color(event)" id="colorpickerG2Eyeball-input_select">
                              <input type="text" group-type="color" track_state="1" class="form-control border-left-0 picker-input" id="colorpickerG2Eyeball-input" placeholder="#666666FE" value="#666666FE" onchange="change_input_color()">
                          </div>
                          <div class="input-group">
                              <select track_state="1" id="colorpickerGTEyeball" name="gradientType" class="form-control" group-type="color" onchange="gradientSelect()">
                                  <option value="linearX" selected="">Linear Gradient X</option>
                                  <option value="linearY">Linear Gradient Y</option>
                                  <option value="linearXY">Linear Gradient XY</option>
                                  <option value="radial">Radial Gradient</option>
                              </select>
                          </div>
                      </div> 
                  </div>  
    
                  <div class="custom-control custom-checkbox mt-20">
                      <input type="checkbox" id="colorPickerHeaderChkboxBg" showhide_children="1" class="custom-control-input"  onchange="qrColorCheckBox()">
                      <label class="custom-control-label subheading" for="colorPickerHeaderChkboxBg">Background Color</label>
                  </div>
        
                  <div id="colorPickerContainerBg" class="colorPicker trans hide" parent_id="colorPickerHeaderChkboxBg">
                      <div class="dflex items">
                          <div class="custom-control custom-radio">
                              <input showhide_children="1" id="colortypeSBg" type="radio" name="qr_color_typeBg" checked="" class="qr_bg_color_single custom-control-input" value="single" onchange="qrChangeRadio(1)">
                              <label class="custom-control-label" for="colortypeSBg">Single Color</label>
                          </div>
                          <div class="custom-control custom-radio">
                              <input showhide_children="1" id="colortypeGBg" type="radio" name="qr_color_typeBg" class="qr_bg_color_gradient custom-control-input" value="gradient" onchange="qrChangeRadio(2)">
                              <label class="custom-control-label" for="colortypeGBg">Gradient Color</label>
                          </div>
                      </div>      
                      <div class="single_color dflex trans " parent_name="qr_color_typeBg" parent_id="colortypeSBg">
                          <div class="input-group">
                              <input type="color" value="#FFFFFFFF" onchange="choose_color(event)" id="colorpickerSBg-input_select">
                              <input type="text" group-type="color" track_state="1" class="form-control border-left-0 picker-input" id="colorpickerSBg-input" placeholder="#FFFFFFFF" value="#FFFFFFFF" onchange="change_input_color()">
                          </div>
                      </div>
                      <div class="gradient_color dflex trans hide" parent_name="qr_color_typeBg" parent_id="colortypeGBg">
                          <div class="input-group">
                              <input type="color" value="#FFFFFFFE" onchange="choose_color(event)" id="colorpickerG1Bg-input_select">
                              <input type="text" group-type="color" track_state="1" class="form-control border-left-0 picker-input" id="colorpickerG1Bg-input" placeholder="#FFFFFFFE" value="#FFFFFFFE" onchange="change_input_color()">
                          </div>
                          <div class="input-group">
                              <input type="color" value="#e4f3fffe" onchange="choose_color(event)" id="colorpickerG2Bg-input_select">
                              <input type="text" group-type="color" track_state="1" class="form-control border-left-0 picker-input" id="colorpickerG2Bg-input" placeholder="#e4f3fffe" value="#e4f3fffe" onchange="change_input_color()">
                          </div>
                          <div class="input-group">
                              <select track_state="1" id="colorpickerGTBg" name="gradientType" class="form-control" group-type="color" onchange="gradientSelect()">
                                  <option value="linearX" selected="">Linear Gradient X</option>
                                  <option value="linearY">Linear Gradient Y</option>
                                  <option value="linearXY">Linear Gradient XY</option>
                                  <option value="radial">Radial Gradient</option>
                              </select>
                          </div>
                      </div> 
                  </div>  
                  <div style="text-align:right;color:var(--primary-color);margin-right:20px;cursor:pointer;" class="mt-20" onclick="recreateQRCode();"><i class="icon-refresh"></i> Recreate QR Code</div>
                </div>
 
                <div class="tab-pane fade" id="gntr_bgimg_1" role="tabpanel" aria-labelledby="gntr_shape_tab-1">
                  <div class="subheading">Add QR Code on Your Own Picture</div>
                  <div id="uploadLogo" class="mb-10 mt-10">Add your picture below, place and resize the drag element, and click on it (or hit refresh link)
                      <input style="display:none" name="imagefile[]" type="file" id="mainAddPic" accept="image/*" onchange="loadLogoImage(event, pictureUploaded)">
                  </div>
                  <div class="dflex">
                      <div id="imageDiv" style="min-height:250px;height:100%;width:100%;position:relative; display: inline-block;border: 1px dotted #ccccff; ">
                      <label style="display:flex;position:absolute; left:0; top:0;min-height:250px; height:100%; width:100%;z-index: 1;" class="">
                          <div class="custom-logoAddPic" style="margin:auto;display:inline-block" onclick="qrImageLoad()"><i class="icon-plus"></i> Click to Add Picture</div>
                      </label><div style="position: absolute; !important;z-index:10;">    
                      <img id="qrcode2Pic" style="margin-top: 0; max-height:100%;max-width:100%;" class="responsive-img" src="">
                      <div id="editing-panel" style="flex: 1">
                        <div class="rect" id = "myRect">
                          <div class="corner"></div>
                        </div>
                      </div>                      
                      </div></div> 
                  </div>
                  <div id="optionsContainer" class="hide mt-20">
                      <div class="custom-control custom-checkbox mt-20"><input type="checkbox" id="qr_use_auto_color" class="custom-control-input" showhide_children="1">
                          <label class="custom-control-label subheading" for="qr_use_auto_color">Auto Color</label>
                      </div>
                      <div id="useAutocolorContainer" class="dflex items trans hide" parent_id="qr_use_auto_color">
                          <div class="custom-control custom-radio">
                              <input id="autoColorType1" type="radio" track_state="1" name="autoColorType" class="custom-control-input" onchange="qrChangeRadio(1)" value="imageAvg">
                              <label class="custom-control-label" for="autoColorType1">Image Average</label>
                          </div>  
                          <div class="custom-control custom-radio">
                              <input id="autoColorType2" type="radio" track_state="1" name="autoColorType" class="custom-control-input" onchange="qrChangeRadio(2)" value="perCell">
                              <label class="custom-control-label" for="autoColorType2">Per Cell</label>
                          </div>
                          <div class="custom-control custom-radio">
                              <input id="autoColorType3" type="radio" track_state="1" name="autoColorType" class="custom-control-input" onchange="qrChangeRadio(3)" value="autoColorBW">
                              <label class="custom-control-label" for="autoColorType3">B/W Coloring</label>
                          </div>
                          <div class="custom-control custom-radio">
                              <input id="autoColorType4" type="radio" track_state="1" name="autoColorType" class="custom-control-input" onchange="qrChangeRadio(4)" value="autoColorInvert">
                              <label class="custom-control-label" for="autoColorType4">Inverse Coloring</label>
                          </div>                                          
                      </div>
                      
                      <div class="custom-control custom-checkbox mt-20">
                          <input type="checkbox" id="colorPickerHeaderChkboxuserPicture" showhide_children="1" class="custom-control-input" checked="">
                          <label class="custom-control-label subheading" for="colorPickerHeaderChkboxuserPicture">Fill White Space</label>
                      </div>
        
                      <div id="colorPickerContaineruserPicture" class="colorPicker trans " parent_id="colorPickerHeaderChkboxuserPicture">
                          <div class="dflex items">
                              <div class="custom-control custom-radio">
                                  <input showhide_children="1" id="colortypeSuserPicture" type="radio" onchange="qrChangeRadio(1)" name="qr_color_typeuserPicture" checked="" class="qr_bg_color_single custom-control-input" value="single">
                                  <label class="custom-control-label" for="colortypeSuserPicture">Single Color</label>
                              </div>
                              <div class="custom-control custom-radio">
                                  <input showhide_children="1" id="colortypeGuserPicture" type="radio" onchange="qrChangeRadio(2)" name="qr_color_typeuserPicture" class="qr_bg_color_gradient custom-control-input" value="gradient">
                                  <label class="custom-control-label" for="colortypeGuserPicture">Gradient Color</label>
                              </div>
                          </div>      
                          <div class="single_color dflex trans " parent_name="qr_color_typeuserPicture" parent_id="colortypeSuserPicture">
                              <div class="input-group">
                                  <input type="color" value="#ffffffff" onchange="choose_color(event)" id="colorpickerSuserPicture-input_select">
                                  <input type="text" group-type="color" track_state="1" class="form-control border-left-0 picker-input" id="colorpickerSuserPicture-input" placeholder="#ffffffff" value="#ffffffff" onchange="change_input_color()">
                              </div>
                          </div>
                          <div class="gradient_color dflex trans hide" parent_name="qr_color_typeuserPicture" parent_id="colortypeGuserPicture">
                              <div class="input-group">
                                  <input type="color" value="#f0f0ff90" onchange="choose_color(event)" id="colorpickerG1userPicture-input_select">
                                  <input type="text" group-type="color" track_state="1" class="form-control border-left-0 picker-input" id="colorpickerG1userPicture-input" placeholder="#f0f0ff90" value="#f0f0ff90" onchange="change_input_color()">
                              </div>
                              <div class="input-group">
                                  <input type="color" value="#f0f0fff3" onchange="choose_color(event)" id="colorpickerG2userPicture-input_select">
                                  <input type="text" group-type="color" track_state="1" class="form-control border-left-0 picker-input" id="colorpickerG2userPicture-input" placeholder="#f0f0fff3" value="#f0f0fff3" onchange="change_input_color()">
                              </div>
                              <div class="input-group">
                                  <select track_state="1" id="colorpickerGTuserPicture" name="gradientType" class="form-control" group-type="color" onchange="gradientSelect()">
                                      <option value="linearX" selected="">Linear Gradient X</option>
                                      <option value="linearY">Linear Gradient Y</option>
                                      <option value="linearXY">Linear Gradient XY</option>
                                      <option value="radial">Radial Gradient</option>
                                  </select>
                              </div>
                          </div> 
                      </div>  
    
        
                      <div class="custom-control custom-checkbox mt-20">
                          <input type="checkbox" id="colorPickerHeaderChkboxuserPictureDimmingColor" showhide_children="1" class="custom-control-input">
                          <label class="custom-control-label subheading" for="colorPickerHeaderChkboxuserPictureDimmingColor">QRCode Background Dimming</label>
                      </div>
        
                      <div id="colorPickerContaineruserPictureDimmingColor" class="colorPicker trans hide" parent_id="colorPickerHeaderChkboxuserPictureDimmingColor">
                          <div class="dflex items">
                              <div class="custom-control custom-radio">
                                  <input showhide_children="1" id="colortypeSuserPictureDimmingColor" type="radio" name="qr_color_typeuserPictureDimmingColor" checked="" class="qr_bg_color_single custom-control-input" onchange="qrChangeRadio(1)" value="single">
                                  <label class="custom-control-label" for="colortypeSuserPictureDimmingColor">Single Color</label>
                              </div>
                              <div class="custom-control custom-radio">
                                  <input showhide_children="1" id="colortypeGuserPictureDimmingColor" type="radio" name="qr_color_typeuserPictureDimmingColor" onchange="qrChangeRadio(2)" class="qr_bg_color_gradient custom-control-input" value="gradient">
                                  <label class="custom-control-label" for="colortypeGuserPictureDimmingColor">Gradient Color</label>
                              </div>
                          </div>      
                          <div class="single_color dflex trans " parent_name="qr_color_typeuserPictureDimmingColor" parent_id="colortypeSuserPictureDimmingColor">
                              <div class="input-group">
                                  <input type="color" value="#ffffff80" onchange="choose_color(event)" id="colorpickerSuserPictureDimmingColor-input_select">
                                  <input type="text" group-type="color" track_state="1" class="form-control border-left-0 picker-input" id="colorpickerSuserPictureDimmingColor-input" placeholder="#ffffff80" value="#ffffff80" onchange="change_input_color()">
                              </div>
                          </div>
                          <div class="gradient_color dflex trans hide" parent_name="qr_color_typeuserPictureDimmingColor" parent_id="colortypeGuserPictureDimmingColor">
                              <div class="input-group">
                                  <input type="color" value="#e6e6f32c" onchange="choose_color(event)" id="colorpickerG1userPictureDimmingColor-input_select">
                                  <input type="text" group-type="color" track_state="1" class="form-control border-left-0 picker-input" id="colorpickerG1userPictureDimmingColor-input" placeholder="#e6e6f32c" value="#e6e6f32c" onchange="change_input_color()">
                              </div>
                              <div class="input-group">
                                  <input type="color" value="#c3c3f99b" onchange="choose_color(event)" id="colorpickerG2userPictureDimmingColor-input_select">
                                  <input type="text" group-type="color" track_state="1" class="form-control border-left-0 picker-input" id="colorpickerG2userPictureDimmingColor-input" placeholder="#c3c3f99b" value="#c3c3f99b" onchange="change_input_color()">
                              </div>
                              <div class="input-group">
                                  <select track_state="1" id="colorpickerGTuserPictureDimmingColor" name="gradientType" class="form-control" group-type="color" onchange="gradientSelect()">
                                      <option value="linearX">Linear Gradient X</option>
                                      <option value="linearY">Linear Gradient Y</option>
                                      <option value="linearXY" selected="">Linear Gradient XY</option>
                                      <option value="radial">Radial Gradient</option>
                                  </select>
                              </div>
                          </div> 
                      </div>  
    
                  </div>
    <!--
                  <div id="secondUpload" style="display: flex;justify-content:space-between;" class="hide mt-20 items">
                      <div style="display:inline-block;">
                          <label for="mainAddPic" class="custom-logoAddPic">
                              <i class="icon-plus"></i> New Picture
                          </label>
                      </div>
                      <div style="display:inline-block;text-align:right;color:var(--primary-color);margin-right:20px;cursor:pointer;" class="mt-20" onclick="regenerateBgImageOption();"><i class="icon-cross font-14"></i> Reset Picture</div>
                      <div style="display:inline-block;text-align:right;color:var(--primary-color);margin-right:20px;cursor:pointer;" class="mt-20" onclick="recreateQRCode();"><i class="icon-refresh"></i> Recreate QR Code</div>
                  </div>
-->
                </div>
            </div>
          </div>
                            <!-- popup right -->
          <div class="col-md-5">
              <div class="popup_qr_preview_div" id="popup_qr_preview_div">
                  <div style="width:300px;height:300px;background-color: white;" >
                  <div class="popup_qr_preview" id="qrcodeDiv">
                      <img loading="lazy" id="qrcode" src="<?php echo base_url() ?>/assets/images/qr-code.png">
                  </div>
                  </div>
                  <div class="d-flex justify-content-between align-items-center">
                      <div class="custom-control custom-checkbox mt-10 mb-10 font-14 mr-5">
                          <input type="checkbox" id="filter3dEffect" class="custom-control-input" track_state="1" name="filter3dEffect">
                          <label class="custom-control-label font-14 subheading" for="filter3dEffect" style="font-size:14px !important;">Add 3d Effect</label>
                      </div>
                      <div class=" justify-content-between align-items-center d-none">
                          <a id="btn_download_design_as_json" href="#" class="btn btn-link font-14 p-0">
                             API json</a>
                          <i class="icon-help help-popup" help-id="download-api-json"></i>
                      </div>
                  </div><!--
                  <div class="d-flex justify-content-between ">
                      <div><a id="btn_set_default_design" href="#" class="btn btn-link font-14 p-0 btn_default_design" data-action="set"><i class="icon-default mr-1"></i>Set as default design </a><span class="ml-2 tippy help-icon-css"><i class="icon-help help-popup" help-id="default-design"></i></span></div> <br>
                      <div><a id="btn_apply_default_design" href="#" class="btn btn-link font-14 p-0 btn_default_design" data-action="apply"><i class="icon-qr_code_3 mr-1" style="vertical-align:inherit;"></i>Apply default</a><span class="ml-2 tippy help-icon-css"><i class="icon-help help-popup" help-id="apply-default"></i></span></div> <br>
                      <div><a id="btn_reset_default_design" href="#" class="btn btn-link font-14 p-0 btn_default_design" data-action="reset"><i class="icon-reset mr-1"></i>Reset</a> <span class="ml-2 tippy help-icon-css"><i class="icon-help help-popup" help-id="reset-design"></i></span></div> <br>
                  </div>
                  <a href="#" class="btn btn-primary " style="background:">More Sizes</a> <br>-->
                  <a onclick="moreSize()" id="download" class="btn btn-primary w-100 gntr_download_btn" style="width:250px !important;">Download Large Size <i class="icon-down-arrow ml-2"></i></a>
              </div>

          </div>
         
        </div>
      </div>
    </div>
  </div>
</div>


</body>