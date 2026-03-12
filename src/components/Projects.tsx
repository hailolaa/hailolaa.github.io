import { Github, Star, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Habitual',
    description: "Track your daily habits, set goals, journal your progress, and earn achievements. Build better habits with HabitFlow's intuitive habit tracking system.",
    tags: ['React', 'Next.js', 'typescript', 'tailwindcss'],
    github: 'https://github.com/hailolaa/Habit-Flow.git',
    demo: 'https://habitune.vercel.app',
    featured: true,
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    title: 'Get Social',
    description: 'A social media platform built during my CodeAlpha internship. Simple, organized, and user-friendly.',
    tags: ['React', 'Node.js', 'Express'],
    github: 'https://github.com/hailolaa/CodeAlpha_Social-Media-Platform.git',
    demo: '',
    featured: true,
    gradient: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'E-Commerce Website',
    description: 'Full-stack e-commerce application developed during CodeAlpha internship with complete frontend and backend.',
    tags: ['JavaScript', 'Node.js', 'Express'],
    github: 'https://github.com/hailolaa/CodeAlpha_Simple-E-commerce-Store.git',
    demo: '',
    featured: true,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Elderly-Care App',
    description: 'A Flutter mobile application designed to assist and care for elderly users.',
    tags: ['Flutter', 'Dart', 'Mobile'],
    github: 'https://github.com/hailolaa/Elderly-Care-Management-System-ECMS-.git',
    demo: '',
    featured: true,
    gradient: 'from-green-500 to-teal-500',
  },
  {
    title: 'Campus Lost & Found',
    description: 'A web platform for university students to report and find lost items on campus. Team project for web development course.',
    tags: ['React', 'Node.js', 'Team Project'],
    github: 'https://github.com/hailolaa/Campus_Lost_and_Found_Management_System_2024_25.git',
    demo: '',
    featured: false,
    gradient: 'from-orange-500 to-red-500',
  },
  {
    title: 'Kotari-Tracker',
    description: 'A water intake tracking web application to help users maintain healthy hydration habits.',
    tags: ['JavaScript', 'Web App'],
    github: '',
    demo: '',
    featured: false,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'School Management System',
    description: 'A comprehensive school management system built voluntarily for my high school with my team.',
    tags: ['Full Stack', 'Team Project'],
    github: '',
    demo: '',
    featured: false,
    gradient: 'from-pink-500 to-purple-500',
  }



];

const Projects = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="font-mono text-primary mb-4">// featured work</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Recent <span className="text-gradient">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group terminal-card overflow-hidden"
              >
                {/* Project Header Gradient */}
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />

                <div className="p-6">
                  {/* Title Row */}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        {project.featured && (
                          <span className="flex items-center gap-1 px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono">
                            <Star className="w-3 h-3 fill-current" />
                            Featured
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <div className="flex gap-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all"
                          title="View Source on GitHub"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all"
                          title="View Live Demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 rounded-full bg-secondary text-xs font-mono text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <Button onClick={() => window.open('https://github.com/hailolaa', '_blank')}
              variant="outline"
              size="lg"
              className="border-border hover:border-primary hover:bg-primary/10"
            >
              <Github className="w-4 h-4 mr-2" />
              View All on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
