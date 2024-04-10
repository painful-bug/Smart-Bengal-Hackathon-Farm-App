from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import uvicorn
from ast import literal_eval
import numpy as np
import pickle
import sklearn
import warnings
warnings.filterwarnings('ignore')

model = pickle.load(open('./models/NBClassifier.pkl', 'rb'))

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


@app.post("/predict")
async def get_prediction(q: str | None = None):
    contents = q
    list_of_features_str = q.split(",")
    list_of_features_int = []
    for i in list_of_features_str:
        integer_i = literal_eval(i)
        list_of_features_int.append(integer_i)
    
    data = np.array([list_of_features_int])
    prediction = model.predict(data)
    return prediction[0]

uvicorn.run(app=app, port=8000)
