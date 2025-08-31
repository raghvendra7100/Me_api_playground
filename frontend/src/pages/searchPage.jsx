import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState({ skills: [], projects: [] });

  const handleSearch = async (e) => {
    const q = e.target.value;
    setQuery(q);

    if (!q) {
      setResults({ skills: [], projects: [] });
      return;
    }

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/search?q=${q}`);
      const data = await res.json();
      setResults(data);
    } catch (err) {
      console.error("Search error:", err);
    }
  };

  return (
    <div className="p-6 space-y-6">
      <Input
        type="text"
        placeholder="Search skills or projects..."
        value={query}
        onChange={handleSearch}
        className="w-full max-w-md mx-auto"
      />

      {/* Skills */}
      <div>
        <h2 className="text-xl font-bold mb-3">Skills</h2>
        {results.skills.length === 0 ? (
          <p className="text-gray-500">No matching skills</p>
        ) : (
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {results.skills.map((skill, idx) => (
              <Card key={idx} className="shadow">
                <CardHeader>
                  <CardTitle>{skill.name}</CardTitle>
                </CardHeader>
              </Card>
            ))}
          </div>
        )}
      </div>

      {/* Projects */}
      <div>
        <h2 className="text-xl font-bold mb-3">Projects</h2>
        {results.projects.length === 0 ? (
          <p className="text-gray-500">No matching projects</p>
        ) : (
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {results.projects.map((project, idx) => (
              <Card key={idx} className="shadow">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default SearchPage;
