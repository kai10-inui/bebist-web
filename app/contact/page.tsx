import type { Metadata } from "next";
import { CONTACT_EMAIL } from "@/lib/site";

export const metadata: Metadata = { title: "お問い合わせ", description: "べびストへのお問い合わせ方法をご案内します。" };

export default function ContactPage() {
  return (
    <main className="page-shell contact-page">
      <header className="page-heading"><p className="eyebrow">べびスト</p><h1>お問い合わせ</h1><p>ご質問や不具合について、以下の窓口までご連絡ください。</p></header>
      <section className="contact-card"><h2>メールでのお問い合わせ</h2><p className="contact-value">{CONTACT_EMAIL}</p></section>
      <section className="contact-guidance"><h2>お問い合わせの前に</h2><ul>
        <li>調査のため、必要に応じて「アカウントID」をお伺いする場合があります。</li>
        <li>アカウントIDは、アプリ内の「設定 → アカウント」から確認できます。</li>
        <li><strong>パスワード、認証コード、招待コードは送らないでください。</strong></li>
        <li>不具合の場合は、発生した日時、操作内容、アプリのバージョン、端末の種類を添えると確認がスムーズです。</li>
      </ul></section>
    </main>
  );
}
