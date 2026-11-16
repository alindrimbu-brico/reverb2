/**
 * Fundalul comun al paginilor Reverb: doar lumina de sus (radială). Fix, sub conținut:
 * -z-10 îl ține sub textul paginii, în contextul de stivuire al lui <main>.
 * Grila de linii de 48 px s-a scos de pe tot site-ul (Alin, 16 nov 2026): se bătea cu orbitele sistemului solar din fundal.
 * Nu o readuceți; sistemul solar (`SolarBackground`) și dungile de culoare (`AmbientBeams`) sunt fundalul.
 */
export default function PageBackdrop() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none -z-10 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.03)_0%,transparent_70%)]"
    />
  );
}
