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
import { useBlockProps } from '@wordpress/block-editor';
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
export default function Edit() {
	const posts = useSelect((select) => {
		return select('core').getEntityRecords('postType', 'post', {
			per_page: 3,
			_embed: true
		});
	}, []);

	const blockProps = useBlockProps();

	if (!posts) {
		return (
			<p {...blockProps}>
				{__('Loading...', 'mastodonopas')}
			</p>
		);
	}

	if (posts.length === 0) {
		return (
			<p {...blockProps}>
				{__('No posts found.', 'mastodonopas')}
			</p>
		);
	}

	return (
		<div {...blockProps}>
			<div className="latest-articles">
				{posts.map((post) => (
					<article key={post.id} className="latest-article">
						<h3>
							<a href={post.link}>
								{post.title.rendered}
							</a>
						</h3>
						<time dateTime={post.date}>
							{new Date(post.date).toLocaleDateString()}
						</time>
						<div
							className="excerpt"
							dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
						/>
					</article>
				))}
			</div>
		</div>
	);
}
