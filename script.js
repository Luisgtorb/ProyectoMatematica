// Pregunta 1 checkbox listo
const respuesta1 = uno.addEventListener("click", () => {
  dos.setAttribute("disabled", "");
  tres.setAttribute("disabled", "");
  one.classList.add("correcta");
});

const respuesta2 = dos.addEventListener("click", () => {
  uno.setAttribute("disabled", "");
  tres.setAttribute("disabled", "");
  one.classList.add("corregir");
  two.classList.add("equivocar")
});

const respuesta3 = tres.addEventListener("click", () => {
  uno.setAttribute("disabled", "");
  dos.setAttribute("disabled", "");
  one.classList.add("corregir");
  three.classList.add("equivocar");
});

// Pregunta 2 checkbox listo
const respuesta4 = cuatro.addEventListener("click", () => {
  seis.setAttribute("disabled", "");
  cinco.setAttribute("disabled", "");
  six.classList.add("corregir");
  four.classList.add("equivocar");
});

const respuesta5 = cinco.addEventListener("click", () => {
  cuatro.setAttribute("disabled", "");
  seis.setAttribute("disabled", "");
  six.classList.add("corregir");
  five.classList.add("equivocar");
});

const respuesta6 = seis.addEventListener("click", () => {
  cuatro.setAttribute("disabled", "");
  cinco.setAttribute("disabled", "");
  six.classList.add("correcta");
});

// Pregunta 3 checkbox listo
const respuesta7 = siete.addEventListener("click", () => {
  ocho.setAttribute("disabled", "");
  nueve.setAttribute("disabled", "");
  nine.classList.add("corregir");
  seven.classList.add("equivocar");
});

const respuesta8 = ocho.addEventListener("click", () => {
  siete.setAttribute("disabled", "");
  nueve.setAttribute("disabled", "");
  nine.classList.add("corregir");
  eight.classList.add("equivocar");
});

const respuesta9 = nueve.addEventListener("click", () => {
  siete.setAttribute("disabled", "");
  ocho.setAttribute("disabled", "");
  nine.classList.add("correcta");
});

// Pregunta 4 checkbox listo
const respuesta10 = diez.addEventListener("click", () => {
  once.setAttribute("disabled", "");
  doce.setAttribute("disabled", "");
  ten.classList.add("correcta");
});

const respuesta11 = once.addEventListener("click", () => {
  diez.setAttribute("disabled", "");
  doce.setAttribute("disabled", "");
  ten.classList.add("corregir");
  eleven.classList.add("equivocar");
});

const respuesta12 = doce.addEventListener("click", () => {
  diez.setAttribute("disabled", "");
  once.setAttribute("disabled", "");
  ten.classList.add("corregir");
  twelve.classList.add("equivocar");
});

// Pregunta 5 checkbox listo
const respuesta13 = trece.addEventListener("click", () => {
  catorce.setAttribute("disabled", "");
  quince.setAttribute("disabled", "");
  fifteen.classList.add("corregir");
  thirteen.classList.add("equivocar");
});

const respuesta14 = catorce.addEventListener("click", () => {
  trece.setAttribute("disabled", "");
  quince.setAttribute("disabled", "");
  fifteen.classList.add("corregir");
  fourteen.classList.add("equivocar");
});

const respuesta15 = quince.addEventListener("click", () => {
  trece.setAttribute("disabled", "");
  catorce.setAttribute("disabled", "");
  fifteen.classList.add("correcta");
});

// Pregunta 6 checkbox listo
const respuesta16 = dieciseis.addEventListener("click", () => {
  diecisiete.setAttribute("disabled", "");
  dieciocho.setAttribute("disabled", "");
  seventeen.classList.add("corregir");
  sixteen.classList.add("equivocar");
});

const respuesta17 = diecisiete.addEventListener("click", () => {
  dieciseis.setAttribute("disabled", "");
  dieciocho.setAttribute("disabled", "");
  seventeen.classList.add("correcta");
});

const respuesta18 = dieciocho.addEventListener("click", () => {
  dieciseis.setAttribute("disabled", "");
  diecisiete.setAttribute("disabled", "");
  seventeen.classList.add("corregir");
  eigthteen.classList.add("equivocar");
});

// Pregunta 7 checkbox listo
const respuesta19 = diecinueve.addEventListener("click", () => {
  veinte.setAttribute("disabled", "");
  veintiuno.setAttribute("disabled", "");
  twenty_one.classList.add("corregir");
  nineteen.classList.add("equivocar");
});

const respuesta20 = veinte.addEventListener("click", () => {
  diecinueve.setAttribute("disabled", "");
  veintiuno.setAttribute("disabled", "");
  twenty_one.classList.add("corregir");
  twenty.classList.add("equivocar");
});

const respuesta21 = veintiuno.addEventListener("click", () => {
  diecinueve.setAttribute("disabled", "");
  veinte.setAttribute("disabled", "");
  twenty_one.classList.add("correcta");
});

// Pregunta 8 checkbox listo
const respuesta22 = veintidos.addEventListener("click", () => {
  veintitres.setAttribute("disabled", "");
  veinticuatro.setAttribute("disabled", "");
  twenty_three.classList.add("corregir");
  twenty_two.classList.add("equivocar");
});

const respuesta23 = veintitres.addEventListener("click", () => {
  veintidos.setAttribute("disabled", "");
  veinticuatro.setAttribute("disabled", "");
  twenty_three.classList.add("correcta");
});

const respuesta24 = veinticuatro.addEventListener("click", () => {
  veintidos.setAttribute("disabled", "");
  veintitres.setAttribute("disabled", "");
  twenty_three.classList.add("corregir");
  twenty_four.classList.add("equivocar")
});

// Pregunta 9 checkbox listo
const respuesta25 = veinticinco.addEventListener("click", () => {
  veintiseis.setAttribute("disabled", "");
  veintisiete.setAttribute("disabled", "");
  twenty_six.classList.add("corregir");
  twenty_five.classList.add("equivocar");
});

const respuesta26 = veintiseis.addEventListener("click", () => {
  veinticinco.setAttribute("disabled", "");
  veintisiete.setAttribute("disabled", "");
  twenty_six.classList.add("correcta");
});

const respuesta27 = veintisiete.addEventListener("click", () => {
  veinticinco.setAttribute("disabled", "");
  veintiseis.setAttribute("disabled", "");
  twenty_six.classList.add("corregir");
  twenty_seven.classList.add("equivocar")
});

// Pregunta 10 checkbox listo
const respuesta28 = veintiocho.addEventListener("click", () => {
  veintinueve.setAttribute("disabled", "");
  treinta.setAttribute("disabled", "");
  twenty_nine.classList.add("corregir");
  twenty_eight.classList.add("equivocar");
});

const respuesta29 = veintinueve.addEventListener("click", () => {
  veintiocho.setAttribute("disabled", "");
  treinta.setAttribute("disabled", "");
  twenty_nine.classList.add("correcta");
});

const respuesta30 = treinta.addEventListener("click", () => {
  veintiocho.setAttribute("disabled", "");
  veintinueve.setAttribute("disabled", "");
  twenty_nine.classList.add("corregir");
  thirty.classList.add("equivocar")
});
