import { Code2, GraduationCap, Rocket, Terminal } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: GraduationCap,
      title: 'Education',
      description: 'BSc Software Engineering @ AAU',
    },
    {
      icon: Code2,
      title: 'Experience',
      description: 'CodeAlpha Intern',
    },
    {
      icon: Rocket,
      title: 'Projects',
      description: '6+ Completed',
    },
    {
      icon: Terminal,
      title: 'Focus',
      description: 'Full Stack & Mobile Dev',
    },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="font-mono text-primary mb-4">// about me</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Building the <span className="text-gradient">Future</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Terminal Card */}
            <div className="terminal-card">
              <div className="terminal-header">
                <div className="terminal-dot terminal-dot-red" />
                <div className="terminal-dot terminal-dot-yellow" />
                <div className="terminal-dot terminal-dot-green" />
                <span className="ml-4 font-mono text-sm text-muted-foreground">about.tsx</span>
              </div>
              <div className="p-6 font-mono text-sm">
                <div className="space-y-2">
                  <p><span className="text-accent">const</span> <span className="text-primary">developer</span> = {'{'}</p>
                  <p className="pl-4"><span className="text-muted-foreground">name:</span> <span className="text-green-400">"Hailemichael Molla"</span>,</p>
                  <p className="pl-4"><span className="text-muted-foreground">location:</span> <span className="text-green-400">"Addis Ababa, Ethiopia"</span>,</p>
                  <p className="pl-4"><span className="text-muted-foreground">education:</span> <span className="text-green-400">"SE @ Addis Ababa University"</span>,</p>
                  <p className="pl-4"><span className="text-muted-foreground">passions:</span> [</p>
                  <p className="pl-8"><span className="text-green-400">"Web Development"</span>,</p>
                  <p className="pl-8"><span className="text-green-400">"Mobile Apps"</span>,</p>
                  <p className="pl-8"><span className="text-green-400">"Cybersecurity"</span></p>
                  <p className="pl-4">],</p>
                  <p className="pl-4"><span className="text-muted-foreground">available:</span> <span className="text-primary">true</span></p>
                  <p>{'}'}</p>
                </div>
              </div>
            </div>

            {/* About Text */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a Software Engineering student at Addis Ababa University with a 
                passion for building full-stack web applications and mobile apps. 
                Currently expanding my skills through Cisco's networking courses and 
                Udacity's coding programs.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From e-commerce platforms to social media apps, I love tackling 
                challenging projects that make a real impact. I bring strong 
                communication, adaptability, and teamwork skills to every project.
              </p>

              {/* Highlight Cards */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                {highlights.map((item, index) => (
                  <div 
                    key={index}
                    className="p-4 rounded-lg border border-border bg-card/50 hover:border-primary/50 transition-all duration-300 group"
                  >
                    <item.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
