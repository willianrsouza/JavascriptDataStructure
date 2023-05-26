/*

Um vetor é uma coleção de elementos de um mesmo tipo que são referenciados por um
identificador único. Esses elementos ocupam posições contíguas na memória, o que permite
acesso direto (em tempo constante, Θ(1)) a qualquer elemento por meio de um índice inteiro.

Denotamos um vetor A com capacidade para m elementos por A[1..m]. Se o vetor armazena n elementos, dizemos que seu tamanho é n e o denotamos também por A[1..n] ou por
A = (a1, a2, . . . , an). Denotamos por A[i] o elemento que está armazenado na i-ésima posição
de A (i.e., ai), para todo i com 1 ≤ i ≤ n. Para quaisquer i e j em que 1 ≤ i < j ≤ n,
denotamos por A[i..j] o subvetor de A que contém os elementos A[i], A[i + 1], . . . , A[j].

*/

/* Um vetor é um array, variaveis de um mesmo tipo guardadas em sequencia.   */
const vetor = [1, 2, 3, 4, 5];

/* A complexibilidade de busca: A(...n) */
const buscarValor = (vetorInteiros, item) => {

    let encontrado = false;

    for(let i = 0; i < vetorInteiros.length; ++i){
        if(vetorInteiros[i] == item)
            encontrado = true;
    }

    return console.log(encontrado);
}


/* Como já foi discutido no Capítulo 2, o tempo para buscar um elemento em um vetor
de tamanho n é O(n) se usarmos o algoritmo de busca linear pois, no pior caso, ela precisa
acessar todos os elementos armazenados no vetor. */

//buscarValor(vetor, 7);


/*A inserção de um elemento em um vetor pode ser feita em tempo constante, pois o mesmo será armazenado
em A(n + 1), 'n' sendo o tamanho do vetor/array */

const adicionarValor = (vetorInteiros, item) => {

    /* O javascript trabalha com vetores de tamanhso dinamicos, 
    então não precisamos aumentar o tamanho do vetor  = vetor.Length + 1.
    */
    posicaoInsercao = vetorInteiros.length // + 1;
    vetorInteiros[posicaoInsercao] = item;

    return console.log(vetorInteiros);
}


//adicionarValor(vetor, 5);
///adicionarValor(vetor, 6);
///adicionarValor(vetor, 7);


/* O tempo de complexidade para iterar sobre esse vetor encontrar o valor e exclui-lo, é igual a O(...n).
   Sendo O = Tempo, n = posição que se encontra nosso item, e nesse caso preciso movimentar o vetor oque aumenta o nivel de complexidade do codigo. 
*/

const removerValor = (vetorInteiros, item) => {

    /* Percorrendo o vetor [1, 2, 3 ]*/
    for(let i = 0; i < vetorInteiros.length; ++i){
        
        /*Verificando se a posição atual do vetor possui o item*/
        if(vetorInteiros[i] === item){
          
         /*
           Percorrendo o vetor partindo da posição do item encontrado, 'J = 1', e indo até a penultima posição
         */
            for(let j = i; j < vetorInteiros.length - 1; j++){
                  
                /* A minha posição atual recebe o item da proxima posição */
                ++vetorInteiros[j]; //2
            }
        }
    }

    --vetorInteiros.length;
    
    return console.log(vetorInteiros);
}

/*
   Etapas: 

   - Percorrer o vetor e encontrar o valor;
   - O valor encontrado, devemos percorrer o vetor partindo da posição desse valor
   - Partindo da posição desse valor, podemos dizer que essa posição recebe o valor da proxima posição
   - Movimentando então o vetor aos poucos
   - Por fim diminuimos o tamanho do vetor, para remover o numero duplicado  
*/

console.log(vetor);
removerValor(vetor, 2);

