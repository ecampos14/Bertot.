Emanuele Cristina da Silva Diniz Campos
1460282123018

## Padrões de Projeto

A seguir, estão alguns padrões de projeto comumente utilizados:

| Padrão de Projeto | Antipadrão | Descrição | Problema Resolvido |
|-------------------|------------|-----------|--------------------|
| Strategy | Switch Statement Hell | O padrão Strategy permite definir uma família de algoritmos, encapsulá-los e torná-los intercambiáveis. Dessa forma, os algoritmos podem variar independentemente dos clientes que os utilizam. | Evita a repetição de estruturas condicionais complexas com múltiplos casos em um switch statement. |
| Observer | Polling ou Callbacks Indiscriminados | O padrão Observer (também conhecido como Publish-Subscribe) permite que objetos observadores sejam notificados automaticamente sobre qualquer mudança de estado em um objeto observável. Isso facilita a comunicação e o acoplamento flexível entre objetos. | Permite uma comunicação assíncrona e desacoplada entre objetos, eliminando a necessidade de poluição de código com chamadas de retorno indiscriminadas ou poluição com lógica de polling. |
| Composite | Manipulação Direta de Objetos Individuais | O padrão Composite permite tratar objetos individuais e composições de objetos de maneira uniforme. Ele cria uma estrutura de árvore hierárquica em que objetos individuais (folhas) e composições de objetos (nós) são tratados de forma transparente. | Permite tratar objetos individuais e grupos de objetos de forma consistente, facilitando a construção de estruturas hierárquicas complexas. |
| Facade | Dificuldade de Utilização de um Subsistema Complexo | O padrão Facade fornece uma interface simplificada para um conjunto de subsistemas mais complexos. Ele oculta a complexidade subjacente e fornece uma única interface de alto nível para facilitar o uso do subsistema. | Fornece uma camada de abstração para simplificar o acesso a um subsistema complexo, evitando que os clientes tenham que lidar diretamente com a complexidade do subsistema. |
| Singleton | Múltiplas Instâncias de um Objeto Desejado | O padrão Singleton garante que uma classe tenha apenas uma única instância e fornece um ponto de acesso global a essa instância. É útil quando se deseja restringir a criação de múltiplas instâncias de uma classe e compartilhar um único objeto em todo o sistema. | Garante que uma única instância de uma classe seja criada e fornece um ponto centralizado para acessar essa instância, evitando a criação de múltiplas instâncias indesejadas e garantindo a coordenação do uso dessa instância única. |

Cada padrão de projeto tem sua própria utilidade e aplicabilidade, e eles podem ajudar a melhorar a estrutura e a flexibilidade do seu código.
