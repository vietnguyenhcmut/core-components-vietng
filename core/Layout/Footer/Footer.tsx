import "./style.css";
import { FooterProps } from "./Types";

const Footer: React.FC<FooterProps> = ({ style }) => {
  return (
    <div className="footer" style={style}>
      <h5>Copyright to ...</h5>
    </div>
  );
};

export default Footer;
