import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  MessageCircle,
  CheckCircle,
  Loader2,
} from "lucide-react";
import { cn } from "../lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from 'emailjs-com';


const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
  e.preventDefault();
  setIsSubmitting(true);

  emailjs
    .send(
      'service_1o5i6vd',
      'template_ca81pya', 
      formData,
      '1EjI0APIGgxSypIcL'
    )
    .then(
      (response) => {
        toast({
          title: "Message sent!",
          description: "Thank you for your message. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
        setIsSubmitting(false);
      },
      (error) => {
        toast({
          title: "Oops!",
          description: "Failed to send message. Please try again later.",
          variant: "destructive",
        });
        setIsSubmitting(false);
      }
    );
};


  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "eshanwijesinghe01@gmail.com",
      href: "mailto:eshanwijesinghe01@gmail.com",
      description: "Drop me a line anytime",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+94 71 070 1158",
      href: "tel:+94710701158",
      description: "Available 9AM-6PM",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Kurunegala, Sri Lanka",
      href: "#contact",
      description: "Ready for remote work",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/eshan-akalanka-319ab026b",
      label: "LinkedIn",
      color: "hover:text-blue-500 hover:bg-blue-500/10",
    },
    {
      icon: Github,
      href: "https://github.com/EshanAk-dev",
      label: "GitHub",
      color: "hover:text-gray-700 hover:bg-gray-700/10",
    },
    {
      icon: Facebook,
      href: "https://www.facebook.com/share/16RQPxoSFU/",
      label: "Facebook",
      color: "hover:text-blue-600 hover:bg-blue-600/10",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/eshan_wijesinghe_/profilecard/?igsh=OW8ycGVlaXBsdG9m",
      label: "Instagram",
      color: "hover:text-pink-500 hover:bg-pink-500/10",
    },
  ];

  return (
    <section
      id="contact"
      className="py-16 sm:py-20 lg:py-24 px-4 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/10"></div>
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-subtle"></div>
      <div
        className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl animate-pulse-subtle"
        style={{ animationDelay: "2s" }}
      ></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-primary/10 rounded-full border border-primary/20 mb-4 sm:mb-6">
            <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
            <span className="text-primary font-medium text-xs sm:text-sm">
              Let's Connect
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6">
            Get In{" "}
            <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
              Touch
            </span>
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-foreground/70 max-w-2xl lg:max-w-3xl mx-auto px-4 sm:px-0 leading-relaxed">
            Have a project in mind or just want to chat about technology? I'm
            always excited to discuss new opportunities, creative ideas, or
            potential collaborations. Let's build something amazing together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16">
          {/* Contact Information */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl font-bold text-center lg:text-left mb-6 sm:mb-8">
                Contact Information
              </h3>

              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="group glass-effect rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-border/50 hover:border-primary/30 transition-all duration-300 card-hover"
                  style={{
                    opacity: 0,
                    animation: `fade-in 0.8s ease-out ${index * 0.2}s forwards`,
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 border border-primary/30 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-sm sm:text-base mb-1 text-left">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-foreground/60 mb-2 text-left">
                        {item.description}
                      </p>
                      <a
                        href={item.href}
                        className="text-sm sm:text-base text-foreground hover:text-primary transition-colors duration-300 font-medium break-all text-left block group-hover:translate-x-1"
                      >
                        {item.content}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="glass-effect rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-border/50">
              <h4 className="font-semibold text-sm sm:text-base mb-4 sm:mb-6 text-center lg:text-left">
                Connect With Me
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "group flex flex-col items-center gap-2 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-card/50 border border-border/50 transition-all duration-300 hover:scale-105 hover:shadow-lg",
                      social.color
                    )}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 sm:w-6 sm:h-6 transition-transform group-hover:scale-110" />
                    <span className="text-xs sm:text-sm font-medium">
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-effect rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-border/50 h-full">
              <div className="flex items-center gap-3 mb-6 sm:mb-8">
                <div className="p-2 sm:p-3 rounded-xl bg-primary/10 border border-primary/20">
                  <Send className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold">
                  Send a Message
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <label className="block space-y-2">
                    <span className="text-sm sm:text-base font-medium text-foreground/90">
                      Your Name *
                    </span>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 sm:py-4 rounded-xl sm:rounded-2xl border border-border bg-card/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 text-sm sm:text-base placeholder:text-foreground/40"
                      placeholder="Your Name"
                    />
                  </label>

                  <label className="block space-y-2">
                    <span className="text-sm sm:text-base font-medium text-foreground/90">
                      Your Email *
                    </span>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 sm:py-4 rounded-xl sm:rounded-2xl border border-border bg-card/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 text-sm sm:text-base placeholder:text-foreground/40"
                      placeholder="youremail@example.com"
                    />
                  </label>
                </div>

                <label className="block space-y-2">
                  <span className="text-sm sm:text-base font-medium text-foreground/90">
                    Your Message *
                  </span>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 sm:py-4 rounded-xl sm:rounded-2xl border border-border bg-card/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all duration-300 resize-none text-sm sm:text-base placeholder:text-foreground/40"
                    placeholder="Tell me about your project or just say hello..."
                  />
                </label>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full cosmic-button flex items-center justify-center gap-2 py-3 sm:py-4 text-sm sm:text-base font-semibold disabled:opacity-70 disabled:cursor-not-allowed relative overflow-hidden group",
                    isSubmitting && "animate-pulse"
                  )}
                >
                  <div className="flex items-center gap-2">
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </div>

                  {/* Success animation overlay */}
                  <div className="absolute inset-0 bg-green-500 flex items-center justify-center opacity-0 transition-opacity duration-300">
                    <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                </button>
              </form>

              <div className="mt-6 sm:mt-8 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-primary/5 border border-primary/20">
                <p className="text-xs sm:text-sm text-foreground/70 text-center">
                  <span className="font-medium text-primary">
                    Quick response guaranteed!
                  </span>{" "}
                  I typically reply within 24 hours. For urgent matters, feel
                  free to call or connect on social media.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="hidden sm:block">
          <div className="absolute top-1/4 left-8 w-2 h-2 bg-primary/40 rounded-full animate-pulse"></div>
          <div
            className="absolute top-1/3 right-12 w-1.5 h-1.5 bg-purple-500/40 rounded-full animate-pulse"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-primary/30 rounded-full animate-pulse"
            style={{ animationDelay: "2s" }}
          ></div>
          <div
            className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-purple-500/30 rounded-full animate-pulse"
            style={{ animationDelay: "3s" }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
