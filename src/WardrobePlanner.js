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
      colors: [
        { hex: "#228B22" }, // Forest Green
        { hex: "#ADD8E6" }, // Light Blue
        { hex: "#90EE90" }, // Light Green
      ],
      colorGroups: [
        { shades: ["#228B22", "#008000", "#006400"] }, // Greens (Forest, Green, Dark Green)
        { shades: ["#ADD8E6", "#87CEEB", "#B0E0E6"] }, // Light Blues (Light Blue, Sky Blue, Powder Blue)
        { shades: ["#90EE90", "#98FB98", "#32CD32"] }, // Light Greens (Light Green, Pale Green, Lime Green)
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
      outfits: [{ type: "couple", image: "/images/wedding.png" }],
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
      colors: [{ hex: "#191970" }, { hex: "#C0C0C0" }, { hex: "#DAA520" }],
      colorGroups: [
        { shades: ["#191970", "#000080", "#4169E1"] }, // Blues (Midnight, Navy, Royal)
        { shades: ["#C0C0C0", "#D3D3D3", "#A9A9A9"] }, // Silvers (Silver, Light Grey, Dark Grey)
        { shades: ["#DAA520", "#B8860B", "#CD853F"] }, // Golds (Goldenrod, Dark Goldenrod, Peru)
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
      title: "Rang de Mohe...",
      subtitle: "HALDI",
      date: "January 25th | Morning",
      day: "SUNDAY",
      note: "Vibe: Joyful & Bright",
      colors: [
        { hex: "#FFD700" }, // Fallback/Primary for theming
        { hex: "#FFA500" },
        { hex: "#FF1493" },
      ],
      colorGroups: [
        {
          shades: [
            "#E6E6FA",
            "#D8BFD8",
            "#DDA0DD",
            "#EE82EE",
            "#FFB6C1",
            "#FFC0CB",
            "#FFA07A",
            "#FF69B4",
            "#FFFACD",
            "#F0E68C",
            "#FFFFE0",
            "#FAFAD2",
            "#98FB98",
            "#90EE90",
            "#F0FFF0",
            "#E0F8E0",
          ],
        }, // Pastel: Light Lavender, Pink, Yellow, Green shades
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
      outfits: [{ type: "couple", image: "/images/haldi.png" }],
      themeColor: "#fffacd", // Lemon Chiffon
      vibeColor: "#D2691E", // Chocolate (Dark Orange) for visibility
    },
    {
      id: "wedding",
      title: "Saat Phere",
      subtitle: "WEDDING",
      date: "January 25th | Evening",
      day: "SUNDAY",
      note: "Vibe: Royal & Traditional",
      colors: [
        { hex: "#8B0000" }, // Dark Red
        { hex: "#DAA520" }, // Goldenrod
        { hex: "#8B4513" }, // Saddle Brown
      ],
      colorGroups: [
        { shades: ["#8B0000", "#800000", "#A52A2A"] }, // Royal Reds (Dark Red, Maroon, Brown)
        { shades: ["#FFD700", "#DAA520", "#B8860B"] }, // Royal Golds (Gold, Goldenrod, Dark Goldenrod)
        { shades: ["#8B4513", "#A0522d", "#5D4037"] }, // Dark Browns (Saddle Brown, Sienna, Dark Brown)
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
      outfits: [{ type: "couple", image: "/images/wedding-1.png" }],
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
      colors: [{ hex: "#50C878" }, { hex: "#722F37" }, { hex: "#000000" }],
      colorGroups: [
        { shades: ["#50C878", "#2E8B57", "#006400"] }, // Emeralds (Emerald, Sea Green, Dark Green)
        { shades: ["#722F37", "#800020", "#A52A2A"] }, // Wines (Wine, Burgundy, Brown)
        { shades: ["#000000", "#2F4F4F", "#696969"] }, // Blacks (Black, Dark Slate Gray, Dim Gray)
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
                    ? event.secondaryColor || event.colors[0].hex
                    : "#666",
                borderColor:
                  activeTab === event.id
                    ? event.secondaryColor || event.colors[0].hex
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
                    activeEvent.secondaryColor || activeEvent.colors[0].hex,
                }}
              >
                {activeEvent.title}
              </h3>
              <div
                className="title-separator"
                style={{
                  backgroundColor:
                    activeEvent.secondaryColor || activeEvent.colors[0].hex,
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
                <div className="color-palette-group">
                  {activeEvent.colorGroups.map((group, groupIdx) => (
                    <div key={groupIdx} className="color-column">
                      {group.shades.map((shade, shadeIdx) => (
                        <div
                          key={shadeIdx}
                          className="color-shade"
                          style={{ backgroundColor: shade }}
                          title={shade}
                        ></div>
                      ))}
                    </div>
                  ))}
                </div>

                <div className="outfit-preview">
                  {/* Placeholder for outfit image since local paths won't exist */}
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WardrobePlanner;
