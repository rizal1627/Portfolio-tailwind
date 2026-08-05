import DockItem from "./DockItem";
import navigation from "../../data/navigation";

export default function Navbar() {
  return (
    <nav
      className="
        fixed
        bottom-6
        left-1/2
        z-50
        -translate-x-1/2
      "
    >
      <div
        className="
          
          gap-4
          rounded-3xl
          border
          border-white/20
          bg-white-200/20
          px-5
          py-3
          shadow-2xl
          backdrop-blur-xl
          xl:hidden
          xss:flex
        "
      >
        {navigation.map((item) => (
          <DockItem
            key={item.name}
            {...item}
          />
        ))}
      </div>
    </nav>
  );
}