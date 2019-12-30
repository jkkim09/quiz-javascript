class quiz1 {
    constructor () {
    }

    testFunction (value) {
        let a = 1;
        this.text_length = value.length;
        for (a; a<=this.text_length; a++) {
            this.stringSubstr(value, a);
        }
    }

    stringSubstr(text, length) {
        let b = 0;
        const re_number = parseInt(this.text_length/length);
        const add_number = this.text_length%length;
        console.log(text, length, this.text_length, re_number, add_number);
        for (b; b<re_number; b++) {
            let c = b+1;
            const select_text = text.substr(b, length);
            let select_text_check_count = 0;
            console.log('선택 문자 ----------->',select_text);
            for (c; c<re_number; c++) {
                const check_index_text = text.substr(c, length);
                console.log('확인 문자 --->', check_index_text);
                if (select_text === check_index_text) {
                    select_text_check_count += 1;
                } else {
                    // console.log('count : ', select_text_check_count);
                    // break;
                }
            }
        }
    }
}