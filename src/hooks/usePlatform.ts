import { useEffect, useState } from "react";

type Response = {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
};

type ScreenSize = {
  width?: number;
  height?: number;
};

export const useWindowSize = (): ScreenSize => {
  const [windowSize, setWindowSize] = useState<ScreenSize>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (typeof window !== "object")
    return { width: undefined, height: undefined };

  return windowSize;
};

export const usePlatform = (): Response => {
  const DESKTOP_SCREEN = 1208;
  const TABLET_SCREEN = 991;
  const MOBILE_LARGE_SCREEN = 747;
  const PORTRAIT_SCREEN = 576;
  const size: ScreenSize = useWindowSize();
  const widthScreen = size.width || MOBILE_LARGE_SCREEN;

  return {
    isMobile: widthScreen < PORTRAIT_SCREEN,
    isTablet: widthScreen < TABLET_SCREEN,
    isDesktop: widthScreen > DESKTOP_SCREEN,
  };
};
