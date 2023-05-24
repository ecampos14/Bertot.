package Observer;

public class Assinante implements Observer {
    private String nome;

    public Assinante(String nome) {
        this.nome = nome;
    }

    @Override
    public void atualizar(String mensagem) {
        System.out.println(nome + " recebeu a seguinte mensagem: " + mensagem);
    }
}

