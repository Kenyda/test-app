import React, {useEffect, useState} from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import {getDelayValue} from "../../utils/getDelayValue";
import Loading from "../UI/Loading";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const BreedsSchedule = () => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, getDelayValue())
    }, [])

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom' as const,
            },
        },
    };

    const labels = ['Шотландская порода', 'Мейн-кун', 'Британская порода', 'Бенгальская порода',
        'Сфинкс', 'Ориенталы', 'Сиамская порода', 'Сибирская кошка', 'Бурма', 'Абиссинская кошка'];

    const data = {
        labels,
        datasets: [
            {
                label: 'Количество поисковых запросов',
                data: [790000, 680000, 500000, 285000, 200000, 186000, 160000, 125000, 120000, 110000],
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    };
    return (
        isLoading
            ? <Loading loadingText={"Загрузка..."}/>
            : <Bar options={options} data={data} />
    );
};

export default BreedsSchedule;