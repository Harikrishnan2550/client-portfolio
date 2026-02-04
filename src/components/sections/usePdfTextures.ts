"use client";

import { useEffect, useState } from "react";
import * as THREE from "three";
import * as pdfjsLib from "pdfjs-dist";

// Required for Next.js environments
pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export function usePdfTextures(pdfUrl: string) {
  const [textures, setTextures] = useState<THREE.Texture[]>([]);

  useEffect(() => {
    const loadPdf = async () => {
      try {
        const pdf = await pdfjsLib.getDocument(pdfUrl).promise;
        const loadedTextures: THREE.Texture[] = [];

        for (let i = 1; i <= pdf.numPages; i++) {
          const page = await pdf.getPage(i);
          const viewport = page.getViewport({ scale: 2 });

          const canvas = document.createElement("canvas");
          const context = canvas.getContext("2d");

          if (!context) {
            console.error("Canvas context failed");
            return;
          }

          canvas.width = viewport.width;
          canvas.height = viewport.height;

          // 🔥 FIX: bypass strict PDF.js typing issue
          const renderContext: any = {
            canvasContext: context,
            canvas,
            viewport,
          };

          await page.render(renderContext).promise;

          const texture = new THREE.CanvasTexture(canvas);
          texture.flipY = false; // important for Three.js
          loadedTextures.push(texture);
        }

        setTextures(loadedTextures);
      } catch (error) {
        console.error("PDF load error:", error);
      }
    };

    loadPdf();
  }, [pdfUrl]);

  return textures;
}
