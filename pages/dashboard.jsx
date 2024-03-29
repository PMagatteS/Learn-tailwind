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
            
            borderColor: 'transparent',
            borderWidth: 5,
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

      // const BarBackground = {
      //   id: 'progressBar',
      //   beforeDatasetsDraw(chart, args, pluginOptions){
      //     const {ctx, data, chartArea: {top, bottom, left, right, width, height}, scales:{x, y}} = chart
      //     ctx.save()
      //     console.log(x);
      //     const bgWidth =  width  / x.ticks.length  * data.datasets[0].barPercentage * data.datasets[0].categoryPercentage /4
      //     ctx.fillRect(x.getPixelForValue(0)/4+bgWidth*2, 0, bgWidth, height) 
      //     data.datasets[0].data.map((el, index) => {

      //     })
      //   }
      // }
      
      const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
      
      const data = {
        labels,
        datasets: [
          {
            label: 'Dataset 1',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 100000 })),
            backgroundColor: 'rgb(15 118 110)',
            barPercentage: 0.4,
            categoryPercentage: 0.8, 
            
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
    return <Bar options={options} data={data}/>
}

const LineChart = () => {
    const options = {
      pointBorderColor: 'transparent',
      tension: 0.5,
      responsive: true,
      maintainAspectRatio: false,
      scales: {
          x: {
            ticks: {
                display: false
            },grid: {
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
            backgroundColor: 'transparent',
          },
          {
            label: 'Dataset 2',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'transparent',
          },
        ],
      };
      
    return <Line options={options} data={data} />
}

const ProgressBarChart = () => {
  const options = {
  indexAxis: 'y',
  maintainAspectRatio: false,
  borderRadius: 3,
  elements: {
    bar: {
      borderWidth: 0,
    },
  },
  responsive: true,
   scales: {
          x: {
            ticks: {
              display: false
          },
          grid: {
            display: false,
            drawBorder: false
        }
        },          
        y: {
          beginAtZero: true,
          ticks: {
              display: false
          },
          grid: {
            display: false,
            drawBorder: false
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

      const progressBar = {
        id: 'progressBar',
        beforeDatasetsDraw(chart, args, pluginOptions){
          const {ctx, data, chartArea: {left, right, width, height}, scales:{y}} = chart
          ctx.save()
          const bgHeight = height  / y.ticks.length  * data.datasets[0].barPercentage * data.datasets[0].categoryPercentage
          data.datasets[0].data.map((el, index) => {
            const fontSize = 10          
            ctx.font = `${fontSize}px sans serif`
            ctx.fillStyle = data.datasets[0].backgroundColor[index]
            ctx.textAlign = "right"
            ctx.textBaseline = "center"
            ctx.fillText(data.datasets[0].data[index] +'% ', right, y.getPixelForValue(index)-fontSize)


            ctx.beginPath()
            ctx.fillStyle = data.datasets[0].borderColor[index]
            ctx.fillRect(left, y.getPixelForValue(index) - bgHeight/2, width, bgHeight)
          })
        }
      }

const labels = ['January', 'February', 'March', 'April'];

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 100 })),
      borderColor: ['rgba(31, 97, 141, 0.3)','rgba(34, 153, 84, 0.3)','rgba(176, 58, 46, 0.3)','rgba(3212, 172, 13 , 0.3)', ],
      backgroundColor: ['rgba(31, 97, 141, 1)','rgba(34, 153, 84, 1)','rgba(176, 58, 46, 1)','rgba(3212, 172, 13 , 1)', ],
      barPercentage: 0.3,
      categoryPercentage: 0.8,
    },
  ],
};
  return <Bar options={options} data={data} plugins={[progressBar]} />;
}

const DoughnutElement = () => {
  return( 
    <div className="dark:bg-slate-600 min-h-[340px] bg-white table w-11/12 md:w-[340px] shadow-2xl">
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
    <div className="dark:bg-slate-600 w-11/12 min-h-[340px] table  bg-white relative md:w-[680px] shadow-2xl">
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
    <div className="dark:bg-slate-600 w-11/12 md:w-[680px] h-[340px] bg-white table shadow-2xl">
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
  <div className="dark:bg-slate-600 w-11/12 md:w-[340px] h-[340px] bg-white table relative shadow-2xl">
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