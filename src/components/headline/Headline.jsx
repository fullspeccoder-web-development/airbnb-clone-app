import { Link } from "react-router-dom";

import { HeadlineContainer } from "./Headline.styles";

const Headline = () => {
  return (
    <HeadlineContainer>
      <h1>
        Show total prices up front <Link to="/">Learn more</Link>
      </h1>
    </HeadlineContainer>
  );
};

export default Headline;
