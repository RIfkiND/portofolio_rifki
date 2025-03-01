import GradientText from "@/components/Bits/GradientText";
import DecryptedText from "@/components/Bits/DecryptedText";

export function MainBody() {
  return (
    <div className="flex-1 flex items-center justify-center relative">
      {/* VS Code-like Line Numbers */}
      <div className="absolute left-0 top-0 h-full py-4 px-3 text-gray-500 text-sm font-mono text-right leading-relaxed">
        {Array.from({ length: 42 }, (_, i) => (
          <div key={i} className="w-6">
            {i + 1}
          </div>
        ))}
      </div>

      {/* Centered Container but Left-Aligned Text */}
      <div className="flex justify-center items-center h-screen">
        <div className="max-w-3xl w-full flex flex-col items-center text-center">
          {/* Gradient Text - Forced Center Alignment */}
          <GradientText
            colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
            animationSpeed={2}
            showBorder={false}
            className="text-4xl sm:text-5xl font-extrabold"
          >
            Rifki Nauval Dzaki
          </GradientText>

          {/* Animated Decrypted Text - Description */}
          <DecryptedText
            text="Backend Developer | DevOps Enthusiast"
            speed={90}
            maxIterations={15}
            characters="ABCD1234!?$%@"
            className="text-gray-300 text-lg sm:text-xl mt-4 font-medium hover:text-white transition"
            parentClassName="all-letters"
            encryptedClassName="encrypted text-white transition"
          />

          {/* Experience Summary */}
          <p className="text-gray-400 text-md sm:text-lg mt-4 leading-relaxed">
            Passionate <strong>backend developer</strong> specializing in
            <strong> Laravel, Node.js (Express.js), and Prisma ORM</strong>.
            Expertise in{" "}
            <strong>
              secure API integrations, microservices architecture, and database
              optimization
            </strong>
            . Strong focus on <strong>DevOps</strong>, working with{" "}
            <strong>
              Docker, GitHub Actions, CI/CD pipelines, and scalable
              infrastructure
            </strong>
            . Skilled in managing{" "}
            <strong>Nginx, PostgreSQL, and cloud-based deployments</strong>
            for high-performance applications.
          </p>
        </div>
      </div>
    </div>
  );
}

