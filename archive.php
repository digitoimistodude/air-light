<?php
/**
 * The template for displaying archive pages.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package air
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

			<?php
			if ( have_posts() ) : ?>

			<div class="container">

				<header class="page-header">
				  <?php
				    the_archive_title( '<h1 class="page-title">', '</h1>' );
				    the_archive_description( '<div class="taxonomy-description">', '</div>' );
				  ?>
				</header><!-- .page-header -->

				<?php while ( have_posts() ) : the_post(); ?>

				<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
				  <header class="entry-header">
				    <?php
				      if ( is_single() ) {
				        the_title( '<h1 class="entry-title">', '</h1>' );
				      } else {
				        the_title( '<h2 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h2>' );
				      }

				    if ( 'post' === get_post_type() ) : ?>
				    <div class="entry-meta">
				      <p class="entry-time"><time datetime="<?php the_time('c'); ?>"><?php the_time('l') ?>na, <?php the_time('j.') ?> <?php the_time('F') ?>ta <?php the_time('Y') ?> kello <?php the_time('G:i') ?></time></p>
				    </div><!-- .entry-meta -->
				    <?php
				    endif; ?>
				  </header><!-- .entry-header -->

				  <div class="entry-content">
				    <?php
				      the_content( sprintf(
				        /* translators: %s: Name of current post. */
				        wp_kses( __( 'Continue reading %s <span class="meta-nav">&rarr;</span>', 'air' ), array( 'span' => array( 'class' => array() ) ) ),
				        the_title( '<span class="screen-reader-text">"', '"</span>', false )
				      ) );

				      wp_link_pages( array(
				        'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'air' ),
				        'after'  => '</div>',
				      ) );
				    ?>
				  </div><!-- .entry-content -->

				  <footer class="entry-footer">
				    <?php air_entry_footer(); ?>
				  </footer><!-- .entry-footer -->
				</article><!-- #post-## -->

				<?php endwhile;

				the_posts_navigation();

				else : ?>

				<section class="no-results not-found">
				<header class="page-header">
				  <h1 class="page-title"><?php esc_html_e( 'Nothing Found', 'air' ); ?></h1>
				</header><!-- .page-header -->

				<div class="page-content">
				  <?php
				  if ( is_home() && current_user_can( 'publish_posts' ) ) : ?>

				    <p><?php printf( wp_kses( __( 'Ready to publish your first post? <a href="%1$s">Get started here</a>.', 'air' ), array( 'a' => array( 'href' => array() ) ) ), esc_url( admin_url( 'post-new.php' ) ) ); ?></p>

				  <?php elseif ( is_search() ) : ?>

				    <p><?php esc_html_e( 'Sorry, but nothing matched your search terms. Please try again with some different keywords.', 'air' ); ?></p>
				    <?php
				      get_search_form();

				  else : ?>

				    <p><?php esc_html_e( 'It seems we can&rsquo;t find what you&rsquo;re looking for. Perhaps searching can help.', 'air' ); ?></p>
				    <?php
				      get_search_form();

				  endif; ?>
				</div><!-- .page-content -->
				</section><!-- .no-results -->

			</div><!-- .container -->

			<?php endif; ?>

		</main><!-- #main -->
	</div><!-- #primary -->

<?php
get_sidebar();
get_footer();
