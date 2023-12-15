const notebook = {
    marca: "Samsung",
    modelo: "SamsungBook",
    processador: "i5-1135G7",
    ramMB: 16000,
    armazenamentoMB: 256000,
    so: "Windows 11",
    aplicativosInstalados: [],
    aplicativosAbertos: [],
    nomeAplicativo: "",
    temAplicativo: false,
    aplicativoAberto: false,
    ligado: false,
    ligar: function () {
        if (this.ligado == false) {
            let tempo = 0;

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
                        console.log("Seu notebook foi ligado !");
                    }, i * 1000);
                    break;
                }
                setTimeout(function () {
                    console.log(i);
                }, i * 1000);
            }

            this.ligado = true;

        } else {
            console.log("Seu notebook já está ligado !");
        }
    },
    desligar: function () {
        if (this.ligado == true) {
            console.log("Seu notebook foi desligado !")
            this.ligado = false;
        } else {
            console.log("Seu notebook já está desligado !");
        }
    },
    instalarAplicativo: function instalar(aplicativo) {
        this.nomeAplicativo = aplicativo.nome;

        if (this.ligado == false) {
            console.log(`Você não pode instalar o ${this.nomeAplicativo} com o notebook desligado !`)
        } else {

            for (let i = 0; i < this.aplicativosInstalados.length; i++) {
                if (this.aplicativoInstalados[i] == this.nomeAplicativo) {
                    console.log(`Você já tem o ${this.nomeAplicativo} instalado !`);
                    return;
                }
            }

            if (this.armazenamentoMB < aplicativo.consumoMBPorArmazenamento) {
                console.log(`Você não tem armazenamento o suficiente para instalar ${this.nomeAplicativo}`)
            } else {
                this.armazenamentoMB -= aplicativo.consumoMBPorArmazenamento;
                console.log(`Você instalou ${this.nomeAplicativo} !`);
                this.aplicativosInstalados.push(this.nomeAplicativo);
            }
        }
    },
    abrirAplicativo: function abrir(aplicativo) {
        this.nomeAplicativo = aplicativo.nome;
        this.temAplicativo = false;
        this.aplicativoAberto = false;

        if (this.ligado == false) {
            console.log(`Você não pode abrir ${this.nomeAplicativo} com o notebook desligado !`);
        } else {

            for (let i = 0; i < this.aplicativosInstalados.length; i++) {
                if (this.aplicativosInstalados[i] == this.nomeAplicativo) {
                    this.temAplicativo = true;
                    break;
                }
            }

            if (this.temAplicativo == false) {
                console.log(`Você não não pode abrir ${this.nomeAplicativo} pois ele não está instalado !`);
            } else {

                for (let i = 0; i < this.aplicativosAbertos.length; i++) {
                    if (this.aplicativosAbertos[i] == this.nomeAplicativo) {
                        this.aplicativoAberto = true;
                        break;
                    }
                }

                if (this.aplicativoAberto == true) {
                    console.log(`Você não pode abrir ${this.nomeAplicativo} pois ele já está aberto !`);
                } else {
                    if (this.ramMB < aplicativo.consumoMBAberto) {
                        console.log(`Você não pode abrir ${this.nomeAplicativo} pois excede o valor ${notebook.ramMB}MB que é sua memória disponível atualmente !`);
                    } else {
                        console.log(`Você abriu ${this.nomeAplicativo} !`);
                        this.ramMB -= aplicativo.consumoMBAberto;
                        this.aplicativosAbertos.push(this.nomeAplicativo);
                    }
                }
            }
        }
    },
    desinstalarAplicativo: function desinstalar(aplicativo) {
        this.nomeAplicativo = aplicativo.nome;
        this.temAplicativo = false;
        this.aplicativoAberto = false;

        if (this.ligado == false) {
            console.log(`Você não pode desinstalar o ${this.nomeAplicativo} com o notebook desligado !`)
        } else {

            for (let i = 0; i < this.aplicativosInstalados.length; i++) {
                if (this.aplicativosInstalados[i] == this.nomeAplicativo) {
                    this.temAplicativo = true;
                    break;
                }
            }

            if (this.temAplicativo == false) {
                console.log(`Você não pode desinstalar ${this.nomeAplicativo} pois ele não está instalado !`);
            } else {

                for (let i = 0; i < this.aplicativosAbertos.length; i++) {
                    if (this.aplicativosAbertos[i] == this.nomeAplicativo) {
                        this.aplicativoAberto = true;
                        break;
                    }
                }

                if (this.aplicativoAberto == true) {
                    console.log(`Você não pode desinstalar ${this.nomeAplicativo} pois ele está aberto !`);
                } else {
                    this.armazenamentoMB += aplicativo.consumoMBPorArmazenamento;
                    console.log(`Você desinstalou ${this.nomeAplicativo} !`);

                    for (let i = 0; i < this.aplicativosInstalados.length; i++) {
                        if (this.aplicativosInstalados[i] == this.nomeAplicativo) {
                            this.aplicativosInstalados.splice(i);
                            break;
                        }
                    }

                }
            }
        }
    },
    fecharAplicativo: function (aplicativo) {
        this.nomeAplicativo = aplicativo.nome;
        this.temAplicativo = false;
        this.aplicativoAberto = false;

        if (this.ligado == false) {
            console.log(`Você não pode fechar ${this.nomeAplicativo} com o notebook desligado !`);
        } else {

            for (let i = 0; i < this.aplicativosInstalados.length; i++) {
                if (this.aplicativosInstalados[i] == this.nomeAplicativo) {
                    this.temAplicativo = true;
                    break;
                }
            }

            if (this.temAplicativo == false) {
                console.log(`Você não pode fechar ${this.nomeAplicativo} pois ele não está instalado !`);
            } else {

                for (let i = 0; i < this.aplicativosAbertos.length; i++) {
                    if (this.aplicativosAbertos[i] == this.nomeAplicativo) {
                        this.aplicativoAberto = true;
                        break;
                    }
                }

                if (this.aplicativoAberto == false) {
                    console.log(`Você não pode fechar ${this.nomeAplicativo} pois ele já está fechado !`);
                } else {
                    this.ramMB += aplicativo.consumoMBAberto;
                    console.log(`Você fechou ${this.nomeAplicativo} !`);

                    for (let i = 0; i < this.aplicativosAbertos.length; i++) {
                        if (this.aplicativosAbertos[i] == this.nomeAplicativo) {
                            this.aplicativosAbertos.splice(i);
                            break;
                        }
                    }

                }
            }
        }
    }
}

const aplicativos = {
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