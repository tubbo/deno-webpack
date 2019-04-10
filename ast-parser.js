

export default async function parseDat(file) {
    // GET
    const res = await fetch(file);
    // create temp dir
    // run https://github.com/evenstensberg/require-to-deno
    const res2 = await res.text();
    console.log(res2)
    Deno.exit()
    return {};
}