import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <h2>My Home Page</h2>
      <p>
        Go to <Link to="products">the list of products</Link>
      </p>
    </>
  );
}

export default HomePage;
