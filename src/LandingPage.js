import React, { useState, useEffect } from "react";
import "./LandingPage.css";

const LandingPage = ({ onEventSelect }) => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    // Wedding date: January 25, 2026, 6:00 PM
    const weddingDate = new Date("2026-01-25T18:00:00").getTime();

    // Floating sparkles animation
    const [sparkles, setSparkles] = useState([]);

    useEffect(() => {
        const createSparkle = () => {
            const sparkle = {
                id: Date.now() + Math.random(),
                left: Math.random() * 100,
                top: Math.random() * 100,
                animationDuration: 2 + Math.random() * 3,
                size: 10 + Math.random() * 15,
                delay: Math.random() * 2,
            };
            setSparkles((prev) => [...prev.slice(-15), sparkle]); // Keep max 15 sparkles
        };

        const interval = setInterval(createSparkle, 800);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date().getTime();
            const difference = weddingDate - now;

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor(
                        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                    ),
                    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                    seconds: Math.floor((difference % (1000 * 60)) / 1000),
                });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, [weddingDate]);

    const scrollToPlanner = (eventId) => {
        if (eventId && onEventSelect) {
            onEventSelect(eventId);
        }
        const plannerSection = document.getElementById("wardrobe-planner");
        if (plannerSection) {
            plannerSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    const events = [
        {
            id: "mehendi",
            name: "Mehendi",
            date: "Jan 23, 2026",
            color: "#228B22",
            icon: "🌿",
        },
        {
            id: "sangeet",
            name: "Sangeet",
            date: "Jan 24, 2026",
            color: "#191970",
            icon: "💃",
        },
        {
            id: "haldi",
            name: "Haldi",
            date: "Jan 25, 2026",
            color: "#FFD700",
            icon: "🌼",
        },
        {
            id: "wedding",
            name: "Wedding",
            date: "Jan 25, 2026",
            color: "#DC143C",
            icon: "💍",
        },
        {
            id: "reception",
            name: "Reception",
            date: "Jan 26, 2026",
            color: "#722F37",
            icon: "🥂",
        },
    ];

    return (
        <div className="landing-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="animated-background">
                    <div className="gradient-orb orb-1"></div>
                    <div className="gradient-orb orb-2"></div>
                    <div className="gradient-orb orb-3"></div>

                    {/* Floating Sparkles */}
                    {sparkles.map((sparkle) => (
                        <div
                            key={sparkle.id}
                            className="floating-sparkle"
                            style={{
                                left: `${sparkle.left}%`,
                                top: `${sparkle.top}%`,
                                width: `${sparkle.size}px`,
                                height: `${sparkle.size}px`,
                                animationDuration: `${sparkle.animationDuration}s`,
                                animationDelay: `${sparkle.delay}s`,
                            }}
                        >
                            ✨
                        </div>
                    ))}
                </div>

                <div className="hero-content">
                    <div className="couple-names-container">
                        <div className="wedding-tagline">We're getting married!</div>
                        <h1 className="couple-names">Nainil & Nandini</h1>
                    </div>

                    <div className="wedding-dates">
                        <p className="date-range">January, 2026</p>
                        <p className="venue-text">A Celebration of Love and Togetherness</p>
                    </div>

                    {/* Countdown Timer */}
                    <div className="countdown-container">
                        <h2 className="countdown-title">Countdown to the Big Day</h2>
                        <div className="countdown-grid">
                            <div className="countdown-item">
                                <div className="countdown-number">{timeLeft.days}</div>
                                <div className="countdown-label">Days</div>
                            </div>
                            <div className="countdown-separator">:</div>
                            <div className="countdown-item">
                                <div className="countdown-number">
                                    {String(timeLeft.hours).padStart(2, "0")}
                                </div>
                                <div className="countdown-label">Hours</div>
                            </div>
                            <div className="countdown-separator">:</div>
                            <div className="countdown-item">
                                <div className="countdown-number">
                                    {String(timeLeft.minutes).padStart(2, "0")}
                                </div>
                                <div className="countdown-label">Minutes</div>
                            </div>
                            <div className="countdown-separator">:</div>
                            <div className="countdown-item">
                                <div className="countdown-number">
                                    {String(timeLeft.seconds).padStart(2, "0")}
                                </div>
                                <div className="countdown-label">Seconds</div>
                            </div>
                        </div>
                    </div>

                    {/* Wardrobe Planner Text - Moved Below Countdown */}
                    <div className="planner-text-container">
                        <h2 className="planner-title">WARDROBE PLANNER</h2>
                        <p className="planner-description">
                            Our wedding is getting closer by the day and we'd love to clear
                            the stress of what to wear.
                            <br />
                            Here's a planner to help you pack!
                        </p>
                    </div>

                    {/* Wedding Hashtags */}
                    <div className="hashtags-container">
                        <span className="hashtag">#NilandiniSolvedTheMistry</span>
                    </div>

                    {/* Scroll Indicator */}
                    <div className="scroll-indicator" onClick={() => scrollToPlanner()}>
                        <div className="scroll-text">Explore Wardrobe Guide</div>
                        <div className="scroll-arrow">
                            <i className="fas fa-chevron-down"></i>
                        </div>
                    </div>
                </div>
            </section>

            {/* Event Preview Section */}
            <section className="event-preview-section">
                <div className="section-header">
                    <h2 className="section-title">Celebration Events</h2>
                    <p className="section-subtitle">
                        Join us for days filled with love, laughter, and unforgettable
                        memories.
                    </p>
                </div>

                <div className="events-grid">
                    {events.map((event, index) => (
                        <div
                            key={index}
                            className="event-card"
                            style={{ "--event-color": event.color }}
                            onClick={() => scrollToPlanner(event.id)}
                        >
                            <div className="event-icon">{event.icon}</div>
                            <h3 className="event-name">{event.name}</h3>
                            <p className="event-date">{event.date}</p>
                            <div className="event-hover-text">View Dress Code</div>
                        </div>
                    ))}
                </div>

                <div className="cta-container">
                    <button className="cta-button" onClick={() => scrollToPlanner()}>
                        <span>View Complete Wardrobe Guide</span>
                        <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
            </section>

            {/* Decorative Divider */}
            <div className="decorative-divider">
                <div className="divider-line"></div>
                <div className="divider-icon">
                    <i className="fas fa-heart" style={{ margin: "0 10px" }}></i>
                    <i className="fas fa-heart" style={{ margin: "0 10px" }}></i>
                    <i className="fas fa-heart" style={{ margin: "0 10px" }}></i>
                </div>
                <div className="divider-line"></div>
            </div>
        </div>
    );
};

export default LandingPage;
