 import type { Meta, StoryObj } from '@storybook/react';
import { Logo } from '@/components/UI/Logo/Logo';
const meta = {
    title: 'UI/Logo',
    component: Logo,
    parameters: {
        nextjs: {
            appDirectory: true,
        },
      },
} satisfies Meta<typeof Logo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {}