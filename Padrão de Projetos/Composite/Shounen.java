package Composite;

class Shounen implements Anime {
    private String nome;

    public Shounen(String nome) {
        this.nome = nome;
    }

    @Override
    public void assistir() {
        System.out.println("Assistindo anime do gênero Shounen: " + nome);
    }
}

