import Link from "next/link";

export default function Page({ params }: { params: { slug: string } }) {
  const title = params.slug
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return (
    <main>
      <section className="page-header">
        <div className="container">
          <h1 className="page-title">{title}</h1>
        </div>
      </section>

      <section className="page-content">
        <div className="container">
          <p>
            This is a placeholder page for <strong>{title}</strong>. Replace this content when you
            build this page.
          </p>
          <p>
            <Link href="/">Back to Home</Link>
          </p>
        </div>
      </section>
    </main>
  );
}
