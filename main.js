// returns a random DNA base: A = Adenine, T = Thymine, C = Cytosine, and G = Guanine
const dnaBases = ["A", "T", "C", "G"];

const returnRandBase = () => {
    return dnaBases[Math.floor(Math.random()* dnaBases.length)];
}


// return a random single strand of DNA (containing 15 bases)

const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++){
        newStrand.push(returnRandBase())
    }
    return newStrand;
}

// returns an object that contains properties (dna, and specimenNum)
//specimen num should not be duplicated
const pAeqourFactory = (specimenNum, dna) => {
    if (specimenNum )
    return{
        dna: dna, 
        specimenNum: specimenNum, 

        //return object's dna
        mutate(){
            let randomSelectedIndex = Math.floor(Math.random() * this.dna.length)
            const randomBaseValue = this.dna[randomSelectedIndex]
            
            //returns new arrayof bases without the randomly selected base (randomBaseValue)
            let altBase = dnaBases.filter(element => element !== randomBaseValue)
          
            //replaces the oldBaseValue with the mutatedBase value
            const mutatedBase = altBase[Math.floor(Math.random() * 3)]
            this.dna.splice(randomSelectedIndex, 1, mutatedBase)
            
            return this.dna;
            
        }, 

        compareDNA(otherpAeqourObj){
            let count = 0;
            // let percentage = count/otherpAeqourObj.dna.length;
            for(let i = 0; i< this.dna.length; i++){
                if(otherpAeqourObj.dna[i] === this.dna[i]){
                    count += 1;
                }           
            }
            const percent = Math.floor(count/(this.dna.length) * 100);
            console.log(`Specimen #${this.specimenNum} and Specimen #${otherpAeqourObj.specimenNum} have ${percent}% DNA in common.`)
        }
    }
}

console.log(pAeqourFactory(4, mockUpStrand()).compareDNA(pAeqourFactory(7, mockUpStrand())));