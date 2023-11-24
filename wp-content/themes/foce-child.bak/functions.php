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
        return $old_value; // Empêcher la mise à jour des modifications du thème enfant
    }, 10, 2 );
    add_filter( 'pre_option_theme_mods_' . get_stylesheet(), function ( $default ) {
        return get_option( 'theme_mods_' . get_template(), $default );
    } );
}

// fade-in script
function custom_fade_in_script() {
    wp_enqueue_script('custom-fade-in', get_stylesheet_directory_uri() . '/assets/js/custom-fade-in.js', array('jquery'), filemtime(get_stylesheet_directory() . '/assets/js/custom-fade-in.js'), true);
}
add_action('wp_enqueue_scripts', 'custom_fade_in_script');


// Animation nuages
wp_enqueue_script('nuage', get_stylesheet_directory_uri() . '/assets/js/nuages-animation.js');

// Animation des titres
wp_enqueue_script('Titres-script', get_stylesheet_directory_uri() . '/assets/js/title-animation-script.js', array('jquery'), '1.0.0', true);

// Ajout librairie Swiper
function enqueue_swiper_assets() {
    // Enqueue Swiper's JS
    wp_enqueue_script('swiper-js', 'https://unpkg.com/swiper/swiper-bundle.min.js', array(), '6.4.5', true);
    // Enqueue Swiper's CSS
    wp_enqueue_style('swiper-css', 'https://unpkg.com/swiper/swiper-bundle.min.css');
    // Enqueue custom JS file
    wp_enqueue_script('custom-swiper-init', get_stylesheet_directory_uri() . '/assets/js/swiper_carrousel.js', array('swiper-js'), filemtime(get_stylesheet_directory() . '/assets/js/swiper_carrousel.js'), true);
}
add_action('wp_enqueue_scripts', 'enqueue_swiper_assets');

// Gestion du menu Burger
wp_enqueue_script('Burger-script', get_stylesheet_directory_uri() . '/assets/js/menu_burger.js', array('jquery'), '1.0.0', true);