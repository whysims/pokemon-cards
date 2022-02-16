import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
