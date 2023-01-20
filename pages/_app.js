import Layout from "../all_structure/Layout/Layout";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(
      <div data-theme="light">
        <Component {...pageProps} />
      </div>
    );
  }
  return (
    <div data-theme="light">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
}
