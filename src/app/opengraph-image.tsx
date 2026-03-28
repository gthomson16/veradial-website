import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "VeraDial — AI-Powered Business Calling";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  const logoData = await readFile(join(process.cwd(), "public", "icon.png"));
  const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#07111d",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "32px",
          }}
        >
          <img
            src={logoSrc}
            alt=""
            width="72"
            height="72"
            style={{ borderRadius: "18px" }}
          />
          <span style={{ fontSize: "52px", letterSpacing: "-0.03em", display: "flex" }}>
            <span style={{ fontWeight: 700, color: "#f5f7fb" }}>Vera</span>
            <span style={{ fontWeight: 700, color: "#73f2c3" }}>Dial</span>
          </span>
        </div>
        <p
          style={{
            fontSize: "28px",
            color: "#97abc1",
            maxWidth: "700px",
            textAlign: "center",
            lineHeight: 1.4,
            margin: 0,
          }}
        >
          AI-Powered Business Calling
        </p>
        <div
          style={{
            display: "flex",
            gap: "24px",
            marginTop: "40px",
          }}
        >
          {["AI Calling", "Verified Identity", "Business SMS"].map((label) => (
            <div
              key={label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 20px",
                borderRadius: "9999px",
                border: "1px solid rgba(115, 242, 195, 0.3)",
                background: "rgba(115, 242, 195, 0.1)",
              }}
            >
              <span style={{ fontSize: "16px", color: "#73f2c3", fontWeight: 600 }}>
                {label}
              </span>
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size }
  );
}
