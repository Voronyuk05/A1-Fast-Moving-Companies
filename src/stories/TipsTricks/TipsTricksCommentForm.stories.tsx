import type { Meta, StoryObj } from '@storybook/react';
import {TipsTricksCommentForm} from '@/components/UI/TicksTricks/TipsTricksCommentForm/TipsTricksCommentForm';
import { testTipsTricksArticleData } from './testTipsTricksData';
import { userEvent, within } from '@storybook/test';

const meta = {
    title: 'Components/TicksTricks/TipsTricksCommentForm',
    component: TipsTricksCommentForm,
    parameters: {
        nextjs: {
          appDirectory: true,
        },
      },
} satisfies Meta<typeof TipsTricksCommentForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
      itemData: testTipsTricksArticleData,
      articleId: testTipsTricksArticleData.id,
      refetch() {
      },
    }
}

export const FulfilledSubmit: Story = {
    args: {
      itemData: testTipsTricksArticleData,
      articleId: testTipsTricksArticleData.id,
      refetch() {},
    },

    play: async ({canvasElement}) => {
        const canvas = within(canvasElement)

        await userEvent.type(canvas.getByTestId('comment_text'), 'Some text', {
            delay: 20
        })

        await userEvent.click(canvas.getByTestId('submit_button'))
    }
}

