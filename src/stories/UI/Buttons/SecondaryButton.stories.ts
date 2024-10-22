import type { Meta, StoryObj } from '@storybook/react';
import { SecondaryButton } from '@/components/UI/Buttons/SecondaryButton';

const meta = {
    title: 'UI/Buttons/SecondaryButton',
    component: SecondaryButton,
    parameters: {
        nextjs: {
          appDirectory: true,
        },
      },
} satisfies Meta<typeof SecondaryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'Click'
    }
}