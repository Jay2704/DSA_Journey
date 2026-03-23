import { useEffect, useLayoutEffect, useState } from "react";
import { publicAssetUrl } from "@/lib/paths";

type State =
  | { status: "idle" | "loading"; text: ""; error: null }
  | { status: "ok"; text: string; error: null }
  | { status: "error"; text: ""; error: string };

function initialState(publicPath: string): State {
  if (!publicPath.trim()) {
    return { status: "idle", text: "", error: null };
  }
  return { status: "loading", text: "", error: null };
}

export function useFetchedText(publicPath: string): State {
  const [state, setState] = useState<State>(() => initialState(publicPath));

  useLayoutEffect(() => {
    if (!publicPath.trim()) {
      setState({ status: "idle", text: "", error: null });
    } else {
      setState({ status: "loading", text: "", error: null });
    }
  }, [publicPath]);

  useEffect(() => {
    if (!publicPath.trim()) return;
    let cancelled = false;
    const url = publicAssetUrl(publicPath);
    fetch(url)
      .then((r) => {
        if (!r.ok) throw new Error(`Could not load file (${r.status})`);
        return r.text();
      })
      .then((text) => {
        if (!cancelled) setState({ status: "ok", text, error: null });
      })
      .catch((e: unknown) => {
        const msg = e instanceof Error ? e.message : "Failed to load file";
        if (!cancelled) setState({ status: "error", text: "", error: msg });
      });
    return () => {
      cancelled = true;
    };
  }, [publicPath]);

  return state;
}
