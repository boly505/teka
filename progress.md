Original prompt: تمام صلح اللعبه وصلح كل حاجه بس سيب مكان المنيو لسه هضيفه بعدين وقولي ازاي اضيف اللوجو في الموقع بدل لوجو حرف الT ده

- 2026-03-17: Confirmed the current page was being served from stale built files in `assets/` via `index.html`, not from `src/`.
- 2026-03-17: Plan is to rewire the app to `src`, rebuild the landing page copy/layout, then fix and verify the mini-game with browser tests.
- 2026-03-17: Replaced the stale static entry with a real Vite `src/main.tsx` entry and added new `public/logo.svg` and `public/favicon.svg`.
- 2026-03-17: Rebuilt the landing page in `src/` with clean Arabic copy, responsive contact cards, a safe menu placeholder, and a new logo component.
- 2026-03-17: Rebuilt the game as a canvas mini-game with stable state transitions, `window.render_game_to_text`, and `window.advanceTime`.
- 2026-03-17: Verified the new app in a browser on desktop and mobile. Home page renders cleanly, the console is free of page errors, and the game now starts correctly instead of failing immediately.
- 2026-03-17: Verified scoring works by clicking a visible dessert via Playwright; score increased to 14 and combo increased to x1.
