import fs from "fs/promises";
import { join, resolve } from "path";

const templateRenderer = async (template: string, vars: any) => {
  const templateDirectory = resolve(process.cwd(), "src/mail");
  let data = await fs.readFile(join(templateDirectory, `${template}.template.html`), { encoding: 'utf8' });

  for (let variable of Object.keys(vars)) {
    const value = vars[variable];
    data = data.replaceAll(`%${variable}%`, value);
  }
  return data;
}

export default templateRenderer;
