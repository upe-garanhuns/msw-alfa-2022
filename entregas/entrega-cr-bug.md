# [BUG] A simple user can create a call in a read-only channel
## CR Original:
![image](https://user-images.githubusercontent.com/55411281/224194465-25b570ca-f86d-486f-80e0-98fe412b8590.png)
![image](https://user-images.githubusercontent.com/55411281/224194535-f801fc55-1585-4114-84f7-4eeb1c699b7f.png)


Link: https://github.com/RocketChat/Rocket.Chat/issues/27871


### Análise de Impacto:
- Apresentem os artefatos envolvidos e suas localizações: 
Por existir a possibilidade de duas interpretações a solução foi dividida em 2 níveis

  - Nível 1 (Não é possível fazer chamada no canal ReadOnly) :
    - Adicionar verificação de propriedade no arquivo tabBar.txs
 
  - Nível 2 (Apenas usuários com permissão PostReadOnly podem fazer chamada):
    - Adicionar verificação de permissão do usuário no arquivo tabBar.txs

- Comente como será implementada a CR e os efeitos causados pela sua implementação:
Por existir a possibilidade de duas interpretações a solução foi dividida em 2 níveis

  - Nível 1 (Não é possível fazer chamada no canal ReadOnly) :
    - Adicionar verificação de propriedade da sala quando for inserir as funções existentes para checar se a sala é ReadOnly no arquivo tabBar.txs
 
  - Nível 2 (Apenas usuários com permissão PostReadOnly podem fazer chamada):
    - Adicionar verificação de permissão do usuário para checar se o usuário tem a permissão para realizar a chamada na sala ReadOnly no arquivo tabBar.txs

- Discutam a complexidade de implementação:
  -  Considerando as complexidades Baixa, Média e Alta, esse problema apresenta Baixa complexidade na resolução de Nível 1 por somente ser necessário usar uma variável já existente para verificar se a sala é ReadOnly.  Já no Nível 2 a complexidade existente é Média pois não é preciso importar o script de verificação de permissões e realizar ajustes. 

- Discutam o esforço de implementação:
  - Nível 1 Solução: 30min
  - Nível 1 Testes: 30min
  - Total Nível 1: 1h
  - Nível 2 Solução: 3h
  - Nível 2 Testes: 1h
  - Total Nível 2: 4h

- Apontam os riscos e as ações de mitigação:
  - Possibilidade de a função de verificar permissões não ter comportamento esperado, não sendo possível a realização em tempo hábil da solução de nível 2. Para mitigar tal risco a solução foi separada em dois níveis.

### Implementação da mudança 

- Descrição
O Bug identificado por usuários da comunidade esta relacionado com uma ambiguidade no canal de somente escrita. Ao criar esse tipo de canal, o usuário deveria ser capaz apenas de escrever e receber mensagens, coisa que não acontece, devido a permanência da possibilidade de executar ligações.

- Link : CR Original

- Horas estimadas x horas reais
  Estimado: 30m
  Real: 30m

Para esta CR após uma longa analise foi definido um tempo estimado de 30 minutos e esse tempo se cumpriu, sendo também suficiente para a realização dos testes.

- Artefatos para alteração estimados x Artefatos alterados
  estimado: tabBar.txs
  alterado: tabBar.txs

Para esta CR foi identificado um único arquivo para modificação e esta estimativa se mostrou verdadeira, após alguns testes foi identificado que o sistema mostrou o comportamento esperado apenas mudando neste único local.

- Sistema antes:
![image](https://user-images.githubusercontent.com/71401796/234149555-d9925e79-0a32-45b4-abc3-3507d15b6dcd.png)

- Sistema após a atualização:
![image](https://user-images.githubusercontent.com/71401796/234150466-409a1b5e-f1ba-4e10-9ec4-52af206ce6c0.png)

- Passos para reproduzir e validar
  Criar dois canais: um de apenas leitura e outro normal
  Verificar se no canal normal esta presente a opção de chamada
  Verificar se no canal de apenas leitura não esta presente a opção de chamada



# [BUG] Same user can react with the same emoji multiple times

## CR Original:
![image](https://user-images.githubusercontent.com/55411281/224191441-73d0e182-26f0-4c64-b57a-a60d1531638c.png)

Link: https://github.com/RocketChat/Rocket.Chat/issues/6985 

### Análise de Impacto:
- Apresentem os artefatos envolvidos e suas localizações: 
  - Nova Migration na pasta apps/meteor/server/startup/migrations usando o script apps/meteor/.scripts/make-migration.ts 
  - Modificação de propriedades no Arquivo setReaction

- Comente como será implementada a CR e os efeitos causados pela sua
implementação:

  - Criação de nova Migration para modificar a entidade message adicionando uma propriedade dos ids dos usuários que reagiram.
  -  Modificar a interface/type "IMesage", na propriedade reactions para incluir novo campo com IDs dos usuários.
  - Modificar a propriedade "userAlreadyReacted" dos arquivos setReaction, para validar os IDs ao invés do userName.
  - Adicionar nos arquivos setReaction o userId após uma reação para ser usada nas validações futuras.

- Discutam a complexidade de implementação:
  -  Considerando as complexidades Baixa, Média e Alta, esse problema apresenta Média complexidade, por envolver várias mudanças em diversos arquivos e não estar claro como a migration se comporta. 

- Discutam o esforço de implementação:

  - Bug Reação Duplicada - 3h 
  - Teste de Reação Duplicada - 1h
  - Ajustes - 1h
  - Bug de Exibição do UserName antigo - 3h
  - Testes de Exibição do UserName antigo - 1h
  - Ajustes - 1h
  - Total: 10h

- Apontam os riscos e as ações de mitigação:
  - Não compreensão completa do funcionamento da migration pode aumentar ou diminuir o esforço estimado. Para mitigar, o responsável pela CR fará uma análise mais cuidadosa e foi estimado um tempo extra de esforço.
  - Problema em relação a parte dos Testes unitários pode aumentar o esforço estimado. Para mitigar, foi verificado como desabilitar o script "pre-push"

### Implementação da mudança

# CR: O mesmo usuário pode reagir com o mesmo emoji várias vezes

O comportamento que se espera ser atingido conta nos seguintes passos. Ao reagir uma mensagem, fica registrado no histórico de reações da mesma o nome do usuário que a curtiu e mesmo ao atualizar o seu userName para um antigo ou novo, ao verificar novamente o histórico de reações, a mesma constará uma reação já realizada, não permitindo assim que o usuário reaja novamente da mesma forma.

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

# [FEATURE] Detect OS and provide the keyboard shortcut's description accordingly
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
