
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/users/login`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: body.username,
          password: body.password,
        }),
        cache: "no-store",
      }
    );

    const data = await response.json();
    
    if (!response.ok) {
        return NextResponse.json(
            { detail: data.detail ?? "Login failed" },
            { status: response.status }
        );
    }
    
    const result = NextResponse.json({ success: true });

    result.cookies.set("access_token", data.access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 15,
    });

    return result;
  } catch {
    return NextResponse.json(
      { detail: "Unable to connect to the authentication server" },
      { status: 500 }
    );
  }
}