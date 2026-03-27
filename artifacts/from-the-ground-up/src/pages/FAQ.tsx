import { motion } from "framer-motion";
import { HelpCircle, ChevronDown, ChevronUp, MessageCircle } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    category: "Programs",
    question: "Who can enroll in From The Ground Up programs?",
    answer: "Anyone! Our programs are designed for people of all ages, backgrounds, and experience levels. Whether you're a high school student exploring career options, an adult looking to switch careers, or a retiree wanting to learn a new skill, there's a place for you here.",
  },
  {
    category: "Programs",
    question: "Do I need any prior experience in the trades?",
    answer: "No prior experience is required for our beginner-level programs. We start from the basics and build your skills from the ground up. Some advanced programs may recommend foundational knowledge, which we'll clearly note in the program description.",
  },
  {
    category: "Programs",
    question: "How long are the programs?",
    answer: "Program lengths vary from 8 to 16 weeks depending on the trade. Our shortest program (AI in the Trades) is 8 weeks, while our most comprehensive (Electrical Systems) is 16 weeks. All programs include both classroom instruction and hands-on lab time.",
  },
  {
    category: "Programs",
    question: "What is the AI component of the training?",
    answer: "We integrate artificial intelligence tools throughout our curriculum. This includes AI-powered simulations for practicing techniques safely, virtual reality walkthroughs of complex projects, smart progress tracking that adapts to your learning pace, and AI diagnostic tools used in the real-world trades. Our dedicated 'AI in the Trades' program goes even deeper into these technologies.",
  },
  {
    category: "Programs",
    question: "Will I receive a certification upon completion?",
    answer: "Yes! Upon successful completion of any program, you'll receive a From The Ground Up certificate of completion. Additionally, several of our programs prepare you for nationally recognized industry certifications, and we provide guidance and support for those exams.",
  },
  {
    category: "Cost & Financial Aid",
    question: "How much do the programs cost?",
    answer: "As a nonprofit, we strive to keep our programs as affordable as possible. Costs vary by program, but scholarships and financial assistance are available for qualifying students. No one is turned away for inability to pay — we believe trade education should be accessible to everyone.",
  },
  {
    category: "Cost & Financial Aid",
    question: "Are scholarships available?",
    answer: "Absolutely. Thanks to our generous donors and community partners, we offer partial and full scholarships based on financial need. You can apply for a scholarship as part of your enrollment process, or contact us directly to learn more.",
  },
  {
    category: "Getting Involved",
    question: "How can I volunteer with From The Ground Up?",
    answer: "We welcome volunteers in many capacities: experienced tradespeople who can mentor students, professionals who can help with workshops or career guidance, and general volunteers for events and community outreach. Visit our Contact page and select 'Volunteer' to get started.",
  },
  {
    category: "Getting Involved",
    question: "Can my company partner with From The Ground Up?",
    answer: "We actively seek partnerships with construction companies, electrical contractors, plumbing firms, technology companies, and other organizations. Partners can sponsor programs, provide apprenticeship opportunities, donate equipment, or send employees as guest instructors. Contact us to discuss partnership opportunities.",
  },
  {
    category: "Getting Involved",
    question: "How can I donate?",
    answer: "You can donate through our Donate page, which offers several giving tiers. We also accept in-kind donations of tools, equipment, and materials. As a registered 501(c)(3) nonprofit, all donations are tax-deductible.",
  },
  {
    category: "About Us",
    question: "Why is it called 'From The Ground Up'?",
    answer: "The name honors our founder Jeffrey Williams' father, Jeffrey Williams Sr., who was a skilled tradesman. He always said that everything meaningful starts 'from the ground up.' This philosophy — that strong foundations lead to beautiful outcomes — is at the heart of everything we do.",
  },
  {
    category: "About Us",
    question: "What does the logo represent?",
    answer: "Our logo features a solid concrete letter 'J' (for Jeffrey, both father and son) with a whimsical, crayon-drawn rose growing from it. The concrete represents the strength and durability of the trades, while the childlike rose symbolizes growth, hope, and the beautiful things that can emerge from a strong foundation.",
  },
];

const categories = [...new Set(faqs.map(f => f.category))];

function FAQAccordionItem({ faq, index }: { faq: FAQItem; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="glass-panel border border-white/20 overflow-hidden mb-4"
      style={{ borderRadius: '16px' }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-start justify-between p-8 text-left transition-colors ${isOpen ? 'bg-primary/5' : 'hover:bg-white/5'}`}
      >
        <h3 className={`text-xl font-display font-black uppercase tracking-tight pr-8 ${isOpen ? 'text-primary' : 'text-foreground'}`}>
          {faq.question}
        </h3>
        {isOpen ? (
          <ChevronUp className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
        ) : (
          <ChevronDown className="w-6 h-6 text-foreground/50 flex-shrink-0 mt-1" />
        )}
      </button>
      {isOpen && (
        <div className="px-8 pb-8 pt-4 bg-primary/5">
          <p className="text-foreground/80 text-lg font-medium leading-relaxed border-l-4 border-primary pl-6">
            {faq.answer}
          </p>
        </div>
      )}
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <div className="pt-32 pb-20 min-h-screen page-gradient">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 py-2 px-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-foreground font-bold uppercase tracking-widest text-xs mb-8">
            Help Center
          </div>
          
          <HelpCircle className="w-20 h-20 text-primary mx-auto mb-8 drop-shadow-xl" />
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-black text-foreground mb-8 uppercase tracking-tight">
            Frequently Asked <br/><span className="text-primary">Questions</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 max-w-3xl mx-auto font-medium leading-relaxed">
            Got questions? We've got answers. If you don't find what you're looking for below,
            don't hesitate to reach out.
          </p>
        </motion.div>

        <div className="space-y-20 mb-32">
          {categories.map((category) => (
            <div key={category}>
              <div className="flex items-center gap-6 mb-10">
                <h2 className="text-3xl font-display font-black text-foreground uppercase tracking-tight">
                  {category}
                </h2>
                <div className="h-px bg-foreground/10 flex-grow"></div>
              </div>
              <div className="space-y-4">
                {faqs
                  .filter(f => f.category === category)
                  .map((faq, i) => (
                    <FAQAccordionItem key={faq.question} faq={faq} index={i} />
                  ))}
              </div>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-6 sm:p-12 md:p-20 bg-foreground text-background shadow-2xl text-center relative overflow-hidden"
          style={{ borderRadius: '24px 40px 24px 40px' }}
        >
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2"></div>
          
          <MessageCircle className="w-16 h-16 text-primary mx-auto mb-8 relative z-10" />
          <h3 className="text-4xl font-display font-black text-white mb-6 uppercase tracking-tight relative z-10">Still Have Questions?</h3>
          <p className="text-white/70 text-xl font-medium mb-10 max-w-2xl mx-auto relative z-10">
            Our team is here to help. Reach out and we'll get back to you within 24 hours.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-3 px-12 py-6 bg-primary text-white rounded-xl font-black uppercase tracking-widest text-lg hover:bg-primary/90 hover:scale-105 transition-all shadow-xl relative z-10"
            style={{ borderRadius: '12px 32px 12px 32px' }}
          >
            Contact Support
          </Link>
        </motion.div>
      </div>
    </div>
  );
}