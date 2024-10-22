import type { Meta, StoryObj } from '@storybook/react';
import LocationsList from '@/components/UI/LocationsList/LocationsList';
const meta = {
    title: 'UI/LocationsList',
    component: LocationsList,
    parameters: {
        nextjs: {
            appDirectory: true,
        },
      },
} satisfies Meta<typeof LocationsList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {}