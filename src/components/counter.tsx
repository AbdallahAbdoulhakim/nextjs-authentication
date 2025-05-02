"use client";

import { use, useState } from "react";
import { useAuth, useUser } from "@clerk/nextjs";

export default function Counter() {
  const [count, setCount] = useState(0);

  //const { isLoaded, userId, sessionId, getToken } = useAuth();
  const { isLoaded, isSignedIn, user } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <>
      <p>Count : {count}</p>
      <button
        className="border border-slate-200 p-2 rounded-xl bg-slate-400 cursor-pointer active:scale-95 hover:bg-slate-500"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </>
  );
}
