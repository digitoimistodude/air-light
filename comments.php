<?php
/**
 * The template for displaying comments
 *
 * This is the template that displays the area of the page that contains both the current comments
 * and the comment form.
 *
 * @Date:   2019-10-15 12:30:02
 * @Last Modified by: Niku Hietanen
 * @Last Modified time: 2020-03-02 10:51:24
 * @package air-light
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 */

namespace Air_Light;

 /*
 * If the current post is protected by a password and
 * the visitor has not yet entered the password we will
 * return early without loading the comments.
 */
if ( post_password_required() ) {
	return;
} ?>

<div id="comments" class="comments-area">

  <?php
  // You can start editing here -- including this comment!
  if ( have_comments() ) : ?>
    <h2 class="comments-title">
      <?php
        $comment_count = get_comments_number();
        if ( '1' === $comment_count ) {
          printf(
            /* translators: 1: title. */
            esc_html__( 'One thought on &ldquo;%1$s&rdquo;', 'air-light' ),
            '<span>' . esc_html( get_the_title() ) . '</span>'
          );
        } else {
        printf( // WPCS: XSS OK.
          /* translators: 1: comment count number, 2: title. */
          esc_html( _nx( '%1$s comment %2$s', '%1$s comments %2$s', $comment_count, 'comments title', 'air-light' ) ),
          number_format_i18n( $comment_count ),
          '<span class="screen-reader-text">on &ldquo;' . esc_html( get_the_title() ) . '&rdquo;</span>'
        );
      }
      ?>
    </h2>

    <?php if ( get_comment_pages_count() > 1 && get_option( 'page_comments' ) ) : // Are there comments to navigate through? ?>
    <nav id="comment-nav-above" class="navigation comment-navigation" role="navigation">
      <h2 class="screen-reader-text"><?php esc_html_e( 'Comment navigation', 'air-light' ); ?></h2>
      <div class="nav-links">

        <div class="nav-previous"><?php previous_comments_link( esc_html__( 'Older Comments', 'air-light' ) ); ?></div>
        <div class="nav-next"><?php next_comments_link( esc_html__( 'Newer Comments', 'air-light' ) ); ?></div>

      </div><!-- .nav-links -->
    </nav><!-- #comment-nav-above -->
    <?php endif; // Check for comment navigation. ?>

    <ol class="comment-list">
      <?php
        wp_list_comments( array(
          'style'      => 'ol',
          'short_ping' => true,
          'callback'   => __NAMESPACE__ . '\single_comment',
        ) );
      ?>
    </ol><!-- .comment-list -->

    <?php if ( get_comment_pages_count() > 1 && get_option( 'page_comments' ) ) : // Are there comments to navigate through? ?>
    <nav id="comment-nav-below" class="navigation comment-navigation" role="navigation">
      <h2 class="screen-reader-text"><?php esc_html_e( 'Comment navigation', 'air-light' ); ?></h2>
      <div class="nav-links">

        <div class="nav-previous"><?php previous_comments_link( esc_html__( 'Older Comments', 'air-light' ) ); ?></div>
        <div class="nav-next"><?php next_comments_link( esc_html__( 'Newer Comments', 'air-light' ) ); ?></div>

      </div><!-- .nav-links -->
    </nav><!-- #comment-nav-below -->
    <?php
    endif; // Check for comment navigation.

  endif; // Check for have_comments().


  // If comments are closed and there are comments, let's leave a little note, shall we?
  if ( ! comments_open() && get_comments_number() && post_type_supports( get_post_type(), 'comments' ) ) : ?>

    <p class="no-comments"><?php esc_html_e( 'Comments are closed.', 'air-light' ); ?></p>
  <?php
  endif;

  comment_form();
  ?>

</div><!-- #comments -->
