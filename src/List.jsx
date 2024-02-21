import React from 'react';

const List = ({ data }) => {
  return (
    <>
    {
      data.map(i=>{
        return(
          <article className='person' key={i.id}>
          <img src={i.image} alt="pic" />
          <div>
            <h2>{i.name}</h2>
            <p>{i.age}</p>
          </div>
        </article>
        )

      })
    }
     

    </>
  );
};

export default List;
