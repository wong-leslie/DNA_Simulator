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
            for(let i =0; i< otherpAeqourObj.dna.length; i++){
                for(let j = 0; j < this.dna.length; j++){
                    
                }
            }

        }
    }
}

console.log(pAeqourFactory(1, mockUpStrand()).mutate());