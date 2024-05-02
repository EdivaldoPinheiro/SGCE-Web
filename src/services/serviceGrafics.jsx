import React from 'react';
import { Bar } from 'react-chartjs-2';

const ServiceGrafics = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Sales',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };

  return (
    <div>
      <h2>Grafico</h2>
       <Bar
        data={data}
        options={{
          title: {
            display: true,
            text: 'meses',
            fontSize: 20,
          },
          legend: {
            display: true,
            position: 'right',
          },
        }}
      /> 
    </div>
  );
};

export default ServiceGrafics;
