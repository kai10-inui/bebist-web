import Link from "next/link";

const links = [
  { href: "/privacy", title: "プライバシーポリシー", text: "取り扱う情報と、その利用目的をご案内します。" },
  { href: "/terms", title: "利用規約", text: "べびストをご利用いただく際の条件をご案内します。" },
  { href: "/contact", title: "お問い合わせ", text: "ご質問や不具合のご連絡はこちらから。" },
];

export default function Home() {
  return (
    <main className="page-shell home-page">
      <section className="hero">
        <div className="hero-icon" aria-hidden="true">◌</div>
        <p className="eyebrow">育児用品のストック・在庫管理</p>
        <h1>べびスト</h1>
        <p>家族で使うベビー用品を、やさしく分かりやすく管理するためのアプリです。</p>
      </section>
      <section className="link-grid" aria-label="ご案内">
        {links.map((item) => (
          <Link className="info-card" href={item.href} key={item.href}>
            <span><strong>{item.title}</strong><small>{item.text}</small></span>
            <span className="chevron" aria-hidden="true">›</span>
          </Link>
        ))}
      </section>
    </main>
  );
}
