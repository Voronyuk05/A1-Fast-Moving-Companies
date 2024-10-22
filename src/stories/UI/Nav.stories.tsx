import type { Meta, StoryObj } from '@storybook/react';
import { Nav } from '@/components/UI/Nav/Nav';
const meta = {
    title: 'UI/Nav',
    component: Nav,
    parameters: {
        nextjs: {
            appDirectory: true,
        },
      },
} satisfies Meta<typeof Nav>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {}