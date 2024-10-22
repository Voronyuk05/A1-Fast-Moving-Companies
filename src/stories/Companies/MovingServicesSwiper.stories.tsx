import type { Meta, StoryObj } from '@storybook/react';
import MovingServicesSwiper from '@/components/UI/MovingServicesSwiper/MovingServicesSwiper';


const meta = {
    title: 'Components/Companies/MovingServicesSwiper',
    component: MovingServicesSwiper,
    parameters: {
        nextjs: {
          appDirectory: true,
        },
    },
} satisfies Meta<typeof MovingServicesSwiper>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {}

