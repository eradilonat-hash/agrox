import { Detection, Robot, Telemetry } from "./types";
export const robots:Robot[]=[{id:"agrox-01",name:"AgroX-01",status:"online",battery:78,currentMission:"Field Scan",latitude:51.2301,longitude:51.4203,lastSeen:new Date().toISOString()}];
export const telemetry:Telemetry[] = Array.from({length:12},(_,i)=>({robotId:"agrox-01",timestamp:new Date(Date.now()-(11-i)*3600000).toISOString(),battery:88-i,soilMoisture:27+(i%5)*2,temperature:23+i*.32,humidity:62-i*.4,latitude:51.2301+i*.0001,longitude:51.4203+i*.0001,speed:.8,signal:91}));
export const detections:Detection[]=[
{id:"d1",robotId:"agrox-01",timestamp:"2026-09-09T11:03:00Z",type:"weed",object:"Broadleaf weed",confidence:.94,latitude:51.2308,longitude:51.4211,sector:"B2",status:"detected"},
{id:"d2",robotId:"agrox-01",timestamp:"2026-09-09T10:46:00Z",type:"pest",object:"Locust",confidence:.96,latitude:51.2299,longitude:51.4198,sector:"A2",status:"targeted"},
{id:"d3",robotId:"agrox-01",timestamp:"2026-09-09T09:18:00Z",type:"weed",object:"Field weed",confidence:.91,latitude:51.2295,longitude:51.4208,sector:"C2",status:"treated"}
];
