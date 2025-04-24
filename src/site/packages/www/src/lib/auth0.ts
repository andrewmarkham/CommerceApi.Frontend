import { Auth0Client } from "@auth0/nextjs-auth0/server";
import { IN_LOGIN_FLOW_COOKIE } from "@jhoose-commerce/core";
import { getAnonymousIdCookie } from "@jhoose-commerce/core-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const auth0 = new Auth0Client({
    authorizationParameters: {
      allowInsecureRequests: true,
      scope: "openid profile email",
      //audience: "urn:custom:api",
    },
    /*async onCallback(error, context, session) {
        // redirect the user to a custom error page
        if (error) {
          return NextResponse.redirect(
            new URL(`/error?error=${error.message}`, process.env.APP_BASE_URL)
          )
        }
    
        // Get the anonymous customer id
        var anonymousId = await getAnonymousIdCookie();
    
        if (anonymousId && session?.idToken) {
            (await cookies()).set(IN_LOGIN_FLOW_COOKIE, "Y");
        }
        return NextResponse.redirect(
            new URL(context.returnTo || "/", process.env.APP_BASE_URL)
          )
        //return session;
      },*/
      //async onLogin(req, res) => {}
  })