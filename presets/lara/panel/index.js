export default {
    header: ({ props }) => ({
        class: [
            // Flex and Alignments
            'flex items-center justify-between',

            // Borders, Colors, and Shape
            'text-surface-700 dark:text-surface-0/80',
            'bg-surface-50 dark:bg-surface-900',
            'border border-surface-200 dark:border-surface-700',

            //Shape
            'rounded-tl-lg rounded-tr-lg',

            // Conditional Spacing
            { 'p-5': !props.toggleable, 'py-3 px-5': props.toggleable }
        ]
    }),
    title: {
        class: 'leading-none font-bold'
    },
    toggler: {
        class: [
            // Flex, Alignments
            'inline-flex items-center justify-center',

            // Sized
            'w-8 h-8',

            //Shape
            'border-0 rounded-full',

            //Color
            'bg-transparent',
            'text-surface-600 dark:text-surface-0/80',

            // Hover States
            'hover:text-surface-900 dark:hover:text-surface-0/80',
            'hover:bg-surface-100 dark:hover:bg-surface-800/80',

            // Focus States
            'focus:outline-none focus:outline-offset-0 focus-visible:ring focus-visible:ring-primary-400/50 focus-visible:ring-inset dark:focus-visible:ring-primary-300/50',

            // Transitions
            'transition duration-200 ease-in-out',

            // Misc
            'overflow-hidden relative no-underline'
        ]
    },
    togglerIcon: {
        class: 'inline-block'
    },
    content: {
        class: [
            // Spacing
            'p-5',

            // Shape
            'border border-t-0 last:rounded-br-lg last:rounded-bl-lg',

            //Color
            'border-surface-200 dark:border-surface-700',
            'bg-surface-0 dark:bg-surface-900',
            'text-surface-700 dark:text-surface-0/80'
        ]
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
