import type { Meta, StoryObj } from '@storybook/react';
import { TipsTricksArticleTable } from '../../components/UI/TicksTricks/TipsTricksArticleTable/TipsTricksArticleTable';
import { testTipsTricksArticleData } from './testTipsTricksData';

const meta = {
    title: 'Components/TicksTricks/TipsTricksArticleTable',
    component: TipsTricksArticleTable,
    parameters: {
        nextjs: {
          appDirectory: true,
        },
      },
} satisfies Meta<typeof TipsTricksArticleTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        tableData: testTipsTricksArticleData.info.table
    }
}