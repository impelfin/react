import React from 'react';
import './CardList.css';


const CardList = ({search}) => {
    console.log(search)
    return (
        <div className='cardList' >
            {search.map(card => {
                return ( 
                    <div className='card' key={search.EVENT_CODE}>
                    <p>{search.EVENT_CATEGORY}</p>
                    <h2>{search.EVENT_NAME}</h2>
                    <p>{(search.EVENT_BEGIN_DATE).substr(0,10)}</p>
                    <p>~ {(search.EVENT_END_DATE).substr(0,10)}</p>
                    <p>{search.EVENT_PLACE}</p>
                    <p>{search.VIEWS}</p>
                    <p>{search.DOWNLOADS}</p>
                    </div>
                )
                
                
            })}
        </div>
    );
};

export default CardList;