import "./styles.css";
import { Circles } from 'react-loader-spinner';

const Loader = () => (
  <Circles
    height="40"
    width="40"
    color="#4fa94d"
    ariaLabel="circles-loading"
    wrapperClass="loader"
    visible={true}
  />
);

export default Loader;
