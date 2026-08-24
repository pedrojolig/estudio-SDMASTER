// Foco visível ao navegar por teclado
(function () {
  const body = document.body;
  function handleKeyDown(event) {
    if (event.key === "Tab") {
      body.classList.add("user-is-tabbing");
      window.removeEventListener("keydown", handleKeyDown);
    }
  }
  window.addEventListener("keydown", handleKeyDown);
})();

// Feedback simples do formulário (sem envio real, só acessível)
(function () {
  const form = document.getElementById("form-contato");
  const feedback = document.querySelector(".form-feedback");

  if (!form || !feedback) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const mensagem = form.mensagem.value.trim();

    if (!nome || !email || !mensagem) {
      feedback.textContent = "Por favor, preencha todos os campos obrigatórios.";
      feedback.style.color = "#cf2e2e";
      return;
    }

    feedback.textContent = "Mensagem enviada! Em breve entraremos em contato.";
    feedback.style.color = "#00a000";

    form.reset();
  });
})();

// Botão "Alterar idioma" – placeholder acessível
(function () {
  const btnIdioma = document.getElementById("btn-alterar-idioma");
  if (!btnIdioma) return;

  btnIdioma.addEventListener("click", function () {
    alert("Em breve você poderá escolher outros idiomas para o site.");
  });
})();

