type ProjectCardProps = {
  name: string;
  desc: string;
  tech: string[];
};

function Header() {
  return (
    <header>
      <h1>Faizan Ansari</h1>
      <nav>
        <a href="#home">Home</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}

function ProjectCard({ name, desc, tech }: ProjectCardProps) {
  return (
    <article className="card">
      <h3>{name}</h3>
      <p>{desc}</p>
      <ul className="chips">
        {tech.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ul>
    </article>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <section>
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
      </main>
    </>
  );
}
