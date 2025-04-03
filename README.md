# expo-router

Este repositório contém exemplos de implementação de diferentes tipos de navegação usando o Expo Router, uma solução de roteamento baseada em arquivos para aplicativos React Native criados com Expo.

## Branches

Este repositório está organizado em branches específicas, cada uma demonstrando um tipo diferente de navegação:

### 1. `main`
- Branch principal que contém este README com instruções e documentação sobre o projeto

### 2. `stack`
- Implementação de navegação Stack
- Demonstra transições de tela com empilhamento (push/pop)
- Ideal para fluxos sequenciais como formulários multi-etapas ou visualização detalhada

### 3. `tabs`
- Implementação de navegação por Tabs
- Mostra como criar uma interface com guias na parte inferior ou superior
- Perfeito para aplicativos com seções principais de igual importância

### 4. `drawer`
- Implementação de navegação Drawer
- Apresenta um menu lateral deslizante
- Útil para aplicativos com muitas seções ou opções de navegação

## Como usar

Para explorar cada tipo de navegação:

1. Clone este repositório:
```bash
git clone https://github.com/seu-usuario/expo-router.git
cd expo-router
```

2. Mude para a branch desejada:
```bash
git checkout stack  # ou tabs, drawer
```

3. Instale as dependências:
```bash
npm install
# ou
yarn install
```

4. Execute o projeto:
```bash
npx expo start
```

## Estrutura do Expo Router

O Expo Router usa uma estrutura baseada em arquivos para definir rotas. Cada arquivo em sua pasta `app/` torna-se automaticamente uma rota em seu aplicativo:

```
app/
├── index.js        # Rota raiz "/"
├── profile.js      # Rota "/profile"
├── settings/
│   └── index.js    # Rota "/settings"
│   └── privacy.js  # Rota "/settings/privacy"
```

## Recursos

- [Documentação do Expo Router](https://docs.expo.dev/routing/introduction/)
- [Exemplos oficiais](https://github.com/expo/expo/tree/main/packages/expo-router/example)
- [React Navigation](https://reactnavigation.org/) (biblioteca subjacente ao Expo Router)

## Contribuições

Contribuições são bem-vindas! Se você deseja adicionar mais exemplos ou melhorar o código existente:

1. Faça um fork do repositório
2. Crie uma branch para sua feature
3. Envie um pull request

## Licença

MIT
