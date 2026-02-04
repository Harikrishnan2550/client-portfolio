"use client";

import HTMLFlipBook from "react-pageflip";
import { pdfjs } from "react-pdf";
import { useEffect, useState, useRef } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url,
).toString();

export default function BookViewer() {
  const bookRef = useRef<any>(null);
  const loadedRef = useRef(false);

  const [pageImages, setPageImages] = useState<string[]>([]);
  const [dimensions, setDimensions] = useState({ width: 460, height: 650 });
  const [isMobile, setIsMobile] = useState(false);

  // Detect device once
  useEffect(() => {
    const mobile = window.innerWidth < 768;
    setIsMobile(mobile);

    const width = mobile ? 320 : 460;
    setDimensions({
      width,
      height: Math.round(width * 1.414),
    });
  }, []);

  // Load PDF only once
  useEffect(() => {
    if (loadedRef.current) return;
    loadedRef.current = true;

    const loadPdf = async () => {
      const pdf = await pdfjs.getDocument("/user_compressed.pdf").promise;

      const images: string[] = [];
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d")!;

      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const viewport = page.getViewport({ scale: 1.5 });

        canvas.width = viewport.width;
        canvas.height = viewport.height;

        await page.render({
          canvasContext: ctx,
          canvas,
          viewport,
        } as any).promise;
        images.push(canvas.toDataURL("image/jpeg", 0.9));
      }

      setPageImages(images);
    };

    loadPdf();
  }, []);

  if (!pageImages.length) {
    return (
      <div className="text-center py-20 text-neutral-500">
        Preparing your monograph...
      </div>
    );
  }

  return (
    <div className="flex justify-center py-10">
      <HTMLFlipBook
        ref={bookRef}
        width={dimensions.width}
        height={dimensions.height}
        size="fixed"
        showCover
        usePortrait={isMobile}
        mobileScrollSupport={false}
        flippingTime={700}
        drawShadow
        className="shadow-2xl rounded-xl border border-gray-200 bg-[#F0EADC]"
      >
        {pageImages.map((src, i) => (
          <div key={i} className="bg-white flex items-center justify-center">
            <img
              src={src}
              alt={`Page ${i + 1}`}
              className="w-full h-full object-contain pointer-events-none"
            />
          </div>
        ))}
      </HTMLFlipBook>
    </div>
  );
}
