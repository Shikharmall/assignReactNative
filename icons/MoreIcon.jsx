import Svg, { Path } from "react-native-svg";

export default MySpaceIcon = ({ size, color }) => (
  <Svg
    width="30px"
    height="30px"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M11 19H8v-3h3v3zM11 13.5H8v-3h3v3zM11 8H8V5h3v3zM16 19h-3v-3h3v3zM16 13.5h-3v-3h3v3zM16 8h-3V5h3v3z"
      fill={color}
    />
  </Svg>
);
