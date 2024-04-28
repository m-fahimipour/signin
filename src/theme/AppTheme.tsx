import { CacheProvider, ThemeProvider } from "@emotion/react";
import { ReactNode, useLayoutEffect, useMemo } from "react";
import { customTheme } from "./theme";
import createCache from "@emotion/cache";
import { prefixer } from "stylis";
import rtlPlugin from "stylis-plugin-rtl";

const cacheRTL = createCache({
  key: "rtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const cacheLTR = createCache({
  key: "ltr",
});

export function AppThemeProvider({ children }: { children: ReactNode }) {
  const isRTL = true;
  const mode = "light";
  const cache = isRTL ? cacheRTL : cacheLTR;
  const theme = useMemo(() => {
    return customTheme({ mode, isRTL });
  }, [isRTL, mode]);

  useLayoutEffect(() => {
    window.document.documentElement.dir = isRTL ? "rtl" : "ltr";
    window.document.documentElement.lang = isRTL ? "fa" : "en";
    window.document.documentElement.classList.add(
      isRTL ? "fa-font" : "en-font"
    );
  }, [isRTL]);

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CacheProvider>
  );
}
