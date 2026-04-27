export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] px-6 py-16">
      <div className="mx-auto max-w-5xl text-center">
        <p className="text-xs text-zinc-600">
          &copy; {new Date().getFullYear()} — Built with React, styled with
          Tailwind CSS, bundled with Vite.
        </p>
      </div>
    </footer>
  );
}
