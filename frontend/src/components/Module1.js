import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

export default function Module1() {
  const [noise, setNoise] = useState(20);
  const [size, setSize] = useState(50);
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });

  const generateData = () => {
    const labels = [];
    const values = [];
    for (let j = 0; j < size; j++) {
      labels.push(j + 1);
      const base = j;
      const y = base + (Math.random() - 0.5) * noise;
      values.push(y);
    }
    setChartData({
      labels: labels,
      datasets: [
        {
          label: 'Data – The Foundation Simulation',
          data: values,
          borderColor: 'rgba(75,192,192,1)',
          fill: false
        }
      ]
    });
  };

  useEffect(() => {
    generateData();
  }, [noise, size]);

  return (
    <div style={{ padding: '1em' }}>
      <h2>Data – The Foundation Simulation</h2>
      <div>
        <label>
          Sample Size: {size}
          <input
            type="range"
            min="10"
            max="100"
            value={size}
            onChange={e => setSize(parseInt(e.target.value))}
          />
        </label>
      </div>
      <div>
        <label>
          Noise: {noise}
          <input
            type="range"
            min="0"
            max="100"
            value={noise}
            onChange={e => setNoise(parseInt(e.target.value))}
          />
        </label>
      </div>
      <Line data={chartData} />
      <p>Move the sliders to see how noise and sample size affect the generated data.</p>
    </div>
  );
}