import fs from "fs";
import http from "http";

const url = "http://localhost:3000/types/main.d.ts";
const dest = "./src/types/vite-remote.d.ts";

http.get(url, (res) => {
  let data = "";
  res.on("data", (chunk) => (data += chunk));
  res.on("end", () => {
    fs.writeFileSync(dest, data);
    console.log("✅ Updated remote type:", dest);
  });
});
