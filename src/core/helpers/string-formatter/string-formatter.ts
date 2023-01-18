
export class StringFormatter {
  public static ToSnakeCaseCapitalized(rawStr: string): Uppercase<string> {
    const REGEX_SPACES_COMMAS_AND_DASHES = /[\s,.-]/g;
    const REGEX_MULTIPLE_UNDERSCORES = /_+/g;

    const str = rawStr.trim()
      .replace(REGEX_SPACES_COMMAS_AND_DASHES, "_")
      .replace(REGEX_MULTIPLE_UNDERSCORES, "_")
      .toUpperCase() as Uppercase<string>;

    return str;
  }
}
