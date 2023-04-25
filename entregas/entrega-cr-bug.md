[BUG] A simple user can create a call in a read-only channel
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


[BUG] Same user can react with the same emoji multiple times

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