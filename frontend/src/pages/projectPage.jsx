import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

function ProjectsPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/projects`)
      .then((res) => res.json())
      .then(setProjects)
      .catch((err) => console.error("Error fetching projects:", err));
  }, []);

  if (!projects.length) return <p className="p-6">Loading projects...</p>;

  return (
    <div className="p-6 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      {projects.map((project, idx) => (
        <Card key={idx} className="shadow">
          <CardHeader>
            <CardTitle>{project.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-700">{project.description}</p>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="sm" className="mt-2">
                  View Project
                </Button>
              </a>
            )}
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default ProjectsPage;
