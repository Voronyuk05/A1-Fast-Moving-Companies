import type { Meta, StoryObj } from '@storybook/react';
import { TipsTricksComment } from '../../components/UI/TicksTricks/TipsTricksComment/TipsTricksComment';
import { testTipsTricksArticleData } from './testTipsTricksData';
import { expect, userEvent, within } from '@storybook/test';
import MockedProvider from '../MockedProvider';

const meta = {
    title: 'Components/TicksTricks/TipsTricksComment',
    component: TipsTricksComment,
    parameters: {
      nextjs: {
        appDirectory: true,
      },
    },
    render: function Render(args) {
      return <MockedProvider>
          <TipsTricksComment {...args} />
      </MockedProvider>
    }
} satisfies Meta<typeof TipsTricksComment>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
      commentData: testTipsTricksArticleData.comments[0],
      articleId: testTipsTricksArticleData.id,
      refetch() {
      },
    }
}

export const ToggleCommentForm: Story = {
  args: {
    commentData: testTipsTricksArticleData.comments[0],
    articleId: testTipsTricksArticleData.id,
    refetch() {},
  },


  play: async ({canvasElement}) => {
    const canvas = within(canvasElement)

    await userEvent.click(canvas.getAllByTestId('toggle_comment_form')[0])

    await expect(await canvas.findByTestId('comment_form')).toBeVisible()
  }
}

export const ToggleCommentChildren: Story = {
    args: {
      commentData: testTipsTricksArticleData.comments[0],
      articleId: testTipsTricksArticleData.id,
      refetch() {},
    },
  
  
    play: async ({canvasElement}) => {
      const canvas = within(canvasElement)

      await userEvent.click(canvas.getAllByTestId('branch')[0])
  
      await expect(await canvas.findByTestId('hidden_children')).toBeVisible()
    }
  }