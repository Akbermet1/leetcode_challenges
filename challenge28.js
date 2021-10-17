const haystack = "hello", needle = "ll";
const haystack2 = "aaaaa", needle2 = "bba";
const haystack3 = "", needle3 = "";
const haystack4 = "blablablablah", needle4 = "blah";
const haystack5 = "aaaaaaaaaaaaaaa", needle5 = "aaaah";

var strStr = function(haystack, needle) {
    if(needle === "")
    {
        return 0;
    }
    else if(haystack.length < needle.length)
    {
        return -1;
    }
    else 
    {
        let indexHaystack = 0;
        let indexNeedle = 0;
        while(indexHaystack < haystack.length)
        {
            if(haystack[indexHaystack] !== needle[indexNeedle])
            {
                indexHaystack++;
                continue;
            }
            
            if(indexHaystack+(needle.length - 1) < haystack.length)
            {
                let potentioalMatch = haystack.slice(indexHaystack, indexHaystack+needle.length);
                console.log(potentioalMatch, "at index", indexHaystack);

                if(potentioalMatch === needle)
                {
                    // console.log(indexHaystack);
                    return indexHaystack;
                }

                indexHaystack++; //if potential match didn't match skip needle.length indexes
                // indexHaystack = indexHaystack+1 < haystack.length ? ++indexHaystack : return -1;
            }
            else
            {
                return -1;
            }
        }

        return -1;
    }
};

module.exports = strStr;

console.log(`test case 1:\nneedle: ${needle}, haysack: ${haystack}`);
console.log("match found at index: ", strStr(haystack, needle), "\n");

console.log(`test case 2:\nneedle: ${needle2}, haysack: ${haystack2}`);
console.log("match found at index: ", strStr(haystack2, needle2), "\n");

console.log(`test case 3:\nneedle: ${needle3}, haysack: ${haystack3}`);
console.log("match found at index: ", strStr(haystack3, needle3), "\n");

console.log(`test case 4:\nneedle: ${needle4}, haysack: ${haystack4}`);
console.log("match found at index: ", strStr(haystack4, needle4), "\n");

console.log(`test case 5:\nneedle: ${needle5}, haysack: ${haystack5}`);
console.log("match found at index: ", strStr(haystack5, needle5), "\n");
// console.log(haystack5.length);

