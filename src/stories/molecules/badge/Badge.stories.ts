import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '.'; // Ensure this path is correct

// Default configuration for the stories
const meta = {
  title: 'Example/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'light', 'dark'],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

// Primary Badge story
export const Primary: Story = {
  args: {
    label: 'Primary Badge',
    color: 'primary',
  },
};

// Secondary Badge story
export const Secondary: Story = {
  args: {
    label: 'Secondary Badge',
    color: 'secondary',
  },
};

// Custom Badge story
export const Custom: Story = {
  args: {
    label: 'Warning Badge',
    color: 'warning',
  },
};
