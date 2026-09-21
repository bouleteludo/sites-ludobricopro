export default function Loading() {
  return (
    <div className="container py-24 flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="h-8 w-8 rounded-full border-2 border-navy-900/10 border-t-leaf-500 animate-spin" aria-hidden />
        <p className="text-xs tracking-[0.3em] uppercase text-navy-900/40">Chargement</p>
      </div>
    </div>
  );
}
