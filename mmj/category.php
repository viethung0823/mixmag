<?php get_header(); ?>

<div id="list-article">

  <div class="top_banner_block hide-for-large">
    <!-- /21634549996/SP-Billboard-Common -->
  
  </div>

  <main class="main index banner_lr">
    <div class="banner_left">
    
    </div>
    <div class="banner_right">
      <!-- /21634549996/PC-Gate_right-Common -->
      
    </div>

    <!-- Slide 1 -->
    <div class="section">
      <div class="section--inner sub_category_menu">
        <?php $arr = array(
            'child_of' => get_query_var('cat'),
            'hide_empty' => 0,
        );
        $categories = get_categories($arr);
        $thisCat = get_category(get_query_var( 'cat' ));
        ?>
        <div class="sub_category_menu--title row hide-for-large" id="accordion">
          <div class="columns small-12 area_level_1">
            <script><!--
            function toggleMenu(){
              jQuery("#category_menu").toggleClass("is_open");
            }
             --></script>
            <?php if(count($categories) > 0): ?>
               <button class="button" onclick="javascript:toggleMenu();">サブカテゴリーを選択する<svg class="icon icon-svgs_arrow-02-b"><use xlink:href="#icon-svgs_arrow-02-b"></use></svg></button>
            <?php else:?>
              <?php if($thisCat->parent):
                $arr = array(
                    'child_of' => $thisCat->parent,
                    'hide_empty' => 0,
                );
                $categories = get_categories($arr);
                ?>
                <button class="button" onclick="javascript:toggleMenu();"><?php echo $thisCat->name; ?><svg class="icon icon-svgs_arrow-02-b"><use xlink:href="#icon-svgs_arrow-02-b"></use></svg></button>
              <?php endif;?>
          <?php endif;?>
          </div>
        </div>
        <ul id="category_menu" class="sub_category_menu--list area_level_2">
          <?php
          foreach($categories as $category) :
            $category_link = get_category_link( $category->cat_ID ); ?>
          <li>
            <a href="<?php echo esc_url( $category_link ); ?>"><?php echo $category->name; ?></a>
          </li>
          <?php endforeach; ?>
        </ul>
      </div>

    </div>
    <?php
    $custom_args = array(
      'post_type' => 'post',
      'post_status' => 'publish',
      'orderby' => 'date',
      'cat' => get_query_var('cat'),
      'posts_per_page' => 1,
    );
    $cat = get_category(get_query_var('cat'));
    $latest_posts = new WP_Query( $custom_args );
    ?>
    <div class="section list_article">
      <ul class="row list--article section--inner">
        <?php if ( $latest_posts->have_posts() ) {
            	while ( $latest_posts->have_posts() ) {
            		$latest_posts->the_post();
                $image_url = wp_get_attachment_image_src(get_post_thumbnail_id($latest_posts->ID),'full');
                $thumbnail =  $image_url[0];
                $categories = wp_get_post_terms(get_the_ID(), 'category');
                $category = $categories[0]; ?>

              <li class="columns small-12 medium-8">
                <article class="article_card first_card <?php if($category->slug == 'video'){echo " video_card"; }?><?php if($category->slug == 'news'){echo " news_card"; }?>">
                  <a href="<?php the_permalink(); ?>">
                    <figure class="article_card--figure">
                      <span class="thumbnail_block thumbnail_block--small" style="background-image: url(&quot;<?php echo $thumbnail;?>&quot;);"></span>
                      <strong class="article_card--caption"><?php echo $category->name; ?></strong>
                    </figure>

                    <section class="article_card--main">
                      <h2 class="article_card--title"><?php the_title(); ?></h2>
                      <p class="article_card--content trimmed_article trimmed_article--3"><?php the_excerpt(); ?></p>
                    </section>
                  </a>
                </article>
              </li>
            <li class="columns small-12 medium-4">
              <div class="banner-center hide-for-large">
                <!-- /21634549996/SP-Rectangle-Common -->
               
              </div>
              <div class="banner-center show-for-large">
          
				  
              </div>
            </li>
          <?php } wp_reset_postdata(); } ?>

      </ul>
      <?php echo do_shortcode( '[ajax_load_more post_type="post" css_classes="list--plugin row" repeater="template_1" offset="1" posts_per_page="21" transition="fade" transition_container="false" scroll_distance="50" button_label="" button_loading_label="Loading more..." category="' . $cat->slug . '"]'); ?>
    </div>

  </main>
</div>


<?php get_footer(); ?>
