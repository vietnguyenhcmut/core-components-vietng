import PropTypes from "prop-types";
import { Fade, Grow } from "@mui/material";
import { AnimationType } from "./Types";

type AnimationProps = {
  style?: React.CSSProperties;
  type: AnimationType;
  animationTime?: number;
  animationDelay?: number;
  checked: boolean;
  children: React.ReactElement;
};

const Animation: React.FC<AnimationProps> = ({
  checked = false,
  type,
  animationTime,
  animationDelay,
  children,
}) => {
  if (type === "fade") {
    return (
      <Fade
        in={checked}
        {...(true ? { timeout: animationTime } : {})}
        style={{
          transitionDelay: animationDelay ? `${animationDelay}ms` : "0ms",
        }}
      >
        {children}
      </Fade>
    );
  } else if (type === "grow") {
    return (
      <Grow
        in={checked}
        {...(true ? { timeout: animationTime } : {})}
        style={{
          transitionDelay: animationDelay ? `${animationDelay}ms` : "0ms",
        }}
      >
        {children}
      </Grow>
    );
  } else {
    return children;
  }
};

export default Animation;
