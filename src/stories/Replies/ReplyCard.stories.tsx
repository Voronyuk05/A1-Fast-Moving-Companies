import type { Meta, StoryObj } from '@storybook/react';
import { ReplyCard } from '@/components/UI/Replies/ReplyCard/ReplyCard';
import { testReplyData } from './testRepliesData';

const meta = {
    title: 'Components/Replies/ReplyCard',
    component: ReplyCard,
    parameters: {
        nextjs: {
          appDirectory: true,
        },
      },
} satisfies Meta<typeof ReplyCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: testReplyData
}