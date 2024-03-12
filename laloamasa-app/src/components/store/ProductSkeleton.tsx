import { lora, manrope } from "@/app/fonts";

// Skeleton component for loading indicator
export default function ProductSkeleton() {
  return (
    <div className="max-w-52 animate-pulse">
      <div className="flex items-center justify-center w-full bg-gray-200 px-4 mb-3 rounded-sm h-52"></div>
      <div className={`${lora.className} text-md font-bold bg-gray-200 h-6 mb-1`}>Loading product...</div>
      <div className={`${manrope.className} text-xs bg-gray-200 h-3 mb-1`}></div>
      <div className="text-end font-bold bg-gray-200 h-3"></div>
    </div>
  );
}