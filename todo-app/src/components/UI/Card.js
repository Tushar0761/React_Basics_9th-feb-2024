function Card(props) {
  return (
    <div className={props.className} style={props.style ? props.style : {}}>
      {props.children}
    </div>
  );
}

export default Card;
