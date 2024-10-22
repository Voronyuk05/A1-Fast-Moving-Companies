import type { Meta, StoryObj } from '@storybook/react';
import CompanyMapLocations from '@/components/UI/Companies/CompanyMapLocations/CompanyMapLocations';
import { testCompanyData } from './testData';

const meta = {
    title: 'Components/Companies/CompanyMapLocations',
    component: CompanyMapLocations,
    parameters: {
        nextjs: {
          appDirectory: true,
        },
      },
} satisfies Meta<typeof CompanyMapLocations>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        location: testCompanyData.addres
    }
}