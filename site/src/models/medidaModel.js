var database = require("../database/config");

function buscarUltimasMedidas(idAquario, limite_linhas) {

    instrucaoSql = ''

    if (process.env.AMBIENTE_PROCESSO == "producao") {
        instrucaoSql = `select top ${limite_linhas}
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,  
                        momento,
                        FORMAT(momento, 'HH:mm:ss') as momento_grafico
                    from medida
                    where fk_aquario = ${idAquario}
                    order by id desc`;
    } else if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select 
        dht11_temperatura as temperatura, 
        dht11_umidade as umidade,
                        momento,
                        DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
                    from medida
                    where fk_aquario = ${idAquario}
                    order by id desc limit ${limite_linhas}`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function tempoReal() {

    instrucaoSql = ''
     if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select sum(acertos) as somaAcertos, sum(erros) as somaErros, sum(tentativas) as somaTentativas from cruzadinha; `;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function tempoReal1() {

    instrucaoSql = ''
     if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select sum(tentativas) as somaid1, sum(acertos) as acertosid1, nome from cruzadinha join usuario on fkUsuario = idUsuario where fkUsuario = 1;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function tempoReal2() {

    instrucaoSql = ''
     if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select sum(tentativas) as somaid2, sum(acertos) as acertosid2, nome from cruzadinha join usuario on fkUsuario = idUsuario where fkUsuario = 2;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function tempoReal3() {

    instrucaoSql = ''
     if (process.env.AMBIENTE_PROCESSO == "desenvolvimento") {
        instrucaoSql = `select sum(tentativas) as somaid3, sum(acertos) as acertosid3, nome from cruzadinha join usuario on fkUsuario = idUsuario where fkUsuario = 3;`;
    } else {
        console.log("\nO AMBIENTE (produção OU desenvolvimento) NÃO FOI DEFINIDO EM app.js\n");
        return
    }

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    tempoReal,
    tempoReal1,
    tempoReal2,
    tempoReal3
}
