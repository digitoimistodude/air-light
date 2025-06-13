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
import {
  useBlockProps,
  RichText,
  MediaUpload,
  MediaUploadCheck,
  BlockControls,
  URLInput,
  InnerBlocks,
} from '@wordpress/block-editor';
import { Button, ToolbarGroup, ToolbarButton, Popover, Icon } from '@wordpress/components';
import { useState } from '@wordpress/element';
import { createBlock } from '@wordpress/blocks';

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
  const [isEditingURL, setIsEditingURL] = useState(false);
  const {
    heading,
    imageUrl,
    imageId,
    imageAlt,
    imageOnRight,
  } = attributes;

  const blockProps = useBlockProps({
    className: 'image-content has-unified-padding-if-stacked'
  });

  // Define allowed blocks and template
  const ALLOWED_BLOCKS = ['core/paragraph', 'core/buttons'];
  const TEMPLATE = [
    ['core/paragraph', {
      placeholder: 'Start writing your text here...',
      content: 'Please add your default text content here based on the Figma layouts created for the customer. This placeholder should always reflect the real content that will appear in the final design.'
    }],
    ['core/buttons', {
      layout: { type: 'flex', justifyContent: 'left' },
      className: 'button-wrapper'
    }, [
      ['core/button', {
        text: 'Read more',
        className: 'button',
      }]
    ]]
  ];

  const onSelectImage = (media) => {
    // Check if large size exists and use it, otherwise fallback to original
    const imageUrl = media.sizes?.large?.url || media.url;

    setAttributes({
      imageUrl: imageUrl,
      imageId: media.id,
      imageAlt: media.alt,
    });
  };

  const removeImage = () => {
    setAttributes({
      imageUrl: '',
      imageId: null,
      imageAlt: '',
    });
  };

  return (
    <>
      <BlockControls>
        <ToolbarGroup>
          <ToolbarButton
            icon={imageOnRight ? "align-right" : "align-left"}
            title={__('Image position', 'air-light')}
            onClick={() => setAttributes({ imageOnRight: !imageOnRight })}
            isActive={imageOnRight}
          />
        </ToolbarGroup>
      </BlockControls>

      <section {...blockProps}>
        <div className={`container ${imageOnRight ? 'image-on-right' : 'image-on-left'}`}>
          <div className="content">
            <RichText
              tagName="h2"
              value={heading}
              onChange={(heading) => setAttributes({ heading })}
              placeholder={__('Add heading...', 'air-light')}
              // Prevents replacing the heading with another element
              onReplace={() => null}
            />

            <div className="description">
              <InnerBlocks
                allowedBlocks={ALLOWED_BLOCKS}
                template={TEMPLATE}
                templateLock={false}
              />
            </div>
          </div>

          <div className="image image-background">
            <MediaUploadCheck>
              <MediaUpload
                onSelect={onSelectImage}
                allowedTypes={['image']}
                value={imageId}
                render={({ open }) => (
                  <div className="image-button-container">
                    {!imageUrl ? (
                      <Button
                        onClick={open}
                        className="editor-post-featured-image__toggle"
                      >
                        {__('Choose an image', 'air-light')}
                      </Button>
                    ) : (
                      <div className="image-preview-wrapper">
                        <img src={imageUrl} alt={imageAlt} onClick={open} style={{cursor: 'pointer'}} />
                        <Button
                          className="remove-image-button components-button"
                          onClick={removeImage}
                          aria-label={__('Remove image', 'air-light')}
                          isDestructive
                        >
                          ×
                        </Button>
                      </div>
                    )}
                  </div>
                )}
              />
            </MediaUploadCheck>
          </div>
        </div>
      </section>
    </>
  );
}
