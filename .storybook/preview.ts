import type { Preview } from '@storybook/nextjs-vite'
import '../app/globals.scss'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
      // Configure axe-core options for better accessibility testing
      options: {
        rules: {
          // Allow aria-label without aria-labelledby
          'aria-allowed-attr': { enabled: true },
          // Allow buttons without text if they have aria-label
          'button-name': { enabled: true },
        }
      }
    }
  },
};

export default preview;