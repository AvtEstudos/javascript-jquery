var elForm, elSelectPackage, elPackageHint, elTerms, elTermsHint;

elForm = document.getElementById('formSignup');
elSelectPackage = document.getElementById('package');
elPackageHint = document.getElementById('packageHint');
elTerms = document.getElementById('terms');
elTermsHint = document.getElementById('termsHint');

function packageHint() {
  // Obtém a opção selecionada
  var package = this.options[this.selectedIndex].value;
  // Se monthly = package
  if (package == 'monthly') {
    elPackageHint.innerHTML = 'Save $10 if you pay for 1 year!';
  } else {
    elPackageHint.innerHTML = 'Wise choice!';
  }
}

function checkTerms(event) {
  // Se checkbox marcada
  if (!elTerms.checked) {
    elTermsHint.innerHTML = 'You must agree to the terms.';
    // Não envia o form
    event.preventDefault();
  }
}

// Cria ouvintes de evento: submit chama checkTerms(), change chama packageHint()
elForm.addEventListener('submit', checkTerms, false);
elSelectPackage.addEventListener('change', packageHint, false);