import type { Meta, StoryObj } from '@storybook/react';
import {  expect, userEvent, within } from '@storybook/test';
import { LeaveReplyForm } from '@/components/UI/Replies/LeaveReplyForm/LeaveReplyForm';
import { testReplyData } from './testRepliesData';

const meta = {
    title: 'Components/Replies/LeaveReplyForm',
    component: LeaveReplyForm,
    parameters: {
        nextjs: {
          appDirectory: true,
        },
      },
} satisfies Meta<typeof LeaveReplyForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        companyName: testReplyData.name
    }
}

export const FulfilledSubmit: Story = {
    args: {
        companyName: testReplyData.name
    },

    play: async ({canvasElement}) => {
        const canvas = within(canvasElement)

        const comment = canvas.getByTestId('comment');
        const name = canvas.getByTestId('name');

        await userEvent.type(comment, 'Some text', {
            delay: 10,
        });
        await userEvent.type(name, 'User', {
            delay: 10,
        });

        await userEvent.click(canvas.getByTestId('submit_button'))
        await expect(await canvas.findByTestId('success')).toBeDefined()
    }
}
