import Card from "./Card";

//create your first component
const Home = ({ seconds }) => {
    // Converts the number into an array (last 6 digits only)
    let digits = seconds.toString().padStart(6, '0').split('');

    return (
        <div className="container-fluid bg-black d-flex py-4 justify-content-center">
            <Card value="clock" />

            {digits.map((digit, index) => (
                <Card key={index} value={digit} />
            ))}
        </div>
    );
};

export default Home;