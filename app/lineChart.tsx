// LineChart.tsx
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend } from 'chart.js';

// Registrar los componentes necesarios de Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

interface LineChartProps {
  labels: string[];
  data: number[];
}



const LineChart: React.FC<LineChartProps> = ({ data, labels }) => {

  const chartData = {
    labels: labels,
    datasets: [
      {
        label: ' ',
        data: data,
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor:'rgba(255, 255, 255, 0.1)',
        fill: true,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      tooltip: {
        callbacks: {
          label: (context: any) => {
            return `${context.dataset.label}: ${context.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Fecha',
        },
          ticks: {
          autoSkip: true, // Muestra todas las etiquetas
      
        },
      },
      y: {
        title: {
          display: true,
          text: 'Valor',
        },
      },
    },
  };

  return <Line data={chartData} options={chartOptions} />;
}

export default LineChart;
