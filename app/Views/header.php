<!DOCTYPE html> 
<html lang="en-US">
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="icon" href="<?php echo base_url() ?>/assets/images/favicon.ico" type="image/x-icon" />
<link rel="shortcut icon" href="<?php echo base_url() ?>/assets/images/favicon.ico" type="image/x-icon" />
<meta property="og:title" content="Digital Business Card" />
<title>Digital Business Card</title>
<meta name="keywords" content="Digital Business Card, digital business cards, electronic business card" />
<meta name="description"
  content="Create your Digital Business Card like a pro in a few easy steps. Share your contact details with a single scan and expedite network growth." />




<link href='<?php echo base_url() ?>/assets/css/main.css' rel='stylesheet' type='text/css'>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href='//cdn07.qrcodechimp.com/assets/css/font.css?v=1671448629l' type='text/css' />
<link rel="stylesheet" href='<?php echo base_url() ?>/assets/css/scale.css' type='text/css' />
<link rel="stylesheet" href='<?php echo base_url() ?>/assets/css/light.css' type='text/css' />
<link rel="stylesheet" href='<?php echo base_url() ?>/assets/css/dbc-common.css' type='text/css' />
<link rel="stylesheet" href='<?php echo base_url() ?>/assets/css/style1.css' type='text/css' />

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href='<?php echo base_url() ?>/assets/css/style.css' type='text/css' />


<script src="<?php echo base_url() ?>/assets/js/jquery.min.js" type="text/javascript"></script>

<script type="text/javascript" src="<?php echo base_url() ?>/assets/js/bootstrap.min.js">
</script>
<script type="text/javascript" src="<?php echo base_url() ?>/assets/js/pdf.js"></script>
<script type="text/javascript" src="<?php echo base_url() ?>/assets/js/pdf.worker.js"></script>
<script src="<?php echo base_url() ?>/assets/js/qrcode.min.js"></script>
<script type="text/javascript" src="<?php echo base_url() ?>/assets/js/qr-code-styling.js"></script>
<!-- <script src="<?php echo base_url() ?>/assets/js/html2canvas.js"></script> -->
  <script src="https://html2canvas.hertzen.com/dist/html2canvas.js"></script>
<style>

.content_page_img {
  position: relative;
  top: 38px;
}

.btn-default1 {
  min-width: 120px;
  background-color: white;
  border-width: 0.5px;
  border-style: solid;
  border-top-left-radius: 7%;
  border-bottom-left-radius: 7%;
  border-top-right-radius: 0%;
  border-bottom-right-radius: 0%;
  border-color: #cfc6c6;
  height: 40px;
  position: initial !important;
  z-index: 0;
}

.mar-btm-0 {
  margin-bottom: 0px !important;
}

ul.dropdown-menu {
  width: 120px !important;
  --bs-dropdown-min-width: 7.5rem;
}

.none {
  display: none;
}

.modal-footer {
  display: flex;
  justify-content: space-between;
}

.modal-image {
  background: url('images/signup_popup_image.jpg');
  background-size: cover;
}

.myimg {
  width: 220px;
  height: 180px;
  margin: 10px;
}

.myimg:hover {
  cursor: pointer;
}

.img_active {
  border: solid 2px blue;
  border-radius: 10px;
}

.list-group-item {
  border-width: 0.5px !important;
}

.btn-primary {
  width: 120px !important;
}

.mySticky{
  position: fixed;
  top: 0;
}

.url-label{
  border-width: 1px;
  border-color:#dee2e6;
  border-right-color: white;
  border-radius: 4px;
  border-style:solid; 
  padding:7px 0px 7px 0px;
  background-color:#dee2e6;
  border-right: 0px;
}

.url-input{
  width:50%;
  border-top-left-radius:0px;
  border-bottom-left-radius:0px;
  border-left: 0px;
}
input[type=color],
input[type=text] {
  height: 40px !important;
}

#qrcode-container {
    width: 256px;
    height: 256px;
}

.qrcode {
    padding: 0px;
    background-color: transparent;
    position: relative;
}

.qrcode img {
    margin: 0 auto;
}



.rect{
    position: relative;
    background-color: #5868bf;
    left: 20px;
    top: 20px;
    width: 100px;
    height: 100px;
    z-index: 20;
    opacity: 0.4;
}

.corner{
    position: absolute;
    right: 0px;
    bottom: 0px;
    width: 8px;
    height: 8px;
    background-color: black;
}

.corner:hover{
    cursor: pointer;
}

#qrcode-container{
    position: absolute;
    left: 20px;
    top: 20px;
    width: 100px;
    height: 100px;
}

.shadow{
    -webkit-filter: drop-shadow( 3px 3px 2px rgba(0, 0, 0, .7));
    filter: drop-shadow( 3px 3px 2px rgba(0, 0, 0, 1));
}

.download_qr_size>li.active{
  background-color: #007bff;
  color: white !important;
}
</style>
</head>

