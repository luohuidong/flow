import fs from 'fs/promises';
import ora from 'ora';
import path from 'path';

import { templateFolderPath, binFolderPath } from './folderPath.js';

const spinner = ora('Copy template').start();
try {
  await fs.cp(templateFolderPath, path.join(binFolderPath, 'template'), {
    recursive: true,
  });

  spinner.succeed();
} catch (error) {
  spinner.fail();
}
