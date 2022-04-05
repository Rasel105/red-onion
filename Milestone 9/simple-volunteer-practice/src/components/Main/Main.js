import React, { useEffect, useState } from 'react';
import useVolunteers from '../../hooks/useVolunteers';
import Activity from '../Activity/Activity';

const Main = () => {
     const [volunteers, setVolunteers] = useVolunteers()
     const [searchResult, setSearchResult] = useState([])

     const handleSearchchange = event => {
          const searchText = event.target.value
          const match = volunteers.filter(v => v.title.includes(searchText))
          setSearchResult(match)
     }
     return (
          <div>
               <h1>Volunteers Avtivity: {volunteers.length}</h1>
               <div style={{ "margin": '20px' }}>
                    <input onChange={handleSearchchange} type="text" placeholder='Search' />
               </div>
               <div>
                    {
                         searchResult.map(activity => <Activity
                              key={activity._id}
                              activity={activity}
                         />)
                    }
               </div>
          </div>
     );
};

export default Main;