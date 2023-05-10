import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import searchImages from "./api";

function App() {
  const [imageList, setImageList] = useState([]);

  const handleSubmit = async (term) => {
    const imageResults = await searchImages(term);
    // console.log(imageResults);
    setImageList(imageResults);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList imageList={imageList} />
    </div>
  );
}

export default App;
