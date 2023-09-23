import RootLayout from "@/components/RootLayout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Provider } from "react-redux";
import { persistor, store } from "@/store/store";
import { PersistGate } from "redux-persist/integration/react";
import { ClerkProvider } from "@clerk/nextjs";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ClerkProvider
        {...pageProps}
        appearance={{
          elements: {
            rootBox: "mx-auto my-20",
            card: "flex items-center justify-center",
          },
        }}
      >
        <PersistGate persistor={persistor} loading={null}>
          <div className="font-bodyFont bg-gray-300">
            <RootLayout>
              <Component {...pageProps} />
            </RootLayout>
          </div>
        </PersistGate>
      </ClerkProvider>
    </Provider>
  );
}
