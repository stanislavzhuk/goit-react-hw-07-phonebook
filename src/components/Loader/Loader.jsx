import React from 'react';
import { Triangle } from 'react-loader-spinner';
import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.loader}>
      <Triangle
        height="150"
        width="150"
        color="#3f51b5"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  )
};

export default Loader;