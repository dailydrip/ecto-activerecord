Repo.one(from t in App.Model, where: t.name == ^name, limit: 1)
