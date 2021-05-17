import React from "react";
import "tailwindcss/tailwind.css";
import "../styles/global.scss";
import { wrapper } from "../redux";

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default wrapper.withRedux(MyApp);
