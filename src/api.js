import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID EH2HwCLnTKQ9I8OJsZkArPwo8L2b6t1of6E4-8jO7i8",
    },
    params: {
      query: term,
    },
  });

  return response.data.results;
};

export default searchImages;
