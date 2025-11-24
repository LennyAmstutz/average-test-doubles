import {INumberSource} from "./average-interface";

export class FileAccess implements INumberSource {
  readNumbers(path: string): number[] {
    const text = Deno.readTextFileSync(path);
    return text
        .split("\n")
        .map((n) => n.trim())
        .filter((n) => n !== "")
        .map(Number);
  }
}
