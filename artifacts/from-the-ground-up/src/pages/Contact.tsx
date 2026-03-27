import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useSubmitContact } from "@/hooks/use-api-hooks";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";

const formSchema = z.object({
  fullName: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  programInterest: z.string().optional(),
  message: z.string().optional(),
  type: z.enum(["enrollment", "general", "volunteer", "donate"]),
});

type FormData = z.infer<typeof formSchema>;

export default function Contact() {
  const { toast } = useToast();
  const submitMutation = useSubmitContact();
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      type: "general"
    }
  });

  const onSubmit = async (data: FormData) => {
    try {
      await submitMutation.mutateAsync({ data });
      setIsSuccess(true);
      toast({
        title: "Message Sent!",
        description: "We'll get back to you as soon as possible.",
      });
      reset();
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="pt-28 pb-20 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">Let's Build Together</h1>
          <p className="text-lg text-muted-foreground">
            Whether you want to enroll in a program, volunteer your expertise, or support our mission, we want to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-primary text-primary-foreground p-8 rounded-3xl shadow-lg relative overflow-hidden">
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-64 h-64 bg-white/10 rounded-full blur-2xl"></div>
              
              <h3 className="text-2xl font-display font-bold mb-8 relative z-10">Contact Information</h3>
              
              <div className="space-y-6 relative z-10">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Our Workshop</h4>
                    <p className="text-primary-foreground/80">123 Builders Way<br/>Foundation City, FC 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <p className="text-primary-foreground/80">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <p className="text-primary-foreground/80">hello@fromthegroundup.org</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Hours</h4>
                    <p className="text-primary-foreground/80">Mon-Fri: 8am - 6pm<br/>Sat: 9am - 2pm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-card p-8 md:p-10 rounded-3xl shadow-sm border border-border">
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16"
                >
                  <div className="w-20 h-20 bg-secondary/20 text-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-display font-bold mb-4">Message Received!</h3>
                  <p className="text-muted-foreground text-lg">Thank you for reaching out. We are reviewing your message and will be in touch shortly.</p>
                  <Button onClick={() => setIsSuccess(false)} variant="outline" className="mt-8">
                    Send another message
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground">Full Name *</label>
                      <input 
                        {...register("fullName")}
                        className={`w-full px-4 py-3 rounded-xl bg-background border-2 ${errors.fullName ? 'border-destructive' : 'border-input focus:border-primary'} text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all`}
                        placeholder="John Doe"
                      />
                      {errors.fullName && <p className="text-destructive text-xs mt-1">{errors.fullName.message}</p>}
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground">Email Address *</label>
                      <input 
                        {...register("email")}
                        type="email"
                        className={`w-full px-4 py-3 rounded-xl bg-background border-2 ${errors.email ? 'border-destructive' : 'border-input focus:border-primary'} text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all`}
                        placeholder="john@example.com"
                      />
                      {errors.email && <p className="text-destructive text-xs mt-1">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground">Phone Number</label>
                      <input 
                        {...register("phone")}
                        className="w-full px-4 py-3 rounded-xl bg-background border-2 border-input focus:border-primary text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-foreground">Inquiry Type *</label>
                      <select 
                        {...register("type")}
                        className="w-full px-4 py-3 rounded-xl bg-background border-2 border-input focus:border-primary text-foreground focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all appearance-none"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="enrollment">Program Enrollment</option>
                        <option value="volunteer">Volunteer</option>
                        <option value="donate">Donation / Sponsorship</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Program of Interest (Optional)</label>
                    <input 
                      {...register("programInterest")}
                      className="w-full px-4 py-3 rounded-xl bg-background border-2 border-input focus:border-primary text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all"
                      placeholder="e.g. Electrical Systems"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-foreground">Your Message</label>
                    <textarea 
                      {...register("message")}
                      rows={5}
                      className="w-full px-4 py-3 rounded-xl bg-background border-2 border-input focus:border-primary text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full text-lg"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
