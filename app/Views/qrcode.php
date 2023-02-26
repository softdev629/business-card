
<div class="tab-pane fade " id="page-tab-qr-design-content" role="tabpanel" aria-labelledby="page-tab-qr-design">
  <div class="card collapse_card mb-3 qr_page_component_card list-group-item" data-type="undefined">
    <div class="card-header d-flex justify-content-between" aria-expanded="true">
      <h5 class="mb-0">
        <a class="btn btn-link ">
          Cutomize QR Code
        </a>
      </h5>
    </div>
    <div class=" show secondary_color">
      <div class="card-body">
        <div class="row">
          <div class="col-md-3">
            <div class="qr_design_card_wrapper selected" onclick="showDesignPopUp('#gntr_qrshapes_tab-1'); return false;">
              <div class="">QR SHAPES</div>
              <div class="d-flex justify-content-center align-items-center qr_design_card">
                <a class="w-100"><img src="<?php echo base_url() ?>/assets/images/qr_code_square.png" class="img-fluid"></a>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="qr_design_card_wrapper selected" onclick="showDesignPopUp('#gntr_color_tab-1'); return false;">
              <div class="">COLORS</div>
              <div class="d-flex justify-content-center align-items-center qr_design_card"> 
                <a class="qr_color_panel_wr">
                  <div class="qr_color_panel_1" style="background: #333333">
                  </div>
                  <div class="qr_color_panel_2" style="background: #333333">
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <div class="qr_design_card_wrapper " onclick="showDesignPopUp('#gntr_bgimg_tab-1'); return false;">
              <div class="">DECORATE PICTURE</div>
              <div class="d-flex justify-content-center align-items-center qr_design_card"><a class="w-100"><img src="<?php echo base_url() ?>/assets/images/upload_qr.png" class="img-fluid"></a></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="tab-pane fade none" id="page-tab-bulk-upload-content" role="tabpanel"
  aria-labelledby="page-tab-qr-design">
  <div class="">
    <div class="p-2">
      <img src="<?php echo base_url() ?>/assets/images/how_it_works_bulkupload.png" class="img-fluid" alt="How bulk upload works?" data-xblocker="processing" style="visibility: hidden;">
    </div>
    <div class="py-4">
      <div class="row">
        <div class="col-md-12  py-3 d-none"><a class="btn btn-link p-0" href="#">Watch the video to learn more about Bulk Upload <i class="icon-play2"></i></a>
        </div>
        <div class="col-md-2  py-3">Step 1 
          <span class="ml-2 tippy"><i class="icon-help help-popup"
                help-id="digital-business-card-bulk-step-sample-file"></i></span>
        </div>
        <div class="col-md-10  py-3">
          <a class="btn btn-link p-0 mb-2"
            href="user/services/apia735.json?cmd=getBulkUploadTemplate&amp;page_type=digital-business-card"
            id="btn_dowload_bulk_sample1">Download Sample File</a>
        </div>
        <div class="col-md-2 border-top py-3">Step 2 
          <span class="ml-2 tippy">
            <i class="icon-help help-popup" help-id="digital-business-card-bulk-step-filemanager">
            </i>
          </span>
        </div>
        <div class="col-md-10 border-top py-3">
          <a class="btn btn-link p-0 mb-2 " href="#" id="btn_bulk_upload_filemanager"><i
              class="icon-icons_line_upload mr-2"></i>Upload Images</a>
        </div>
        <div class="col-md-2 border-top py-3">Step 3
          <span class="ml-2 tippy"><i class="icon-help help-popup"
              help-id="digital-business-card-bulk-step-upload"></i></span>
        </div>
        <div class="col-md-10 border-top py-3">
          <div class="mb-2">Upload</div>
          <div class="d-flex align-items-center" id="upload_file_container_comp">
            <div class=" qr_file_upload mr-2">
              <i class="icon-uploadfile"></i>
            </div>
            <div class="">Upload Data File</div>
          </div>
          <input type="file" class="d-none" id="bulk_upload_input_comp"
            accept=".csv,.tsv,.xls,.xlsx,.ods">
          <div class="text-muted mt-2 mb-3">Please upload the CSV, XLS or XLSX file</div>
          <div class="d-none">
            <ul class="list-unstyled">
              <li>1. Column A: QR Code Name/Filename</li>
              <li>1. Column B: Website URL</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


                </div>
              </div>
            </div>

