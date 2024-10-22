import type { Meta, StoryObj } from '@storybook/react';
import TipsTricksArticleComments from '../../components/UI/TicksTricks/TipsTricksArticleComments/TipsTricksArticleComments';
import { testTipsTricksArticleData } from './testTipsTricksData';

const meta = {
    title: 'Components/TicksTricks/TipsTricksArticleComments',
    component: TipsTricksArticleComments,
    parameters: {
        nextjs: {
          appDirectory: true,
        },
      },
} satisfies Meta<typeof TipsTricksArticleComments>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
      commentsData: testTipsTricksArticleData.comments,
      articleId: testTipsTricksArticleData.id,
      refetch() {
      },
    }
}
