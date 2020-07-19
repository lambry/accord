import { __ } from '@wordpress/i18n'
import { registerBlockType } from '@wordpress/blocks'
import edit from './edit'
import save from './save'

registerBlockType('lambry/accord', {
    title: __('Accord', 'accord'),
    description: __('A tiny accordion block.', 'accord'),
    icon: 'excerpt-view',
    category: 'formatting',
    attributes: {
        title: {
            type: 'string',
            source: 'html',
            selector: '.accord-title',
            default: '',
        },
        isOpen: {
            type: 'bool',
            default: false,
        },
    },
    edit,
    save,
})
