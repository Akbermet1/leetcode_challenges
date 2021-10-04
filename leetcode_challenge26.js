function removeDuplicates(nums) {
    let duplicatesTotal = 0;
    let previousNumber = nums[0];
    for(let i = 1; i < nums.length; i++)
    {
        if(previousNumber === nums[i])
        {
            nums[i] = undefined;
            duplicatesTotal++;
        }
        else
        {
            previousNumber = nums[i];   
        }    
    }
    
    let i = 0;
    let j = 0;
    while(i < nums.length)
    {
        if(nums[i] === undefined)
        {
            for(let j = i + 1; j < nums.length; j++)
            {
                if( (typeof nums[j]) === "number")
                {
                    let a = nums[j];
                    nums[j] = nums[i];
                    nums[i] = a;
                    break;
                }
            }
        }
        i++;
    }
    
    return nums.length - duplicatesTotal;
};

module.exports = removeDuplicates;
