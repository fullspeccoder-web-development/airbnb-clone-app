import "./HomeCard.scss";

import { getAvailability } from "../../utilities/helpers";

const HomeCard = ({ home }) => {
  const {
    images,
    title,
    avgRating,
    localizedDistanceText,
    checkin,
    checkout,
    accessibilityLabel,
  } = home;

  const availability = getAvailability(checkin, checkout);

  return (
    <div className="HomeCard">
      <img src={images[4]} alt={title} />
      <div>
        <h5>
          {title}
          <span>
            <i className="fa-solid fa-star" />
            {avgRating}
          </span>
        </h5>
        <h6>{localizedDistanceText} away</h6>
        <h6>{availability}</h6>
      </div>
      <div>{accessibilityLabel}</div>
    </div>
  );
};

export default HomeCard;
