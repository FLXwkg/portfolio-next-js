/**
 * Contact Section Component
 * Combines contact form with social links and direct contact info
 */

import ContactForm from "./ContactForm";

export default function ContactSection() {
  const socialLinks = [
    { name: "GitHub", icon: "🐙", url: "https://github.com" },
    { name: "LinkedIn", icon: "💼", url: "https://linkedin.com" },
    { name: "Twitter", icon: "𝕏", url: "https://twitter.com" },
    { name: "Email", icon: "✉️", url: "mailto:your-email@example.com" },
  ];

  return (
    <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Travaillons <span className="text-[#e0a4ed]">ensemble</span>
          </h2>
          <p className="text-[#666] text-lg max-w-2xl mx-auto">
            Vous avez une question ou un projet en tête ? N'hésitez pas à me contacter. Je réponds généralement en moins de 24h.
          </p>
          <div className="w-20 h-1 bg-linear-to-r from-[#e0a4ed] to-[#d080e0] mx-auto mt-6"></div>
        </div>

        {/* Contact form and info container */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact info - Left side */}
          <div className="md:col-span-1 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-[#2d2d2d] mb-4">Informations</h3>
              
              {/* Contact details */}
              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <span className="text-2xl">📍</span>
                  <div>
                    <p className="text-sm font-medium text-[#d080e0]">Localisation</p>
                    <p className="text-[#666] text-sm">France</p>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <span className="text-2xl">📧</span>
                  <div>
                    <p className="text-sm font-medium text-[#d080e0]">Email</p>
                    <a
                      href="mailto:ewenheas13@gmail.com"
                      className="text-[#666] text-sm hover:text-[#e0a4ed] transition-colors"
                    >
                      ewenheas13@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex gap-3 items-start">
                  <span className="text-2xl">💬</span>
                  <div>
                    <p className="text-sm font-medium text-[#d080e0]">Réactivité</p>
                    <p className="text-[#666] text-sm">&lt; 24h</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social links */}
            <div>
              <h3 className="text-lg font-bold text-[#2d2d2d] mb-4">Réseaux</h3>
              <div className="grid grid-cols-2 gap-3">
                {socialLinks.slice(0, 4).map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 p-3 bg-[#f0d4f5] text-[#d080e0] rounded-lg hover:bg-[#e0a4ed] hover:text-white transition-all duration-300 transform hover:scale-105"
                  >
                    <span className="text-lg">{link.icon}</span>
                    <span className="text-xs font-medium">{link.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick response */}
            <div className="p-4 bg-linear-to-br from-[#f0d4f5] to-[#fcf7fc] rounded-lg border border-[#e0a4ed] border-opacity-30">
              <p className="text-sm text-[#666]">
                <span className="font-bold text-[#d080e0]">🚀 Prêt à collaborer ?</span> Envoyez-moi un message et parlons de votre projet.
              </p>
            </div>
          </div>

          {/* Contact form - Right side */}
          <div className="md:col-span-2">
            <div className="bg-white bg-opacity-60 backdrop-blur-sm rounded-lg p-8 shadow-md">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
