import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export const funny_placeholders: string[] = [
  "Sue E**** K****",
  "GWAM is the queen",
  "I hate DAN!!!",
  "Go GAY everyone",
]

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getRandomPlaceholder(): string {
  const index = Math.floor(Math.random() * funny_placeholders.length);
  return funny_placeholders[index];
}
