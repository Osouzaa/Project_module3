<!DOCTYPE html>
<html>
<head>
   
</head>
<body>

<h1>Bem-vindo à documentação do projeto! Aqui, você encontrará informações essenciais para entender e utilizar esta aplicação.</h1>

<h3>Tecnologias Utilizadas</h3>
<ul>
    <li>Node.js</li>
    <li>MongoDB</li>
    <li>Express</li>
    <li>npm</li>
    <li>Dotenv</li>
    <li>JavaScript</li>
    <li>TypeScript</li>
    <li>Multer, entre outras...</li>
</ul>

<h2>Rodando o Projeto</h2>
<p>Para executar o projeto em sua máquina, siga as instruções abaixo:</p>

<ol>
    <li>Clone este repositório do Git.</li>
    <li>Abra o terminal na pasta do projeto e execute o comando <code>npm install</code> para instalar as dependências essenciais.</li>
    <li>Certifique-se de ter o Node.js instalado em sua máquina.</li>
    <li>Defina as variáveis de ambiente necessárias criando um arquivo <code>.env</code>. Um arquivo <code>.env.example</code> está disponível no diretório principal como referência.</li>
    <li>As variáveis de ambiente incluem:
        <ul>
            <li><code>URL</code>: Endereço do banco de dados MongoDB.</li>
            <li><code>PORT</code>: Número da porta em que o servidor Express será lançado.</li>
            <li><code>SECRET_KEY</code>: Chave privativa utilizada com a biblioteca JWT para tokens de autenticação.</li>
        </ul>
    </li>
    <li>Após configurar as variáveis de ambiente, execute o comando <code>npm run dev</code> para iniciar o projeto.</li>
</ol>

<h2>Rotas Públicas</h2>
<ul>
    <li>Criar usuário ✅</li>
    <li>Autenticar ✅</li>
</ul>

<h2>Rotas Privadas</h2>
<ul>
    <li>Atualizar um usuário ✅</li>
    <li>Excluir um usuário ✅</li>
    <li>Criar um paciente vinculado a um usuário ✅</li>
    <li>Buscar todos os pacientes de um usuário ✅</li>
    <li>Buscar um paciente pelo identificador (ID) ✅</li>
    <li>Atualizar as informações de um paciente ✅</li>
    <li>Criar uma timeline vinculada a um paciente ✅</li>
    <li>Buscar todas as timelines de um paciente ✅</li>
    <li>Buscar uma timeline pelo identificador (ID) ✅</li>
    <li>Atualizar as informações de uma timeline ✅</li>
    <li>Criar uma ocorrência vinculada a uma timeline ✅</li>
    <li>Buscar todas as ocorrências de uma timeline ✅</li>
    <li>Buscar uma ocorrência pelo identificador (ID) ✅</li>
    <li>Atualizar as informações de uma ocorrência ✅</li>
    <li>Remover uma ocorrência pelo identificador (ID) ✅</li>
    <li>Remover um paciente pelo identificador (ID) ✅</li>
    <li>Remover uma timeline pelo identificador (ID) ✅</li>
</ul>

<h2>Entidade "Usuários"</h2>
<p>Campos:</p>
<ul>
    <li>Nome: String (Obrigatório)</li>
    <li>E-mail: String (Obrigatório e Único)</li>
    <li>Senha: String (Obrigatório, criptografada)</li>
    <li>Foto: ObjectId (Opcional)</li>
    <li>Criado em: Date (Automático)</li>
    <li>Atualizado em: Date (Automático)</li>
</ul>

<h2>Entidade "Paciente"</h2>
<p>Campos:</p>
<ul>
    <li>Proprietário: ObjectId do Usuário (Obrigatório)</li>
    <li>Timelines: Array de ObjectId das Timelines (Obrigatório)</li>
    <li>Nome: String (Obrigatório)</li>
    <li>Contato: String (Obrigatório)</li>
    <li>Data de Nascimento: Date (Obrigatório)</li>
    <li>Demandas: String (Opcional)</li>
    <li>Anotações Pessoais: String (Opcional)</li>
    <li>Criado em: Date (Automático)</li>
    <li>Atualizado em: Date (Automático)</li>
</ul>

<h2>Entidade "Timeline"</h2>
<p>Campos:</p>
<ul>
    <li>Nome: String (Obrigatório)</li>
    <li>Ocorrências: Array de ObjectId das Ocorrências (Obrigatório)</li>
    <li>Criado em: Date (Automático)</li>
    <li>Atualizado em: Date (Automático)</li>
</ul>

<h2>Entidade "Ocorrência"</h2>
<p>Campos:</p>
<ul>
    <li>Nome: String (Obrigatório)</li>
    <li>Conteúdo: String (Obrigatório)</li>
    <li>Tipo: String (Obrigatório)</li>
    <li>Arquivos: Array de ObjectId (Obrigatório)</li>
    <li>Criado em: Date (Automático)</li>
    <li>Atualizado em: Date (Automático)</li>
</ul>

<p>Agora você tem um resumo abrangente deste projeto. Fique à vontade para explorar as funcionalidades e personalizar conforme suas necessidades. Se tiver alguma dúvida ou precisar de assistência, não hesite em entrar em contato conosco.</p>

</body>
</html>

</body>
</html>
