"use client";

import { useState } from "react";

export default function CopyButton({ value }: { value: string }) {
  const [label, setLabel] = useState("Copier");

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setLabel("Copié");
    } catch {
      setLabel("Échec, sélectionne le texte");
    }
    setTimeout(() => setLabel("Copier"), 1800);
  };

  return (
    <button type="button" className="btn copy" onClick={copy}>
      {label}
    </button>
  );
}
