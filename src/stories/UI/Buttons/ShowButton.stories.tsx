import type { Meta, StoryObj } from '@storybook/react';
import { ShowButton } from '@/components/UI/Buttons/ShowButton';
import { useState } from 'react';

const meta = {
    title: 'UI/Buttons/ShowButton',
    component: ShowButton,
    parameters: {
        nextjs: {
          appDirectory: true,
        },
    },
} satisfies Meta<typeof ShowButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        showed: false
    },

    render: function Render(args) {
        const [showed, setShowed] = useState(args.showed)
        return (
            <ShowButton showed={showed} onClick={() => setShowed(!showed)}/>
        )
    }
}