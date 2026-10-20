export const demoGoals = ["Presentar mi negocio", "Vender productos", "Crear una herramienta"];
export const contactMethods = ["WhatsApp", "Llamada"];
export const contactDays = ["Cualquier día hábil", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes"];
export const contactTimes = ["09:00–12:00", "12:00–15:00", "15:00–18:00"];
export const demoRecipient = "sitio.web.co@gmail.com";

export type DemoRequestData = {
  goal: string;
  idea: string;
  name: string;
  phone: string;
  method: string;
  day: string;
  time: string;
  consent: boolean;
};

export function parseDemoRequest(value: unknown): DemoRequestData | null {
  if (!value || typeof value !== "object" || Array.isArray(value)) return null;
  const input = value as Record<string, unknown>;
  const fields = ["goal", "idea", "name", "phone", "method", "day", "time"];
  if (fields.some((key) => typeof input[key] !== "string")) return null;
  const data = Object.fromEntries(fields.map((key) => [key, (input[key] as string).trim()])) as Omit<DemoRequestData, "consent">;
  const digits = data.phone.replace(/\D/g, "");
  if (
    !demoGoals.includes(data.goal) || !contactMethods.includes(data.method) ||
    !contactDays.includes(data.day) || !contactTimes.includes(data.time) ||
    data.idea.length < 10 || data.idea.length > 600 ||
    data.name.length < 2 || data.name.length > 60 || /[\r\n]/.test(data.name) ||
    !/^\+?[0-9\s().-]{10,24}$/.test(data.phone) || /[\r\n]/.test(data.phone) ||
    digits.length < 10 || digits.length > 15 || input.consent !== true
  ) return null;
  return { ...data, consent: true };
}

export function demoSummary(data: DemoRequestData) {
  return `Solicitud de demo gratis para Sitio\n\nNombre: ${data.name.trim()}\nNecesito: ${data.goal}\nMi idea: ${data.idea.trim()}\nTeléfono: ${data.phone.trim()}\nContactarme por: ${data.method}\nDía: ${data.day}\nHorario: ${data.time} (hora de Colombia)\n\nAutorizo a Sitio a usar estos datos para responder esta solicitud.`;
}
