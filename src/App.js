import SearchBar from "./components/SearchBar";
import searchImages from "./api";
import ImageList from "./components/ImageList";
import { useState } from "react";

function App() {
  // 2. Kind of confusing! = ✨state + prop system✨
  // searchbar로부터 유저가 입력한 인풋 값(term)이 들어오면, submit event(=handleSubmit)가 발생되고, 이때, 이미지 리스트도 같이 렌더링되야 하기 때문에 state 시스템과 더불어 앱 컴포넌트에서 이미지리스트 컴포넌트로 images의 객체배열이 전달되야 하므로 prop 시스템 또한 같이 사용되어야 한다.. 👉 약간 헷갈릴 수 있는 부분이지만, animal 파일에서 한 것처럼, 버튼을 한번 눌렀을 때(onClick={handleClick}), handleClick = () => {setCount(count + 1)}라는 코드로 count가 증가 되는 것과 같은 원리!
  const [images, setImages] = useState([]);
  // 🌟 From the perspective of 'App', images = state.

  // 1. handleSubmit() <-> onSubmit (prop system)
  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);

    // async/await 안써줄시, Promise {<pending>} 출력! .. 너무 빨리 결과를 받아오는 탓에 아직 settled되지 않은 promise가 리턴된 것. 이 프라미스는 다시 await으로 처리해서 결과값(배열)이 받아와질 때까지 기다렸다가, 컨솔에 출력해야 한다!
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      {/* 🌟From the perspective of 'ImageList', images = props. */}
      <ImageList images={images} />
    </div>
  );
}

export default App;

// After doing a search, we want to update content on the screen with the new list of images. => ✨State!!!✨
