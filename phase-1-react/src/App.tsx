import React, { useState } from "react";
import "./App.css";
import Users from "./Users";
import { ThemeContext, useTheme } from "./ThemeContext";

type ProjectCardProps = {
  name: string;
  desc: string;
  tech: string[];
};

function Header({ onProjectsClick }: { onProjectsClick: () => void }) {
   const { theme, toggle } = useTheme()
  return (
    <header>
      <h1>Faizan Ansari</h1>
      <button onClick={onProjectsClick}>Projects</button>
      <button onClick={toggle}>{theme === 'light' ? '🌙' : '☀️'}</button>
    </header>
  );
}

function ProjectCard({ name, desc, tech }: ProjectCardProps) {
  return (
    <article onClick={() => alert(name)} className="card">
      <h3>{name}</h3>
      <p>{desc}</p>
      <ul className="chips">
        {tech.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <LikeButton />
    </article>
  );
}

function LikeButton() {
  const [likes, setLikes] = useState(0);
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        setLikes(likes + 1);
      }}
    >
      ❤️ {likes}
    </button>
  );
}

export default function App() {
  const [selectedTech, setSelectedTech] = useState("All");
  const filters = ["All", "React Native", "TypeScript", "openCV"];
  const projectsRef = React.useRef<HTMLElement>(null);

  const [theme, setTheme] = useState<"light" | "dark">("light");
  const toggle = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      <div className={theme}>
        <Header
          onProjectsClick={() =>
            projectsRef.current?.scrollIntoView({ behavior: "smooth" })
          }
        />
        <main>
          <section ref={projectsRef}>
            <div className="filters">
              {filters.map((f) => (
                <button
                  key={f}
                  className={selectedTech === f ? "chip active" : "chip"}
                  onClick={() => setSelectedTech(f)}
                >
                  {f}
                </button>
              ))}
            </div>
            <div className="cards">
              <ProjectCard
                name="Lifelong ERP"
                desc="Enterprise ERP mobile app."
                tech={["React Native", "TypeScript"]}
              />
              <ProjectCard
                name="BHIM"
                desc="Integrated a third-party payment gateway in the Gold Jar module, enabling secure purchase of 24K digital gold for millions of users."
                tech={["React Native", "TypeScript", "JavaScript"]}
              />
              <ProjectCard
                name="Berain SFA"
                desc="Built and scaled a sales force automation app used by 600+ delivery partners to digitise last-mile delivery for Berain Water."
                tech={["React Native", "TypeScript", "JavaScript", "openCV"]}
              />
            </div>
          </section>
          <section>
            <h2>Users</h2>
            <Users />
          </section>
        </main>
      </div>
    </ThemeContext.Provider>
  );
}
