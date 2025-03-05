import {
  FaExclamationTriangle,
  FaArrowRight,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaDownload,
} from "react-icons/fa";
import GradientText from "@/components/Bits/GradientText";
import { usePathname, useRouter } from "next/navigation";
import TechStack from "@/components/Table/TechStack";
import ShinyText from "@/components/Bits/ShinyText";

export function MainBody() {
  const router = useRouter();
  const pathname = usePathname();

  const fileMap: Record<string, string> = {
    "/": "rifki.md",
    "/experience": "experience.go",
    "/projects": "projects.ts",
    "/contact": "contact.json",
  };

  const fileName = fileMap[pathname] || "unknown.file";

  return (
    <div className="flex-1 flex flex-col items-center justify-center relative">
      {/* Sticky Header */}
      <div className="sticky top-0 left-0 w-full bg-neutral-900 text-gray-300 text-sm px-4 py-1 flex items-center">
        <span className="font-mono">src &gt; {fileName}</span>
      </div>

      {/* Centered Content */}
      <div className="flex justify-center items-start h-screen pt-20">
        <div className="max-w-5xl w-full flex flex-col items-center text-center">
          {/* Gradient Name */}
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={20}
            showBorder={false}
            className="text-4xl sm:text-5xl font-extrabold"
          >
            Rifki Nauval Dzaki
          </GradientText>

          {/* Animated Text */}
          <p className="text-lg sm:text-xl mt-4 font-medium text-white hover:text-white transition">
            Backend Developer | DevOps Enthusiast
          </p>

          {/* Experience Description */}
          <p className="text-gray-400 text-md sm:text-lg mt-4">
            With <strong>1 year of experience</strong> in{" "}
            <strong>backend development</strong>, I have built{" "}
            <strong>scalable web applications</strong>. Currently focusing on
            learning <strong>Backend and AI</strong>.
          </p>

          {/* Fun Fact */}
          <p className="text-gray-400 text-md sm:text-lg mt-6 italic">
            You might be wondering why a <strong>backend developer</strong> is
            making a portfolio website? Well, I actually enjoy some frontend
            work too...
            <strong> but I hate CSS! 😅</strong>
          </p>

          {/* Skills Section */}
          <TechStack />

          {/* Learn More About My Skills */}
          <div
            className="flex items-center gap-2 mt-4 text-gray-400 hover:text-white transition cursor-pointer"
            onClick={() => router.push("/skill")}
          >
            <ShinyText
              text="Learn More About My Skill"
              disabled={false}
              speed={3}
            />
            <FaArrowRight />
          </div>

          {/* Download Resume Button */}
          <a
            href="/cv/CV_Rifki.pdf"
            download
            className="mt-4 inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
          >
            <FaDownload />
            Download My Resume
          </a>

          {/* Quote About Learning */}
          <p className="text-gray-400 text-md sm:text-lg mt-6 italic">
            &quot;Never underestimate someone who practices self-education in
            their free time. They know that success comes from always remaining
            a student.&quot; ✨
          </p>

          {/* Contact Section */}
          <div className="flex items-center gap-6 mt-6">
            <a
              href="mailto:rifkinauvaldzaki08@gmail.com"
              className="text-gray-400 hover:text-white transition text-lg flex items-center gap-2"
            >
              <FaEnvelope /> Email
            </a>
            <a
              href="www.linkedin.com/in/rifki-nd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition text-lg flex items-center gap-2"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href="https://github.com/RIfkiND"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition text-lg flex items-center gap-2"
            >
              <FaGithub /> GitHub
            </a>
          </div>

          {/* Development Warning */}
          <div className="flex items-center gap-2 bg-yellow-100 text-yellow-800 p-3 rounded-lg mt-6">
            <FaExclamationTriangle className="text-yellow-600" />
            <p className="text-md sm:text-lg font-medium">
              Some features are still in development. Stay tuned for updates! 🚀
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
