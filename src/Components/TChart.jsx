import React from 'react';
import {Line} from 'react-chartjs-2';
import {Box, Typography} from '@mui/material';
import 'chartjs-adapter-date-fns';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    TimeScale,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement,
    TimeScale,
    Title,
    Tooltip,
    Legend
);

const TChart = ({transactions}) => {
    const colors = {
        salary: 'rgba(255,206,86,1)', // Yellow
        leisure: 'rgba(75,192,192,1)', // Green
        shopping: 'rgba(255,99,132,1)', // Red
        rent: 'rgba(54,162,235,1)', // Blue
    };

    const datasets = Object.keys(colors).map((category) => {
        const categoryData = transactions
            .filter(t => t.category === category)
            .map(t => ({x: t.date, y: t.amount}));

        return {
            label: category.charAt(0).toUpperCase() + category.slice(1),
            borderColor: colors[category],
            backgroundColor: `${colors[category]}33`, // Couleur semi-transparente
            data: categoryData,
            fill: false,
        };
    });

    const data = {
        datasets: datasets,
    };

    const options = {
        scales: {
            x: {
                type: 'time',
                time: {
                    unit: 'month',
                },
            },
            y: {
                beginAtZero: true,
            },
        },
    };

    return (
        <Box sx={{mt: 4}}>
            <Typography variant="h6" gutterBottom>
                Financial Overview
            </Typography>
            <Line data={data} options={options}/>
        </Box>
    );
};

export default TChart;
