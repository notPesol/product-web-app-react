import { Wrapper, Content } from "./Header.style";
import reactLogo from '../../logo.svg'

import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Wrapper>
      <Content>
        <div className="logo">
          <img src={reactLogo} alt="logo" />
        </div>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/member">Member</Link>
        </div>
      </Content>
    </Wrapper>
  )
}

export default Header;