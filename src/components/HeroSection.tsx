/**
 * Hero Section Component
 * Engaging introduction with animated text and CTA buttons
 */

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 pb-10">
      <div className="max-w-4xl w-full text-center space-y-8 animate-fade-in">
        {/* Main heading with gradient effect */}
        <div className="space-y-4">
          <p className="text-lg sm:text-xl text-[#d080e0] font-medium tracking-wide">
            Bienvenue sur mon portfolio
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-tight">
            <span className="text-[#2d2d2d]">Je suis </span>
            <span className="bg-linear-to-r from-[#e0a4ed] to-[#d080e0] bg-clip-text text-transparent">
              Ewen Héas
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-[#666] max-w-2xl mx-auto leading-relaxed">
            Développeur <span className="font-semibold text-[#d080e0]">Fullstack</span> avec 5 ans d'expérience en création d'applications modernes, scalables et innovantes.
          </p>
        </div>

        {/* Subheading with Master 2 info */}
        <div className="bg-[#f0d4f5] bg-opacity-40 backdrop-blur-sm rounded-lg py-4 px-6 inline-block">
          <p className="text-[#d080e0] font-medium">
            📚 En Master 2 • React • Node.js • TypeScript
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
          <a
            href="#projects"
            className="px-8 py-3 bg-[#e0a4ed] text-white font-semibold rounded-lg hover:bg-[#d080e0] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Voir mes projets
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-[#e0a4ed] text-[#e0a4ed] font-semibold rounded-lg hover:bg-[#f0d4f5] transition-all duration-300"
          >
            Me contacter
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="pt-12 animate-bounce">
          <svg
            className="w-6 h-6 mx-auto text-[#e0a4ed]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
