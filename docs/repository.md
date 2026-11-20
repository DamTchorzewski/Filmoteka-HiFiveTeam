# Repozytorium: opis i tagi

Rzeczy, które ustawia się na GitHubie ręcznie (nie da się ich zapisać w plikach repozytorium). Przegląd projektu: [README](../README.md).

## Opis i tagi (About)

GitHub: strona repozytorium → ⚙ obok „About” → pola poniżej. Opis ma limit 350 znaków, tagi (topics) pisze się małymi literami z myślnikami, najwyżej 20.

**Opis (Description):**

```text
Filmoteka: a film browser by the HiFiveTeam. Trending films and title search with pagination, a details window with the trailer, and a personal library of watched and queued films kept in Local Storage. Vanilla JavaScript, SASS and Parcel 2 on The Movie Database API; a team project of nine people.
```

**Strona (Website):**

```text
https://damtchorzewski.github.io/Filmoteka-HiFiveTeam/
```

**Tagi (Topics):**

```text
movies movie-database tmdb-api javascript sass parcel pagination local-storage responsive-design github-pages github-actions team-project
```

Z GitHub CLI (`gh`) to samo jedną komendą:

```bash
gh repo edit DamTchorzewski/Filmoteka-HiFiveTeam --homepage "https://damtchorzewski.github.io/Filmoteka-HiFiveTeam/" --description "Filmoteka: a film browser by the HiFiveTeam. Trending films and title search with pagination, a details window with the trailer, and a personal library of watched and queued films kept in Local Storage. Vanilla JavaScript, SASS and Parcel 2 on The Movie Database API; a team project of nine people." --add-topic movies --add-topic movie-database --add-topic tmdb-api --add-topic javascript --add-topic sass --add-topic parcel --add-topic pagination --add-topic local-storage --add-topic responsive-design --add-topic github-pages --add-topic github-actions --add-topic team-project
```

## Ustawienia do włączenia

| Gdzie (GitHub)                      | Co ustawić                                              |
| ----------------------------------- | ------------------------------------------------------- |
| Settings → Pages                    | Source: gałąź `gh-pages` (publikuje ją `deploy.yml`)    |
| Settings → General → Default branch | `main` (już jest)                                       |
