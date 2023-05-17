<?php
/*
Template Name: API Categories
*/

$args = array(
	'type' => 'post',
  'hide_empty' => 0,
  'exclude' => 1
);

if($_GET['parent']){
  $idObj = get_category_by_slug( $_GET['parent']);
  $id = $idObj->term_id;
  $args = $args + array(
      'parent' => $id
    );
}else{
  $args = $args + array(
      'parent' => 0
    );
}

$categories = get_categories( $args );

$data = array();
foreach ($categories as $category) {
  $data[] = array(
      'name'   => $category->name,
      'slug' => $category->slug
  );
}

header("Content-Type: application/json; charset=utf-8");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Headers: Authorization, Origin, X-Requested-With, Content-Type, Content-Range, Accept");
echo json_encode($data);
