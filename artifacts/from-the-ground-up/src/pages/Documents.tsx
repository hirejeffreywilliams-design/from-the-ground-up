import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  FileText, Shield, Scale, Users, DollarSign, Heart,
  ChevronDown, ChevronUp, Landmark, BookOpen, AlertTriangle,
  Archive, Award, ClipboardCheck, Printer, Eye, HandHelping,
  HardHat, Camera, Handshake, Mail, BarChart3
} from "lucide-react";
import { useState } from "react";

function DocSection({ title, icon: Icon, id, children, defaultOpen = false }: { title: string; icon: any; id: string; children: any; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div id={id} className="border border-border rounded-2xl overflow-hidden bg-card scroll-mt-24">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-6 md:p-8 text-left hover:bg-muted/30 transition-colors">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
            <Icon size={24} />
          </div>
          <h2 className="text-xl md:text-2xl font-display font-bold text-foreground">{title}</h2>
        </div>
        {open ? <ChevronUp size={20} className="text-muted-foreground" /> : <ChevronDown size={20} className="text-muted-foreground" />}
      </button>
      {open && <div className="px-6 md:px-8 pb-6 md:pb-8 prose prose-sm max-w-none text-muted-foreground leading-relaxed">{children}</div>}
    </div>
  );
}

export default function Documents() {
  const docs = [
    { id: "articles", title: "Articles of Incorporation", icon: Landmark },
    { id: "conflict", title: "Conflict of Interest Policy", icon: Shield },
    { id: "whistleblower", title: "Whistleblower Protection Policy", icon: AlertTriangle },
    { id: "retention", title: "Document Retention & Destruction Policy", icon: Archive },
    { id: "compensation", title: "Executive Compensation Policy", icon: DollarSign },
    { id: "ethics", title: "Code of Ethics & Conduct", icon: Award },
    { id: "nondiscrimination", title: "Nondiscrimination Policy", icon: Heart },
    { id: "gift", title: "Gift Acceptance Policy", icon: Heart },
    { id: "financial", title: "Financial Policies & Procedures", icon: DollarSign },
    { id: "minutes", title: "Organizational Meeting Minutes Template", icon: ClipboardCheck },
    { id: "narrative", title: "IRS Form 1023 Narrative Description", icon: FileText },
    { id: "projections", title: "3-Year Financial Projections", icon: DollarSign },
    { id: "volunteer-agreement", title: "Volunteer Agreement & Waiver", icon: HandHelping },
    { id: "safety-waiver", title: "Safety & Liability Waiver", icon: HardHat },
    { id: "media-release", title: "Media & Photo Release Form", icon: Camera },
    { id: "board-agenda", title: "Board Meeting Agenda Template", icon: ClipboardCheck },
    { id: "grant-template", title: "Grant Proposal Template", icon: DollarSign },
    { id: "annual-report", title: "Annual Report Template", icon: BarChart3 },
    { id: "donor-letter", title: "Donor Acknowledgment Letter", icon: Mail },
    { id: "partnership-mou", title: "Partnership / MOU Agreement", icon: Handshake },
  ];

  return (
    <div className="min-h-screen page-gradient">
      <section className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-bold mb-6">
              <FileText size={16} />
              ORGANIZATIONAL DOCUMENTS
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
              Formation <span className="text-primary">Documents</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              All the legal documents, policies, and templates needed to establish
              From The Ground Up as a 501(c)(3) nonprofit in Washington, DC.
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
              <Eye size={14} />
              <span>These are draft documents. Have an attorney review before filing.</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-8 bg-card border-y border-border/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-sm font-bold text-foreground uppercase tracking-wider mb-4">Quick Navigation</h3>
          <div className="flex flex-wrap gap-2">
            {docs.map((doc) => (
              <a
                key={doc.id}
                href={`#${doc.id}`}
                className="inline-flex items-center gap-1 px-3 py-2 bg-muted/50 rounded-lg text-sm font-medium text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
              >
                <doc.icon size={14} /> {doc.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">

          <DocSection title="Articles of Incorporation" icon={Landmark} id="articles" defaultOpen={true}>
            <p className="font-bold text-foreground text-lg mb-4">ARTICLES OF INCORPORATION OF FROM THE GROUND UP</p>
            <p className="mb-2">A District of Columbia Nonprofit Corporation</p>
            <div className="space-y-6 mt-6">
              <div>
                <p className="font-bold text-foreground">ARTICLE I — NAME</p>
                <p>The name of this corporation shall be "From The Ground Up" (hereinafter referred to as the "Corporation").</p>
              </div>
              <div>
                <p className="font-bold text-foreground">ARTICLE II — DURATION</p>
                <p>The Corporation shall have perpetual existence.</p>
              </div>
              <div>
                <p className="font-bold text-foreground">ARTICLE III — PURPOSE</p>
                <p>The Corporation is organized exclusively for charitable and educational purposes within the meaning of Section 501(c)(3) of the Internal Revenue Code of 1986, as amended (the "Code"). Specifically, the Corporation's purposes include:</p>
                <ol className="list-decimal pl-6 space-y-2 mt-2">
                  <li>To empower individuals of all ages and backgrounds with hands-on trade skills in construction, electrical work, plumbing, carpentry, HVAC systems, and related trades, enhanced by artificial intelligence-driven learning tools;</li>
                  <li>To provide vocational education, job training, workforce development programs, and apprenticeship opportunities to underserved communities;</li>
                  <li>To advance education in the skilled trades by developing innovative curricula, AI-powered training technologies, and industry-recognized certification programs;</li>
                  <li>To reduce poverty and unemployment by equipping individuals with marketable trade skills and connecting them with employment opportunities;</li>
                  <li>To engage in any and all other lawful activities incidental to the foregoing purposes, provided that such activities are permitted to be carried on by a corporation exempt from federal income tax under Section 501(c)(3) of the Code.</li>
                </ol>
              </div>
              <div>
                <p className="font-bold text-foreground">ARTICLE IV — NONPROFIT STATUS</p>
                <p>The Corporation is not organized for the private gain of any person. The Corporation is organized under the District of Columbia Nonprofit Corporation Act. No part of the net earnings of the Corporation shall inure to the benefit of, or be distributable to, its directors, officers, members, or other private persons, except that the Corporation shall be authorized and empowered to pay reasonable compensation for services rendered and to make payments and distributions in furtherance of the purposes set forth in Article III.</p>
              </div>
              <div>
                <p className="font-bold text-foreground">ARTICLE V — POLITICAL ACTIVITIES LIMITATION</p>
                <p>No substantial part of the activities of the Corporation shall be the carrying on of propaganda, or otherwise attempting to influence legislation, and the Corporation shall not participate in, or intervene in (including the publishing or distribution of statements) any political campaign on behalf of (or in opposition to) any candidate for public office.</p>
              </div>
              <div>
                <p className="font-bold text-foreground">ARTICLE VI — DISSOLUTION</p>
                <p>Upon the dissolution of the Corporation, assets shall be distributed for one or more exempt purposes within the meaning of Section 501(c)(3) of the Internal Revenue Code, or the corresponding section of any future federal tax code, or shall be distributed to the federal government, or to a state or local government, for a public purpose. Any such assets not so disposed of shall be disposed of by a court of competent jurisdiction of the county in which the principal office of the Corporation is then located, exclusively for such purposes or to such organization or organizations, as said court shall determine, which are organized and operated exclusively for such purposes.</p>
              </div>
              <div>
                <p className="font-bold text-foreground">ARTICLE VII — REGISTERED AGENT</p>
                <p>The initial registered agent of the Corporation is: [INSERT NAME]</p>
                <p>The address of the registered agent in the District of Columbia is: [INSERT DC ADDRESS]</p>
              </div>
              <div>
                <p className="font-bold text-foreground">ARTICLE VIII — INCORPORATOR</p>
                <p>The name and address of the incorporator is:</p>
                <p>Jeffrey Williams<br />[INSERT ADDRESS]</p>
              </div>
              <div>
                <p className="font-bold text-foreground">ARTICLE IX — BOARD OF DIRECTORS</p>
                <p>The Corporation shall be governed by a Board of Directors. The number of directors shall be fixed by the Bylaws but shall not be fewer than three (3). The names and addresses of the initial directors are:</p>
                <ol className="list-decimal pl-6 space-y-1 mt-2">
                  <li>Jeffrey Williams — Chairperson — [ADDRESS]</li>
                  <li>[Director Name] — [ADDRESS]</li>
                  <li>[Director Name] — [ADDRESS]</li>
                </ol>
              </div>
              <div>
                <p className="font-bold text-foreground">ARTICLE X — MEMBERS</p>
                <p>The Corporation shall have no members within the meaning of the District of Columbia Nonprofit Corporation Act.</p>
              </div>
              <div>
                <p className="font-bold text-foreground">ARTICLE XI — AMENDMENTS</p>
                <p>These Articles of Incorporation may be amended in the manner provided by the District of Columbia Nonprofit Corporation Act, provided that no amendment shall be made that would cause the Corporation to cease to qualify for exemption from federal income tax under Section 501(c)(3) of the Code.</p>
              </div>
              <div className="mt-8 pt-4 border-t border-border">
                <p>IN WITNESS WHEREOF, the undersigned incorporator has executed these Articles of Incorporation this ____ day of __________, 2026.</p>
                <div className="mt-6">
                  <p>_______________________________</p>
                  <p>Jeffrey Williams, Incorporator</p>
                </div>
              </div>
            </div>
          </DocSection>

          <DocSection title="Conflict of Interest Policy" icon={Shield} id="conflict">
            <p className="font-bold text-foreground text-lg mb-4">CONFLICT OF INTEREST POLICY — FROM THE GROUND UP</p>
            <div className="space-y-6">
              <div>
                <p className="font-bold text-foreground">ARTICLE I — PURPOSE</p>
                <p>The purpose of this Conflict of Interest Policy is to protect the interests of From The Ground Up (the "Organization") when it is contemplating entering into a transaction or arrangement that might benefit the private interest of an officer, director, or key employee of the Organization. This policy is intended to supplement but not replace any applicable state and federal laws governing conflicts of interest applicable to nonprofit and charitable organizations.</p>
              </div>
              <div>
                <p className="font-bold text-foreground">ARTICLE II — DEFINITIONS</p>
                <p><strong>Interested Person:</strong> Any director, principal officer, or member of a committee with governing board-delegated powers, who has a direct or indirect financial interest, as defined below.</p>
                <p className="mt-2"><strong>Financial Interest:</strong> A person has a financial interest if the person has, directly or indirectly, through business, investment, or family:</p>
                <ol className="list-alpha pl-6 space-y-1 mt-2">
                  <li>An ownership or investment interest in any entity with which the Organization has a transaction or arrangement;</li>
                  <li>A compensation arrangement with the Organization or with any entity or individual with which the Organization has a transaction or arrangement; or</li>
                  <li>A potential ownership or investment interest in, or compensation arrangement with, any entity or individual with which the Organization is negotiating a transaction or arrangement.</li>
                </ol>
                <p className="mt-2">Compensation includes direct and indirect remuneration as well as gifts or favors that are not insubstantial.</p>
              </div>
              <div>
                <p className="font-bold text-foreground">ARTICLE III — PROCEDURES</p>
                <p><strong>3.1 Duty to Disclose:</strong> In connection with any actual or possible conflict of interest, an interested person must disclose the existence of the financial interest and be given the opportunity to disclose all material facts to the directors and members of committees with governing board-delegated powers considering the proposed transaction or arrangement.</p>
                <p className="mt-2"><strong>3.2 Determining Whether a Conflict Exists:</strong> After disclosure of the financial interest and all material facts, and after any discussion with the interested person, the interested person shall leave the governing board or committee meeting while the determination of a conflict of interest is discussed and voted upon. The remaining board or committee members shall decide if a conflict of interest exists.</p>
                <p className="mt-2"><strong>3.3 Procedures for Addressing the Conflict:</strong></p>
                <ol className="list-alpha pl-6 space-y-1 mt-2">
                  <li>An interested person may make a presentation at the governing board or committee meeting, but after the presentation, the interested person shall leave the meeting during the discussion of, and the vote on, the transaction or arrangement involving the possible conflict of interest.</li>
                  <li>The chairperson of the governing board or committee shall, if appropriate, appoint a disinterested person or committee to investigate alternatives to the proposed transaction or arrangement.</li>
                  <li>After exercising due diligence, the governing board or committee shall determine whether the Organization can obtain with reasonable efforts a more advantageous transaction or arrangement from a person or entity that would not give rise to a conflict of interest.</li>
                  <li>If a more advantageous transaction or arrangement is not reasonably possible under circumstances not producing a conflict of interest, the governing board or committee shall determine by a majority vote of the disinterested directors whether the transaction or arrangement is in the Organization's best interest, for its own benefit, and whether it is fair and reasonable. In conformity with the above determination it shall make its decision as to whether to enter into the transaction or arrangement.</li>
                </ol>
              </div>
              <div>
                <p className="font-bold text-foreground">ARTICLE IV — RECORDS OF PROCEEDINGS</p>
                <p>The minutes of the governing board and all committees with board-delegated powers shall contain:</p>
                <ol className="list-alpha pl-6 space-y-1 mt-2">
                  <li>The names of the persons who disclosed or otherwise were found to have a financial interest in connection with an actual or possible conflict of interest, the nature of the financial interest, any action taken to determine whether a conflict of interest was present, and the governing board's or committee's decision as to whether a conflict of interest in fact existed.</li>
                  <li>The names of the persons who were present for discussions and votes relating to the transaction or arrangement, the content of the discussion, including any alternatives to the proposed transaction or arrangement, and a record of any votes taken in connection with the proceedings.</li>
                </ol>
              </div>
              <div>
                <p className="font-bold text-foreground">ARTICLE V — ANNUAL STATEMENTS</p>
                <p>Each director, principal officer, and member of a committee with governing board-delegated powers shall annually sign a statement which affirms such person:</p>
                <ol className="list-alpha pl-6 space-y-1 mt-2">
                  <li>Has received a copy of the Conflict of Interest Policy;</li>
                  <li>Has read and understands the policy;</li>
                  <li>Has agreed to comply with the policy; and</li>
                  <li>Understands the Organization is charitable and in order to maintain its federal tax exemption it must engage primarily in activities which accomplish one or more of its tax-exempt purposes.</li>
                </ol>
              </div>
              <div>
                <p className="font-bold text-foreground">ARTICLE VI — PERIODIC REVIEWS</p>
                <p>To ensure the Organization operates in a manner consistent with charitable purposes and does not engage in activities that could jeopardize its tax-exempt status, periodic reviews shall be conducted. The periodic reviews shall, at a minimum, include the following subjects:</p>
                <ol className="list-alpha pl-6 space-y-1 mt-2">
                  <li>Whether compensation arrangements and benefits are reasonable, based on competent survey information, and the result of arm's length bargaining;</li>
                  <li>Whether partnerships, joint ventures, and arrangements with management organizations conform to the Organization's written policies, are properly recorded, reflect reasonable investment or payments for goods and services, further charitable purposes and do not result in inurement, impermissible private benefit, or in an excess benefit transaction.</li>
                </ol>
              </div>
            </div>
          </DocSection>

          <DocSection title="Whistleblower Protection Policy" icon={AlertTriangle} id="whistleblower">
            <p className="font-bold text-foreground text-lg mb-4">WHISTLEBLOWER PROTECTION POLICY — FROM THE GROUND UP</p>
            <div className="space-y-6">
              <div>
                <p className="font-bold text-foreground">PURPOSE</p>
                <p>From The Ground Up (the "Organization") requires its directors, officers, employees, and volunteers to observe high standards of business and personal ethics in the conduct of their duties and responsibilities. This Whistleblower Policy is intended to encourage and enable employees and others to raise serious concerns internally so that the Organization can address and correct inappropriate conduct and actions.</p>
              </div>
              <div>
                <p className="font-bold text-foreground">REPORTING RESPONSIBILITY</p>
                <p>Each director, officer, employee, and volunteer of the Organization has an obligation to report in good faith any known or suspected violation of the Organization's policies, including but not limited to:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>Theft, fraud, or financial irregularities</li>
                  <li>Misuse of Organization resources or funds</li>
                  <li>Fraudulent financial reporting</li>
                  <li>Violations of the Organization's Conflict of Interest Policy</li>
                  <li>Violations of local, state, or federal law</li>
                  <li>Retaliation against whistleblowers</li>
                  <li>Dangerous or unsafe working conditions</li>
                  <li>Discrimination, harassment, or hostile work environment</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-foreground">NO RETALIATION</p>
                <p>No director, officer, employee, or volunteer who in good faith reports a violation shall suffer harassment, retaliation, or adverse employment consequence. Any person who retaliates against someone who has reported a violation in good faith is subject to discipline up to and including termination of employment or removal from the Board of Directors. This Whistleblower Policy is intended to encourage and enable employees and others to raise serious concerns within the Organization prior to seeking resolution outside the Organization.</p>
              </div>
              <div>
                <p className="font-bold text-foreground">REPORTING PROCEDURE</p>
                <p>Reports should be made to the Board Chairperson. If the report involves the Board Chairperson, reports should be made to the Vice Chairperson or another Board officer. Reports may be made verbally or in writing and may be made anonymously, although anonymous reports are more difficult to investigate. Reports should include:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>A description of the violation or suspected violation</li>
                  <li>The date(s) and location(s) of the alleged violation</li>
                  <li>The names of those involved, if known</li>
                  <li>Any evidence or documentation supporting the report</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-foreground">INVESTIGATION</p>
                <p>All reports will be promptly investigated, and appropriate corrective action will be taken if warranted by the investigation. The Organization will maintain confidentiality to the extent possible, consistent with the need to conduct an adequate investigation. The Board Chairperson (or designee) shall maintain a log of all complaints received, tracking their receipt, investigation, and resolution.</p>
              </div>
              <div>
                <p className="font-bold text-foreground">ACTING IN GOOD FAITH</p>
                <p>Anyone reporting a violation must act in good faith and have reasonable grounds for believing the information disclosed indicates a violation. Any allegations that prove to have been made maliciously or knowingly to be false will be viewed as a serious disciplinary offense.</p>
              </div>
            </div>
          </DocSection>

          <DocSection title="Document Retention & Destruction Policy" icon={Archive} id="retention">
            <p className="font-bold text-foreground text-lg mb-4">DOCUMENT RETENTION AND DESTRUCTION POLICY — FROM THE GROUND UP</p>
            <div className="space-y-6">
              <div>
                <p className="font-bold text-foreground">PURPOSE</p>
                <p>This policy establishes guidelines for the retention and destruction of documents and records of From The Ground Up in compliance with the Sarbanes-Oxley Act and other applicable laws. This policy covers all records and documents, regardless of physical form (paper, electronic, audio, video).</p>
              </div>
              <div>
                <p className="font-bold text-foreground">RETENTION SCHEDULE</p>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm border border-border">
                    <thead className="bg-muted/30">
                      <tr>
                        <th className="p-3 text-left font-bold text-foreground border-b border-border">Document Type</th>
                        <th className="p-3 text-left font-bold text-foreground border-b border-border">Retention Period</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Articles of Incorporation", "Permanent"],
                        ["Bylaws and amendments", "Permanent"],
                        ["IRS determination letter", "Permanent"],
                        ["IRS Form 1023 application", "Permanent"],
                        ["Board meeting minutes", "Permanent"],
                        ["Tax returns (Form 990)", "Permanent"],
                        ["Audit reports", "Permanent"],
                        ["Legal correspondence", "Permanent"],
                        ["Contracts and agreements", "7 years after expiration"],
                        ["Employee personnel files", "7 years after separation"],
                        ["Payroll records", "7 years"],
                        ["Bank statements", "7 years"],
                        ["Accounts payable/receivable", "7 years"],
                        ["Grant records", "7 years after completion"],
                        ["Donation records", "7 years"],
                        ["Insurance policies", "7 years after expiration"],
                        ["General correspondence", "3 years"],
                        ["Program records", "5 years after completion"],
                        ["Student/participant records", "7 years after completion"],
                        ["Press releases and publications", "5 years"],
                      ].map(([doc, period]) => (
                        <tr key={doc} className="border-b border-border hover:bg-muted/10">
                          <td className="p-3">{doc}</td>
                          <td className="p-3 font-medium">{period}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              <div>
                <p className="font-bold text-foreground">ELECTRONIC DOCUMENTS</p>
                <p>Electronic documents, including emails, are subject to the same retention requirements as paper documents. The Organization shall maintain secure, backed-up electronic storage systems. Electronic documents shall be organized and named consistently to allow easy retrieval.</p>
              </div>
              <div>
                <p className="font-bold text-foreground">DESTRUCTION</p>
                <p>Documents that have met their retention period may be destroyed. Destruction of paper documents must be done by shredding. Electronic documents must be permanently deleted, including from backups where feasible. No documents shall be destroyed if they are relevant to any pending or anticipated litigation, audit, or investigation.</p>
              </div>
              <div>
                <p className="font-bold text-foreground">COMPLIANCE</p>
                <p>Failure to comply with this policy may result in disciplinary action. The Secretary of the Board shall be responsible for overseeing compliance with this policy and maintaining the retention schedule.</p>
              </div>
            </div>
          </DocSection>

          <DocSection title="Executive Compensation Policy" icon={DollarSign} id="compensation">
            <p className="font-bold text-foreground text-lg mb-4">EXECUTIVE COMPENSATION POLICY — FROM THE GROUND UP</p>
            <div className="space-y-6">
              <div>
                <p className="font-bold text-foreground">PURPOSE</p>
                <p>This policy establishes the process by which From The Ground Up (the "Organization") sets and reviews compensation for its Executive Director, officers, and key employees to ensure all compensation is reasonable, based on comparable data, and in compliance with IRS intermediate sanctions rules under Section 4958 of the Internal Revenue Code.</p>
              </div>
              <div>
                <p className="font-bold text-foreground">COMPENSATION COMMITTEE</p>
                <p>The Board of Directors shall establish a Compensation Committee composed of at least three (3) independent board members who have no conflict of interest with respect to the compensation arrangement being reviewed. The Compensation Committee shall:</p>
                <ol className="list-alpha pl-6 space-y-1 mt-2">
                  <li>Review and approve the compensation of the Executive Director/CEO annually;</li>
                  <li>Review and approve compensation for all officers and key employees earning above $50,000 annually;</li>
                  <li>Establish salary ranges for all positions based on comparable market data;</li>
                  <li>Review and approve any benefits packages, bonuses, or other forms of compensation.</li>
                </ol>
              </div>
              <div>
                <p className="font-bold text-foreground">COMPARABILITY DATA</p>
                <p>Before approving any compensation arrangement, the Compensation Committee shall obtain and consider appropriate comparability data, including:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>Compensation levels paid by similarly situated organizations (both taxable and tax-exempt) for functionally comparable positions;</li>
                  <li>Independent compensation surveys compiled by independent firms;</li>
                  <li>Written offers from similar institutions competing for the Organization's employees;</li>
                  <li>The organization's budget and financial condition.</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-foreground">DOCUMENTATION</p>
                <p>The Compensation Committee shall document all compensation decisions in the Board minutes, including: the terms of the compensation arrangement, the date of approval, the members present and voting, the comparability data relied upon, and any actions taken with respect to persons with a conflict of interest. This "rebuttable presumption of reasonableness" protects the Organization from IRS penalties.</p>
              </div>
              <div>
                <p className="font-bold text-foreground">PROHIBITION ON EXCESS COMPENSATION</p>
                <p>No compensation shall be paid that constitutes "excess benefit" as defined by Section 4958 of the Internal Revenue Code. Any person who receives excess compensation may be personally liable for excise taxes, and board members who knowingly approve excess compensation may also face penalties.</p>
              </div>
            </div>
          </DocSection>

          <DocSection title="Code of Ethics & Conduct" icon={Award} id="ethics">
            <p className="font-bold text-foreground text-lg mb-4">CODE OF ETHICS AND CONDUCT — FROM THE GROUND UP</p>
            <div className="space-y-6">
              <div>
                <p className="font-bold text-foreground">PREAMBLE</p>
                <p>From The Ground Up is committed to the highest standards of ethical conduct. This Code of Ethics applies to all directors, officers, employees, volunteers, and contractors of the Organization. We believe that ethical behavior is the foundation upon which we build trust with our students, donors, partners, and communities.</p>
              </div>
              <div>
                <p className="font-bold text-foreground">CORE VALUES</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li><strong>Integrity:</strong> We act honestly and transparently in all our dealings. We keep our commitments and are accountable for our actions.</li>
                  <li><strong>Respect:</strong> We treat all individuals with dignity and respect, regardless of race, gender, age, religion, national origin, sexual orientation, disability, or socioeconomic status.</li>
                  <li><strong>Excellence:</strong> We strive for the highest quality in our programs, operations, and interactions. We are committed to continuous improvement.</li>
                  <li><strong>Stewardship:</strong> We are responsible stewards of the resources entrusted to us, including financial resources, facilities, and the trust of our stakeholders.</li>
                  <li><strong>Service:</strong> We exist to serve our students and communities. Every decision should ultimately benefit those we serve.</li>
                  <li><strong>Innovation:</strong> We embrace new ideas, technologies, and approaches that advance our mission while honoring traditional craftsmanship.</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-foreground">STANDARDS OF CONDUCT</p>
                <p>All representatives of the Organization shall:</p>
                <ol className="list-decimal pl-6 space-y-1 mt-2">
                  <li>Act in the best interest of the Organization at all times;</li>
                  <li>Comply with all applicable laws, regulations, and organizational policies;</li>
                  <li>Avoid conflicts of interest and disclose any potential conflicts immediately;</li>
                  <li>Maintain confidentiality of proprietary and sensitive information;</li>
                  <li>Use Organization resources only for authorized purposes;</li>
                  <li>Treat students, colleagues, donors, and community members with respect and professionalism;</li>
                  <li>Report any suspected violations of this Code, organizational policies, or applicable laws;</li>
                  <li>Cooperate fully with authorized investigations;</li>
                  <li>Refrain from any form of discrimination, harassment, or bullying;</li>
                  <li>Maintain accurate records and report information truthfully.</li>
                </ol>
              </div>
              <div>
                <p className="font-bold text-foreground">ENFORCEMENT</p>
                <p>Violations of this Code may result in disciplinary action, up to and including termination of employment or removal from the Board. The Board Chairperson is responsible for enforcement. All personnel are expected to report suspected violations without fear of retaliation, as protected under the Organization's Whistleblower Policy.</p>
              </div>
            </div>
          </DocSection>

          <DocSection title="Nondiscrimination Policy" icon={Heart} id="nondiscrimination">
            <p className="font-bold text-foreground text-lg mb-4">NONDISCRIMINATION POLICY — FROM THE GROUND UP</p>
            <div className="space-y-6">
              <div>
                <p>From The Ground Up does not and shall not discriminate on the basis of race, color, religion (creed), gender, gender expression, age, national origin (ancestry), disability, marital status, sexual orientation, veteran status, or military status, in any of its activities or operations. These activities include, but are not limited to:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>Selection of students and program participants</li>
                  <li>Hiring and firing of staff</li>
                  <li>Selection of volunteers and vendors</li>
                  <li>Provision of services</li>
                  <li>Selection of board members and advisory committee members</li>
                </ul>
              </div>
              <div>
                <p>From The Ground Up is committed to providing an inclusive and welcoming environment for all members of our staff, students, volunteers, subcontractors, vendors, and clients.</p>
                <p className="mt-2">We are an equal opportunity employer. We will not discriminate and will take affirmative action measures to ensure against discrimination in employment, recruitment, advertisements for employment, compensation, termination, upgrading, promotions, and other conditions of employment against any employee or job applicant on the bases of race, color, gender, national origin, age, religion, creed, disability, veteran's status, sexual orientation, gender identity, or gender expression.</p>
              </div>
              <div>
                <p className="font-bold text-foreground">ACCESSIBILITY</p>
                <p>The Organization is committed to making its programs, services, and facilities accessible to individuals with disabilities. We will make reasonable accommodations for qualified individuals with known disabilities unless doing so would result in an undue hardship.</p>
              </div>
              <div>
                <p className="font-bold text-foreground">REPORTING</p>
                <p>Any person who believes they have been subjected to discrimination may file a complaint with the Executive Director or Board Chairperson. All complaints will be investigated promptly and confidentially. Retaliation against any person for filing a complaint or participating in an investigation is strictly prohibited.</p>
              </div>
            </div>
          </DocSection>

          <DocSection title="Gift Acceptance Policy" icon={Heart} id="gift">
            <p className="font-bold text-foreground text-lg mb-4">GIFT ACCEPTANCE POLICY — FROM THE GROUND UP</p>
            <div className="space-y-6">
              <div>
                <p className="font-bold text-foreground">PURPOSE</p>
                <p>This policy governs the acceptance of gifts by From The Ground Up and provides guidance to prospective donors and their advisors when making gifts to the Organization. The Organization reserves the right to decline any gift that does not further its mission or that may create undue liability.</p>
              </div>
              <div>
                <p className="font-bold text-foreground">TYPES OF GIFTS ACCEPTED</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li><strong>Cash:</strong> Cash gifts are acceptable in any form (check, money order, credit card, online transfer, cryptocurrency). Checks shall be made payable to "From The Ground Up."</li>
                  <li><strong>Publicly Traded Securities:</strong> The Organization will accept publicly traded securities and will liquidate them promptly upon receipt. The gift value is determined by the mean of the high and low trading prices on the date of transfer.</li>
                  <li><strong>Real Estate:</strong> Gifts of real estate may be accepted after review by the Board, including an appraisal, environmental assessment, and title search. The Board must approve all real estate gifts.</li>
                  <li><strong>Tangible Personal Property:</strong> The Organization may accept gifts of tangible personal property (equipment, tools, materials, vehicles) that further its mission. Items not useful to the Organization may be sold.</li>
                  <li><strong>In-Kind Services:</strong> The Organization may accept in-kind services (pro bono legal, accounting, construction, etc.) but these are generally not tax-deductible to the donor.</li>
                  <li><strong>Planned Gifts:</strong> The Organization welcomes bequests, charitable remainder trusts, charitable lead trusts, and other planned giving instruments. Donors are encouraged to consult with their financial and legal advisors.</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-foreground">GIFT RESTRICTIONS</p>
                <p>The Organization will accept unrestricted gifts, gifts restricted to specific programs, and gifts restricted to the endowment fund. The Organization reserves the right to decline any gift that is too restrictive in purpose, requires the Organization to take actions inconsistent with its mission, or creates an undue financial or administrative burden.</p>
              </div>
              <div>
                <p className="font-bold text-foreground">DONOR RECOGNITION</p>
                <p>The Organization will acknowledge all gifts in writing within 48 hours of receipt. Tax receipts complying with IRS requirements will be provided for all gifts of $250 or more. Donor privacy will be respected — no donor information will be shared without written consent.</p>
              </div>
              <div>
                <p className="font-bold text-foreground">ETHICAL STANDARDS</p>
                <p>The Organization will not accept gifts from any source that would compromise its integrity or reputation. The Organization will not provide legal, tax, or financial advice to donors, and will encourage donors to seek independent counsel.</p>
              </div>
            </div>
          </DocSection>

          <DocSection title="Financial Policies & Procedures" icon={DollarSign} id="financial">
            <p className="font-bold text-foreground text-lg mb-4">FINANCIAL POLICIES AND PROCEDURES — FROM THE GROUND UP</p>
            <div className="space-y-6">
              <div>
                <p className="font-bold text-foreground">1. GENERAL FINANCIAL MANAGEMENT</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>The Treasurer of the Board shall oversee all financial operations of the Organization.</li>
                  <li>The Organization shall maintain its books using the accrual basis of accounting in accordance with Generally Accepted Accounting Principles (GAAP) for nonprofit organizations.</li>
                  <li>Financial statements shall be prepared monthly and presented to the Board quarterly at minimum.</li>
                  <li>An annual budget shall be approved by the Board before the start of each fiscal year.</li>
                  <li>The Executive Director may not exceed budget line items by more than 10% without Board approval.</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-foreground">2. CASH MANAGEMENT</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>All funds shall be deposited in accounts held in the Organization's legal name.</li>
                  <li>Deposits shall be made within 3 business days of receipt.</li>
                  <li>All checks over $5,000 require two authorized signatures.</li>
                  <li>Bank accounts shall be reconciled monthly by someone other than the person who writes checks.</li>
                  <li>The Organization shall maintain an operating reserve equal to at least 3 months of operating expenses.</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-foreground">3. EXPENSE AUTHORIZATION</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>Expenditures up to $1,000: May be approved by the Executive Director.</li>
                  <li>Expenditures $1,001-$5,000: Require Executive Director and Treasurer approval.</li>
                  <li>Expenditures over $5,000: Require Board approval.</li>
                  <li>All expenditures must have supporting documentation (invoices, receipts, contracts).</li>
                  <li>Credit cards may be used for authorized business purposes only, with receipts submitted within 5 business days.</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-foreground">4. PAYROLL</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>Payroll shall be processed by a reputable payroll service (e.g., Gusto, ADP, Paychex).</li>
                  <li>All employees shall complete IRS Form W-4 and I-9 before starting work.</li>
                  <li>Independent contractors shall complete IRS Form W-9 and will receive 1099 forms as required.</li>
                  <li>All payroll taxes shall be remitted in compliance with federal, state, and local requirements.</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-foreground">5. GRANT MANAGEMENT</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>Grant funds shall be tracked separately by funding source.</li>
                  <li>Grant expenditures shall comply with all grantor requirements and restrictions.</li>
                  <li>Grant reports shall be filed on time as required by each grantor.</li>
                  <li>Unused grant funds shall be returned or renegotiated as required by the grant agreement.</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-foreground">6. AUDIT</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>The Organization shall undergo an independent financial review when annual revenue exceeds $100,000.</li>
                  <li>The Organization shall undergo a full independent audit when annual revenue exceeds $250,000.</li>
                  <li>The audit firm shall be selected by the Board and shall rotate at least every 5 years.</li>
                  <li>The Board shall review and accept the audit report and management letter.</li>
                </ul>
              </div>
            </div>
          </DocSection>

          <DocSection title="Organizational Meeting Minutes Template" icon={ClipboardCheck} id="minutes">
            <p className="font-bold text-foreground text-lg mb-4">MINUTES OF THE ORGANIZATIONAL MEETING OF THE BOARD OF DIRECTORS OF FROM THE GROUND UP</p>
            <div className="space-y-6">
              <div className="p-4 bg-accent/10 border border-accent/20 rounded-xl text-sm">
                <p className="font-bold text-foreground">Instructions: Fill in the [bracketed] sections with actual information during your organizational meeting.</p>
              </div>
              <div>
                <p><strong>Date:</strong> [DATE]</p>
                <p><strong>Time:</strong> [TIME]</p>
                <p><strong>Location:</strong> [ADDRESS / "Via Video Conference"]</p>
                <p className="mt-4"><strong>Board Members Present:</strong></p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Jeffrey Williams, Chairperson</li>
                  <li>[Name], [Title]</li>
                  <li>[Name], [Title]</li>
                  <li>[Additional board members]</li>
                </ul>
                <p className="mt-4"><strong>Board Members Absent:</strong> [Names or "None"]</p>
              </div>
              <div>
                <p className="font-bold text-foreground">1. CALL TO ORDER</p>
                <p>The organizational meeting of the Board of Directors of From The Ground Up was called to order by Jeffrey Williams at [TIME] on [DATE].</p>
              </div>
              <div>
                <p className="font-bold text-foreground">2. ARTICLES OF INCORPORATION</p>
                <p>The Chairperson presented the Articles of Incorporation filed with the District of Columbia Department of Licensing and Consumer Protection on [DATE], File Number [NUMBER]. A certified copy was presented to the Board and ordered to be kept with the corporate records.</p>
              </div>
              <div>
                <p className="font-bold text-foreground">3. ADOPTION OF BYLAWS</p>
                <p>The Chairperson presented proposed Bylaws for the Corporation. After discussion, upon motion duly made, seconded, and unanimously carried, it was:</p>
                <p className="font-bold mt-2">RESOLVED, that the Bylaws presented to this meeting are hereby adopted as the Bylaws of the Corporation, and the Secretary is directed to insert a copy of the Bylaws in the corporate records.</p>
              </div>
              <div>
                <p className="font-bold text-foreground">4. ELECTION OF OFFICERS</p>
                <p>Upon motion duly made, seconded, and unanimously carried, the following persons were elected to serve as officers of the Corporation:</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Chairperson: Jeffrey Williams</li>
                  <li>Vice Chairperson: [Name]</li>
                  <li>Secretary: [Name]</li>
                  <li>Treasurer: [Name]</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-foreground">5. ADOPTION OF CONFLICT OF INTEREST POLICY</p>
                <p>Upon motion duly made, seconded, and unanimously carried, the Conflict of Interest Policy was adopted. Each director signed an annual disclosure statement.</p>
              </div>
              <div>
                <p className="font-bold text-foreground">6. ADOPTION OF ORGANIZATIONAL POLICIES</p>
                <p>Upon motion duly made, seconded, and unanimously carried, the following policies were adopted:</p>
                <ul className="list-disc pl-6 mt-2">
                  <li>Whistleblower Protection Policy</li>
                  <li>Document Retention and Destruction Policy</li>
                  <li>Executive Compensation Policy</li>
                  <li>Code of Ethics and Conduct</li>
                  <li>Nondiscrimination Policy</li>
                  <li>Gift Acceptance Policy</li>
                  <li>Financial Policies and Procedures</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-foreground">7. FISCAL YEAR</p>
                <p>Upon motion duly made, seconded, and unanimously carried, it was RESOLVED that the fiscal year of the Corporation shall end on [December 31 / June 30] of each year.</p>
              </div>
              <div>
                <p className="font-bold text-foreground">8. BANKING RESOLUTION</p>
                <p>Upon motion duly made, seconded, and unanimously carried, it was RESOLVED that the Treasurer is authorized to open a checking account and savings account at [BANK NAME] in the name of the Corporation, and that the following persons are authorized signatories: [NAMES].</p>
              </div>
              <div>
                <p className="font-bold text-foreground">9. EIN APPLICATION</p>
                <p>Upon motion duly made, seconded, and unanimously carried, it was RESOLVED that the [Chairperson/Treasurer] is authorized to apply for an Employer Identification Number (EIN) from the Internal Revenue Service on behalf of the Corporation.</p>
              </div>
              <div>
                <p className="font-bold text-foreground">10. 501(c)(3) APPLICATION</p>
                <p>Upon motion duly made, seconded, and unanimously carried, it was RESOLVED that the [Chairperson/Executive Director] is authorized to prepare and file IRS Form 1023 (or 1023-EZ) to apply for recognition of tax-exempt status under Section 501(c)(3) of the Internal Revenue Code.</p>
              </div>
              <div>
                <p className="font-bold text-foreground">11. ADJOURNMENT</p>
                <p>There being no further business, upon motion duly made, seconded, and unanimously carried, the meeting was adjourned at [TIME].</p>
                <div className="mt-6">
                  <p>Respectfully submitted,</p>
                  <p className="mt-4">_______________________________</p>
                  <p>[Name], Secretary</p>
                  <p className="mt-4">Approved:</p>
                  <p className="mt-4">_______________________________</p>
                  <p>Jeffrey Williams, Chairperson</p>
                </div>
              </div>
            </div>
          </DocSection>

          <DocSection title="IRS Form 1023 Narrative Description" icon={FileText} id="narrative">
            <p className="font-bold text-foreground text-lg mb-4">NARRATIVE DESCRIPTION OF ACTIVITIES — FROM THE GROUND UP</p>
            <div className="p-4 bg-accent/10 border border-accent/20 rounded-xl text-sm mb-6">
              <p className="font-bold text-foreground">This is the narrative section for your IRS Form 1023 application. It describes your organization's activities in the format the IRS expects.</p>
            </div>
            <div className="space-y-6">
              <div>
                <p className="font-bold text-foreground">ORGANIZATIONAL OVERVIEW</p>
                <p>From The Ground Up is a nonprofit corporation organized in the District of Columbia for the purpose of providing vocational education, job training, and workforce development in the skilled trades. The Organization empowers individuals of all ages and backgrounds with hands-on trade skills in construction, electrical work, plumbing, carpentry, HVAC systems, and related trades, enhanced by artificial intelligence-driven learning tools. The Organization was founded by Jeffrey Williams in honor of his father, Jeffrey Williams Sr., a lifelong tradesman who believed in building communities from the ground up.</p>
              </div>
              <div>
                <p className="font-bold text-foreground">CHARITABLE AND EDUCATIONAL PURPOSE</p>
                <p>The Organization's activities qualify as charitable and educational under Section 501(c)(3) because they:</p>
                <ol className="list-decimal pl-6 space-y-2 mt-2">
                  <li>Provide vocational education and job training to individuals, including underserved populations, who lack access to skilled trade education;</li>
                  <li>Reduce unemployment and poverty by equipping individuals with marketable skills that lead directly to employment;</li>
                  <li>Advance education through innovative AI-powered learning tools that improve training outcomes;</li>
                  <li>Serve a broad public benefit by addressing the nationwide shortage of skilled tradespeople.</li>
                </ol>
              </div>
              <div>
                <p className="font-bold text-foreground">PROGRAMS AND ACTIVITIES</p>
                <p>The Organization operates the following programs:</p>
                <ol className="list-decimal pl-6 space-y-4 mt-2">
                  <li>
                    <strong>Construction Fundamentals:</strong> A comprehensive program teaching residential and commercial construction techniques including framing, foundations, roofing, finishing, and building code compliance. Students receive 120+ hours of hands-on instruction.
                  </li>
                  <li>
                    <strong>Electrical Systems:</strong> Training in residential and commercial electrical work including wiring, panel installation, circuitry, safety protocols, and NEC code compliance. Prepares students for journeyman electrician certification.
                  </li>
                  <li>
                    <strong>Plumbing Essentials:</strong> Instruction in pipe fitting, system design, fixture installation, water heater systems, and plumbing code compliance for residential and commercial applications.
                  </li>
                  <li>
                    <strong>Carpentry & Woodworking:</strong> Training in rough and finish carpentry, cabinetmaking, furniture construction, blueprint reading, and the use of both traditional hand tools and modern power tools.
                  </li>
                  <li>
                    <strong>HVAC Systems:</strong> Instruction in heating, ventilation, air conditioning, and refrigeration system installation, maintenance, and repair, including energy efficiency and EPA certification preparation.
                  </li>
                  <li>
                    <strong>AI in the Trades:</strong> An innovative program teaching students how to leverage artificial intelligence tools for project planning, cost estimation, quality control, energy modeling, and efficiency optimization in the trades.
                  </li>
                </ol>
              </div>
              <div>
                <p className="font-bold text-foreground">BENEFICIARIES</p>
                <p>The Organization serves individuals of all ages and backgrounds, with a focus on underserved populations including low-income individuals, unemployed and underemployed adults, at-risk youth, veterans transitioning to civilian careers, formerly incarcerated individuals, and individuals in communities with limited access to vocational education. Programs are offered on a sliding scale fee basis, and scholarships are available to ensure no qualified individual is turned away due to inability to pay.</p>
              </div>
              <div>
                <p className="font-bold text-foreground">REVENUE SOURCES</p>
                <p>The Organization generates revenue through: (1) tax-deductible charitable contributions from individuals and corporations; (2) foundation and government grants; (3) program fees (charged on a sliding scale, with full scholarships available); (4) corporate partnerships and sponsorships; (5) fundraising events; and (6) licensing of proprietary AI-powered educational tools to other training organizations.</p>
              </div>
              <div>
                <p className="font-bold text-foreground">GOVERNANCE</p>
                <p>The Organization is governed by a Board of Directors currently consisting of [NUMBER] members who serve without compensation. The Board meets at least quarterly and is responsible for setting organizational policy, approving budgets, and ensuring the Organization fulfills its charitable mission. The Organization has adopted a Conflict of Interest Policy, Whistleblower Policy, Document Retention Policy, Executive Compensation Policy, and other governance policies consistent with IRS best practices.</p>
              </div>
            </div>
          </DocSection>

          <DocSection title="3-Year Financial Projections" icon={DollarSign} id="projections">
            <p className="font-bold text-foreground text-lg mb-4">THREE-YEAR FINANCIAL PROJECTIONS — FROM THE GROUND UP</p>
            <div className="p-4 bg-accent/10 border border-accent/20 rounded-xl text-sm mb-6">
              <p className="font-bold text-foreground">Required for IRS Form 1023. Adjust these numbers to reflect your actual planned revenue and expenses.</p>
            </div>
            <div className="space-y-8">
              <div>
                <p className="font-bold text-foreground text-lg">PROJECTED REVENUE</p>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm border border-border">
                    <thead className="bg-muted/30">
                      <tr>
                        <th className="p-3 text-left font-bold text-foreground border-b border-border">Revenue Source</th>
                        <th className="p-3 text-right font-bold text-foreground border-b border-border">Year 1</th>
                        <th className="p-3 text-right font-bold text-foreground border-b border-border">Year 2</th>
                        <th className="p-3 text-right font-bold text-foreground border-b border-border">Year 3</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Individual Donations", "$30,000", "$60,000", "$100,000"],
                        ["Foundation Grants", "$50,000", "$100,000", "$150,000"],
                        ["Government Grants", "$0", "$50,000", "$100,000"],
                        ["Corporate Sponsorships", "$20,000", "$40,000", "$75,000"],
                        ["Program Fees", "$10,000", "$30,000", "$50,000"],
                        ["Fundraising Events", "$10,000", "$20,000", "$30,000"],
                        ["In-Kind Contributions", "$5,000", "$10,000", "$15,000"],
                      ].map(([source, y1, y2, y3]) => (
                        <tr key={source} className="border-b border-border">
                          <td className="p-3">{source}</td>
                          <td className="p-3 text-right">{y1}</td>
                          <td className="p-3 text-right">{y2}</td>
                          <td className="p-3 text-right">{y3}</td>
                        </tr>
                      ))}
                      <tr className="bg-primary/10 font-bold">
                        <td className="p-3 text-foreground">Total Revenue</td>
                        <td className="p-3 text-right text-foreground">$125,000</td>
                        <td className="p-3 text-right text-foreground">$310,000</td>
                        <td className="p-3 text-right text-foreground">$520,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div>
                <p className="font-bold text-foreground text-lg">PROJECTED EXPENSES</p>
                <div className="overflow-x-auto mt-4">
                  <table className="w-full text-sm border border-border">
                    <thead className="bg-muted/30">
                      <tr>
                        <th className="p-3 text-left font-bold text-foreground border-b border-border">Expense Category</th>
                        <th className="p-3 text-right font-bold text-foreground border-b border-border">Year 1</th>
                        <th className="p-3 text-right font-bold text-foreground border-b border-border">Year 2</th>
                        <th className="p-3 text-right font-bold text-foreground border-b border-border">Year 3</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Salaries & Benefits", "$50,000", "$150,000", "$250,000"],
                        ["Program Supplies & Materials", "$15,000", "$30,000", "$50,000"],
                        ["Facility Rent/Lease", "$12,000", "$24,000", "$36,000"],
                        ["Technology & AI Tools", "$10,000", "$20,000", "$35,000"],
                        ["Insurance", "$5,000", "$8,000", "$12,000"],
                        ["Marketing & Outreach", "$5,000", "$10,000", "$20,000"],
                        ["Professional Services (Legal, Accounting)", "$10,000", "$15,000", "$20,000"],
                        ["Utilities & Operations", "$3,000", "$6,000", "$10,000"],
                        ["Travel & Training", "$2,000", "$5,000", "$10,000"],
                        ["Office Supplies & Misc.", "$3,000", "$5,000", "$7,000"],
                        ["Fundraising Costs", "$5,000", "$10,000", "$15,000"],
                      ].map(([expense, y1, y2, y3]) => (
                        <tr key={expense} className="border-b border-border">
                          <td className="p-3">{expense}</td>
                          <td className="p-3 text-right">{y1}</td>
                          <td className="p-3 text-right">{y2}</td>
                          <td className="p-3 text-right">{y3}</td>
                        </tr>
                      ))}
                      <tr className="bg-primary/10 font-bold">
                        <td className="p-3 text-foreground">Total Expenses</td>
                        <td className="p-3 text-right text-foreground">$120,000</td>
                        <td className="p-3 text-right text-foreground">$283,000</td>
                        <td className="p-3 text-right text-foreground">$465,000</td>
                      </tr>
                      <tr className="bg-secondary/10 font-bold">
                        <td className="p-3 text-foreground">Net Income/(Loss)</td>
                        <td className="p-3 text-right text-secondary">$5,000</td>
                        <td className="p-3 text-right text-secondary">$27,000</td>
                        <td className="p-3 text-right text-secondary">$55,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="p-4 bg-muted/30 border border-border rounded-xl">
                <p className="text-sm text-foreground font-bold mb-2">Notes:</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Year 1 assumes part-time Executive Director and contract instructors.</li>
                  <li>Year 2 assumes full-time Executive Director, 2 full-time instructors, and part-time admin.</li>
                  <li>Year 3 assumes full staffing of core team (6-8 employees).</li>
                  <li>Revenue projections are conservative estimates based on comparable DC-area nonprofits.</li>
                  <li>Net income is allocated to operating reserves (3-month target).</li>
                  <li>These projections should be updated with actual figures as the organization grows.</li>
                </ul>
              </div>
            </div>
          </DocSection>

          <DocSection title="Volunteer Agreement & Waiver" icon={HandHelping} id="volunteer-agreement">
            <p className="font-bold text-foreground text-lg mb-4">VOLUNTEER AGREEMENT AND WAIVER OF LIABILITY — FROM THE GROUND UP</p>
            <div className="space-y-6">
              <div>
                <p className="font-bold text-foreground">SECTION 1 — VOLUNTEER INFORMATION</p>
                <div className="mt-2 space-y-2 text-sm">
                  <p>Full Name: _________________________________ Date: _____________</p>
                  <p>Address: _________________________________________________</p>
                  <p>Phone: __________________ Email: __________________________</p>
                  <p>Emergency Contact: _________________ Phone: _______________</p>
                  <p>Date of Birth: _______________ (Volunteers under 18 require parent/guardian signature)</p>
                </div>
              </div>
              <div>
                <p className="font-bold text-foreground">SECTION 2 — VOLUNTEER COMMITMENT</p>
                <p>I, the undersigned, voluntarily agree to serve as a volunteer for From The Ground Up ("Organization"). I understand that as a volunteer, I will not receive compensation for my services. I agree to:</p>
                <ol className="list-decimal pl-6 space-y-2 mt-2">
                  <li>Follow all safety rules, regulations, and instructions provided by the Organization;</li>
                  <li>Conduct myself in a professional and respectful manner at all times;</li>
                  <li>Protect the confidentiality of all proprietary information, student records, and donor information;</li>
                  <li>Report any safety hazards, injuries, or concerns to a supervisor immediately;</li>
                  <li>Wear appropriate safety gear and clothing as required for the assigned task;</li>
                  <li>Comply with the Organization's Code of Ethics, Nondiscrimination Policy, and all other applicable policies.</li>
                </ol>
              </div>
              <div>
                <p className="font-bold text-foreground">SECTION 3 — ASSUMPTION OF RISK</p>
                <p>I understand that volunteer activities may involve physical labor, exposure to construction sites, power tools, electrical systems, plumbing equipment, and other potentially hazardous conditions. I voluntarily assume all risks associated with my participation as a volunteer, including but not limited to: physical injury, illness, property damage, or death.</p>
              </div>
              <div>
                <p className="font-bold text-foreground">SECTION 4 — WAIVER AND RELEASE OF LIABILITY</p>
                <p>I hereby release, waive, discharge, and covenant not to sue From The Ground Up, its officers, directors, employees, agents, and volunteers (collectively "Releasees") from any and all liability, claims, demands, actions, or causes of action whatsoever arising out of or related to any loss, damage, or injury that may be sustained by me while participating in volunteer activities, whether caused by the negligence of the Releasees or otherwise.</p>
              </div>
              <div>
                <p className="font-bold text-foreground">SECTION 5 — INDEMNIFICATION</p>
                <p>I agree to indemnify and hold harmless From The Ground Up from any loss, liability, damage, or costs, including attorney's fees, that may be incurred due to my participation in volunteer activities, whether caused by my negligence or otherwise.</p>
              </div>
              <div>
                <p className="font-bold text-foreground">SECTION 6 — MEDIA CONSENT</p>
                <p>I grant From The Ground Up permission to use my name, image, and likeness in photographs, video recordings, and other media for promotional, educational, and fundraising purposes.</p>
              </div>
              <div className="mt-8 pt-4 border-t border-border space-y-6">
                <div>
                  <p>Volunteer Signature: _________________________ Date: _____________</p>
                  <p className="mt-2">Print Name: _________________________________</p>
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm">FOR VOLUNTEERS UNDER 18:</p>
                  <p className="mt-2">Parent/Guardian Signature: _________________________ Date: _____________</p>
                  <p className="mt-2">Print Name: _________________________________</p>
                </div>
              </div>
            </div>
          </DocSection>

          <DocSection title="Safety & Liability Waiver" icon={HardHat} id="safety-waiver">
            <p className="font-bold text-foreground text-lg mb-4">SAFETY WAIVER AND LIABILITY RELEASE — FROM THE GROUND UP</p>
            <p className="text-sm italic mb-4">Required for all program participants before engaging in hands-on training activities.</p>
            <div className="space-y-6">
              <div>
                <p className="font-bold text-foreground">SECTION 1 — PARTICIPANT INFORMATION</p>
                <div className="mt-2 space-y-2 text-sm">
                  <p>Full Name: _________________________________ Date: _____________</p>
                  <p>Program Enrolled: _________________________________________</p>
                  <p>Emergency Contact: _________________ Relationship: _____________</p>
                  <p>Emergency Phone: _________________</p>
                  <p>Known Medical Conditions/Allergies: _________________________________</p>
                </div>
              </div>
              <div>
                <p className="font-bold text-foreground">SECTION 2 — ACKNOWLEDGMENT OF RISKS</p>
                <p>I acknowledge that participation in trade skills training programs operated by From The Ground Up involves inherent risks, including but not limited to:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>Use of power tools, hand tools, and heavy equipment</li>
                  <li>Exposure to electrical systems, live wiring, and high voltage</li>
                  <li>Work with plumbing systems, water, and chemical solvents</li>
                  <li>Elevated work surfaces, ladders, scaffolding, and roofing</li>
                  <li>Exposure to construction materials including wood, metal, concrete, and insulation</li>
                  <li>HVAC systems involving refrigerants, heat, and pressurized systems</li>
                  <li>Physical exertion, lifting, bending, and repetitive motions</li>
                  <li>Noise exposure, dust, and airborne particles</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-foreground">SECTION 3 — SAFETY COMMITMENT</p>
                <p>I agree to:</p>
                <ol className="list-decimal pl-6 space-y-1 mt-2">
                  <li>Attend all required safety orientations before participating in hands-on activities;</li>
                  <li>Wear all required personal protective equipment (PPE) including hard hats, safety glasses, gloves, steel-toe boots, and hearing protection as directed;</li>
                  <li>Never operate tools or equipment without proper instruction and authorization;</li>
                  <li>Report any unsafe conditions, equipment malfunctions, or injuries immediately;</li>
                  <li>Abstain from alcohol, drugs, or any substance that may impair judgment during training;</li>
                  <li>Follow all OSHA safety standards and Organization safety protocols.</li>
                </ol>
              </div>
              <div>
                <p className="font-bold text-foreground">SECTION 4 — WAIVER AND RELEASE</p>
                <p>In consideration of being allowed to participate in programs offered by From The Ground Up, I hereby release, discharge, and hold harmless the Organization, its officers, directors, employees, instructors, volunteers, and agents from any and all liability, claims, demands, or causes of action arising from my participation, including those caused by negligence.</p>
              </div>
              <div>
                <p className="font-bold text-foreground">SECTION 5 — MEDICAL AUTHORIZATION</p>
                <p>In the event of an emergency, I authorize From The Ground Up to secure emergency medical treatment on my behalf. I understand that I am responsible for any medical expenses incurred.</p>
              </div>
              <div className="mt-8 pt-4 border-t border-border">
                <p>Participant Signature: _________________________ Date: _____________</p>
                <p className="mt-2">Print Name: _________________________________</p>
                <p className="mt-6 text-sm font-bold text-foreground">FOR PARTICIPANTS UNDER 18:</p>
                <p className="mt-2">Parent/Guardian Signature: _________________________ Date: _____________</p>
              </div>
            </div>
          </DocSection>

          <DocSection title="Media & Photo Release Form" icon={Camera} id="media-release">
            <p className="font-bold text-foreground text-lg mb-4">MEDIA AND PHOTO RELEASE CONSENT FORM — FROM THE GROUND UP</p>
            <div className="space-y-6">
              <div>
                <p>I, _________________________________ ("Participant"), hereby grant to From The Ground Up ("Organization"), its employees, agents, and authorized representatives, the irrevocable and unrestricted right to use, reproduce, publish, and distribute photographs, video recordings, audio recordings, and any other media or digital content featuring my name, image, likeness, and/or voice (collectively, "Media") for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-1 mt-2">
                  <li>Website content and social media platforms (Facebook, Instagram, Twitter/X, LinkedIn, YouTube, TikTok)</li>
                  <li>Marketing and promotional materials (brochures, flyers, banners, advertisements)</li>
                  <li>Fundraising campaigns, grant applications, and donor communications</li>
                  <li>Annual reports, newsletters, and press releases</li>
                  <li>Educational materials, presentations, and training documentation</li>
                  <li>News media and public relations activities</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-foreground">TERMS AND CONDITIONS</p>
                <ol className="list-decimal pl-6 space-y-2 mt-2">
                  <li>This release is valid in perpetuity unless revoked in writing.</li>
                  <li>No compensation is expected or will be provided for the use of Media covered by this release.</li>
                  <li>The Organization may edit, alter, or modify Media as it deems appropriate, provided such modifications do not misrepresent the Participant.</li>
                  <li>The Participant waives the right to inspect or approve the finished product in which the Media appears.</li>
                  <li>The Participant releases the Organization from any claims arising from the use of Media, including claims of invasion of privacy, defamation, or right of publicity.</li>
                  <li>This release is binding on the Participant's heirs, assigns, and legal representatives.</li>
                </ol>
              </div>
              <div className="mt-8 pt-4 border-t border-border space-y-4">
                <p>Participant Signature: _________________________ Date: _____________</p>
                <p>Print Name: _________________________________</p>
                <p className="mt-4 font-bold text-foreground text-sm">FOR PARTICIPANTS UNDER 18:</p>
                <p>Parent/Guardian Signature: _________________________ Date: _____________</p>
                <p>Print Name: _________________________________</p>
                <p>Relationship to Participant: _________________________</p>
              </div>
            </div>
          </DocSection>

          <DocSection title="Board Meeting Agenda Template" icon={ClipboardCheck} id="board-agenda">
            <p className="font-bold text-foreground text-lg mb-4">BOARD OF DIRECTORS MEETING AGENDA — FROM THE GROUND UP</p>
            <div className="space-y-6">
              <div className="p-4 bg-muted/30 border border-border rounded-xl">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <p><strong>Date:</strong> [INSERT DATE]</p>
                  <p><strong>Time:</strong> [INSERT TIME]</p>
                  <p><strong>Location:</strong> [INSERT LOCATION / Virtual Link]</p>
                  <p><strong>Presiding:</strong> [Board Chair Name]</p>
                </div>
              </div>
              <div>
                <p className="font-bold text-foreground">I. CALL TO ORDER</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Chair calls meeting to order at [TIME]</li>
                  <li>Roll call and establishment of quorum</li>
                  <li>Welcome and introductions (if applicable)</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-foreground">II. APPROVAL OF MINUTES</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Review of minutes from previous meeting dated [DATE]</li>
                  <li>Motion to approve, discussion, and vote</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-foreground">III. EXECUTIVE DIRECTOR'S REPORT</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Program updates and enrollment numbers</li>
                  <li>Staffing and personnel updates</li>
                  <li>Key accomplishments since last meeting</li>
                  <li>Challenges and areas needing board attention</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-foreground">IV. FINANCIAL REPORT</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Treasurer's report: income, expenses, and current balance</li>
                  <li>Budget vs. actual comparison for current period</li>
                  <li>Grant status updates and fundraising progress</li>
                  <li>Upcoming financial obligations</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-foreground">V. COMMITTEE REPORTS</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Finance Committee</li>
                  <li>Program Committee</li>
                  <li>Fundraising / Development Committee</li>
                  <li>Governance / Nominating Committee</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-foreground">VI. OLD BUSINESS</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Follow-up on action items from previous meeting</li>
                  <li>[Specific old business items]</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-foreground">VII. NEW BUSINESS</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>[New items requiring board discussion or vote]</li>
                  <li>Policy reviews or amendments</li>
                  <li>Strategic planning items</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-foreground">VIII. UPCOMING DATES</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Next board meeting: [DATE]</li>
                  <li>Key upcoming events and deadlines</li>
                  <li>Filing/compliance deadlines</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-foreground">IX. ADJOURNMENT</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Motion to adjourn</li>
                  <li>Meeting adjourned at [TIME]</li>
                </ul>
              </div>
              <div className="p-4 bg-muted/30 border border-border rounded-xl mt-4">
                <p className="text-sm font-bold text-foreground mb-2">ACTION ITEMS SUMMARY</p>
                <table className="w-full text-sm">
                  <thead><tr className="border-b border-border"><th className="text-left p-2">Action Item</th><th className="text-left p-2">Assigned To</th><th className="text-left p-2">Due Date</th></tr></thead>
                  <tbody>
                    <tr className="border-b border-border/50"><td className="p-2">1. _______________</td><td className="p-2">___________</td><td className="p-2">___________</td></tr>
                    <tr className="border-b border-border/50"><td className="p-2">2. _______________</td><td className="p-2">___________</td><td className="p-2">___________</td></tr>
                    <tr><td className="p-2">3. _______________</td><td className="p-2">___________</td><td className="p-2">___________</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </DocSection>

          <DocSection title="Grant Proposal Template" icon={DollarSign} id="grant-template">
            <p className="font-bold text-foreground text-lg mb-4">GRANT PROPOSAL TEMPLATE — FROM THE GROUND UP</p>
            <p className="text-sm italic mb-4">Adapt this template to the specific requirements of each funder. Most funders provide their own application form, but these core sections are commonly requested.</p>
            <div className="space-y-6">
              <div>
                <p className="font-bold text-foreground">I. COVER LETTER</p>
                <div className="mt-2 p-4 bg-muted/30 border border-border rounded-xl text-sm space-y-2">
                  <p>[Date]</p>
                  <p>[Funder Name]<br/>[Address]</p>
                  <p>Dear [Grant Program Officer / Committee],</p>
                  <p>From The Ground Up respectfully requests [$ AMOUNT] to support [SPECIFIC PROJECT/PROGRAM]. Founded in Washington, DC in 2026 by Jeffrey Williams in honor of his father Jeffrey Williams Sr., our organization empowers individuals of all ages with hands-on trade skills — construction, electrical, plumbing, carpentry, HVAC, and AI-enhanced learning — to build sustainable careers and stronger communities.</p>
                  <p>[1-2 sentences on how this specific funding aligns with the funder's priorities]</p>
                  <p>Sincerely,<br/>Jeffrey Williams, Executive Director</p>
                </div>
              </div>
              <div>
                <p className="font-bold text-foreground">II. EXECUTIVE SUMMARY</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Organization name, location, and mission (1-2 sentences)</li>
                  <li>Amount requested and project title</li>
                  <li>Brief description of the proposed project (2-3 sentences)</li>
                  <li>Target population and expected outcomes</li>
                  <li>Timeline for implementation</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-foreground">III. STATEMENT OF NEED</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Data on the skills gap in the DC metro area trades workforce</li>
                  <li>Unemployment and underemployment statistics for target demographics</li>
                  <li>Connection to the DC Commanders stadium construction boom (5,000+ jobs)</li>
                  <li>Barriers to entry that your program addresses (cost, access, awareness, training availability)</li>
                  <li>Why existing programs are insufficient to meet demand</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-foreground">IV. PROJECT DESCRIPTION</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Goals and measurable objectives (SMART format)</li>
                  <li>Detailed program activities and curriculum overview</li>
                  <li>How AI-enhanced learning differentiates your approach</li>
                  <li>Timeline and milestones</li>
                  <li>Staffing and organizational capacity</li>
                  <li>Partnerships and collaboration (employers, unions, DC DOES, apprenticeship programs)</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-foreground">V. EVALUATION PLAN</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>How success will be measured (job placement rate, certification completion, wage increases)</li>
                  <li>Data collection methods and frequency</li>
                  <li>Use of Impact Cascade Algorithm to track multi-order community impact</li>
                  <li>Reporting schedule and format</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-foreground">VI. BUDGET</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Line-item budget for the proposed project</li>
                  <li>Budget narrative explaining each line item</li>
                  <li>Other funding sources (secured and pending)</li>
                  <li>Sustainability plan beyond the grant period</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-foreground">VII. ATTACHMENTS</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>IRS Determination Letter (501(c)(3) status)</li>
                  <li>Current year operating budget</li>
                  <li>Board of Directors list with affiliations</li>
                  <li>Most recent Form 990 (once filed)</li>
                  <li>Most recent audited financial statements (if applicable)</li>
                  <li>Letters of support from partners and community stakeholders</li>
                </ul>
              </div>
            </div>
          </DocSection>

          <DocSection title="Annual Report Template" icon={BarChart3} id="annual-report">
            <p className="font-bold text-foreground text-lg mb-4">ANNUAL REPORT OUTLINE — FROM THE GROUND UP</p>
            <p className="text-sm italic mb-4">Use this template to create your annual report for stakeholders, donors, and the public. A well-crafted annual report is both a transparency tool and a fundraising asset.</p>
            <div className="space-y-6">
              <div>
                <p className="font-bold text-foreground">I. LETTER FROM THE FOUNDER</p>
                <p>Personal letter from Jeffrey Williams reflecting on the year's accomplishments, challenges, and vision for the future. Set the tone for the entire report — make it heartfelt and forward-looking.</p>
              </div>
              <div>
                <p className="font-bold text-foreground">II. MISSION AND IMPACT OVERVIEW</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Mission statement and year-at-a-glance statistics</li>
                  <li>Key impact metrics: students trained, certifications earned, job placement rate</li>
                  <li>Impact Cascade data: total economic impact generated by graduates</li>
                  <li>Year-over-year comparison showing growth</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-foreground">III. PROGRAM HIGHLIGHTS</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Summary of each program's performance (Construction, Electrical, Plumbing, Carpentry, HVAC, AI in Trades)</li>
                  <li>New programs or curriculum additions launched</li>
                  <li>Graduation and certification statistics per program</li>
                  <li>Employer partnerships and apprenticeship placements</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-foreground">IV. STUDENT SUCCESS STORIES</p>
                <p>2-3 featured stories of students whose lives were transformed. Include quotes, photos (with media release), and specific outcomes (salary before/after, career trajectory).</p>
              </div>
              <div>
                <p className="font-bold text-foreground">V. FINANCIAL SUMMARY</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Total revenue by source (grants, donations, earned income, events)</li>
                  <li>Total expenses by category (programs, admin, fundraising)</li>
                  <li>Program expense ratio (target: 75%+ to programs)</li>
                  <li>Pie chart showing fund allocation</li>
                  <li>Note on financial health and reserve status</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-foreground">VI. DONOR AND SUPPORTER RECOGNITION</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>List donors by tier (Founding, Cornerstone, Builder, Supporter)</li>
                  <li>Corporate and institutional sponsors</li>
                  <li>In-kind contributors</li>
                  <li>Volunteer appreciation</li>
                </ul>
              </div>
              <div>
                <p className="font-bold text-foreground">VII. BOARD OF DIRECTORS AND LEADERSHIP</p>
                <p>Names, titles, and brief bios of all board members and key staff. Demonstrate the expertise and diversity of your leadership team.</p>
              </div>
              <div>
                <p className="font-bold text-foreground">VIII. LOOKING AHEAD</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Goals for the upcoming year</li>
                  <li>New programs or expansions planned</li>
                  <li>Capital campaign or major initiative announcements</li>
                  <li>Call to action for donors, volunteers, and partners</li>
                </ul>
              </div>
            </div>
          </DocSection>

          <DocSection title="Donor Acknowledgment Letter" icon={Mail} id="donor-letter">
            <p className="font-bold text-foreground text-lg mb-4">DONOR ACKNOWLEDGMENT LETTER TEMPLATE — FROM THE GROUND UP</p>
            <p className="text-sm italic mb-4">IRS requires written acknowledgment for any single contribution of $250 or more. Best practice is to acknowledge all gifts. Send within 48 hours of receiving the donation.</p>
            <div className="space-y-6">
              <div className="p-4 bg-muted/30 border border-border rounded-xl text-sm space-y-4">
                <p>[Organization Letterhead]</p>
                <p>[Date]</p>
                <p>[Donor Name]<br/>[Address]</p>
                <p>Dear [Donor Name],</p>
                <p>On behalf of From The Ground Up and the communities we serve, thank you for your generous contribution of <strong>$[AMOUNT]</strong> received on <strong>[DATE]</strong>.</p>
                <p>Your gift will directly support [SPECIFIC IMPACT — e.g., "providing hands-on construction training for 10 aspiring tradespeople in Washington, DC" or "purchasing essential safety equipment for our electrical systems program"].</p>
                <p>[Optional: Share a brief impact story or statistic. Example: "Last year, 92% of our graduates secured employment within 90 days, earning an average starting salary of $45,000. Your support makes this possible."]</p>
                <p>From The Ground Up is a 501(c)(3) tax-exempt organization. Our EIN is [INSERT EIN]. <strong>No goods or services were provided in exchange for this contribution</strong> [OR: "In exchange for your contribution, you received [DESCRIPTION OF GOODS/SERVICES] with a fair market value of $[AMOUNT]. Your tax-deductible amount is $[DONATION MINUS FMV]."]</p>
                <p>Please retain this letter for your tax records.</p>
                <p>With gratitude,</p>
                <p>Jeffrey Williams<br/>Founder & Executive Director<br/>From The Ground Up<br/>[Phone] | [Email]</p>
              </div>
              <div className="p-4 bg-primary/5 border border-primary/20 rounded-xl">
                <p className="text-sm font-bold text-foreground mb-2">IRS Requirements for Gift Acknowledgment:</p>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  <li>Name of the organization</li>
                  <li>Amount of cash contribution or description of non-cash contribution</li>
                  <li>Statement that no goods or services were provided in return (or description and value of any goods/services)</li>
                  <li>Must be provided before the donor files their tax return for the year of the gift</li>
                  <li>For contributions over $250, the donor needs this written acknowledgment to claim a deduction</li>
                </ul>
              </div>
            </div>
          </DocSection>

          <DocSection title="Partnership / MOU Agreement" icon={Handshake} id="partnership-mou">
            <p className="font-bold text-foreground text-lg mb-4">MEMORANDUM OF UNDERSTANDING (MOU) — FROM THE GROUND UP</p>
            <p className="text-sm italic mb-4">Use this template when formalizing partnerships with employers, training centers, community organizations, government agencies, or educational institutions.</p>
            <div className="space-y-6">
              <div>
                <p className="font-bold text-foreground">PARTIES</p>
                <p className="mt-2">This Memorandum of Understanding ("MOU") is entered into between:</p>
                <p className="mt-2"><strong>From The Ground Up</strong> ("FTGU"), a District of Columbia 501(c)(3) nonprofit corporation, with its principal office at [ADDRESS];</p>
                <p className="mt-2">and</p>
                <p className="mt-2"><strong>[PARTNER ORGANIZATION NAME]</strong> ("Partner"), a [TYPE OF ENTITY] with its principal office at [ADDRESS].</p>
              </div>
              <div>
                <p className="font-bold text-foreground">PURPOSE</p>
                <p className="mt-2">The purpose of this MOU is to establish a collaborative partnership between FTGU and Partner to [DESCRIBE PURPOSE — e.g., "provide apprenticeship placement opportunities for FTGU program graduates" or "co-deliver a construction training curriculum" or "provide job site access for hands-on training"].</p>
              </div>
              <div>
                <p className="font-bold text-foreground">SCOPE OF COLLABORATION</p>
                <p className="mt-2 font-bold">FTGU agrees to:</p>
                <ol className="list-decimal pl-6 space-y-1 mt-1">
                  <li>[Specific commitment — e.g., "Provide trained, safety-certified graduates ready for entry-level positions"]</li>
                  <li>[Specific commitment — e.g., "Share curriculum content and training outcomes data"]</li>
                  <li>[Specific commitment — e.g., "Coordinate scheduling and logistics for joint training sessions"]</li>
                  <li>[Specific commitment — e.g., "Maintain insurance coverage for all FTGU participants"]</li>
                </ol>
                <p className="mt-4 font-bold">Partner agrees to:</p>
                <ol className="list-decimal pl-6 space-y-1 mt-1">
                  <li>[Specific commitment — e.g., "Provide apprenticeship slots for a minimum of [X] FTGU graduates per year"]</li>
                  <li>[Specific commitment — e.g., "Allow FTGU students access to job sites for supervised training"]</li>
                  <li>[Specific commitment — e.g., "Provide mentorship and subject matter expertise"]</li>
                  <li>[Specific commitment — e.g., "Share industry-specific safety protocols and equipment"]</li>
                </ol>
              </div>
              <div>
                <p className="font-bold text-foreground">TERM AND TERMINATION</p>
                <p className="mt-2">This MOU shall be effective from [START DATE] through [END DATE], a period of [X] months/years. Either party may terminate this MOU with [30/60/90] days' written notice. This MOU may be renewed by mutual written agreement of both parties.</p>
              </div>
              <div>
                <p className="font-bold text-foreground">FINANCIAL ARRANGEMENTS</p>
                <p className="mt-2">[Describe any financial terms — e.g., "This MOU does not involve the exchange of funds between the parties" or "Partner agrees to contribute $[AMOUNT] toward [SPECIFIC PURPOSE]" or "Costs will be shared as follows..."]</p>
              </div>
              <div>
                <p className="font-bold text-foreground">CONFIDENTIALITY</p>
                <p className="mt-2">Both parties agree to maintain the confidentiality of any proprietary information shared during the course of this partnership, including student records, business information, and training materials.</p>
              </div>
              <div>
                <p className="font-bold text-foreground">LIABILITY AND INSURANCE</p>
                <p className="mt-2">Each party shall maintain appropriate insurance coverage for its respective activities under this MOU. Neither party shall be liable for the acts or omissions of the other party's employees, agents, or volunteers.</p>
              </div>
              <div>
                <p className="font-bold text-foreground">DISPUTE RESOLUTION</p>
                <p className="mt-2">The parties agree to resolve any disputes arising from this MOU through good-faith negotiation. If negotiation fails, the parties will seek mediation before pursuing any legal remedies.</p>
              </div>
              <div className="mt-8 pt-4 border-t border-border">
                <p className="font-bold text-foreground mb-4">SIGNATURES</p>
                <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <p className="font-bold text-foreground text-sm">FROM THE GROUND UP</p>
                    <p>Signature: _________________________</p>
                    <p>Name: Jeffrey Williams</p>
                    <p>Title: Executive Director</p>
                    <p>Date: _____________</p>
                  </div>
                  <div className="space-y-4">
                    <p className="font-bold text-foreground text-sm">[PARTNER ORGANIZATION]</p>
                    <p>Signature: _________________________</p>
                    <p>Name: _________________________</p>
                    <p>Title: _________________________</p>
                    <p>Date: _____________</p>
                  </div>
                </div>
              </div>
            </div>
          </DocSection>

        </div>
      </section>

      <section className="py-16 bg-foreground text-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FileText className="w-16 h-16 text-accent mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
            Ready to Build From The Ground Up
          </h2>
          <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto">
            These documents are your blueprint. Follow the Startup Checklist to put them into action, step by step.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/startup-guide"
              className="px-8 py-4 rounded-2xl bg-accent text-accent-foreground font-bold text-lg hover:bg-accent/90 transition-colors"
            >
              View Startup Checklist
            </Link>
            <Link
              href="/bylaws"
              className="px-8 py-4 rounded-2xl bg-white/10 text-white font-bold text-lg hover:bg-white/20 transition-colors"
            >
              View Bylaws
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
