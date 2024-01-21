"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTMLReporter = void 0;
const fs_1 = __importDefault(require("fs"));
class HTMLReporter {
    print(report) {
        const html = `
        
                    <div> 
                            <h1> Output Analysis </h1> 
                            
                            <p> ${report} </p>
                  </div>

            `;
        fs_1.default.writeFileSync("report.html", html);
    }
}
exports.HTMLReporter = HTMLReporter;
