import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Table from '.';
import { TableProps } from './types';

// Sample data and columns for the table
const sampleData = [
  { id: '1', name: 'John Doe', age: 30, actions: <button style={{border:"solid 2px", padding: ".5rem"}}>View</button> },
  { id: '2', name: 'Jane Smith', age: 25, actions: <button style={{border:"solid 2px", padding: ".5rem"}}>View</button>},
  // Add more sample rows as needed
];

const columns = [
  { key: 'id', label: 'ID' },
  { key: 'name', label: 'Name' },
  { key: 'age', label: 'Age' },
  { key: 'actions', label: 'Actions' },
];

// Define Storybook metadata
export default {
  title: 'Components/Organims/Table',
  component: Table,
} as Meta;

// Define the story
const Template: StoryFn<TableProps> = (args) => <Table {...args} />;

// Export the default story
export const Default = Template.bind({});
Default.args = {
  data: sampleData,
  columns: columns,
};
