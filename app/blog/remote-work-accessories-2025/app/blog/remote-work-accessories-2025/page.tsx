// app/blog/remote-work-accessories-2025/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Remote Work Accessories 2025: Tools for a Smarter Home Office",
  description:
    "Must-have remote work accessories for 2025. No prices shown — product buttons link to Amazon.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-10 prose prose-slate">
      {/* Hero placeholder (pas d'image) */}
      <div
        aria-hidden
        className="mb-6 h-48 w-full rounded-xl bg-slate-200 grid place-items-center text-slate-500"
      >
        (Hero image coming soon)
      </div>

      <h1>Remote Work Accessories 2025: Tools for a Smarter Home Office</h1>
      <p className="text-sm text-slate-500">Updated: September 23, 2025 • 9 min read</p>

      <p>
        Working from home is easier when your setup is smart, comfortable, and organized.
        Below are curated accessories that improve productivity and comfort. We removed all
        prices—buttons go to Amazon so visitors can check the current price there.
      </p>

      <hr />

      <h2>1) Ergonomic Chair Cushion</h2>
      <p>
        Better posture, less fatigue. A memory-foam cushion can make long sessions much
        more comfortable without changing your whole chair.
      </p>
      <a
        className="inline-block rounded-lg border px-4 py-2 no-underline hover:bg-slate-50"
        href="https://www.amazon.com/s?k=ergonomic+chair+cushion"
        target="_blank"
        rel="noopener noreferrer"
      >
        Check on Amazon
      </a>

      <h2>2) Adjustable Laptop Stand</h2>
      <p>
        Raise your screen to eye level to reduce neck strain. Foldable models are great for
        small desks or travel.
      </p>
      <a
        className="inline-block rounded-lg border px-4 py-2 no-underline hover:bg-slate-50"
        href="https://www.amazon.com/s?k=adjustable+laptop+stand"
        target="_blank"
        rel="noopener noreferrer"
      >
        Check on Amazon
      </a>

      <h2>3) USB-C Hub / Dock</h2>
      <p>
        Add HDMI, USB-A, SD card and Ethernet to modern laptops in one small hub. Look for
        reliable power delivery (PD) and 4K@60Hz output if you need it.
      </p>
      <a
        className="inline-block rounded-lg border px-4 py-2 no-underline hover:bg-slate-50"
        href="https://www.amazon.com/s?k=usb-c+hub+4k+60hz+pd"
        target="_blank"
        rel="noopener noreferrer"
      >
        Check on Amazon
      </a>

      <h2>4) Noise-Cancelling Headphones</h2>
      <p>
        Keep focus in noisy environments. ANC headphones help during calls and deep-work
        sessions.
      </p>
      <a
        className="inline-block rounded-lg border px-4 py-2 no-underline hover:bg-slate-50"
        href="https://www.amazon.com/s?k=noise+cancelling+headphones"
        target="_blank"
        rel="noopener noreferrer"
      >
        Check on Amazon
      </a>

      <h2>5) LED Desk Lamp with Dimming</h2>
      <p>
        Adjustable brightness and color temperature reduce eye strain and make your desk look great.
      </p>
      <a
        className="inline-block rounded-lg border px-4 py-2 no-underline hover:bg-slate-50"
        href="https://www.amazon.com/s?k=led+desk+lamp+dimming"
        target="_blank"
        rel="noopener noreferrer"
      >
        Check on Amazon
      </a>

      <hr />
      <p className="text-xs text-slate-500">
        Disclosure: As an Amazon Associate, we may earn commissions from qualifying purchases.
        This does not affect the price you pay.
      </p>
    </main>
  );
}
