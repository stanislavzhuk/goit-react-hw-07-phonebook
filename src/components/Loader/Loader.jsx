import { useEffect } from "react";
import { createPortal } from "react-dom";
import loader from '../../images/loader.gif'
import css from './Loader.module.css';

const root4Loader = document.querySelector('#loader');

const Loader = ({ size = 100}) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  });

  return createPortal(
    <div className={css.overlay}>
      <img
        src={loader}
        alt="loading..."
        width={size}
        className={css.loader}
      />
    </div>,
    root4Loader
  );
};

export default Loader;