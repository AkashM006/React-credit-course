import { useEffect, useState } from "react";
import "./TextField.css";

const TextField = (props) => {
  const [field, setField] = useState(props.init);
  const [err, setErr] = useState(false);
  const [msg, setMsg] = useState("");
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    if (touched) {
      const result = props.validator(field);
      setErr(result.success);
      setMsg(result.msg);
      props.formValidator(result.success);
    }
  }, [field, touched]);

  const changeHandler = (event) => {
    event.preventDefault();
    if (touched === false) setTouched(true);
    setField(event.target.value);
  };

  return (
    <div className="textField__container">
      <label>{props.name}:</label>
      <input
        value={field}
        onChange={changeHandler}
        type={props.type}
        name={props.name}
        disabled={props.isDisabled}
        ref={props.refVar}
      />
      {msg.length > 0 && (
        <p className={`msg__container ${err ? "success" : "err"}`}>{msg}</p>
      )}
    </div>
  );
};

export default TextField;
