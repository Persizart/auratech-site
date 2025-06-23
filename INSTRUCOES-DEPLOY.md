# 🚀 Instruções para Publicar no GitHub Pages

## Passo a Passo Completo

### 1. Criar Repositório no GitHub
1. Acesse [GitHub.com](https://github.com) e faça login
2. Clique no botão **"New"** ou **"+"** > **"New repository"**
3. Nomeie o repositório (ex: `auratech-site` ou `meu-site`)
4. Marque como **Public** (necessário para GitHub Pages gratuito)
5. **NÃO** marque "Add a README file" (já temos um)
6. Clique em **"Create repository"**

### 2. Fazer Upload dos Arquivos
Você tem duas opções:

#### Opção A: Upload via Interface Web (Mais Fácil)
1. No repositório criado, clique em **"uploading an existing file"**
2. Descompacte o arquivo `auratech-site.zip` no seu computador
3. Arraste TODOS os arquivos e pastas para a área de upload
4. Aguarde o upload completar
5. Escreva uma mensagem de commit: "Primeiro commit - Site AuraTechIA"
6. Clique em **"Commit changes"**

#### Opção B: Via Git (Para usuários avançados)
```bash
# Descompacte o arquivo e entre na pasta
cd auratech-site

# Inicialize o git
git init

# Adicione o repositório remoto (substitua SEU-USUARIO)
git remote add origin https://github.com/SEU-USUARIO/NOME-DO-REPO.git

# Adicione todos os arquivos
git add .

# Faça o commit
git commit -m "Primeiro commit - Site AuraTechIA"

# Envie para o GitHub
git push -u origin main
```

### 3. Ativar GitHub Pages
1. No seu repositório, vá em **Settings** (configurações)
2. Role para baixo até encontrar **"Pages"** no menu lateral
3. Em **"Source"**, selecione **"GitHub Actions"**
4. Pronto! O deploy será automático

### 4. Aguardar o Deploy
1. Vá na aba **"Actions"** do seu repositório
2. Você verá um workflow rodando (círculo amarelo)
3. Aguarde ficar verde (✅) - demora cerca de 2-5 minutos
4. Seu site estará disponível em: `https://SEU-USUARIO.github.io/NOME-DO-REPO`

## 📋 Checklist de Verificação

- [ ] Repositório criado no GitHub
- [ ] Todos os arquivos enviados (incluindo pastas .github)
- [ ] GitHub Pages configurado para "GitHub Actions"
- [ ] Workflow executado com sucesso (aba Actions)
- [ ] Site acessível no link fornecido

## 🔧 Resolução de Problemas

### Site não carrega / Página em branco
- Verifique se todos os arquivos foram enviados corretamente
- Confirme que a pasta `.github/workflows` foi incluída
- Aguarde alguns minutos após o deploy

### Erro no workflow
- Vá na aba "Actions" e clique no workflow com erro
- Verifique se o arquivo `package.json` foi enviado
- Tente fazer um novo commit para reexecutar

### Imagens não aparecem
- As imagens externas podem demorar para carregar
- Verifique sua conexão com a internet

## 🎉 Pronto!

Após seguir esses passos, seu site da AuraTechIA estará online e acessível para o mundo todo!

**Lembre-se:** Qualquer alteração que você fizer no código e enviar para o GitHub será automaticamente publicada no site.

---

**Dúvidas?** Consulte a [documentação oficial do GitHub Pages](https://docs.github.com/pt/pages)

