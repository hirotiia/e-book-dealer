const path = require('path');

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames
    .map((f) => path.relative(process.cwd(), f))
    .join(' --file ')}`;

module.exports = {
  'src/app/**/*.{js,jsx,ts,tsx}': [buildEslintCommand, 'markuplint'],
  '**/*': 'npm run secretlint',
};
