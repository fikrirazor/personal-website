import { Mouse } from "lucide-react";

function ScrollIndicator() {
  return (
    <div className="flex flex-col items-center mb-6 text-cream-light">
      <Mouse className="mb-2 opacity-80" />
      <div className="flex flex-col items-center gap-1">
        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
        <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
        <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
        <div className="w-1 h-1 bg-gray-700 rounded-full"></div>
      </div>
    </div>
  );
}

export default ScrollIndicator;
