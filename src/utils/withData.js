import React, { useState, useEffect } from "react";

const withData = (WrappedComponent) => {
  const WrappedComponentWithData = ({ resource, ...props }) => {
    const [data, setData] = useState();
    const BASE_API = `${process.env.REACT_APP_BASE_API}`;

    useEffect(() => {
      if (resource)
        fetch(`${BASE_API}/${resource}`)
          .then((response) => response.json())
          .then((data) => {
            setData(data);
          })
          .catch((error) => {
            console.log(error);
          });
    }, [resource]);

    return <WrappedComponent {...props} data={data} />;
  };

  return WrappedComponentWithData;
};

export default withData;
