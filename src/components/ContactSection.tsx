
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MessageSquare, Copy, Check } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('contact@hightps.pro');
    setEmailCopied(true);
    toast({
      title: "Email copied!",
      description: "contact@hightps.pro has been copied to your clipboard.",
    });
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white animate-slide-up">
            Get In Touch
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto leading-relaxed animate-slide-up">
            Ready to experience blazing-fast hosting? Contact us today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="glass-card p-8 glow-border animate-slide-up">
            <h3 className="text-2xl font-semibold mb-6 text-white">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-white/40"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-white/40"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="bg-white/5 border-white/20 text-white placeholder:text-white/50 focus:border-white/40 resize-none"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full glint-effect glass-card hover:bg-white/10 border-white/20 text-white font-semibold py-3 transition-all duration-300 hover:scale-105"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 animate-slide-up">
            <div className="glass-card p-6 glow-border hover:bg-white/5 transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-white/20 transition-colors duration-300">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Email</h4>
                  <p className="text-white/70">contact@hightps.pro</p>
                </div>
              </div>
              <Button
                onClick={copyEmail}
                variant="outline"
                size="sm"
                className="bg-transparent border-white/30 text-white hover:bg-white/5"
              >
                {emailCopied ? (
                  <>
                    <Check size={16} className="mr-2" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy size={16} className="mr-2" />
                    Copy Email
                  </>
                )}
              </Button>
            </div>

            <div className="glass-card p-6 glow-border hover:bg-white/5 transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-white/20 transition-colors duration-300">
                  <MessageSquare className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Discord</h4>
                  <p className="text-white/70">Join our community</p>
                </div>
              </div>
              <Button
                onClick={() => window.open('https://discord.gg/hightps', '_blank')}
                variant="outline"
                size="sm"
                className="bg-transparent border-white/30 text-white hover:bg-white/5"
              >
                Join Discord
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
