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

- Servidor Express com rotas separadas por arquivo (`/news` e `/carousel`)
- Banco SQLite com Sequelize; a tabela `articles` é criada ao subir o servidor
- Modelo `Article` já pensado para os feeds RSS: `guid` único (para não repetir
  notícia), título, resumo, link, fonte, categoria, imagem e data de publicação
- Rota que lista as notícias salvas no banco

O CRUD manual (criar e editar notícia pela API) foi removido: as notícias vão
entrar só pela busca automática nos feeds RSS, que é a próxima etapa. Por isso,
hoje a listagem volta vazia.

O que ainda **não** existe nesta versão: busca automática via RSS (com filtro por
data), geração de imagens (Playwright), painel web (frontend) e modo de IA opcional.

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

**No ar:** ainda não publicado. O deploy está previsto para a Fase 4.

## Endpoints disponíveis hoje

| Método | Rota | O que faz |
|--------|------|-----------|
| `GET`  | `/` | Teste rápido: responde "Hello World!" |
| `GET`  | `/news` | Lista as notícias salvas no banco (JSON) |
| `GET`  | `/carousel` | Rota reservada para o carrossel; por enquanto só confirma que está funcionando |

## Roadmap

- [x] Fase 0 — Setup do projeto
- [ ] Fase 1 — Backend básico (modelo pronto para RSS → falta a busca automática nos feeds, com filtro por data)
- [ ] Fase 2 — Gerador de imagens (Playwright, HTML → PNG)
- [ ] Fase 3 — Frontend (painel de seleção de notícias)
- [ ] Fase 4 — Melhorias (deploy opcional, histórico, etc.)

---

Projeto de estudo e portfólio, por [@auyber](https://github.com/auyber).