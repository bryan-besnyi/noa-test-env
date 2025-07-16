import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import QuickLinksTable from './QuickLinksTable';

const meta = {
  title: 'Components/QuickLinksTable',
  component: QuickLinksTable,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the component'
    }
  },
} satisfies Meta<typeof QuickLinksTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithCustomClass: Story = {
  args: {
    className: 'my-4 p-3 border rounded',
  },
}; 