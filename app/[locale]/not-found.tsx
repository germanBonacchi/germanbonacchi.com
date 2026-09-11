import Link from "next/link";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "60vh",
        display: "grid",
        placeItems: "center",
        padding: "3rem 1.5rem",
        textAlign: "center",
        background: "#010606",
        color: "#f7f8fa",
      }}
    >
      <div>
        <p
          style={{
            color: "#a32eff",
            fontWeight: 700,
            letterSpacing: "0.08em",
          }}
        >
          404
        </p>
        <h1 style={{ margin: "0.5rem 0 1rem" }}>Página no encontrada</h1>
        <p style={{ marginBottom: "1.5rem", opacity: 0.8 }}>
          La página que buscás no existe.
        </p>
        <Link
          href="/"
          style={{
            color: "#00c8ff",
            fontWeight: 700,
            textDecoration: "none",
          }}
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
