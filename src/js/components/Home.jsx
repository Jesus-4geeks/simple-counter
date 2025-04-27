import { useState, useEffect } from "react";
import Card from "./Card";

//create your first component
const Home = () => {
    const [seconds, setSeconds] = useState(0);

	// Configures the setInterval function for the increment of the number
    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prevSeconds => {
				// In case the counter overflows
				if (prevSeconds >= 999_999) {
					return 0;
				}

				return prevSeconds + 1;
			});
        }, 1000);

        // Limpiar el intervalo cuando el componente se desmonte
        return () => clearInterval(interval);
    }, []);

    // Converts the number into an array (last 6 digits only)
    let digits = seconds.toString().padStart(6, '0').split('');

    return (
        <div className="container-fluid bg-black d-flex py-4 justify-content-center">
            <Card title="clock" />

            <Card id="pos-0" title={digits[0]} />
            <Card id="pos-1" title={digits[1]} />
            <Card id="pos-2" title={digits[2]} />
            <Card id="pos-3" title={digits[3]} />
            <Card id="pos-4" title={digits[4]} />
            <Card id="pos-5" title={digits[5]} />
        </div>
    );
};

export default Home;