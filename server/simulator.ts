/**
 * IoT Data Simulator (compatible with ES Modules)
 * Run with: npx ts-node server/simulator.ts
 */

import { readFileSync, writeFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const DB_PATH = resolve(__dirname, 'db.json');

// --- Helpers ---
function randInt(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randBool(): number {
  return Math.random() < 0.5 ? 1 : 0;
}

// --- Update logic ---
function updateSensors() {
  try {
    const data = JSON.parse(readFileSync(DB_PATH, 'utf8'));
    const sensors = data.IOT_sensor;

    sensors.gas1 = randInt(2000, 4000);
    sensors.gas2 = randInt(2000, 4000);

    sensors.dht1_temp = randInt(20, 35);
    sensors.dht1_hum = randInt(30, 80);
    sensors.dht2_temp = randInt(20, 35);
    sensors.dht2_hum = randInt(30, 80);

    sensors.pir1 = randBool();
    sensors.pir2 = randBool();
    sensors.servo1 = randBool();
    sensors.servo2 = randBool();
    sensors.buzzer1 = randBool();
    sensors.buzzer2 = randBool();
    sensors.light1 = randBool();
    sensors.light2 = randBool();

    writeFileSync(DB_PATH, JSON.stringify(data, null, 2));
    console.log(`[Simulator] Updated sensor values at ${new Date().toLocaleTimeString()}`);
  } catch (err) {
    console.error('[Simulator] Error updating db.json:', err);
  }
}

// Update every 3 seconds
setInterval(updateSensors, 3000);
updateSensors();
