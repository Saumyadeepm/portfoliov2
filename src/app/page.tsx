import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

export default function Page() {
  return (
      <main className="flex flex-col min-h-[100dvh] space-y-10">
        <section id="hero">
          <div className="mx-auto w-full max-w-2xl space-y-8">
            <div className="gap-2 flex justify-between">
              <div className="flex-col flex flex-1 space-y-1.5">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Hi, I&apos;m {String(DATA.name.split(" ")[0])} 👋
                </h1>
                <p className="max-w-[600px] md:text-xl">{DATA.description}</p>
              </div>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials ?? "N/A"}</AvatarFallback>

              </Avatar>
            </div>
          </div>
        </section>
        <section id="about">
          <h2 className="text-xl font-bold">About</h2>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {DATA.summary}
          </Markdown>
        </section>
        <section id="work">
          <div className="flex min-h-0 flex-col gap-y-3">
            <h2 className="text-xl font-bold">Work Experience</h2>
            {DATA.work.map((work) => (
                <ResumeCard
                    key={work.company}
                    logoUrl={work.logoUrl}
                    altText={work.company ? String(work.company) : "Company Logo"} // Cast to string
                    title={work.company}
                    subtitle={work.title}
                    href={work.href}
                    badges={work.badges}
                    period={`${work.start} - ${work.end ?? "Present"}`}
                    description={work.description}
                />
            ))}
          </div>
        </section>
        <section id="education">
          <div className="flex min-h-0 flex-col gap-y-3">
            <h2 className="text-xl font-bold">Education</h2>
            {DATA.education.map((education) => (
                <ResumeCard
                    key={education.school}
                    href={education.href}
                    logoUrl={education.logoUrl}
                    altText={education.school}
                    title={education.school}
                    subtitle={education.degree}
                    period={`${education.start} - ${education.end}`}
                />
            ))}
          </div>
        </section>
        <section id="skills">
          <div className="flex min-h-0 flex-col gap-y-3">
            <h2 className="text-xl font-bold">Skills</h2>
            <div className="flex flex-wrap gap-1">
              {DATA.skills.map((skill) => (
                  <Badge key={skill}>{skill}</Badge>
              ))}
            </div>
          </div>
        </section>
        <section id="projects">
          <div className="space-y-12 w-full py-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Here are some of the projects I&apos;ve worked on during my academic and professional journey.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
              {DATA.projects.map((project) => (
                  <ProjectCard
                      key={project.title}
                      href={project.href}
                      title={project.title} // Ensure title is a string
                      description={project.description} // Ensure description is a string
                      dates={project.dates} // Ensure dates is a string
                      tags={project.technologies} // Ensure tags are strings
                      image={project.image ?? undefined} // Handle undefined
                      video={project.video ?? undefined} // Handle undefined
                      links={project.links}
                  />
              ))}
            </div>
          </div>
        </section>
        <section id="contact">
          <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Feel free to reach out to me at{" "}
                <Link
                    href={`mailto:${DATA.contact.email}`}
                    className="text-blue-500 hover:underline"
                >
                  {DATA.contact.email}
                </Link>{" "}
                or connect with me on{" "}
                <Link
                    href={DATA.contact.social.LinkedIn.url}
                    className="text-blue-500 hover:underline"
                >
                  LinkedIn
                </Link>
                . I&apos;m always open to discussing new opportunities and collaborations.
              </p>
            </div>
          </div>
        </section>
      </main>
  );
}
