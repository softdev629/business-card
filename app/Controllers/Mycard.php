<?php

namespace App\Controllers;
use CodeIgniter\Controller;
use App\Models\QrchimpModel;

class Mycard extends BaseController
{
    public function __construct() {
        $this->qrchimpModel = new QrchimpModel();
    }
    public function index($url = false)
    {
    	$data['html'] = $this->qrchimpModel->get_data_to_template($url);
        return view('mycard', $data);
    }

}   

