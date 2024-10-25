import type { Meta, StoryObj } from '@storybook/react';
import { CompanyPageHero } from '@/components/UI/Companies/CompanyPageHero/CompanyPageHero';
import { testCompanyData } from './testData';

const meta = {
    title: 'Components/Companies/CompanyPageHero',
    component: CompanyPageHero,
    parameters: {
        nextjs: {
          appDirectory: true,
        },
      },
} satisfies Meta<typeof CompanyPageHero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
      data: testCompanyData,
      reviews: 5
    },
}
