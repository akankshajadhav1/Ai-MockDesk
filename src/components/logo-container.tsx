import { Link } from "react-router-dom";

const LogoContainer = () => {
  return (
    <Link to={"/"}>
      <img
        src="/assets/svg/logo1.jpg"
        alt="logo"
        className="  mr-16 w-14 h-14 min-w-3 min-h-3 object-contain  "
      />
    </Link>
  );
};

export default LogoContainer;
