import { ITipsTricksComment } from '@/types/tipsTricks.types'
import { Headings } from '../../Headings/Headings';
import { Paragraph } from '../../Paragraph/Paragraph';
import { TipsTricksCommentForm } from '../TipsTricksCommentForm/TipsTricksCommentForm';
import { useAtom } from 'jotai';
import { leaveCommentFormId } from '@/store/comments';
import { useState } from 'react';
import styles from './TipsTricksComment.module.scss'

export const TipsTricksComment = ({commentData, articleId, refetch}: {commentData: ITipsTricksComment, articleId: number, refetch?: () => void}) => {
    const {id, userComment, publishedAt, comments} = commentData
    const [isLeaveCommentFormId, setIsLeaveCommentFormId] = useAtom(leaveCommentFormId) 
    const [isShowChildren, setIsShowChildren] = useState(true)
    
    const handleToggleForm = () => {
        if (isLeaveCommentFormId === id) {
            setIsLeaveCommentFormId(0)
        } else {
            setIsLeaveCommentFormId(id)
        }
    }

    return (
        <div className={styles.comment_list}>
            <div className={styles.user_comment}>
                <div className={styles.comment_head}>
                    <Headings heading='h4' color='black' weight='500'>User</Headings>
                    <Headings heading='h5' color='black' weight='300'>{publishedAt}</Headings>
                </div>
                <div className={styles.comment_body}>
                    <Paragraph color='black' weight='500'>{userComment}</Paragraph>
                </div>
                <div className={styles.comment_footer}>
                    <Headings heading='h5' color='primary' weight='500' onClick={handleToggleForm} data-testid='toggle_comment_form'>{`${isLeaveCommentFormId === id ? 'Close' : 'Answer'}`}</Headings>
                    {isLeaveCommentFormId === id && 
                    <div className={styles.post_comment_form}>
                        <TipsTricksCommentForm 
                        itemData={{
                        id: id,
                        userComment: userComment,
                        publishedAt: publishedAt,
                        comments: comments}} 
                        articleId={articleId} 
                        refetch={refetch} />
                    </div>}
                </div>
            </div>
            {comments.length > 0 && <div className={styles.comment_children}>
                {isShowChildren ? (
                    <>
                        <div className={styles.left_bar} onClick={() => setIsShowChildren(!isShowChildren)} data-testid='branch'></div>
                        <div className={styles.children}>
                            {comments.map((commentData) => (
                                <TipsTricksComment
                                key={commentData.id}
                                commentData={commentData}                        
                                articleId={articleId}
                                refetch={refetch}/>
                            ))}
                        </div>
                    </>
                ) : (
                    <Headings heading='h5' color='secondary' weight='500' onClick={() => setIsShowChildren(!isShowChildren)} data-testid='hidden_children'>Show replies</Headings>
                )}
            </div>}
        </div>
    )
}