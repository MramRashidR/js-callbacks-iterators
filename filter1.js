
// (1) Write code that uses the filter function, and the below isCool function to return a list of people who are cool.
let people = [
	{
	  name: "Bob",
	  coolnessScore: 23
	},
	{
	  name: "Jen",
	  coolnessScore: 40
	},
	{
	  name: "James",
	  coolnessScore: 15.6
	},
	{
	  name: "Isolde",
	  coolnessScore: 17
	}
  ];
  
  // (1) Write code that uses the filter function, and the below isCool function to return a list of people who are cool.
  
  const inCool = people.filter((person) => {
	if (person.coolnessScore >= 20) {
	  return true
	}
  })
  console.log(inCool)

