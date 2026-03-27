import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useSubmitContact } from "@/hooks/use-api-hooks";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
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
        title: "Message Sent Successfully",
        description: "We'll be in touch shortly.",
      });
      reset();
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      toast({
        title: "Submission Error",
        description: "Failed to send message. Please try again or call us.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="pt-32 pb-20 min-h-screen page-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 py-2 px-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-foreground font-bold uppercase tracking-widest text-xs mb-8">
            Get In Touch
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-black text-foreground mb-6 uppercase tracking-tight">Let's Build <span className="text-primary">Together</span></h1>
          <p className="text-xl md:text-2xl text-foreground/80 font-medium">
            Ready to enroll, volunteer, or partner with us? Our team is standing by.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Contact Info */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-foreground text-background p-10 md:p-14 relative overflow-hidden shadow-2xl" style={{ borderRadius: '16px 64px 16px 64px' }}>
              <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
              
              <h3 className="text-3xl font-display font-black uppercase tracking-tight mb-12 relative z-10 text-white">Contact Info</h3>
              
              <div className="space-y-10 relative z-10">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 text-primary border border-white/10 transform -rotate-3">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-wider text-sm text-white/50 mb-2">Our Workshop</h4>
                    <p className="text-xl text-white font-medium leading-relaxed">123 Builders Way<br/>Foundation City, FC 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 text-primary border border-white/10 transform rotate-3">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-wider text-sm text-white/50 mb-2">Phone</h4>
                    <p className="text-xl text-white font-medium leading-relaxed">(555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 text-primary border border-white/10 transform -rotate-3">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-wider text-sm text-white/50 mb-2">Email</h4>
                    <p className="text-xl text-white font-medium leading-relaxed">hello@fromthegroundup.org</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center flex-shrink-0 text-primary border border-white/10 transform rotate-3">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold uppercase tracking-wider text-sm text-white/50 mb-2">Hours</h4>
                    <p className="text-xl text-white font-medium leading-relaxed">Mon-Fri: 8am - 6pm<br/>Sat: 9am - 2pm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-10 md:p-16 border border-white/20 shadow-2xl relative" style={{ borderRadius: '64px 16px 64px 16px' }}>
              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-20"
                >
                  <div className="w-24 h-24 bg-primary text-white rounded-3xl flex items-center justify-center mx-auto mb-8 transform rotate-12 shadow-xl">
                    <CheckCircle2 size={48} />
                  </div>
                  <h3 className="text-4xl font-display font-black uppercase tracking-tight mb-6">Message Received</h3>
                  <p className="text-xl text-foreground/80 font-medium mb-12">Thank you for reaching out. Our team is reviewing your message and will be in touch shortly.</p>
                  <button 
                    onClick={() => setIsSuccess(false)} 
                    className="px-8 py-4 bg-foreground text-background font-black uppercase tracking-widest text-sm hover:bg-primary hover:text-white transition-all"
                    style={{ borderRadius: '8px 24px 8px 24px' }}
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-xs font-black uppercase tracking-widest text-foreground/70">Full Name *</label>
                      <input 
                        {...register("fullName")}
                        className={`w-full px-6 py-4 bg-white/50 backdrop-blur-sm border-2 ${errors.fullName ? 'border-destructive' : 'border-white/40 focus:border-primary'} text-foreground font-medium placeholder:text-foreground/30 focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all rounded-xl`}
                        placeholder="Jane Doe"
                      />
                      {errors.fullName && <p className="text-destructive text-sm font-bold mt-2">{errors.fullName.message}</p>}
                    </div>
                    
                    <div className="space-y-3">
                      <label className="text-xs font-black uppercase tracking-widest text-foreground/70">Email Address *</label>
                      <input 
                        {...register("email")}
                        type="email"
                        className={`w-full px-6 py-4 bg-white/50 backdrop-blur-sm border-2 ${errors.email ? 'border-destructive' : 'border-white/40 focus:border-primary'} text-foreground font-medium placeholder:text-foreground/30 focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all rounded-xl`}
                        placeholder="jane@example.com"
                      />
                      {errors.email && <p className="text-destructive text-sm font-bold mt-2">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-xs font-black uppercase tracking-widest text-foreground/70">Phone Number</label>
                      <input 
                        {...register("phone")}
                        className="w-full px-6 py-4 bg-white/50 backdrop-blur-sm border-2 border-white/40 focus:border-primary text-foreground font-medium placeholder:text-foreground/30 focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all rounded-xl"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    
                    <div className="space-y-3">
                      <label className="text-xs font-black uppercase tracking-widest text-foreground/70">Inquiry Type *</label>
                      <select 
                        {...register("type")}
                        className="w-full px-6 py-4 bg-white/50 backdrop-blur-sm border-2 border-white/40 focus:border-primary text-foreground font-medium focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all appearance-none rounded-xl"
                      >
                        <option value="general">General Inquiry</option>
                        <option value="enrollment">Program Enrollment</option>
                        <option value="volunteer">Volunteer</option>
                        <option value="donate">Donation / Sponsorship</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-foreground/70">Program of Interest (Optional)</label>
                    <input 
                      {...register("programInterest")}
                      className="w-full px-6 py-4 bg-white/50 backdrop-blur-sm border-2 border-white/40 focus:border-primary text-foreground font-medium placeholder:text-foreground/30 focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all rounded-xl"
                      placeholder="e.g. Electrical Systems"
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-widest text-foreground/70">Your Message</label>
                    <textarea 
                      {...register("message")}
                      rows={5}
                      className="w-full px-6 py-4 bg-white/50 backdrop-blur-sm border-2 border-white/40 focus:border-primary text-foreground font-medium placeholder:text-foreground/30 focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all resize-none rounded-xl"
                      placeholder="How can we help you build your future?"
                    />
                  </div>

                  <button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full py-6 bg-primary text-white font-black uppercase tracking-widest text-lg hover:bg-primary/90 hover:scale-[1.02] transition-all duration-300 shadow-xl flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                    style={{ borderRadius: '12px 32px 12px 32px' }}
                  >
                    {isSubmitting ? "Transmitting..." : "Send Transmission"} <ArrowRight size={20} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}