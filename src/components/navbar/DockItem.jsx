import { motion } from "framer-motion";

export default function DockItem({ icon: Icon, name, href }) {
  return (
    <motion.a
      href={href}
      className="flex flex-col items-center justify-center w-16 h-16 text-gray-700 hover:text-slate-100 transition-colors duration-200"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
    >
      <Icon className="w-6 h-6" />
      <span className="text-xs">{name}</span>
    </motion.a>
  );
}