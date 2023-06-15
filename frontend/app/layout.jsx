"use client";
import { MoralisProvider } from "react-moralis";
const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head>
        <script async src="https://saturn.tech/widget.js"></script>
      </head>
      <body>
        <MoralisProvider initializeOnMount={false}>{children}</MoralisProvider>
      </body>
    </html>
  );
};
export default RootLayout;
