<li class="columns small-12 medium-8">
  <article class="article_card <?php if($i == 0){ echo "first_card" }?><?php if($category->slug == 'video'){echo " video_card"; }?><?php if($category->slug == 'news'){echo " news_card"; }?>">
    <a href="<?php the_permalink(); ?>">
      <figure class="article_card--figure">
        <?php the_post_thumbnail('thumbnail'); ?>
        <strong class="article_card--caption"><?php echo $category->name; ?></strong>
      </figure>

      <section class="article_card--main">
        <h2 class="article_card--title"><?php the_title(); ?></h2>
        <p class="article_card--content"><?php the_excerpt(); ?></p>
      </section>
    </a>
  </article>
</li>


  <!-- 全ての記事一覧 -->
		      <div class="section all">
		        <div class="section--inner">

<?php echo do_shortcode( '[ajax_load_more post_type="post" css_classes="list--repeat row" offset="5" posts_per_page="21" transition="fade" transition_container="false" scroll_distance="10" button_label="Loading more..." button_loading_label="Loading more..."]' ); ?>

		        </div>
		      </div>