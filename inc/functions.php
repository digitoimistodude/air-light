<?php
/**
 *  Air custom functions.
 *
 *  @package air-light
 */

if ( ! function_exists( 'air_entry_footer' ) ) {
	/**
	 *  Show categories, tags, comment and edit links after post.
	 */
	function air_entry_footer() {
		if ( 'post' === get_post_type() ) {
			$categories_list = get_the_category_list( _x( ', ', 'Used between list items, there is a space after the comma', 'air-light' ) );
			if ( $categories_list ) : ?>
				<p class="cat"><?php echo get_the_category_list( _x( ', ', 'Used between list items, there is a space after the comma.', 'air-light' ) ); ?></p>
			<?php	endif;

			$tags_list = get_the_tag_list( '', esc_html_x( ', ', 'list item separator', 'air-light' ) );
			if ( $tags_list ) {
				the_tags( '<ul class="tags"><li>', '</li><li>', '</li></ul>' );
			}
		}

		if ( ! is_single() && ! post_password_required() && ( comments_open() || get_comments_number() ) ) {
			echo '<span class="comments-link">
			<svg width="16" height="16" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1408 768q0 139-94 257t-256.5 186.5-353.5 68.5q-86 0-176-16-124 88-278 128-36 9-86 16h-3q-11 0-20.5-8t-11.5-21q-1-3-1-6.5t.5-6.5 2-6l2.5-5 3.5-5.5 4-5 4.5-5 4-4.5q5-6 23-25t26-29.5 22.5-29 25-38.5 20.5-44q-124-72-195-177t-71-224q0-139 94-257t256.5-186.5 353.5-68.5 353.5 68.5 256.5 186.5 94 257zm384 256q0 120-71 224.5t-195 176.5q10 24 20.5 44t25 38.5 22.5 29 26 29.5 23 25q1 1 4 4.5t4.5 5 4 5 3.5 5.5l2.5 5 2 6 .5 6.5-1 6.5q-3 14-13 22t-22 7q-50-7-86-16-154-40-278-128-90 16-176 16-271 0-472-132 58 4 88 4 161 0 309-45t264-129q125-92 192-212t67-254q0-77-23-152 129 71 204 178t75 230z"/></svg> ';
			comments_popup_link( sprintf( wp_kses( __( 'Leave a comment<span class="screen-reader-text"> on %s</span>', 'air-light' ), array( 'span' => array( 'class' => array() ) ) ), get_the_title() ) );
			echo '</span>';
		}

		edit_post_link(
			sprintf( _x( 'Edit %s', '%s: Name of current post', 'air-light' ), the_title( '<span class="screen-reader-text">"', '"</span>', false ) ),
			'<p class="edit-link">',
			'</p>'
		);
	}
}

if ( ! function_exists( 'air_comments' ) ) {
	/**
	 *  Custom comments function.
	 */
	function air_comments( $comment, $args, $depth ) {
		// $GLOBALS['comment'] = $comment; ?>

		<li id="li-comment-<?php comment_ID(); ?>" <?php comment_class(); ?>>
			<div id="comment-<?php comment_ID(); ?>">
				<?php echo get_avatar( $comment, '62' ); ?>
				<h4 class="comment-author"><?php echo get_comment_author_link(); ?></h4>

				<?php if ( '0' === $comment->comment_approved ) : ?>
					<p><em><?php esc_html_e( 'Your comment is awaiting approval.', 'air-light' ); ?></em></p>
				<?php endif; ?>

				<p class="comment-time">
					<a href="<?php echo htmlspecialchars( get_comment_link( $comment->comment_ID ) ); ?>">
						<svg width="16" height="16" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1520 1216q0-40-28-68l-208-208q-28-28-68-28-42 0-72 32 3 3 19 18.5t21.5 21.5 15 19 13 25.5 3.5 27.5q0 40-28 68t-68 28q-15 0-27.5-3.5t-25.5-13-19-15-21.5-21.5-18.5-19q-33 31-33 73 0 40 28 68l206 207q27 27 68 27 40 0 68-26l147-146q28-28 28-67zm-703-705q0-40-28-68l-206-207q-28-28-68-28-39 0-68 27l-147 146q-28 28-28 67 0 40 28 68l208 208q27 27 68 27 42 0 72-31-3-3-19-18.5t-21.5-21.5-15-19-13-25.5-3.5-27.5q0-40 28-68t68-28q15 0 27.5 3.5t25.5 13 19 15 21.5 21.5 18.5 19q33-31 33-73zm895 705q0 120-85 203l-147 146q-83 83-203 83-121 0-204-85l-206-207q-83-83-83-203 0-123 88-209l-88-88q-86 88-208 88-120 0-204-84l-208-208q-84-84-84-204t85-203l147-146q83-83 203-83 121 0 204 85l206 207q83 83 83 203 0 123-88 209l88 88q86-88 208-88 120 0 204 84l208 208q84 84 84 204z"/></svg>
						<time><?php printf( __( '%1$s at %2$s', 'air-light' ), get_comment_date(), get_comment_time() ); ?></time>
					</a>
				</p>

				<?php comment_text();

				comment_reply_link( array_merge( $args, array( 'depth' => $depth, 'max_depth' => $args['max_depth'] ) ) );
				edit_comment_link( __( '&mdash; Edit', 'air-light' ), ' ', '' ) ?>

			</div>
		</li>
	<?php }
}
