import { css } from "@emotion/react";
import ClipLoader from "react-spinners/ClipLoader";
import './Loader.css'

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  position: fixed;
  top:40%;
  left: 44%;
  
`;

function Loader() {
  return (
    <div className="sweet-loading">
      <ClipLoader css={override} size={200} />
    </div>
  );
}

export default Loader;