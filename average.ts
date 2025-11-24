import type { INumberSource } from "./average-interface.ts";

export class Average {
  constructor(private source: INumberSource) {}

  computeMeanOfFile(path: string): number {
    const numbers = this.source.readNumbers(path);
    const sum = numbers.reduce((a, b) => a + b, 0);
    return sum / numbers.length;
  }
}
