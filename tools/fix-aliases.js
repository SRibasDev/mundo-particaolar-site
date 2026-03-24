const fs = require('fs');
const path = require('path');
const root = path.resolve('apps/web/src');
const exts = ['.js', '.jsx', '.ts', '.tsx'];
let changed = 0, files = 0;
function walk(dir) {
  for (const f of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, f.name);
    if (f.isDirectory()) walk(p);
    else if (exts.includes(path.extname(f.name))) {
      files++;
      let text = fs.readFileSync(p, 'utf8');
      const original = text;
      const re = /(['"])@\/(.+?)\1/g;
      text = text.replace(re, (m, quote, inner) => {
        if (inner.startsWith('radix-ui/') || inner.startsWith('hookform') || inner.startsWith('tailwind') || inner.startsWith('react') || inner.startsWith('clsx')) return m;
        const target = path.resolve(root, inner);
        const fromDir = path.dirname(p);
        let rel = path.posix.relative(fromDir.split(path.sep).join('/'), target.split(path.sep).join('/'));
        if (!rel.startsWith('.')) rel = './' + rel;
        return quote + rel + quote;
      });
      if (text !== original) {
        fs.writeFileSync(p, text, 'utf8');
        changed++;
        console.log('updated', p);
      }
    }
  }
}
walk(root);
console.log('files scanned', files, 'files changed', changed);
