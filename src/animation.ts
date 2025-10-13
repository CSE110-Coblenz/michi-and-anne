type Style = "bold" | "italic";

export function animate(feature: string, style: "bold" | "italic" = "bold") {
  if (style === "bold") {
    console.log(`\x1b[1mParty! Party! Party! - ${feature}\x1b[0m`);
  } else {
    console.log(`\x1b[3mParty! Party! Party! - ${feature}\x1b[0m`);
  }
}
