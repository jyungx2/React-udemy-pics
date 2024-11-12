import ImageShow from "./ImageShow";
import "./ImageList.css";

function ImageList({ images }) {
  const renderedImages = images.map((image) => {
    return <ImageShow key={image.id} image={image} />;
  });

  return <div className="image-list">{renderedImages}</div>;
}

export default ImageList;

// 80. Handling List Updates
// ✅ Requirements for Keys
// 1. Use whenever we have a "list of elements"
// 2. Add the key to the 🌟top-most🌟 JSX element in the list.
// 3. Must be a string or number. (❌ array or object ❌)
// 4. Should be unique for this list.
// 5. Should be consistent across rerenders.

// ❓What key should I pick? What should I use for a key?
// 리액트 세계에서 웹 어플리케이션을 만드는 한, 거의 항상 외부 API로부터 데이터를 가져올 것 👉 그리고 이 API는 데이터베이스로부터 데이터를 가져온다. 👉 따라서, 당신이 가져와서 브라우저에 뿌리게 될 모든 데이터는 데이터베이스로부터 올 것 👉 그리고 ✨모든 데이터베이스는 unique한 identifier을 기록한다✨. 👉 따라서 보통 어떤 이미지나 메시지, 비디오들의 리스트를 빌드할 때, 이 리스트들은 각각의 객체형태로 배열안에 저장될텐데, 이것들은 데이터베이스로부터 오기 때문에, ✨각각의 객체는 절대로 변하지 않는 unique 한 Id를 가지게 될 것이기 때문에 이걸 사용하면 된다!✨

// Don't have an ID? Here are 2 fallbacks.
// 1) Use the index of the record
// => 🚨 This will lead to bugs as you update the list.
// 네가 records들을 Reorder(재배열)하거나, 자식 컴포넌트 내에서 state을 만들려고 하자마자 에러를 마주칠 것!!

// 2) Generate a unique ID yourself -> Later..
