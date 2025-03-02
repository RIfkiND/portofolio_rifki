import {
  SiNextdotjs,
  SiLaravel,
  SiExpress,
  SiNestjs,
  SiGo,
  SiTypescript,
  SiPhp,
  SiNodedotjs,
  SiPython,
} from "react-icons/si";



export default function TechStack() {
  
  return (
    <div className="w-full max-w-5xl mx-auto text-gray-300 text-sm sm:text-md mt-10">
      <h3 className="font-bold text-2xl mb-4 text-center">Main Stack</h3>
      <div className="flex flex-wrap justify-center gap-4 text-4xl mb-6 mt-10 ">
        <SiNextdotjs className="text-gray-300" />
        <SiLaravel className="text-red-500" />
        <SiExpress className="text-gray-400" />
        <SiNestjs className="text-red-600" />
        <SiGo className="text-blue-500" />
        <SiTypescript className="text-blue-400" />
        <SiPhp className="text-gray-400" />
        <SiPython className="text-blue-400" />
        <SiNodedotjs className="text-green-400" />
      </div>
      {/* <h3 className="font-bold text-lg mb-4 text-center mt-20">
        🛠 Tech Stack & Skills
      </h3> */}
    </div>
  );
}

