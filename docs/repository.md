# Repozytorium: opis i tagi

Rzeczy, które ustawia się na GitHubie ręcznie (nie da się ich zapisać w plikach repozytorium). Przegląd projektu: [README](../README.md).

## Nazwa repozytorium: `tmdb-movie-browser`

Standard nazw repozytoriów: `reops/standards/repo-names.md`. Repozytorium nazywało się wcześniej `Filmoteka-HiFiveTeam`; od 2026-11-20 nazywa się `tmdb-movie-browser` (nazwa mówi, czym jest projekt: fraza szukana na GitHubie; nazwa zespołu jest tylko w README). GitHub przekierowuje stary adres repozytorium, ale **adres strony (GitHub Pages) zmienił się** na `https://damtchorzewski.github.io/tmdb-movie-browser/`, a stary przestał działać. Build używa `--public-url /tmdb-movie-browser/` (jest w `package.json`); workflow `deploy.yml` publikuje stronę do gałęzi `gh-pages`.

## Opis i tagi (About)

GitHub: strona repozytorium → ⚙ obok „About” → pola poniżej. Opis ma limit 350 znaków, tagi (topics) pisze się małymi literami z myślnikami, najwyżej 20.

**Opis (Description):**

```text
Movie browser on the TMDb API: search, trailers and watchlists in vanilla JavaScript with Parcel.
```

**Strona (Website):**

```text
https://damtchorzewski.github.io/tmdb-movie-browser/
```

**Tagi (Topics):**

```text
movies tmdb-api movie-database javascript sass parcel pagination local-storage responsive-design github-pages github-actions
```

Z GitHub CLI (`gh`) to samo jedną komendą:

```bash
gh repo edit DamTchorzewski/tmdb-movie-browser --homepage "https://damtchorzewski.github.io/tmdb-movie-browser/" --description "Movie browser on the TMDb API: search, trailers and watchlists in vanilla JavaScript with Parcel." --add-topic movies --add-topic tmdb-api --add-topic movie-database --add-topic javascript --add-topic sass --add-topic parcel --add-topic pagination --add-topic local-storage --add-topic responsive-design --add-topic github-pages --add-topic github-actions --add-topic
```

## Ustawienia do włączenia

| Gdzie (GitHub) | Co ustawić |
| ----------------------------------- | ---------------------------------------------------- |
| Settings → Pages | Source: gałąź `gh-pages` (publikuje ją `deploy.yml`) |
| Settings → General → Default branch | `main` (już jest) |
