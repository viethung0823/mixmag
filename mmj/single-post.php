<?php get_header(); ?>
<?php
$categories = wp_get_post_terms(get_the_ID(), 'category');
$category = $categories[0];
?>
<div id="index-vue" class="">
  <div class="top_banner_block hide-for-large">
    <!-- /21634549996/SP-Billboard-Common -->
    <div id='div-gpt-ad-1507797529261-0'>
    <script>
    googletag.cmd.push(function() { googletag.display('div-gpt-ad-1507797529261-0'); });
    </script>
    </div>
  </div>

  <main class="main article_detail banner_lr" id="article-detail-vue">
    <?php if (have_posts()) :
         while (have_posts()) :the_post();
         $author = get_field('author');
         $youtube = get_field('youtube_id');
         $terms = wp_get_post_terms(get_the_ID());
         ?>

    <div class="banner_left">
      <!-- /21634549996/PC-Gate_left-Common -->
      <div id='div-gpt-ad-1507797398297-0'>
      <script>
      googletag.cmd.push(function() { googletag.display('div-gpt-ad-1507797398297-0'); });
      </script>
      </div>
    </div>
    <div class="banner_right">
      <!-- /21634549996/PC-Gate_right-Common -->
      <div id='div-gpt-ad-1507797456143-0'>
      <script>
      googletag.cmd.push(function() { googletag.display('div-gpt-ad-1507797456143-0'); });
      </script>
      </div>
    </div>


    <!-- Slide 1 -->
    <div class="section">
      <div class="row">
        <div class="columns small-12">
          <div class="article_detail_head">
              <p class="article_detail_head--category"><?php echo $category->name; ?></p>
              <h2 class="article_detail_head--title"><?php the_title(); ?></h2>
              <p class="article_detail_head--caption"><?php the_excerpt(); ?></p>
              <p class="article_detail_head--information"><?php echo $author;?> | <?php echo get_post_time( "j F Y" ); ?></p>
          </div>
        </div>
      </div>

      <div class="section article_2column">
        <div class="row">

<!--  Stretch out to hide that broken ad box -->
			
          <div style="flex-grow:0; flex-shrink:0; flex-basis:100%; max-width:100%;" class="columns small-12 large-8">

            <article class="blog_article ">
                    <p><?php the_content(); ?></p>
                    <ul class="list--tag">
                      <?php foreach( $terms as $term ):?>
                      <li>
                        <a><?php echo $term->name; ?></a>
                      </li>
                      <?php endforeach; ?>
                    </ul>
            </article>

            <!-- <div class="section video_list">
              <ul class="row">
                <template v-for="element, index in categoryArticles">
                  <li class="columns small-12 medium-6">
                    <article class="article_card video_list_card">
                        <a href="#" title="NEWS : LCD SOUNDSY">
                            <figure class="article_card--figure">
                                <img v-bind:src="article.thumbnail" :alt="article.author">
                                <strong class="article_card--caption">{{ article.category }}</strong>
                            </figure>
                            <section class="article_card--main">
                                <h2 class="article_card--title">{{ article.title }}</h2>
                                <p class="article_card--content">{{ article.headlign }}</p>
                            </section>
                        </a>
                    </article>
                  </li>
                </template>
              </ul>
            </div> -->
          </div>
          <div class="columns small-12 large-4">
            <div style="display:none" class="side_content">
              <!-- ad -->
				
              <!-- turned off-->
              <!-- /ad -->
				

             <!-- /人気記事 -->
<section style="width:100%;margin-top:50px;" >
 
<h3 style="text-align:center"><b>人気記事</b></h3>
<?php
 $wpp = array (
 'range' => 'daily', /*集計期間の設定（daily,weekly,monthly）*/
 'limit' => 5, /*表示数はmax5記事*/
 'post_type' => 'post', /*投稿のみ指定（固定ページを除外）*/
 'title_length' => '100', /*タイトル文字数上限*/
 'stats_comments' => '0', /*コメント数は非表示*/
 'stats_views' => '1', /*閲覧数を表示させる*/
 'thumbnail_width' => '1000', /*画像のwidth（px）*/
 'thumbnail_height' => '1000', /*画像のheight（px）*/
 'post_html' => '<li style="margin-bottom:30px;>{thumb}<div style="margin-top:10px;color:black!important;"><b>{title}</b></div></li>',

); ?>
<?php wpp_get_mostpopular($wpp); ?>

</section>


            </div>
          </div>
        </div>
      </div>


    </div>


<!-- 全ての記事一覧 -->
		      <div class="section all">
		        <div class="section--inner">

<?php echo do_shortcode( '[ajax_load_more post_type="post" css_classes="list--repeat row" offset="5" posts_per_page="21" transition="fade" transition_container="false" scroll_distance="10" button_label="Loading more..." button_loading_label="Loading more..."]' ); ?>

		        </div>
		      </div>


  </main>
  <?php endwhile;endif; ?>
</div>


<?php get_footer(); ?>
