import { rm } from 'fs/promises';
import ora from 'ora';

import { binFolderPath } from './folderPath.js';

const spinner = ora('Remove bin folder').start();

try {
  await rm(binFolderPath, {
    recursive: true,
  });
} catch (error) {
} finally {
  spinner.succeed();
}
