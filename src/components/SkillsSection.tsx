/**
 * Skills Section Component
 * Displays technical skills organized by category (Frontend, Backend, Tools)
 */

interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "🎨",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Vue.js", "HTML/CSS"],
  },
  {
    title: "Backend",
    icon: "⚙️",
    skills: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "REST APIs"],
  },
  {
    title: "Outils & DevOps",
    icon: "🛠️",
    skills: ["Git", "Docker", "AWS", "CI/CD", "Jest", "Webpack"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Mes <span className="text-[#e0a4ed]">compétences</span>
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-[#e0a4ed] to-[#d080e0] mx-auto"></div>
        </div>

        {/* Skills grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-60 backdrop-blur-sm rounded-lg p-8 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 animate-slide-up group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Category icon and title */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">{category.icon}</span>
                <h3 className="text-2xl font-bold text-[#2d2d2d]">{category.title}</h3>
              </div>

              {/* Skills list */}
              <ul className="space-y-3">
                {category.skills.map((skill, idx) => (
                  <li
                    key={idx}
                    className="flex items-center text-[#666] group-hover:text-[#d080e0] transition-colors duration-300"
                  >
                    <span className="w-2 h-2 bg-[#e0a4ed] rounded-full mr-3"></span>
                    {skill}
                  </li>
                ))}
              </ul>

              {/* Decorative line */}
              <div className="h-1 bg-linear-to-r from-[#e0a4ed] to-transparent mt-6 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          ))}
        </div>

        {/* Additional skills */}
        <div className="mt-12 bg-linear-to-r from-[#f0d4f5] to-[#fcf7fc] rounded-lg p-8 border border-[#e0a4ed] border-opacity-30">
          <p className="text-center text-[#666] text-lg">
            <span className="font-bold text-[#d080e0]">Autres compétences :</span> Agile/Scrum • Leadership technique • Mentorat • Communication • Résolution de problèmes • Architecture logicielle
          </p>
        </div>
      </div>
    </section>
  );
}
