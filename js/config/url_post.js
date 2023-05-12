export let urlPOST = "https://ws-fatwa.herokuapp.com/presensi2";

export function AmbilResponse(result) {
  console.log(result); //menampilkan response API pada console
  alert(result.message); //menampilkan response API pada alert
  window.location.reload(); //reload halaman setelah klik ok pada alert
}
