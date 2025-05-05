const Card = (props) => {
    const clockIcon = <i className="fa-solid fa-clock"></i>;
    let value = props.value;
    let margin = "mx-2";

    if (value === 'clock') {
        value = clockIcon;
        margin = "mx-5";
    }

    return (
        <div className={`card bg-dark ${margin} text-center`}>
            <div className="card-body text-white">
                <h5 className="card-value">{value}</h5>
            </div>
        </div>
    );
};

export default Card;