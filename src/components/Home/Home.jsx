import Trending from "../Trending/Trending";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const API_KEY = "2101faa422ed30d7f1f0fcc2d9cc19f7";

export default function Home() {
  return (
    <>
      {/* trending movies */}
      <Trending apikey={API_KEY} />
    </>
  );
}
