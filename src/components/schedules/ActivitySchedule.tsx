import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";
import { getDelayValue } from "../../utils/getDelayValue";
import Loading from "../UI/Loading";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ActivitySchedule = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, getDelayValue());
  }, []);

  const labels = [
    "Хозяин спит",
    "Хозяин завтракает",
    "Хозяин ушел на работу",
    "Прилетела муха",
    "Захотелось поесть",
    "Под окном мяучит кошка",
    "В дверь позвонили",
    "Сверлят дрелью в стенку",
    "Хозяин вернулся, ужинает",
    "Хозяин смотрит телевизор",
    "Хозяин лег спать",
  ];
  const yLabels = [
    "Спит",
    "Дремлет",
    "Воюет со сном",
    "Обычная деятельность",
    "Легкий интерес а происходящему",
    "Здоровая заинтересованность",
    "Пик активности",
  ];
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom" as const,
      },
    },
    scales: {
      y: {
        ticks: {
          callback: function (value: string | number, index: number) {
            return `${yLabels[index]} (${value})`;
          },
          stepSize: 1,
        },
        min: 1,
        max: 7,
      },
    },
    maintainAspectRatio: false,
  };
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Линия активности кота",
        data: [7, 6, 1, 5.5, 4.5, 7, 4.5, 3, 7, 2, 7],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };
  return (
    <div style={{ minHeight: "45vh", position: "relative" }}>
      {isLoading ? (
        <Loading loadingText={"Загрузка..."} />
      ) : (
        <Line options={options} data={data} />
      )}
    </div>
  );
};

export default ActivitySchedule;
