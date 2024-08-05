import promptSync from "prompt-sync";
import readlineSync from "readline-sync";

export const prompt = promptSync();

export function askName(question: string): string {
  return prompt(question) || "";
}

export function pressEnterToExit(): void {
  readlineSync.question("Press Enter to Exit ... ");
}
