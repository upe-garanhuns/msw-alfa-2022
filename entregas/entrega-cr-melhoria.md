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
 
