<?php
/**
 * Template part for displaying single post.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package air
 */

?>

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
        <p class="entry-time"><time datetime="<?php the_time('c'); ?>"><?php the_time('l') ?>, <?php the_time('j.') ?><?php the_time('n.') ?><?php the_time('Y') ?></time></p>
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
