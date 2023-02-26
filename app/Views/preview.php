           <div class="col-md-4"><div >
              <div class="card mb-3 qr_code_page_preview new_ui cardWithShadow "  >
                <div class="card-header d-flex justify-content-between align-items-center notranslate"
                  id="short_url_actions">
                  <div class="short_url_data">mycard/ro8pn7v5gz9t</div>
                  <div class="">
                    <a href="#" onclick="copyTextToClipboard(''); return false;"
                      class="btn btn-link short_url_data_copy disabled"><i class="icon-ic_content_copy"></i></a>
                    <a target="_blank" href="http://mycard/ro8pn7v5gz9t"
                      class="btn btn-link short_url_data_tab disabled"><i class="icon-new_tab_3"></i></a>
                  </div>
                </div >
                <div id = "mySticky">
<!--
                  <div class="card-header d-none justify-content-center align-items-center" id="preview_text">
                    <div class="p-2" style="line-height: 1.7;">Preview</div>
                  </div>
-->
                  <div class="preview_nav">
                    <div class="btn-group btn-group-sm" role="group">
                      <button type="button" class="btn btn-light active" data-view="page"
                        onclick="landingPagePreview()"><i class="icon-view_1"></i></button>
                      <button type="button" class="btn btn-light" data-view="qr" onclick="qrPagecodePreview()"><i
                          class="icon-qr_code_3"></i></button>
                    </div>
                    <div class="">
                      <button type="button" class="btn btn-primary btn-sm submit_qr_code " onclick="saveTemplate()">Save</button>
                    </div>
                  </div>
                  <div class="card-body p-2" >
                    <div class="landing_page_preview_frame" style="">
                      <div class="device-header"></div>
                      <div class="qr_page_preview qrp_prev_wrapper thinScrollBar container container-fluid" style="padding: 0px !important;"><div class="row" style="position: relative;"><div class="col-md-12" id="qr_page_prev" style="position:absolute;top:-10px;"></div></div></div>
                    </div>
                    <iframe id="myIframe" style="display:none"></iframe>
                    <div class="qr_page_code_preview " style="display:none;">
                      <div class="qr_page_pre_wrapper ">
                        <div class="col-md-12">
                          <div class="preview_qr_image p-0 mb-5 mt-4 "><img id="qrcode_preview" alt="Qr Code Preview" style="width:100%;height: 100%;" 
                              src="<?php echo base_url() ?>/assets/images/qr-code.png" />
                          </div>
                          <a onclick="moreSize()" class="btn btn-outline-primary w-100 gntr_download_btn">Save &amp; Download<i
                              class="icon-down-arrow ml-2"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div></div>
          </div>

        </div>
    </div>
    </section>
  </div>
  </div>