import type { Meta, StoryObj } from '@storybook/react';
import Modal from '.';

// Default configuration for the Modal stories
const meta: Meta<typeof Modal> = {
  title: 'Components/Organims/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    onClose: { action: 'closed' },
    children: { control: 'text' },
  },
  args: {
    title: 'Modal Title',
    children: 'This is the content of the modal.',
    isOpen: true,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

// Default story for the Modal component
export const Default: Story = {};

// Story with custom title
export const WithCustomTitle: Story = {
  args: {
    title: 'Custom Modal Title',
  },
};

// Story with different content
export const WithDifferentContent: Story = {
  args: {
    children: 'This is different content for the modal.',
  },
};

// Story with both custom title and content
export const CustomTitleAndContent: Story = {
  args: {
    title: 'Another Custom Title',
    children: 'Here is some custom content for the modal.',
  },
};
