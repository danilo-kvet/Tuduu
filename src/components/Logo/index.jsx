import { LogoContainer } from "./style";
import { useHistory } from "react-router-dom";

const Logo = () => {
  const history = useHistory();

  return <LogoContainer onClick={() => history.push("/")}>TuduU</LogoContainer>;
};

export default Logo;
