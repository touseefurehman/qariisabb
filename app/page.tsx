import { BookOpen, FileText, Languages, ListChecks, Mail, MessageCircle } from "lucide-react";
import NotesLeadForm from "@/components/NotesLeadForm";

const whatsapp = (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "").replace(/\D/g, "");
const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "";
const waHref = whatsapp
  ? `https://wa.me/${whatsapp}?text=${encodeURIComponent("Assalamu alaikum, I would like to get the Duroos-ul-Lughah notes.")}`
  : "#get-notes";

const offers = [
  { icon: BookOpen, title: "Complete Lesson-Wise Notes", text: "Every lesson of the textbook covered in order, so you always know where you are." },
  { icon: Languages, title: "Clear English Explanations", text: "Plain English that makes each Arabic concept easy to follow and revise." },
  { icon: ListChecks, title: "Important Vocabulary & Grammar", text: "The key words and grammar rules of each lesson, gathered in one place." },
  { icon: FileText, title: "Well-Organized Study Material", text: "Neat, consistent notes designed for quick revision before class or exams." },
];

export default function Home() {
  return (
    <main>
      <section className="bg-emerald-950 px-4 py-20 text-center text-white">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gold">English Notes | Arabic Learning Resources</p>
          <h1 className="font-display text-4xl font-bold sm:text-6xl">Duroos-ul-Lughah Notes</h1>
          <p className="mt-4 text-xl text-emerald-100">Master Arabic with Well-Organized Study Notes!</p>
          <p className="mx-auto mt-6 max-w-2xl text-emerald-100">Complete English notes for Arabic learners, carefully prepared to be comprehensive and easy to understand.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href="#get-notes" className="btn-primary">Get Your Notes Today</a>
            {whatsapp && (
              <a href={waHref} className="btn-whatsapp"><MessageCircle className="mr-2 h-5 w-5" aria-hidden />WhatsApp us</a>
            )}
          </div>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-display text-3xl font-bold text-emerald-900">Looking for high-quality notes?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-center text-ink-500">
            We provide carefully prepared, comprehensive, easy-to-understand English notes for the Duroos-ul-Lughah Arabic textbook, to help students understand their lessons and improve their Arabic language skills.
          </p>
          <h3 className="mt-12 text-center text-sm font-semibold uppercase tracking-widest text-gold-600">What We Offer</h3>
          <ul className="mt-6 grid gap-5 sm:grid-cols-2">
            {offers.map(({ icon: Icon, title, text }) => (
              <li key={title} className="rounded-2xl border border-sand bg-white p-6 shadow-sm">
                <Icon className="h-7 w-7 text-emerald-700" aria-hidden />
                <h4 className="mt-3 text-lg font-semibold text-emerald-900">{title}</h4>
                <p className="mt-1 text-ink-500">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="get-notes" className="bg-emerald-900 px-4 py-16 text-center text-white">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-display text-3xl font-bold">Get Your Notes Today!</h2>
          <p className="mt-4 text-emerald-100">Contact us to receive your Duroos-ul-Lughah notes and make your Arabic learning journey easier.</p>
          <div className="mt-8 rounded-2xl bg-white p-6 text-ink shadow-lg">
            <NotesLeadForm />
          </div>
          {email && (
            <a href={`mailto:${email}?subject=Duroos-ul-Lughah%20Notes`} className="btn-secondary mt-6">
              <Mail className="mr-2 h-5 w-5" aria-hidden />Email us
            </a>
          )}
          <p className="mt-10 font-display text-xl text-gold">Learn Smart. Study Better. Master Arabic.</p>
        </div>
      </section>
    </main>
  );
}
