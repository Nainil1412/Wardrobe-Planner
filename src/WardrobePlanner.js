import React, { useState } from "react";
import "./WardrobePlanner.css";

const WardrobePlanner = () => {
  const [activeTab, setActiveTab] = useState("mehendi");

  const events = [
    {
      id: "mehendi",
      title: "Mehfil-E-Mehendi",
      subtitle: "MEHNDI",
      date: "January 23rd | Evening",
      day: "THURSDAY",
      note: "Vibe: Boho & Colorful",
      colorPalette: [
        { hex: "#228B22", name: "Forest Green" },
        { hex: "#2E8B57", name: "Sea Green" },
        { hex: "#90EE90", name: "Light Green" },
        { hex: "#87CEEB", name: "Sky Blue" },
        { hex: "#ADD8E6", name: "Light Blue" },
      ],
      attire: {
        title: "ATTIRE",
        description:
          "Men: Green Kurta, Teal Indo-Western\nWomen: Green Lehenga, Multicolor Anarkali",
        men: "Green Kurta, Teal Indo-Western",
        women: "Green Lehenga, Multicolor Anarkali",
      },
      styleTip:
        "Embrace vibrant greens and blues. Add floral accessories or statement jewelry to complement the boho vibe.",
      accessories: [],
      outfits: [{ type: "couple", image: "/images/mahendi.jpeg" }],
      themeColor: "#e8f5e9", // Light Green
      secondaryColor: "#228B22", // Forest Green for title
      vibeColor: "#006400", // Dark Green
    },
    {
      id: "sangeet",
      title: "Nach Baliye Night",
      subtitle: "SANGEET",
      date: "January 24th | Evening",
      day: "SATURDAY",
      note: "Vibe: Glamorous & Glitzy",
      colorPalette: [
        { hex: "#FFD700", name: "Gold" },
        { hex: "#DAA520", name: "Goldenrod" },
        { hex: "#000080", name: "Navy Blue" },
        { hex: "#191970", name: "Midnight Blue" },
        { hex: "#000000", name: "Black" },
      ],
      attire: {
        title: "ATTIRE",
        description:
          "Men: Indo-Western, Tuxedo\nWomen: Shimmering Gown, Sequin Saree",
        men: "Indo-Western, Tuxedo, Suits",
        women: "Lehenga, Sharara, PartyWear saree ",
      },
      styleTip:
        "Go all out with shimmer and sparkle! Metallic accessories and bold makeup will make you shine on the dance floor.",
      accessories: [],
      outfits: [{ type: "couple", image: "/images/sangeet.png" }],
      themeColor: "#e6e6fa", // Lavender
      secondaryColor: "#191970", // Midnight Blue for text visibility (overrides Silver)
    },
    {
      id: "haldi",
      title: "Rang de Mohe",
      subtitle: "HALDI",
      date: "January 25th | Morning",
      day: "SUNDAY",
      note: "Vibe: Joyful & Bright",
      colorPalette: [
        { hex: "#E6E6FA", name: "Lavender" },
        { hex: "#DDA0DD", name: "Plum" },
        { hex: "#FF69B4", name: "Hot Pink" },
        { hex: "#FFC0CB", name: "Pink" },
        { hex: "#FFD700", name: "Gold" },
        { hex: "#FFFF00", name: "Yellow" },
      ],
      attire: {
        title: "ATTIRE",
        description:
          "Men: Yellow Kurta Pajama, White Pathani Suit\nWomen: Yellow Saree, Floral Lehenga",
        men: "Kurta Pajama, Pathani Suit, Floral Kurtas",
        women: "Indo-Western, Saree, Lehenga",
      },
      styleTip:
        "Wear clothes you don't mind getting turmeric on! Light, comfortable fabrics in bright yellows and florals are perfect.",
      accessories: [],
      outfits: [{ type: "couple", image: "/images/haldi.jpg" }],
      themeColor: "#fffacd", // Lemon Chiffon
      secondaryColor: "#FFD700", // Gold for title
      vibeColor: "#D2691E", // Chocolate (Dark Orange) for visibility
    },
    {
      id: "wedding",
      title: "Saat Phere",
      subtitle: "WEDDING",
      date: "January 25th | Evening",
      day: "SUNDAY",
      note: "Vibe: Royal & Traditional",
      colorPalette: [
        { hex: "#8B0000", name: "Dark Red" },
        { hex: "#DC143C", name: "Crimson" },
        { hex: "#FFD700", name: "Gold" },
        { hex: "#DAA520", name: "Goldenrod" },
        { hex: "#800000", name: "Maroon" },
        { hex: "#A52A2A", name: "Brown" },
      ],
      attire: {
        title: "ATTIRE",
        description:
          "Men: Sherwani with Turban\nWomen: Red/Panetar Saree, Heavy Bridal Lehenga",
        men: "Sherwani, Kurta Pajama, Jotpuri",
        women: "Lehenga, Indo-Western, Saree",
      },
      styleTip:
        "Embrace traditional elegance with rich reds and golds. Heavy embroidery and traditional jewelry complete the royal look.",
      accessories: [],
      outfits: [{ type: "couple", image: "/images/wedding.png" }],
      themeColor: "#fff5e6", // Cream
      vibeColor: "#8B0000", // Dark Red for visibility
      secondaryColor: "#DAA520", // Goldenrod for title
    },
    {
      id: "reception",
      title: "Evening of Elegance",
      subtitle: "RECEPTION",
      date: "January 26th | Evening",
      day: "MONDAY",
      note: "Vibe: Elegant & Formal",
      colorPalette: [
        { hex: "#000000", name: "Black" },
        { hex: "#2F4F4F", name: "Slate Gray" },
        { hex: "#8B4513", name: "Saddle Brown" },
        { hex: "#A0522D", name: "Sienna" },
        { hex: "#722F37", name: "Wine Red" },
        { hex: "#800020", name: "Burgundy" },
      ],
      attire: {
        title: "ATTIRE",
        description:
          "Men: Three Piece Suit, Black Tie\nWomen: Evening Gown, Reception Saree",
        men: "Tuexido, Suit,Formals",
        women: "Gown, Western Saree, Indo-Western",
      },
      styleTip:
        "Keep it sophisticated and elegant. Emerald greens, wine tones, and classic black create a timeless formal look.",
      accessories: [],
      outfits: [{ type: "couple", image: "/images/reception.png" }],
      themeColor: "#f5e6ea", // Lighter Wine
      secondaryColor: "#722F37", // Wine for text visibility
    },
  ];

  const activeEvent = events.find((e) => e.id === activeTab);

  return (
    <div
      className="wardrobe-planner-container"
      style={{ backgroundColor: activeEvent.themeColor }}
    >
      <header className="main-header">
        <h1 className="logo-text">Nainil & Nandini</h1>
        <h2 className="page-title">
          The Wardrobe <span className="script-text">Planner</span>
        </h2>
      </header>

      <div className="tabs-container">
        <div className="tabs-nav">
          {events.map((event) => (
            <button
              key={event.id}
              className={`tab-btn ${activeTab === event.id ? "active" : ""}`}
              onClick={() => setActiveTab(event.id)}
              style={{
                color:
                  activeTab === event.id
                    ? event.secondaryColor || (event.colorPalette && event.colorPalette[0].hex)
                    : "#666",
                borderColor:
                  activeTab === event.id
                    ? event.secondaryColor || (event.colorPalette && event.colorPalette[0].hex)
                    : "transparent",
              }}
            >
              {event.subtitle}
            </button>
          ))}
        </div>

        <div className="tab-content">
          <div className="content-card">
            <div className="card-header">
              <h3
                className="script-title"
                style={{
                  color:
                    activeEvent.secondaryColor || (activeEvent.colorPalette && activeEvent.colorPalette[0].hex),
                }}
              >
                {activeEvent.title}
              </h3>
              <div
                className="title-separator"
                style={{
                  backgroundColor:
                    activeEvent.secondaryColor || (activeEvent.colorPalette && activeEvent.colorPalette[0].hex),
                }}
              ></div>
              <h4 className="event-subtitle">{activeEvent.subtitle}</h4>
              <p className="ps-text">{activeEvent.note}</p>
            </div>

            <div className="card-body">
              <div className="info-section">
                <div className="date-display">
                  <span className="date-text">{activeEvent.date}</span>
                  <span className="day-text">{activeEvent.day}</span>
                </div>

                <div className="attire-section">
                  <h4
                    style={{
                      color:
                        activeEvent.secondaryColor || activeEvent.colors[0].hex,
                    }}
                  >
                    ATTIRE
                  </h4>
                  <div className="attire-details">
                    <p>
                      <strong>Men:</strong> {activeEvent.attire.men}
                    </p>
                    <p>
                      <strong>Women:</strong> {activeEvent.attire.women}
                    </p>
                  </div>
                </div>

                <div
                  className="style-tip-box"
                  style={{
                    borderColor:
                      activeEvent.secondaryColor || activeEvent.colors[0].hex,
                  }}
                >
                  <h5>Style Tip</h5>
                  <p>{activeEvent.styleTip}</p>
                </div>
              </div>

              <div className="visual-section">
                <h4 className="color-palette-title">COLOR PALETTE</h4>
                <div className="color-palette-group">
                  {activeEvent.colorPalette && activeEvent.colorPalette.map((color, idx) => (
                    <div key={idx} className="color-item">
                      <div
                        className="color-circle"
                        style={{ backgroundColor: color.hex }}
                        title={color.name}
                      ></div>
                      <span className="color-name">{color.name}</span>
                    </div>
                  ))}
                </div>

                <div className="outfit-preview">
                  {activeEvent.outfits && activeEvent.outfits[0] ? (
                    <img
                      src={activeEvent.outfits[0].image}
                      alt={`${activeEvent.title} Outfit`}
                      className="event-outfit-image"
                    />
                  ) : (
                    <div className="outfit-placeholder">
                      <i
                        className="fas fa-user-friends"
                        style={{
                          color:
                            activeEvent.secondaryColor ||
                            activeEvent.colors[0].hex,
                        }}
                      ></i>
                      <span>Couple Outfit Inspiration</span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="friendly-message">
              <p>
                We are happy to see you in the above colors, but it is okay if you are not in these colors.
                Your presence means everything to us! ❤️
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WardrobePlanner;
