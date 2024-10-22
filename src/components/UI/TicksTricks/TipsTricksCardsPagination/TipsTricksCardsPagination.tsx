import { useEffect, useState } from 'react';
import { TipsTricksCardsList } from '../TipsTricksCardsList/TipsTricksCardsList';
import { ITipsTricksArticle } from '@/types/tipsTricks.types';
import ReactPaginate from 'react-paginate';
import styles from './TipsTricksCardsPagination.module.scss'


interface IPaginationEvent extends React.MouseEvent {
    selected: number
}

export const TipsTricksCardsPagination = ({data, itemsPerPage}: {data: ITipsTricksArticle[], itemsPerPage: number}) => {
    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;
    const dataLength = data?.length
    const currentItems = data?.slice(itemOffset, endOffset);
    const pageCount = dataLength ? Math.ceil(dataLength / itemsPerPage) : 1
  
    useEffect(() => {
  
    })
  
    const handlePageClick = (event: IPaginationEvent) => {
      const newOffset = dataLength ? (event.selected * itemsPerPage) % dataLength : 1
      setItemOffset(newOffset);
    };
    
    if (currentItems) 
    return (
      <>
        <TipsTricksCardsList data={currentItems} />
        <ReactPaginate
          className={`${data.length <= itemsPerPage ? styles.hidden : ''} ${styles.pagintaion}`}
          previousClassName={styles.previous}
          nextClassName={styles.next}
          disabledClassName={styles.disabled}
          activeLinkClassName={styles.active}
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      </>
    ); 
}