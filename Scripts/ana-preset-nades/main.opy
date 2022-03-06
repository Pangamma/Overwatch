# str.split('\n').map(x => x.trim()).filter(x => x != "").map((x,i) => `${x.split(':')[1].trim()}`).reduce((accum, elem, i) => {
# if (accum.indexOf(elem) === -1)
#     accum.push(elem);
#     return accum;
# }, []).sort((a,b) => a < b ? -1 : 1).map((x,i) => `${i}: ${x}`).join("\n")