import SearchBar from "./components/SearchBar";
import searchImages from "./api";
import ImageList from "./components/ImageList";
import { useState } from "react";

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term);
    setImages(result);

    // async/await 안써줄시, Promise {<pending>} 출력! .. 너무 빨리 결과를 받아오는 탓에 아직 settled되지 않은 promise가 리턴된 것. 이 프라미스는 다시 await으로 처리해서 결과값(배열)이 받아와질 때까지 기다렸다가, 컨솔에 출력해야 한다!
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
}

export default App;

// After doing a search, we want to update content on the screen with the new list of images. => ✨State!!!✨
