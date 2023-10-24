// import { useState, useEffect } from "react";

// const specialCharacters = ['&', '#', '$', '!', '?', '"', '(', ')', '.'];
// const lowerCharacters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v','w', 'x', 'y', 'z'];
// const upperCharacters = ['A', 'B', 'C', 'D', 'E', 'F', 'G','H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
// const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const usePasswordGenerate = (length, genCount, upper, lower, numbers, special) => {
    function generateRandomPassword(length, includeCapital, includeSmall, includeNumbers, includeSpecial) {
        // Define character sets
        const capitalLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const smallLetters = 'abcdefghijklmnopqrstuvwxyz';
        const numbers = '0123456789';
        const specialCharacters = '!@#$%^&*()_-+=<>?';
      
        // Calculate the number of characters needed for each set
        // const numCapitalChars = includeCapital ? Math.floor(length / 4) : 0;
        // const numSmallChars = includeSmall ? Math.floor(length / 4) : 0;
        // const numNumberChars = includeNumbers ? Math.floor(length / 4) : 0;
        // const numSpecialChars = includeSpecial ? Math.floor(length / 4) : 0;
      
        // Create an array of characters from each set
        const characterSets = [];
        if (includeCapital) characterSets.push(capitalLetters);
        if (includeSmall) characterSets.push(smallLetters);
        if (includeNumbers) characterSets.push(numbers);
        if (includeSpecial) characterSets.push(specialCharacters);
      
        // Check if there are characters needed for each set
        if (characterSets.length === 0) {
          return false
        }
      
        // Generate the password
        let password = '';
        for (let i = 0; i < length; i++) {
          const randomSetIndex = i % characterSets.length;
          const characterSet = characterSets[randomSetIndex];
          const randomCharIndex = Math.floor(Math.random() * characterSet.length);
          password += characterSet[randomCharIndex];
        }
      
        // Shuffle the password to mix characters from different sets
        password = password.split('');
        for (let i = password.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [password[i], password[j]] = [password[j], password[i]];
        }
      
        return password;
      }

      const generatedpassword = generateRandomPassword(length, upper, lower, numbers, special);
      return generatedpassword
};

export default usePasswordGenerate;
