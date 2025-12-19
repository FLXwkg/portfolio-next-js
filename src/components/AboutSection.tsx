/**
 * About Section Component
 * Showcases professional experience, education, and key achievements
 */

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white bg-opacity-40 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            À propos de <span className="text-[#e0a4ed]">moi</span>
          </h2>
          <div className="w-20 h-1 bg-linear-to-r from-[#e0a4ed] to-[#d080e0] mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column - Text content */}
          <div className="space-y-6 animate-slide-up">
            <p className="text-lg text-[#666] leading-relaxed">
              Développeur passionné par la création d'expériences numériques innovantes et performantes. Avec <span className="font-bold text-[#d080e0]">5 ans d'expérience</span> dans le développement fullstack, j'ai eu l'opportunité de travailler sur des projets variés allant des startups aux entreprises établies.
            </p>

            <p className="text-lg text-[#666] leading-relaxed">
              Actuellement en <span className="font-bold text-[#d080e0]">Master 2</span>, je combine mes connaissances pratiques avec une expertise académique approfondie en architecture logicielle, sécurité web et patterns de conception.
            </p>

            <p className="text-lg text-[#666] leading-relaxed">
              Je suis convaincu que le code propre, bien documenté et performant est la clé du succès dans nos projets. Mon approche combine rigueur technique et sensibilité au design pour créer des solutions qui plaisent et qui performent.
            </p>

            {/* Key stats */}
            <div className="grid grid-cols-3 gap-4 mt-10 pt-10 border-t border-[#e0a4ed] border-opacity-30">
              <div className="text-center">
                <p className="text-3xl font-bold text-[#e0a4ed]">5+</p>
                <p className="text-sm text-[#666] mt-2">Ans d'expérience</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-[#e0a4ed]">30+</p>
                <p className="text-sm text-[#666] mt-2">Projets complétés</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-[#e0a4ed]">Master 2</p>
                <p className="text-sm text-[#666] mt-2">En cours</p>
              </div>
            </div>
          </div>

          {/* Right column - Education & Experience */}
          <div className="space-y-6">
            {/* Education */}
            <div className="bg-linear-to-br from-[#f0d4f5] to-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-[#2d2d2d] mb-2">🎓 Formation</h3>
              <p className="text-[#d080e0] font-semibold mb-1">Master 2 - Informatique</p>
              <p className="text-[#666] text-sm mb-3">Université - En cours (2024-2025)</p>
              <p className="text-[#666] text-sm">Spécialisation en architectures distribuées et développement fullstack moderne</p>
            </div>

            {/* Experience highlight */}
            <div className="bg-linear-to-br from-[#f0d4f5] to-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-[#2d2d2d] mb-2">💼 Expérience</h3>
              <p className="text-[#d080e0] font-semibold mb-1">Développeur Fullstack</p>
              <p className="text-[#666] text-sm mb-3">5 années en startups et PME innovantes</p>
              <p className="text-[#666] text-sm">Conception, développement et déploiement d'applications web modernes et scalables</p>
            </div>

            {/* Approach */}
            <div className="bg-linear-to-br from-[#f0d4f5] to-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold text-[#2d2d2d] mb-4">🎯 Mon approche</h3>
              <ul className="space-y-2 text-[#666] text-sm">
                <li>✓ Code propre et maintenable</li>
                <li>✓ Performance et optimisation</li>
                <li>✓ UX/UI centrée utilisateur</li>
                <li>✓ Sécurité en priorité</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
