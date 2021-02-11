import Mail from "../../lib/Mail";

export default {
  async store(req, res) {
    const { name, email, password } = req.body;

    const user = {
      name,
      email,
      password,
    };

    await Mail.sendMail({
      from: "Queue Teste <queue@teste@gmail.com>",
      to: `${name} <${email}>`,
      subject: "Cadastro de um usuário",
      html: `Olá, ${name}, bem vindo ao sistema de cadastro`,
    });

    return res.json(user);
  },
};
