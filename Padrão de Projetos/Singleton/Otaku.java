package Singleton;

public class Otaku {
    private static Otaku instancia;

    private Otaku() {
    }

    public static Otaku getInstancia() {
        if (instancia == null) {
            synchronized (Otaku.class) {
                if (instancia == null) {
                    instancia = new Otaku();
                }
            }
        }
        return instancia;
    }
}
