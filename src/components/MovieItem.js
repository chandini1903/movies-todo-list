import { Button } from "@/components/ui/button";
import { Trash, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function MovieItem({ movie, index, toggleWatched, deleteMovie }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center justify-between p-6 bg-white/40 text-white shadow-xl hover:shadow-2xl transition duration-300 rounded-lg text-2xl">
        <div className={`flex-1 ${movie.watched ? "line-through text-gray-300" : "text-white"}`}>
          {movie.title}
        </div>
        <div className="flex gap-4">
          <Button variant="ghost" onClick={() => toggleWatched(index)}>
            <CheckCircle className={`transition duration-300 ${movie.watched ? "text-green-400 scale-150" : "text-white"}`} />
          </Button>
          <Button variant="ghost" onClick={() => deleteMovie(index)}>
            <Trash className="text-red-400 hover:scale-150 transition duration-300" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
