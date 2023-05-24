interface AnimeGenre {
    void assistir();
}

class OtakuGenre implements AnimeGenre {
    @Override
    public void assistir() {
        System.out.println("Assistindo anime do gênero Otaku...");
    }
}

class ShounenGenre implements AnimeGenre {
    @Override
    public void assistir() {
        System.out.println("Assistindo anime do gênero Shounen...");
    }
}

class SliceOfLifeGenre implements AnimeGenre {
    @Override
    public void assistir() {
        System.out.println("Assistindo anime do gênero Slice of Life...");
    }
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
