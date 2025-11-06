import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Suspense } from "react"
import { Toaster } from "react-hot-toast"
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "AnadjyTech - Your Tech Guide",
  description:
    "Discover the latest tech gadgets, reviews, and buying guides at AnadjyTech. Your trusted source for smart home devices, audio equipment, and innovative technology.",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-64x64.png", sizes: "64x64", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <head>
        <link rel="stylesheet" href="/assets/css/interactions.css" />

        {/* Pinterest Verification */}
        <meta
          name="p:domain_verify"
          content="877682681d50af444d2d6257195ebaff2"
        />
      </head>

      <body>
        <Suspense>{children}</Suspense>
        <Toaster />

        {/* Existing Scripts */}
        <Script src="/assets/js/app.js" strategy="afterInteractive" />
        <Script src="/assets/js/search-autocomplete.js" strategy="lazyOnload" />


        {/* AnadjyTech AI Chatbot Widget */}
        <style>{`
          :root { --at-blue:#1e90ff; --at-dark:#0b1220; --at-light:#f5f7fb; }
          #atbot-toggle {
            position:fixed; right:16px; bottom:96px;
            z-index:9999999999; width:56px; height:56px; border-radius:50%;
            display:flex; align-items:center; justify-content:center;
            background:var(--at-blue); color:#fff; box-shadow:0 8px 24px rgba(0,0,0,.2);
            font-size:24px; cursor:pointer; border:none; outline:0;
          }
          #atbot-panel {
            position:fixed; right:12px; bottom:160px;
            width:min(420px, 92vw); height:65vh; max-height:760px;
            background:#fff; border-radius:16px; overflow:hidden;
            box-shadow:0 16px 40px rgba(0,0,0,.28); z-index:9999999999; display:none;
          }
          #atbot-header {
            background:linear-gradient(135deg, #0b63ff, #00a0ff);
            color:#fff; padding:14px 16px; display:flex; align-items:center; gap:10px;
          }
          #atbot-header img { width:28px; height:28px; object-fit:contain; }
          #atbot-title { font-weight:700; letter-spacing:.2px; }
          #atbot-body { background:var(--at-light); height:calc(62vh - 122px); overflow:auto; padding:12px; }
          .msg { max-width:90%; margin:10px 0; padding:10px 12px; border-radius:12px; line-height:1.35; }
          .bot { background:#fff; color:#111; border:1px solid #e6e8ee; }
          .user { background:var(--at-blue); color:#fff; margin-left:auto; }
          .chips { display:flex; flex-wrap:wrap; gap:8px; padding:8px 4px; }
          .chip { background:#fff; border:1px solid #e6e8ee; border-radius:999px; padding:8px 12px; font-size:13px; cursor:pointer; }
          #atbot-inputbar { display:flex; gap:8px; padding:10px; background:#fff; border-top:1px solid #e6e8ee; }
          #atbot-input { flex:1; border:1px solid #e6e8ee; border-radius:12px; padding:12px 14px; outline:0; }
          #atbot-send { background:var(--at-blue); color:#fff; border:none; border-radius:12px; padding:0 14px; font-weight:600; }
          @media (max-width:520px){
            #atbot-panel { right:8px; left:8px; width:auto; height:64vh; bottom:148px; }
          }
        `}</style>

        <button id="atbot-toggle" aria-label="Open chat">💬</button>

        <div id="atbot-panel" role="dialog" aria-label="AnadjyTech AI Assistant">
          <div id="atbot-header">
            <img src="/apple-touch-icon.png" className="w-full h-full object-cover" alt="AnadjyTech" />
            <div>
              <div id="atbot-title">AnadjyTech AI</div>
              <div style={{ opacity: ".9", fontSize: "12px" }}>
                “The smart way to tech.”
              </div>
            </div>
            <button
              id="atbot-close"
              style={{
                marginLeft: "auto",
                background: "transparent",
                border: 0,
                color: "#fff",
                fontSize: "20px",
                cursor: "pointer",
              }}
            >
              ✕
            </button>
          </div>
          <div id="atbot-body">
            <div className="msg bot">
              Hi 👋 Need help finding the right gadget? I can answer in English,
              Français, or Español.
            </div>
            <div className="chips">
              <div className="chip">Best wireless earbuds under $50</div>
              <div className="chip">Show phone accessories</div>
              <div className="chip">I want a smart gift</div>
              <div className="chip">How to subscribe?</div>
            </div>
          </div>
          <div id="atbot-inputbar">
            <input
              id="atbot-input"
              placeholder="Ask about gadgets, deals, categories..."
            />
            <button id="atbot-send">Send</button>
          </div>
        </div>

        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function(){
              const $ = s => document.querySelector(s);
              const panel=$("#atbot-panel"), toggle=$("#atbot-toggle"), close=$("#atbot-close");
              const body=$("#atbot-body"), input=$("#atbot-input"), send=$("#atbot-send");

              const chipsHandler=(e)=>{
                if(e.target.classList.contains('chip')){
                  input.value=e.target.textContent;
                  send.click();
                }
              };

              const addMsg=(text,cls='bot')=>{
                const div=document.createElement('div');
                div.className='msg '+cls; div.textContent=text; body.appendChild(div);
                body.scrollTop=body.scrollHeight;
              };

              const sendMsg=async ()=>{
                const text=input.value.trim(); if(!text) return;
                addMsg(text,'user'); input.value='';
                addMsg('Thinking…','bot');
                try{
                  const r=await fetch('/api/atbot', {
                    method:'POST',
                    headers:{'Content-Type':'application/json'},
                    body: JSON.stringify({ message:text, referrer: location.pathname })
                  });
                  const data=await r.json();
                  body.lastElementChild.textContent = (data.reply || 'Sorry, I had trouble answering.');
                }catch(err){
                  body.lastElementChild.textContent = 'Network error. Please try again.';
                }
              };

              toggle.onclick=()=>{ panel.style.display='block'; toggle.style.display='none'; };
              close.onclick =()=>{ panel.style.display='none'; toggle.style.display='flex'; };
              send.onclick = sendMsg;
              input.addEventListener('keydown', e=>{ if(e.key==='Enter') sendMsg(); });
              body.addEventListener('click', chipsHandler);

              let lastY=window.scrollY;
              window.addEventListener('scroll',()=>{
                const down = window.scrollY > lastY;
                lastY = window.scrollY;
                toggle.style.opacity = down ? .0 : 1;
              }, {passive:true});
            })();
          `,
          }}
        />
      </body>
    </html>
  )
}
