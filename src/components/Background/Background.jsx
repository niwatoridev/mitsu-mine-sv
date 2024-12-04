import "./Background.css";
import backgroundImg from "../../Media/Images/minecraftbg.avif";

function Background() {
  return (
    <div className="background">
      <div className="opacityDiv"></div>
      <img src={backgroundImg} alt=""></img>
    </div>
  );
}

export default Background;
