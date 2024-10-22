import type { Meta, StoryObj } from '@storybook/react';
import { SortByFilter } from '@/components/UI/SortByFilter/SortByFilter';
import { locationsFilterArray } from '@/data/dataFilters';

const meta = {
    title: 'UI/SortByFilter',
    component: SortByFilter,
    parameters: {
        nextjs: {
            appDirectory: true,
        },
      },
} satisfies Meta<typeof SortByFilter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        options: locationsFilterArray,
        filterParamLabel: 'Location',
        searchParamName: 'addres'
    },
}
