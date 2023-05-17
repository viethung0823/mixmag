<?php
/*
Template Name: API Posts
*/

if ( get_query_var('paged') ) { $paged = get_query_var('paged'); }
elseif ( get_query_var('page') ) { $paged = get_query_var('page'); }
else { $paged = 1; }
$posts_per_page = 24;
if($_GET['per_page']){
  $posts_per_page = $_GET['per_page'];
}
$args = array(
  'status' => 'publish',
  'posts_per_page' => $posts_per_page,
	'paged' => $paged,
  'orderby' => 'post_date',
  'order' => 'DESC',
);

if($_GET['category']){
  $args = $args + array(
      'category_name' => $_GET['category']
    );
}

if($_GET['tag']){
  $args = $args + array(
      'tag' => $_GET['tag']
    );
}

$posts = new WP_Query( $args );

if( $posts->have_posts() ) {
  while ( $posts->have_posts() ) {
    $posts->the_post();
    $categories = wp_get_post_terms(get_the_ID(), 'category');
    $category = $categories[0];
    $youtube = get_field('youtube_id');
    if (has_post_thumbnail() )  {
      $image_url = wp_get_attachment_image_src(get_post_thumbnail_id($post->ID));
      $thumbnail =  $image_url[0];
    } else {
      $thumbnail =  "http://stage.mixmag.jp/assets/img/news/sample_thumbnail_01.jpg";
    }

    $data[] = array(
        'id'  => get_the_ID(),
        'title'   => get_the_title(),
        'headlign' => get_the_excerpt(),
        'category' => $category->name,
        'thumbnail' => $thumbnail,
        'youtube' => $youtube,
    );
  }
  wp_reset_postdata();
}else{
  $data = array();
}

if(count($data) > 0){
  $posts_json = array(
    'current_page' => $paged,
    'per_page_num' => $posts_per_page,
    'posts' => $data
  );
}else{
  $posts_json = array();
}


header("Content-Type: application/json; charset=utf-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: *");
header("Access-Control-Allow-Headers: Authorization, Origin, X-Requested-With, Content-Type, Content-Range, Accept");
echo json_encode($posts_json);
