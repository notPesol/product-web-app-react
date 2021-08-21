import { Wrapper, Content } from "./Thumb.style";
import reactImg from '../../logo.svg';

import { Link } from "react-router-dom";

const Thumb = ({ id, name, description, price, img, clickable }) => {
  return (
    <Wrapper>
      <Content>
        <div className="img">
          <img src={img ? img : reactImg} alt="" />
        </div>
        <div className="text">
          {clickable ?
            (<Link to={`/${id}`}><h3>{name}</h3></Link>)
            : <h3>{name}</h3>}
          <p>{description.length > 50 ? description.slice(0, 50) + '...' : description}</p>
          <p>Price: ${price}</p>
        </div>
      </Content>
    </Wrapper>
  )
}

export default Thumb;