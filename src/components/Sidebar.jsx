import { ChevronsLeft, ChevronsRight } from "lucide-react";
import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const SidebarContext = createContext();

const Sidebar = ({ children }) => {
  const [expanded, setExpanded] = useState(true);

  return (
    <nav className="h-full flex flex-col bg-gray-200 border-r shadow-sm">
      <div className="p-4 pb-2 flex justify-end">
        <button
          onClick={() => setExpanded((curr) => !curr)}
          className="p-1.5 rounded-lg transition-all hover:bg-gray-100 hover:cursor-pointer"
        >
          {expanded ? <ChevronsLeft /> : <ChevronsRight />}
        </button>
      </div>

      <SidebarContext.Provider value={{ expanded }}>
        <ul className="flex-1 px-3">{children}</ul>
      </SidebarContext.Provider>
    </nav>
  );
};

export default Sidebar;

export const SidebarItem = ({ icon, text, path, onClick }) => {
  const { expanded } = useContext(SidebarContext);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${path}`);

    if (onClick) {
      onClick();
    }
  };

  return (
    <li
      className="relative flex items-center py-2 px-3 my-1 font-medium rounded-md cursor-pointer transition-colors group hover:bg-indigo-50 text-gray-600"
      onClick={handleClick}
    >
      {icon}
      <span
        className={`whitespace-nowrap duration-300 overflow-hidden transition-all ${
          expanded ? "w-52 ml-3" : "w-0"
        }`}
      >
        {text}
      </span>

      {!expanded && (
        <div className="absolute bg-blue-100 left-full rounded-md px-2 py-1 ml-6 text-indigo-800 text-sm invisible -translate-x-3 transition-all group-hover:visible group-hover:opacity-100 group-hover:translate-x-0">
          {text}
        </div>
      )}
    </li>
  );
};
