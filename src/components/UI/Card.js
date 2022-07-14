import './Card.css'
 
function Card(props) {
    var classes = "card "+props.className
    // return <div className="card expenses">{props.children}</div>   // instead we can also use like this but second is preffered one
    return <div className={classes}>{props.children}</div>
}

export default Card;