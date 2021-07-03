    /**
     * @param {string} s
     * @return {number}
     */
    var lengthOfLongestSubstring = function(s) {
        
    let hashMap = {},i=0,j=0,longest = 0, length = 0;

    while(j<s.length){

        if(hashMap[s[j]]===undefined){
            // console.log("he",hashMap);
            
            length = j-i+1
            // console.log({length});
            
            if(length>longest){
                longest = length
            }
            hashMap[s[j]] = j
        }
        else{
            
            if(hashMap[s[j]]>=i){
                i = hashMap[s[j]] + 1
                hashMap[s[j]] = j;
                
            }   
            else{
                hashMap[s[j]] = j
            }             
            length = j-i+1

            if(length>longest){
                longest = length
            }
        }
        console.log("he",hashMap,{length,i,j});
        j++

    } 
    return longest
    }
    console.log(lengthOfLongestSubstring("dvdf"));
