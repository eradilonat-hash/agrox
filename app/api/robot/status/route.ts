import { robots } from "@/lib/store";
export async function POST(request:Request){try{const body=await request.json();const robot=robots.find(r=>r.id===body.robotId);if(!robot)return Response.json({error:"Robot not found"},{status:404});Object.assign(robot,body,{lastSeen:new Date().toISOString()});return Response.json({data:robot})}catch{return Response.json({error:"Invalid JSON"},{status:400})}}
