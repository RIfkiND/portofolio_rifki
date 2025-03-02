import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiLaravel,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiGo,
  SiTypescript,
  SiDocker,
  SiGithubactions,
  SiNginx,
  SiJenkins,
  SiKubernetes,
  SiDigitalocean,
  SiGit,
  SiLinux,
} from "react-icons/si";
import {
  FaVuejs,
  FaAws,
  FaBrain,
  FaHandHolding,
  FaGlobe,
} from "react-icons/fa";
import { BsMicrosoft } from "react-icons/bs";
export default function TechTable() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 ">
      {/* Frontend Table */}
      <div className="overflow-x-auto">
        <h4 className="font-semibold text-md mb-2">Frontend Technologies</h4>
        <table className="w-full border-collapse border border-gray-600 text-left min-w-[250px]">
          <thead>
            <tr className="bg-neutral-800 text-gray-300">
              <th className="border border-gray-600 px-4 py-2">Technology</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="flex items-center gap-2 px-4 py-2">
                <SiReact className="text-blue-400" /> React.js
              </td>
            </tr>
            <tr>
              <td className="flex items-center gap-2 px-4 py-2">
                <SiNextdotjs className="text-gray-300" /> Next.js
              </td>
            </tr>
            <tr>
              <td className="flex items-center gap-2 px-4 py-2">
                <FaVuejs className="text-green-700" /> Vue.js
              </td>
            </tr>
            <tr>
              <td className="flex items-center gap-2 px-4 py-2">
                <SiTailwindcss className="text-teal-400" /> Tailwind CSS
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Backend Table */}
      <div className="overflow-x-auto">
        <h4 className="font-semibold text-md mb-2">Backend Technologies</h4>
        <table className="w-full border-collapse border border-gray-600 text-left min-w-[250px]">
          <thead>
            <tr className="bg-neutral-800 text-gray-300">
              <th className="border border-gray-600 px-4 py-2">Technology</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="flex items-center gap-2 px-4 py-2">
                <SiLaravel className="text-red-500" /> Laravel
              </td>
            </tr>
            <tr>
              <td className="flex items-center gap-2 px-4 py-2">
                <SiExpress className="text-gray-400" /> Express.js
              </td>
            </tr>
            <tr>
              <td className="flex items-center gap-2 px-4 py-2">
                <SiNestjs className="text-red-600" /> Nest.js
              </td>
            </tr>
            <tr>
              <td className="flex items-center gap-2 px-4 py-2">
                <SiGo className="text-blue-500" /> Golang
              </td>
            </tr>
            <tr>
              <td className="flex items-center gap-2 px-4 py-2">
                <SiTypescript className="text-blue-400" /> TypeScript
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Databases Table */}
      <div className="overflow-x-auto">
        <h4 className="font-semibold text-md mb-2">Databases</h4>
        <table className="w-full border-collapse border border-gray-600 text-left min-w-[250px]">
          <thead>
            <tr className="bg-neutral-800 text-gray-300">
              <th className="border border-gray-600 px-4 py-2">Database</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="flex items-center gap-2 px-4 py-2">
                <SiPostgresql className="text-blue-500" /> PostgreSQL
              </td>
            </tr>
            <tr>
              <td className="flex items-center gap-2 px-4 py-2">
                <SiMongodb className="text-green-500" /> MongoDB
              </td>
            </tr>
            <tr>
              <td className="flex items-center gap-2 px-4 py-2">
                <SiMysql className="text-blue-600" /> MySQL
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* DevOps & Tools */}
      <div className="overflow-x-auto">
        <h4 className="font-semibold text-md mb-2">DevOps & Tools</h4>
        <table className="w-full border-collapse border border-gray-600 text-left min-w-[250px]">
          <thead>
            <tr className="bg-neutral-800 text-gray-300">
              <th className="border border-gray-600 px-4 py-2">Tool</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="flex items-center gap-2 px-4 py-2">
                <SiLinux className="text-yellow-400" /> Linux
              </td>
            </tr>
            <tr>
              <td className="flex items-center gap-2 px-4 py-2">
                <SiGit className="text-orange-600" /> Git
              </td>
            </tr>
            <tr>
              <td className="flex items-center gap-2 px-4 py-2">
                <SiDocker className="text-blue-400" /> Docker
              </td>
            </tr>
            <tr>
              <td className="flex items-center gap-2 px-4 py-2">
                <SiGithubactions className="text-purple-500" /> GitHub Actions
              </td>
            </tr>
            <tr>
              <td className="flex items-center gap-2 px-4 py-2">
                <SiNginx className="text-green-400" /> Nginx
              </td>
            </tr>
            <tr>
              <td className="flex items-center gap-2 px-4 py-2">
                <SiJenkins className="text-red-500" /> Jenkins
              </td>
            </tr>
            <tr>
              <td className="flex items-center gap-2 px-4 py-2">
                <SiKubernetes className="text-blue-600" /> Kubernetes
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Cloud Platforms */}
      <div className="overflow-x-auto">
        <h4 className="font-semibold text-md mb-2">Cloud Platforms</h4>
        <table className="w-full border-collapse border border-gray-600 text-left min-w-[250px]">
          <thead>
            <tr className="bg-neutral-800 text-gray-300">
              <th className="border border-gray-600 px-4 py-2">Platform</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="flex items-center gap-2 px-4 py-2">
                <SiDigitalocean className="text-blue-500" /> DigitalOcean
              </td>
            </tr>
            <tr>
              <td className="flex items-center gap-2 px-4 py-2">
                <FaAws className="text-orange-500" /> AWS
              </td>
            </tr>
            <tr>
              <td className="flex items-center gap-2 px-4 py-2">
                <BsMicrosoft className="text-blue-500" /> Azure
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="overflow-x-auto">
        <h4 className="font-semibold text-md mb-2">Other</h4>
        <table className="w-full border-collapse border border-gray-600 text-left min-w-[250px]">
          <thead>
            <tr className="bg-neutral-800 text-gray-300">
              <th className="border border-gray-600 px-4 py-2">Platform</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="flex items-center gap-2 px-4 py-2">
                <FaBrain className="text-blue-500" /> Problem Solving
              </td>
            </tr>
            <tr>
              <td className="flex items-center gap-2 px-4 py-2">
                <FaHandHolding className="text-orange-500" /> leadership
              </td>
            </tr>
            <tr>
              <td className="flex items-center gap-2 px-4 py-2">
                <FaGlobe className="text-blue-500" /> English (Toeic: 800)
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
