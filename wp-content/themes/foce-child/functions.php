<?php
add_action( 'wp_enqueue_scripts', 'theme_enqueue_styles' );
function theme_enqueue_styles() {
    // Chargement du style.css du théme parent
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );

    // Chargement du style.css du théme enfant
    wp_enqueue_style('theme-style', get_stylesheet_directory_uri() . '/assets/css/style.css', array(), filemtime(get_stylesheet_directory() . '/assets/css/style.css'));
}
// Get customizer options form parent theme
if ( get_stylesheet() !== get_template() ) {
    add_filter( 'pre_update_option_theme_mods_' . get_stylesheet(), function ( $value, $old_value ) {
        update_option( 'theme_mods_' . get_template(), $value );
        return $old_value; // prevent update to child theme mods
    }, 10, 2 );
    add_filter( 'pre_option_theme_mods_' . get_stylesheet(), function ( $default ) {
        return get_option( 'theme_mods_' . get_template(), $default );
    } );
}

// // Chargement de wow.js
// wp_enqueue_script('wow', get_template_directory_uri() . "-child/assets/js/wow.js", array('jquery'), '1.3.0', true);

// // Chargement du fichier d'initialisation de wow.js
// wp_enqueue_script('wow-init', get_template_directory_uri() . "-child/assets/js/wow-init.js", array('jquery', 'wow'), '1.0.0', true);

// fade in script
function custom_fade_in_script() {
    wp_enqueue_script('custom-fade-in', get_template_directory_uri() . "-child/assets/js/custom-fade-in.js", array('jquery'), '1.0', true);
}
add_action('wp_enqueue_scripts', 'custom_fade_in_script');
