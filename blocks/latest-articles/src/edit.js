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
import { useBlockProps, RichText } from '@wordpress/block-editor';
import { useSelect } from '@wordpress/data';

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
	const blockProps = useBlockProps();

	// Get latest posts using useSelect
	const posts = useSelect((select) => {
		return select('core').getEntityRecords('postType', 'post', {
			per_page: 3,
			_embed: true,
		});
	}, []);

	if (!posts) {
		return (
			<div {...blockProps}>
				<p>{__('Loading...', 'air-light')}</p>
			</div>
		);
	}

	return (
		<div {...blockProps}>
			<div className="container">
				<RichText
					tagName="h2"
					value={attributes.heading}
					onChange={(heading) => setAttributes({ heading })}
					placeholder={__('Write heading…', 'air-light')}
				/>

				<div className="items">
					{posts.map((post) => (
						<article key={post.id} className="item item-article">
							<h3>
								<a href={post.link}>
									{post.title.rendered}
								</a>
							</h3>

							<p>
								<time dateTime={post.date}>
									{new Date(post.date).toLocaleDateString()}
								</time>
							</p>

							<div
								className="excerpt"
								dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
							/>
						</article>
					))}
				</div>
			</div>
		</div>
	);
}
