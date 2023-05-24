package Observer;

public class Main {
    public static void main(String[] args) {
        Moderador moderador = new Moderador();

        Assinante assinante1 = new Assinante("João");
        Assinante assinante2 = new Assinante("Maria");

        moderador.adicionarAssinante(assinante1);
        moderador.adicionarAssinante(assinante2);

        moderador.postarMensagem("Novo episódio de One Piece lançado!");

        moderador.removerAssinante(assinante2);

        moderador.postarMensagem("Novo anime da temporada: Tokyo Revengers!");

    }
}
