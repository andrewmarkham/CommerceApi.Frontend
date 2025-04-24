export class Logger {
  constructor(private readonly name: string) {}

  public log(message: string) {
    console.log(`[${this.name}] ${message}`);
  }
}