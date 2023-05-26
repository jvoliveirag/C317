import json
import os
from bson import json_util


def writeAJson(data, name: str):
    parsed_json = json.loads(json_util.dumps(data))

    if not os.path.isdir("./jsons"):
        os.makedirs("./jsons")

    with open(f"./jsons/{name}.jsons", 'w') as json_file:
        json.dump(parsed_json, json_file,
                  indent=4,
                  separators=(',', ': '))