import { Link } from "react-router-dom";
import Username from "../user/Username";

export default function Navigation() {
  return (
    <nav className="flex justify-between p-4 border-b border-stone-500 bg-blue-400">
      <span className="flex"> 
        <Link to='/' className="border text-slate-800 border-blue-400 underline">Login</Link>
      </span>
      <span>
        <Username />
      </span>
    </nav>
  )
}
