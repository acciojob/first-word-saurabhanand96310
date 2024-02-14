function firstWord(s) {
  // your code here
	let f="";
	s=s.trim();
	s=s+" ";
	for(let t in s ){
		f=f+t;
		if(t==" "){
			break;
		}
	}
	return f;
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
