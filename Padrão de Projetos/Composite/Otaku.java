package Composite;

class Otaku implements Anime {
    private String nome;

    public Otaku(String nome) {
        this.nome = nome;
    }

    @Override
    public void assistir() {
        System.out.println("Assistindo anime do gênero Otaku: " + nome);
    }
}

