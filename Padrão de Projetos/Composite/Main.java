package Composite;

public class Main {
    public static void main(String[] args) {
        Anime anime1 = new Otaku("Demon Slayer");
        Anime anime2 = new Otaku("Attack on Titan");
        Anime anime3 = new Shounen("Naruto");

        Anime animeComposto = new Anime();
        animeComposto.adicionarAnime(anime1);
        animeComposto.adicionarAnime(anime2);
        animeComposto.adicionarAnime(anime3);

        animeComposto.assistir();
    }
}
