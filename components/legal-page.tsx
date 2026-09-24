import type { ReactNode } from "react";

type LegalPageProps = {
  title: string;
  description: string;
  revisedAt?: string;
  children: ReactNode;
};

export function LegalPage({ title, description, revisedAt, children }: LegalPageProps) {
  return (
    <main className="page-shell legal-page">
      <header className="page-heading">
        <p className="eyebrow">べびスト</p>
        <h1>{title}</h1>
        <p>{description}</p>
        <p className="updated-at">制定日：2026年9月15日</p>
        {revisedAt ? <p className="updated-at">改定日：{revisedAt}</p> : null}
      </header>
      <article className="legal-content">{children}</article>
    </main>
  );
}
