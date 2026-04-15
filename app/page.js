export default function Home() {
  const services = [
    "Jump Starts",
    "Flat Tire Help",
    "Battery Replacement",
    "Lockout Assistance",
    "Fuel Delivery",
    "Light Roadside Repairs",
    "Pre-purchase Inspections",
    "Honest Advice",
    "MUCH MORE",
  ];

  const trustPoints = [
    "Local Small Business",
    "15+ Years of Hands-on Experience",
    "Honest, Straightforward Service",
    "Competitive Pricing & Discounts",
    "Simple Call or Text Contact",
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
          Local Small Business Serving North GA
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
          Fast Roadside Assistance for Flat Tires, Lockouts, Fuel Delivery, Dead
          Batteries, Light Roadside Repairs, and More.
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
          <h2 style={{ fontSize: "32px", marginTop: 0 }}>Service Area</h2>
          <p style={{ color: "#d1d1d1", lineHeight: 1.7, marginBottom: 0 }}>
            Proudly Serving North Georgia, Including Holly Springs, Canton,
            Jasper, and Surrounding Areas.
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
          <h2 style={{ fontSize: "32px", marginTop: 0 }}>About</h2>
          <p style={{ color: "#d1d1d1", lineHeight: 1.7, marginBottom: 0 }}>
            Blacktop Roadside and Repair is a local small business built on
            honest work, dependable service, and real hands-on experience. With
            15+ years of automotive experience, we aim to help people with
            roadside needs and light vehicle repairs in a way that is simple,
            fair, and straightforward. We know car problems usually come at the
            worst time, and our goal is to provide reliable, respectful help
            done with care.
          </p>
        </div>
      </section>

      <section style={{ maxWidth: 1000, margin: "0 auto", padding: "0 24px 80px" }}>
        <div
          style={{
            background: "#141414",
            border: "1px solid #2a2a2a",
            borderRadius: 20,
            padding: 28,
            textAlign: "center",
          }}
        >
          <h2 style={{ fontSize: "32px", marginTop: 0 }}>Need Help?</h2>
          <p style={{ color: "#d1d1d1", lineHeight: 1.7, marginBottom: 24 }}>
            Call or Text for Roadside Service Availability.
          </p>

          <div
            style={{
              display: "flex",
              gap: 12,
              justifyContent: "center",
              flexWrap: "wrap",
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
        </div>
      </section>
    </main>
  );
}
