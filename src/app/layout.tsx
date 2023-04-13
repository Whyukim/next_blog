import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="flex items-center max-w-[1220px] h-10 mx-auto px-5">
          <nav className="flex justify-between w-full">
            <Link href={"/"} className="font-bold">
              Hyuk's Blog
            </Link>
            <div className="flex gap-5">
              <Link href={"/"}>home</Link>
              <Link href={"/about"}>about</Link>
              <Link href={"/posts"}>posts</Link>
              <Link href={"/contact"}>contact</Link>
            </div>
          </nav>
        </header>
        <main className="px-5 pt-5 pb-16 min-h-main-min max-w-[1220px] mx-auto">
          {children}
        </main>
        <footer className="flex justify-center items-center h-10 bg-color-blue">
          footer입니다.
        </footer>
      </body>
    </html>
  );
}
