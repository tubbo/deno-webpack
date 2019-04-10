import { serve } from "https://deno.land/std@v0.3.2/http/server.ts";
import { render } from 'https://deno.land/x/dejs/dejs.ts';
import * as webpack from 'https://unpkg.com/webpack@4.29.6/lib/webpack.js';
console.log(webpack)

const template = `<body>
  <% if (name) { %>
    <h1>hello, <%= name %>!</h1>
  <% } %>
</body>`;



async function main() {
    const output = await render(template, {
        name: 'world',
    });
    const body = output.buf; // UINT8 arr
    console.log("App running on port 8000 🌍")
    for await (const req of serve(":8000")) {
        req.respond({ body });
    }
}

main();