import type { Meta, StoryObj } from '@storybook/react';
import { CompaniesPaginatedItems } from '@/components/UI/Companies/CompaniesPagination/CompaniesPagination';
import { testCompaniesData } from './testData';

const meta = {
    title: 'Components/Companies/CompaniesPaginatedItems',
    component: CompaniesPaginatedItems,
    parameters: {
        nextjs: {
          appDirectory: true,
        },
      },
} satisfies Meta<typeof CompaniesPaginatedItems>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
      itemsPerPage: 8,
      data: testCompaniesData
    }
}