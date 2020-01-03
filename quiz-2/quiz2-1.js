function solution(p) {
    if (p.length % 2 !== 0) {
        alert('짝수가 아닙니다.');
        return;
    }
    var total_value = 0;
    var answer = '';
    var start_index = 0;
    var end_index = 0;
    var check = true;
    for (var i=0; i<p.length; i++) {
        var index_text = p.substr(i, 1);
        var check_value;
        if (index_text === '(') {
            check_value = 1;
        } else {
            check_value = -1;
        }
        total_value += check_value;
        if (total_value === 0) {
            if (!check) {
                var add_text;
                check = true;
                end_index = i;
                var length = end_index - start_index + 1;
                if (p.substr(start_index, 1) === ')') {
                    console.log('length : ', length);
                    console.log('start : ', start_index);
                    console.log('end : ', end_index);
                    console.log('1 : ', length/2, length/2);
                    console.log('2 : ', start_index, length/2)
                    add_text = p.substr(length/2, length/2) + p.substr(start_index, length/2);
                } else {
                    add_text = p.substr(start_index, length);
                }
                answer += add_text;
            }
        }else {
            if (check) {
                check = false;
                start_index = i;
            }
        }
    }
    return answer;
}