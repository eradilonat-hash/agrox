import { telemetry } from "@/lib/store";
import { Telemetry } from "@/lib/types";
export async function GET(){return Response.json({data:telemetry})}
export async function POST(request:Request){try{const body=await request.json() as Partial<Telemetry>; if(!body.robotId||typeof body.battery!=="number") return Response.json({error:"robotId and numeric battery are required"},{status:400}); const point:Telemetry={timestamp:new Date().toISOString(),soilMoisture:0,temperature:0,humidity:0,latitude:0,longitude:0,speed:0,...body} as Telemetry;telemetry.push(point);return Response.json({data:point},{status:201})}catch{return Response.json({error:"Invalid JSON"},{status:400})}}
