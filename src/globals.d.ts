declare global {
  interface Window {
    render_game_to_text?: () => string;
    advanceTime?: () => void;
  }
}

export {};
