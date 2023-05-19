export function cpfValidator(cpf) {
  const re = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/
  if (!cpf) return "CPF não pode ser vazio"
  if (!re.test(cpf)) return 'Seu CPF precisa ser válido!'
  return ''
}
