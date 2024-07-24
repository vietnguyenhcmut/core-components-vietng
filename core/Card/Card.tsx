import "./style.css";
import PropTypes from "prop-types";
import Animation from "../Animation/Animation";
import { AnimationType } from "../Animation/Types";

type CardProps = {
  style?: React.CSSProperties;
  withAnimation?: AnimationType;
  animationTime?: number;
  animationDelay?: number;
  title?: string;
  children: React.ReactNode;
};

const Card: React.FC<CardProps> = ({
  style,
  withAnimation = "none",
  animationTime,
  animationDelay,
  title,
  children,
}) => {
  return (
    <Animation
      type={withAnimation}
      checked={true}
      animationTime={animationTime}
      animationDelay={animationDelay}
    >
      <div
        style={{
          ...style,
          width: "100%",
          boxShadow: style?.boxShadow
            ? style?.boxShadow
            : "rgba(149, 157, 165, 0.2) 0px 8px 24px",
          borderRadius: style?.borderRadius ? style?.borderRadius : "10px",
        }}
      >
        <div>
          {!title ? null : <h3 className="text_card-title">{title}</h3>}
        </div>
        {children}
      </div>
    </Animation>
  );
};

export default Card;
