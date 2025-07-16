import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import SearchForm from './SearchForm';

const meta = {
  title: 'Components/SearchForm',
  component: SearchForm,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the component'
    },
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
      description: 'Size of the search form'
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the search input'
    }
  },
} satisfies Meta<typeof SearchForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Small: Story = {
  args: {
    size: 'sm',
    placeholder: 'Quick search...'
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
    placeholder: 'Search the portal...'
  },
};

export const MobileNav: Story = {
  args: {
    className: 'mobile-nav-search',
    size: 'sm',
    placeholder: 'Search...'
  },
}; 