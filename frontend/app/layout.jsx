"use client";
import { MoralisProvider } from "react-moralis";
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <MoralisProvider initializeOnMount={false}>{children}</MoralisProvider>
      </body>
    </html>
  );
};
export default RootLayout;
