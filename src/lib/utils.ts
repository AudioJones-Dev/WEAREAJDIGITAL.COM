// Utility functions for AJ Digital
// e.g., class merging for Tailwind, API fetch wrappers

export function cn(...classes: (string | undefined)[]) {
  return classes.filter(Boolean).join(" ");
}
