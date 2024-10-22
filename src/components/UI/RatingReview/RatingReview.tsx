import styles from './RatingReview.module.scss'

export const RatingReview = ({ rating, setRating }: {rating: number, setRating: (star: number) => void}) => {
    return (<div>
      {[1, 2, 3, 4, 5].map((star: number, index: number) => (
          <span
          key={index}
            className={`${styles.star} ${rating >= star ? styles.active : styles.disabled}`}
            onClick={() => {
              setRating(star)
            }}
          >
            {' '}
            ★{' '}
          </span>
        )
      )}
    </div>
  )
}