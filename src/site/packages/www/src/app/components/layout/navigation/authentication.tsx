'use client';

import { useUser } from "@auth0/nextjs-auth0";
import AccountIcon from "../../icons/accountIcon";
import Authenticated from "./authenticated";

export  function Authentication() {
    const { user, error, isLoading } = useUser();

    console.log(user);

    const isAuthenticated = user ? true : false;
    return (
      <div>
        {isAuthenticated ? <Authenticated user={user} /> : <a href="/auth/login"><AccountIcon /></a> }
      </div>
    )
  }