import Link from "next/link";
import { Dumbbell, Phone } from "lucide-react";
import { telLink, whatsappLink } from "@/lib/contact";
import { WhatsappIcon } from "./SocialIcons";

/** Sticky bottom action bar on phones: Call · WhatsApp · Free Trial */
export function MobileBottomBar() {
  const item =
    "flex flex-1 flex-col items-center justify-center gap-1 py-2 text-[0.7rem] font-bold tracking-wider uppercase";
  return (
    <nav
      aria-label="Quick actions"
      className="fixed inset-x-0 bottom-0 z-40 flex border-t border-white/10 bg-brand-black/95 pb-[env(safe-area-inset-bottom)] backdrop-blur md:hidden"
    >
      <a href={telLink} className={`${item} text-white`}>
        <Phone className="size-5" aria-hidden />
        Call
      </a>
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        className={`${item} text-white`}
      >
        <WhatsappIcon className="size-5 text-[#25D366]" />
        WhatsApp
      </a>
      <Link href="/contact/#enquiry" className={`${item} bg-brand-red text-white`}>
        <Dumbbell className="size-5" aria-hidden />
        Free Trial
      </Link>
    </nav>
  );
}
