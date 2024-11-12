import { useState } from "react";
import "./SearchBar.css";

function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState("");

  const handleFormSubmit = (e) => {
    // It's worth using form element to detect this enter key press!!
    e.preventDefault();

    // onSubmit = handleSubmit() ...prop system(App.js라는 부모 컴포넌트로부터 받아온 함수!! form요소 상에서 쓴 onSubmit이랑은 다른 것이다.)
    onSubmit(term);

    // 73. Handling Input Elements
    // 💥 NEVER EVER EVER DO THIS!
    // => useState & onChange 이벤트 핸들러 이용!
    // change event: 유저가 인풋요소에서 텍스트를 추가/삭제/복사 등등 무슨 동작을 할 때마다, 일어난다.
    // onSubmit(document.querySelector("input").value);
  };

  const handleChange = (event) => {
    setTerm(event.target.value);
    // Our component is re-rendering with every single key press -> This seems a little bit overboard but it's not a big deal!!
  };

  return (
    <div className="search-bar">
      {/*  72. Handling Form Submission */}
      {/* Advanced technique to detect a user either pressing the enter key inside the input or clicking a button(ex. submit) inside of a form.  */}
      {/* = placing a form with an input element inside of it. => standard thing of HTML */}
      {/* 1️⃣ form요소 안에 있는 input요소를 클릭 후, 엔터를 누르면 자동으로 브라우저가 form요소로 하여금 submit event를 Trigger하도록 동작한다. => submit Event를 받았다는 뜻은 유저가 인풋을 누르고, 엔터키를 눌렀다는  뜻!*/}
      {/* 2️⃣ 브라우저는 이러한 form 요소로부터 하나의 동작을 자동으로 실행(Automatic behavior)하는데, 인풋 요소로부터 모든 정보를 다 모아서 네트워크 요청을 보낸다는 것이다. ex) myapp.com✨?email=jyung@gmail.com&password=1111✨ 과 같은 url로 HTTP 요청을 보낸다. => default behavior around "forms" => 우리는 이러한 동작까진 원하지 않기 때문에 e.preventDefault()로 막아줘야 한다! */}
      <form onSubmit={handleFormSubmit}>
        <label>Enter Search Term</label>
        <input value={term} onChange={handleChange} />
      </form>
    </div>
  );
}

export default SearchBar;

// 73. Handling Input Elements
// 🌟결론: 우리가 form control(handling input elements like text input, textarea, checkboxes and radioboxes...)을 할 때마다, 다음 과정을 거쳐야 한다. (querySelector을 사용해서 사용자가 입력한 인풋의 밸류값을 얻으려 하지말자!!! -> 인터뷰에서 reject될 만한 아주 안 좋은 접근..)

// 1. Create a new piece of state.
// 2. Create an event handler to watch for the 'onChange' event.
// 3. When the 'onChange' event fires, get the value from the input.
// 4. Take that value from the input and use it to update your state.
// 5. Pass your state to the input as the value prop. => 74. Ok but why??(✅)
// ✅ Forces the input to always display something that you write in and nothing else..
// ex) value={term}이 아닌, 'hi there!'라고 쓰면, 아무리 키보드를 눌러도 입력되지 않고 무조건 hi there라는 고정텍스트를 가진다..

// 💫 유저가 인풋에 타입할 때, 브라우저의 동작 사이클을 살펴보자..
// => Very strange한 부분은,, 리액트가 자꾸만 완전히 똑같은 값을 복사 붙여넣기 하면서 원래의 인풋 텍스트를 자꾸 Overwrite하는 현상이 발생하는 것이다..
// => What we're truly doing here is ✨stealing control of the "value of the input" from the browser✨ and we're putting the value of the input under the control of the ✨state system✨.(POINT!!)
// so, if we ever need to "read or update the value of the input", we can look at the term piece of state. 💥we don't have to write out "docuemnt.quertSelector blah blah..." -> ❌Not a Requirement❌
// We don't have to do that anymroe.. 👉Instead, we just look at 'term' state and call 'setTerm()' to update the state.
// => Now it's super easy to add in additional features that are going to appear on the screen or disappear as the user changes that content.

// ❓ 왜 value={title}이 필요한가?
// value={title} 이런 식으로, state 값인 title로 인풋의 value 속성을 정의해주는 이유는, React에서 controlled component는 React state로 form 요소의 값을 관리하는 방식을 사용하기 위해서입니다. 즉, input의 값이 React state(title)에 의해 제어되고, React 상태가 변경되면 그에 따라 input의 값도 업데이트되게 하기 위함입니다.

// 🔺 상태의 동기화: value={title}을 input에 설정하면, input의 값은 title 상태와 연결됩니다. 사용자가 input에 값을 입력(onChange)하면, handleChange 함수가 호출되어 title 상태를 업데이트(setTerm(e.target.value))하고, 그에 따라 input 요소의 값도 다시 렌더링됩니다.

// 🔺 React와 DOM의 일치: React의 상태와 실제 DOM의 상태가 일치하도록 보장합니다. input 요소의 값은 항상 title 상태에 의존하고, 상태가 변경될 때마다 input의 값이 자동으로 갱신됩니다. 이로 인해 UI가 반응형이 되며, 애플리케이션의 상태가 input에 반영됩니다.

// 💥 만약 value를 지정하지 않으면?
// value를 지정하지 않으면 input 요소는 "uncontrolled component"가 되어, 📌React 상태와 DOM 상태가 분리되며, ❌React가 input 요소의 값을 관리하지 않게❌ 됩니다. 이 경우, input의 값은 React 외부의 상태로 관리되며, React로 값을 제어하려면 다른 방식의 처리(refs 등)를 사용해야 합니다. 따라서, value={title}을 사용하여 ✅React의 상태 관리 방식을 따르는 것이 controlled component✅로서의 장점인 상태 관리를 깔끔하게 할 수 있는 방법입니다.
