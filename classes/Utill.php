<?php

namespace CatalogEnquiry;

defined( 'ABSPATH' ) || exit;

class Utill {

    /**
     * Function to console and debug errors.
     */
    public static function log( $str ) {
        $file = Catalog()->plugin_path . 'log/catalog.txt';

        if ( file_exists( $file ) ) {
            // Open the file to get existing content
            $str = var_export( $str, true );

            // Wp_remote_gate replacement required
            $current = file_get_contents( $file );

            if ( $current ) {
                // Append a new content to the file
                $current .= "$str" . "\r\n";
                $current .= "-------------------------------------\r\n";
            } else {
                $current = "$str" . "\r\n";
                $current .= "-------------------------------------\r\n";
            }
            
            // Write the contents back to the file
            file_put_contents( $file, $current );
        }
    }

    /**
     * Get other templates ( e.g. product attributes ) passing attributes and including the file.
     *
     * @access public
     * @param mixed $template_name
     * @param array $args ( default: array() )
     * @return void
     */
    public static function get_template( $template_name, $args = [] ) {

        if ( $args && is_array( $args ) )
            extract( $args );

        $located = Catalog()->plugin_path.'templates/'.$template_name;
        
        load_template( $located, TRUE, $args );
    }

    /**
     * Get the settings array. Non set value is replaced with default value.
     * @return array
     */
    public static function get_form_settings_array($tabName = '') {
        $setting_keys = [
            'button_text',
            'button_link',
            'alert_text_color',
            'button_background_color',
            'button_border_color',
            'button_text_color',
            'button_background_color_onhover',
            'button_text_color_onhover',
            'button_border_color_onhover',
            'button_font_size',
            'button_border_size',
            'button_border_radious',
        ];

        $form_settings = [];

        foreach ( $setting_keys as $setting_key ) {
            $form_settings[ $setting_key ] = Catalog()->setting->get_setting( $setting_key, '', $tabName );
        }
        
        Utill::log($form_settings);

        return $form_settings;
    }
} 