<body id="myBody" >

  <div class="wrapper">
    <div id="content">
      <section>
        <div class="container mt-4">
          <div class="row">
            <div class="col-md-8 pr-0 mpr-15">
              <div class="card card-fconfig cardWithShadow">
                <div class="card-header">
                  <div class="d-flex justify-content-between align-items-center">
                    <h1 class="gntr_form_title pageTitle mb-0">Digital Business Card</h1>
                    <div class="text-center d-flex justify-content-center mt-1 ">
                      <label class="bulk_switch switch d-none">
                        <input type="checkbox" id="bulk_upload_switch" data-dynamic="A">
                        <span class="slider round"></span>
                      </label>
                      <div class="ml-2 d-none">Bulk Upload</div>
                      <span class="ml-2 tippy help-icon-css d-none"><i class="icon-help help-popup"
                          help-id="bulkId-digital-business-card"></i></span>
                    </div>
                  </div>
                </div>

                <div class="design_nav">
                  <ul class="nav nav-tabs nav-tabs-bottom justify-content-center">
                    <li class="nav-item"><a href="#page-tab-input-content" onClick="viewTab(1)" id="page-tab-input"
                        class="nav-link" data-toggle="tab"><span>1</span>Content</a></li>
                    <li class="nav-item"><a href="#page-tab-style-design-content" onClick="viewTab(2)"
                        id="page-tab-style-design" class="nav-link" data-toggle="tab"><span>2</span>Settings</a></li>

                    <li class="nav-item"><a href="#page-tab-qr-design-content" onClick="viewTab(3)"
                        id="page-tab-qr-design" class="nav-link" data-toggle="tab"><span>3</span>QR Code</a></li>
                    <li class="nav-item d-none"><a href="#page-tab-bulk-upload-content" id="page-tab-bulk-upload"
                        class="nav-link" data-toggle="tab"><span>4</span>Bulk Upload</a></li>
                  </ul>
                </div>

                <div class="card-body tab-content" id="page-content">
                  <div class="tab-pane fade show active" id="page-tab-input-content" role="tabpanel"
                    aria-labelledby="page-tab-input">
                    <form class="page_form easin ">
                      <input type="hidden" class="notranslate" name="id" value="new">
                      <input type="hidden" class="notranslate" name="qr_type" value="D">
                      <input type="hidden" class="notranslate" name="short_url" value="">
                      <input type="hidden" class="notranslate" name="page" value="digital-business-card">
                      <input type="hidden" class="notranslate" name="template_name" value="">
                      <div class="form_template_card">
                        <div class="mb-4">
                          <h5>Your Page URL <span class="font-12 text-muted">(Once saved, cannot be changed
                              later)</span></h5>
                          <div class="">
                            <div class="input-group notranslate">
                              <div class="input-group-prepend">
                                <button style="color: var(--secondary-color-1);padding-top: 0px;padding-bottom: 0px;"
                                  class="btn-default1 rounded-0 short_url_slug_prepend notranslate"
                                  type="button">mycard/</button>
                              </div>
                              <input type="text" class="form-control notranslate" placeholder="" aria-label=""
                                id="short_url_input" aria-describedby="basic-addon1" value="ro8pn7v5gz9t">
                            </div>
                            <span class="font-12 text-muted">*minimum 5 characters required</span>
                          </div>
                        </div>

                        <section class="mb-5">
                          <div class="d-flex justify-content-between align-items-center">
                            <h5 class="mb-2">Page Template <span class="font-12 text-muted">(Choose your favorite
                                template)</span>
                            </h5>
                            <div class="d-none"><a class="btn btn-link" href="#">View All</a></div>
                          </div>
                          <div class="container">
                            <div class="row">
                              <div class="col-md-12 text-center">
                                <div id="qrc_template_slider">
                                  <div class="page_template_wrapper">
                                    <div class="page_template_card active" data-index="1">
                                      <div class="overlay">
                                        <div class="card_tick">
                                          <i class="icon-checkmark"></i>
                                        </div>
                                      </div>
                                      <img class="img-fluid w-100"
                                        src="images/digital-business-cards/digital-business-card-template-2.png"
                                        alt="Digital business card template for the Food BLoggers">
                                    </div>

                                    <div class="page_template_card " data-index="2">
                                      <div class="overlay">
                                        <div class="card_tick">
                                          <i class="icon-checkmark"></i>
                                        </div>
                                      </div>
                                      <img class="img-fluid w-100"
                                        src="images/digital-business-cards/digital-business-card-template-3.png"
                                        alt="Digital business card template for the Explorers">
                                    </div>

                                    <div class="page_template_card " data-index="3">
                                      <div class="overlay">
                                        <div class="card_tick">
                                          <i class="icon-checkmark"></i>
                                        </div>
                                      </div>
                                      <img class="img-fluid w-100"
                                        src="images/digital-business-cards/digital-business-card-template-5.png"
                                        alt="Digital business card template for the Professionals">
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>