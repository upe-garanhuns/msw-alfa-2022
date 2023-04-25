[FEATURE]Detect OS and provide the keyboard shortcut's description accordingly

## Seção 1:
![image](https://user-images.githubusercontent.com/55411281/224193496-d5034908-ec96-49ed-a0dd-1e80c3cc90ac.png)

Link: https://github.com/RocketChat/Rocket.Chat/issues/8505



### Análise de Impacto:
- Apresentem os artefatos envolvidos e suas localizações: 

  - Adicionar aquivo na pasta client/views/room/contextualBar/hooks/
  - modificar dicionarios na pasta packages/rocketchat-i18n/i18n

- Comente como será implementada a CR e os efeitos causados pela sua implementação:

    - Adicionar novo hook na pasta client/views/room/contextualBar/hooks/ para identificar o sistema operacional do usuário
    - Modificar os dicionários na pasta packages/rocketchat-i18n/i18n para adicionar diferentes textos para os diferentes sistemas operacionais. Fazer o mesmo para mais de uma linguagem.
    - Modificar o arquivo client/views/room/contextualBar/KeyboardShortcuts/KeyboardShortcuts.js para receber o sistema operacional e decidir com base nisso o texto correto do dicionário

- Discutam a complexidade de implementação:
  -  Considerando as complexidades Baixa, Média e Alta, esse problema apresenta Baixa complexidade, por envolver poucos arquivos sendo mais um trabalho braçal por ter muitas linguagem diferentes

- Discutam o esforço de implementação:

   - Criação do Hook - 2h 
   - Modificação dos dicionários - 2h
   - Testes - 2h
   - Ajustes - 1 h
  - Total: 7h

- Apontam os riscos e as ações de mitigação:
  - Analise inicial estar errada, colocando uma complexidade muito baixa, para mitigar, na execução da solução será realizado uma modificação pontual para validar a analise
  - Não possuir um sistema IOS para testar os comandos para mac, para mitigar este problema entraremos em contato com usuários de mac para poder realizar os testes do sistema.
 
# CR: O mesmo usuário pode reagir com o mesmo emoji várias vezes


Link da CR: [Same user can react with the same emoji multiple times](https://github.com/upe-garanhuns/msw-alfa-2022/issues/7)
Link da CR Original: [RocketChat#6985](https://github.com/RocketChat/Rocket.Chat/issues/6985)

  * **Esforço total estimado para implementação**:
     * 10h
  * **Tempo total para implementação**:
     * 6h
  * **Lista de artefatos para alteração estimados pela análise:**
    *  Nova Migration na pasta apps/meteor/server/startup/migrations usando o script apps/meteor/.scripts/make-migration.ts
    * Modificação de propriedades no Arquivo setReaction
    * Criação de nova Migration para modificar a entidade message adicionando uma propriedade dos ids dos usuários que reagiram.
    * Modificar a interface/type "IMesage", na propriedade reactions para incluir novo campo com IDs dos usuários.
    * Modificar a propriedade "userAlreadyReacted" dos arquivos setReaction, para validar os IDs ao invés do userName.
    * Adicionar nos arquivos setReaction o userId após uma reação para ser usada nas validações futuras.
  * **Lista de artefatos alterados pela implementação:**
    * apps/meteor/app/reactions/client/methods/**setReaction.js**
    * apps/meteor/app/reactions/server/**setReaction.js**
    * apps/meteor/client/components/message/content/**Reactions.tsx**
    * apps/meteor/client/views/room/MessageList/providers/**MessageListProvider.tsx**
    * packages/core-typings/src/IMessage/I**Message.ts**
  * **Screenshot antes da implementação:** 
    * O comportamento atual do problema pode ser sintetizado em um bug relacionado às reações que o usuário pode submeter às mensagens. Ao reagir uma mensagem e, por ventura, o usuário chegar a mudar o seu Username (que é o seu nome de usuário), é possível reagir novamente a mesma mensagem, como se não o tivesse feito antes. Isso dá uma ideia de que o usuário criou um novo perfil, o que não é verdade, mas sim mudou uma instância do seu perfil. Então tal comportamento não é adequado.
    * ![image](https://user-images.githubusercontent.com/92036392/234154731-f60122ec-d5f9-46ee-8433-7f5614bff533.png)
    * ![image](https://user-images.githubusercontent.com/92036392/234154829-b922314a-e7b7-49b0-a7b7-699194069e94.png)
  * **Screenshot depois da implementação:** 
    * O comportamento que se espera ser atingido conta nos seguintes passos. Ao reagir uma mensagem, fica registrado no histórico de reações da mesma o nome do usuário que a curtiu e mesmo ao atualizar o seu userName para um antigo ou novo, ao verificar novamente o histórico de reações, a mesma constará uma reação já realizada, não permitindo assim que o usuário reaja novamente da mesma forma.
    * ![image](https://user-images.githubusercontent.com/92036392/234155114-6c3a6780-2f3a-49b9-9f33-20e8227f9242.png)
    *  ![image](https://user-images.githubusercontent.com/92036392/234154994-d4ea67ab-ef32-45d1-add9-5a713a1e3389.png)
  * **Passos para reproduzir e validar:**
    1. Reagir a uma mensagem
    2. Verificar o nome assinado ao usuário que reagiu a mensagem
    3. Mudar o nome do seu usuário
    4. Voltar ao chat onde houve a última reação
    5. Verificar o nome assinado ao usuário que reagiu a mensagem
    6. Reagir a imagem
    
    
# CR: Detect OS and provide the keyboard shortcut's description accordingly


Link da CR: https://github.com/upe-garanhuns/msw-alfa-2022/issues/6
Link da CR Original: https://github.com/RocketChat/Rocket.Chat/issues/8505

  * **Esforço total estimado para implementação**:
     * 7h
  * **Tempo total para implementação**:
     * 6h
  * **Lista de artefatos para alteração estimados pela análise:**
    * Adicionar novo hook na pasta client/views/room/contextualBar/hooks/ para identificar o sistema operacional do usuário
    * Modificar os dicionários na pasta packages/rocketchat-i18n/i18n para adicionar diferentes textos para os diferentes sistemas operacionais. Fazer o mesmo para mais de uma linguagem.
    * Modificar o arquivo client/views/room/contextualBar/KeyboardShortcuts/KeyboardShortcuts.js para receber o sistema operacional e decidir com base nisso o texto correto do dicionário.
 
  * **Lista de artefatos alterados pela implementação:**
    * client/views/room/contextualBar/hooks/**useOSInfo.js**
    * packages/rocketchat-i18n/i18n**pt-BR.i18n.json**
    * packages/rocketchat-i18n/i18n**en.i18n.json**
    * client/views/room/contextualBar/KeyboardShortcuts/**KeyboardShortcuts.tsx**
  
  * **Screenshot antes da implementação:** 
    * O comportamento atual da CR escolhida pode ser sintetizado em um problema ao iniciar a aplicação, pois a mesma não tem por padrão um identificador de onde o sistema está sendo utilizado, se por um sistema IOS, Windows, Linux e, ou derivados. Sendo assim, atalhos presentes na aplicação limitam-se a utilização do botão “command” presente nos MacBooks, o que impossibilita ou dificulta a utilização desses atalhos em outros sistemas operacionais.
    * ![image](https://user-images.githubusercontent.com/55411281/234161166-fe13f8de-61bd-486e-a914-2fcfd429643c.png)

  * **Screenshot depois da implementação:** 
    * O comportamento que se espera ser atingido conta nos seguintes passos. Ao iniciar a aplicação, deve ser possível identificar qual o sistema operacional está sendo utilizado, ao o fazer, adaptar os comandos presentes na aplicação baseado no sistema. Tornando assim os comandos utilizáveis em qualquer ambiente.
    * ![image](https://user-images.githubusercontent.com/55411281/234161125-19d35e93-e057-4d27-b01b-f4355af01312.png)

  * **Passos para reproduzir e validar:**
    1. Entrar em um canal 
    2. Ir no ícone representado pelos três pontos  
    3. Clicar em atalhos de teclado 
    4. Verificar se os comandos apresentados são referentes ao sistema operacional utilizado pelo usuário



