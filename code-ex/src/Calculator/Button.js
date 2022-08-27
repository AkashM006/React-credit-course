export default function Button(props) {
  return (
    <button style={{ color: "black" }} onClick={props.clickHandler}>
      {props.title}
    </button>
  );
}
