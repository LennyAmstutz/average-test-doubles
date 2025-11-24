import {Average} from "./average";
import {INumberSource} from "./average-interface";


class StubNumberSource implements INumberSource {
  readNumbers(_path: string): number[] {
    return [10, 20, 30];
  }
}

Deno.test("computeMeanOfFile mit Stub", () => {
  const stub = new StubNumberSource();
  const avg = new Average(stub);

  const result = avg.computeMeanOfFile("irgendein/pfad.txt");

  assertEquals(result, 20);
});


class MockNumberSource implements INumberSource {
  callCount = 0;

  readNumbers(_path: string): number[] {
    this.callCount++;
    return [5, 5, 5, 5];
  }
}

Deno.test("computeMeanOfFile mit Mock – liest Daten genau einmal", () => {
  const mock = new MockNumberSource();
  const avg = new Average(mock);

  const result = avg.computeMeanOfFile("egal.dat");

  assertEquals(result, 5);
  assertEquals(mock.callCount, 1);
});
