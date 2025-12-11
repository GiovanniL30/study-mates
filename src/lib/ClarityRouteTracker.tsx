import { useEffect } from "react";
import { useLocation } from "react-router-dom";

declare global {
  interface Window {
    clarity?: (...args: unknown[]) => void;
  }
}

export default function ClarityRouteTracker() {
  const location = useLocation();

  useEffect(() => {
    if (typeof window !== "undefined" && window.clarity) {
      window.clarity("set", "page", location.pathname + location.search);
    }
  }, [location]);

  return null;
}
