import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/2349043375328?text=Hello%20Chef%20Tilda's%2C%20I'd%20like%20to%20enquire%20about%20your%20courses."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 group"
    >
      <span className="absolute inset-0 rounded-full bg-emerald-500/40 animate-ping" />
      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-emerald-500 text-white shadow-luxury group-hover:scale-110 transition-transform">
        <MessageCircle size={26} />
      </span>
    </a>
  );
}
