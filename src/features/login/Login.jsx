import { useState } from "react"
import Button from '../../ui/Button';
import { Form, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateName } from "../user/userSlice";

export default function Login() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
  
    if(!username) return;
    dispatch(updateName(username));
    navigate('/dashboard');
  }
  return (
    <div className="text-center md:py-36 space-between ">
      <Form method="POST" onSubmit={handleSubmit}>
        <p className="mb-8 font-bold text-stone-800 md:text-base">
          Login Here
        </p>
        
        <input 
          type="text"
          placeholder="Enter Name"
          value={username}
          onChange={(e)=>setUsername(e.target.value)}
          className="input mb-8 w-72 rounded-full p-1 focus:border-slate-200 focus:p-2 transition duration-1000"
          />

        {username !== '' && (
          <div>
            <Button>Login</Button>
          </div>
        )}
      </Form>
    </div>
  )
}

export async function action({request}) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  console.log(data);

  return null;
}