export default function Home() {
  const services = [
    "Jump starts",
    "Flat tire help",
    "Battery replacement help",
    "Lockout assistance",
    "Fuel delivery",
    "Light repairs",
    "Prepurchase inspections",
    "Professional guidance",
  ];

  return (
    <main style={{ minHeight: "100vh", background: "#0a0a0a", color: "#ffffff", fontFamily: "Arial, sans-serif" }}>
      <section style={{ maxWidth: 1000, margin: "0 auto", padding: "80px 24px 56px", textAlign: "center" }}>
<img
  src="/logo.png"
  alt="Blacktop Roadside and Repair logo"
  style={{
    width: "320px",
    maxWidth: "85%",
    marginBottom: 20,
  }}
/>

<p style={{ color: "#b3b3b3", marginBottom: 12 }}>  Local small business serving North GA
</p>

  <p style={{ fontSize: "20px", lineHeight: 1.6, color: "#d1d1d1", maxWidth: 760, margin: "24px auto" }}>
          Fast roadside help for dead batteries, flat tires, lockouts, fuel delivery, and light repairs.
          Simple, local, and easy to reach.
        </p>

        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap", marginTop: 24 }}>
          <a
            href="tel:7065155017"
            style={{
              background: "#ffffff",
              color: "#111111",
              padding: "14px 22px",
              borderRadius: 12,
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Call (706) 515-5017
          </a>
          <a
            href="sms:7065155017"
            style={{
              border: "1px solid #444",
              color: "#ffffff",
              padding: "14px 22px",
              borderRadius: 12,
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Text for Help
          </a>
        </div>
      </section>
<div
  style={{
    border: "1px solid #333",
    borderRadius: "12px",
    padding: "16px",
    margin: "0 auto 32px",
    background: "#111111",
    color: "#ffffff",
    maxWidth: "900px",
  }}
>
  <p style={{ margin: 0, fontSize: "15px", lineHeight: "1.6", color: "#d1d1d1" }}>
    <strong style={{ color: "#ffffff" }}>Blacktop Roadside and Repair</strong> is currently growing and operating with limited service hours as we build toward full-time availability. If we miss your call, please leave a voicemail or send a text, and we’ll get back to you as soon as possible.
  </p>
</div>
      <section style={{ maxWidth: 1000, margin: "0 auto", padding: "0 24px 56px" }}>
        <div style={{ background: "#141414", border: "1px solid #2a2a2a", borderRadius: 20, padding: 28 }}>
          <h2 style={{ fontSize: "32px", marginTop: 0 }}>Services</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 14 }}>
            {services.map((service) => (
              <div
                key={service}
                style={{
                  background: "#1c1c1c",
                  border: "1px solid #2f2f2f",
                  borderRadius: 14,
                  padding: 16,
                }}
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1000, margin: "0 auto", padding: "0 24px 56px" }}>
        <div style={{ background: "#141414", border: "1px solid #2a2a2a", borderRadius: 20, padding: 28 }}>
          <h2 style={{ fontSize: "32px", marginTop: 0 }}>Why call Blacktop Roadside and Repair?</h2>
          <p style={{ color: "#d1d1d1", lineHeight: 1.7 }}>
            When vehicle problems happen, most people just want clear answers and real help. Blacktop Roadside and
            Repair is built around simple service, honest guidance, and practical help for common roadside and light
            vehicle issues. With 15+ years of hands-on automotive experience, we believe in straightforward communication, 
              dependable help, and treating people right when they need it most.          </p>
        </div>
      </section>

      <section style={{ maxWidth: 1000, margin: "0 auto", padding: "0 24px 80px" }}>
        <div style={{ background: "#141414", border: "1px solid #2a2a2a", borderRadius: 20, padding: 28 }}>
          <h2 style={{ fontSize: "32px", marginTop: 0 }}>Prepurchase inspections</h2>
          <p style={{ color: "#d1d1d1", lineHeight: 1.7 }}>
            Buying a used vehicle can be stressful. A prepurchase inspection can help spot obvious issues before you
            commit, giving you better peace of mind and a clearer idea of what you are buying.
          </p>

          <h2 style={{ fontSize: "32px", marginTop: 32 }}>Professional guidance</h2>
          <p style={{ color: "#d1d1d1", lineHeight: 1.7 }}>
            Sometimes you do not need a major repair right away, you just need someone experienced to point you in the
            right direction.
          </p>

          <div style={{ marginTop: 28 }}>
            <a
              href="tel:7065155017"
              style={{
                background: "#ffffff",
                color: "#111111",
                padding: "14px 22px",
                borderRadius: 12,
                textDecoration: "none",
                fontWeight: "bold",
                display: "inline-block",
              }}
            >
              Call or Text Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
