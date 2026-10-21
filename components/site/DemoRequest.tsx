"use client";

import { useEffect, useId, useRef, useState, type FormEvent } from "react";
import { contactDays, contactMethods, contactTimes, demoGoals as goals, demoRecipient, demoSummary } from "@/lib/demo-request";
import styles from "./DemoRequest.module.css";
import heroStyles from "./Hero.module.css";

const recommendations: Record<string, string> = {
  "Presentar mi negocio": "Una página para presentar lo que haces y facilitar el contacto.",
  "Vender productos": "Una tienda con catálogo, opciones de producto y un recorrido de compra.",
  "Crear una herramienta": "Una página con una función útil para tu negocio: reservas, consultas o una tarea a la medida.",
};

export default function DemoRequest({ compact = false, initialIdea = "", initialGoal = goals[0], buttonLabel = "Quiero mi demo gratis" }: { compact?: boolean; initialIdea?: string; initialGoal?: string; buttonLabel?: string }) {
  const id = useId();
  const dialog = useRef<HTMLDialogElement>(null);
  const heading = useRef<HTMLHeadingElement>(null);
  const summaryField = useRef<HTMLTextAreaElement>(null);
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [goal, setGoal] = useState(goals.includes(initialGoal) ? initialGoal : goals[0]);
  const [idea, setIdea] = useState(initialIdea);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [method, setMethod] = useState("WhatsApp");
  const [day, setDay] = useState("Cualquier día hábil");
  const [time, setTime] = useState("09:00–12:00");
  const [consent, setConsent] = useState(false);
  const [copyMessage, setCopyMessage] = useState("");
  const [sendState, setSendState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [sendError, setSendError] = useState("");
  const [website, setWebsite] = useState("");
  const manualDetails = useRef<HTMLDetailsElement>(null);
  const summary = demoSummary({ name, goal, idea, phone, method, day, time, consent });
  const mailto = `mailto:${demoRecipient}?subject=${encodeURIComponent("Solicitud de demo gratis — Sitio")}&body=${encodeURIComponent(summary)}`;

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previous; };
  }, [open]);

  function goTo(next: number) {
    setStep(next);
    setSendState("idle");
    setSendError("");
    setCopyMessage("");
    requestAnimationFrame(() => heading.current?.focus({ preventScroll: true }));
  }
  function openForm() {
    dialog.current?.showModal();
    setOpen(true);
    requestAnimationFrame(() => heading.current?.focus({ preventScroll: true }));
  }
  function next(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (step === 0 && idea.trim().length < 10) {
      const field = form.querySelector("textarea");
      field?.setCustomValidity("Cuéntanos tu idea en al menos 10 caracteres.");
      field?.reportValidity();
      return;
    }
    if (step === 1) {
      if (name.trim().length < 2) {
        const nameField = form.querySelector<HTMLInputElement>('input[autocomplete="given-name"]');
        nameField?.setCustomValidity("Escribe tu nombre.");
        nameField?.reportValidity();
        return;
      }
      const field = form.querySelector<HTMLInputElement>('input[type="tel"]');
      const digits = phone.replace(/\D/g, "");
      if (digits.length < 10 || digits.length > 15) {
        field?.setCustomValidity("Escribe un teléfono válido de 10 a 15 dígitos.");
        field?.reportValidity();
        return;
      }
    }
    goTo(step + 1);
  }
  async function copySummary() {
    try {
      await navigator.clipboard.writeText(summary);
      setCopyMessage(sendState === "sent" ? "Resumen copiado." : "Resumen copiado. Todavía no se ha enviado.");
    } catch {
      setCopyMessage("Puedes seleccionar y copiar el resumen de abajo.");
      if (manualDetails.current) manualDetails.current.open = true;
      summaryField.current?.focus();
      summaryField.current?.select();
    }
  }

  async function sendRequest() {
    if (sendState === "sending" || sendState === "sent") return;
    setSendState("sending");
    setSendError("");
    try {
      const response = await fetch("/api/demo-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, goal, idea, phone, method, day, time, consent, website }),
        signal: AbortSignal.timeout(18000),
      });
      const result = await response.json();
      if (!response.ok || result.accepted !== true) {
        setSendState("error");
        setSendError(typeof result.error === "string" ? result.error : "No pudimos confirmar el envío. Puedes reintentar o usar tu correo.");
        return;
      }
      setSendState("sent");
      requestAnimationFrame(() => heading.current?.focus({ preventScroll: true }));
    } catch {
      setSendState("error");
      setSendError("No pudimos confirmar el envío. Puedes reintentar o usar tu correo.");
    }
  }

  return (
    <>
      <button type="button" className={compact ? styles.navTrigger : heroStyles.primaryButton} onClick={openForm} aria-haspopup="dialog">
        {buttonLabel} {!compact && <span aria-hidden="true">→</span>}
      </button>
      <dialog ref={dialog} className={styles.dialog} aria-labelledby={`${id}-title`} aria-describedby={`${id}-intro`} onClose={() => setOpen(false)}>
        <div className={styles.modalHeader}><span>Tu primera demo, gratis.</span><button type="button" className={styles.close} aria-label="Cerrar solicitud de demo" onClick={() => dialog.current?.close()}>×</button></div>
        <div className={styles.modalBody}>
          <div className={styles.progress} aria-label={`Paso ${step + 1} de 3`}><span data-current={step === 0}>Tu idea</span><i /><span data-current={step === 1}>Contacto</span><i /><span data-current={step === 2}>Resumen</span></div>
          <h2 ref={heading} tabIndex={-1} id={`${id}-title`}>{sendState === "sent" ? "Tu idea ya está en camino." : step === 0 ? "¿Qué tienes en mente?" : step === 1 ? "Tú eliges cómo hablamos." : "Así empezaría tu sitio."}</h2>
          <p id={`${id}-intro`} className={styles.intro}>{sendState === "sent" ? "La solicitud se envió al correo de Sitio. Te contactaremos por el medio que elegiste." : step === 0 ? "Cuéntanos un poco para darle forma a tu primera propuesta." : step === 1 ? "Santiago y Mafe usarán estos datos para responder tu solicitud." : "Revisa tu idea y la forma en que prefieres que te contactemos."}</p>
          {step === 0 ? (
            <form onSubmit={next}>
              <label className={styles.honeypot} aria-hidden="true">Deja este campo vacío<input name="website" value={website} onChange={(event) => setWebsite(event.target.value)} tabIndex={-1} autoComplete="off" /></label>
              <fieldset className={styles.goalChoices}><legend>Quiero una página para…</legend>{goals.map((item) => <label key={item}><input type="radio" name={`${id}-goal`} value={item} checked={goal === item} onChange={() => setGoal(item)} /><span>{item}</span></label>)}</fieldset>
              <label className={styles.field} htmlFor={`${id}-idea`}>¿Qué haces y qué te gustaría lograr?<textarea id={`${id}-idea`} value={idea} onChange={(event) => { setIdea(event.target.value); event.target.setCustomValidity(""); }} rows={3} required minLength={10} maxLength={600} placeholder="Tengo un consultorio y quiero mostrar mis servicios y recibir reservas." /></label>
              <button className={styles.continue} type="submit">Continuar <span aria-hidden="true">→</span></button>
              <p className={styles.footnote}>Sin compromiso. La demo inicial no es una página terminada.</p>
            </form>
          ) : step === 1 ? (
            <form onSubmit={next}>
              <div className={styles.fieldRow}>
                <label className={styles.field} htmlFor={`${id}-name`}>Tu nombre<input id={`${id}-name`} autoComplete="given-name" value={name} onChange={(event) => { setName(event.target.value); event.target.setCustomValidity(""); }} required minLength={2} maxLength={60} /></label>
                <label className={styles.field} htmlFor={`${id}-phone`}>Número de contacto<input id={`${id}-phone`} type="tel" inputMode="tel" autoComplete="tel" placeholder="+57 300 000 0000" value={phone} onChange={(event) => { setPhone(event.target.value); event.target.setCustomValidity(""); }} onBlur={(event) => { const digits = phone.replace(/\D/g, ""); event.target.setCustomValidity(digits.length >= 10 && digits.length <= 15 ? "" : "Escribe un teléfono válido de 10 a 15 dígitos."); }} required pattern={"\\+?[0-9\\s\\(\\)\\.\\-]{10,24}"} maxLength={24} /></label>
              </div>
              <fieldset className={styles.contactChoices}><legend>Prefiero que me contacten por</legend>{contactMethods.map((item) => <label key={item}><input type="radio" name={`${id}-method`} checked={method === item} onChange={() => setMethod(item)} /><span>{item}</span></label>)}</fieldset>
              <div className={styles.fieldRow}>
                <label className={styles.field} htmlFor={`${id}-day`}>Día<select id={`${id}-day`} value={day} onChange={(event) => setDay(event.target.value)}>{contactDays.map((item) => <option key={item}>{item}</option>)}</select></label>
                <label className={styles.field} htmlFor={`${id}-time`}>Horario · Colombia<select id={`${id}-time`} value={time} onChange={(event) => setTime(event.target.value)}>{contactTimes.map((item) => <option key={item}>{item}</option>)}</select></label>
              </div>
              <label className={styles.consent}><input type="checkbox" checked={consent} onChange={(event) => setConsent(event.target.checked)} required /><span>Autorizo a Sitio a usar estos datos para responder mi solicitud. Puedo pedir su eliminación en {demoRecipient}.</span></label>
              <button className={styles.continue} type="submit">Revisar mi solicitud <span aria-hidden="true">→</span></button>
              <button className={styles.back} type="button" onClick={() => goTo(0)}>Volver a mi idea</button>
            </form>
          ) : (
            <div>
              <div className={styles.recommendation}><span>Punto de partida</span><strong>{goal}</strong><p>{recommendations[goal]}</p></div>
              <dl className={styles.summary}><div><dt>Tu idea</dt><dd>{idea}</dd></div><div><dt>Contacto</dt><dd>{name} · {phone}<br />{method} · {day}<br />{time}, hora de Colombia</dd></div></dl>
              {sendState === "sent" ? (
                <p className={styles.success} role="status">Solicitud enviada a {demoRecipient}. Esto no confirma una cita ni implica un pago.</p>
              ) : (
                <>
                  {sendError && <p className={styles.previewNotice} role="alert">{sendError}</p>}
                  <button className={styles.continue} type="button" disabled={sendState === "sending"} onClick={sendRequest}>{sendState === "sending" ? "Enviando…" : "Pedir mi demo gratis"}<span aria-hidden="true">→</span></button>
                  <p className={styles.footnote}>El resumen llegará a {demoRecipient}. Sin pagos ni suscripciones.</p>
                  {sendState === "error" && <a className={styles.back} href={mailto}>Enviar desde mi correo ↗</a>}
                </>
              )}
              <button className={styles.back} type="button" onClick={copySummary}>Copiar resumen</button>
              <p className={styles.copyStatus} role="status">{copyMessage}</p>
              <details ref={manualDetails} className={styles.manualCopy}><summary>Ver resumen para copiar manualmente</summary><textarea ref={summaryField} aria-label="Resumen de tu solicitud" readOnly value={summary} rows={7} /></details>
              {sendState !== "sent" && <button className={styles.back} disabled={sendState === "sending"} type="button" onClick={() => goTo(1)}>Editar mis datos</button>}
            </div>
          )}
        </div>
      </dialog>
    </>
  );
}
