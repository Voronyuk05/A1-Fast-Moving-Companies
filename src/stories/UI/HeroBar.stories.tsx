import type { Meta, StoryObj } from '@storybook/react';
import { HeroBar } from '@/components/UI/HeroBar/HeroBar';
import { Headings } from '../../components/UI/Headings/Headings';
const meta = {
    title: 'UI/HeroBar',
    component: HeroBar,
    parameters: {
        nextjs: {
            appDirectory: true,
        },
      },
} satisfies Meta<typeof HeroBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'Title'
    },

    render: function Render(args) {
        return (
            <HeroBar>
                <Headings heading='h3' color='black' weight='700'>{args.children}</Headings>
            </HeroBar>
        )
    }
}

export const BlockColumn: Story = {
    args: {
        children: 'Title',
        direction: 'column'
    },

    render: function Render(args) {
        return (
            <HeroBar {...args}>
                <>
                    <Headings heading='h5' color='primary' weight='500'>Sub Title</Headings>
                    <Headings heading='h3' color='black' weight='700'>{args.children}</Headings>
                </>
            </HeroBar>
        )
    }
}

export const LineColumn: Story = {
    args: {
        children: 'Title'
    },

    render: function Render(args) {
        return (
            <HeroBar {...args}>
                <>
                    <Headings heading='h4' color='black' weight='700'>Text </Headings>
                    <Headings heading='h3' color='black' weight='700'>{args.children}</Headings>
                    <Headings heading='h4' color='black' weight='700'> Text</Headings>
                </>
            </HeroBar>
        )
    }
}