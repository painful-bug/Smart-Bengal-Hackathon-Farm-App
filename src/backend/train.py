from __future__ import print_function
import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from sklearn.metrics import classification_report
from sklearn import metrics
from sklearn import tree
import warnings
warnings.filterwarnings('ignore')

df = pd.read_csv('creco.csv')


# print(df.head())

features = df[['N', 'P','K','temperature', 'humidity', 'ph', 'rainfall']]
target = df['label']
labels = df['label']


from sklearn.model_selection import train_test_split
Xtrain, Xtest, Ytrain, Ytest = train_test_split(features,target,test_size = 0.2,random_state =2)

from sklearn.naive_bayes import GaussianNB

NaiveBayes = GaussianNB()

NaiveBayes.fit(Xtrain,Ytrain)

predicted_values = NaiveBayes.predict(Xtest)
x = metrics.accuracy_score(Ytest, predicted_values)
# acc.append(x)
# model.append('Naive Bayes')
print("Naive Bayes's Accuracy is: ", x)

print(classification_report(Ytest,predicted_values))



# # Cross validation score (NaiveBayes)
# score = cross_val_score(NaiveBayes,features,target,cv=5)
# print("Cross validation score is : ",score)
# score




import pickle
# Dump the trained Naive Bayes classifier with Pickle
NB_pkl_filename = 'NBClassifier.pkl'
# Open the file to save as pkl file
NB_Model_pkl = open(NB_pkl_filename, 'wb')
pickle.dump(NaiveBayes, NB_Model_pkl)
# Close the pickle instances
NB_Model_pkl.close()


# plt.figure(figsize=[10,5],dpi = 100)
# plt.title('Accuracy Comparison')
# plt.xlabel('Accuracy')
# plt.ylabel('Algorithm')
# sns.barplot(x = acc,y = model,palette='dark')



# accuracy_models = dict(zip(model, acc))
# for k, v in accuracy_models.items():
#     print (k, '-->', v)

