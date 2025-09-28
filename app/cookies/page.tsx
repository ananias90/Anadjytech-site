export const metadata = {
  title: "Cookies | AnadjyTech",
  description: "How AnadjyTech uses cookies and similar technologies."
};
export default function CookiesPage() {
  return (
    <main className="container mx-auto px-4 py-10 prose prose-invert">
      <h1>Cookies</h1>
      <p>Last updated: {new Date().toISOString().split("T")[0]}</p>
      <p>We use strictly necessary cookies and may add privacy-friendly analytics later (aggregate only). You can block cookies in your browser settings.</p>
      <p>Contact: <a href="mailto:contact@anadjytech.com">contact@anadjytech.com</a></p>
    </main>
  );
}
