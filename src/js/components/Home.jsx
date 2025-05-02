import { useState, useEffect } from "react";
import Card from "./Card";

//create your first component
const Home = (props) => {
    const [seconds, setSeconds] = useState(parseInt(props.seconds));

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

        return () => clearInterval(interval);
    }, []);

    // Converts the number into an array (last 6 digits only)
    let digits = seconds.toString().padStart(6, '0').split('');

    return (
        <div className="container-fluid bg-black d-flex py-4 justify-content-center">
            <Card title="clock" />

            <Card title={digits[0]} />
            <Card title={digits[1]} />
            <Card title={digits[2]} />
            <Card title={digits[3]} />
            <Card title={digits[4]} />
            <Card title={digits[5]} />
        </div>
    );
};

export default Home;