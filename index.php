<?php
use SenemCO\CloudInary\Helper\CloudinaryMain;

return [
    'name' => 'cloudinary',

    'main' => function ( $app ) {
        $app['cloudinary'] = function ($app) {
            return new CloudinaryMain;
        };
    },

    'autoload' => [
        'SenemCO\\CloudInary\\' => 'src'
    ],

    'settings' => 'cloudinary-settings',

    'config' => [
        'api' => [
            'cloud_name' => '',
            'key' => '',
            'secret' => '',
            'secure' => true
        ],
        'options' =>[
            'folder_name' => 'senemco-api'
        ]
    ],

    'events' => [
        'view.scripts' => [function($event , $scripts) use ($app){
            $module = $app->module('cloudinary');
            $scripts->register('cloudinary-settings' , 'cloudinary:app/bundle/cloudinary-settings.js' , ['~extensions', 'input-tree']);
            
            $scripts->register('cloudinary-all' , 'https://media-library.cloudinary.com/global/all.js' , ['~news-posts-edit']);
            $scripts->register('cloudinary-editor', 'cloudinary:app/bundle/cloudinary-editor.js', ['~editor']);
            $scripts->register('news-cloudinary' , 'cloudinary:app/bundle/news-cloudinary.js' , ['~cloudinary-all']);
            $scripts->register('cloudinary-config' , sprintf('var $cloudinary = {config:%s};', json_encode($module->config)) , ['~extensions', 'input-tree' , '~editor'] , 'string');
            $scripts->register('news-widgets-image', 'cloudinary:app/bundle/news-widgets-image.js', ['~widgets']);
        } , 10]
    ],
];
