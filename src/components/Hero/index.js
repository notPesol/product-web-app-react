import { Wrapper, Content } from "./Hero.style";
import noImg from '../../logo.svg';
const Hero = ({ data }) => {
  return (
    <Wrapper>
      <Content>
        <div className="hero-img">
          <img src={data.images ?
            data.images[0] && data.images[0]
            : noImg} 
            alt="" />
        </div>
        <div className="text">
          <h3>{data.name}</h3>
          <p>{data.description}</p>
        </div>
      </Content>
    </Wrapper>
  )
}
export default Hero;