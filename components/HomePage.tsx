"use client"
import Image from "next/image";

interface HomePageProps {
    onStartTest: (type: "intelligence" | "maturity") => void
}

export default function HomePage({ onStartTest }: HomePageProps) {
    return (
        <div className="home-page">
            <div className="home-content">
                <div className="logo-container">
                    <div className="logo-wrapper">
                        <Image
                            src="/public/logo.jpg"
                            alt="Mio Emocione Logo"
                            className="logo-image"
                        />
                    </div>
                </div>

                <div className="welcome-section">
                    <h1 className="welcome-title">Welcome to Mio Emocione</h1>
                    <p className="welcome-subtitle">
                        Discover your emotional intelligence and maturity levels through our comprehensive assessment
                    </p>
                </div>

                <div className="buttons-container">
                    <button className="test-button intelligence-button" onClick={() => onStartTest("intelligence")}>
                        <div className="button-icon">📊</div>
                        <span className="button-title">Emotional Intelligence</span>
                        <span className="button-subtitle">33 Questions</span>
                    </button>
                    <button className="test-button maturity-button" onClick={() => onStartTest("maturity")}>
                        <div className="button-icon">🌱</div>
                        <span className="button-title">Emotional Maturity</span>
                        <span className="button-subtitle">44 Questions</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
