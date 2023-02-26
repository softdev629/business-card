<?php   
namespace App\Models;
use CodeIgniter\Model;

class QrchimpModel extends Model
{
    public function url_identify_check($url)
    {
        $db = \Config\Database::connect();
        $builder = $db->table('tb_template');

        $htmlRow = $builder->select('linkoPage')->where('linkoPage', $url)->get()->getResult();      


        if(count($htmlRow))
            return false;
        else
            return true;          
    }

    public function get_data_to_template($url)
    {

        $db = \Config\Database::connect();
        $builder = $db->table('tb_template');

        $htmlRow = $builder->select('linkoPage, template')->where('linkoPage', $url)->get()->getResult();        


        $html='';
        foreach($htmlRow as $row)
        {
            $html = $row->template;
        }
        return $html;               

    }

    public function insert_data_to_template($data = array())
    {
        $db = \Config\Database::connect();
        $builder = $db->table('tb_template');
        $builder->insert($data);

        return $db->insertID();        
    }

    public function insert_data_to_qrchimp($data = array())
    {
    	$db = \Config\Database::connect();
    	$builder = $db->table('tb_qrchimp');
        $builder->insert($data);

        return $db->insertID();
    }

    public function insert_data_to_profileState($data = array())
    {
    	$db = \Config\Database::connect();
    	$builder = $db->table('tb_profilestate');
        $builder->insert($data);

        return $db->insertID();
    }

    public function insert_data_to_contactsInfo($data = array())
    {
    	$db = \Config\Database::connect();
    	$builder = $db->table('tb_contactsinfo');
        $builder->insert($data);

        return $db->insertID();
    }

    public function insert_data_to_headingState($data = array())
    {
    	$db = \Config\Database::connect();
    	$builder = $db->table('tb_headingstate');
        $builder->insert($data);

        return $db->insertID();
    }

    public function insert_data_to_contactUsState($data = array())
    {
    	$db = \Config\Database::connect();
    	$builder = $db->table('tb_contactusstate');
        $builder->insert($data);

        return $db->insertID();
    }

    public function insert_data_to_contactItems($data = array())
    {
    	$db = \Config\Database::connect();
    	$builder = $db->table('tb_contactitems');
        $builder->insert($data);

        return $db->insertID();
    }

    public function insert_data_to_imageState($data = array())
    {
    	$db = \Config\Database::connect();
    	$builder = $db->table('tb_imagestate');
        $builder->insert($data);

        return $db->insertID();
    }

    public function insert_data_to_photos($data = array())
    {
    	$db = \Config\Database::connect();
    	$builder = $db->table('tb_photos');
        $builder->insert($data);

        return $db->insertID();
    }

    public function insert_data_to_socialLinksState($data = array())
    {
    	$db = \Config\Database::connect();
    	$builder = $db->table('tb_sociallinksstate');
        $builder->insert($data);

        return $db->insertID();
    }

    public function insert_data_to_socialLinks($data = array())
    {
    	$db = \Config\Database::connect();
    	$builder = $db->table('tb_sociallinks');
        $builder->insert($data);

        return $db->insertID();
    }

    public function insert_data_to_linksState($data = array())
    {
    	$db = \Config\Database::connect();
    	$builder = $db->table('tb_linksstate');
        $builder->insert($data);

        return $db->insertID();
    }

    public function insert_data_to_webLinks($data = array())
    {
    	$db = \Config\Database::connect();
    	$builder = $db->table('tb_weblinks');
        $builder->insert($data);

        return $db->insertID();
    }

    public function insert_data_to_buttonState($data = array())
    {
    	$db = \Config\Database::connect();
    	$builder = $db->table('tb_buttonstate');
        $builder->insert($data);

        return $db->insertID();
    }

    public function insert_data_to_customState($data = array())
    {
    	$db = \Config\Database::connect();
    	$builder = $db->table('tb_customstate');
        $builder->insert($data);

        return $db->insertID();
    }

    public function insert_data_to_customItems($data = array())
    {
    	$db = \Config\Database::connect();
    	$builder = $db->table('tb_customitems');
        $builder->insert($data);

        return $db->insertID();
    }

    public function insert_data_to_pdfState($data = array())
    {
    	$db = \Config\Database::connect();
    	$builder = $db->table('tb_pdfstate');
        $builder->insert($data);

        return $db->insertID();
    }

    public function insert_data_to_pdfItems($data = array())
    {
    	$db = \Config\Database::connect();
    	$builder = $db->table('tb_pdfitems');
        $builder->insert($data);

        return $db->insertID();
    }

    public function insert_data_to_videoState($data = array())
    {
    	$db = \Config\Database::connect();
    	$builder = $db->table('tb_videostate');
        $builder->insert($data);

        return $db->insertID();
    }

    public function insert_data_to_settingState($data = array())
    {
    	$db = \Config\Database::connect();
    	$builder = $db->table('tb_settingstate');
        $builder->insert($data);

        return $db->insertID();
    }

/*
    public function update_data($id, $data = array())
    {
        $this->db->table($this->table)->update($data, array(
            "id" => $id,
        ));
        return $this->db->affectedRows();
    }

    public function delete_data($id)
    {
        return $this->db->table($this->table)->delete(array(
            "id" => $id,
        ));
    }

    public function get_all_data()
    {
        $query = $this->db->query('select * from ' . $this->table);
        return $query->getResult();
    }
*/
}