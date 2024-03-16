import { http, HttpResponse } from "msw";

export const emailHandlers = [
  http.post(
    "https://api.github.com/repo",
    // @ts-ignore
    async ({ request, params, cookies }) => {
      return new HttpResponse(null, {
        status: 200,
        statusText: "OK",
      });
    },
  ),
];
