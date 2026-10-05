type Post = {
  title: string;
  date: string;
  emoji: string;
  bg: string;
};

const posts: Post[] = [
  {
    title: "What if machines become more intelligent than human?",
    date: "Oct 1, 2019",
    emoji: "🌾",
    bg: "bg-[#d9d3c3]",
  },
  {
    title: "Similarities between Money Heist & UX Design",
    date: "May 28, 2020",
    emoji: "🎭",
    bg: "bg-[#3c2a4d]",
  },
  {
    title: "Paytm or PhonePe : The age of digital money",
    date: "Jan 3, 2020",
    emoji: "💳",
    bg: "bg-[#bcd7ea]",
  },
  {
    title: "Website redesign for a design agency",
    date: "Sep 1, 2020",
    emoji: "🖼️",
    bg: "bg-[#f0d97e]",
  },
];

export function CuriositySection() {
  return (
    <section className="bg-background py-(--spacing-section-y)">
      <div className="mx-auto max-w-(--container-default) px-6 text-center sm:px-8 lg:px-12">
        <h2 className="text-3xl font-semibold tracking-(--tracking-tight) sm:text-4xl">
          A record of curiosity
        </h2>
        <p className="mx-auto mt-2 max-w-md font-serif text-lg italic text-muted-foreground">
          The things I learn, question, &amp; occasionally write about.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-6 text-left sm:grid-cols-4">
          {posts.map((post) => (
            <article key={post.title} className="flex flex-col gap-3">
              <div
                className={`flex aspect-square items-center justify-center rounded-xl ${post.bg}`}
              >
                <span className="text-4xl">{post.emoji}</span>
              </div>
              <h3 className="text-sm font-medium">{post.title}</h3>
              <span className="text-xs text-muted">{post.date}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
