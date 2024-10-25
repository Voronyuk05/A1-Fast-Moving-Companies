import React from "react";
import type { Preview } from "@storybook/react";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Nunito } from "next/font/google";
import '../src/app/globals.css'

// Provide the handlers globally for all stories

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: true,
    },
  },
})

const imb = Nunito({ 
  subsets: ["cyrillic", "latin"],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-zen',
  style: 'normal' 
})

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    }
  },
  decorators: [
    (Story) => (
      <main className={imb.className}>
        <QueryClientProvider client={queryClient}>
          <Story />
        </QueryClientProvider>
      </main>
    )
  ],
};

export default preview;
