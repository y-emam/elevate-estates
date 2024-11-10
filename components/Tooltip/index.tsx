import { ReactNode } from "react";

interface TooltipProps {
  content: ReactNode;
  children: ReactNode;
}

const Tooltip = ({ content, children }: TooltipProps) => {
  return (
    <div className="relative group z-10">
      {children}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-2 hidden group-hover:block w-72 bg-gray-800 text-white text-sm p-2 rounded-lg shadow-md">
        {content}
      </div>
    </div>
  );
};

export default Tooltip;
