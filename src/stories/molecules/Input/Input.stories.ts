import type { Meta, StoryObj } from '@storybook/react';
import Input from '.';

const meta = {
  title: 'Components/Molecules/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
    },
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number', 'date', 'time', 'url'],
    },
    placeholder: {
      control: 'text',
    },
    value: {
      control: 'text',
    },
    onChange: { action: 'changed' },
  },
  args: {
    label: 'Default Label',
    type: 'text',
    placeholder: 'Enter text...',
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default story for Input component
export const Default: Story = {
  args: {
    label: 'Name',
    placeholder: 'Enter your name...',
  },
};

// Story with no label
export const NoLabel: Story = {
  args: {
    label: '',
    placeholder: 'Enter text...',
  },
};

// Story for password input
export const PasswordInput: Story = {
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password...',
  },
};
