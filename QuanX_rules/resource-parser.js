
// CDN加速
function CDN(cnt) {
  console.log("CDN start")
  cnt = cnt.join("\n").replace(/https:\/\/raw.githubusercontent.com\/(.*?)\/(.*?)\/(.*)/gmi,"https://fastly.jsdelivr.net/gh/$1/$2@$3")
  return cnt
}
