import fa from '../locales/fa.json'
import en from '../locales/en.json'
export async function generateMetadata({ params: { locale } }) {
  const messages = locale === "fa" ? fa : en;

  return {
    title: messages.meta.title,
    description: messages.meta.description,
    keywords: messages.meta.keywords,
    authors: messages.meta.authors,
    creator: messages.meta.creator,
    openGraph: {
      ...messages.meta.openGraph
    },
    twitter: {
      ...messages.meta.twitter
    },
    metadataBase: new URL("https://poriyaaghamiri.ir")
  };
}
export default function LocaleLayout({ children, params: { locale } }) {
  const dir = locale === "fa" ? "rtl" : "ltr";

  return (
    <html lang={locale} dir={dir}>
      <body>{children}</body>
    </html>
  );
}
