import { useEffect, useState } from "react";
import * as THREE from "three";
import * as pdfjsLib from "pdfjs-dist";

pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

export function usePdfTextures(pdfUrl: string) {
  const [textures, setTextures] = useState<THREE.Texture[]>([]);

  useEffect(() => {
    const loadPdf = async () => {
      const pdf = await pdfjsLib.getDocument(pdfUrl).promise;
      const loadedTextures: THREE.Texture[] = [];

      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const viewport = page.getViewport({ scale: 2 });

        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d")!;
        canvas.width = viewport.width;
        canvas.height = viewport.height;

        await page.render({ canvasContext: context,canvas: canvas, viewport }).promise;

        const texture = new THREE.CanvasTexture(canvas);
        texture.flipY = false;
        loadedTextures.push(texture);
      }

      setTextures(loadedTextures);
    };

    loadPdf();
  }, [pdfUrl]);

  return textures;
}
