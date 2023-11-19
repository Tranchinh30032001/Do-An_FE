import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";
import crypto from "crypto";
function useQuery() {
  const { search } = useLocation();
  return useMemo(() => {
    return new URLSearchParams(search);
  }, [search]);
}

export default useQuery;
