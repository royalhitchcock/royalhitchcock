import Navigation from "../features/navigation/Navigation";
import Footer from "../features/footer/Footer";
import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div className="flex flex-col justify-between h-dvh">
      <div>
        <Navigation />
      </div>
        <main className="flex-auto border border-stone-500 bg-slate-100 size-auto overflow-y-auto">    
            <Outlet />
        </main>
      <div>
        <Footer />
      </div>
    </div>
  )
}
