/**
 * Fundalul comun al paginilor Reverb: grila arhitecturală fină + lumina de sus,
 * aceleași ca pe pagina de pornire și pe /servicii. Fix, sub conținut:
 * -z-10 îl ține sub textul paginii, în contextul de stivuire al lui <main>.
 */
export default function PageBackdrop() {
  return (
    <>
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none -z-10 opacity-[0.035] light:opacity-[0.075]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      <div
        aria-hidden="true"
        className="fixed inset-0 pointer-events-none -z-10 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03)_0%,transparent_70%)]"
      />
    </>
  );
}
