import { RichText, InnerBlocks } from '@wordpress/block-editor'

export default function Save({ attributes, className }) {
    const { title, isOpen } = attributes

    return (
        <details className={`accord ${className}`} {...(isOpen && { open: true })}>
            <summary className="accord-title">
                <RichText.Content value={title} />
            </summary>
            <div className="accord-content">
                <InnerBlocks.Content />
            </div>
        </details>
    )
}
