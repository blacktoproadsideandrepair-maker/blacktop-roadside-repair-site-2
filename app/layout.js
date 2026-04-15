export const metadata = {
  title: "Blacktop Roadside and Repair",
  description: "Roadside help and light vehicle repair in North Georgia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
