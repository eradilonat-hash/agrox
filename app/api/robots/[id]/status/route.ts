import { robots } from "@/lib/store";
export async function GET(_:Request,{params}:{params:Promise<{id:string}>}){const {id}=await params;const robot=robots.find(r=>r.id===id);return robot?Response.json({data:robot}):Response.json({error:"Robot not found"},{status:404})}
