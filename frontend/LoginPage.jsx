
import React from 'react';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="bg-zinc-900 p-10 rounded-3xl w-[400px]">
        <h1 className="text-4xl font-bold mb-6">LOGIN</h1>

        <input className="w-full p-4 rounded-xl bg-zinc-800 mb-4"
          placeholder="Email" />

        <input className="w-full p-4 rounded-xl bg-zinc-800 mb-6"
          placeholder="Password"
          type="password"
        />

        <button className="w-full p-4 rounded-xl bg-green-500">
          Sign In
        </button>
      </div>
    </div>
  );
}
