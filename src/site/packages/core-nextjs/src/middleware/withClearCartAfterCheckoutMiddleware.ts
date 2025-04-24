import { CHECKOUT_FINISHED_QSP, REMOVE_CART_COOKIE } from '@jhoose-commerce/core';
import { type NextRequest, NextResponse } from 'next/server';

export async function clearCartAfterCheckoutMiddleware(request: NextRequest, prevResponse: NextResponse) : Promise<NextResponse> {
    console.log("withClearCartAfterCheckoutMiddleware");

    var response = NextResponse.next(prevResponse);

    const { searchParams } = new URL(request.url);

    const checkoutFinished = searchParams.get(CHECKOUT_FINISHED_QSP);

    if (checkoutFinished) {
        console.log("Clearing cart after checkout");
        response.cookies.set(REMOVE_CART_COOKIE, "true", { sameSite: "strict", secure: true, path: '/',httpOnly: false, expires: new Date(Date.now() + 3000 * 60) });
    }

    return response;
};

