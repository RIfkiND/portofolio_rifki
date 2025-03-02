
import GradientText from "@/components/Bits/GradientText";
import DecryptedText from "@/components/Bits/DecryptedText";
import { usePathname } from "next/navigation";
import TechStack from "../Table/TechStack";

export function MainBody() {
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
      <div className="sticky top-0 left-0 w-full bg-neutral-900 text-gray-300 text-sm px-4 pb-1 flex items-center">
        <span className="font-mono">src &gt; {fileName}</span>
      </div>

      {/* VS Code-like Line Numbers */}
      <div className="absolute left-0 top-0 h-full py-4 px-3 text-gray-500 text-sm font-mono text-right leading-relaxed pt-9">
        {Array.from({ length: 42 }, (_, i) => (
          <div key={i} className="w-6">
            {i + 1}
          </div>
        ))}
      </div>

      {/* Centered Content */}
      <div className="flex justify-center items-start h-screen pt-20">
        <div className="max-w-5xl w-full flex flex-col items-center text-center">
          {/* Gradient Name */}
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={2}
            showBorder={false}
            className="text-4xl sm:text-5xl font-extrabold"
          >
            Rifki Nauval Dzaki
          </GradientText>

          {/* Animated Text */}
          <DecryptedText
            text="Backend Developer | DevOps Enthusiast"
            speed={90}
            maxIterations={15}
            characters="ABCD1234!?$%@"
            className="text-gray-300 text-lg sm:text-xl mt-4 font-medium hover:text-white transition"
          />

          {/* Experience Description */}
          <p className="text-gray-400 text-md sm:text-lg mt-4">
            With <strong>1 year of experience</strong> in{" "}
            <strong>backend development and DevOps</strong>, I have built{" "}
            <strong>scalable web applications</strong> using Laravel, Node.js,
            and Docker. Passionate about{" "}
            <strong>
              optimizing performance, securing APIs, and automating deployments.
              🚀
            </strong>
          </p>

          {/* Fun Fact */}
          <p className="text-gray-400 text-md sm:text-lg mt-6 italic">
            You might be wondering why a <strong>backend developer</strong> is
            making a portfolio website? Well, I actually enjoy some frontend
            work too...
            <strong> but I hate CSS! 😅</strong>
          </p>

          {/* Skills Section */}
        <TechStack/>
        </div>
      </div>
    </div>
  );
}
