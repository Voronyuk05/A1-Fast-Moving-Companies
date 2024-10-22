import type { Meta, StoryObj } from '@storybook/react';
import { TipsTricksArticle } from '@/components/UI/TicksTricks/TipsTricksArticle/TipsTricksArticle';
import { testTipsTricksArticleData } from './testTipsTricksData';

const meta = {
    title: 'Components/TicksTricks/TipsTricksArticle',
    component: TipsTricksArticle,
    parameters: {
        nextjs: {
          appDirectory: true,
        },
      },
} satisfies Meta<typeof TipsTricksArticle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        data: testTipsTricksArticleData
    }
}