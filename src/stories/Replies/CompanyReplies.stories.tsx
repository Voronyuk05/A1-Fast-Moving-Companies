import type { Meta, StoryObj } from '@storybook/react';
import CompanyReplies from '@/components/UI/Replies/CompanyReplies/CompanyReplies';
import { testRepliesData } from './testRepliesData';

const meta = {
    title: 'Components/Replies/CompanyReplies',
    component: CompanyReplies,
    parameters: {
        nextjs: {
          appDirectory: true,
        },
      },
} satisfies Meta<typeof CompanyReplies>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        data: testRepliesData,
        rating: 4,
    }
}