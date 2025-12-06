import { Sparkle } from "lucide-react";

const SparkleDivider = () => {
  return (
    <>
      {/* Sparkle Divider */}
      <h1 className="flex justify-center gap-2 py-6">
        <Sparkle size={16} className="text-gray-400 opacity-70" />
        <Sparkle size={16} className="text-gray-400 opacity-70" />
        <Sparkle size={16} className="text-gray-400 opacity-70" />
      </h1>
    </>
  );
}

export default SparkleDivider;
