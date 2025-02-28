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

	const blockProps = useBlockProps();

	const onSelectImage = (media) => {
		setAttributes({
			imageUrl: media.url,
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
							onSplit={() => null}
							onReplace={() => null}
							onEnter={() => false}
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
										<Button
											onClick={open}
											className={!imageUrl ? 'editor-post-featured-image__toggle' : 'editor-post-featured-image__preview'}
										>
											{!imageUrl && __('Choose an image', 'air-light')}
											{imageUrl && (
												<div className="image-preview-wrapper">
													<img src={imageUrl} alt={imageAlt} />
													<Button
														className="remove-image-button components-button"
														onClick={(e) => {
															e.stopPropagation();
															removeImage();
														}}
														aria-label={__('Remove image', 'air-light')}
														isDestructive
													>
														×
													</Button>
												</div>
											)}
										</Button>
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
