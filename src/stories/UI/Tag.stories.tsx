import type { Meta, StoryObj } from '@storybook/react';
import { Tag } from '@/components/UI/Tag/Tag';
const meta = {
    title: 'UI/Tag',
    component: Tag,
    parameters: {
        nextjs: {
            appDirectory: true,
        },
      },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Crimson: Story = {
    args: {
        children: 'Tag text',
        bgColor: 'crimson'
    }
}

export const Green: Story = {
    args: {
        children: 'Tag text',
        bgColor: 'green'
    }
}