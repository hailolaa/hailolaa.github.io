import { useState } from 'react';
import { Mail, MapPin, Send, Github, Linkedin, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const emailAddress = 'hailolaa21@gmail.com';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const openWebmailCompose = (subject?: string, body?: string) => {
    const base = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailAddress)}`;
    const gmailLink = `${base}${subject ? `&su=${subject}` : ''}${body ? `&body=${body}` : ''}`;
    const win = window.open(gmailLink, '_blank', 'noopener,noreferrer');
    if (!win) {
      toast({
        title: "Pop-up blocked",
        description: "Allow pop-ups or use the copy email button.",
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const subject = encodeURIComponent(`New message from ${formData.name || 'someone'}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    );
    const mailtoLink = `mailto:${emailAddress}?subject=${subject}&body=${body}`;

    const fallbackMailto = () => {
      // Try to open mailto in a new tab/window (if the browser allows it)
      const win = window.open(mailtoLink, '_blank', 'noopener,noreferrer');

      if (!win) {
        // If blocked, try Gmail web compose as a secondary new-tab option
        openWebmailCompose(subject, body);
        // Also fall back to same-tab mailto navigation to honor OS defaults
        window.location.href = mailtoLink;
      }

      toast({
        title: "Email compose opened",
        description: "If it didn't open, allow pop-ups or set a default mail app.",
      });
    };

    const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT;
    if (endpoint) {
      try {
        const response = await fetch(endpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (!response.ok) throw new Error('Failed to send');

        toast({
          title: "Message sent!",
          description: "Thanks for reaching out. I'll get back to you soon!",
        });
        setFormData({ name: '', email: '', message: '' });
        return;
      } catch (error) {
        console.error('Contact form send failed, falling back to mailto:', error);
        toast({
          title: "Sending via email app",
          description: "Direct send failed. We'll open your mail app instead.",
        });
        fallbackMailto();
        setFormData({ name: '', email: '', message: '' });
        return;
      }
    }

    fallbackMailto();
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 relative">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" aria-hidden />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" aria-hidden />
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" aria-hidden />

      <div className="container px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <p className="font-mono text-primary mb-4">// get in touch</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's <span className="text-gradient">Connect</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Let's build something amazing together</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, 
                  or opportunities to be part of your visions. Feel free to reach out!
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card/50">
                  <div className="p-3 rounded-full bg-primary/10">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">hailolaa21@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card/50">
                  <div className="p-3 rounded-full bg-primary/10">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">Addis Ababa, Ethiopia</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="text-sm text-muted-foreground mb-4">Find me on</p>
                <div className="flex gap-4">
                  <a 
                    href="https://github.com/hailolaa" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all group"
                  >
                    <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                  <a 
                    href="https://linkedin.com/in/hailemichael-molla-31672225a" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all group"
                  >
                    <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                  <a 
                    href="https://leetcode.com/u/hailolaa/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/10 transition-all group"
                  >
                    <Code className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="terminal-card">
              <div className="terminal-header">
                <div className="terminal-dot terminal-dot-red" />
                <div className="terminal-dot terminal-dot-yellow" />
                <div className="terminal-dot terminal-dot-green" />
                <span className="ml-4 font-mono text-sm text-muted-foreground">contact.form</span>
              </div>
              <form onSubmit={handleSubmit} className="p-6 space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">
                    <span className="text-primary">const</span> name = 
                  </label>
                  <Input 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                    className="bg-secondary border-border focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">
                    <span className="text-primary">const</span> email = 
                  </label>
                  <Input 
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="bg-secondary border-border focus:border-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-muted-foreground">
                    <span className="text-primary">const</span> message = 
                  </label>
                  <Textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    rows={5}
                    required
                    className="bg-secondary border-border focus:border-primary resize-none"
                  />
                </div>
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground font-semibold glow"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
