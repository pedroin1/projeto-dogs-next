"use server";

import { TOKEN_POST } from "@/functions/api";
import handleErrorApi from "@/functions/error-api";
import handleSuccsesApi from "@/functions/sucsess-api";
import { cookies } from "next/headers";

export default async function loginUserAction(
  username: string,
  password: string
) {
  try {
    const { url } = TOKEN_POST();
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: username, password: password }),
    });

    if (!response.ok) {
      throw new Error("Senha ou usuario invalidos");
    }

    const data = await response.json();
    cookies().set("token", data.token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      maxAge: 60 * 60 * 1,
    });

    return handleSuccsesApi({});
  } catch (error: unknown) {
    return handleErrorApi(error);
  }
}
