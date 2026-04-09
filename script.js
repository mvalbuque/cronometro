let tempo = 300; // 5 minutos em segundos
let intervalo = null;
let rodando = false;

function atualizarDisplay() {
    let min = Math.floor(tempo / 60);
    let seg = tempo % 60;

    document.getElementById("timer").innerText =
        String(min).padStart(2, '0') + ":" +
        String(seg).padStart(2, '0');
}

function iniciar() {
    if (rodando) return;

    rodando = true;

    intervalo = setInterval(() => {
        if (tempo > 0) {
            tempo--;
            atualizarDisplay();
        } else {
            finalizar();
        }
    }, 1000);
}

function pausar() {
    clearInterval(intervalo);
    rodando = false;
}

function resetar() {
    pausar();
    tempo = 300;
    document.body.classList.remove("fim");
    atualizarDisplay();
}

function definirTempo() {
    let min = document.getElementById("minutos").value;

    if (min && min > 0) {
        tempo = min * 60;
        atualizarDisplay();
    }
}

function finalizar() {
    pausar();
    document.body.classList.add("fim");

    let som = document.getElementById("alerta");
    som.play();
}

atualizarDisplay();
