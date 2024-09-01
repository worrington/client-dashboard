/**
 * Button properties interface, defining the expected props for the Button component.
 * This interface includes options for button styling, label text, and an optional icon.
 */
export interface ButtonProps {
    /**
     * The variant of the button, determining its styling.
     * - 'outlined': The button will have a transparent background with a colored border.
     * - 'contained': The button will have a solid background color.
     * 
     * @default 'contained'
     */
    variant?: 'outlined' | 'contained' | 'text';

    /**
     * The color theme of the button. This affects the background and border colors,
     * depending on the variant selected. Available options:
     * - 'primary': The primary theme color.
     * - 'secondary': A secondary theme color.
     * - 'success': A green color indicating success.
     * - 'warning': A yellow color indicating caution.
     * - 'danger': A red color indicating danger or errors.
     * - 'dark': A dark theme color for the button.
     * 
     * @default 'dark'
     */
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'dark' | 'grey' | 'light';

    /**
     * The text label to be displayed on the button.
     * This is a required property and defines the main content of the button.
     */
    label: string;

    /**
     * An optional icon to be displayed alongside the label inside the button.
     * The icon can be a string representing a class name for an icon library or an image URL.
     */
    icon?: string;

    /**
     * An optional click handler function, triggered when the button is clicked.
     * This allows you to define what happens when the user interacts with the button.
     */
    onClick?: () => void;

    disabled?: boolean;
}
