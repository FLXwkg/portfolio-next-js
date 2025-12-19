/**
 * Footer Component
 * Professional footer with links, copyright and branding
 */

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "Accueil", href: "#" },
    { label: "À propos", href: "#about" },
    { label: "Compétences", href: "#skills" },
    { label: "Projets", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-linear-to-t from-[#f0d4f5] to-[#fcf7fc] border-t border-[#e0a4ed] border-opacity-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-12 sm:py-16 grid sm:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-linear-to-br from-[#e0a4ed] to-[#d080e0] rounded-lg flex items-center justify-center text-white font-bold">
                EH
              </div>
              <h3 className="text-lg font-bold text-[#2d2d2d]">Ewen Héas</h3>
            </div>
            <p className="text-[#666] text-sm leading-relaxed">
              Développeur fullstack passionné par la création d'expériences numériques innovantes et performantes.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold text-[#2d2d2d] mb-4">Navigation</h4>
            <ul className="space-y-2">
              {footerLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-[#666] hover:text-[#e0a4ed] transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-bold text-[#2d2d2d] mb-4">Ressources</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-[#666] hover:text-[#e0a4ed] transition-colors duration-300 text-sm"
                >
                  Télécharger CV
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#666] hover:text-[#e0a4ed] transition-colors duration-300 text-sm"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#666] hover:text-[#e0a4ed] transition-colors duration-300 text-sm"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[#666] hover:text-[#e0a4ed] transition-colors duration-300 text-sm"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[#e0a4ed] border-opacity-20"></div>

        {/* Bottom footer */}
        <div className="py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#999]">
          <p>
            © {currentYear} Ewen Héas. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#e0a4ed] transition-colors duration-300">
              Mentions légales
            </a>
            <a href="#" className="hover:text-[#e0a4ed] transition-colors duration-300">
              Politique de confidentialité
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
