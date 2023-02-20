function getMaxLessThanK(n, k) {

    var mx = -1;

    for(var i=1; i<=n; i++){
        for(var j=i+1; j<=n; j++){
            var res = i & j;
            if(res > mx && res < k){
                mx = res;
            }
        }
    }
    return mx;

};