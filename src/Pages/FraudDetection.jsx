import React from 'react'
import './Pages.css'

import Navbar from '../Components/Navbar/Navbar'

import { Chart } from 'chart.js/auto';
import { useEffect, useRef } from 'react';

export default function FraudDetection() {

  const chartRef = useRef(null); // React way of referencing the canvas element
  const chartInstance = useRef(null); // Store chart instance so we can destroy it later if needed

  useEffect(() => {
    // Prevent multiple charts being created if component re-renders
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    chartInstance.current = new Chart(chartRef.current, {
      type: 'bar',
      data: {
        labels: ["Valid", "Suspicious", "Fraudulent"],
        datasets: [{
          label: "Return Category Counts",
          data: [1200, 450, 120],
          backgroundColor: ["#4CAF50", "#FFC107", "#F44336"]
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false },
          title: {
            display: true,
            text: 'Fraud Detection Overview'
          }
        }
      }
    });

    // Cleanup on unmount
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
          <h2>🛡️ Fraud Detection Model</h2>
          <p>
              AI-based fraud detection analyzes return patterns and user behavior to flag suspicious returns.
              Models are trained on historical returns to improve over time.
          </p>
          <canvas ref={chartRef} width="600" height="300"></canvas>
        </div>
    </div>
  )
}
