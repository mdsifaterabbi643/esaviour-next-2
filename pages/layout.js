import Navbar from "@/app/components/Navbar/Navbar";
import "../styles/globals.css";

export default function Layout({ children }) {
  return (
    <>
      <main>
        <div className="bg-white text-black">
          <Navbar />
          {children}
        </div>
      </main>
    </>
  );
}
