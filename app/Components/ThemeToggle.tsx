"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faDesktop } from "@fortawesome/free-solid-svg-icons";
import { useThemeContext } from "./ThemeProvider";

interface ThemeToggleProps {
  showLabels?: boolean;
  size?: "sm" | "md" | "lg";
  position?: "fixed" | "static";
}

export default function ThemeToggle({
  showLabels = false,
  size = "md",
  position = "static",
}: ThemeToggleProps) {
  const { theme, resolvedTheme, changeTheme, setDevTheme } = useThemeContext();

  const isDev = process.env.NODE_ENV === "development";

  const sizeClasses = {
    sm: "btn-sm",
    md: "",
    lg: "btn-lg",
  };

  const positionStyles =
    position === "fixed"
      ? {
          position: "fixed" as const,
          top: "1rem",
          right: "1rem",
          zIndex: 1050,
        }
      : {};

  if (isDev) {
    // Development mode - simple light/dark toggle
    return (
      <div style={positionStyles} className="theme-toggle-dev">
        <div className="btn-group" role="group" aria-label="Theme toggle">
          <button
            type="button"
            className={`btn ${
              resolvedTheme === "light" ? "btn-primary" : "btn-outline-primary"
            } ${sizeClasses[size]}`}
            onClick={() => setDevTheme("light")}
            aria-label="Light mode"
          >
            <FontAwesomeIcon icon={faSun} />
            {showLabels && <span className="ms-1">Light</span>}
          </button>
          <button
            type="button"
            className={`btn ${
              resolvedTheme === "dark" ? "btn-primary" : "btn-outline-primary"
            } ${sizeClasses[size]}`}
            onClick={() => setDevTheme("dark")}
            aria-label="Dark mode"
          >
            <FontAwesomeIcon icon={faMoon} />
            {showLabels && <span className="ms-1">Dark</span>}
          </button>
        </div>
        {isDev && (
          <div className="mt-1 text-center">
            <small className="text-muted">Dev Mode</small>
          </div>
        )}
      </div>
    );
  }

  // Production mode - includes system preference
  return (
    <div style={positionStyles}>
      <div className="btn-group" role="group" aria-label="Theme selection">
        <button
          type="button"
          className={`btn ${
            theme === "light" ? "btn-primary" : "btn-outline-primary"
          } ${sizeClasses[size]}`}
          onClick={() => changeTheme("light")}
          aria-label="Light mode"
        >
          <FontAwesomeIcon icon={faSun} />
          {showLabels && <span className="ms-1">Light</span>}
        </button>
        <button
          type="button"
          className={`btn ${
            theme === "system" ? "btn-primary" : "btn-outline-primary"
          } ${sizeClasses[size]}`}
          onClick={() => changeTheme("system")}
          aria-label="System preference"
        >
          <FontAwesomeIcon icon={faDesktop} />
          {showLabels && <span className="ms-1">Auto</span>}
        </button>
        <button
          type="button"
          className={`btn ${
            theme === "dark" ? "btn-primary" : "btn-outline-primary"
          } ${sizeClasses[size]}`}
          onClick={() => changeTheme("dark")}
          aria-label="Dark mode"
        >
          <FontAwesomeIcon icon={faMoon} />
          {showLabels && <span className="ms-1">Dark</span>}
        </button>
      </div>
    </div>
  );
}
