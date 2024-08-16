export class StringBuilder {
  private strings: string[];

  constructor() {
    this.strings = [];
  }

  append(value: string): this {
    this.strings.push(value + ' ');
    return this;
  }

  appendLine(value: string = ''): this {
    this.strings.push(value + '\n');
    return this;
  }

  toString(): string {
    return this.strings.join('');
  }

  clear(): this {
    this.strings = [];
    return this;
  }

  length(): number {
    return this.toString().length;
  }

  isEmpty(): boolean {
    return this.length() === 0;
  }
}