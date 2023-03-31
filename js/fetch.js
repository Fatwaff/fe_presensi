import { get } from "https://bukulapak.github.io/api/process.js";
let urlAPI = "https://ws-fatwa.herokuapp.com/presensi2";
get(urlAPI, isiTablePresensi);
function isiTablePresensi(results) {
  console.log(results);
}
