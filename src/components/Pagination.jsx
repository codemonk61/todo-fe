import React from 'react'

const paginationStyle = `
.pagination__wrapper{
            box-sizing: border-box;
            display: flex;
            align-items: center;
            justify-content: flex-end;
            flex: 1;
            gap: 8px;
            margin-top: 10px;
        }
            .pagination {
             height: 24px;
             width: 24px;
             border-radius: 4px;
             border: 1px solid gray;
             cursor: pointer;
             text-align: center;
             line-height: 24px;
            }
            .active__pagination{
             background: #609cff;
              border: 1px solid #609cff;
             color: white;
            }
            .disable{
             pointer-events: none;
             visibility: hidden;
             }
            .enable{
             pointer-events: auto;
             cursor: pointer;
             }
             .arrow{
               font-size: 16px;
               color: gray;
               font-weight: 200

             }

`

const Pagination = ({ length, onClick = () => { }, pageNo = 1, totalPage }) => {

    const handlePaginationClick = (clickedPageNo) => {
        onClick(clickedPageNo)
    }
    const handleNextClick = () => {
        onClick(pageNo + 1)
    }
    const handlePrevClick = () => {
        onClick(pageNo - 1)
    }

    return (
        <>
            <style>
                { paginationStyle }
            </style>
            <div className='pagination__wrapper'>
                <div className={pageNo > 1 ? 'enable arrow' : 'disable arrow'} onClick={handlePrevClick}>
                &#10094;
                </div>
                {
                    Array.from({ length: length }).map((_, index) => {
                        return <div key={index} className={(index + 1) === pageNo ? 'active__pagination pagination' : 'pagination enable'} onClick={() => handlePaginationClick(index + 1)}>
                            {index + 1}
                        </div>
                    })
                }
                <div className={totalPage === pageNo ? 'disable arrow' : 'enable arrow'} onClick={handleNextClick}>
                &#10095;
                </div>
            </div>
        </>
    )
}

export default Pagination