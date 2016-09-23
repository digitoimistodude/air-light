<?php
/**
 * Template part for displaying results in search pages.
 *
 * @link https://codex.wordpress.org/Template_Hierarchy
 *
 * @package air
 */

?>

<div class="container">

	<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
		<header class="entry-header">
			<?php the_title( sprintf( '<h2 class="entry-title"><a href="%s" rel="bookmark">', esc_url( get_permalink() ) ), '</a></h2>' ); ?>

			<?php if ( 'post' === get_post_type() ) : ?>
			<div class="entry-meta">
					<p class="entry-time"><time datetime="<?php the_time('c'); ?>"><?php the_time('l') ?>, <?php the_time('j.') ?><?php the_time('n.') ?><?php the_time('Y') ?></time></p>
			</div><!-- .entry-meta -->
			<?php endif; ?>
		</header><!-- .entry-header -->

		<div class="entry-summary">
			<?php the_excerpt(); ?>
		</div><!-- .entry-summary -->

		<footer class="entry-footer">
			<?php air_entry_footer(); ?>
		</footer><!-- .entry-footer -->
	</article><!-- #post-## -->

</div><!-- .container -->
