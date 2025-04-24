import { useMemo, useState } from "react";
export const SizeViewport = () => {
  const [Size, setSize] = useState(window.innerWidth);
  useMemo(() => {
    window.addEventListener("resize", function () {
      const Size = window.innerWidth;
      setSize(Size);
    });
  }, [Size]);

  return { Size };
};
