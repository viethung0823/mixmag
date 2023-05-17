<?php
/*
Template Name: API Posts-pickup
*/

$args = array(
  'status' => 'publish',
  'posts_per_page' => 1,
  'orderby' => 'post_date',
  'order' => 'DESC',
  'meta_query'	=> array(array(
              'key'	  	=> 'pickup',
              'value'	  	=> '1',
              'compare' 	=> '=='
              ))
);

$posts = new WP_Query( $args );

if( $posts->have_posts() ) {
  while ( $posts->have_posts() ) {
    $posts->the_post();
    $categories = wp_get_post_terms(get_the_ID(), 'category');
    $category = $categories[0];
    $youtube = get_field('youtube_id');
    if (has_post_thumbnail() )  {
      $image_url = wp_get_attachment_image_src(get_post_thumbnail_id($post->ID),'full');
      $thumbnail =  $image_url[0];
    } else {
      $thumbnail =  "http://stage.mixmag.jp/assets/img/news/sample_thumbnail_01.jpg";
    }

    $data = array(
        'id'  => get_the_ID(),
        'title'   => get_the_title(),
        'headlign' => get_the_excerpt(),
        'category' => $category->name,
        'image' => $thumbnail,
        'youtube' => $youtube,
    );
  }
  wp_reset_postdata();
}else{
  $data = array();
}


header("Content-Type: application/json; charset=utf-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: Authorization, Origin, X-Requested-With, Content-Type, Content-Range, Accept");
echo json_encode($data);
