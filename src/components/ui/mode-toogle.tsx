// Menandakan bahwa komponen ini adalah "Client Component".
// Ini wajib karena kita menggunakan hook (seperti useState, useEffect, atau useTheme)
// yang membutuhkan interaksi di sisi browser (klien).
"use client";

import * as React from "react";
// Mengimpor ikon Bulan dan Matahari dari pustaka lucide-react.
import { Moon, Sun } from "lucide-react";
// Mengimpor hook `useTheme` dari pustaka next-themes untuk mengelola tema.
import { useTheme } from "next-themes";

// Mengimpor komponen Button kustom (kemungkinan dari shadcn/ui).
import { Button } from "@/components/ui/button";

// Ini adalah deklarasi komponen React bernama ModeToggle.
export function ModeToggle() {
  // Memanggil hook `useTheme` untuk mendapatkan dua hal:
  // 1. `theme`: State yang berisi nama tema saat ini (misal: "light" atau "dark").
  // 2. `setTheme`: Fungsi untuk mengubah nilai tema.
  const { theme, setTheme } = useTheme();

  return (
    // Menggunakan komponen Button yang sudah diimpor.
    <Button
      variant="outline"
      size="icon"
      // Ini adalah bagian terpenting: logika untuk mengganti tema.
      // Saat tombol diklik (onClick), ia akan menjalankan fungsi ini.
      // Logikanya adalah: "Jika tema saat ini (`theme`) adalah 'dark',
      // maka panggil `setTheme('light')`. Jika tidak, panggil `setTheme('dark')`."
      // Ini yang membuat tombolnya bisa beralih bolak-balik.
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {/* Ikon Matahari. Kelas CSS-nya diatur agar:
          - Terlihat di mode terang (`scale-100`).
          - Tersembunyi di mode gelap (`dark:scale-0`).
          - Memiliki animasi transisi yang halus (`transition-all`). */}
      <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />

      {/* Ikon Bulan. Kelas CSS-nya diatur agar:
          - Tersembunyi di mode terang (`scale-0`).
          - Terlihat di mode gelap (`dark:scale-100`).
          - `absolute` membuatnya berada di posisi yang sama dengan ikon Matahari. */}
      <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />

      {/* Teks ini hanya untuk screen reader (pembaca layar).
          Kelas `sr-only` menyembunyikannya dari tampilan visual,
          tapi tetap ada untuk membantu pengguna dengan disabilitas
          memahami fungsi tombol ini. Ini adalah praktik baik untuk aksesibilitas. */}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
