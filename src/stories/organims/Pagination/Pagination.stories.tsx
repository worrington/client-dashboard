import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Pagination from '.';
import { PaginationProps } from '.';

// Define Storybook metadata
export default {
  title: 'Components/Organims/Pagination',
  component: Pagination,
} as Meta;

// Define a simulated page change handler
const simulatedOnPageChange = (page: number) => {
  console.log(`Changed to page: ${page}`);
  
};

// Define the default story
const Template: StoryFn<PaginationProps> = (args) => (
  <Pagination {...args} onPageChange={simulatedOnPageChange} />
);

// Export the default story
export const Default = Template.bind({});
Default.args = {
  currentPage: 1,
  totalPages: 5,
  color: 'grey',
};

// Export additional stories if needed
export const WithColorVariants = Template.bind({});
WithColorVariants.args = {
  currentPage: 2,
  totalPages: 5,
  color: 'primary',
};
