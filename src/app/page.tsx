import Navbar from "~/components/Navbar";
import FirstPage from "./pages/FirstPage";

export default function HomePage() {

  return (
    <main className="relative flex flex-col items-center justify-center">
      <Navbar />
      <div className="flex h-screen min-h-[868px] w-screen min-w-[425px] flex-col items-center justify-center bg-[#0E1206] bg-center">
        <FirstPage />
      </div>
    </main>
  );
}
