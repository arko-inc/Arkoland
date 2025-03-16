import "./globals.css";


export const metadata = {
  title: "Arkoland | The island of Arko's Awesome Ideas",
  description: "Arkoland | The island of Arko's Awesome Ideas ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
