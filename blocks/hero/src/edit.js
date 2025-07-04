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
import { InspectorControls, useBlockProps, useInnerBlocksProps, MediaUpload, MediaUploadCheck, BlockControls } from '@wordpress/block-editor';

import { PanelBody, Button, ToolbarGroup } from '@wordpress/components';

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
  const innerBlockProps = useInnerBlocksProps({ className: 'wrapper-content' },
    {
      allowedBlocks: ['core/heading', 'core/paragraph', 'core/buttons', 'core/button'],
      template: [
        ['core/heading'],
        ['core/paragraph'],
        ['core/buttons', {
          className: "wrapper-buttons",
          orientation: "horizontal",
        }],
      ],
    }
  );

  const { image } = attributes;

  return (
    <>
      <BlockControls>
        <ToolbarGroup>
          {!image &&
            <MediaUploadCheck>
              <MediaUpload
                onSelect={(image) => setAttributes({ image: image })}
                allowedTypes={['image']}
                value={image}
                render={({ open }) => (
                  <Button onClick={open}>Add background image</Button>
                )}
              />
            </MediaUploadCheck>
          }
          {!!image &&
            <Button onClick={() => setAttributes({ image: null })}>Remove background image</Button>
          }
        </ToolbarGroup>
      </BlockControls>

      <InspectorControls>
        <PanelBody title="Background image">
          <MediaUploadCheck>
            <MediaUpload
              onSelect={(image) => setAttributes({ image: image })}
              allowedTypes={['image']}
              value={image}
              render={({ open }) => (
                <div>
                  {!image && <Button variant="secondary" onClick={open}>Add background image</Button>}
                  {!!image && image &&
                    <>
                      <Button variant="link" onClick={open}>
                        <img src={image.url} />
                      </Button>
                      <Button
                        className="remove-image-button components-button"
                        onClick={() => setAttributes({ image: null })}
                        aria-label={__('Remove image', 'air-light')}
                        isDestructive
                      >
                        Remove Image
                      </Button>
                    </>
                  }
                </div>
              )}
            />
          </MediaUploadCheck>
        </PanelBody>
      </InspectorControls>
      <section {...useBlockProps()}>
        <div className='container'>
          {!!image && <img className='image image-background' src={image.url} />}
          <div {...innerBlockProps} />
        </div>
      </section>
    </>
  );
}
