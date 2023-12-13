
var aplicativosInstalados = [];
var aplicativosAbertos = [];
var nomeAplicativo;

var notebook = {
    marca: "Samsung",
    modelo: "SamsungBook",
    processador: "i5-1135G7",
    ramMB: 16000,
    armazenamentoMB: 256000,
    so: "Windows 11",
    status: false,
    ligar: function () {
        if (this.status == false) {
            var tempo = 0;

            if (this.armazenamentoMB > 192000 && this.armazenamentoMB <= 256000) {
                tempo = 3;
            } else if (this.armazenamentoMB > 128000 && this.armazenamentoMB <= 192000) {
                tempo = 6;
            } else if (this.armazenamentoMB > 64000 && this.armazenamentoMB <= 128000) {
                tempo = 10;
            } else if (this.armazenamentoMB > 1000 && this.armazenamentoMB <= 64000) {
                tempo = 20;
            } else {
                tempo = 120;
            }

            for (let i = 1; i <= tempo; i++) {
                if (i == tempo) {
                    setTimeout(function () {
                        console.log(i);
                        console.log("Você está ligando o notebook !");
                    }, i * 1000);
                    break;
                }
                setTimeout(function () {
                    console.log(i);
                }, i * 1000);
            }

            this.status = true;

        } else {
            console.log("Seu notebook já está ligado !");
        }
    },
    desligar: function () {
        if (this.status == true) {
            console.log("Você está desligando o notebook !")
            this.status = false;
        } else {
            console.log("Seu notebook já está desligado !");
        }
    },
    adicionarAplicativo: function instalar(x) {
        nomeAplicativo = x.nome;

        if (this.status == false) {
            console.log(`Você não pode instalar o ${nomeAplicativo} com o notebook desligado !`)
        } else {

            for (i = 0; i < aplicativosInstalados.length; i++) {
                if (aplicativosInstalados[i] == nomeAplicativo) {
                    console.log(`Você já tem o ${nomeAplicativo} instalado !`);
                    return;
                }
            }

            if (this.armazenamentoMB < x.consumoMBPorArmazenamento) {
                console.log(`Você não tem armazenamento o suficiente para instalar ${nomeAplicativo}`)
            } else {
                this.armazenamentoMB -= x.consumoMBPorArmazenamento;
                console.log(`Você instalou o ${nomeAplicativo} !`);
                aplicativosInstalados.push(nomeAplicativo);
            }
        }
    },
    abrirAplicativo: function abrir(y) {
        nomeAplicativo = y.nome;
        var temAplicativo = false;
        var aplicativoAberto = false;

        for (i = 0; i < aplicativosInstalados.length; i++) {
            if (aplicativosInstalados[i] == nomeAplicativo) {
                temAplicativo = true;
                break;
            }
        }

        if (temAplicativo == false) {
            console.log(`Você não tem o ${nomeAplicativo} instalado !`);
        } else {

            for (i = 0; i < aplicativosAbertos.length; i++) {
                if (aplicativosAbertos[i] == nomeAplicativo) {
                    aplicativoAberto = true;
                    break;
                }
            }

            if (aplicativoAberto == true) {
                console.log(`Você não pode abrir ${nomeAplicativo} pois ele já está aberto !`);
            } else {
                if (this.ramMB < y.consumoMBAberto) {
                    console.log(`Você não pode abrir ${nomeAplicativo} pois excede o valor ${notebook.ramMB}MB que é sua memória disponível atualmente !`);
                } else {
                    console.log(`Você abriu ${nomeAplicativo} !`);
                    this.ramMB -= y.consumoMBAberto;
                    aplicativosAbertos.push(nomeAplicativo);
                }
            }
        }
    }
}

var aplicativos = {
    musica: {
        nome: "Spotify",
        consumoMBPorArmazenamento: 1000,
        consumoMBAberto: 400
    },
    social: {
        nome: "Discord",
        consumoMBPorArmazenamento: 500,
        consumoMBAberto: 600
    },
    desenvolvimento: {
        nome: "Visual Studio Code",
        consumoMBPorArmazenamento: 500,
        consumoMBAberto: 300
    },
    navegador: {
        navegador1: {
            nome: "Google Chrome",
            consumoMBPorArmazenamento: 15000,
            consumoMBAberto: 1000
        },
        navegador2: {
            nome: "Opera GX",
            consumoMBPorArmazenamento: 7000,
            consumoMBAberto: 500
        }
    },
    entretenimento: {
        jogo1: {
            nome: "Valorant",
            consumoMBPorArmazenamento: 32000,
            consumoMBAberto: 6000
        },
        jogo2: {
            nome: "League of Legends",
            consumoMBPorArmazenamento: 20000,
            consumoMBAberto: 2000,
        },
        jogo3: {
            nome: "Fortnite",
            consumoMBPorArmazenamento: 57000,
            consumoMBAberto: 10000
        },
        jogo4: {
            nome: "Call of Duty: Warzone",
            consumoMBPorArmazenamento: 150000,
            consumoMBAberto: 16000
        }
    }
}