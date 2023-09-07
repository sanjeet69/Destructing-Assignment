function countWords(text) {

    const words = text.split(/\s+/);
  

    const wordCount = new Map();
  
 
    for (const word of words) {
     const cleanedWord = word.toLowerCase(); 

      if (wordCount.has(cleanedWord)) {
        wordCount.set(cleanedWord, wordCount.get(cleanedWord) + 1);
      } else {
        wordCount.set(cleanedWord, 1);
      }
    }
  
    return wordCount;
  }
  

  const text = "The Fourth Contry India  To Succesfully landing  Chandryaan3 On The Moon";
  const result = countWords(text);
  
  result.forEach((count, word) => {
    console.log(`${word}: ${count}`);
  });
  