<?php
/**
 * Plugin Name: Login Modal Compulsory
 * Description: A plugin developed by InspiryThemes.
 * Version: 1.0
 * Author: Inspiry Themes
 * Author URI: https://themeforest.net/user/inspirythemes/portfolio?order_by=sales
 *
 */

// Plugin directory URL.
if ( ! defined( 'LMC_PLUGIN_URL' ) ) {
    define( 'LMC_PLUGIN_URL', plugin_dir_url( __FILE__ ) );
}

if ( ! function_exists( 'login_modal_enqueue_scripts' ) ) {

    function login_modal_enqueue_scripts() {

        if ( ! is_user_logged_in() && is_singular( 'property' ) ) {

            wp_register_script( 'login-modal-customizations', LMC_PLUGIN_URL . 'js/login-modal-custom.js', array( 'jquery' ), '1.0', true );

            wp_enqueue_script( 'login-modal-customizations' );
        }

    }
    
    add_action( 'wp_enqueue_scripts', 'login_modal_enqueue_scripts' );
}