function Button(props) {
  return <button {...props.attributes}>{props.children}</button>;
}

export default Button;
