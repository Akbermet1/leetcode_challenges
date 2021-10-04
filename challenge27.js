var removeElement = function(nums, val) {
    let valCounter = 0;
    
    for(let i = 0; i < nums.length; i++)
    {
        if(nums[i] === val)
        {
            nums[i] = undefined;
            valCounter++;
        }
    }
    
    let a = 0;
    while(a < nums.length)
    {
        if(nums[a] === undefined)
        {
            for(let b = a + 1; b < nums.length; b++)
            {
                if(typeof nums[b] === "number")
                {
                    let temp = nums[b];
                    nums[b] = nums[a];
                    nums[a] = temp;
                    break;
                }

            }
        }
        a++;
    }
    
    return nums.length - valCounter;
};

module.exports = removeElement;