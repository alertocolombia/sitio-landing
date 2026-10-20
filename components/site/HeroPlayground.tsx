"use client";

import Image from "next/image";
import { useRef, useState, type ReactNode } from "react";
import styles from "./Hero.module.css";

type Mode = "show" | "sell" | "solve";
const modes: { id: Mode; label: string; address: string }[] = [
  { id: "show", label: "Mostrar", address: "consultorio.demo" },
  { id: "sell", label: "Vender", address: "vigor.demo" },
  { id: "solve", label: "Resolver", address: "consultorio.demo / agenda" },
];
const products = [
  { name: "Set Energía", color: "Celeste", image: "/projects/vigor/energia-celeste.jpg", price: 219000 },
  { name: "Flow Motion", color: "Gris", image: "/projects/vigor/flow-gris.jpg", price: 189000 },
  { name: "Vigor Dress", color: "Vino", image: "/projects/vigor/vestido-vino.jpg", price: 249000 },
];
const money = (value: number) => `$${value.toLocaleString("es-CO")}`;

function DemoButton({ children, onClick }: { children: ReactNode; onClick: () => void }) {
  return <button className={styles.demoButton} type="button" onClick={onClick}>{children}<span aria-hidden="true">→</span></button>;
}

function DoctorExample({ onBook }: { onBook: () => void }) {
  const [view, setView] = useState<"home" | "services">("home");
  return (
    <div className={styles.doctorSite}>
      <div className={styles.miniNav}>
        <span className={styles.doctorBrand}><span aria-hidden="true">✳</span> Elena Ríos</span>
        <div role="group" aria-label="Navegación del consultorio de ejemplo">
          <button type="button" aria-pressed={view === "home"} onClick={() => setView("home")}>Inicio</button>
          <button type="button" aria-pressed={view === "services"} onClick={() => setView("services")}>Consulta</button>
        </div>
      </div>
      {view === "home" ? (
        <div className={styles.doctorHome}>
          <div className={styles.doctorCopy}>
            <span className={styles.miniEyebrow}>Medicina general</span>
            <h3>Tu salud<br />merece tiempo.</h3>
            <p>Un espacio para escucharte y cuidar de ti.</p>
            <DemoButton onClick={onBook}>Elegir horario</DemoButton>
          </div>
          <div className={styles.doctorPortrait}><Image src="/demos/hero/doctora-demo.png" alt="Retrato ficticio para la demostración de un consultorio" fill sizes="(max-width: 640px) 130px, 200px" /></div>
          <div className={styles.doctorFoot}><span>Consulta presencial</span><span>Bogotá, Colombia</span></div>
        </div>
      ) : (
        <div className={styles.servicesDemo}>
          <span className={styles.miniEyebrow}>Consulta general</span>
          <h3>Empecemos<br />por escucharte.</h3>
          <p>Conoce el servicio y elige un horario en el mismo lugar.</p>
          <dl><div><dt>Duración</dt><dd>30 minutos</dd></div><div><dt>Modalidad</dt><dd>Presencial</dd></div></dl>
          <DemoButton onClick={onBook}>Ver horarios</DemoButton>
        </div>
      )}
    </div>
  );
}

function StoreExample() {
  const [productIndex, setProductIndex] = useState(0);
  const [size, setSize] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [view, setView] = useState<"product" | "bag" | "done">("product");
  const product = products[productIndex];
  const resultRef = useRef<HTMLHeadingElement>(null);
  function changeView(next: typeof view) {
    setView(next);
    requestAnimationFrame(() => resultRef.current?.focus({ preventScroll: true }));
  }

  return (
    <div className={styles.shopSite}>
      <div className={styles.miniNav}><span className={styles.shopBrand}>VIGOR</span><span className={styles.miniEyebrow}>{view === "product" ? "Colección esencial" : "Tu bolsa"}</span></div>
      <div className={styles.shopContent}>
        {view === "product" ? (
          <>
            <div className={styles.productGrid}>
              <div className={styles.productPhoto}><Image src={product.image} alt={`${product.name}, color ${product.color.toLowerCase()}`} fill sizes="(max-width: 640px) 130px, 180px" /></div>
              <div className={styles.productOptions}>
                <span className={styles.miniEyebrow}>{product.color}</span>
                <h3 ref={resultRef} tabIndex={-1}>{product.name}</h3>
                <p className={styles.productPrice}>{money(product.price)} <small>COP</small></p>
                <label className={styles.modelLabel}>Modelo<select aria-label="Modelo de producto" value={productIndex} onChange={(event) => setProductIndex(Number(event.target.value))}>{products.map((item, index) => <option key={item.name} value={index}>{item.name}</option>)}</select></label>
                <fieldset><legend>Talla</legend><div className={styles.sizeOptions}>{["S", "M", "L"].map((item) => <button type="button" key={item} aria-pressed={size === item} aria-label={`Talla ${item}`} onClick={() => setSize(item)}>{item}</button>)}</div></fieldset>
              </div>
            </div>
            <DemoButton onClick={() => { setQuantity(1); changeView("bag"); }}>Añadir a la bolsa</DemoButton>
          </>
        ) : view === "bag" ? (
          <>
            <h3 ref={resultRef} tabIndex={-1} className={styles.viewTitle}>Ya está en tu bolsa.</h3>
            <div className={styles.bagItem}>
              <Image src={product.image} alt={product.name} width={68} height={86} />
              <div><strong>{product.name}</strong><p>{product.color} · Talla {size}</p><div className={styles.quantity}><button type="button" aria-label="Reducir cantidad" disabled={quantity === 1} onClick={() => setQuantity(quantity - 1)}>−</button><output aria-live="polite" aria-label="Cantidad">{quantity}</output><button type="button" aria-label="Aumentar cantidad" disabled={quantity === 5} onClick={() => setQuantity(quantity + 1)}>+</button></div></div>
              <button type="button" className={styles.removeItem} onClick={() => changeView("product")}>Quitar</button>
            </div>
            <div className={styles.orderTotal}><span>Total de ejemplo</span><strong>{money(product.price * quantity)} COP</strong></div>
            <DemoButton onClick={() => changeView("done")}>Simular pedido</DemoButton>
            <button className={styles.backButton} type="button" onClick={() => changeView("product")}>Seguir explorando</button>
          </>
        ) : (
          <div className={styles.demoSuccess}>
            <span className={styles.successMark} aria-hidden="true">✓</span>
            <h3 ref={resultRef} tabIndex={-1}>Del interés<br />al pedido.</h3>
            <p>{quantity} × {product.name}<br />{product.color} · Talla {size}</p>
            <strong>{money(product.price * quantity)} COP</strong>
            <p className={styles.demoNote}>Simulación completada. Sin pedido real ni cobro.</p>
            <button type="button" className={styles.backButton} onClick={() => changeView("product")}>Volver a la tienda</button>
          </div>
        )}
      </div>
    </div>
  );
}

