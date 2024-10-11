'use client';

import * as actions from "@/actions"
import { useFormState } from "react-dom";

export default function SnippetCreatePage() {
const [formState,action]=useFormState(actions.createSnippet,{message:''})
  //const createSnippetActions=actions.createSnippet.bind(null)
  return (
    <form action={action}>
      <h3 className="font-bold m-3">Create a Snippet</h3>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <label className="w-12" htmlFor="title">
            Title
          </label>
          <input
            name="title"
            className="border rounded p-2 w-full"
            id="title"
          />
        </div>

        <div className="flex gap-4">
          <label className="w-12" htmlFor="code">
            Code
          </label>
          <textarea
            name="code"
            className="border rounded p-2 w-full"
            id="code"
          />
        </div>
        <div> 
            {formState.message?<div>{formState.message}</div>:null}
        </div>
        <button type="submit" className="rounded p-2 bg-blue-200">
          Create
        </button>
      </div>
    </form>
  );
}
