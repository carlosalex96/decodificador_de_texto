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
                .replace(/é/g, 'enter')
               .replace(/i/g, 'imes')
               .replace(/í/g, 'enter')
               .replace(/a/g, 'ai')
               .replace(/á/g, 'enter')
               .replace(/o/g, 'ober')
               .replace(/ó/g, 'enter')
               .replace(/u/g, 'ufat')
               .replace(/ú/g, 'enter');
}

function descriptografar(text) {
    return text.replace(/enter/g, 'e')
                .replace(/enter/g, 'é')
               .replace(/imes/g, 'i')
               .replace(/enter/g, 'í')
               .replace(/ai/g, 'a')
               .replace(/enter/g, 'á')
               .replace(/ober/g, 'o')
               .replace(/enter/g, 'ó')
               .replace(/ufat/g, 'u')
               .replace(/enter/g, 'ú');
}
