/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var backspaceCompare = function(s,t) {

    let p1= s.length-1,p2 = t.length-1;

    while( p1>=0 && p2>=0){
        if(s[p1]!==s[p2]){
            return false
        }
        
        if(s[p1]==='#'){
            let backCount = 2;
            while(backCount>0){
                p1--;
                backCount--;
                if(s[p1]=='#'){
                    backCount=backCount+2;
                }
            }
        }
        if(s[p2]==='#'){
            let backCount = 2;
            while(backCount>0){
                p2--;
                backCount--;
                if(s[p2]=='#'){
                    backCount=backCount+2;
                }
            }
        }
    }
    return true;
      
            

     
    // for(let i = 0;i<s.length;i++){
    //     console.log({s});

        
    //     if (s[i]==='#') {

    //         if(s[i-1]===undefined){
    //             console.log('2');
    //             s=s.replace('#','')
    //             i=i-1
                

    //              continue
    //          }

    //         s=s.replace(s[i-1]+'#','')
    //         i=i-2
            
            
    //     }
    // }

    // for(let i = 0;i<t.length;i++){
    //     console.log({t,i});
    //     console.log(t[i]==='#');

        
    //      if (t[i]==='#') {
    //          console.log('1');
             
    //          if(t[i-1]===undefined){
    //             console.log('2');
    //             t=t.replace('#','')
    //             i=i-1
    //              continue
    //          }
    //         t=t.replace(t[i-1]+'#','')
    //         i=i-2
    //         console.log('3');
    //     }
    // }
    // if(s==t){
    //     return true
    // }
    // else{
    //     return false
    // }
}

console.log(backspaceCompare("j##xfix",
"j###xfix"));
