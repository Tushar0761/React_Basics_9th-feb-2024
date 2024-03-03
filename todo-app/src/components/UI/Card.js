const CardClasses =
  "d-flex justify-content-center bg-light  align-items-center";

function Card(props) {
  return (
    <div className={CardClasses + " " + props.className}>{props.children}</div>
  );
}

export default Card;
