import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID Fu6cHh38fDI9L11uGlUr2IFqXYO7CisMWB9sdn8bI8I",
    },
    params: {
      query: term,
    },
  });
  // console.log(response.data.results);
  return response.data.results;
};

export default searchImages;
