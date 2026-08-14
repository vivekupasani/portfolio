import { setVisitorCount } from "./visitor-count";

async function init() {
    await setVisitorCount(0);
    console.log("Visitor count initialized to 0");
    process.exit(0);
}

init();
