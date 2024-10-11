"use server";

import { redirect } from "next/navigation";
import { db } from "@/db";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function createSnippet(
  formState: { message: string },
  formData: FormData
) {
  // check user inputs and make sure is valid
  const title = formData.get("title");
  const code = formData.get("code");

  if (typeof title !== "string" || title.length < 3) {
    return { message: "title must be longer." };
  }
  if (typeof code !== "string" || title.length < 10) {
    return { message: "code must be longer. " };
  }
  //create new record in db
  const snippet = await db.snippet.create({
    data: {
      title,
      code,
    },
  });
  console.log(snippet);
  //redirect the user back to the root route
  redirect("/");
}
export async function editSnippet(id: number, code: string) {
  await db.snippet.update({
    where: { id },
    data: { code },
  });

  redirect(`/snippets/${id}`);
}

export async function deleteSnippet(id: number) {
  await db.snippet.delete({
    where: { id },
  });
  redirect("/");
}
