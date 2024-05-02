import { useState, useEffect } from 'react';

const ServiceTime = () => {
    const [currentTimeData, setCurrentTimeData] = useState(null);

    useEffect(() => {
        const getCurrentTime = async () => {
            try {
                const response = await fetch('https://worldtimeapi.org/api/ip');
                const data = await response.json();
                const currentDateTime = new Date(data.datetime);
                const monthString = currentDateTime.toLocaleString('default', { month: 'long' });
                const timeString = currentDateTime.toLocaleTimeString();
                const dateTime2 = monthString + " " + timeString;
                setCurrentTimeData(dateTime2);
                localStorage.setItem('date', dateTime2);
            } catch (error) {
                console.error('Error:', error);
            }
        };
        getCurrentTime();
    }, []);

    return currentTimeData;
};

export default ServiceTime;
