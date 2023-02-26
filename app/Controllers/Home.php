<?php
           
namespace App\Controllers;
use CodeIgniter\Controller;
use App\Models\QrchimpModel;

class Home extends BaseController
{
    public function __construct() {
        $this->qrchimpModel = new QrchimpModel();
    }
    public function index()
    {
        echo view('header');
        echo view('profile');
        echo view('heading');
        echo view('contacts');
        echo view('images');
        echo view('socialLinks');
        echo view('webLinks');
        echo view('settings');
        echo view('qrcode');
        echo view('preview');
        echo view('modals');
        echo view('footer');    

    }

    public function qrFileSave()
    {
        helper(['form', 'url']);


          $data = array();

         if($file = $this->request->getFile('file')) 
         {

            if ($file->isValid() && ! $file->hasMoved()) {
               $name = $file->getName();
               $ext = $file->getClientExtension();
               $newName = $file->getRandomName();

               $file->move('../public/uploads', $newName);

               $filepath = base_url()."/uploads/".$newName;

               $data['success'] = 1;
               $data['message'] = 'Uploaded Successfully!';
               $data['filepath'] = $filepath;
               $data['extension'] = $ext;

            }else{
               $data['success'] = 2;
               $data['message'] = 'File not uploaded.'; 
            }

         }else{
            $data['success'] = 2;
            $data['message'] = 'File not uploaded.';
         }
     
      return $this->response->setJSON($data);        
    }

    public function saveFileData()
    {
        helper(['form', 'url']);


          $data = array();

         if($file = $this->request->getFile('file')) 
         {

            if ($file->isValid() && ! $file->hasMoved()) {
               $name = $file->getName();
               $ext = $file->getClientExtension();
               $newName = $file->getRandomName();

               $file->move('../public/uploads', $newName);

               $filepath = base_url()."/uploads/".$newName;

               $data['success'] = 1;
               $data['message'] = 'Uploaded Successfully!';
               $data['filepath'] = $filepath;
               $data['extension'] = $ext;

            }else{
               $data['success'] = 2;
               $data['message'] = 'File not uploaded.'; 
            }

         }else{
            $data['success'] = 3;
            $data['message'] = 'File not uploaded.';
         }
     
      return $this->response->setJSON($data);


    }

