# Codice News Bot

> 🚧 **Em desenvolvimento** — projeto de estudo (Node.js/Express/Sequelize), construído aos poucos.

Ferramenta pra gerar carrosséis de notícias de tecnologia prontos pro Instagram:
busca notícias em feeds RSS, permite filtrar por data, você escolhe 4, e ela gera
os 6 slides em PNG prontos pra postar.

Não é uma ferramenta amarrada a um perfil específico — é genérica, pra qualquer
pessoa usar e personalizar com a própria marca (nome, @, cor, logo).

> Já existe uma versão funcional rodando localmente, com a paleta e identidade
> visual do [Codice Genesini](https://instagram.com/codicegenesini) (minha marca)
> aplicadas como exemplo padrão — mas trocar pra outra identidade é só editar um
> arquivo de configuração. Esse repositório é a versão "de aprendizado", construída
> peça por peça, mirando a mesma arquitetura da versão final. Pretendo incluir o
> projeto no meu portfólio quando estiver pronto.

## A ideia (visão completa do projeto)

1. O backend busca notícias de tecnologia em feeds RSS automaticamente
2. É possível buscar/filtrar as notícias por data
3. Um painel web lista o que foi encontrado
4. Você seleciona 4 notícias
5. O sistema gera 6 slides em PNG prontos pro carrossel (capa + 4 notícias + fechamento)
6. Você baixa o ZIP e posta manualmente no Instagram

## Status atual

O projeto está na **Fase 1 (backend básico)**. O que já funciona hoje:

- API REST com CRUD parcial de notícias (sem busca RSS ainda — os registros são
  criados manualmente via API, só pra validar o fluxo)
- Banco SQLite com Sequelize
- Rotas: listar, criar e atualizar notícias

O que ainda **não** existe nesta versão: busca automática via RSS (com filtro por
data), geração de imagens (Playwright), painel web (frontend), e modo de IA opcional.

> O modelo de dados vai mudar em breve: notícias vão deixar de ser criadas/editadas
> manualmente e passarão a ser buscadas automaticamente dos feeds RSS (dedupe por
> `guid`), sem `PUT`/`DELETE` — essa migração ainda está em andamento.

## Stack

- **Node.js + Express** — servidor/API
- **Sequelize + SQLite** — banco de dados
- *(planejado)* **Playwright** — renderizar HTML → PNG pros slides
- *(planejado)* **HTML/CSS/JS puro** — painel web

## Como rodar

Pré-requisito: Node.js instalado.

```bash
# 1. instalar dependências
npm install

# 2. iniciar o servidor
node index.js
```

O servidor sobe em `http://localhost:3000`.

## Endpoints disponíveis hoje

| Método | Rota | O que faz |
|--------|------|-----------|
| `GET`  | `/news` | Lista todas as notícias do banco |
| `POST` | `/news` | Cria uma notícia nova |
| `PUT`  | `/news/:id` | Atualiza uma notícia existente |

Corpo esperado (POST/PUT), em JSON:
```json
{
  "title": "string",
  "url": "string",
  "imageUrl": "string",
  "summary": "string",
  "source": "string",
  "publishedAt": "data (ex: 2026-10-01)"
}
```

## Roadmap

- [x] Fase 0 — Setup do projeto
- [ ] Fase 1 — Backend básico (CRUD → migrar pra busca automática via RSS, com filtro por data)
- [ ] Fase 2 — Gerador de imagens (Playwright, HTML → PNG)
- [ ] Fase 3 — Frontend (painel de seleção de notícias)
- [ ] Fase 4 — Melhorias (deploy opcional, histórico, etc.)

---

Projeto de estudo e portfólio, por [@auyber](https://github.com/auyber).