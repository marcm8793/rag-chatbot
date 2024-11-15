import "./global.css";

export const metadata = {
  title: "F1GPT",
  description: "F1 Grand Prix Tracker",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};
export default RootLayout;
