import axios from "axios";
import { useState, useEffect } from "react";


const fetchAdvice = () => {
    const [advices, setAdvices] = useState([]);
        
        useEffect(() => {
            async function catchData() {
                const response = await axios.get('https://api.adviceslip.com/advice');
                setAdvices(response.data.slips);
                console.log(advices);
            }
            catchData();
        }, []);
    fetchAdvice();
};

