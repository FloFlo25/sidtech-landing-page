import Navbar from "~/components/Navbar";
import FirstPage from "./pages/FirstPage";

export default function HomePage() {
  return (
    <main className="flex flex-col overflow-y-hidden bg-[#0E1206]">
      <Navbar />

      <FirstPage />
      <div className="h-screen w-screen bg-red-600"></div>
      <div className="h-screen w-screen bg-red-500"></div>
      <div className="h-screen w-screen bg-red-400"></div>
    </main>
  );
}
