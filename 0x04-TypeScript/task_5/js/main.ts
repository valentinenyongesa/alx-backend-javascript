// Define the interfaces
interface MajorCredits {
  credits: number;
  brand: "MajorCredits"; // Unique identifier for MajorCredits
}

interface MinorCredits {
  credits: number;
  brand: "MinorCredits"; // Unique identifier for MinorCredits
}

// Define the functions
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "MajorCredits"
  };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: "MinorCredits"
  };
}

// Example usage:
const subject1Major: MajorCredits = { credits: 3, brand: "MajorCredits" };
const subject2Major: MajorCredits = { credits: 4, brand: "MajorCredits" };

const subject1Minor: MinorCredits = { credits: 2, brand: "MinorCredits" };
const subject2Minor: MinorCredits = { credits: 1, brand: "MinorCredits" };

console.log(sumMajorCredits(subject1Major, subject2Major)); // Output: { credits: 7, brand: "MajorCredits" }
console.log(sumMinorCredits(subject1Minor, subject2Minor)); // Output: { credits: 3, brand: "MinorCredits" }
