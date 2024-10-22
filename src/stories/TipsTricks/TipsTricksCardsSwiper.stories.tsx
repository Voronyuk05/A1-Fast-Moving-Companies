import type { Meta, StoryObj } from '@storybook/react';
import TipsTricksCardsSwiper from '@/components/UI/TicksTricks/TipsTricksCardsSwiper/TipsTricksCardsSwiper';



const meta = {
    title: 'Components/TicksTricks/TipsTricksCardsSwiper',
    component: TipsTricksCardsSwiper,
    parameters: {
        nextjs: {
          appDirectory: true,
        },
    },
} satisfies Meta<typeof TipsTricksCardsSwiper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {}

