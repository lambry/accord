import { __ } from '@wordpress/i18n'
import { RichText, InnerBlocks, InspectorControls } from '@wordpress/block-editor'
import { PanelBody, ToggleControl } from '@wordpress/components'

export default function Edit({ attributes, setAttributes, className }) {
    const { title, isOpen } = attributes

    return (
        <>
            <InspectorControls>
                <PanelBody title={__('Display Settings', 'accord')}>
                    <ToggleControl
                        label={__('Open', 'accord')}
                        checked={isOpen}
                        onChange={(isOpen) => setAttributes({ isOpen })}
                    />
                </PanelBody>
            </InspectorControls>
            <div className={`accord ${className}`} open>
                <RichText
                    value={title}
                    className="accord-title"
                    label={__('Title', 'accord')}
                    placeholder={__('Title', 'accord')}
                    onChange={(title) => setAttributes({ title })}
                    keepPlaceholderOnFocus
                />
                <div className="accord-content">
                    <InnerBlocks />
                </div>
            </div>
        </>
    )
}
