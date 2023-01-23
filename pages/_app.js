import { ApiProvider } from "@reduxjs/toolkit/dist/query/react";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import Layout from "../all_structure/Layout/Layout";
import store from "../all_structure/redux/app/store";
import { sliderApi } from "../all_structure/redux/features/sliderSlice";

import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(
      <div data-theme="light">
        <Provider store={store}>
          <ApiProvider api={sliderApi}>
            <Component {...pageProps} />
          </ApiProvider>
          <Toaster position="top-center" reverseOrder={false} />
        </Provider>
      </div>
    );
  }
  return (
    <div data-theme="light">
      <Provider store={store}>
        <ApiProvider api={sliderApi}>
          <Layout>
            <Component {...pageProps} />
            <Toaster position="top-center" reverseOrder={false} />
          </Layout>
        </ApiProvider>
      </Provider>
    </div>
  );
}
