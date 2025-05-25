import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function MovieInput({ newMovie, setNewMovie, addMovie }) {
  return (
    <div className="flex gap-6 mb-8">
      <Input
        value={newMovie}
        onChange={(e) => setNewMovie(e.target.value)}
        placeholder="Add a movie to watch"
        className="border-white bg-white/40 text-white placeholder-white focus:ring focus:ring-white/50 text-2xl p-4 w-full"
      />
      <Button onClick={addMovie} className="bg-white text-blue-600 hover:bg-gray-200 text-2xl p-4">
        Add
      </Button>
    </div>
  );
}
