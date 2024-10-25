import type { Meta, StoryObj } from '@storybook/react';
import { GetQuoteForm } from '@/components/UI/Companies/getQuoteForm/GetQuoteForm';
import {  expect, userEvent, within } from '@storybook/test';
import { testCompanyData } from './testData';

const meta = {
    title: 'Components/Companies/GetQuoteForm',
    component: GetQuoteForm,
    parameters: {
        nextjs: {
          appDirectory: true,
        },
        chromatic: { 
            delay: 2000, // Add a delay for async content
        },
    },
} satisfies Meta<typeof GetQuoteForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        companyData: testCompanyData
    },
}

export const FulfilledSubmit: Story = {
    args: {
        companyData: testCompanyData
    },

    play: async ({canvasElement}) => {
        const canvas = within(canvasElement)

        const zipCodeFrom = canvas.getByTestId('zip_code_from');
        const zipCodeTo = canvas.getByTestId('zip_code_to');
        const mail = canvas.getByTestId('mail');
        const date = canvas.getByTestId('date');
        const name = canvas.getByTestId('name');
        const tel = canvas.getByTestId('tel');
        const radioInput = canvas.getAllByTestId('radio_input')[1]

        await userEvent.type(zipCodeFrom, '12345', {
            delay: 10,
        });
        await userEvent.type(zipCodeTo, '54321', {
            delay: 10,
        });
        await userEvent.type(mail, 'mail@gmail.com', {
            delay: 10,
        });
        await userEvent.type(date, '2022-05-15', {
            delay: 10,
        });
        await userEvent.type(name, 'User', {
            delay: 10,
        });
        await userEvent.type(tel, '+7001924581', {
            delay: 10,
        });
        await userEvent.click(radioInput)

        await userEvent.click(canvas.getByTestId('submit_button'))
        
        await expect(await canvas.findByTestId('success')).toBeDefined()
    },

}

export const RejectedSubmit: Story = {
    args: {
        companyData: testCompanyData
    },

    play: async ({canvasElement}) => {
        const canvas = within(canvasElement)

        const zipCodeFrom = canvas.getByTestId('zip_code_from');
        const zipCodeTo = canvas.getByTestId('zip_code_to');
        const mail = canvas.getByTestId('mail');
        const tel = canvas.getByTestId('tel');

        await userEvent.type(zipCodeFrom, '123465', {
            delay: 10,
        });

        await userEvent.type(zipCodeTo, '5431', {
            delay: 10,
        });

        await userEvent.type(mail, 'wrong-mail.com', {
            delay: 10,
        });
        await userEvent.type(tel, '01924', {
            delay: 10,
        });

        await userEvent.click(canvas.getByTestId('submit_button'))
        await expect(await canvas.findByTestId('error')).toBeDefined()
    }
}