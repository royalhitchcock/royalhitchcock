import { useSelector } from "react-redux"

export default function Username() {
  
    const username = useSelector((state) => state.user.username)

    if(!username) return null;

    return (
        <div className="text-stone-200 uppercase font-bold">{username}</div>
    )
}
