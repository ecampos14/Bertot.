public class Anime {
        public static void main(String[] args) {
            Anime anime = new Anime();
            
            anime.setGenre(new OtakuGenre());
            anime.assistirAnime();
    
            anime.setGenre(new ShounenGenre());
            anime.assistirAnime();
    
            anime.setGenre(new SliceOfLifeGenre());
            anime.assistirAnime();
        }

        private void setGenre(ShounenGenre shounenGenre) {
        }

        private void setGenre(OtakuGenre otakuGenre) {
        }

        private void assistirAnime() {
        }

        private void setGenre(SliceOfLifeGenre sliceOfLifeGenre) {
        }
    }
    

