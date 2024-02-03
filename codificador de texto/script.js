function processText() {
    const textInput = document.getElementById('text').value;
    const option = document.getElementById('option').value;
    let result = '';

    if (option === 'criptografar') {
        result = criptografar(textInput);
    } else if (option === 'descriptografar') {
        result = descriptografar(textInput);
    }

    document.getElementById('result').value = result;
}

function criptografar(text) {
    return text.replace(/e/g, 'enter')
               .replace(/i/g, 'imes')
               .replace(/a/g, 'ai')
               .replace(/o/g, 'ober')
               .replace(/u/g, 'ufat');
}

function descriptografar(text) {
    return text.replace(/enter/g, 'e')
               .replace(/imes/g, 'i')
               .replace(/ai/g, 'a')
               .replace(/ober/g, 'o')
               .replace(/ufat/g, 'u');
}
