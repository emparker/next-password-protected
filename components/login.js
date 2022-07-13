import { useState } from 'react';
import Cookies from 'universal-cookie';
import consts from 'consts';
import 'tailwindcss/tailwind.css';

const Login = ({ redirectPath }) => {
    console.log(redirectPath)
  const [password, setPassword] = useState('');

  return (
    <div className="bg-yellow-300 text-2xl border-2 border-black p-11 m-40">
      <h2>You must be logged in to view this page</h2>
      <form className="flex flex-col">
        <label>Password here </label>
        <input
          type="text"
          className="form-input mt-1 block w-full bg-gray-500"
          placeholder="Your site password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <div>
          <button
            type="submit"
            className="mt-3 bg-black text-yellow-300 p-2 font-bold rounded hover:bg-gray-600"
            onClick={(e) => {
              e.preventDefault();
              const cookies = new Cookies()
              cookies.set(consts.SiteReadCookie, password, {
                path: '/',
              });
              window.location.href = redirectPath ?? '/'
            }}
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
