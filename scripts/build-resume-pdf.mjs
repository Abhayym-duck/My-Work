// Generates public/<RESUME_FILENAME> from the /resume-print page using
// headless Chrome. The PDF keeps real, selectable text (ATS-readable).
//
//   npm run build && npx next start -p 3100   # in another terminal
//   npm run resume:pdf
//
// Env: RESUME_URL (default http://localhost:3100/resume-print), CHROME_PATH.
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";

const filename = "Abhay_Maske_Product_Experience_Designer_Resume.pdf";
const url = process.env.RESUME_URL ?? "http://localhost:3100/resume-print";
const chrome =
  process.env.CHROME_PATH ??
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const out = path.resolve(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  "public",
  filename,
);

execFileSync(
  chrome,
  [
    "--headless=new",
    "--disable-gpu",
    "--no-pdf-header-footer",
    "--virtual-time-budget=5000",
    `--print-to-pdf=${out}`,
    url,
  ],
  { stdio: "inherit" },
);
console.log(`Wrote ${out}`);
