import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link className="brand" href="/" aria-label="べびスト トップページ">
          <span className="brand-mark" aria-hidden="true">●</span>
          <span>べびスト</span>
        </Link>
        <nav className="header-nav" aria-label="主要ナビゲーション">
          <Link href="/privacy">プライバシー</Link>
          <Link href="/terms">利用規約</Link>
          <Link href="/contact">お問い合わせ</Link>
        </nav>
      </div>
    </header>
  );
}
