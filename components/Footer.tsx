"use client";

export default function Footer() {
  return (
    <footer className="py-10 text-center">
      <p className="font-mono text-xs text-slate">
        Built by{" "}
        <a
          href="https://github.com/ingenuity2k"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green hover:underline"
        >
          ingenuity2k
        </a>{" "}
        &middot; Design inspired by{" "}
        <a
          href="https://brittanychiang.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-green hover:underline"
        >
          Brittany Chiang
        </a>
      </p>
    </footer>
  );
}
