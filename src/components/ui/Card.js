import classes from "./Card.module.css";

function Card(props) {
  function giveCard() {
    if (props.id === "form") {
      return classes.noflexcard;
    }
    return classes.card;
  }

  return <div className={giveCard()}>{props.children}</div>;
}

export default Card;
