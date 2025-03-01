import { VscError, VscWarning } from "react-icons/vsc";

export default function Footer() {
  return (
    <div className="flex items-center justify-between bg-neutral-900 text-gray-400 px-4 py-2 text-xs border-t border-neutral-800">
      <div className="flex items-center space-x-4">
        <span className="text-green-400">✔ Build Successful</span>
        <VscError className="text-red-500" /> <span>0 Errors</span>
        <VscWarning className="text-yellow-500" /> <span>0 Warnings</span>
      </div>
      <div className="text-gray-500">
        Ln 10, Col 5 | UTF-8 | LF | TypeScript | Created by Rifki Nauval Dzaki
      </div>
    </div>
  );
}
