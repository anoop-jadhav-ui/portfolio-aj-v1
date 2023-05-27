import React from "react";
import { ReactNode, useEffect, useState } from "react";

const Delayed = (props: { children: ReactNode; delay: number }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, props.delay);
  });

  if (!show) {
    return null;
  }

  return <>{props.children}</>;
};

export default Delayed;
