export type RobotStatus="online"|"offline"|"charging";
export type DetectionType="weed"|"pest"|"animal";
export type DetectionStatus="detected"|"targeted"|"treated"|"ignored";
export interface Telemetry { robotId:string; timestamp:string; battery:number; soilMoisture:number; temperature:number; humidity:number; latitude:number; longitude:number; speed:number; signal?:number }
export interface Detection { id:string; robotId:string; timestamp:string; type:DetectionType; object:string; confidence:number; latitude:number; longitude:number; sector:string; imageUrl?:string; status:DetectionStatus }
export interface Robot { id:string; name:string; status:RobotStatus; battery:number; currentMission:string; latitude:number; longitude:number; lastSeen:string }
