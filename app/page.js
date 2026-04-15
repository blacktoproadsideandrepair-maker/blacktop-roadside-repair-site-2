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

  const trustPoints = [
    "Local small business",
    "15+ years of hands-on experience",
    "Honest, straightforward service",
    "Simple call or text contact",
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        color: "#ffffff",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <section
        style={{
          maxWidth: 1000,
          margin: "0 auto",
          padding: "80px 24px 32px",
          textAlign: "center",
        }}
      >
        <img
          src="/logo.png"
          alt="Blacktop Roadside and Repair logo"
          style={{
            width: "320px",
            maxWidth: "85%",
            marginBottom: 20,
          }}
        />

        <p style={{ color: "#b3b3b3", marginBottom: 12 }}>
          Local small business serving North GA
        </p>

        <p
          style={{
            fontSize: "20px",
            lineHeight: 1.6,
            color: "#d1d1d1",
            maxWidth: 760,
            margin: "0 auto",
          }}
        >
       Fast Roadside Assistance for Flat Tires, Lockouts, Fuel Delivery, Dead Batteries, Light Repairs, and MORE!
        </p>

        <div
          style={{
            display: "flex",
            gap: 12,
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: 24,
          }}
        >
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

      <section style={{ maxWidth: 1000, margin: "0 auto", padding: "0 24px 24px" }}>
        <div
          style={{
            border: "1px solid #333",
            borderRadius: "12px",
            padding: "16px",
            margin: "0 auto 20px",
            background: "#111111",
            color: "#ffffff",
            maxWidth: "900px",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: "15px",
              lineHeight: "1.6",
              color: "#d1d1d1",
            }}
          >
            <strong style={{ color: "#ffffff" }}>
              Blacktop Roadside and Repair
            </strong>{" "}
            is currently growing and operating with limited service hours as we
            build toward full-time availability. If we miss your call, please
            leave a voicemail or send a text, and we’ll get back to you as soon
            as possible.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: 1000, margin: "0 auto", padding: "0 24px 56px" }}>
        <div
          style={{
            background: "#141414",
            border: "1px solid #2a2a2a",
            borderRadius: 20,
            padding: 28,
          }}
        >
          <h2 style={{ fontSize: "32px", marginTop: 0 }}>Services</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 14,
            }}
          >
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
        <div
          style={{
            background: "#141414",
            border: "1px solid #2a2a2a",
            borderRadius: 20,
            padding: 28,
          }}
        >
          <h2 style={{ fontSize: "32px", marginTop: 0 }}>Why Choose Blacktop</h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 14,
            }}
          >
            {trustPoints.map((point) => (
              <div
                key={point}
                style={{
                  background: "#1c1c1c",
                  border: "1px solid #2f2f2f",
                  borderRadius: 14,
                  padding: 16,
                }}
              >
                {point}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ maxWidth: 1000, margin: "0 auto", padding: "0 24px 56px" }}>
        <div
          style={{
            background: "#141414",
            border: "1px solid #2a2a2a",
            borderRadius: 20,
            padding: 28,
          }}
        >
          <h2 style={{ fontSize: "32px", marginTop: 0 }}>About</h2>
          <p style={{ color: "#d1d1d1", lineHeight: 1.7, marginBottom: 0 }}>
            Blacktop Roadside and Repair is a local small business serving North
            Georgia with roadside assistance and light vehicle repair. With 15+
            years of hands-on automotive experience, we aim to provide honest,
            simple, and dependable help when you need it most.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: 1000, margin: "0 auto", padding: "0 24px 56px" }}>
        <div
          style={{
            background: "#141414",
            border: "1px solid #2a2a2a",
            borderRadius: 20,
            padding: 28,
          }}
        >
          <h2 style={{ fontSize: "32px", marginTop: 0 }}>Service Area</h2>
          <p style={{ color: "#d1d1d1", lineHeight: 1.7, marginBottom: 0 }}>
            Proudly serving North Georgia, including Canton, Waleska, Jasper,
            and surrounding areas.
          </p>
        </div>
      </section>
    </main>
  );
}
