import React from 'react';

const Activity = ({ activity }) => {
     const { title, img } = activity;
     console.log(img)
     return (
          <div>
               <img src={img} alt="" />
               <h2>{title}</h2>
          </div>
     );
};

export default Activity;