interface AnimeGenre {
    void assistir();
}

class Anime {
    private AnimeGenre genre;

    public void setGenre(AnimeGenre genre) {
        this.genre = genre;
    }

    public void assistirAnime() {
        if (genre != null) {
            genre.assistir();
        } else {
            System.out.println("Selecione um gênero de anime primeiro.");
        }
    }
}
