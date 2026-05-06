// Excludes look-alike characters: 1 l I 0 O o u v 5 S s
const CHARS =
  "2346789" +          // digits: 0,1,5 excluded
  "abcdefghijkmnpqrtwxyz" + // lower: l,o,u,v,s excluded
  "ABCDEFGHJKLMNPQRTUVWXYZ"; // upper: I,O,S excluded

export function nanoid(size = 21): string {
  const bytes = crypto.getRandomValues(new Uint8Array(size));
  let id = "";
  for (let i = 0; i < size; i++) {
    id += CHARS[bytes[i] % CHARS.length];
  }
  return id;
}
