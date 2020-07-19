<?php
/**
 * Plugin Name: Accord
 * Plugin URI:  https://github.com/lambry/accord/
 * Description: A tiny accordion block using the details element.
 * Version:     0.1.0
 * Author:      Lambry
 * Author URI:  https://lambry.com/
 * License:     GPL-2.0+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 */

/**
 * Register assets and block.
 */
add_action('init', function() {
	$asset = include plugin_dir_path(__FILE__) . 'build/index.asset.php';

	wp_register_script('accord-script', plugins_url('build/index.js', __FILE__), $asset['dependencies'], $asset['version']);

	register_block_type('lambry/accord', [ 'editor_script' => 'accord-script' ]);
});
