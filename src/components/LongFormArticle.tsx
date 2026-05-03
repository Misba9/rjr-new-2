interface LongFormArticleProps {
  title: string;
  paragraphs: string[];
  id?: string;
}

export default function LongFormArticle({ title, paragraphs, id = 'long-form-guide' }: LongFormArticleProps) {
  return (
    <section className="bg-gray-50 py-14 sm:py-16" aria-labelledby={`${id}-heading`}>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 id={`${id}-heading`} className="mb-8 text-2xl font-bold text-gray-900 sm:text-3xl">
          {title}
        </h2>
        <div className="prose prose-lg max-w-none text-gray-700">
          {paragraphs.map((p, i) => (
            <p key={i} className="mb-5 leading-relaxed last:mb-0">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
