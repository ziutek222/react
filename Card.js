import './Card.css';

function Card(props) {
    const classes = 'CARD' + props.className
    return <div className={classes}>{props.children}</div>;
}

export default Card;