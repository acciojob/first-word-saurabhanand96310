function firstWord(s) {
  // your code here
	let f="";
	s=s.trim();
	s=s+" ";
	for(let t of s ){
		
		if(t==" "){
			break;
		}
		f=f+t;
	}
	
	return f;

	
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
