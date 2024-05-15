//@ts-nocheck

export const API_URL = "https://dogsapi.origamid.dev/json";

export function TOKEN_POST() {
  return { url: API_URL + "/jwt-auth/v1/token" };
}

export function USER_POST() {
  return { url: API_URL + "/api/user" };
}

export function FORGET_PASSWORD() {
  return { url: API_URL + "/api/password/lost" };
}

export function RESET_PASSWORD() {
  return { url: API_URL + "/api/password/reset" };
}

export function GET_USER() {
  return { url: API_URL + "/api/user" };
}

export function GET_PHOTOS() {
  return { url: API_URL + "/api/photo/?_page1&_total=6&_user=0" };
}

export function POST_PHOTO() {
  return { url: API_URL + "/api/photo" };
}
