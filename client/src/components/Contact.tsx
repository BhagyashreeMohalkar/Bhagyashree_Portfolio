import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // ⭐ Web3Forms Integration (ONLY change added)
  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const formData = new FormData();
      formData.append("access_key", "1a42bdc5-5546-44f9-a2ed-912f9f506385");
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("message", values.message);
      formData.append("subject", "New Portfolio Contact Message");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        toast({
          title: "Message sent!",
          description: "Thanks for reaching out. I'll get back to you soon.",
        });
        form.reset();
      } else {
        toast({
          title: "Failed to send message",
          description: data.message,
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    }
  }

  return (
    <section id="contact" className="py-20 relative bg-black/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Contact</span> Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          <p className="text-gray-400 mt-4">Let's work together and build something amazing</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-2xl font-semibold mb-6">
              Get in touch
            </div>
            
            <p className="text-gray-400 leading-relaxed">
              I love creating intelligent tech and exploring new ideas.  
              If you have a project that needs some creative touch, or you just want to say hi,
              feel free to send me a message!
            </p>

            <div className="space-y-6 mt-8">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Email</div>
                  <div className="text-white font-medium">mohalkarbhagyashri961@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Phone</div>
                  <div className="text-white font-medium">+91 7620216120</div>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-sm text-gray-500">Location</div>
                  <div className="text-white font-medium">Shrirampur, Maharashtra, India</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-white/5 p-8 rounded-2xl shadow-xl"
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter your Name" {...field} className="bg-black/20 border-white/10 focus:border-primary/50 h-12" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter the Email Id" {...field} className="bg-black/20 border-white/10 focus:border-primary/50 h-12" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Enter your Message here...." {...field} className="bg-black/20 border-white/10 focus:border-primary/50 min-h-[120px]" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <motion.button
                  type="submit"
                  whileHover={{ y: -3 }}
                  className="btn-primary w-full h-12 text-lg flex items-center justify-center gap-2"
                  data-testid="button-send-message"
                >
                  <Send className="w-4 h-4" /> Send Message
                </motion.button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
      
      {/* Footer inside Contact section */}
      <div className="mt-20 border-t border-white/5 pt-8 text-center text-gray-500 text-sm">
        <p>© 2025 Bhagyashree Mohalkar. Built with ❤️</p>
      </div>
    </section>
  );
}
