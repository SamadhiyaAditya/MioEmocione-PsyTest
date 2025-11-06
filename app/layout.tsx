import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mio Emocione - Psychology Quiz",
  description: "Emotional Intelligence & Maturity Assessment",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/styles/quiz.css" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}