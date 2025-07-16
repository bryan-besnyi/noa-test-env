import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import Navbar from './Navbar';

const meta = {
  title: 'Sections/Navbar',
  component: Navbar,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A unified navigation system with sticky header, top utility bar, main navigation, and A-Z index. Features a single hamburger menu that controls both main navigation and top bar utilities on mobile devices.'
      }
    }
  },
  tags: ['autodocs'],
  argTypes: {
    // This component doesn't take props
  },
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'The complete navigation system with functional dropdown menu and responsive behavior. Test the "Change Site" dropdown in the top bar and the main navigation links.'
      }
    }
  }
};

// Mobile view
export const MobileView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    },
    docs: {
      description: {
        story: 'The navigation system on mobile devices. Click the hamburger icon to open the unified mobile menu that includes main navigation, quick access utilities, and search functionality.'
      }
    }
  }
};

// Tablet view
export const TabletView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'tablet'
    },
    docs: {
      description: {
        story: 'The navigation system on tablet devices showing the transition between desktop and mobile layouts.'
      }
    }
  }
};

// Desktop view
export const DesktopView: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'desktop'
    },
    docs: {
      description: {
        story: 'The navigation system on desktop showing the full layout with horizontal navigation links and visible top bar utilities.'
      }
    }
  }
};

// Accessibility test
export const AccessibilityTest: Story = {
  parameters: {
    docs: {
      description: {
        story: 'This story tests the navigation accessibility, including proper ARIA labels, keyboard navigation, mobile menu functionality, and screen reader compatibility.'
      }
    },
    a11y: {
      options: {
        rules: {
          'button-name': { enabled: true },
          'link-name': { enabled: true },
          'aria-expanded': { enabled: true },
          'color-contrast': { enabled: true },
          'focus-order-semantics': { enabled: true },
          'heading-order': { enabled: true }
        }
      }
    }
  }
}; 