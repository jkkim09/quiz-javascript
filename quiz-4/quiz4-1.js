function solution(p) {
    var words = ["frodo", "front", "frost", "frozen", "frame", "kakao"];
    var query = ["fro??", "????o", "fr???", "fro???", "pro?", "??o??"];
    var answer = [];
    var i = 0;
    var l = query.length;
    for (i;i<l;i++) {
        var a = 0;
        var k = words.length;
        answer[i] = 0;
        for (a;a<k;a++) {
            var reqExr = new RegExp(query[i].replace(/\?/g, '[a-z]')+'$');
            if (reqExr.test(words[a])) {
                answer[i] += 1; 
            }
        }
    }
    return answer;
}