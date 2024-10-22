import type { Meta, StoryObj } from '@storybook/react';
import { TipsTricksCard } from '../../components/UI/TicksTricks/TipsTricksCard/TipsTricksCard';
import { testTipsTricksArticleData } from './testTipsTricksData';

const meta = {
    title: 'Components/TicksTricks/TipsTricksCard',
    component: TipsTricksCard,
    parameters: {
        nextjs: {
          appDirectory: true,
        },
    },
} satisfies Meta<typeof TipsTricksCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: testTipsTricksArticleData
}
