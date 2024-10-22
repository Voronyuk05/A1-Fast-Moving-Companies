import type { Meta, StoryObj } from '@storybook/react';
import { RatingReview } from '@/components/UI/RatingReview/RatingReview';
import { useState } from 'react';
const meta = {
    title: 'UI/RatingReview',
    component: RatingReview,
    parameters: {
        nextjs: {
            appDirectory: true,
        },
      },
} satisfies Meta<typeof RatingReview>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        rating: 5,
        setRating: () => {}
    },

    render: function Render(args) {
        const [rating, setRating] = useState(args.rating)

        return (
            <RatingReview rating={rating} setRating={setRating} />
        )
    }
}