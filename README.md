# AgroX Control Center

AgroX is a responsive Next.js control center for an autonomous agricultural robot. It runs completely in demo mode today and exposes REST routes ready for ESP32, Arduino, or Raspberry Pi telemetry.

## Stack

Next.js 15, TypeScript, React, Tailwind CSS, Recharts, and Lucide icons. The `lib/store.ts` module is intentionally a small in-memory backend abstraction; replace it with Supabase repositories when credentials are configured.

## Run locally

```bash
npm install
npm run dev
```

Copy `.env.example` to `.env.local` before connecting Supabase. No secrets are embedded in the app.

## Included experiences

- Public startup landing page and demo sign-in
- Live dashboard with simulated telemetry, charts, sensor health, alerts, and mission status
- Interactive field-zone map, AI detections, camera UI, soil heatmap, controls, solar, fleet, analytics, hardware architecture, alerts, and settings
- Demo mode updates telemetry every four seconds; controls use the command API and clearly remain demo-safe

## API routes

| Route | Purpose |
| --- | --- |
| `POST /api/telemetry` / `GET /api/telemetry` | ingest/read sensor readings |
| `POST /api/detection` / `GET /api/detection` | ingest/read AI detections |
| `POST /api/robot/status` | update robot connection/status |
| `POST /api/robot/command` | receive mission/control actions |
| `GET /api/robots/:id/status` | read one robot status |

```bash
curl -X POST http://localhost:3000/api/telemetry \
  -H "Content-Type: application/json" \
  -d '{"robotId":"agrox-01","battery":75,"soilMoisture":31,"temperature":25}'
```

For Raspberry Pi/ESP32 integration, POST the JSON payload from the device to these routes (normally via an authenticated gateway). Replace `lib/store.ts` with a Supabase adapter and use `AGROX_API_SECRET` to validate device requests before deployment.

## Suggested Supabase schema

Create `robots`, `telemetry`, `detections`, `alerts`, `missions`, `field_zones`, and `charging_sessions`. Use `robot_id` foreign keys in telemetry/detections/alerts/missions, and add timestamp indexes to telemetry and detections for chart queries.

## Project layout

`app/` contains routes and API handlers, `lib/types.ts` holds hardware-safe payload contracts, and `lib/store.ts` is the demo repository.
