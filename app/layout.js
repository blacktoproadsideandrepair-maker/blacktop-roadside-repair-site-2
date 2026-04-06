export const metadata = {
  title: "Blacktop Roadside and Repair",
  description: "Roadside assistance, light repairs, prepurchase inspections, and professional guidance in North GA",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
