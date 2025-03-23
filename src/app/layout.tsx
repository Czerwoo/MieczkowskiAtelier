import Footer from "@/components/footer";
import NavBar from "@/components/navBar";
import "./globals.css";

export const metadata = {
  title: "Mieczkowski Atelier",
  description: "Fryzjer na najwyższym poziomie",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
