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
    return{
        dna: dna, 
        specimenNum: specimenNum, 
        
        //return object's dna mutated
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

        //prints messafe that states at what percentage the two DNA objects are common/similar
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
        }, 

        //return true/false if objects DNA array contains at least 60% of C or G bases; determining DNAs survival
        willLikelySruvive(){    
            let count = 0;
            for (let baseElement of this.dna){
                if (baseElement === "G" || baseElement ==="C"){
                    count+=1;
                }
            
            }
            const survivalRatio = count/this.dna.length;
            // console.log(this.dna);
            // console.log(count);
            // console.log(survivalRatio)

        
            if (survivalRatio >= 0.60){
                return true
            }  return false;
        }
    }
}



// console.log(pAeqourFactory(4, mockUpStrand()).willLikelySruvive());


let studyArray = []
let randomInt = Math.floor(Math.random()*30)

// while (studyArray.length < 30){
//     if(pAeqourFactory(randomInt, mockUpStrand()).willLikelySruvive === true){
//         studyArray.push(pAeqourFactory(randomInt, mockUpStrand()))
//     }
// }

console.log(randomInt);