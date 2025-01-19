import { Roboto_Flex } from "next/font/google";
import "./globals.css";

const roboto = Roboto_Flex({
  subsets: ["latin"],
  variable: '--font-roboto-flex',
});

export const metadata = {
  title: "XBook",
  description:
    "A cool web app where you can swap books with others, borrow to read or trade to keep forever!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.variable}  antialiased bg-gray-50`}>
        {children}</body>
    </html>
  );
}
