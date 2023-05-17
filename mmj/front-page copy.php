<?php get_header(); ?>

<div id="index-vue" class="">

      <div class="top_banner_block hide-for-large">
        <!-- /21634549996/SP-Billboard-Top -->
        <div id='div-gpt-ad-1507797492797-0'>
        <script>
        googletag.cmd.push(function() { googletag.display('div-gpt-ad-1507797492797-0'); });
        </script>
        </div>
      </div>

		  <!-- <slider-menu :current="1"></slider-menu> -->

		  <main class="main index banner_lr">
        <div class="banner_left">
          <!-- /21634549996/PC-Gate_left-Top -->
          <div id='div-gpt-ad-1507797367630-0'>
          <script>
          googletag.cmd.push(function() { googletag.display('div-gpt-ad-1507797367630-0'); });
          </script>
          </div>
        </div>
        <div class="banner_right">
          <!-- /21634549996/PC-Gate_right-Top -->
          <div id='div-gpt-ad-1507797429646-0'>
          <script>
          googletag.cmd.push(function() { googletag.display('div-gpt-ad-1507797429646-0'); });
          </script>
          </div>
        </div>
		    <!-- メインビジュアル -->
        <?php
        $args = array(
          'post_status' => 'publish',
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
        ?>
		    <div class="top_news_block">
          <?php while ( $posts->have_posts() ) :
              $posts->the_post();
              if (has_post_thumbnail() )  {
                $image_url = wp_get_attachment_image_src(get_post_thumbnail_id($post->ID),'full');
                $thumbnail =  $image_url[0];
              } else {
                $thumbnail =  "http://stage.mixmag.jp/assets/img/news/sample_thumbnail_01.jpg";
              }
            ?>
		      <a href="<?php the_permalink(); ?>" title="<?php the_title(); ?>" class="link_img">
            <span class="thumbnail_block thumbnail_block--xlarge" style="background-image: url(&quot;<?php echo $thumbnail;?>&quot;);"></span>
          </a>
        <?php endwhile; ?>
        <?php wp_reset_postdata(); ?>
		    </div>

		    <div id="main_content_0" class="main_slide_content current">

		      <!-- ニュース記事一覧 -->
		      <div class="section news">

		        <ul class="list--news section--inner row align-stretch">
              <?php
              $args = array(
                'post_status' => 'publish',
                'orderby' => 'post_date',
                'order' => 'DESC',
              );
              $posts = new WP_Query( $args );
              $i = 0;
              while ( $posts->have_posts() ) :
                  $posts->the_post();
                  $categories = wp_get_post_terms(get_the_ID(), 'category');
                  $category = $categories[0];
                  if (has_post_thumbnail() )  {
                    $image_url = wp_get_attachment_image_src(get_post_thumbnail_id($post->ID),'full');
                    $thumbnail =  $image_url[0];
                  } else {
                    $thumbnail =  "http://stage.mixmag.jp/assets/img/news/sample_thumbnail_01.jpg";
                  }
              ?>

                  <?php if($i == 4): ?>
                     <!-- スマホ版5番目は記事が大きくなる -->
		                <li class="columns small-12 medium-4">
                      <article class="article_card first_card <?php if($category->slug == 'video'){echo " video_card"; }?><?php if($category->slug == 'news'){echo " news_card"; }?>">
                      <a href="<?php the_permalink(); ?>">
                        <figure class="article_card--figure">
                          <span class="thumbnail_block thumbnail_block--medium" style="background-image: url(&quot;<?php echo $thumbnail;?>&quot;);"></span>
                          <strong class="article_card--caption"><?php echo $category->name; ?></strong>
                        </figure>

                        <section class="article_card--main">
                          <h2 class="article_card--title trimmed_article trimmed_article--2"><?php the_title(); ?></h2>
                          <p class="article_card--content trimmed_article trimmed_article--3"><?php the_excerpt(); ?></p>
                        </section>
                      </a>
                      </article>
                  <?php elseif($i == 2): ?>
		                </li>
                    <!-- PC版3番目は広告が入る -->
                      <div class="show-for-large">
  		                <li vclass="columns small-6 medium-4 list--news--advert">
                        <!-- /21634549996/PC-Rectangle-Top -->
                        <div id='div-gpt-ad-1507797268306-0'>
                        <script>
                        googletag.cmd.push(function() { googletag.display('div-gpt-ad-1507797268306-0'); });
                        </script>
                        </div>
  		                </li>
                      </div>
                      <li class="columns small-6 medium-4">
                        <article class="article_card first_card <?php if($category->slug == 'video'){echo " video_card"; }?><?php if($category->slug == 'news'){echo " news_card"; }?>">
                        <a href="<?php the_permalink(); ?>">
                          <figure class="article_card--figure">
                            <span class="thumbnail_block thumbnail_block--medium" style="background-image: url(&quot;<?php echo $thumbnail;?>&quot;);"></span>
                            <strong class="article_card--caption"><?php echo $category->name; ?></strong>
                          </figure>

                          <section class="article_card--main">
                            <h2 class="article_card--title trimmed_article trimmed_article--2"><?php the_title(); ?></h2>
                            <p class="article_card--content trimmed_article trimmed_article--3"><?php the_excerpt(); ?></p>
                          </section>
                        </a>
                        </article>
  		                </li>
                  <?php else: ?>
                    <li class="columns small-6 medium-4">
                      <article class="article_card first_card <?php if($category->slug == 'video'){echo " video_card"; }?><?php if($category->slug == 'news'){echo " news_card"; }?>">
                      <a href="<?php the_permalink(); ?>">
                        <figure class="article_card--figure">
                          <span class="thumbnail_block thumbnail_block--medium" style="background-image: url(&quot;<?php echo $thumbnail;?>&quot;);"></span>
                          <strong class="article_card--caption"><?php echo $category->name; ?></strong>
                        </figure>

                        <section class="article_card--main">
                          <h2 class="article_card--title trimmed_article trimmed_article--2"><?php the_title(); ?></h2>
                          <p class="article_card--content trimmed_article trimmed_article--3"><?php the_excerpt(); ?></p>
                        </section>
                      </a>
                      </article>
		                </li>
		              <?php endif; ?>

                <?php $i++; endwhile; ?>
                <?php wp_reset_postdata(); ?>
		        </ul>
		        <div class="button--holder row align-center ">
		          <div class="columns small-12 medium-6 large-4 text-center">
		            <a href="/news" class="button__more" title="View news">View news</a>
		          </div>
		        </div>

		        <div class="top_banner_block hide-for-large">
              <!-- /21634549996/SP-Nomal-Top -->
              <div id='div-gpt-ad-1507797569099-0'>
              <script>
              googletag.cmd.push(function() { googletag.display('div-gpt-ad-1507797569099-0'); });
              </script>
              </div>
		        </div>
		        <div class="top_banner_block show-for-large">
              <!-- /21634549996/PC-Nomal-Top -->
              <div id='div-gpt-ad-1507797189210-0'>
              <script>
              googletag.cmd.push(function() { googletag.display('div-gpt-ad-1507797189210-0'); });
              </script>
              </div>
		        </div>
		      </div>

		      <!-- ビデオ記事一覧 -->
		      <div class="section video">
		        <ul  class="section--inner row">
              <?php
              $args = array(
                'post_status' => 'publish',
                'orderby' => 'post_date',
                'order' => 'DESC',
                'category_name' => 'video',
                'posts_per_page' => 1,
              );
              $posts = new WP_Query( $args );
              $i = 0;
              while ( $posts->have_posts() ) :
                  $posts->the_post();
                  $categories = wp_get_post_terms(get_the_ID(), 'category');
                  $category = $categories[0];
                  $youtube = get_field('youtube_id');
              ?>
	            <li class="columns small-12 large-7">
                <article class="article_card first_card video_card">
                  <figure class="article_card--figure">
                    <div class="youtube">
                      <iframe src="https://www.youtube.com/embed/<?php echo $youtube; ?>" frameborder="0" allowfullscreen></iframe>
                    </div>
                    <strong class="article_card--caption"><?php echo $category->name; ?></strong>
                  </figure>

                  <section class="article_card--main">
                    <h2 class="article_card--title trimmed_article trimmed_article--2"><?php the_title(); ?></h2>
                    <p class="article_card--content trimmed_article trimmed_article--3"><?php the_excerpt(); ?></p>
                  </section>
                </article>
	            </li>
              <?php endwhile; ?>
              <?php wp_reset_postdata(); ?>
		          <li class="columns small-12 large-5">
		            <ul class="list--video row">
                  <?php
                  $args = array(
                    'post_status' => 'publish',
                    'orderby' => 'post_date',
                    'order' => 'DESC',
                    'category_name' => 'video',
                    'posts_per_page' => 4,
                  );
                  $posts = new WP_Query( $args );
                  $i = 0;
                  while ( $posts->have_posts() ) :
                      $posts->the_post();
                      $image_url = wp_get_attachment_image_src(get_post_thumbnail_id($post->ID),'full');
                      $thumbnail =  $image_url[0];
                      $categories = wp_get_post_terms(get_the_ID(), 'category');
                      $category = $categories[0];
                    if($i > 0):
                  ?>
		                <li class="columns small-12 medium-6 large-12">
                      <article class="article_card alt_card">
  		                  <a href="<?php the_permalink(); ?>"><div class="row">
                          <div class="columns small-6">
                            <figure class="article_card--figure">
                              <span class="thumbnail_block thumbnail_block--small" style="background-image: url(&quot;<?php echo $thumbnail;?>&quot;);"></span>
                            </figure>
                          </div>
                          <section class="article_card--main columns small-6">
                            <h2 class="article_card--title trimmed_article trimmed_article--2"><?php the_title(); ?></h2>
                            <p class="article_card--content trimmed_article trimmed_article--3"><?php the_excerpt(); ?></p>
                          </section>
                        </div></a>
                      </article>
		                </li>
		              <?php endif; $i++; endwhile; ?>
                  <?php wp_reset_postdata(); ?>
		            </ul>
		          </li>
		        </ul>
		        <div class="button--holder row align-center ">
		          <div class="columns small-12 medium-6 large-4 text-center">
		            <a href="/video" class="button__more" title="More videos">More videos</a>
		          </div>
		        </div>
		      </div>

		      <!-- 全ての記事一覧 -->
		      <div class="section all">
		        <div class="section--inner">

<?php echo do_shortcode( '[ajax_load_more post_type="post" css_classes="list--repeat row" offset="5" posts_per_page="21" transition="fade" transition_container="false" scroll_distance="10" button_label="Loading more..." button_loading_label="Loading more..."]' ); ?>

		        </div>
		      </div>

		    </div>
		  </main>
		</div>


<?php get_footer(); ?>
