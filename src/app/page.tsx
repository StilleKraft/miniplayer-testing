"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Page() {
  const router = useRouter();

  const SimpleViteComponent = dynamic(
    () =>
      import("http://localhost:3000/my-vite-esm-module.js").then(
        (mod) => mod.SimpleViteComponent
      ),
    {
      ssr: false,
      loading: () => <p>Memuat CDN Vite Component...</p>,
    }
  );
  const openPopup = () => {
    const width = 420;
    const height = 250;
    const left = window.screen.width - width - 50;
    const top = 50;

    const specs = `
    width=${width},
    height=${height},
    left=${left},
    top=${top},
    menubar=no,
    toolbar=no,
    location=no,
    status=no,
    resizable=yes,
    scrollbars=yes
  `;

    const newWindow = window.open(
      "https://video-vplus.rctiplus.com/test",
      "hahaPlayer",
      specs
    );
    if (newWindow) newWindow.focus();
  };

  // Listen untuk pesan dari tab baru
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (event.data.type === "functionComplete") {
        console.log("Pesan diterima dari tab baru:", event.data.message);
        console.log("Data:", event.data.data);

        // Tampilkan notifikasi atau lakukan action lain
        alert(`Tab baru selesai! Pesan: ${event.data.message}`);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="font-mono list-inside list-decimal text-sm/6 text-center sm:text-left">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
              src/app/page.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
        {/* <TestComponent /> */}
        {/* <ComponentKedua /> */}
        <SimpleViteComponent message="Hello from Next.js!" />
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>

        <button
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          onClick={openPopup}
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Buka Popup
        </button>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>

        <a
          href="/child-app"
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
        >
          ini untuk buka child
        </a>
        <button
          onClick={() => {
            // Safari-compatible window opening
            const newTab = window.open(
              "/test",
              "_blank",
              "noopener=no,noreferrer=no"
            );

            // Safari fallback: jika window.close() tidak bekerja, gunakan timer
            if (newTab) {
              // Check if Safari
              const isSafari = /^((?!chrome|android).)*safari/i.test(
                navigator.userAgent
              );

              if (isSafari) {
                // Safari: gunakan interval untuk check jika tab masih terbuka
                const checkInterval = setInterval(() => {
                  if (newTab.closed) {
                    clearInterval(checkInterval);
                    window.focus();
                  }
                }, 1000);

                // Cleanup setelah 30 detik
                setTimeout(() => {
                  clearInterval(checkInterval);
                }, 30000);
              } else {
                // Chrome/Firefox: gunakan method lama
                setTimeout(() => {
                  if (newTab && !newTab.closed) {
                    newTab.close();
                    window.focus();
                  }
                }, 5000);
              }
            }
          }}
          className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
        >
          Open New Tab (Cross-Browser)
        </button>
      </footer>
    </div>
  );
}
