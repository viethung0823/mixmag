<?php get_header(); ?>
<?php
  if (isset($_GET['s'])) {
    $keyword = $_GET['s'];
  } else {
    $keyword = 'キーワード';
  }
?>
<div id="list-article">

  <div class="top_banner_block hide-for-large">
    <!-- /21634549996/SP-Billboard-Common -->
    <div id='div-gpt-ad-1507797529261-0'>
    <script>
    googletag.cmd.push(function() { googletag.display('div-gpt-ad-1507797529261-0'); });
    </script>
    </div>
  </div>

  <main class="main index banner_lr">
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
      <div class="section article_2column">
        <div class="row">
          <div class="columns small-12 large-8">
            <article class="search_article">
              <form role="search" method="get" id="searchform" action="/" >
                <div class="search_article--form">
                  <input type="text" value="<?php echo $keyword; ?>" name="s" class="search_article--input"/>
                  <button type="submit" class="searchsubmit">SEARCH</button>
                </div>
              </form>
            </article>
            <div class="section">
              <?php echo do_shortcode( '[ajax_load_more post_type="post" css_classes="row list--search_result" repeater="template_2" posts_per_page="21" transition="fade" transition_container="false" scroll_distance="50" button_label="" button_loading_label="Loading more..." search="' . $keyword . '"]'); ?>
            </div>
          </div>
          <div class="columns small-12 large-4">
            <div class="side_content">
              <!-- ad -->
              <figure class="side_content--banner">
                <div class="banner-center hide-for-large">
                  <!-- /21634549996/SP-Rectangle-Common -->
                  <div id='div-gpt-ad-1507797689977-0'>
                  <script>
                  googletag.cmd.push(function() { googletag.display('div-gpt-ad-1507797689977-0'); });
                  </script>
                  </div>
                </div>
                <div class="banner-center show-for-large">
                  <!-- /21634549996/PC-Rectangle-Common -->
                  <div id='div-gpt-ad-1507797338288-0'>
                  <script>
                  googletag.cmd.push(function() { googletag.display('div-gpt-ad-1507797338288-0'); });
                  </script>
                  </div>
                </div>
              </figure>
              <!-- /ad -->
            </div>
          </div>
        </div>
      </div>

    </div>

  </main>
</div>


<?php get_footer(); ?>
