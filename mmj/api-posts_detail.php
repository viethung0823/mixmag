<?php
/*
Template Name: API Posts-detail
*/

$args = array(
  'status' => 'publish',
  'p' => $_GET['id']
);

$posts = new WP_Query( $args );

if( $posts->have_posts() ) {
  while ( $posts->have_posts() ) {
    $posts->the_post();
    $categories = wp_get_post_terms(get_the_ID(), 'category');
    $category = $categories[0];
    if (has_post_thumbnail() )  {
      $image_url = wp_get_attachment_image_src(get_post_thumbnail_id($post->ID),"full");
      $thumbnail_url = wp_get_attachment_image_src(get_post_thumbnail_id($post->ID));
      $image =  $image_url[0];
      $thumbnail =  $thumbnail_url[0];
    }
    $author = get_field('author');
    $youtube = get_field('youtube_id');
    $terms = wp_get_post_terms(get_the_ID());
    foreach ($terms as $value) {
      $tags[] = array(
        'slug' => $value->slug,
        'name' => $value->name
      );
    }

    $data = array(
        'id'  => get_the_ID(),
        'title'   => get_the_title(),
        'content' => get_the_content(),
        'headlign' => get_the_excerpt(),
        'date' => get_post_time( "j F Y" ),
        'category' => $category->name,
        'thumbnail' => $thumbnail,
        'image' => $image,
        'youtube' => $youtube,
        'author' => $author,
        'tags' => $tags
    );
  }
  wp_reset_postdata();
}else{
  $data = array();
}

header("Content-Type: application/json; charset=utf-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Authorization, Origin, X-Requested-With, Content-Type, Content-Range, Accept");
echo json_encode($data);
