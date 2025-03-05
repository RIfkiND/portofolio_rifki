interface LineProps {
  line: number;
}

export default function Line({ line }: LineProps) {
  return (
    <div className="px-3 text-gray-500 text-lg font-mono text-right leading-[1.5] flex flex-col">
      {Array.from({ length: line }, (_, i) => (
        <div key={i} className="w-8 h-[1.5rem] flex items-center justify-end">
          {i + 1}
        </div>
      ))}
    </div>
  );
}
