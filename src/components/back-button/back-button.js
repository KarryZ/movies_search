import React, { useCallback } from 'react';
import './back-button.css'; 


const BackButton = ({onCloseMovieDetail}) => {
  const onClickHandler = useCallback( () => { onCloseMovieDetail() }, [onCloseMovieDetail] )

  return (
    <div className='back-button' onClick={onClickHandler}>     
     </div>
      
  )
}

export default BackButton;