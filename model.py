# Importing the libraries
import numpy as np
from sklearn.ensemble import RandomForestClassifier
from sklearn import preprocessing
import pandas as pd
import pickle

dataset = pd.read_csv('D:/project/hiring.csv')

#label_encoder= preprocessing.LabelEncoder()
#dataset.iloc[:, -1]= label_encoder.fit_transform(dataset.iloc[:, -1])

X = dataset.iloc[:, :3]
x= X.rename_axis('ID').values

y = dataset.iloc[:, -1]

#Splitting Training and Test Set
#Since we have a very small dataset, we will train our model with all availabe data.

modelx = RandomForestClassifier()

#Fitting model with trainig data
modelx.fit(x, y)

# Saving model to disk
pickle.dump(modelx, open('model.pkl','wb'))

# Loading model to compare the results
model = pickle.load(open('model.pkl','rb'))
print(model.predict([[2, 3, 22]]))