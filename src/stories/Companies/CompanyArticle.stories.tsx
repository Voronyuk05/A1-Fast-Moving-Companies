import type { Meta, StoryObj } from '@storybook/react';
import { CompanyArticle } from '@/components/UI/Companies/CompanyArticle/CompanyArticle';
import { testCompanyData } from './testData';



const meta = {
    title: 'Components/Companies/CompanyArticle',
    component: CompanyArticle,
    parameters: {
        nextjs: {
          appDirectory: true,
        },
      },
} satisfies Meta<typeof CompanyArticle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        data: testCompanyData
    }
}