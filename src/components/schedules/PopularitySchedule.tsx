import React, {useEffect, useState} from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import {getDelayValue} from "../../utils/getDelayValue";
import Loading from "../UI/Loading";

ChartJS.register(ArcElement, Tooltip, Legend);

const PopularitySchedule = () => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, getDelayValue())
    }, [])

    const data = {
        labels: ['США', 'Китай', 'Россия', 'Бразилия', 'Франция', 'Италия',
            'Великобритания', 'Германия', 'Украина', 'Япония'],
        datasets: [
            {
                data: [76.5, 53, 30, 12.5, 9.5, 9.5, 7.75, 7.7, 7.5, 7.2],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgb(232, 116,42, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgb(50, 204, 20, 0.7)',
                    'rgb(102, 186, 255, 0.7)',
                    'rgb(0, 41, 248, 0.7)',
                    'rgb(60, 12, 141, 0.7)',
                    'rgb(161, 94, 234, 0.7)',
                    'rgb(154, 4, 134, 0.7)',
                    'rgb(72, 3, 11, 0.7)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgb(232, 116,42, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgb(50, 204, 20, 1)',
                    'rgb(102, 186, 255, 1)',
                    'rgb(0, 41, 248, 1)',
                    'rgb(60, 12, 141, 1)',
                    'rgb(161, 94, 234, 1)',
                    'rgb(154, 4, 134, 1)',
                    'rgb(72, 3, 11, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom' as const,
            },
        },
    };
    return (
        isLoading
            ? <Loading loadingText={"Загрузка..."}/>
            : <Pie data={data} options={options}/>
    );
};

export default PopularitySchedule;