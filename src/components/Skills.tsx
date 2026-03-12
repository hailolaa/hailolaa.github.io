import {
  Code2,
  FileCode,
  Target,
  Atom,
  Smartphone,
  Globe,
  Palette,
  Server,
  Cpu,
  Webhook,
  GitBranch,
  Layout,
  Network,
  Shield,
  Layers
} from 'lucide-react';

const skills = {
  languages: [
    { name: 'JavaScript', icon: Code2 },
    { name: 'Python', icon: FileCode },
    { name: 'Dart', icon: Target },
    { name: 'TypeScript', icon: FileCode },
  ],
  frontend: [
    { name: 'React', icon: Atom },
    { name: 'Flutter', icon: Smartphone },
    { name: 'HTML/CSS', icon: Globe },
    { name: 'Tailwind CSS', icon: Palette },
  ],
  backend: [
    { name: 'Node.js', icon: Server },
    { name: 'Express.js', icon: Cpu },
    { name: 'REST APIs', icon: Webhook },
    { name: 'Next.js', icon: Layers },
  ],
  tools: [
    { name: 'Git', icon: GitBranch },
    { name: 'VS Code', icon: Layout },
    { name: 'Networking', icon: Network },
    { name: 'Cybersecurity', icon: Shield },
  ],
};

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-bg opacity-20" />

      <div className="container px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="font-mono text-primary mb-4">// skills & tools</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="text-gradient">Tech Stack</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="terminal-card"
              >
                <div className="terminal-header">
                  <div className="terminal-dot terminal-dot-red" />
                  <div className="terminal-dot terminal-dot-yellow" />
                  <div className="terminal-dot terminal-dot-green" />
                  <span className="ml-4 font-mono text-sm text-muted-foreground">
                    {category}.config
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-4 capitalize text-primary">
                    {category === 'frontend' ? 'Frontend' :
                      category === 'backend' ? 'Backend' :
                        category === 'tools' ? 'Tools & DevOps' : 'Languages'}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {items.map((skill, index) => {
                      const Icon = skill.icon || Code2;
                      return (
                        <span
                          key={index}
                          className="skill-tag flex items-center gap-2"
                        >
                          <Icon className="w-4 h-4 text-primary" />
                          <span>{skill.name}</span>
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
