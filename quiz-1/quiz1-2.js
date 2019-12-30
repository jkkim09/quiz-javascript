class quiz1 {
    constructor () {
    }

    testFunction (value) {
        let a = 1;
        this.text_length = value.length;
        this.re_count = this.text_length;
        for (a; a<=this.text_length; a++) {
            const encoder_text = this.stringSubstr(value, a);
            console.log('encoder_text : ', encoder_text);
        }
    }

    stringSubstr(text, length) {
        const re = this.re_count - length;
        let return_text = '';
        if (re < 1) return;
        console.log('-----------------------------------------------------------------------');
        console.log('test :', text);
        console.log('text length : ', this.text_length);
        console.log('선택 길이 : ', length);
        console.log('반복 횟수 : ', re);
        console.log('-----------------------------------------------------------------------');
        for (let r=0; r<re; r++) {
            let check_index = r;
            const select_text = text.substr(r, length);
            let select_text_count = 1;
            console.log('========>선택 text : ', r, select_text);
            for(;;) {
                check_index = check_index + length;
                if (check_index >= this.text_length) {
                    break;
                } else {
                    const next_text = text.substr(check_index, length);
                    console.log('확인 text : ', check_index, next_text);
                    if (select_text === next_text) {
                        select_text_count += 1;
                    } else {
                        break;
                    }
                }
            }
            console.log('< ', select_text_count, select_text, ' >');
        }
        this.re_count -= 1;
        return return_text;
    }
}