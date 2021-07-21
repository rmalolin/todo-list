import { useState, useContext } from "react";
import { AlertContext } from "../context/alert/alertContext";

export const Form = () => {
  const [value, setValue] = useState("");
  const alert = useContext(AlertContext);

  const submitHundler = (event) => {
    event.preventDefault();

    if (value.trim()) {
      alert.show("Заметка была создана", "success");
      setValue("");
    } else {
      alert.show("Введите заметку");
    }

    alert.show(value, "success");
  };

  return (
    <form onSubmit={submitHundler}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Введите заметку"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </form>
  );
};