    public function saveChimpData()
    {
        helper(['form', 'url']);
        $ret = $_POST["chimpData"];
        $linkoArray = array_pop($ret);

        $templateArray = array_pop($ret);
        //if url isn't identify
        if($this->qrchimpModel->url_identify_check($linkoArray['value']) == false)
        {
           $ret = [
            'success' => false,
            'data' => true,
            'msg' => "Thanks for contact us. We get back to you"
           ];
    
          return $this->response->setJSON($ret);
        }

        $template = [
            'template' => $templateArray['value'],
            'linkoPage' => $linkoArray['value']
        ];


        $this->qrchimpModel->insert_data_to_template($template);

        foreach ($ret as $value) {
            $qrchimp = [
                'linkoPage' => $linkoArray['value'],
                'type' => $value['type']
            ];
            
            $qrchimpId = $this->qrchimpModel->insert_data_to_qrchimp($qrchimp);
            
            if($value['type'] == 'profile')
            {
                //upload avatarUrl
                $profileState = [
                    'enabled' =>$value['value']['enabled'],
                    'name'=>$value['value']['name'],
                    'title'=>$value['value']['title'],
                    'company'=>$value['value']['company'],
                    'avatarEnabled'=>$value['value']['avatar']['enabled'],
                    'avatarUrl'=>$value['value']['avatar']['url'],
                    'contactsEnabled'=>$value['value']['contacts']['enabled'],
                    'linkoPage' =>$linkoArray['value']
                ];

                $profilestateId = $this->qrchimpModel->insert_data_to_profileState($profileState);
                
                foreach ($value['value']['contacts']['info'] as $value1) 
                {
                        //get profileState id
                        $contactsInfo = [
                            'linkoPage' =>$linkoArray['value'],
                            'type'=>$value1['type'],
                            'value'=>$value1['value'],
                            'profilestateId'=>$profilestateId
                        ];

                        $this->qrchimpModel->insert_data_to_contactsInfo($contactsInfo);
                }
                
            }
            elseif($value['type'] == 'heading')
            {
                $headingState = [
                    'linkoPage' =>$linkoArray['value'],
                    'enabled'=>$value['value']['enabled'],
                    'title'=>$value['value']['title'],
                    'description'=>$value['value']['description'],
                    'cardBack'=>$value['value']['cardBack']
                ];

                $this->qrchimpModel->insert_data_to_headingState($headingState);
            }
            elseif($value['type'] == 'contact')
            {
                //upload images
                $contactUsState = [
                    'linkoPage'=>$linkoArray['value'],
                    'enabled'=>$value['value']['enabled'],
                    'title'=>$value['value']['title'],
                    'images'=>$value['value']['images'],
                    'floatingButtonEnabled'=>$value['value']['floatingButton']['enabled'],
                    'floatingButtonText'=>$value['value']['floatingButton']['text'],
                    'cardBack'=> $value['value']['cardBack']           
                ];

                $coutactusstateId = $this->qrchimpModel->insert_data_to_contactUsState($contactUsState);


                foreach ($value['value']['contactItems'] as $value1) 
                {         
                    //get contact Us State id
                    if($value1['type'] == 'Address' || $value1['type'] == 'Email')
                    {
                        $contactItems = [
                            'linkoPage'=>$linkoArray['value'],
                            'contactusstateId'=>$coutactusstateId,
                            'type'=>$value1['type'],
                            'dataValue'=>$value1['data']['value'],
                            'dataLabel'=>$value1['data']['label'],
                            'dataAddressLine1'=>$value1['data']['addressLine1'],
                            'dataAddressLine2'=>$value1['data']['addressLine2'],
                            'dataCity'=>$value1['data']['city'],
                            'dataState'=>$value1['data']['state'],
                            'dataCountry'=>$value1['data']['country'],
                            'dataZipcode'=>$value1['data']['zipcode'],
                            'actionButtonEnabled'=>$value1['actionButton']['enabled'],
                            'actionButtonText'=>$value1['actionButton']['text'],
                            'actionButtonUrl'=>$value1['actionButton']['url']
                        ];
                        $this->qrchimpModel->insert_data_to_contactItems($contactItems);  
                    }
                    else
                    {

                        $contactItems = [
                            'linkoPage'=>$linkoArray['value'],
                            'contactusstateId'=>$coutactusstateId,
                            'type'=>$value1['type'],
                            'dataValue'=>$value1['data']['value'],
                            'dataLabel'=>$value1['data']['label'],
                            'dataAddressLine1'=>$value1['data']['addressLine1'],
                            'dataAddressLine2'=>$value1['data']['addressLine2'],
                            'dataCity'=>$value1['data']['city'],
                            'dataState'=>$value1['data']['state'],
                            'dataCountry'=>$value1['data']['country'],
                            'dataZipcode'=>$value1['data']['zipcode'],
                            'actionButtonEnabled'=>$value1['actionButton']['enabled'],
                            'actionButtonText'=>$value1['actionButton']['text'],
                            'actionButtonUrl'=>$value1['actionButton']['url']

                        ];
                        $this->qrchimpModel->insert_data_to_contactItems($contactItems); 

                    }
                }    


            }
            elseif($value['type'] == 'images')
            {
                $imageState= [
                    'linkoPage'=>$linkoArray['value'],
                    'enabled'=>$value['value']['enabled'],
                    'headerEnable'=>$value['value']['headerEnable'],
                    'headerTitle'=>$value['value']['header']['title'],
                    'headerDescription'=>$value['value']['header']['description'],
                    'viewType'=>$value['value']['viewType'],
                    'cardBack'=>$value['value']['cardBack']
                ];

                $imagestateId = $this->qrchimpModel->insert_data_to_imageState($imageState);
                foreach ($value['value']['photos'] as $value1) 
                {                                
                    //upload url
                    $photos=[
                        'linkoPage'=>$linkoArray['value'],
                        'imagestateId'=>$imagestateId,
                        'state'=>$value1['state'],
                        'url'=>$value1['url']
                    ];

                    $this->qrchimpModel->insert_data_to_photos($photos);
                }
            }
            elseif($value['type'] == 'socialLink')
            {
                $socialLinksState = [
                    'linkoPage'=>$linkoArray['value'],
                    'enabled'=>$value['value']['enabled'],
                    'headerEnable'=>$value['value']['headerEnable'],
                    'headerTitle'=>$value['value']['header']['title'],
                    'headerDescription'=>$value['value']['header']['description'],
                    'cardBack'=>$value['value']['cardBack']
                ];

                $sociallinksstateId = $this->qrchimpModel->insert_data_to_socialLinksState($socialLinksState);
                
                //upload logo
                foreach ($value['value']['links'] as $value1) 
                {   
                    $socialLinks = [
                        'linkoPage'=>$linkoArray['value'],
                        'sociallinksstateId'=>$sociallinksstateId,
                        'type'=>$value1['type'],
                        'url'=>$value1['url'],
                        'logo'=>$value1['logo'],
                        'title'=>$value1['title'],
                        'subtitleEnabled'=>$value1['subtitle']['enabled'],
                        'subtitleValue'=>$value1['subtitle']['value']
                    ];

                    $this->qrchimpModel->insert_data_to_socialLinks($socialLinks);
                }
            }
            elseif($value['type'] == 'webLinks')
            {
                $linksState = [
                    'linkoPage'=>$linkoArray['value'],
                    'enabled'=>$value['value']['enabled'],
                    'headerEnabled'=>$value['value']['headerEnabled'],
                    'headerTitle'=>$value['value']['header']['title'],
                    'headerDescription'=>$value['value']['header']['description'],
                    'cardBack'=>$value['value']['cardBack']
                ];

                $linksstateId = $this->qrchimpModel->insert_data_to_linksState($linksState);
                foreach ($value['value']['links'] as $value1) 
                {                                                
                    //upload image
                    $webLinks=[
                        'linkoPage'=>$linkoArray['value'],
                        'linksstateId'=>$linksstateId,
                        'enabled'=>$value1['enabled'],
                        'link'=>$value1['link'],
                        'image'=>$value1['image'],
                        'title'=>$value1['title'],
                        'subtitleEnabled'=>$value1['subtitle']['enabled'],
                        'subtitleValue'=>$value1['subtitle']['value']
                    ];

                    $this->qrchimpModel->insert_data_to_webLinks($webLinks);
                }
            }
            elseif($value['type'] == 'custom')
            {
                $customState=[
                    'enabled'=>$value['value']['enabled'],
                    'headerEnabled'=>$value['value']['header']['enabled'],
                    'headerTitle'=>$value['value']['header']['title'],
                    'headerDescription'=>$value['value']['header']['description'],
                    'linkoPage'=>$linkoArray['value'],
                    'cardEnabled'=>$value['value']['cardEnabled']
                ];

                $customstateId = $this->qrchimpModel->insert_data_to_customState($customState);
                foreach ($value['value']['customItems'] as $value1) 
                {                                                
                    
                    //get customstate id
                    $customItems=[
                        'linkoPage'=>$linkoArray['value'],
                        'customstateId'=>$customstateId,
                        'key'=>$value1['key'],
                        'value'=>$value1['value']
                    ];

                    $this->qrchimpModel->insert_data_to_customItems($customItems);                
                    
                }
            }
            elseif($value['type'] == 'pdf')
            {
                $pdfState=[
                    'linkoPage'=>$linkoArray['value'],
                    'enabled'=>$value['value']['enabled'],
                    'headerEnabled'=>$value['value']['header']['enabled'],
                    'headerTitle'=>$value['value']['header']['title'],
                    'headerDescription'=>$value['value']['header']['description'],
                    'cardEnabled'=>$value['value']['cardEnabled']
                ];

                $pdfstateId = $this->qrchimpModel->insert_data_to_pdfState($pdfState);
                foreach ($value['value']['pdfItems'] as $value1) 
                {                                                
                    //upload pdfAvatar, url
                    $pdfItems=[
                        'linkoPage'=>$linkoArray['value'],
                        'pdfstateId'=>$pdfstateId,
                        'url'=>$value1['url'],
                        'pdfAvatar'=>$value1['pdfAvatar'],
                        'title'=>$value1['title'],
                        'description'=>$value1['description'],
                        'subTitleEnabled'=>$value1['subTitleEnabled']
                    ];

                    $this->qrchimpModel->insert_data_to_pdfItems($pdfItems);  

                }
            }
            elseif($value['type'] == 'video')
            {
                $videoState=[
                    'linkoPage'=>$linkoArray['value'],
                    'enabled'=>$value['value']['enabled'],
                    'headerEnabled'=>$value['value']['header']['enabled'],
                    'headerTitle'=>$value['value']['header']['title'],
                    'headerDescription'=>$value['value']['header']['description'],
                    'type'=>$value['value']['type'],
                    'videoLink'=>$value['value']['videoLink'],
                    'cardEnabled'=>$value['value']['cardEnabled']
                ];

                $this->qrchimpModel->insert_data_to_videoState($videoState);                
            }
            elseif($value['type'] == 'button')
            {
                $buttonState=[
                    'linkoPage'=>$linkoArray['value'],
                    'enabled'=>$value['value']['enabled'],
                    'headerEnabled'=>$value['value']['header']['enabled'],
                    'headerTitle'=>$value['value']['header']['title'],
                    'headerDescription'=>$value['value']['header']['description'],
                    'buttonLabel'=>$value['value']['buttonLabel'],
                    'buttonLink'=>$value['value']['buttonLink'],
                    'cardEnabled'=>$value['value']['cardEnabled']
                ];

                $this->qrchimpModel->insert_data_to_buttonState($buttonState);                
            }
            elseif($value['type'] == 'setting')
            {//upload pageloader
                $settingState=[
                    'linkoPage'=>$linkoArray['value'],
                    'colorsPrimaryColor'=>$value['value']['colors']['primaryColor'],
                    'colorsSecondaryColor'=>$value['value']['colors']['secondaryColor'],
                    'colorsPrimaryProfileTextColor'=>$value['value']['colors']['primaryProfileTextColor'],
                    'colorsSecondaryProfileTextColor'=>$value['value']['colors']['secondaryProfileTextColor'],
                    'colorsPrimaryTextColor'=>$value['value']['colors']['primaryTextColor'],
                    'colorsSecondaryTextColor'=>$value['value']['colors']['secondaryTextColor'],
                    'fontStyle'=>$value['value']['fontStyle'],
                    'fontName'=>$value['value']['fontName'],
                    'pageLoader'=>$value['value']['pageLoader']
                ];

                $this->qrchimpModel->insert_data_to_settingState($settingState);                
            }
        }


       $data = [
        'success' => true,
        'data' => true,
        'msg' => "Thanks for contact us. We get back to you"
       ];
 
      return $this->response->setJSON($data);
    }
}   
