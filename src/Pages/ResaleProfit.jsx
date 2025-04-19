import React from 'react'
import './Pages.css'

import Navbar from '../Components/Navbar/Navbar'

import { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

export default function ResaleProfit() {

  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(chartRef.current, {
      type: 'line',
      data: {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
        datasets: [
          {
            label: "Resale Probability",
            data: [0.6, 0.65, 0.7, 0.8],
            borderColor: "#4CAF50",
            tension: 0.3
          },
          {
            label: "Expected Profit ($)",
            data: [4000, 4200, 4600, 5100],
            borderColor: "#FF9800",
            tension: 0.3
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: 'Resale Trend & Profit Forecast'
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
        <Navbar/>
        <div className="section">
          <h2>📈 Resale Probability & Profit Model</h2>
          <p>
              Predicts the likelihood of reselling an item and the potential profit margins.
              This helps in making data-driven decisions for refurbishing and restocking.
          </p>
          <canvas ref={chartRef} width="600" height="300"></canvas>
        </div>
    </div>
  )
}
