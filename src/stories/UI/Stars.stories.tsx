import type { Meta, StoryObj } from '@storybook/react';
import { Stars } from '@/components/UI/Stars/Stars';
const meta = {
    title: 'UI/Stars',
    component: Stars,
    parameters: {
        nextjs: {
            appDirectory: true,
        },
      },
} satisfies Meta<typeof Stars>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        rating: 5
    }
}
