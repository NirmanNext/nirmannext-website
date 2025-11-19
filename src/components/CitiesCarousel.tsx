// src/components/CitiesCarousel.tsx
import React, { useEffect, useRef, useState } from "react";
import citiesRaw from "@/data/citiesServed.json";

type CityItem = {
  name: string;
  state?: string | null;
  description?: string | null;
};

const SCROLL_PX_PER_SEC = 60; // adjust speed: px / second

/**
 * Normalize many possible JSON shapes into an array of CityItem
 * Supported shapes:
 * 1) { "Uttar Pradesh": ["Lucknow","Kanpur", ...], "Madhya Pradesh": ["Bhopal"...] }
 * 2) [ { "state": "Uttar Pradesh", "city": "Lucknow", "description": "" }, ... ]
 * 3) [ "Lucknow", "Kanpur", ... ]
 */
function normalizeCities(raw: any): CityItem[] {
  if (!raw) return [];

  // Case 1: object with states as keys -> arrays of city names
  if (typeof raw === "object" && !Array.isArray(raw)) {
    const out: CityItem[] = [];
    for (const [state, value] of Object.entries(raw)) {
      if (Array.isArray(value)) {
        for (const v of value) {
          if (typeof v === "string") {
            out.push({ name: v, state });
          } else if (typeof v === "object" && v !== null) {
            // object inside array: maybe { name, description }
            const name = (v.name || v.city || v.title) as string | undefined;
            if (name) out.push({ name, state, description: (v.description || v.desc || null) as string | null });
          }
        }
      }
    }
    return out;
  }

  // Case 2: array of objects or strings
  if (Array.isArray(raw)) {
    // strings
    if (raw.every((r) => typeof r === "string")) {
      return raw.map((name) => ({ name }));
    }

    // objects with city/state fields
    const out: CityItem[] = [];
    for (const item of raw) {
      if (!item) continue;
      if (typeof item === "string") {
        out.push({ name: item });
      } else if (typeof item === "object") {
        const name = (item.name || item.city || item.title) as string | undefined;
        const state = (item.state || item.region) as string | undefined;
        const description = (item.description || item.desc) as string | undefined;
        if (name) out.push({ name, state, description });
      }
    }
    return out;
  }

  return [];
}

export default function CitiesCarousel() {
  const [cities, setCities] = useState<CityItem[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const lastTimestampRef = useRef<number | null>(null);
  const isPausedRef = useRef(false);

  useEffect(() => {
    try {
      const normalized = normalizeCities(citiesRaw);
      setCities(normalized);
    } catch (err) {
      console.error("Failed to parse cities JSON:", err);
      setCities([]);
    }
  }, []);

  // Auto-scroll using requestAnimationFrame for smoothness and pause control.
  useEffect(() => {
    const container = containerRef.current;
    const inner = innerRef.current;
    if (!container || !inner) return;

    // If no items or only one, do not animate
    if (cities.length <= 1) return;

    // Duplicate content already exists in markup (we render two copies).
    const maxScroll = inner.scrollWidth / 2; // because we duplicate content
    const speedPxPerMs = SCROLL_PX_PER_SEC / 1000;

    const step = (ts: number) => {
      if (lastTimestampRef.current === null) {
        lastTimestampRef.current = ts;
        animationRef.current = requestAnimationFrame(step);
        return;
      }
      const delta = ts - lastTimestampRef.current;
      lastTimestampRef.current = ts;

      if (!isPausedRef.current) {
        container.scrollLeft += speedPxPerMs * delta;
        // reset when scrolled past half (duplicate boundary)
        if (container.scrollLeft >= maxScroll) {
          container.scrollLeft = container.scrollLeft - maxScroll;
        }
      }

      animationRef.current = requestAnimationFrame(step);
    };

    animationRef.current = requestAnimationFrame(step);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
      lastTimestampRef.current = null;
    };
  }, [cities]);

  // Pause/resume helpers
  const pause = () => {
    isPausedRef.current = true;
  };
  const resume = () => {
    isPausedRef.current = false;
  };

  // Keyboard: pause on focus inside container (for accessibility)
  useEffect(() => {
    const c = containerRef.current;
    if (!c) return;
    const onFocusIn = () => pause();
    const onFocusOut = () => resume();
    c.addEventListener("focusin", onFocusIn);
    c.addEventListener("focusout", onFocusOut);
    return () => {
      c.removeEventListener("focusin", onFocusIn);
      c.removeEventListener("focusout", onFocusOut);
    };
  }, []);

  if (!cities || cities.length === 0) {
    return null; // render nothing if no cities
  }

  // Build simple textual list: "City — State" (state optional)
  const items = cities.map((c, i) => {
    return (
      <div
        key={`${c.name}-${i}`}
        className="inline-flex items-center whitespace-nowrap px-4 py-2 text-sm font-medium text-foreground/90"
        tabIndex={0} // make focusable for keyboard users (pauses on focus)
        aria-label= {c.state ? `${c.name}, ${c.state}` : c.name}
      >
        <span className="mr-2 font-semibold">{c.name}</span>
        {/* {c.state && <span className="text-xs text-muted-foreground">· {c.state}</span>} */}
      </div>
    );
  });

  return (
    <div className="w-full overflow-hidden">
      {/* Visible container */}
      <div
        ref={containerRef}
        className="w-full overflow-x-hidden"
        onMouseEnter={pause}
        onMouseLeave={resume}
        onTouchStart={pause}
        onTouchEnd={resume}
        role="list"
        aria-label="Cities we serve"
      >
        {/* inner content duplicated for seamless scroll */}
        <div ref={innerRef} className="flex whitespace-nowrap will-change-transform">
          <div className="flex items-center">
            {items}
          </div>

          {/* duplicate */}
          <div className="flex items-center">
            {items}
          </div>
        </div>
      </div>

      {/* Small accessibility hint for screen readers and keyboard users */}
      <div className="sr-only" aria-hidden="false">
        This is a continuously scrolling list of cities we serve. Hover, focus, or touch to pause.
      </div>
    </div>
  );
}
