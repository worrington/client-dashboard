import type { Meta, StoryObj } from '@storybook/react';
import * as HeroIcons from '@heroicons/react/24/outline';

import Icon from '.';

// Default configuration for the Icon stories
const meta = {
  title: 'Components/Molecules/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: {
      control: 'select',
      options: Object.keys(HeroIcons),
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'dark', 'light', 'grey'],
    },
    width: {
      control: 'number',
    },
    height: {
      control: 'number',
    },
  },
  args: {
    name: 'UserCircleIcon',
    width: 24,
    height: 24,
    color: 'primary',
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default story for Icon component
export const Default: Story = {
  args: {
    name: 'UserCircleIcon',
  },
};

// Story with custom size and color
export const CustomSizeAndColor: Story = {
  args: {
    name: 'UserCircleIcon',
    width: 40,
    height: 40,
    color: 'warning',
  },
};

// Story with a different icon
export const DifferentIcon: Story = {
  args: {
    name: 'HomeIcon',
    width: 30,
    height: 30,
    color: 'success',
  },
};
