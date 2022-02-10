[
    {cardNumber: 'RA22121995000002', gift: 'R', priority: 1},
    {cardNumber: 'DH22121999000001', gift: 'W', priority: 2},
]

// City Bank gift planning problem in javascript
function cardDistribution(data){
    let list = [];
    const ajfdhj = data.map((item) => {
        const district = item.district;
        const currentYear = item.currentYear;
        const postCode = item.postNo;
        const birthYear = item.birthYear;
        const priority = item.priority;


        let cardNumber = `${district.slice(0,2).toUpperCase()}${currentYear % 100}${parseInt(postCode / 100)}${birthYear}`
        let lastNumberOfCard;
    
        for (let index = cardNumber.length; index <= 16; index++) {
        
            if(index === (16-1)){
                lastNumberOfCard = randNumberGenerator()
                cardNumber += lastNumberOfCard
                break;
            }else{
                cardNumber += '0'
            }      
        }
        let gift = lastNumberOfCard %2 == 0 ? 'R' : 'W';
        const singleObj = {cardNumber, gift, priority}
        list.push(singleObj)
    })
    return list;
}
const data = [
    { name: 'MR Rashid', birthYear: 1999, currentYear: 2022, district: 'Dhaka', postNo: 1200, priority: 2 },
    { name: 'MR Raju', birthYear: 1995, currentYear: 2022, district: 'Rajshahi', postNo: 1211, priority: 1 },
]


function randNumberGenerator() {
    return Math.floor((Math.random() * 2) + 1)
}

console.log(cardDistribution(data).sort((a, b) => (a.priority > b.priority) ? 1 : -1));

