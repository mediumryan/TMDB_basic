import { InputGroup, Form } from "react-bootstrap";

export default function Filter({ onInputChange }) {
  const handleInputValChange = (e) => {
    const val = e.target.value;
    onInputChange(val);
  };

  return (
    <InputGroup className="mb-3">
      <Form.Control
        className="input_box"
        placeholder="Search movies what do you want!"
        onChange={handleInputValChange}
      />
    </InputGroup>
  );
}
