import type { Meta, StoryObj } from '@storybook/react';
import { PrimaryButton } from '@/components/UI/Buttons/PrimaryButton';

const meta = {
    title: 'UI/Buttons/PrimaryButton',
    component: PrimaryButton,
    parameters: {
        nextjs: {
          appDirectory: true,
        },
      },
} satisfies Meta<typeof PrimaryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'Click'
    }
}