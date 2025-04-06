import ClientWrapper from "@/components/ClientWrapper";
import "./globals.css";

export const metadata = {
  title: "Arkoland | The island of Arko's Awesome Ideas",
  description: "Arkoland | The island of Arko's Awesome Ideas",
  
  // ✅ Google Site Verification
  verification: {
    google: "uDJjy109SQDM3v-k652XNiivRNZidmB8O0kRKHMfdgw",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-zinc-300 antialiased">
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
