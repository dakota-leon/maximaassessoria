import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host") ?? "localhost:5173";
  const protocol = requestHeaders.get("x-forwarded-proto") ?? (host.startsWith("localhost") ? "http" : "https");
  const ogImage = `${protocol}://${host}/og.png`;

  return {
    title: "Máxima Assessoria | Descontos indevidos em benefícios",
    description:
      "Análise especializada de descontos indevidos em benefícios de aposentados e pensionistas, com atendimento seguro e transparente.",
    icons: {
      icon: [
        { url: "/brand/maxima-favicon.png", type: "image/png", sizes: "64x64" },
        { url: "/brand/maxima-icon-192.png", type: "image/png", sizes: "192x192" },
      ],
      shortcut: "/brand/maxima-favicon.png",
      apple: [{ url: "/brand/maxima-apple-touch.png", sizes: "180x180", type: "image/png" }],
    },
    openGraph: {
      title: "Máxima Assessoria",
      description: "Segurança, transparência e cuidado com o que é seu.",
      type: "website",
      locale: "pt_BR",
      images: [{ url: ogImage, width: 1536, height: 1024, alt: "Máxima Assessoria — Cuidado com o que é seu." }],
    },
    twitter: {
      card: "summary_large_image",
      title: "Máxima Assessoria",
      description: "Segurança, transparência e cuidado com o que é seu.",
      images: [ogImage],
    },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
