import { useState } from "react";
import Button from "../Button/Button";
import Datetimepicker from "../Datetimepicker";
import "./Form.css";

const Form = ({ handleAddTask }) => {
  const [selectedDateTime, setSelectedDateTime] = useState(null);
  const [title, setTitle] = useState("");
  const [reminder, setReminder] = useState("");
  const [errorTitle, setErrorTitle] = useState(false);
  const [errorDate, setErrorDate] = useState(false);

  const handleChange = (newValue) => {
    setErrorDate(false);
    setSelectedDateTime(newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title) {
      setErrorTitle(true);
      return;
    }
    if (!selectedDateTime) {
      setErrorDate(true);
      return;
    }

    handleAddTask({
      title,
      selectedDateTime: selectedDateTime?.$d,
      reminder,
    });

    setTitle("");
  };

  const handleTitle = (e) => {
    setErrorTitle(false);
    setTitle(e.target.value);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-item">
        <label>Task Title</label>
        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={handleTitle}
        />
        {errorTitle && <p style={{ color: "red" }}>Please fill title</p>}
      </div>
      <div className="form-item">
        <Datetimepicker
          selectedDateTime={selectedDateTime}
          handleChange={handleChange}
        />
        {errorDate && <p style={{ color: "red" }}>Please fill date&time</p>}
      </div>
      <div className="form-item-check">
        <label>Reminder</label>
        <input
          type="checkbox"
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>
      <Button type="submit" name="SEND" width="100%" />
    </form>
  );
};

export default Form;
