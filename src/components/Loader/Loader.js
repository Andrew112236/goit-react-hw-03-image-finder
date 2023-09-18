import React from 'react';
import { CirclesWithBar } from 'react-loader-spinner';

export default function Loader() {
  return (
    <div>
      <CirclesWithBar
        height="100"
        width="100"
        color="#3f51b5"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        outerCircleColor=""
        innerCircleColor=""
        barColor=""
        ariaLabel="circles-with-bar-loading"
      />
    </div>
  );
}
