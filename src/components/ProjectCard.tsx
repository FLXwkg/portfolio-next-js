/**
 * Project Card Component
 * Reusable card for displaying project showcase with hover animations
 */

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  link?: string;
  emoji: string;
}

export default function ProjectCard({
  title,
  description,
  tags,
  link,
  emoji,
}: ProjectCardProps) {
  return (
    <a
      href={link || "#"}
      className="group block bg-white bg-opacity-60 backdrop-blur-sm rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full cursor-pointer"
    >
      {/* Project image/icon area */}
      <div className="h-40 bg-linear-to-br from-[#e0a4ed] from-30% to-[#f0d4f5] flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
        {emoji}
      </div>

      {/* Project content */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-[#2d2d2d] group-hover:text-[#e0a4ed] transition-colors duration-300">
          {title}
        </h3>

        <p className="text-[#666] text-sm leading-relaxed">
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-4">
          {tags.map((tag, idx) => (
            <span
              key={idx}
              className="inline-block px-3 py-1 bg-[#f0d4f5] text-[#d080e0] text-xs font-medium rounded-full group-hover:bg-[#e0a4ed] group-hover:text-white transition-colors duration-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Arrow icon */}
        <div className="flex items-center text-[#e0a4ed] font-semibold pt-2 group-hover:gap-2 transition-all duration-300">
          <span>En savoir plus</span>
          <svg
            className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </a>
  );
}
