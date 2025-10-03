# Sistema de Agendamento de Consultas – Requisitos e Histórias de Usuário

## 1. Requisitos Funcionais

### Envio de mensagens entre paciente e recepcionista
O sistema deve incluir um envio de mensagens entre paciente e recepcionista, permitindo comunicação direta para esclarecimento de dúvidas ou agendamento.

### Geração automática de atestados
O sistema deve incluir a possibilidade do médico gerar automaticamente um atestado padronizado, preenchendo os dados do paciente, data e hora da consulta.

### Geração de relatórios de consultas
O sistema deve incluir a possibilidade de gerar relatórios detalhados da consulta, contendo informações importantes para acompanhamento e registro.

---

## 2. Requisitos Não Funcionais

### Disponibilidade do envio de mensagens
O envio de mensagens entre paciente e recepcionista só deve estar disponível entre o início do agendamento e o dia da consulta, gerando uma espécie de “ticket” de atendimento com o motivo da solicitação.

### Automação e preenchimento de atestados
A função de gerar atestados deve utilizar automaticamente o código de paciente gerado pela secretária na formalização da consulta: preenchendo todos os dados informacionais do paciente, data e hora da consulta de forma automática.
