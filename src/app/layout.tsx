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
        <header className="flex items-center max-w-[1220px] h-[48px] mx-auto px-[20px]">
          <nav className="flex justify-between w-full">
            <span>logo</span>
            <div className="flex gap-5">
              <Link href={"/"}>home</Link>
              <Link href={"/about"}>about</Link>
              <Link href={"/posts"}>posts</Link>
              <Link href={"/contact"}>contact</Link>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
