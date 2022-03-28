import React from 'react';
import { CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const MyLineChart = () => {
     const data = [
          {
               name: 'Supplier A',
               Price: 4000,
               Sales: 2400,
               Due: 2400,
          },
          {
               name: 'Supplier B',
               Price: 3000,
               Sales: 1398,
               Due: 2210,
          },
          {
               name: 'Supplier C',
               Price: 2000,
               Sales: 9800,
               Due: 2290,
          },
          {
               name: 'Supplier D',
               Price: 2780,
               Sales: 3908,
               Due: 2000,
          },
          {
               name: 'Supplier E',
               Price: 1890,
               Sales: 4800,
               Due: 2181,
          },
          {
               name: 'Supplier F',
               Price: 2390,
               Sales: 3800,
               Due: 2500,
          },
          {
               name: 'Supplier G',
               Price: 3490,
               Sales: 4300,
               Due: 2100,
          },
     ];
     return (
          <LineChart width={800} height={500} data={data}>
               <Line dataKey={'Price'}></Line>
               <Line dataKey={'Sales'}></Line>
               <Line dataKey={'Due'}></Line>
               <Legend />
               <Tooltip />
               <CartesianGrid strokeDasharray="1" />
               <YAxis />
               <XAxis dataKey={'name'} />
          </LineChart >
     );
};

export default MyLineChart;