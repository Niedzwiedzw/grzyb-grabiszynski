// @ts-ignore
import contents_ from '!!raw-loader!./image-mapping.txt';
import {map, minBy, keys, isNil} from 'lodash';

const ALPHANUM_REGEX = /^\W+$/;

const contents: string = contents_;

const lines = contents.split('\n').slice(1);

export const lineData = (line: string): [number, string] | null => {
  for (let i = 1; i < line.length; i++) {
    if (!ALPHANUM_REGEX.test(line.slice(0, i))) {
      return [i, line.slice(i-1)];
    }
  }
  return null;
};

export function levenshtein(a: string, b: string): number
{
  const an = a ? a.length : 0;
  const bn = b ? b.length : 0;
  if (an === 0)
  {
    return bn;
  }
  if (bn === 0)
  {
    return an;
  }
  const matrix = new Array<number[]>(bn + 1);
  for (let i = 0; i <= bn; ++i)
  {
    const row = matrix[i] = new Array<number>(an + 1);
    row[0] = i;
  }
  const firstRow = matrix[0];
  for (let j = 1; j <= an; ++j)
  {
    firstRow[j] = j;
  }
  for (let i = 1; i <= bn; ++i)
  {
    for (let j = 1; j <= an; ++j)
    {
      if (b.charAt(i - 1) === a.charAt(j - 1))
      {
        matrix[i][j] = matrix[i - 1][j - 1];
      }
      else
      {
        matrix[i][j] = Math.min(
            matrix[i - 1][j - 1], // substitution
            matrix[i][j - 1], // insertion
            matrix[i - 1][j] // deletion
        ) + 1;
      }
    }
  }
  return matrix[bn][an];
}

const names = map(lines, lineData) as [number, string][];

const directoryStructure = {} as {[key: string]: Array<string>};
let lastName = '';

for (const [indent, name] of names) {
  if (indent <= 5) {
    directoryStructure[name] = [];
    lastName = name;
    continue;
  }
  directoryStructure[lastName].push(name);
}

export function getImagePaths(name: string) {
  const legacyName = minBy(keys(directoryStructure), (ln) => levenshtein(ln, name));
  if (isNil(legacyName)) { return null; }
  return map(directoryStructure[legacyName], (image) => `/2_Grzyby_mail_Wojtek/${legacyName}/${image}`)
}

export const imageMapping: string = contents;
