import type { ReactElement } from "react";
import type { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { globalStyle } from "../styles/global";

export default function Nextra({
  Component,
  pageProps,
}: AppProps): ReactElement {
  return (
    <>
      <Global styles={globalStyle} />
      <Component {...pageProps} />
    </>
  );
}
