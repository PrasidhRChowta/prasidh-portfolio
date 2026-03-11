declare module "gsap-trial/SplitText" {
  // Minimal typing to satisfy TypeScript for gsap-trial SplitText usage
  export class SplitText {
    constructor(
      target: string | Element | Element[] | NodeListOf<Element>,
      vars?: Record<string, unknown>
    );

    chars: HTMLElement[];
    words: HTMLElement[];
    lines: HTMLElement[];

    revert(): void;
  }

  export default SplitText;
}

