<?php 
namespace SenemCO\CloudInary\Helper;

use Pagekit\Application as App;
use Cloudinary;

class CloudinaryMain{

    public $module;

    public static function config(){
        Cloudinary::config(App::module('cloudinary')->config['api']);
    }

    public function showImage( string $path = '' , array $options = []){
        self::config();
        return cloudinary_url( $path , $options );
    }

}
?>