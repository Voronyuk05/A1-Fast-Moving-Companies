import type { Meta, StoryObj } from '@storybook/react';
import { Path } from '@/components/UI/Path/Path';
const meta = {
    title: 'UI/Path',
    component: Path,
    parameters: {
        nextjs: {
            appDirectory: true,
            navigation: {
                pathname: '/location'
            }
        },
      },
} satisfies Meta<typeof Path>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {}