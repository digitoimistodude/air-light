/*
 *
 *   Polylang dropdown
 *   Source: https://github.com/icetee/wp-bootstrap-polylang
 *
 *   Require inc/polylang-dropdown.php in functions
 *
 *   @since 1.2.4
 *
 */

(function polylang_dropdown($) {

    var $lang = $('html').attr('lang');
    var $navbar = $('#top-bar');
    var $navitem = 'li.lang-item';
    var pageId = pllVars.postID;
    var $changelang = "";
    var lang = {};

    if (!$navbar.find($navitem).hasClass("pll-lang")) {

        $lang = $lang.split('-')[0];

        $navbar.find($navitem).find('a').each(function() {
            var ltd = $(this).attr('hreflang').split('-')[0];
            lang[ltd] = $(this).attr('title');
        });

        $changelang += '<li class="menu-item lang-item menu-item-type-custom menu-item-object-custom menu-item-has-children dropdown pll-lang">';
        $changelang += '<a aria-haspopup="true" class="dropdown-toggle" data-toggle="dropdown" href="#" title="' + lang[$lang] + '">';
        $changelang += lang[$lang];
        $changelang += ' <svg class="dropdown-toggle" fill="#444" width="9" height="9" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg"><path d="M1683 808l-742 741q-19 19-45 19t-45-19L109 808q-19-19-19-45.5t19-45.5l166-165q19-19 45-19t45 19l531 531 531-531q19-19 45-19t45 19l166 165q19 19 19 45.5t-19 45.5z"/></svg></a>';
        $changelang += '<ul class="dropdown-menu" role="menu">';

        $.each(lang, function(key, value) {
            $changelang += '<li class="lang-item ' + key + '"><a target="_self" href="//' + window.location.host + '/' + key + '/' + pageId[key] + '" title="' + value + '">' + value + '</a></li>';
        });

        $changelang += '</ul></li>';

        $navbar.find($navitem).remove();
        $navbar.append($changelang);
    }

})(jQuery);