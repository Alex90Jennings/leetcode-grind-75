const canConstruct = (ransomNote: string, magazine: string): boolean => {
	if(ransomNote.length > magazine.length) return false;
	
    for(let i:number = 0; i < ransomNote.length; i++) {
        const letter:string = ransomNote.substring(i, i + 1);
        if (magazine.indexOf(letter) == -1) return false;
        magazine = magazine.replace(letter, '');
    }

    return true;
};
