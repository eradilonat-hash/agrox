import { detections } from "@/lib/store";
import { Detection } from "@/lib/types";
export async function GET(){return Response.json({data:detections})}
export async function POST(request:Request){try{const body=await request.json() as Partial<Detection>; if(!body.robotId||!body.type||!body.sector) return Response.json({error:"robotId, type and sector are required"},{status:400});const item:Detection={id:crypto.randomUUID(),timestamp:new Date().toISOString(),object:body.type,confidence:0,latitude:0,longitude:0,status:"detected",...body} as Detection;detections.unshift(item);return Response.json({data:item},{status:201})}catch{return Response.json({error:"Invalid JSON"},{status:400})}}
