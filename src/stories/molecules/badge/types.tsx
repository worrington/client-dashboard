
export interface BadgeProps {
    /**
     * The color theme of the badge. This affects the background and border colors,
     * depending on the variant selected
     */
    color: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'dark' | 'grey' | 'light';

    /**
     * The text label to be displayed on the button.
     * This is a required property and defines the main content of the button.
     */
    label: string;

    className?: string;
}
