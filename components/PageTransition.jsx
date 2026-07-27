"use client";

import { usePathname } from "next/navigation";

/*
  Replaces the old PageTransition + StairTransition + Stairs trio.

  The previous version rendered two full-screen bg-primary overlays and a
  six-bar wipe that animated `top` — a layout property, so it could not be
  GPU-composited. That cost ~1.4s of dead time per navigation and was the
  source of the jank.

  This is a 320ms transform+opacity entrance driven by a CSS keyframe, not
  Framer Motion: the markup is never left at opacity 0 waiting for
  hydration. Keying on pathname remounts the node, which restarts it.

  There is no exit animation: the App Router swaps `children` for the new
  route before an outgoing tree could finish, so an exit would animate the
  incoming content out. Enter-only is the honest version.
*/
const PageTransition = ({ children }) => {
  const pathname = usePathname();

  return (
    <main id="main" key={pathname} className="animate-page-enter">
      {children}
    </main>
  );
};

export default PageTransition;
