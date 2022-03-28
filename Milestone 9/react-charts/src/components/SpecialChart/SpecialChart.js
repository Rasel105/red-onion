import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BarChart, Bar, Tooltip, YAxis, XAxis, Legend, CartesianGrid } from 'recharts';
const SpecialChart = () => {
     const [phone, setPhone] = useState([])
     useEffect(() => {
          axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
               .then(data => {
                    const loadedData = data.data.data;
                    const phoneData = loadedData.map(phone => {
                         const parts = phone.slug.split('-')
                         const ph = {
                              name: parts[0],
                              value: parseInt(parts[1])

                         };
                         return ph;
                    })
                    setPhone(phoneData)
                    console.log(phoneData)
               })
     }, [])
     return (
          <BarChart width={800} height={400} data={phone}>
               <Bar dataKey="value" fill="#8884d8" />
               <Tooltip />
               <Legend />
               <YAxis />
               <XAxis dataKey={'name'} />
          </BarChart>
     );
};

export default SpecialChart;