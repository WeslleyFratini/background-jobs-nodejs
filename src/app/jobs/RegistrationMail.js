import Mail from "../lib/Mail";

export default {
  key: "RegistrationMail",
  async handledata({ data }) {
    const { user } = data;
    await Mail.sendMail({
      from: "Queue Teste <queue@queueteste.com.br>",
      to: `${user.name} <${user.email}>`,
      subject: "Cadastro de um usuário",
      html: `Olá, ${user.name}, bem vindo ao sistema de cadastro`,
    });
  },
};
