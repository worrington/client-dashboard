import * as HeroIcons from '@heroicons/react/24/outline';

/** Defines an icon type based on the HeroIcons keys */
export type IconName = keyof typeof HeroIcons;

export interface IconProps {
  /** The name of the icon to be rendered. This should match the exported key from
   * the`@heroicons` module.*/
  name: IconName;
  /** Additional CSS classes to apply to the icon. Defaults to an empty string. */
  className?: string;
  /** The width of the icon. Defaults to 24 */
  width?: number;
   /** The height of the icon. Defaults to 24 */
  height?: number;
  /** The color of the icon. It corresponds to a Tailwind CSS text color class (e.g., text-primary). Defaults to primary. */
  color?: string;
  /** Defines the type of the icon */
  variant?: "outline" | "solid";
}
