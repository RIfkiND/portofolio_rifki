interface LineProps {
  line: number;
}

export default function Line({ line }: LineProps) {
  return (
    <div className="absolute left-0 top-0 h-full py-4 px-3 text-gray-500 text-sm font-mono text-right leading-relaxed pt-9">
      {Array.from({ length: line }, (_, i) => (
        <div key={i} className="w-6">
          {i + 1}
        </div>
      ))}
    </div>
  );
}
