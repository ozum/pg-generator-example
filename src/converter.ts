/**
 * This converter is from: https://github.com/superj80820/mermaid-js-converter
 */

/* eslint-disable no-param-reassign */
import Base64 from "js-base64";

export function mdToSVG(data: string): string {
  const matchData = data.match(/```mermaid(.|\n)*?```/gm);
  if (matchData === null) return data;

  const jsonStrings = matchData
    .map((item: string) => item.replace("```mermaid", "").replace("```", ""))
    // Workaround for classdiagram
    .map((item: string) =>
      item.startsWith("\nclass") || item.startsWith("\ngantt") || item.startsWith("\nerDiagram") || item.startsWith("\njourney")
        ? item.substr(1, item.length - 1)
        : item
    )
    .map((item: any) =>
      JSON.stringify({
        code: item,
        mermaid: {
          theme: "default",
        },
      })
    )
    .map((item: any) => {
      const jsonString = Base64.encodeURI(item);
      return `[![](https://mermaid.ink/img/${jsonString})](https://mermaid-js.github.io/mermaid-live-editor/#/edit/${jsonString})`;
    });

  let changeMd = data;
  matchData.forEach((item: any, index: string | number) => {
    changeMd = changeMd.replace(item, jsonStrings[index as any]);
  });

  return changeMd;
}

export function SVGToMd(data: string): string {
  const matchData = data.match(/\[!\[\]\(https:\/\/mermaid\.ink\/img\/(.|\n)*?\)\n/gm);
  if (matchData === null) return data;
  const encodedURIs = matchData.map((item: string) => {
    item = item.replace("[![](https://mermaid.ink/img/", "");
    return item.substr(0, item.indexOf(")](https://mermaid-js.github.io/mermaid-live-editor/#/"));
  });

  let originMd = data;

  matchData.forEach((item: any, index: string | number) => {
    // Workaround for classdiagram about assignment let
    let { code } = JSON.parse(Base64.decode(encodedURIs[index as any]));
    // Workaround for classdiagram
    if (code.startsWith("class") || code.startsWith("gantt") || code.startsWith("erDiagram") || code.startsWith("journey"))
      code = `\n${code}`;
    originMd = originMd.replace(item, `\`\`\`mermaid${code}\`\`\`\n`);
  });

  return originMd;
}
