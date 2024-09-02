import type { Meta, StoryObj } from '@storybook/react';
import Select from '.';

// Default configuration for the Select stories
const meta: Meta<typeof Select> = {
  title: 'Components/Molecules/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    value: { control: 'text' },
    options: { control: 'object' },
    onChange: { action: 'changed' },
    className: { control: 'text' },
  },
  args: {
    value: 'option1',
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story for the Select component
export const Default: Story = {};

// Story with custom className
export const WithCustomClass: Story = {
  args: {
    className: 'bg-blue-500 text-white',
  },
};

// Story with different selected value
export const WithSelectedValue: Story = {
  args: {
    value: 'option2',
  },
};
