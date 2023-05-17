<?php
/*-------------------------------------------*/
/*	mmhj_theme_setup
/*-------------------------------------------*/

// アイキャッチ画像を有効にする。
add_theme_support('post-thumbnails'); 


//画像キャプションで出力される不要なwidthスタイルを削除
function my_img_caption_shortcode($attr, $content = null) {
  if ( ! isset( $attr['caption'] ) ) {
    if ( preg_match( '#((?:<a [^>]+>s*)?<img [^>]+>(?:s*</a>)?)(.*)#is', $content, $matches ) ) {
      $content = $matches[1];
      $attr['caption'] = trim( $matches[2] );
    }
  }

  $output = apply_filters('img_caption_shortcode', '', $attr, $content);
  if ( $output != '' )
    return $output;
    extract(shortcode_atts(array(
      'id' => '',
      'align' => 'alignnone',
      'width' => '',
      'caption' => ''
  ), $attr, 'caption'));

  if ( 1 > (int) $width || empty($caption) )
    return $content;

  if ( $id ) $id = 'id="' . esc_attr($id) . '" ';

  return '<div ' . $id . 'class="wp-caption ' . esc_attr($align) . '">' . do_shortcode( $content ) . '<p class="wp-caption-text">' . $caption . '</p></div>';
}
add_shortcode('caption', 'my_img_caption_shortcode');

add_filter( 'ppp_nonce_life', 'my_nonce_life' );
function my_nonce_life() {
    return 60 * 60 * 24 * 5;    // 5 日間（秒×分×時間×日）
}



function add_media_namespace() {
  echo 'xmlns:media="http://search.yahoo.com/mrss/"';
}
add_action( 'rss2_ns', 'add_media_namespace' );

add_action('rss2_item', function(){
  global $post;
  if (has_post_thumbnail($post->ID)){
    $thumbnail_ID = get_post_thumbnail_id($post->ID);
    $thumbnail = wp_get_attachment_image_src($thumbnail_ID, 'medium');
    if (is_array($thumbnail)) {
	  echo '<media:thumbnail url="' . $thumbnail[0] . '" />';
	  echo '<media:content url="' . $thumbnail[0] . '" medium="image" />';
    }
  }
});