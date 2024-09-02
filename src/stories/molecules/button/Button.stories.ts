import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from '.';

// Configuración predeterminada para las historias
const meta = {
  title: 'Components/Molecules/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['outlined', 'contained', 'text'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'danger', 'dark', 'light', 'grey'],
    },
  },
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// Historia del botón primario
export const Primary: Story = {
  args: {
    label: 'Button',
    variant: 'contained',
    color: 'primary',
  },
};

// Historia del botón secundario
export const Secondary: Story = {
  args: {
    label: 'Button',
    variant: 'outlined',
    color: 'secondary',
  },
};

// Historia del botón personalizado con texto y color
export const Custom: Story = {
  args: {
    label: 'Custom Button',
    variant: 'text',
    color: 'dark',
  },
};
