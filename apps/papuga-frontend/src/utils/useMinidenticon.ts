import { useMemo } from "react";
import { minidenticon } from "minidenticons";

const useMinidenticon = (seed?: string) => {
  return useMemo(
    () =>
      "data:image/svg+xml;utf8," +
      encodeURIComponent(minidenticon(seed ?? "", 93, 45)),
    [seed]
  );
};

export default useMinidenticon;
