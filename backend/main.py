from database import Database

if __name__ == "__main__":
    db = Database("Filmes", "Busca")

    #database.update("Rio", ['Animation', 'Adventure', 'Comedy', 'Family', 'Music', 'Musical'])

    #aux = database.collection.find_one({"id_forced": "PMD30"})

    #aux = database.read(18, 'Adventure', ['Movie'], 'Comedy', 100, ['Netflix', 'HBO', 'Disney+'])

    #writeAJson(aux, "retornoTeste")



    db.collection.update({"plataform": 'Netflix'}, {"$set": {"plataform": 'Natflix'}})
