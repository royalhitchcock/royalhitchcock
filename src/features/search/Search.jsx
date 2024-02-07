import { useState } from "react";
import { Form } from "react-router-dom";

export default function Search() {
    const [userName, setUserName] = useState('');

    function handleSubmit(e) {
        e.preventDefault();

        console.log(userName);
        setUserName('');
    }

    return (
        <Form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Patient Search"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                className="rounded-full py-1 px-2 focus:border focus:border-slate-200"
            />
        </Form>
    )
}
