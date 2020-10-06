/**
 * Air theme JavaScript.
 */

// Import modules (comment to disable)
import BackToTop from './modules/BackToTop';
import LazyLoad from './modules/LazyLoad';
// import './modules/sticky-nav.js'
// import slick from 'slick-carousel';
import 'what-input';

// Navigation
import './modules/navigation';

// Define Javascript is active by changing the body class
document.body.classList.remove('no-js');
document.body.classList.add('js');

// Init lazyload
// Usage example on template side when air-helper enabled:
// <?php image_lazyload_tag( get_post_thumbnail_id( $post->ID ) ); ?>

const lazyload = new LazyLoad(document.querySelectorAll('.lazyload'), {
  root: null,
  rootMargin: '0px',
  threshold: 0,
});

lazyload.init();

const backToTop = new BackToTop();

backToTop.init();
