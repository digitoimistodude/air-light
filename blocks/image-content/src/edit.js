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
} from '@wordpress/block-editor';
import { Button, ToolbarGroup, ToolbarButton, Popover, Icon } from '@wordpress/components';
import { useState } from '@wordpress/element';

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
    content,
    buttonText,
    buttonUrl,
    imageUrl,
    imageId,
    imageAlt,
    imageOnRight,
  } = attributes;

  const blockProps = useBlockProps({
    className: 'image-content has-unified-padding-if-stacked'
  });

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
              onReplace={() => null}
            />
            <RichText
              tagName="div"
              multiline="p"
              className="description"
              value={content}
              onChange={(content) => setAttributes({ content })}
              placeholder={__('Add content...', 'air-light')}
            />

            <div className="button-wrapper">
              <RichText
                tagName="a"
                value={buttonText}
                onChange={(buttonText) => setAttributes({ buttonText })}
                placeholder={__('Button text...', 'air-light')}
                className="button"
                allowedFormats={[]}
                onClick={(e) => {
                  e.preventDefault();
                  setIsEditingURL(true);
                }}
              />
              {isEditingURL && (
                <Popover
                  position="bottom center"
                  onClose={() => setIsEditingURL(false)}
                >
                  <URLInput
                    value={buttonUrl}
                    onChange={(buttonUrl) => setAttributes({ buttonUrl })}
                  />
                </Popover>
              )}
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
