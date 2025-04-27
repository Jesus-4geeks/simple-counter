const Card = (props) => {
    const clockIcon = <i class="fa-solid fa-clock"></i>;
    let title = props.title;
    let margin = "mx-2";

    if (title === 'clock') {
        title = clockIcon;
        margin = "mx-5";
    }

    return (
        <div className={`card bg-dark ${margin} text-center`}>
            <div className="card-body text-white">
                <h5 className="card-title">{title}</h5>
            </div>
        </div>
    );
};

export default Card;