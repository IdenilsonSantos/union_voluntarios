<div align="center">
  <br />
  
   <h3 align="center">Um editor colaborativo</h3> <br />
   <img src="https://res.cloudinary.com/djgvgwuwe/image/upload/v1724524690/portfolio/ihahod4slfw5m4tyrt06.png" alt="Project Banner">
  <br />

  <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=61DAFB" alt="next.js" />
    <img src="https://img.shields.io/badge/-TypeScript-black?style=for-the-badge&logoColor=white&logo=typescript&color=3178C6" alt="typescript" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>

</div>

## <a name="table">Glossário</a>

1. [Sobre](#introduction)
2. [Tecnologias](#tech-stack)
3. [Features](#features)
4. [Iniciar a aplicação](#quick-start)
5. [Contribuir](#contribution)


## <a name="introduction">Sobre</a>


Aplicação realtime construída com Next.js, Liveblocks que possibilitam a interação em tempo real sem necessidade de backend e TailwindCSS para estilizar, parecido com o Google docs e outras ferramentas colaborativas.

## <a name="tech-stack">Tecnologias</a>

- Next.js
- TypeScript
- Liveblocks
- Lexical Editor
- ShadCN
- Tailwind CSS

## <a name="features">Features</a>

👉 **Autenticação**: Autenticação através da ferramenta Clerk, que possibilita a integração da aplicação com o google ou outras ferramentas desejadas para iniciar ou encerrar uma sessão.

👉 **Colaboração**: Os usuários cadasstrados podem editar o documento de forma simultanea.

👉 **Manipulação dos Documentos**
   - **Criação**: Os usuários podem criar novos documentos, que são salvos e listados automaticamente.
   - **Excluir Documentos**: Os usuários podem excluir documentos que a eles pertencem.
   - **Compartilhar Documentos**: Os usuários podem compartilhar documentos com permissões de visualização ou edição.
   - **Listar documentos**: Exibe todos os documentos que pertencem ou são compartilhados com o usuário

👉 **Commentários**: Usuários podem adicionar comentários que serão vistos por outros usuários em tempo rreal.

👉 **Usuários ativos**: Mostra os usuários ativos por meio de identificadores coloridos.

👉 **Notificações**: Notifica os usuários em todas as ações realizadas.

## <a name="quick-start">Como rodar</a>

**Pré-requisitos**

Você precisa ter o seguinte para rodar em sua máquina:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Gerenciador de Pacotes de Nó)

**Clone este repositório**

```bash
clone do git https://github.com/IdenilsonSantos/realtimedocseditor.git
cd realtimedocseditor
```

**Instalação**

Instale as dependências do projeto usando npm:

```bash
npm install 
```

**Variáveis de ambiente**

Neste repositório há um arquivo `.env.example`, copie o contéudo dele para um outro arquivo chamado `.env` ou `.env.local`:

Substitua os valores do espaço no arquivo env com suas credenciais do Clerk & LiveBlocks. Você pode obter essas credenciais inscrevendo-se no site [Clerk](https://clerk.com/) e [Liveblocks](liveblocks.io/).

**Executando o Projeto**

```bash
npm run dev
```

<a id="contribuir"></a>

## Como Contribuir

Faça um Fork desse repositório,
Crie uma branch com a sua feature: git checkout -b my-feature
Commit suas mudanças: git commit -m 'feat: My new feature'
Push a sua branch: git push origin my-featur

## Licença

Esse projeto está sob a licença MIT.
   <div align="center">
     Este projeto foi construido baseado no tutorial do canal <a href="https://www.youtube.com/@javascriptmastery/videos" target="_blank"><b>JavaScript Mastery</b></a>
    </div>
