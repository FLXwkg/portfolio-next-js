/**
 * Projects Section Component
 * Displays portfolio projects with interactive cards
 */

import ProjectCard from "./ProjectCard";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  link: string;
  emoji: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "PlateformeX",
    description:
      "Une plateforme SaaS complète pour la gestion de contenu avec authentification avancée, analytics en temps réel et intégrations API multiples. Architecture microservices avec Docker.",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Docker", "Redis"],
    link: "#",
    emoji: "🚀",
  },
  {
    id: 2,
    title: "Dashboard Analytics",
    description:
      "Dashboard interactif pour visualiser des données complexes avec graphiques en temps réel, exports multiformats et système d'alertes intelligentes.",
    tags: ["React", "Chart.js", "Node.js", "WebSocket", "MongoDB"],
    link: "#",
    emoji: "📊",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description:
      "Plateforme e-commerce scalable avec panier intelligent, system de paiement sécurisé, gestion d'inventaire et recommandations produits IA.",
    tags: ["Next.js", "Stripe", "AWS", "Python", "React"],
    link: "#",
    emoji: "🛍️",
  },
  {
    id: 4,
    title: "App Mobile Native",
    description:
      "Application mobile native avec synchronisation offline, push notifications et intégration GPS. Interface intuitive et performances optimisées.",
    tags: ["React Native", "Firebase", "TypeScript", "GraphQL"],
    link: "#",
    emoji: "📱",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white bg-opacity-40 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Mes <span className="text-[#e0a4ed]">projets</span>
          </h2>
          <p className="text-[#666] text-lg max-w-2xl mx-auto">
            Découvrez une sélection de projets sur lesquels j'ai travaillé, allant de startups innovantes à des solutions d'entreprise complexes.
          </p>
          <div className="w-20 h-1 bg-linear-to-r from-[#e0a4ed] to-[#d080e0] mx-auto mt-6"></div>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <div key={project.id} className="animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              <ProjectCard
                title={project.title}
                description={project.description}
                tags={project.tags}
                link={project.link}
                emoji={project.emoji}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-[#666] text-lg mb-6">
            Vous voulez voir plus de projets ou discuter d'une collaboration ?
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-[#e0a4ed] text-white font-semibold rounded-lg hover:bg-[#d080e0] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Démarrer un projet
          </a>
        </div>
      </div>
    </section>
  );
}
