import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";   // ⭐ added

function ProfilePage() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/profile`)
      .then(res => res.json())
      .then(setProfile);
  }, []);

  if (!profile) return <p className="p-6">Loading profile...</p>;

  return (
    <div className="flex justify-center p-6">
      <Card className="w-full max-w-2xl shadow-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
        <CardHeader>
          <CardTitle className="text-2xl">{profile.name}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <p><b>Email:</b> {profile.email}</p>
          <p>{profile.bio}</p>
          <p><b>Location:</b> {profile.location}</p>

          <div>
            <h3 className="font-semibold">Links</h3>
            <ul className="list-disc list-inside text-blue-600">
              {profile.links?.github && <li><a href={profile.links.github}>GitHub</a></li>}
              {profile.links?.linkedin && <li><a href={profile.links.linkedin}>LinkedIn</a></li>}
              {profile.links?.portfolio && <li><a href={profile.links.portfolio}>Portfolio</a></li>}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold">Education</h3>
            <ul className="list-disc list-inside">
              {profile.educations?.map((edu, idx) => (
                <li key={idx}>
                  {edu.degree} — {edu.institute} ({edu.startYear || ""}-{edu.endYear || ""})
                  {edu.gpa ? `, GPA: ${edu.gpa}` : ""}
                </li>
              ))}
            </ul>
          </div>

          {/* ⭐ Resume Download Button */}
          <div className="pt-4">
            <Button asChild>
              <a href="/resume.pdf" download>
                📄 Download Resume
              </a>
            </Button>
          </div>
          {/* ⭐ end of new block */}

        </CardContent>
      </Card>
    </div>
  );
}

export default ProfilePage;
