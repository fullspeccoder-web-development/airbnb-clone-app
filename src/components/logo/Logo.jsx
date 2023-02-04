import { ReactComponent as AirbnbLogo } from "../../assets/airbnb.svg";

import { LogoContainer } from "./Logo.styles";

const Logo = () => {
  return (
    <LogoContainer>
      <AirbnbLogo />
    </LogoContainer>
  );
};

export default Logo;
