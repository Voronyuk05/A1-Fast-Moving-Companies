import type { Meta, StoryObj } from '@storybook/react';
import BestCompaniesByLocation from '@/components/UI/Companies/BestCompaniesByLocation/BestCompaniesByLocation';


const meta = {
    title: 'Components/Companies/BestCompaniesByLocation',
    component: BestCompaniesByLocation,
    parameters: {
        nextjs: {
          appDirectory: true,
        },
      },
} satisfies Meta<typeof BestCompaniesByLocation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        location: 'Los Angeles'
    }
}