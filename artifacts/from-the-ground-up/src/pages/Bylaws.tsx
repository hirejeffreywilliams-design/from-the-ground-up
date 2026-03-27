import { motion } from "framer-motion";
import { FileText, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

interface BylawSection {
  title: string;
  content: string[];
}

const bylawSections: BylawSection[] = [
  {
    title: "Article I — Name and Purpose",
    content: [
      "Section 1.1 — Name: The name of this organization shall be \"From The Ground Up\" (hereinafter referred to as \"the Organization\").",
      "Section 1.2 — Purpose: The Organization is established exclusively for charitable and educational purposes within the meaning of Section 501(c)(3) of the Internal Revenue Code. Its primary mission is to empower individuals of all ages and backgrounds with hands-on trade skills in construction, electrical work, plumbing, carpentry, HVAC, and related fields — enhanced by artificial intelligence-driven learning tools — to build stronger futures, one skill at a time.",
      "Section 1.3 — Non-Discrimination: The Organization shall not discriminate on the basis of race, color, religion, sex, gender identity, sexual orientation, national origin, age, disability, veteran status, or any other protected class in its programs, activities, or governance.",
    ],
  },
  {
    title: "Article II — Membership",
    content: [
      "Section 2.1 — Members: The Organization shall have no formal membership class. The Board of Directors shall serve as the governing body of the Organization.",
      "Section 2.2 — Community Participants: Individuals enrolled in programs, volunteers, and donors are considered community participants but do not hold voting rights or governance authority unless appointed to the Board.",
    ],
  },
  {
    title: "Article III — Board of Directors",
    content: [
      "Section 3.1 — Authority: The affairs of the Organization shall be managed by a Board of Directors (the \"Board\"). The Board shall have full power to conduct, manage, and direct the business and affairs of the Organization.",
      "Section 3.2 — Composition: The Board shall consist of no fewer than three (3) and no more than fifteen (15) directors. The Board should reflect the diversity of the communities the Organization serves.",
      "Section 3.3 — Term of Office: Each director shall serve a term of three (3) years, with the possibility of serving up to two (2) consecutive terms. Terms shall be staggered to ensure continuity of leadership.",
      "Section 3.4 — Election: Directors shall be elected by majority vote of the existing Board. Nominations may be submitted by any current director or community stakeholder.",
      "Section 3.5 — Removal: A director may be removed with or without cause by a two-thirds (2/3) vote of the remaining directors at a duly called meeting.",
      "Section 3.6 — Vacancies: Vacancies on the Board may be filled by a majority vote of the remaining directors. A director elected to fill a vacancy shall serve for the unexpired term of their predecessor.",
    ],
  },
  {
    title: "Article IV — Officers",
    content: [
      "Section 4.1 — Officers: The officers of the Organization shall include a Chairperson, Vice Chairperson, Secretary, and Treasurer. Additional officers may be created by the Board as needed.",
      "Section 4.2 — Election and Term: Officers shall be elected by the Board from among its members at the annual meeting and shall serve a term of two (2) years.",
      "Section 4.3 — Chairperson: The Chairperson shall preside over all Board meetings, serve as the principal spokesperson for the Organization, and perform such other duties as the Board may assign.",
      "Section 4.4 — Vice Chairperson: The Vice Chairperson shall perform the duties of the Chairperson in their absence and assist in the overall governance of the Organization.",
      "Section 4.5 — Secretary: The Secretary shall maintain accurate records of all Board meetings, ensure proper notice of meetings, and maintain the Organization's official documents.",
      "Section 4.6 — Treasurer: The Treasurer shall oversee the Organization's financial affairs, including budgets, financial reporting, and ensuring compliance with all financial regulations.",
    ],
  },
  {
    title: "Article V — Meetings",
    content: [
      "Section 5.1 — Regular Meetings: The Board shall meet at least quarterly. The annual meeting shall be held during the first quarter of each fiscal year.",
      "Section 5.2 — Special Meetings: Special meetings may be called by the Chairperson or by written request of at least one-third (1/3) of the directors.",
      "Section 5.3 — Notice: Written notice of all meetings shall be provided to each director at least seven (7) days in advance, specifying the date, time, place, and agenda.",
      "Section 5.4 — Quorum: A majority of the directors currently in office shall constitute a quorum for the transaction of business.",
      "Section 5.5 — Voting: Each director shall have one vote. Decisions shall be made by majority vote of those present at a meeting at which a quorum exists, unless otherwise specified in these bylaws.",
      "Section 5.6 — Remote Participation: Directors may participate in meetings via telephone, video conference, or other electronic means, provided all participants can communicate with each other simultaneously.",
    ],
  },
  {
    title: "Article VI — Committees",
    content: [
      "Section 6.1 — Standing Committees: The Board may establish standing committees as needed, including but not limited to: Finance Committee, Program Committee, Fundraising Committee, and Governance Committee.",
      "Section 6.2 — Ad Hoc Committees: The Chairperson may appoint ad hoc committees for specific tasks or investigations.",
      "Section 6.3 — Committee Authority: Committees shall have advisory authority only and may not act on behalf of the Board unless specifically delegated such authority by Board resolution.",
    ],
  },
  {
    title: "Article VII — Financial Matters",
    content: [
      "Section 7.1 — Fiscal Year: The fiscal year of the Organization shall be from January 1 to December 31.",
      "Section 7.2 — Budget: The Board shall approve an annual budget prior to the beginning of each fiscal year.",
      "Section 7.3 — Financial Review: The Organization's financial statements shall be reviewed or audited annually by an independent accountant.",
      "Section 7.4 — Compensation: Directors shall serve without compensation but may be reimbursed for reasonable expenses incurred in the performance of their duties.",
      "Section 7.5 — Conflict of Interest: Any director or officer who has a financial, personal, or official interest in any matter pending before the Board shall disclose the nature of the interest and shall abstain from discussion and voting on the matter.",
    ],
  },
  {
    title: "Article VIII — Indemnification",
    content: [
      "Section 8.1 — The Organization shall indemnify any director, officer, employee, or agent of the Organization against expenses, including attorney fees, actually and necessarily incurred in connection with the defense of any action, suit, or proceeding in which they are made a party by reason of being or having been a director, officer, employee, or agent of the Organization.",
    ],
  },
  {
    title: "Article IX — Amendments",
    content: [
      "Section 9.1 — These bylaws may be amended, repealed, or altered, in whole or in part, by a two-thirds (2/3) vote of the Board at any duly called meeting, provided that written notice of the proposed amendment has been given to all directors at least fourteen (14) days prior to the meeting.",
    ],
  },
  {
    title: "Article X — Dissolution",
    content: [
      "Section 10.1 — Upon dissolution of the Organization, the Board shall, after paying or making provision for the payment of all liabilities of the Organization, dispose of all assets of the Organization exclusively for the purposes of the Organization or to organizations organized and operated exclusively for charitable, educational, or scientific purposes as shall at the time qualify as an exempt organization under Section 501(c)(3) of the Internal Revenue Code.",
    ],
  },
];

function BylawAccordion({ section, index }: { section: BylawSection; index: number }) {
  const [isOpen, setIsOpen] = useState(index === 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="glass-panel border border-white/20 overflow-hidden"
      style={{ borderRadius: '16px' }}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-8 text-left hover:bg-white/5 transition-colors"
      >
        <h3 className="text-xl md:text-2xl font-display font-black text-foreground uppercase tracking-tight">{section.title}</h3>
        {isOpen ? (
          <ChevronUp className="w-6 h-6 text-primary flex-shrink-0" />
        ) : (
          <ChevronDown className="w-6 h-6 text-foreground/50 flex-shrink-0" />
        )}
      </button>
      {isOpen && (
        <div className="px-8 pb-8 space-y-6">
          {section.content.map((paragraph, i) => (
            <p key={i} className="text-foreground/80 text-lg font-medium leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      )}
    </motion.div>
  );
}

export default function Bylaws() {
  return (
    <div className="pt-32 pb-20 min-h-screen page-gradient">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 py-2 px-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-foreground font-bold uppercase tracking-widest text-xs mb-8">
            Governance
          </div>
          
          <FileText className="w-20 h-20 text-primary mx-auto mb-8 drop-shadow-xl" />
          
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-black text-foreground mb-8 uppercase tracking-tight">
            Organizational <br/><span className="text-primary">Bylaws</span>
          </h1>
          <p className="text-xl text-foreground/80 max-w-3xl mx-auto font-medium leading-relaxed">
            Transparency is part of our foundation. Below are the bylaws that govern From The Ground Up,
            ensuring accountability, integrity, and commitment to our mission.
          </p>
          <div className="mt-8 inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-sm font-bold uppercase tracking-wider text-foreground">
            <FileText size={16} className="text-primary" />
            Last amended: January 2026
          </div>
        </motion.div>

        <div className="space-y-6 mb-32">
          {bylawSections.map((section, index) => (
            <BylawAccordion key={section.title} section={section} index={index} />
          ))}
        </div>

        <div className="p-6 sm:p-12 md:p-16 bg-foreground text-background shadow-2xl text-center relative overflow-hidden" style={{ borderRadius: '16px 40px 16px 40px' }}>
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          <h3 className="text-3xl md:text-4xl font-display font-black text-white mb-6 uppercase tracking-tight relative z-10">Questions About Our Governance?</h3>
          <p className="text-white/70 text-lg font-medium mb-10 max-w-2xl mx-auto relative z-10">
            We believe in complete transparency. If you have questions about our bylaws or organizational structure,
            don't hesitate to reach out.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-primary text-white rounded-xl font-black uppercase tracking-widest hover:bg-primary/90 hover:scale-105 transition-all shadow-xl relative z-10"
            style={{ borderRadius: '12px 32px 12px 32px' }}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}