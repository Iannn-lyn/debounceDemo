import hash from 'hash.js';

export function generateNumberFromStringWithSha256(str: string) {
  return hash.sha256().update(str).digest();
}
