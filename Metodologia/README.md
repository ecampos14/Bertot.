# Emanuele Cristina da Silva Diniz Campos

## Introdução

Olá, seja bem-vindo. Sou a Emanuele, estudante de Banco de Dados pela FATEC Prof. Jessen Vidal. 

Tenho 22 anos e trabalho como Estagiario em QA. <br/>

### Meus principais conhecimentos

#### Java

Minha atuação como desenvolvedor nas api tem como a principal stack a linguagem Java, Trabalho desenvolvendo API's e serviços com o auxílio do framework Spring Boot e também do framework ORM Hibernate. Por conta desta experiência. Trabalho utilizando automatização de teste em Java e seu ecossistema para desenvolvimento web é onde possuo maior domínio e conhecimento. 


# Projeto 3 - 2º semestre de 2022
## Empresa parceira:
IACIT

<img src="https://user-images.githubusercontent.com/54003876/142727570-6c418f49-5e00-437c-9d9e-5b27131974bb.png" height="300"/>

##### *Figura 06. IACIT (Fonte: https://www.iacit.com.br/)*

Um importante polo da indústria aeroespacial brasileira, fundada em 1986, a IACIT é uma empresa brasileira com sede em São José dos Campos - SP. Com capacitação no desenvolvimento de produtos e sistemas aplicados  para o segmento de navegação aérea, com certificação como Empresa Estratégica de Defesa (EED).

## Visão do Projeto

Foi desenvolvido um software web para a empresa Iacit que possibilita a automatização desde o download, o processamento dos dados e a persistência dos dados no banco de dados de forma simplificada dos dados meteorológicos. Além disso, também será possível realizar a filtragem desses dados por temperatura, umidade, estações, vento, pressão atmosférica, radiação global e precipitação, além da diversa visualizações desses dados. Contudo, fpi desenvolvido tambem níveis de usuários juntamente com o painel administrativo possibilitando a exportação dos relatórios a partir dos dados.

#
  
  <p align="center">
      <img src="https://github.com/fluffyfatec/Iacit/blob/Sprint-2/GIT/VID-20221009-WA0013%20(2).gif" width="100%" height="100%">
<p align="center">                                                                                                                                     
                                                                                                                                        
##### *Figura 01. Fluffy (Fonte: https://github.com/fluffyfatec/Iacit)*


## Tecnologias Utilizadas
<details>
<summary>Front-End</summary>

