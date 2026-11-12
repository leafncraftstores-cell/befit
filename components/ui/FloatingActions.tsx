import { Phone } from "lucide-react";
import { telLink, whatsappLink } from "@/lib/contact";
import { WhatsappIcon } from "./SocialIcons";

/** Floating WhatsApp + call buttons (tablet/desktop; mobile uses MobileBottomBar). */
export function FloatingActions() {
  return (
    <div className="fixed right-5 bottom-5 z-40 hidden flex-col gap-3 md:flex">
      <a
        href={telLink}
        aria-label="Call BE-FIT Fitness"
        className="grid size-14 place-items-center rounded-full bg-white text-brand-black shadow-xl transition-transform hover:scale-110"
      >
        <Phone className="size-6" />
      </a>
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with BE-FIT Fitness on WhatsApp"
        className="relative grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-xl transition-transform hover:scale-110"
      >
        <span
          aria-hidden
          className="absolute inset-0 animate-ping rounded-full bg-[#25D366] opacity-30 motion-reduce:hidden"
        />
        <WhatsappIcon className="relative size-7" />
      </a>
    </div>
  );
}
