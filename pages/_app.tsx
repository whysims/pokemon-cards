import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import pokemon from "pokemontcgsdk";
import type { AppProps } from "next/app";

pokemon.configure({ apiKey: process.env.POKE_CARD_API_KEY });

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