* [JavaScript](https://www.javascript.com)
* [HTML](https://www.w3schools.com/css/)
* [CSS](https://www.w3schools.com/css/)
 

</details>

<details>
<summary>Back-End</summary>

* [Java](https://www.java.com/pt-BR/?msclkid=7faa842eb8f811ecab39772d4c1ae90b)
 
* [Python](https://www.python.org/downloads/)

* [Spring boot](https://spring.io/projects/spring-boot)

</details>

<details>
<summary>Banco de Dados</summary>

* [PostgreSQL](https://www.postgresql.org/download/)
</details>
<details>
<summary>Reuniões e Comunicação</summary>

* [Discord](https://discord.com/?msclkid=b4f5af84b8f811ecbd81c127a0ae68a7)

* [Whatsapp](https://www.whatsapp.com/)

* [Slack](https://slack.com/intl/pt-br/?msclkid=c00e628eb8f811ecaef374bb86d7f056)
</details>

<details>
<summary>Outras Ferramentas</summary>

* [Github](https://github.com/)

* [Eclipse IDE](https://www.eclipse.org/downloads/)

* [IntelliJ IDE](https://www.jetbrains.com/idea/promo/?msclkid=6ae44e88c2811d86c0ae2cdbd94ffcfb&utm_source=bing&utm_medium=cpc&utm_campaign=AMER_en_BR_IDEA_Branded&utm_term=intellij&utm_content=intellij%20idea)

* [Azure DevOps](https://dev.azure.com/iacitAPI/iacitAPI/)

* [Photoshop](https://www.adobe.com/br/products/photoshop.html?sdid=KQPOM&mv=search&ef_id=d67181c6b224183a4875e395ae54f4bf:G:s&s_kwcid=AL!3085!10!79302406606568!79302288716688&msclkid=d67181c6b224183a4875e395ae54f4bf)
</details>



Neste projeto houve a utilização dos serviços do Spring como API do back-end.  foi utilizado em sua construção, no front-end a linguagem Javascript, juntamente com o Ajax.
Assim foram programadas todas as rotas HTTP, conexão com o banco de dados e manutenção do banco para alterações, por meio de migrations.
A base de dados utilizada foi mantida, utilizando o PostgreSQL.



## Contribuições pessoais
Desenvolvimento de features e estruturas do backend da ferramenta. O sistema foi construído em Java, com Spring. No desenvolvimento deste projeto, diversos desafios foram enfrentados e realizados pelo time do backend. 
  
 <details>
<summary>Registro e consultas dos dados</summary>
  No Java com Spring, uso o Spring Data JPA para registrar e consultar dados. Ele oferece interfaces de repositório que estendem JpaRepository, proporcionando métodos prontos para operações de dados. <hr>
 <pre><code> @Repository
public interface EstacaoRepository extends JpaRepository<EstacaoModal, String> {
	@Query("SELECT u FROM estacao u WHERE u.codWmo = :codWmo")
	public List<EstacaoModal> listar(@Param("codWmo") String codWmo);
  
	@Query(value = "SELECT * FROM estacao", nativeQuery = true)
	
	List<EstacaoModal> listarAllEstacoes();
	EstacaoModal findByEstacaoNome(String estacaoNome); 
 }
</code></pre>
<body>
  <h5>A interface "EstacaoRepository" é uma extensão da classe "JpaRepository" que fornece métodos para operações básicas de persistência de dados. Ela possui consultas personalizadas usando a anotação "@Query" do Spring Data JPA para selecionar instâncias da entidade "estacao" com base em critérios específicos, como o valor do atributo "codWmo" e o nome da estação. Além disso, há um método para listar todas as estações na tabela "estacao" usando uma consulta SQL nativa. No geral, essa interface facilita o acesso e a manipulação de dados relacionados às estações.</h5>
</body>

 </details>
  
 <details>
<summary>Atualização de registros complexos como o Usuario</summary>
  Para atualizar registros complexos, como um usuario, mapeio-os como entidades JPA e uso o Spring Data JPA para atualizá-los. Recupero a entidade, faço as modificações necessárias e salvo as alterações com o método save().
  <pre><code>
  public ModelAndView execute(UsuarioRequestDTO data) {
    ModelAndView modelAndView = new ModelAndView();
    UsuarioModal userAdmin = usuarioRepository.findByUsuarioUsername(data.getUsuario_nome_adm());   
    PermissaoModal permissao = permissaoRepository.findByPermissaoNome(data.getNome_permissao());
    UsuarioModal user = usuarioRepository.findByUsuarioUsername(data.getUsuario_username());
    BCryptPasswordEncoder encode = new BCryptPasswordEncoder();

    String senhaEncriptografada = encode.encode(data.getUsuario_senha());

    user.setCodPermissao(permissao);
    user.setUsuarioCadastrante(userAdmin);
    user.setUsuarioNome(data.getUsuario_nome());
    user.setUsuarioSenha(senhaEncriptografada);
    user.setUsuarioUsername(data.getUsuario_username());
    user.setUsuarioAlterou(userAdmin);

    user = usuarioRepository.save(user); 

    modelAndView.addObject("user", user);
    modelAndView.setViewName("HfefCadUsuario");
    return modelAndView;
}
</code></pre>
<body>
  <h5>Este código trata de uma operação de atualização de usuário no sistema. Ele recebe um objeto `UsuarioRequestDTO` contendo os dados atualizados do usuário e utiliza os repositórios para buscar os objetos relacionados. A senha é criptografada, as propriedades do usuário são atualizadas com os dados do DTO e o objeto `user` é salvo novamente no repositório. Em seguida, um objeto `ModelAndView` é configurado com o usuário atualizado e retornado para a view "HfefCadUsuario", indicando que a atualização foi realizada com sucesso.</h5>
</body>
 </details>  
   
 <details>
<summary>Disponibilização de documentos em diferentes formatos de grafico na nossa ferramenta</summary>
  Utilizo bibliotecas Java, como Chart.js, para gerar gráficos em diversos formatos. Integrando esses gráficos à ferramenta, os disponibilizo aos usuários.
  <pre><code>   
const ctx1 = document.getElementById('graficoUmidade1').getContext('2d');
const myChart1 = new Chart(ctx1, {
type: 'line',            
data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
        ],
        </code></pre>
<body>
  <h5>Este código utiliza a biblioteca Chart.js para criar um gráfico de linha em um elemento de um documento HTML. O gráfico exibe dados de um conjunto de votos representados por rótulos e valores. Cada rótulo representa uma categoria e cada valor representa a quantidade de votos correspondente. A cor de fundo das barras do gráfico é definida usando a propriedade `backgroundColor`. Essa configuração permite visualizar os dados de forma mais intuitiva, identificando diferentes categorias por meio das cores. No exemplo fornecido, são exibidas seis categorias com suas respectivas quantidades de votos.</h5>
</body>
 </details>
 <details>
 <summary>Disponibilização de relatorio em todas as telas da aplicação</summary>
  Com Thymeleaf, JSP ou bibliotecas de geração de relatórios, como JasperReports ou Apache POI, crio relatórios em PDF, Excel, CSV, entre outros. Esses relatórios são acessíveis por links ou botões nas telas da aplicação.
<pre><code>
    public static ByteArrayInputStream exportarPdfPrecipitacao (List<ViewPrecipitacaoModal> viewPrecipitacaoModals) throws IOException {

        //Criando o documento PDF
        Document document = new Document(PageSize.A4.rotate(), 25, 25, 25, 25);
        ByteArrayOutputStream out = new ByteArrayOutputStream();

        try {

            //Criando a tabela para o relatório
            PdfPTable table = new PdfPTable(2);
            table.setWidthPercentage(100);
            table.setWidths(new int[] { 4, 4});

            //Criando o cabeçalho da tabela
            Font headFont = FontFactory.getFont(FontFactory.HELVETICA_BOLD, 14, BaseColor.WHITE);

            PdfPCell hcell;
 </code></pre>
 
<body>
  <h5>Neste código, é criado um documento PDF usando a biblioteca iText para Java. O documento é configurado com o tamanho da página A4 no formato paisagem (rotacionado) e são definidas as margens. Em seguida, é criada uma tabela para o relatório usando a classe `PdfPTable`, com duas colunas. O cabeçalho da tabela é definido com a fonte `HELVETICA_BOLD` e tamanho 14. Um objeto `PdfPCell` é criado para armazenar cada célula da tabela.</h5>
</body>

 </details>
   
 <details>
 <summary>Criação e recuperação de logs e atualização dos registros de usuários e atas</summary>
  Uso bibliotecas de logging, como Log4j ou SLF4J, para criar logs com informações relevantes. Com o Spring Data JPA, recupero registros, faço atualizações e salvo as       alterações nos dados do usuário e atas.
<pre><code>
@Service
public class LogService {

	    @Autowired 
	    LogRepository logrep;

	    public ModelAndView listar(LogUsuarioDTO logusuario) {
	    	ModelAndView  moden= new ModelAndView();
	    	LogUsuarioModal logAtiva = logrep.findByLogCodUsuario(logusuario.getLogCodUsuario());
	 
	        moden.addObject("estacaoAtiva", logAtiva);
	 		moden.setViewName("UsuarioUpEst");
	 		
	 		return moden;
	    }
</code></pre>

<body>
  <h5>Esta classe `LogService` é um serviço Spring responsável por lidar com operações relacionadas a logs de usuários. No método `listar`, é injetado o repositório `LogRepository` por meio da anotação `@Autowired` para buscar informações do log do usuário. Em seguida, é criado um objeto `ModelAndView` para retornar os dados do log de usuário para a view "UsuarioUpEst". O objeto `logAtiva` é obtido do repositório com base no código do usuário fornecido no DTO `logusuario`. Esse objeto é adicionado ao `ModelAndView` e, em seguida, retornado para a view.</h5>
</body>
</details>
   
   
Atuei em praticamente todas estas frentes, criando diferentes rotas e serviços para a implementação de várias features do sistema. Minhas principais contruibuições foram nas consultas dos dados e disponibilização de documentos em diferentes formatos de grafico na nossa ferramenta.

## Aprendizados Efetivos HS
- Desenvolvimento de serviços CRUD: Sei fazer com autonomia; <br/>
- Desenvolvimento de ApiRest utilizando SpringBoot: Sei fazer com autonomia; <br/>
- Desenvolvimento de graficos para aplicação usando Chart.js: Sei fazer com autonomia; <br/>
- Utilização de ORM's com banco relacional: Sei fazer com autonomia; <br/>


## Contatos:

- [LinkedIn;](https://www.linkedin.com/in/emanuele-diniz-campos-b14699181/)
- [GitHub.](https://github.com/ecampos14) 
