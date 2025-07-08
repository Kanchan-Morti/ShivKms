import { useEffect } from "react";

const DefaultTemplete = () => {
  useEffect(() => {
    document.body.className = "";
    return () => (document.body.className = "");
  }, []);
  return <></>;
};


export default DefaultTemplete;