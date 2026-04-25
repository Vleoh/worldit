const whatsappHref = 'https://wa.me/5491122743626';

export default function WhatsAppFloatingButton() {
  return (
    <a
      href={whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Hablar por WhatsApp con World IT"
      className="fixed bottom-4 right-4 z-[70] inline-flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-[#25D366] p-0 text-[#0b141a] shadow-[0_18px_40px_rgba(37,211,102,0.32)] transition-transform duration-200 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 sm:bottom-6 sm:right-6 sm:h-auto sm:w-auto sm:gap-3 sm:px-4 sm:py-3"
    >
      <span className="inline-flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-white shadow-[inset_0_0_0_1px_rgba(11,20,26,0.08)] sm:h-12 sm:w-12">
        <img src="/img/whatsapppng.webp" alt="" aria-hidden="true" className="h-9 w-9 object-contain sm:h-8 sm:w-8" />
      </span>
      <span className="hidden pr-1 text-left sm:block">
        <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.18em] text-[#0b141a]/72">
          WhatsApp
        </span>
        <span className="block text-sm font-extrabold tracking-[0.02em]">Hablar ahora</span>
      </span>
    </a>
  );
}
