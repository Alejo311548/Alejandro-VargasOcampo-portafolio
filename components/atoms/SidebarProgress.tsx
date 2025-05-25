interface SidebarProgressProps {
  label: string;
  percent: number;
}

export default function SidebarProgress({ label, percent }: SidebarProgressProps) {
  return (
    <div className="mb-2">
      <p className="text-sm text-gray-300">{label}</p>
      <div className="w-full bg-gray-600 h-2 rounded">
        <div className="bg-yellow-400 h-2 rounded" style={{ width: `${percent}%` }}></div>
      </div>
    </div>
  );
}