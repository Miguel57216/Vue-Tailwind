export default {
    root: {
        class: [
            'block',

            // Spacing
            'px-5 md:px-6 py-5',

            // Shape
            'rounded-md rounded-lg',
            //TODO: Decide if we want to use shadow or borders for fieldset
            // 'shadow-md',

            // Color
            'bg-surface-0 dark:bg-surface-900',
            'text-surface-700 dark:text-surface-0/80',
            'ring-1 ring-inset ring-surface-300 dark:ring-surface-700 ring-offset-0'
        ]
    },
    legend: ({ props }) => ({
        class: [
            // Font
            'font-medium',
            'leading-none',

            //Spacing
            { 'p-0': props.toggleable, 'px-5 md:px-6 py-5': !props.toggleable },

            // Shape
            'rounded-md',

            // Color
            'text-surface-700 dark:text-surface-0/80',
            'ring-1 ring-inset ring-surface-300 dark:ring-surface-700 ring-offset-0',
            'bg-surface-0 dark:bg-surface-900',

            // Transition
            'transition-none',

            // States
            { '': props.toggleable },
            { 'focus:outline-none focus:outline-offset-0 focus:ring-2 focus:ring-primary-600 ring-inset dark:focus:ring-primary-500': props.toggleable }
        ]
    }),
    toggler: ({ props }) => ({
        class: [
            // Alignments
            'flex items-center justify-center',
            'relative',

            //Spacing
            { 'px-5 md:px-6 py-5': props.toggleable },

            // Shape
            { 'rounded-md': props.toggleable },

            // Color
            { 'text-surface-700 dark:text-surface-200 hover:text-surface-900 hover:text-surface-900': props.toggleable },

            // States
            { 'hover:text-surface-900 dark:hover:text-surface-100': props.toggleable },
            { 'focus:outline-none focus:outline-offset-0 focus:ring focus:ring-inset focus:ring-primary-400/50 dark:focus:ring-primary-300/50': props.toggleable },

            // Misc
            {
                'transition-none cursor-pointer overflow-hidden select-none': props.toggleable
            }
        ]
    }),
    togglerIcon: {
        class: 'mr-2 inline-block'
    },
    legendTitle: {
        class: 'flex items-center justify-center leading-none'
    },
    content: {
        class: 'p-0'
    },
    transition: {
        enterFromClass: 'max-h-0',
        enterActiveClass: 'overflow-hidden transition-all duration-500 ease-in-out',
        enterToClass: 'max-h-40',
        leaveFromClass: 'max-h-40',
        leaveActiveClass: 'overflow-hidden transition-all duration-500 ease-in',
        leaveToClass: 'max-h-0'
    }
};
