import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();

    onSubmit(term);

    // NEVER EVER EVER DO THIS!
    // onSubmit(document.querySelector("input").value);
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchBar;

// 72. Handling Form Submission

// 73. Handling Input Elements
// 1. Create a new piece of state.
// 2. Create an event handler to watch for the 'onChange' event.
// 3. When the 'onChange' event fires, get the value from the input.
// 4. Take that value from the input and use it to update your state.
// 5. Pass your state to the input as the value prop.
