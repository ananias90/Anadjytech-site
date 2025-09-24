// app/blog/remote-work-accessories-2025/page.tsx
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Remote Work Accessories 2025: Tools for a Smarter Home Office",
  description:
    "Boost productivity and comfort with ergonomic, audio/video, and connectivity accessories. No prices shown—Amazon buttons only.",
};

export default function Page() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-10 prose prose-slate">
      <header className="not-prose mb-8">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          Remote Work Accessories 2025: Tools for a Smarter Home Office
        </h1>
        <p className="mt-3 text-slate-600">
          Curated picks to make your desk more comfortable, efficient, and tidy—no
          prices shown on-site. “Check price on Amazon” links only.
        </p>
      </header>

      {/* SECTION – ERGONOMIE */}
      <section>
        <h2>Ergonomics</h2>
        <h3>Adjustable Laptop Stand</h3>
        <ul>
          <li>Raises laptop to eye level for better posture</li>
          <li>Aluminium build, portable</li>
          <li>Vent cutouts help cooling</li>
        </ul>
        <p className="not-prose">
          <Link
            href="https://www.amazon.com/s?k=adjustable+laptop+stand&tag=anadjytech-20"
            className="inline-flex items-center justify-center rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Check price on Amazon
          </Link>
        </p>

        <h3>Memory-Foam Seat Cushion</h3>
        <ul>
          <li>Relieves pressure during long sessions</li>
          <li>Washable cover</li>
        </ul>
        <p className="not-prose">
          <Link
            href="https://www.amazon.com/s?k=memory+foam+seat+cushion&tag=anadjytech-20"
            className="inline-flex items-center justify-center rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Check price on Amazon
          </Link>
        </p>
      </section>

      {/* SECTION – AUDIO/VIDEO */}
      <section>
        <h2>Audio & Video</h2>
        <h3>USB Microphone</h3>
        <ul>
          <li>Clear voice for calls and recordings</li>
          <li>Plug-and-play via USB</li>
        </ul>
        <p className="not-prose">
          <Link
            href="https://www.amazon.com/s?k=usb+microphone&tag=anadjytech-20"
            className="inline-flex items-center justify-center rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Check price on Amazon
          </Link>
        </p>

        <h3>1080p Webcam with Privacy Shutter</h3>
        <ul>
          <li>Sharp image, auto exposure</li>
          <li>Privacy shutter for peace of mind</li>
        </ul>
        <p className="not-prose">
          <Link
            href="https://www.amazon.com/s?k=1080p+webcam+privacy+shutter&tag=anadjytech-20"
            className="inline-flex items-center justify-center rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Check price on Amazon
          </Link>
        </p>
      </section>

      {/* SECTION – CONNECTIVITÉ */}
      <section>
        <h2>Connectivity & Power</h2>
        <h3>USB-C Hub (HDMI + USB + SD)</h3>
        <ul>
          <li>One-cable desk setup</li>
          <li>HDMI 4K, USB-A, SD card</li>
        </ul>
        <p className="not-prose">
          <Link
            href="https://www.amazon.com/s?k=usb-c+hub+hdmi+sd&tag=anadjytech-20"
            className="inline-flex items-center justify-center rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Check price on Amazon
          </Link>
        </p>

        <h3>65W GaN Charger</h3>
        <ul>
          <li>Fast charging for laptops/phones</li>
          <li>Compact GaN design</li>
        </ul>
        <p className="not-prose">
          <Link
            href="https://www.amazon.com/s?k=65w+gan+charger&tag=anadjytech-20"
            className="inline-flex items-center justify-center rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Check price on Amazon
          </Link>
        </p>
      </section>

      <footer className="mt-10 text-sm text-slate-500">
        As an Amazon Associate, we may earn commissions from qualifying purchases.
      </footer>
    </main>
  );
}
