import { Plugin } from "obsidian";

export default class demo extends Plugin {
    async onload() {
        this.addCommand({
        id: "print-greeting-to-console",
        name: "Print greeting to console",
        callback: () => {
          console.log("Hey, you!");
        },
      });
    }
  }