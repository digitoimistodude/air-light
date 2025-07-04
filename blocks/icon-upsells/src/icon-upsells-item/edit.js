/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { RichText, useBlockProps, useInnerBlocksProps, InspectorControls } from '@wordpress/block-editor';

import {
  PanelBody,
  __experimentalToggleGroupControl as ToggleGroupControl,
  __experimentalToggleGroupControlOption as ToggleGroupControlOption
} from '@wordpress/components';
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes, setAttributes }) {
  const blockProps = useBlockProps({ className: "item" });
  const innerBlockProps = useInnerBlocksProps({}, {
    allowedBlocks: ['core/paragraph', 'core/buttons'],
    template: [
      ['core/paragraph'],
    ],
    templateLock: false,
  });

  const options = [
    {
      "key": 1,
      'value': 1,
      'name': 'One',
    },
    {
      "key": 2,
      'value': 2,
      'name': 'Two',
    }
  ]

  return (
    <>
      <InspectorControls>
        <PanelBody>
          <ToggleGroupControl>
            {options.map((option) => (
              <ToggleGroupControlOption
                key={option.key}
                value={option.value}
                label={option.name}
              />
            ))}
          </ToggleGroupControl>
        </PanelBody>
      </InspectorControls>
      <div {...blockProps}>
        <RichText
          tagName="h3"
          value={attributes.title}
          onChange={(title) => setAttributes({ title })}
          placeholder={__('Heading...')}
        />

        <div {...innerBlockProps} />
      </div>
    </>
  );
}
