const contents = [
  { id: 1, text: "First paragraph" },
  { id: 2, text: "Second paragraph" },
  { id: 3, text: "Third paragraph" },
];

export default function Main() {
  return (
    <div>
      <h1 style={{ marginBottom: "2rem" }}>Props Example</h1>
      {contents.map((content) => {
        return <Child key={content.id} content={content.text} />;
      })}
    </div>
  );
}

function Child(props) {
  return (
    <p
      style={{
        backgroundColor: "gray",
        padding: "1rem",
        width: "50%",
        margin: " 1rem auto",
        border: "2px solid lightgray",
        borderRadius: "4px",
      }}
    >
      {props.content}
    </p>
  );
}
