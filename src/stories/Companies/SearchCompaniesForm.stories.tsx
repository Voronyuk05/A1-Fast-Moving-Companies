import type { Meta, StoryObj } from '@storybook/react';
import { SearchCompaniesForm } from '@/components/UI/Companies/SearchCompaniesForm/SearchCompaniesForm';
import {   userEvent, within } from '@storybook/test';

const meta = {
    title: 'Components/Companies/SearchCompaniesForm',
    component: SearchCompaniesForm,
    parameters: {
        nextjs: {
          appDirectory: true,
        },
    },
} satisfies Meta<typeof SearchCompaniesForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},
}

export const FulfilledSubmit: Story = {
    args: {},

    play: async ({canvasElement}) => {
        const canvas = within(canvasElement)

        const inpuSearch = canvas.getByTestId('name');

        await userEvent.type(inpuSearch, 'California Movers USA', {
            delay: 10,
        });

        await userEvent.click(canvas.getByTestId('submit_button'))
    }
}

