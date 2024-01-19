import fs from "fs";

fs.readFileSync("footbal.csv", { encoding: "utf-8" })
  .split("\n")
  .map((row: string): string[] => {
    return row.split(",");
  });
