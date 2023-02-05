import React from 'react';
import {SimpleDrawer} from './drawers';
import { Doughnut, Bar, Line } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title,  PointElement, LineElement, } from 'chart.js';
import { faker } from '@faker-js/faker';

ChartJS.register(ArcElement, Tooltip, Legend,  CategoryScale, LinearScale, BarElement, Title,  PointElement, LineElement,);



const DoughnutChart = () => {
     const data = {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
      const options = {cutout:'70%', plugins: {legend: {display: false,},}}
     
    return <Doughnut data={data} options={options}  />
}

const VerticalBarChart = () => {
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          },
          title: {
            display: true,
            text: 'Chart.js Bar Chart',
          },
        },
      };
      
      const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
      
      const data = {
        labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 100000 })),
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'Dataset 2',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 100000 })),
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },          
          {
            label: 'Dataset 3',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 100000 })),
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },          {
            label: 'Dataset 4',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 100000 })),
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      };
    return <Bar options={options} data={data} />
}

const LineChart = () => {
    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Line Chart',
          },
        },
      };
      
      const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
      
       const data = {
        labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
          {
            label: 'Dataset 2',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
          },
        ],
      };
      
    return <Line options={options} data={data} />
}

const dashboard = () => {
    return (
        <>
           <div className="w-screen h-screen flex shadow-2xl">

            <SimpleDrawer/>

            <div className="w-full h-full bg-slate-100">
                <div className="flex w-full h-1/2 justify-around">
                    <div className="w-1/4 h-full "><DoughnutChart/></div>
                    <div className="w-2/4 h-full "><VerticalBarChart/></div>
                    
                </div>

                <div className="flex w-full h-1/2 justify-around">
                    <div className="w-2/4 h-full "><LineChart/></div>
                </div>
            </div>

            </div> 
 
        </>
    );
};

export default dashboard;