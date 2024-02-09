import colors from "./colors";
import typography from "./typography";

const theme = {
  colors,
  // spacing: (ind: number) => `${4 * ind}px`,
  //       [0,    1,     2,      3,      4,      5,      6]
  spacing: [0, "4px", "8px", "16px", "32px", "64px", "128px"],
  round: [0, "15px", "30px", undefined, undefined, "50%"],
  typography,
  shadow: `0 0 2px ${colors.green.main}`,
};

export default theme;
