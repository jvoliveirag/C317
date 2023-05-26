import json
import random
from bson import json_util
from database import Database

GET_PATH = "/pickMeGet"
POST_PATH = "/pickMePost"

print("Conecting to DB")
dbPick = Database("Filmes", "Busca")
print("Conected")


def lambda_handler(event, context):
    print(event)

    if event['rawPath'] == GET_PATH:
        print("Start Request GET")
        dbId = event['queryStringParameters']['dbId']
        requestDb = dbPick.collection.find_one({"id_forced": str(dbId)})
        requestDbJson = json.loads(json_util.dumps(requestDb))
        print(json.dumps(requestDbJson))
        if requestDb:
            print("Enviado com sucesso!")
            return {
                'statusCode': 200,
                'body': json.dumps(requestDbJson)
            }
        return {
            'statusCode': 404,
            'body': json.dumps("Tente um codigo valido")
        }

    elif event['rawPath'] == POST_PATH:

        print("Start Request POST")
        decodedBody = json.loads(event['body'])
        print("Body =>", decodedBody)
        age = decodedBody['age']
        genre_fav = decodedBody['genre_fav']
        movie_or_series = decodedBody['movie_or_series']
        genre_to_watch = decodedBody['genre_to_watch']
        time_to_spend = decodedBody['time_to_spend']
        platforms = decodedBody['platforms']

        requestDb = dbPick.read(age, genre_fav, movie_or_series, genre_to_watch, time_to_spend, platforms)
        if requestDb:
            requestDbJson = json.loads(json_util.dumps(requestDb))
            return {
                'statusCode': 200,
                'body': json.dumps(requestDbJson)
            }
        return {
            'statusCode': 404,
            'body': json.dumps("Nenhum filme encontrado")
        }
