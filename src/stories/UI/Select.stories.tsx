import type { Meta, StoryObj } from '@storybook/react';
import { SelectEl } from '@/components/UI/Select/Select';
import { useState } from 'react';
import { ISelectOptions } from '@/types/select.types';
import { locationsFilterArray } from '@/data/dataFilters';
const meta = {
    title: 'UI/Select',
    component: SelectEl,
    parameters: {
        nextjs: {
            appDirectory: true,
        },
      },
} satisfies Meta<typeof SelectEl>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        options: locationsFilterArray,
        selectedOption: locationsFilterArray[0],
        setSelectedOption: () => {}
    },

    render: function Render(args) {
        const [selectOption, setSelectOption] = useState<ISelectOptions>(args.selectedOption)

        return (
            <SelectEl options={args.options} selectedOption={selectOption} setSelectedOption={setSelectOption} />
        )
    }
}
