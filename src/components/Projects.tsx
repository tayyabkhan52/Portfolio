import { ProjectCard } from "./ProjectCard";
import { ScrollReveal } from "./ScrollReveal";

const projects = [
  {
    name: "AgriFusion",
    type: "Agricultural Platform",
    year: "2025",
    description:
      "Multi-role platform with RBAC across 5 user types and PostgreSQL RLS. Real-time trading with live buyer–consultant chat, state-machine transitions, and a 44-event notification system. Soil classification via custom-trained Hugging Face model, compiled into a typeset PDF advisory via Typst.",
    tech: ["Next.js 14", "TypeScript", "Supabase", "Python", "Hugging Face"],
    link: "https://agrifusion.netlify.app/",
    frameClass: "project-frame-1",
    image: "/projects/agrifusion.png",
    width: 1024,
    height: 531,
  },
  {
    name: "GreExchange",
    type: "P2P Resource Hub",
    year: "2024",
    description:
      "Peer-to-peer resource-exchange platform with role-based listings, a request-matching engine, real-time messaging, and admin moderation tools.",
    tech: ["React", "Supabase", "Netlify"],
    link: "https://greexchange.netlify.app/",
    frameClass: "project-frame-2",
    image: "/projects/greexchange.png",
    width: 1024,
    height: 460,
  },
  {
    name: "Parfum Prestige",
    type: "Marketplace",
    year: "2024",
    description:
      "Full peer-to-peer marketplace with listings, ISO posts, real-time chat, verified buyer reviews, and multi-step seller verification.",
    tech: ["React", "Supabase", "Netlify"],
    link: "https://parfumprestigee.netlify.app/",
    frameClass: "project-frame-3",
    image: "/projects/parfumprestige.png",
    width: 1024,
    height: 479,
  },
  {
    name: "ShareBite",
    type: "Community Food",
    year: "2024",
    description:
      "Connects surplus food donors with NGOs through a real-time listing engine with expiry tracking and Supabase geolocation queries.",
    tech: ["Next.js", "Supabase", "Vercel"],
    link: "https://share-bite-black.vercel.app/",
    frameClass: "project-frame-4",
    image: "/projects/sharebite.png",
    width: 1024,
    height: 485,
  },
  {
    name: "E-Store",
    type: "Premium Commerce",
    year: "2024",
    description:
      "Full-stack store on Next.js 14 App Router with Gemini API for AI-generated product descriptions, complete admin dashboard for inventory and order management.",
    tech: ["Next.js 14", "Supabase", "Gemini API"],
    link: "https://e-store-eta-five.vercel.app/",
    frameClass: "project-frame-5",
    image: "/projects/estore.png",
    width: 1024,
    height: 489,
  },
];

export function Projects() {
  return (
    <section id="projects" className="bg-white py-24 sm:py-32 px-6 md:px-12 overflow-hidden">
      <ScrollReveal>
        <div className="flex items-center gap-6 mb-24 max-w-6xl mx-auto">
          <div className="h-[1px] flex-1 bg-ink/10" />
          <h2 className="font-display text-4xl text-ink">Selected Works</h2>
          <div className="h-[1px] flex-1 bg-ink/10" />
        </div>
      </ScrollReveal>

      <div className="flex flex-col gap-32 sm:gap-48 max-w-6xl mx-auto">
        {projects.map((project, idx) => (
          <ProjectCard key={project.name} {...project} index={idx} />
        ))}
      </div>
    </section>
  );
}
