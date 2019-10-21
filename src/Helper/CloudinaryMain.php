<?php 
namespace SenemCO\CloudInary\Helper;

use Pagekit\Application as App;
use Cloudinary;
use Mobile_Detect;

class CloudinaryMain{

    public $module;

    public static function config(){
        Cloudinary::config(App::module('cloudinary')->config['api']);
    }

    public function showImage( string $path = '' , array $options = []){
        self::config();
        return cloudinary_url( $path , $options );
    }

    public function typeDetect(){
        $detect = new Mobile_Detect;
        if($detect->isIphone()){
            return 'jpg';
        }
        return 'webp';
    }

}
?>