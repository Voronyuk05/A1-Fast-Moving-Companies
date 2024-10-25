import type { Meta, StoryObj } from '@storybook/react';
import { Company } from "@/components/UI/Companies/Company/Company";
import { testCompanyData } from './testData';

const meta = {
    title: 'Components/Companies/Company',
    component: Company,
    parameters: {
        nextjs: {
          appDirectory: true,
        },
      },
} satisfies Meta<typeof Company>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: testCompanyData
}
