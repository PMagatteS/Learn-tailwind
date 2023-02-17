import React from 'react';
import { Doughnut, Bar, Line } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title,  PointElement, LineElement,} from 'chart.js';
import { faker } from '@faker-js/faker';

ChartJS.register(ArcElement, Tooltip, Legend,  CategoryScale, LinearScale, BarElement, Title,  PointElement, LineElement,);



const DoughnutChart = () => {
     const data = {
        labels: ['Red', 'Blue', 'Yellow',],
        datasets: [
          {
            label: '# of Votes',
            data: [12, 19, 3],
            backgroundColor: [
              '#9349ed',
              '#a471d6',
              '#e5e5e5'
            ],
           
            borderWidth: 3,
          },
        ],
      };
      const options = {cutout:'80%', borderRadius: 5, responsive: true, maintainAspectRatio: false,plugins: {legend: {display: false,},}}
     
    return <Doughnut data={data} options={options}/>
}

const VerticalBarChart = () => {
    const options = { 
      barPercentage: 0.6,
      categoryPercentage: 0.6, 
      borderRadius: 2,
      maintainAspectRatio: false,
        responsive: true,
        scales: {
          x: {
            ticks: {
                display: false
            },
            grid:{
              display: false
            },
        },          
        y: {
          ticks: {
              display: false
          }
      }
      },
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: false,
            text: 'Chart.js Bar Chart',
          },

        },
      };

      const barPlugin = {
        id: 'barplugin',
        beforeDatasetsDraw(chart, args, pluginOptions){
          const {ctx, data, chartArea: {top, width, height}, scale:{x, y}} = chart
          ctx.save()
        }
      }
      
      const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
      
      const data = {
        labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 100000 })),
            backgroundColor: 'rgb(15 118 110)',
            
          },
          {
            label: 'Dataset 2',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 100000 })),
            backgroundColor: 'rgb(15 118 110)',
          },          
          {
            label: 'Dataset 3',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 100000 })),
            backgroundColor: 'rgb(15 118 110)',
          },          {
            label: 'Dataset 4',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 100000 })),
            backgroundColor: 'rgb(15 118 110)',
          },
        ],
      };
    return <Bar options={options} data={data} plugins={[barPlugin]}/>
}

const LineChart = () => {
    const options = {

        responsive: true,
        maintainAspectRatio: false,
         scales: {
          x: {
            ticks: {
                display: false
            }
        },          
        y: {
          ticks: {
              display: false
          }
      }
      },
        plugins: {
          legend: {
            display: false
          },
          title: {
            display: false,
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

const ProgressBarChart = () => {
  const options = {
  indexAxis: 'y',
  maintainAspectRatio: false,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
   scales: {
          x: {
            ticks: {
                display: false
            }
        },          
        y: {
          ticks: {
              display: false
          }
      }
      },
  plugins: {
    legend: {
      display: false
    },
    title: {
      display: false,
      text: 'Chart.js Horizontal Bar Chart',
    },
  },
};

const labels = ['January', 'February', 'March', 'April'];

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};
  return <Bar options={options} data={data} />;
}

const DoughnutElement = () => {
  return( 
    <div className="min-h-[340px] bg-white table w-[340px] shadow-2xl">
    <div className="w-full h-10 bg-emerald-900 text-slate-200 text-lg text-center">
        <h2>Doughnut</h2>
    </div>
    <div className="table-row h-full relative">
    <div className="w-3/4 h-fit m-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="relative">
    <DoughnutChart/>
      </div>
    </div>

    </div>
    </div>      
  ) 
}

const VerticalElement = () => {
  return(
    <div className=" min-h-[340px] table  bg-white relative w-[680px] shadow-2xl">
    <div className="w-full h-10 bg-emerald-900 text-slate-200 text-lg text-center">
          <h2>Vertical</h2>
      </div>
      <div className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className=''>

      <VerticalBarChart/>
        </div>
      </div>
      </div>
    
  )
}

const LineChartElement = () => {
  return(
    <div className="w-[680px] h-[340px] bg-white table shadow-2xl">
    <div className="w-full h-10 bg-emerald-900 text-slate-200 text-lg text-center">
        <h2>Line</h2>
    </div>
    <div className='table-row h-full'>
    <LineChart/>
    </div> 
    </div> 
  ) 
}

const ProgressBarElement = () => {
  return( 
  <div className="w-[340px] h-[340px] bg-white table relative shadow-2xl">
  <div className="w-full h-10 bg-emerald-900 text-slate-200 text-lg text-center">
      <h2>Progress Bar</h2>
  </div>
  <div className="w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
  <ProgressBarChart/>
  </div>
  </div>) 
}

const dashboard = () => {
    return (
        <>
           <div className="w-screen h-full flex flex-col gap-10 [&>*]:mx-auto p-8">   
           <DoughnutElement/>           
           <VerticalElement/>           
           <LineChartElement/>           
           <ProgressBarElement/>           
            </div>       
         </>
    );
};

export default dashboard;