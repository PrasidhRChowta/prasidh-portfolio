declare module "gsap-trial/SplitText" {
  // Minimal, loose typings to satisfy TypeScript for gsap-trial SplitText usage
  export class SplitText {
    constructor(target: any, vars?: any);

    chars: HTMLElement[];
    words: HTMLElement[];
    lines: HTMLElement[];

    revert(): void;
  }

  export default SplitText;
}


