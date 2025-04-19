import React from 'react'
import './Pages.css'

import Navbar from '../Components/Navbar/Navbar'

import { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

export default function Warehouse() {

  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(chartRef.current, {
      type: 'pie',
      data: {
        labels: ["Warehouse A", "Warehouse B", "Warehouse C"],
        datasets: [{
          label: "Allocation %",
          data: [40, 35, 25],
          backgroundColor: ["#2196F3", "#3F51B5", "#00BCD4"]
        }]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Warehouse Distribution for Returns'
          }
        }
      }
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);


  return (
    <div className='page-container'>
        <Navbar />
        <div className="section">
          <h2>🏭 Warehouse Allocation Model</h2>
          <p>
              Our dynamic warehouse allocation model assigns returned goods to the best warehouse
              considering distance, cost, and capacity.
          </p>
          <canvas ref={chartRef} width="400" height="300"></canvas>
        </div>
    </div>
  )
}
