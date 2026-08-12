import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Chapter = ({
  eyebrow,
  title,
  children,
}: {
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
}) => (
  <section className="mb-16">
    {eyebrow && (
      <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        {eyebrow}
      </span>
    )}
    <h2 className="font-display mb-6 text-2xl md:text-3xl font-extrabold text-foreground">
      {title}
    </h2>
    <div className="space-y-5 text-muted-foreground leading-loose">{children}</div>
  </section>
);

const Divider = () => (
  <div className="my-12 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />
);

const About = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="relative z-50">
        <div className="container mx-auto flex items-center justify-between px-6 py-5 md:px-16">
          <Link
            to="/"
            className="font-display flex h-12 w-12 items-center justify-center rounded-2xl bg-background text-lg font-extrabold text-primary nm-extruded-sm"
            aria-label="Back to home"
          >
            AJ
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 rounded-2xl bg-background px-5 py-3 text-sm font-medium text-muted-foreground nm-extruded-sm transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" /> Home
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="container relative mx-auto px-6 md:px-16 lg:px-24">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-6 inline-block rounded-full bg-background px-6 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground nm-inset-sm">
              The Journey of a Builder
            </span>
            <h1 className="font-display text-4xl leading-tight md:text-6xl font-extrabold">
              Beyond the{" "}
              <span className="bg-gradient-to-br from-foreground to-primary bg-clip-text text-transparent">
                Source Code.
              </span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground leading-relaxed">
              I'm Aman Jha, a systems builder who believes that software is the
              most powerful tool for human curiosity.
            </p>
          </div>
        </div>
      </section>

      {/* Body */}
      <main className="container mx-auto px-6 pb-8 md:px-16 lg:px-24">
        <article className="mx-auto max-w-3xl">
          <div className="rounded-[2.5rem] bg-background p-8 md:p-12 nm-extruded">
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
              It started with a simple, slightly obsessive question
            </p>
            <p className="font-display mt-4 text-2xl md:text-3xl font-extrabold text-foreground">
              "What if I could make a computer do that?"
            </p>
            <p className="mt-6 leading-loose text-muted-foreground">
              That's basically the origin story of every project on this site.
              I'm Aman Jha, a third-year CSE student at IIIT Una, Himachal
              Pradesh. Somewhere between my first "Hello, World" and my most
              recent late-night debugging session, that curiosity turned into a
              habit of building things — logic, AI, and a little stubbornness,
              aimed at real problems.
            </p>
          </div>

          <Divider />

          <Chapter eyebrow="Foundations" title="From syntax to systems">
            <p>
              Like most CS students, I built my foundation on Python, C++, and
              SQL — grinding through Angela Yu's 100 Days of Code and enough
              LeetCode problems to make DSA feel like muscle memory. But solving
              problems on a screen stopped being enough.
            </p>
            <p>
              I wanted to build things that <em>did</em> something — real
              applications with real consequences if the backend fell over at
              2am. That's what pulled me from pure algorithms into backend
              development, and eventually, AI.
            </p>
          </Chapter>

          <Chapter eyebrow="Agents" title="Where AI stopped being a buzzword">
            <p>
              A lot of people talk about "AI agents" without building one. I
              wanted to go deeper — orchestrating actual reasoning steps, not
              just single prompts. That curiosity led me to LangGraph and
              LangChain, which let me treat AI generation as a real state
              machine.
            </p>
            <div className="grid gap-5 md:grid-cols-2 py-2">
              {[
                {
                  title: "Momentum Crypto Suite",
                  body: "Multi-agent architecture with CrewAI tracking news, price, and sentiment in concert.",
                },
                {
                  title: "Fitness Intelligence",
                  body: "Flow-based pipeline where goals pass through BMR and calorie estimation nodes with precise Gemini reasoning.",
                },
              ].map((c) => (
                <div
                  key={c.title}
                  className="rounded-3xl bg-background p-6 nm-inset-sm"
                >
                  <h3 className="font-display mb-2 font-bold text-foreground">
                    {c.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {c.body}
                  </p>
                </div>
              ))}
            </div>
            <p>
              It taught me real agentic design: knowing when to give AI
              autonomy, and when to constrain it so it doesn't hallucinate
              confidently.
            </p>
          </Chapter>

          <Chapter
            eyebrow="Understanding"
            title="Teaching machines to understand — and to remember"
          >
            <p>
              Not all AI work is generation. My Complaint Management System uses
              DistilBERT and TF-IDF to classify and prioritize complaints
              automatically — unglamorous, but genuinely useful. And
              retrieval-augmented generation changed how I think about giving AI
              knowledge.
            </p>
            <p>
              Seek Shop uses FAISS and Mistral embeddings for real semantic
              product search, while DocIntel applies that same RAG approach to
              PDFs, turning static documents into something you can actually
              converse with.
            </p>
          </Chapter>

          <Chapter
            eyebrow="Engineering"
            title="Systems that hold up, not just demo well"
          >
            <p>
              A demo that works once isn't the same as a system that works in
              production. So I spend real time on the unglamorous backend layer
              — JWT auth, PostgreSQL/SQLAlchemy modeling, Celery and Redis for
              async work, rate limiting.
            </p>
            <p>
              Drink Discover pushed this furthest: a hybrid data architecture
              syncing live API data with local persistence, wrapped in full
              CI/CD and Docker deployment — the project that taught me what
              "production-grade" actually means.
            </p>
          </Chapter>

          <Chapter eyebrow="Honesty" title="Where I am, honestly">
            <p className="rounded-3xl bg-background p-6 nm-inset italic">
              Not everything here is finished or polished — some projects are
              live (Seek Shop is running right now), others are rougher learning
              builds with loose ends. I'd rather own that than oversell it. I
              think shipping something imperfect and iterating says more than a
              portfolio of things too polished to have ever been tested.
            </p>
          </Chapter>

          <Chapter eyebrow="Philosophy" title="What keeps me building">
            <p>
              I'm drawn to where clean theory meets messy reality — where an
              elegant algorithm has to survive real data and real constraints.
              I'm early in this journey, but I've learned that passion plus
              actually finishing things is what turns a class project into
              something people use.
            </p>
          </Chapter>

          <div className="pb-4 text-center">
            <Link
              to="/#contact"
              className="font-display inline-flex items-center gap-3 rounded-2xl bg-primary px-8 py-4 font-bold text-primary-foreground nm-primary transition-transform hover:scale-105"
            >
              Let's Discuss Systems <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </article>
      </main>

      <footer className="py-12 px-6 text-center">
        <p className="text-sm text-muted-foreground">
          Built with curiosity and logic. © 2024 Aman Jha.
        </p>
      </footer>
    </div>
  );
};

export default About;
