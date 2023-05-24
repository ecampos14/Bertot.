import java.util.ArrayList;
import java.util.List;

interface Observer {
    void atualizar(String mensagem);
}
class Moderador {
    private List<Observer> assinantes;
    private String mensagem;

    public Moderador() {
        assinantes = new ArrayList<>();
    }

    public void adicionarAssinante(Observer assinante) {
        assinantes.add(assinante);
    }

    public void removerAssinante(Observer assinante) {
        assinantes.remove(assinante);
    }

    public void notificarAssinantes() {
        for (Observer assinante : assinantes) {
            assinante.atualizar(mensagem);
        }
    }

    public void postarMensagem(String mensagem) {
        this.mensagem = mensagem;
        notificarAssinantes();
    }
}
