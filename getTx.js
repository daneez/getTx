var income = 0;
var tax = 0;
var taxTable = [
  {
    from : 0,
    to : 18200,
    base : 0,
    rate : 0
  },
  {
    from : 18201,
    to : 37000,
    base : 0,
    rate : 0.19
  },
  {
    from : 37001,
    to : 90000,
    base : 3572,
    rate : 0.325
  },
  {
    from : 90001,
    to : 180000,
    base : 20797,
    rate : 0.37
  },
  {
    from : 180001,
    to : Infinity,
    base : 54097,
    rate : 0.45
  }
  ];

function getTx(income){
  for (i = 0; i < taxTable.length+1; i++){
   if (income >= taxTable[i].from && income <= taxTable[i].to){
     tax = (income -taxTable[i].base)*taxTable[i].rate;
   }
   return tax;
  }
}
console.log(getTx(40000));