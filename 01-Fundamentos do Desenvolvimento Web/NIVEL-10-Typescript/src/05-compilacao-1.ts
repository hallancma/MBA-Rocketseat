function showTicket(user: string, ticket: number) {
  console.log(`Olá, ${user ?? "Usuário Padrão"}! Seu ticket é: ${ticket}`);
}

showTicket("Hallan", 12345);
