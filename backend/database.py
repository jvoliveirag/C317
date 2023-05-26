import random
import pymongo


class Database:
    def __init__(self, database, collection, dataset=None):
        connectionString = "mongodb+srv://adm:adm@clusterpickme.2odlu2p.mongodb.net/?retryWrites=true&w=majority"
        self.clusterConnection = pymongo.MongoClient(
            connectionString,
            # CASO OCORRA O ERRO [SSL_INVALID_CERTIFICATE]
            tlsAllowInvalidCertificates=True
        )
        self.db = self.clusterConnection[database]
        self.collection = self.db[collection]
        if dataset:
            self.dataset = dataset

    def resetDatabase(self):
        self.db.drop_collection(self.collection)
        self.collection.insert_many(self.dataset)

    def read(self, idade, genre_fav, movie_or_series, genre_to_watch, time_to_spend, platforms):
        if idade < 18:
            adult = [False]
        else:
            adult = [True, False]

        genre = [genre_fav, genre_to_watch]
        qryRet = self.collection.find({'adult': {'$in': adult},
                                     'listed_in': {'$in': genre},
                                     'type': {'$in':movie_or_series},
                                     'duration': {'$lte': time_to_spend},
                                     'plataform': {'$in': platforms}})
        listaQry = list(qryRet)
        if len(listaQry) > 0:
            return random.choice(listaQry)
        return False

    def update(self, id_forced, listed_in):
        return self.collection.update_one(
            {"id_forced": id_forced},
            {
                "$set": {"listed_in": listed_in},
            }
        )

    def delete(self, id_forced):
        return self.collection.delete_one({"id_forced": id_forced})