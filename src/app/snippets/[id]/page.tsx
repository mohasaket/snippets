import { db } from "@/db";
import { notFound } from "next/navigation";
interface snippetShowPagePrps{
  params:{
    id:string
  }
}
export default  async function SnippetShowPage(props:snippetShowPagePrps){
  await new Promise((r)=>setTimeout(r,2000));
const snippet=await db.snippet.findFirst({
  where:{
    id:parseInt(props.params.id)
  }
});
if(!snippet){
  return notFound();
}
 
  return <div>{snippet.title}</div>
}