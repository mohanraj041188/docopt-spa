import { redirect } from "@remix-run/react";
import { destroySession } from "~/utlis/session.server";

export const action = async ({ request }: ActionArgs) => {
  return redirect("/", {
    headers: {
      "Set-Cookie": await destroySession(request),
    },
  });
};
