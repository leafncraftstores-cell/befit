"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

const ContactForm = dynamic(() => import("./ContactForm").then((m) => m.ContactForm), {
  ssr: false,
  loading: () => <FormSkeleton />,
});

/**
 * Loads the enquiry form (react-hook-form + zod) only when it's about to scroll into view,
 * which keeps ~20 KB of validation code out of the initial page load.
 * The skeleton matches the form's height, so there's no layout shift.
 */
export function LazyContactForm() {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Load immediately if arriving via #enquiry or the browser lacks IO
    if (window.location.hash === "#enquiry" || !("IntersectionObserver" in window)) {
      setShow(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e?.isIntersecting) {
          setShow(true);
          io.disconnect();
        }
      },
      { rootMargin: "800px 0px" },
    );
    io.observe(el);
    const onHash = () => window.location.hash === "#enquiry" && setShow(true);
    window.addEventListener("hashchange", onHash);
    return () => {
      io.disconnect();
      window.removeEventListener("hashchange", onHash);
    };
  }, []);

  return <div ref={ref}>{show ? <ContactForm /> : <FormSkeleton />}</div>;
}

function FormSkeleton() {
  const bar = "mt-2 h-[3.25rem] w-full border-b-2 border-white/20 bg-white/[0.04]";
  const label = "text-sm font-semibold tracking-wider text-white/85 uppercase";
  return (
    <div className="grid gap-5 sm:grid-cols-2" aria-busy="true" aria-label="Loading enquiry form">
      <div className="sm:col-span-2">
        <p className={label}>Full name</p>
        <div className={bar} />
      </div>
      <div className="sm:col-span-2">
        <p className={label}>Phone number</p>
        <div className={bar} />
      </div>
      <div>
        <p className={label}>Your goal</p>
        <div className={bar} />
      </div>
      <div>
        <p className={label}>Preferred time</p>
        <div className={bar} />
      </div>
      <div className="sm:col-span-2">
        <div className="h-14 w-full bg-brand-red/60" />
        <p className="mt-3 text-center text-xs text-white/60">
          Submitting opens WhatsApp with your details prefilled. Nothing is stored on this website.
        </p>
      </div>
    </div>
  );
}
