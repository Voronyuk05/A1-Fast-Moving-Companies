import type { Meta, StoryObj } from '@storybook/react';
import { RepliesSwiper } from '@/components/UI/Replies/RepliesSwiper/RepliesSwiper';
import { testRepliesData } from './testRepliesData';

const meta = {
    title: 'Components/Replies/RepliesSwiper',
    component: RepliesSwiper,
    parameters: {
        nextjs: {
          appDirectory: true,
        },
    },
} satisfies Meta<typeof RepliesSwiper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        data: testRepliesData
    }
}

