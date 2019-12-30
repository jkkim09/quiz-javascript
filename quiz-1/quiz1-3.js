class quiz1 {
    constructor () {
        this.answer = {};
        this.appendElement = document.getElementById('append');
    }

    testFunction (value) {
        this.text_length = value.length;
        this.re_count = parseInt(this.text_length / 2);
        this.appendElement.innerHTML = '';
        for (let a=1; a<=this.re_count; a++) {
            const encoder_text = this.stringSubstr(value, a);
            const re_el = this.addElement('자를 길이 '+a, '결과 값 : ' + encoder_text);
            
            this.appendElement.append(re_el);
            if (a === 1) {
                this.answer = {
                    length: encoder_text.length,
                    text: encoder_text
                }
            } else {
                if (this.answer.length > encoder_text.length) {
                    this.answer = {
                        length: encoder_text.length,
                        text: encoder_text
                    }
                }
            }
        }
    }

    stringSubstr(text, length) {
        let start_index = 0;
        let check_count = 1;
        let hold_check = false;
        let hold_text = '';
        let return_text = '';
        for (;;) {
            const check_text = text.substr(start_index, length);
            const next_text = text.substr(start_index + length, length);
            if (check_text === next_text) {
                hold_check = true;
                hold_text = check_text;
                check_count += 1;
                start_index += length;
            } else {
                if (hold_check) {
                    return_text += (check_count + hold_text);
                }else {
                    if (start_index === 0) {
                        return_text += check_text;
                    } else {
                        return_text += check_text.substr(length-1, 1);
                    }
                }
                hold_check = false;
                check_count = 1;
                start_index += 1;
            }

            if ((this.text_length-1) <= start_index || next_text.length < length) {
                if (hold_check) {
                    return_text += (check_count + hold_text);
                } else {
                    return_text += next_text;
                }
                break;
            }
        }
        return return_text;
    }

    addElement (a, b) {
        const create_1 = document.createElement('div');
        const create_2 = document.createElement('div');
        const create_3 = document.createElement('div');
        create_2.innerHTML = a;
        create_3.innerHTML = b;
        create_1.append(create_2);
        create_1.append(create_3);
        return create_1;
    }

    getAnswer () {
        return this.answer;
    }
}