function BookingExample() {
  const [day, setDay] = useState("Lunes");
  const [time, setTime] = useState("10:30");
  const [booked, setBooked] = useState(false);
  const resultRef = useRef<HTMLHeadingElement>(null);
  function finish(value: boolean) {
    setBooked(value);
    requestAnimationFrame(() => resultRef.current?.focus({ preventScroll: true }));
  }
  return (
    <div className={styles.bookingSite}>
      <div className={styles.miniNav}><span className={styles.doctorBrand}><span aria-hidden="true">✳</span> Elena Ríos</span><span className={styles.miniEyebrow}>Agenda de ejemplo</span></div>
      <div className={styles.bookingContent}>
        {booked ? (
          <div className={styles.demoSuccess}>
            <span className={styles.successMark} aria-hidden="true">✓</span>
            <h3 ref={resultRef} tabIndex={-1}>Así queda<br />tu reserva.</h3>
            <p>Consulta general · 30 minutos</p>
            <strong>{day} · {time}</strong>
            <p className={styles.demoNote}>Es una simulación. No se agendó una cita real.</p>
            <button type="button" className={styles.backButton} onClick={() => finish(false)}>Cambiar horario</button>
          </div>
        ) : (
          <>
            <h3 ref={resultRef} tabIndex={-1}>Un momento para ti.</h3>
            <p className={styles.bookingSubtitle}>Consulta general · 30 minutos</p>
            <fieldset><legend>Elige un día</legend><div className={styles.dayOptions}>{["Lunes", "Martes", "Miércoles"].map((item) => <button type="button" key={item} aria-pressed={day === item} onClick={() => setDay(item)}>{item}</button>)}</div></fieldset>
            <fieldset><legend>Horarios disponibles de ejemplo</legend><div className={styles.timeOptions}>{["09:00", "10:30", "14:00"].map((item) => <button type="button" key={item} aria-pressed={time === item} onClick={() => setTime(item)}>{item}</button>)}</div></fieldset>
            <DemoButton onClick={() => finish(true)}>Simular reserva</DemoButton>
          </>
        )}
      </div>
    </div>
  );
}

export default function HeroPlayground() {
  const [mode, setMode] = useState<Mode>("show");
  const current = modes.find((item) => item.id === mode)!;
  const bookingToggle = useRef<HTMLButtonElement>(null);
  return (
    <div className={styles.playground}>
      <div className={styles.demoToolbar}>
        <div className={styles.modePicker} role="group" aria-label="Qué puede hacer tu página">
          {modes.map((item) => <button type="button" ref={item.id === "solve" ? bookingToggle : undefined} key={item.id} aria-pressed={mode === item.id} onClick={() => setMode(item.id)}>{item.label}</button>)}
        </div>
        <span className={styles.tryHint}>Pruébala <span aria-hidden="true">↙</span></span>
      </div>
      <div className={styles.browser}>
        <div className={styles.browserBar}><span className={styles.windowDots} aria-hidden="true"><i /><i /><i /></span><span>{current.address}</span><span className={styles.browserStatus} aria-hidden="true">↗</span></div>
        <div className={styles.example} key={mode}>
          {mode === "show" ? <DoctorExample onBook={() => { setMode("solve"); bookingToggle.current?.focus({ preventScroll: true }); }} /> : mode === "sell" ? <StoreExample /> : <BookingExample />}
        </div>
        <div className={styles.demoLabel}><span aria-hidden="true" /> {mode === "sell" ? "Demo · sin pedidos ni cobros reales" : "Demo ficticia · sin citas reales"}</div>
      </div>
      <a className={styles.portfolioLink} href="#trabajos">Ver lo que podemos crear <span aria-hidden="true">↗</span></a>
    </div>
  );
}
