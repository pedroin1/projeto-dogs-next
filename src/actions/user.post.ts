"use server";

import USER_POST from "@/functions/api";
import apiError from "@/functions/error-api";

export default async function createUser(
  username: string,
  email: string,
  password: string
) {
  try {
    const { url } = USER_POST();
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        email: email,
        password: password,
      }),
    });

    if (!response.ok) {
      throw new Error("Email ou usuario ja cadastrado");
    }

    const data = await response.json();
    return { data: null, ok: true, error: null };
  } catch (error: unknown) {
    return apiError(error);
  }
}