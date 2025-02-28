/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function Save({ attributes }) {
	const {
		heading,
		content,
		buttonText,
		buttonUrl,
		imageUrl,
		imageAlt,
		imageOnRight,
	} = attributes;

	const blockProps = useBlockProps.save({ className: 'image-content has-unified-padding-if-stacked' });

	return (
		<section {...blockProps}>
			<div className={`container ${imageOnRight ? 'image-on-right' : 'image-on-left'}`}>
				<div className="content">
					{heading && <h2>{heading}</h2>}
					{content && <div className="description" dangerouslySetInnerHTML={{ __html: content }} />}
					{buttonText && buttonUrl && (
						<p className="button-wrapper">
							<a href={buttonUrl} className="button">
								{buttonText}
							</a>
						</p>
					)}
				</div>

				<div className="image image-background">
					{imageUrl && (
						<img src={imageUrl} alt={imageAlt || ''} />
					)}
				</div>
			</div>
		</section>
	);
}
