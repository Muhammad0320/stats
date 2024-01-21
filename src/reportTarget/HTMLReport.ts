import fs from "fs";

import { OutputTarget } from "../Summary";

export class HTMLReporter implements OutputTarget {
  print(report: string): void {
    const html = `
        
                    <div> 
                            <h1> Output Analysis </h1> 
                            
                            <p> ${report} </p>
                  </div>

            `;

    fs.writeFileSync("report.html", html);
  }
}
