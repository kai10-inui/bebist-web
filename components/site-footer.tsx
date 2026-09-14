import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <nav className="footer-nav" aria-label="フッターナビゲーション">
        <Link href="/privacy">プライバシーポリシー</Link>
        <Link href="/terms">利用規約</Link>
        <Link href="/contact">お問い合わせ</Link>
      </nav>
      <p>© {new Date().getFullYear()} べびスト</p>
    </footer>
  );
}
