---
title: "Predicting Titanic Survivors: My First Machine Learning Model"
summary: "Learn how to build a machine learning model to predict Titanic survivors based on the Kaggle dataset."
date: 2018-08-14T16:00:00-07:00
math: true
---

I've been taking the [Machine Learning course by Dr. Andrew Ng](https://www.coursera.org/learn/machine-learning) online through Coursera, and so far it's been an enlightening and enjoyable experience. While I've been taking lots of notes on the equations and implementation details on linear and logistic regression models, I thought it would be a fun weekend exercise to implement these algorithms from scratch using my favorite toolkit: Python, Pandas, and Numpy.

Special thanks to Dr. Ng and his course staff for preparing such high-quality course material. Many of these equations and explanations are based on notes from the course lectures, and I have paraphrased many of the explanations here in my own words as best as possible.

## The Dataset

The dataset I decided to work with for this project was the was the [Kaggle Titanic dataset](https://www.kaggle.com/c/titanic), which was recommended as a beginner dataset to work with.

![Titanic Dataset Data](titanic-training.png)

<center>
  <em>
    <strong>Figure 1:</strong> Structure of the dataset
  </em>
</center>

Based on the `train.csv` file included in the dataset download, it was clear that this was a binary classification problem. Since I only know how to implement linear and logistic regression models so far, I decided to use logistic regression for this problem.

## Project Structure

For reference, my project directory was structured like this:

```text
.
├── Makefile
├── data
│   ├── gender_submission.csv
│   ├── test.csv
│   └── train.csv
└── src
    └── Titanic.ipynb
```

The `Makefile` in the main directory has a fake target to make launching `jupyter lab` easier.

## Preparing the Data

I first needed to clean the data before I could use it. In order to do that, I first brought the data into a pandas `DataFrame`:

```python
import pandas as pd
df = pd.read_csv("../data/train.csv")
```

Then, I dropped the columns that I couldn't convert into numbers:

```python
df = df.drop(columns=['Name', 'PassengerId', 'Ticket', 'Cabin'])
```

**Note:** Having fewer features means the model was less accurate than it could be. Some clever feature engineering would have made use of these columns somehow, but as I was a beginner, I didn't really know what to do with these features other than throw them out.

Next, I converted all of the textual features into numerical values roughly within the range $(-1, 1)$:

```python
def sex_to_numerical(s):
    return int(g == "female")
def embarkation_to_numerical(e):
    if (e == "C"):
        return -1
    elif (e == "Q"):
        return 0
    else:
        return 1
df.Sex = df.Sex.apply(sex_to_numerical)
df.Embarked = df.Embarked.apply(embarkation_to_numerical)
```

I then normalized the data using a simple approach: $(\text{value} - \text{max})/\text{range}$
where $\text{range} = \text{max} - \text{min}$.

```python
def normalize_ticket_class(cl):
    return (cl - 3) / 2
def normalize_fare(farecol):
    range_f = farecol.max() - farecol.min()
    max_f = farecol.max()
    return farecol.apply(lambda fare: (fare - max_f)/range_f)
df.Fare = normalize_fare(df.Fare)
df.Pclass = df.Pclass.apply(normalize_ticket_class)
```

I needed to convert all missing/`NaN` values in the `Age` column to numbers so that I didn't need to throw that feature out:

```python
def de_nan_age(a):
    if (np.isnan(a)):
        return 0.0
    else:
        return a
df.Age = df.Age.apply(de_nan_age)
```

After all this processing, the `DataFrame` looks like this:

| Index | Survived | Pclass | Sex | Age  | SibSp | Parch | Fare                | Embarked |
| ----- | -------- | ------ | --- | ---- | ----- | ----- | ------------------- | -------- |
| 0     | 0        | 0.0    | 0   | 22.0 | 1     | 0     | -0.985848942437792  | 1        |
| 1     | 1        | -1.0   | 1   | 38.0 | 1     | 0     | -0.8608642646173593 | -1       |
| 2     | 1        | 0.0    | 1   | 26.0 | 0     | 0     | -0.9845314301820002 | 1        |
| 3     | 1        | -1.0   | 1   | 35.0 | 1     | 0     | -0.8963557025443796 | 1        |
| 4     | 0        | 0.0    | 0   | 35.0 | 0     | 0     | -0.9842874464309276 | 1        |

Now, I'll split up the `DataFrame` into two `np.array`s, one with the features, the other with the labels:

```python
features = df.drop(columns=['Survived']).values
labels = df.Survived.values
```

Add an $x_0 = 1$ column to the features array so everything looks clean:

```python
x_zero_column = np.zeros((features.shape[0], 1)) + 1
features = np.append(x_zero_column, features, axis=1)
```

Using the features and labels arrays, create a _design matrix_ $X$ and the _label vector_ $y$:

```python
X = np.asmatrix(features)
# y needs to be transposed from a row vector to a column vector
y = np.asmatrix(labels).T
```

The data is now ready to be used.

## Define Variables

Using $X$ and $y$:, it's time to define some variables that are important to the implmentation of the _cost function_ $J$:

```python
# m is the number of training samples
m = X.shape[0]
# n is the number of features, in this case we are not counting the x_0 column
n = X.shape[1] - 1
```

Let's define the parameter $\theta$ as a $n+1$-dimensional vector, initially filled with zeros:

```python
theta = np.asmatrix(np.zeros(n + 1)).T
```

And let's set a learning rate $\alpha$, in this case I just chose an arbitrary value:

```python
alpha = 0.001
```

It's important to choose the right $\alpha$, because a smaller value may make the model slower to converge, while a larger value might make the model never converge.

## Define Functions

### The Sigmoid Function

One of the most important equations needed for logistic regression is the sigmoid function, which looks like this:

{{< desmos url="dom0ljamlo" >}}

The equation for the sigmoid function is

$$
g(z) = \frac{1}{1+ e^{-z}}
$$

Thanks to numpy, it's very simple to define an element-wise vectorized sigmoid function, which will our code much more efficient:

```python
def sigmoid(z):
    t = np.exp(-z) + 1
    return np.divide(1, t)
```

### The Hypothesis Function

To generate a matrix of predictions using the parameter vector $\theta$, we define our hypothesis function $h_{\theta}(x)$ as follows:

$$
h_{\theta}(x) = g(X\theta)
$$

where $X$ is the design matrix.

But what does the output of this function mean? $h_{\theta}(x)$ is actually outputting the _probability_ that the output is 1.
Formally, this function gives you the probablility that $y=1$, given $x$, parameterized by $\theta$ (mathematically, $P(y=1|x;\theta)$).

In Python, we can define the hypothesis function similarly:

```python
def hypothesis(x):
    return sigmoid(x * theta)
```

### The Cost Function

In order for the logistic regression algorithm to _learn_, it must have some function to minimize. This function is called the _cost_ or _loss_ function.

For logistic regression, the cost function is defined as:

$$
J(\theta) = \frac{1}{m} \bigg(-y^T \log{h(x)}- (1-y^T)\log{(1-h(x))}\bigg)
$$

The Python code for this function came out to be too long to write out on one line, so the math is done on three separate lines.

**Note:** `cost` came out to be a 1x1 numpy matrix and was converted into a singular floating-point value at the end.

```python
def cost():
    hypo = hypothesis(X)
    part1 = -(y.T) * np.log(hypo)
    part2 = (1-(y.T)) * np.log(1 - hypo)
    cost = (1/m) * (part1 - part2)
    return cost[0,0]
```

### The Gradient Descent Function

The last (and probably most important) piece of this machine learning algorithm is the `gradient_descent_step` function, which calculates the gradient for $\theta$.

The update rule for $\theta$ is as follows:

$$
\theta := \theta - \frac{\alpha}{m}X^T(g(X\theta)-\vec{y})
$$

This is simple to implement in Python as a one-liner:

```python
def gradient_descent_step(theta):
    return theta - (alpha/m)*(X.T)*(hypothesis(X) - y)
```

With all the necessary functions implemented, it's time to actually learn the parameters $\theta$.

## Run the Learning Algorithm

To run the learning algorithm, let's create a loop in which `gradient_descent_step` is run every iteration:

```python
for i in range(1630000):
    theta = gradient_descent_step(theta)
```

I found experimentally that after 1.63 million iterations, the cost delta after each iteration of Gradient Descent is negligible.

After the loop was run, the cost was approximately `0.45085533814736584`.

Before we do anything else, let's save the optimal $\theta$ in a file:

```python
np.savetxt("theta.txt", theta)
```

Once saved, it can be loaded back like this:

```python
theta = np.asmatrix(np.loadtxt("theta.txt"))
theta = theta.T
```

## Run the Model on Test Data

### Create the Prediction Function

Using the `hypothesis(x)` function, let's define a function that outputs `1` if $P(y=1|x;\theta) ≥ 0.5$ or `0` otherwise:

```python
def predict(x):
    h = hypothesis(x)
    comp = (h >= 0.5)
    return comp.astype(int)
```

`predict(x)` runs predictions on a matrix element-wise and converts them into numerical binary values.

### Import the Test Data

Now, it's time to bring in the test data, preparing it like we did for the training data:

```python
test_df = pd.read_csv("../data/test.csv")
test_df = test_df.drop(columns=['Name', 'PassengerId', 'Ticket', 'Cabin'])
test_df.Pclass = test_df.Pclass.apply(normalize_ticket_class)
test_df.Sex = test_df.Sex.apply(sex_to_numerical)
test_df.Fare = normalize_fare(test_df.Fare)
test_df.Embarked = test_df.Embarked.apply(embarkation_to_numerical)
test_df.Age = test_df.Age.apply(de_nan_age)
```

Let's add in the $x_0$ column like before:

```python
test_X = test_df.values
x_zero_column_test = np.zeros((test_df.shape[0], 1)) + 1
test_X = np.append(x_zero_column_test, test_X, axis=1)
test_X = np.asmatrix(test_X)
```

### Generate Predictions

Using the `test_X` matrix, let's generate predictions and save them to a file:

```python
predictions = predict(test_X)
np.savetxt("predictions.txt", predictions)
```

### Prepare Submission For Kaggle

The `predictions.txt` file isn't in the format that Kaggle needs for submission. Let's put our predictions into a pandas `DataFrame` along with the `PassengerId` column:

```python
# Function to flatten nested lists
flatten = lambda l: [item for sublist in l for item in sublist]
# Temp DataFrame to get PassengerIds
temp_df = pd.read_csv("../data/test.csv")
submission_df = pd.DataFrame()
submission_df["PassengerId"] = temp_df["PassengerId"]
submission_df["Survived"] = pd.Series(flatten(predictions.flatten().tolist()))
```

Let's export to CSV for upload to Kaggle:

```python
submission_df.to_csv("kaggle_submission.csv", index=False)
```

## Results

According to Kaggle's online judge, my model had an accuracy of 74.641% on the test dataset, which is not great by machine learning standards, but was nevertheless exciting for me, since I implemented the model (almost) from scratch.

This was an improvement over my submission from last year, which was a linear regression algorithm using `scikit-learn`.

![Kaggle leaderboard screenshot](kaggle-score-logistic.png)

<center>
  <em>
    <strong>Figure 2:</strong> Pics or it didn't happen
  </em>
</center>

## Conclusion

This project was also a chance to dip my toes into creating Machine Learning models for use on real data, taking the theory and applying it to a real-world problem.

Based on my results, I can also conclude that feature engineering (such as using polynomial features) may be needed to achieve a higher accuracy. Additionally, using something like neural networks may be a better option to achieve higher accuracy, due to their ability to learn complex nonlinear hypotheses.

If you are a machine learning expert and have suggestions on how I could improve the accuracy of my toy model, I would love to hear them! Comment on the Hacker News thread linked below or email me at the address below.

[Discuss on Hacker News](https://news.ycombinator.com/item?id=17692378)
