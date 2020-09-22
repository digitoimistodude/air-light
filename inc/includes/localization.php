<?php
/**
 * @Author: Timi Wahalahti
 * @Date:   2019-12-03 11:03:31
 * @Last Modified by:   Roni Laukkarinen
 * @Last Modified time: 2020-07-31 15:26:09
 *
 * @package air-light
 */

add_filter( 'air_helper_pll_register_strings', function() { // phpcs:ignore
  return array(
    // Air defaults for screen readers
    'Accessibility: Open main menu' => 'Open main menu',
    'Accessibility: Main navigation' => 'Main navigation',
    'Accessibility: Back to top' => 'Back to top',
    'Accessibility: Open child menu' => 'Open child menu',
    'Accessibility: Close child menu' => 'Close child menu',
    'Accessibility: Skip to content' => 'Skip to content',
    'Accessibility: External site:' => 'External site:',

    // Air defaults for screen readers in Finnish
    'Saavutettavuus: -etusivulle' => '-etusivulle',
    'Saavutettavuus: Siirry' => 'Siirry',
    'Saavutettavuus: Siirry sivustolle' => 'Siirry sivustolle',
    'Saavutettavuus: Päävalikko' => 'Päävalikko',
    'Saavutettavuus: Selaa pääsivuja' => 'Selaa pääsivuja',
    'Saavutettavuus: Alavalikko' => 'Alavalikko',
    'Saavutettavuus: Valitse kieli:' => 'Valitse kieli:',
    'Saavutettavuus: Olet tässä:' => 'Olet tässä:',
    'Saavutettavuus: Alasivut:' => 'Alasivut:',
    'Saavutettavuus: Hyppää sisältöön' => 'Hyppää sisältöön',
    'Saavutettavuus: Avaa alavalikko' => 'Avaa alavalikko',
    'Saavutettavuus: Avaa päävalikko' => 'Avaa päävalikko',
    'Saavutettavuus: Sulje alavalikko' => 'Sulje alavalikko',
    'Saavutettavuus: Sulje päävalikko' => 'Sulje päävalikko',
    'Saavutettavuus: Ulkoinen sivusto:' => 'Ulkoinen sivusto:',
  );
} );
