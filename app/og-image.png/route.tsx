import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const dynamic = "force-static";
/**
 * Open Graph / social share image, rendered at build time to /og-image.png.
 * (A route named *.png so the static export keeps a real .png extension.)
 */
const size = { width: 1200, height: 630 };

const bars = [
  "0,0 56,0 56,14 10,14",
  "14,22 56,22 56,36 24,36",
  "28,44 56,44 56,58 38,58",
  "46,0 56,0 56,66 46,58",
  "64,0 120,0 110,14 64,14",
  "64,22 106,22 96,36 64,36",
  "64,0 74,0 74,58 64,66",
];

export async function GET() {
  const anton = await readFile(join(process.cwd(), "assets/fonts/Anton-Regular.ttf"));
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 80px",
        background: "#0D0D0D",
        color: "white",
        position: "relative",
        overflow: "hidden",
        fontFamily: "Anton",
      }}
    >
      <div
        style={{
          position: "absolute",
          right: -120,
          top: -60,
          width: 620,
          height: 800,
          background: "#E31E24",
          transform: "skewX(-18deg)",
        }}
      />
      <div
        style={{
          position: "absolute",
          right: 470,
          top: -60,
          width: 40,
          height: 800,
          background: "#E31E24",
          opacity: 0.7,
          transform: "skewX(-18deg)",
        }}
      />
      <svg
        width="360"
        height="198"
        viewBox="0 0 120 66"
        style={{ position: "absolute", right: 70, top: 216 }}
        fill="#0D0D0D"
      >
        {bars.map((p) => (
          <polygon key={p} points={p} />
        ))}
      </svg>
      <div style={{ display: "flex", fontSize: 26, letterSpacing: 6, color: "#ff4d52" }}>
        {"//// STRONGER TODAY. FITTER TOMORROW."}
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 170,
          lineHeight: 1.05,
          marginTop: 14,
          transform: "skewX(-9deg)",
        }}
      >
        <span>BE-</span>
        <span style={{ color: "#E31E24" }}>FIT</span>
      </div>
      <div style={{ display: "flex", fontSize: 40, letterSpacing: 22 }}>FITNESS</div>
      <div
        style={{
          display: "flex",
          marginTop: 36,
          background: "#E31E24",
          padding: "10px 24px",
          fontSize: 30,
          letterSpacing: 4,
          alignSelf: "flex-start",
        }}
      >
        NOW OPEN · MAHADEVAPURA, BENGALURU
      </div>
    </div>,
    { ...size, fonts: [{ name: "Anton", data: anton, style: "normal", weight: 400 }] },
  );
}
