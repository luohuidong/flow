import { fileURLToPath, URL } from 'url';

export const templateFolderPath = fileURLToPath(
  new URL('../../template/', import.meta.url)
);
export const binFolderPath = fileURLToPath(new URL('../bin/', import.meta.url));
